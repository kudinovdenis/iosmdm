package mdmserver

import (
	"howett.net/plist"
	"log"
)

var checkinPlistString = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>BuildVersion</key>
        <string>19A404</string>
        <key>IMEI</key>
        <string>35 717185 037376 0</string>
        <key>MEID</key>
        <string>35717185037376</string>
        <key>MessageType</key>
        <string>Authenticate</string>
        <key>OSVersion</key>
        <string>15.0.2</string>
        <key>ProductName</key>
        <string>iPhone13,3</string>
        <key>SerialNumber</key>
        <string>F17DVFSW0D8Y</string>
        <key>Topic</key>
        <string>com.apple.mgmt.External.0336a028-7632-451b-9c5f-cf9ef37ccd1f</string>
        <key>UDID</key>
        <string>00008101-001169443A22001E</string>
    </dict>
</plist>`

type CheckinPlistContentDict struct {
	BuildVersion string
	IMEI string
	MEID string
	MessageType string
	OSVersion string
	ProductName string
	SerialNumber string
	Topic string
	UDID string
}

func TestParsing() {
	plistRawBytes := []byte(checkinPlistString)
	plistParser := PlistParser{}

	checkinStruct := CheckinPlistContentDict{}
	plistParser.Unmarshall(plistRawBytes, &checkinStruct)
	log.Printf("Unmarshalled: %+v", checkinStruct)
}

func TestParsing3PC() {
	plistRawBytes := []byte(checkinPlistString)
	checkinStruct := CheckinPlistContentDict{}

	plist.Unmarshal(plistRawBytes, &checkinStruct)
	log.Printf("Unmarshalled: %+v", checkinStruct)
}