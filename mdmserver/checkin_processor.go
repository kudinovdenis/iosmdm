package mdmserver

import (
	"howett.net/plist"
	"io/ioutil"
	"log"
	"net/http"
)

type CheckinProcessorI interface {
	ProcessCheckinRequest(r *http.Request) error
}

// CheckinRequest
//web_1    | <?xml version="1.0" encoding="UTF-8"?>
//web_1    | <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
//web_1    | <plist version="1.0">
//web_1    | <dict>
//web_1    | 	<key>BuildVersion</key>
//web_1    | 	<string>19A404</string>
//web_1    | 	<key>IMEI</key>
//web_1    | 	<string>35 717185 037376 0</string>
//web_1    | 	<key>MEID</key>
//web_1    | 	<string>35717185037376</string>
//web_1    | 	<key>MessageType</key>
//web_1    | 	<string>Authenticate</string>
//web_1    | 	<key>OSVersion</key>
//web_1    | 	<string>15.0.2</string>
//web_1    | 	<key>ProductName</key>
//web_1    | 	<string>iPhone13,3</string>
//web_1    | 	<key>SerialNumber</key>
//web_1    | 	<string>F17DVFSW0D8Y</string>
//web_1    | 	<key>Topic</key>
//web_1    | 	<string>com.apple.mgmt.External.0336a028-7632-451b-9c5f-cf9ef37ccd1f</string>
//web_1    | 	<key>UDID</key>
//web_1    | 	<string>00008101-001169443A22001E</string>
//web_1    | </dict>
//web_1    | </plist>/
type CheckinRequest struct {
	BuildVersion 	string
	IMEI 			string
	MEID 			string
	MessageType 	string
	OSVersion 		string
	ProductName 	string
	SerialNumber 	string
	Topic 			string
	UDID 			string
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
	return nil
}
