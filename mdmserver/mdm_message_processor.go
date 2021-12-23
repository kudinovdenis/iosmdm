package mdmserver

import (
	"io/ioutil"
	"log"
	"net/http"

	"howett.net/plist"
)

type MdmMessageProcessorI interface {
	ProcessRequest(r *http.Request) error
}

type MdmMessageProcessorImpl struct {
	devicesController DevicesControllerI
}

func NewMdmMessageProcessor(devicesController DevicesControllerI) *MdmMessageProcessorImpl {
	return &MdmMessageProcessorImpl{devicesController: devicesController}
}

type MdmMessage struct {
	UDID        string //  uuid of device
	CommandUUID string
	Status      string
}

func (processor MdmMessageProcessorImpl) ProcessRequest(r *http.Request) error {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		return err
	}

	mdmMessage := MdmMessage{}
	plist.Unmarshal(body, &mdmMessage)

	log.Printf("MdmMessage: %+v", mdmMessage)

	// Fixme:
	r.Response.StatusCode = http.StatusOK

	return nil
}
