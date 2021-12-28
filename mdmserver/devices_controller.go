package mdmserver

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"
)

type Device struct {
	UDID               string
	LastConnectionDate time.Time
	PushMagic          string
	PushToken          []byte
	Topic              string
	CheckedOut         bool
}

type DevicesControllerI interface {
	AddDevice(device Device)
	UpdateDevice(device Device)
	AllDevices() []Device
	DeviceWithUDID(udid string) *Device
	CheckoutDevice(device Device)

	NextCommandForDevice(device Device) *Command
	DeviceDidFinishCommand(device Device, commandUUID string, response []byte)

	InstalledApplicationsList(device Device) chan []InstalledApplication
	DeviceInfo(device Device) chan QueryResponses
}

type DevicesController struct {
	devices           map[string]Device
	commandsProcessor CommandsProcessorI
	pusher            PusherI
}

func (devicesController *DevicesController) AddDevice(device Device) {
	log.Printf("Adding device: %+v", device)
	devicesController.devices[device.UDID] = device

	// save devices
	devicesController.saveDevices(devicesController.devices)
}

func (devicesController *DevicesController) UpdateDevice(device Device) {
	log.Printf("Updating device: %+v", device)
	device.LastConnectionDate = time.Now()
	devicesController.devices[device.UDID] = device

	// save devices
	devicesController.saveDevices(devicesController.devices)
}

func (devicesController DevicesController) AllDevices() []Device {
	devices := []Device{}
	for _, device := range devicesController.devices {
		devices = append(devices, device)
	}
	return devices
}

func (devicesController DevicesController) DeviceWithUDID(udid string) *Device {
	device := devicesController.devices[udid]
	return &device
}

func (devicesController DevicesController) CheckoutDevice(device Device) {
	log.Printf("Checking out device: %+s", device.UDID)
	currentDevice, exists := devicesController.devices[device.UDID]

	if !exists {
		log.Printf("Device does not exists: %+s", device.UDID)
		return
	}

	currentDevice.CheckedOut = true
	devicesController.devices[device.UDID] = currentDevice

	log.Printf("Checked out device: %+s", device.UDID)
}

func (devicesController DevicesController) InstalledApplicationsList(device Device) chan []InstalledApplication {
	log.Printf("Get installed applications list for device: %+s", device.UDID)
	applicationsList := make(chan []InstalledApplication)
	command := NewInstalledApplicationsCommand()
	devicesController.commandsProcessor.QueueCommand(device, command, func(command Command, response CommandResponse) {
		log.Print("Completion called (devices controller)")
		log.Printf("Command: %+v", command)
		log.Printf("Response: %+v", response)
		applicationsList <- response.(InstalledApplicationsCommandResponse).InstalledApplicationList
	})
	return applicationsList
}

func (devicesController DevicesController) DeviceInfo(device Device) chan QueryResponses {
	log.Printf("Get device info for device: %+s", device.UDID)
	deviceInfo := make(chan QueryResponses)
	command := NewDeviceInformationCommand()
	devicesController.commandsProcessor.QueueCommand(device, command, func(command Command, response CommandResponse) {
		log.Print("Completion called (devices controller)")
		log.Printf("Command: %+v", command)
		log.Printf("Response: %+v", response)
		deviceInfo <- response.(DeviceInformationCommandResponse).QueryResponses
	})
	return deviceInfo
}

func (devicesController DevicesController) NextCommandForDevice(device Device) *Command {
	log.Printf("Lookup for next available command for device %+s", device.UDID)
	nextCommand := devicesController.commandsProcessor.NextCommandForDevice(device)
	if nextCommand != nil {
		log.Printf("Found next command: %+v", *nextCommand)
	} else {
		log.Print("Next command not found")
	}
	return nextCommand
}

func (devicesController DevicesController) DeviceDidFinishCommand(device Device, commandUUID string, response []byte) {
	log.Printf("Device %+s did finish command %+s with response %+v", device.UDID, commandUUID, response)
	devicesController.commandsProcessor.DidFinishCommand(commandUUID, response)
}

// MARK: Private methods

func (devicesController DevicesController) saveDevices(devices map[string]Device) {
	filename := "devices.json"
	filepath := fmt.Sprintf("/var/persist/%+s", filename)

	log.Printf("Saving devices to persistent storage: %+s", filepath)

	// open input file
	file, err := os.OpenFile(filepath, os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		log.Printf("Error saving %+s to disk: %+s", filepath, err)
		return
	}

	// close file on exit and check for its returned error
	defer func() {
		if err := file.Close(); err != nil {
			log.Printf("Error saving %+s to disk: %+s", filepath, err)
		}
	}()

	if err = os.Truncate(filepath, 0); err != nil {
		log.Printf("Error saving %+s to disk: %+s", filepath, err)
		return
	}

	jsonBytes, err := json.Marshal(devices)

	if err != nil {
		log.Printf("Error saving %+s to disk: %+s", filepath, err)
		return
	}

	numberofBytes, err := file.Write(jsonBytes)

	if numberofBytes == 0 {
		log.Printf("Error saving %+s to disk: %+s", filepath, err)
		return
	}

	if err != nil {
		log.Printf("Error saving %+s to disk: %+s", filepath, err)
		return
	}

	log.Printf("Saved devices to persistent storage: %+s", filepath)
}

func (devicesController DevicesController) loadDevices() map[string]Device {
	filename := "devices.json"
	filepath := fmt.Sprintf("/var/persist/%+s", filename)

	file, err := os.ReadFile(filepath)

	if err != nil {
		log.Printf("Error reading %+s from disk: %+s", filepath, err)
		return make(map[string]Device)
	}

	var devices map[string]Device

	if err = json.Unmarshal(file, &devices); err != nil {
		log.Printf("Error reading %+s from disk: %+s", filepath, err)
		return make(map[string]Device)
	}

	return devices
}

// MARK: Factory

func NewDevicesController() *DevicesController {
	pusher := NewPusher()
	commandsProcessor := NewCommandsProcessor(pusher)
	devicesController := DevicesController{devices: make(map[string]Device), commandsProcessor: commandsProcessor, pusher: pusher}
	devicesController.devices = devicesController.loadDevices()
	return &devicesController
}
