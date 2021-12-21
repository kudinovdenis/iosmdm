package mdmserver

import (
	"encoding/hex"
	"log"
	"time"

	"github.com/sideshow/apns2"
	"github.com/sideshow/apns2/certificate"
	"github.com/sideshow/apns2/payload"
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
}

type DevicesController struct {
	devices map[string]Device
}

func (devicesController *DevicesController) AddDevice(device Device) {
	log.Printf("Adding device: %+v", device)
	devicesController.devices[device.UDID] = device
}

func (devicesController *DevicesController) UpdateDevice(device Device) {
	log.Printf("Updating device: %+v", device)
	devicesController.devices[device.UDID] = device

	devicesController.sendTestPush(device)
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

func (devicesController *DevicesController) sendTestPush(device Device) {
	log.Printf("Sending test push to device: %+s", device.UDID)
	cert, err := certificate.FromPemFile("mdmserver/PushCert.pem", "")
	if err != nil {
		log.Fatal("Cert Error:", err)
	}

	notification := &apns2.Notification{}
	notification.DeviceToken = hex.EncodeToString(device.PushToken)
	log.Printf("Device token: %+s", hex.EncodeToString(device.PushToken))
	notification.Topic = device.Topic
	notification.Payload = payload.NewPayload().Mdm(device.PushMagic)

	client := apns2.NewClient(cert).Production()
	res, err := client.Push(notification)

	if err != nil {
		log.Fatal("Error:", err)
	}

	log.Printf("%v %v %v\n", res.StatusCode, res.ApnsID, res.Reason)
}

func NewDevicesController() *DevicesController {
	return &DevicesController{devices: make(map[string]Device)}
}
