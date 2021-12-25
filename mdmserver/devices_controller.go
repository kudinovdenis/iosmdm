package mdmserver

import (
	"log"
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

	InstalledApplicationsList(device Device, completion func(installedApplicationList []InstalledApplication))
}

type DevicesController struct {
	devices           map[string]Device
	commandsProcessor CommandsProcessorI
	pusher            PusherI
}

func (devicesController *DevicesController) AddDevice(device Device) {
	log.Printf("Adding device: %+v", device)
	devicesController.devices[device.UDID] = device
}

func (devicesController *DevicesController) UpdateDevice(device Device) {
	log.Printf("Updating device: %+v", device)
	devicesController.devices[device.UDID] = device
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

func (devicesController DevicesController) InstalledApplicationsList(device Device, completion func(installedApplicationList []InstalledApplication)) {
	log.Printf("Get installed applications list for device: %+s", device.UDID)
	command := NewInstalledApplicationsCommand()
	devicesController.commandsProcessor.QueueCommand(device, command, func(command Command, response CommandResponse) {
		log.Print("Completion called (devices controller)")
		log.Printf("Command: %+v", command)
		log.Printf("Response: %+v", response)
		completion(response.(InstalledApplicationsCommandResponse).InstalledApplicationList)
	})
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

func NewDevicesController() *DevicesController {
	pusher := NewPusher()
	commandsProcessor := NewCommandsProcessor(pusher)
	return &DevicesController{devices: make(map[string]Device), commandsProcessor: commandsProcessor, pusher: pusher}
}
