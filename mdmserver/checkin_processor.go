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
	}

	return nil
}

func (processor CheckinProcessorImpl) processAuthenticateMessage(request CheckinRequest) error {
	log.Printf("Device registered: %+s", request.UDID)
	device := Device{UDID: request.UDID, LastConnectionDate: time.Now()}
	processor.devicesController.AddDevice(device)
	return nil
}

func (processor CheckinProcessorImpl) processTokenUpdateMessage(request CheckinRequest) error {
	log.Printf("Device checked in: %+s", request.UDID)
	device := Device{UDID: request.UDID, LastConnectionDate: time.Now(), PushToken: string(request.Token), PushMagic: request.PushMagic}
	processor.devicesController.UpdateDevice(device)
	return nil
}
