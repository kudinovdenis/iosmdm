package mdmserver

import (
	"log"
	"net/http"
)

type ServerI interface {
	ProcessRequest(w http.ResponseWriter, r *http.Request)
}

type ServerImpl struct {
	CheckinProcessor    CheckinProcessorI
	MdmMessageProcessor MdmMessageProcessorI
}

func (mdmServer *ServerImpl) ProcessRequest(w http.ResponseWriter, r *http.Request) {
	contentType := r.Header.Get("Content-Type")
	switch contentType {
	case "application/x-apple-aspen-mdm-checkin":
		log.Print("Received checkin message.")
		mdmServer.CheckinProcessor.ProcessCheckinRequest(r)

	case "application/x-apple-aspen-mdm":
		log.Print("Received MDM Message from device.")
		mdmServer.MdmMessageProcessor.ProcessRequest(r)

	default:
		log.Print("Unknown message")
	}
}

func NewServer(checkinProcessor CheckinProcessorI, mdmMessageProcessor MdmMessageProcessorI) ServerI {
	return &ServerImpl{CheckinProcessor: checkinProcessor, MdmMessageProcessor: mdmMessageProcessor}
}
