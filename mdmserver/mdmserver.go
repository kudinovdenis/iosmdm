package mdmserver

import (
	"log"
	"net/http"
	"strings"
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
	if strings.Contains(contentType, "application/x-apple-aspen-mdm-checkin") {
		log.Print("Received checkin message.")
		mdmServer.CheckinProcessor.ProcessCheckinRequest(r)
	} else if strings.Contains(contentType, "application/x-apple-aspen-mdm") {
		log.Print("Received MDM Message from device.")
		mdmServer.MdmMessageProcessor.ProcessRequest(w, r)
	} else {
		log.Print("Unknown message")
	}
}

func NewServer(checkinProcessor CheckinProcessorI, mdmMessageProcessor MdmMessageProcessorI) ServerI {
	return &ServerImpl{CheckinProcessor: checkinProcessor, MdmMessageProcessor: mdmMessageProcessor}
}
