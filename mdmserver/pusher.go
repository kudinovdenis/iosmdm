package mdmserver

import (
	"encoding/hex"
	"log"

	"github.com/sideshow/apns2"
	"github.com/sideshow/apns2/certificate"
	"github.com/sideshow/apns2/payload"
)

type PusherI interface {
	SendMDMPush(device Device)
}

type PusherImpl struct {
}

func NewPusher() *PusherImpl {
	return &PusherImpl{}
}

func (pusher *PusherImpl) SendMDMPush(device Device) {
	log.Printf("Sending test push to device: %+s", device.UDID)
	cert, err := certificate.FromPemFile("mdmserver/PushCert.pem", "")
	if err != nil {
		log.Fatal("Cert Error:", err)
	}

	notification := &apns2.Notification{}
	notification.DeviceToken = hex.EncodeToString(device.PushToken)
	log.Printf("Device token: %+s", hex.EncodeToString(device.PushToken))
	notification.Topic = device.Topic
	notification.Payload = payload.NewPayload().Mdm(device.PushMagic)

	client := apns2.NewClient(cert).Production()
	res, err := client.Push(notification)

	if err != nil {
		log.Fatal("Error:", err)
	}

	log.Printf("%v %v %v\n", res.StatusCode, res.ApnsID, res.Reason)
}
