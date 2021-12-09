package mdmserver

import (
	"log"
	"net/http"
)

type ServerI interface {
	ProcessRequest(w http.ResponseWriter, r *http.Request)
}

type ServerImpl struct {
	CheckinProcessor CheckinProcessorI
}

func (mdmServer *ServerImpl) ProcessRequest(w http.ResponseWriter, r *http.Request) {
	contentType := r.Header.Get("Content-Type")
	switch contentType {
	case "application/x-apple-aspen-mdm-checkin":
		log.Print("This is checkin message.")
		mdmServer.CheckinProcessor.ProcessCheckinRequest(r)
	default:
		log.Print("Unknown message")
	}
}

func NewServer(checkinProcessor CheckinProcessorI) ServerI {
	return &ServerImpl{CheckinProcessor: checkinProcessor}
}
