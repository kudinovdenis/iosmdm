package mdmserver

import (
	"io/ioutil"
	"log"
	"net/http"

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
	log.Printf("Device registered: %+v %+v %+v", request.ProductName, request.OSVersion, request.UDID)
	return nil
}

func (processor CheckinProcessorImpl) processTokenUpdateMessage(request CheckinRequest) error {
	log.Printf("Device updated token: %+v %+v %+v. New Token: %+v. Push magic: %+v. UnlockToken: %+v", request.ProductName, request.OSVersion, request.UDID, request.Token, request.PushMagic, request.UnlockToken)
	return nil
}
