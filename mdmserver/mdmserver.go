package mdmserver

import (
	"log"
	"net/http"
)

type ServerI interface {
	ProcessRequest(r *http.Request)
}

type ServerImpl struct {

}

func (mdmServer *ServerImpl) ProcessRequest(r *http.Request) {
	contentType := r.Header.Get("Content-Type")
	switch contentType {
	case "application/x-apple-aspen-mdm-checkin":
		log.Print("This is checkin message.")
		
	default:
		log.Print("Unknoen message")
	}
}

func NewServer() ServerI {
	return &ServerImpl{}
}