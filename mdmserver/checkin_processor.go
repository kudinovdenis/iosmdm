package mdmserver

import (
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"howett.net/plist"
)

type CheckinProcessorI interface {
	ProcessCheckinRequest(r *http.Request) error
}

type CheckinRequest struct {
	MessageType string
	Topic       string
	UDID        string

	// Authenticate
	BuildVersion string
	IMEI         string
	MEID         string
	OSVersion    string
	ProductName  string
	SerialNumber string

	// TokenUpdate
	Token       []byte
	PushMagic   string
	UnlockToken []byte
}

type CheckinProcessorImpl struct {
	devicesController DevicesControllerI
}

func NewProcessor(devicesController DevicesControllerI) CheckinProcessorI {
	return CheckinProcessorImpl{devicesController: devicesController}
}

func (processor CheckinProcessorImpl) ProcessCheckinRequest(r *http.Request) error {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		return err
	}

	checkinRequest := CheckinRequest{}
	plist.Unmarshal(body, &checkinRequest)

	log.Printf("CheckinRequest: %+v", checkinRequest)

	if checkinRequest.MessageType == "Authenticate" {
		return processor.processAuthenticateMessage(checkinRequest)
	} else if checkinRequest.MessageType == "TokenUpdate" {
		return processor.processTokenUpdateMessage(checkinRequest)
	} else if checkinRequest.MessageType == "CheckOut" {
		return processor.processCheckoutMessage(checkinRequest)
	}

	return nil
}

func (processor CheckinProcessorImpl) processAuthenticateMessage(request CheckinRequest) error {
	log.Printf("Device registered: %+s", request.UDID)
	device := Device{UDID: request.UDID, LastConnectionDate: time.Now(), CheckedOut: false}
	processor.devicesController.AddDevice(device)
	return nil
}

func (processor CheckinProcessorImpl) processTokenUpdateMessage(request CheckinRequest) error {
	log.Printf("Device checked in: %+s", request.UDID)
	device := Device{UDID: request.UDID, LastConnectionDate: time.Now(), PushToken: request.Token, PushMagic: request.PushMagic, Topic: request.Topic}
	processor.devicesController.UpdateDevice(device)
	return nil
}

func (processor CheckinProcessorImpl) processCheckoutMessage(request CheckinRequest) error {
	log.Printf("Device checked out: %+s", request.UDID)
	device := processor.devicesController.DeviceWithUDID(request.UDID)

	if device == nil {
		log.Printf("Device does not exists: %+s", request.UDID)
		return nil
	}

	processor.devicesController.CheckoutDevice(*device)
	return nil
}
