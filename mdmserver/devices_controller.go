package mdmserver

import (
	"log"
	"time"
)

type Device struct {
	UDID               string
	LastConnectionDate time.Time
}

type DevicesControllerI interface {
	AddDevice(device Device)
	AllDevices() []Device
}

type DevicesController struct {
	devices map[string]Device
}

func (deviceController *DevicesController) AddDevice(device Device) {
	log.Printf("Adding device: %+v", device)
	deviceController.devices[device.UDID] = device
}

func (deviceController DevicesController) AllDevices() []Device {
	devices := []Device{}
	for _, device := range deviceController.devices {
		devices = append(devices, device)
	}
	return devices
}
