package mdmserver

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"howett.net/plist"
)

type MdmMessageProcessorI interface {
	ProcessRequest(w http.ResponseWriter, r *http.Request) error
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

func (processor MdmMessageProcessorImpl) ProcessRequest(w http.ResponseWriter, r *http.Request) error {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		return err
	}

	mdmMessage := MdmMessage{}
	_, err = plist.Unmarshal(body, &mdmMessage)

	if err != nil {
		return err
	}

	log.Printf("MdmMessage: %+v", mdmMessage)

	if mdmMessage.Status == "Idle" {
		device := processor.devicesController.DeviceWithUDID(mdmMessage.UDID)

		if device == nil {
			return fmt.Errorf("no device with id %+s", mdmMessage.UDID)
		}

		nextCommand := processor.devicesController.NextCommandForDevice(*device)

		if nextCommand != nil {
			// TODO: Remove this log
			log.Printf("Debug: Next command %+v", *nextCommand)

			var encodedPlistBytes bytes.Buffer
			encoder := plist.NewEncoder(&encodedPlistBytes)
			encoder.Encode(*nextCommand)
			encodedPlistString := encodedPlistBytes.String()

			log.Printf("Command answer: %+s", encodedPlistString)

			w.WriteHeader(http.StatusOK)
			if err != nil {
				return err
			}

			w.Write(encodedPlistBytes.Bytes())
		} else {
			// TODO: Remove this log
			log.Printf("Debug: No next command %+v", *nextCommand)
			w.WriteHeader(http.StatusOK)
		}
	} else if mdmMessage.Status == "Acknowledged" {
		// Command is done
		device := processor.devicesController.DeviceWithUDID(mdmMessage.UDID)

		if device == nil {
			return fmt.Errorf("no device with id %+s", mdmMessage.UDID)
		}

		log.Print("Unhandled response !!!")

		processor.devicesController.DeviceDidFinishCommand(*device, mdmMessage.CommandUUID, InstalledApplicationsCommandResponse{})
	}

	return nil
}
