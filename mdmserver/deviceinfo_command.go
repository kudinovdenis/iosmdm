package mdmserver

import "github.com/google/uuid"

type DeviceInformationCommand struct {
	CommandUUID string
	Command     DeviceInformationCommandBody
}

type DeviceInformationCommandBody struct {
	RequestType string // DeviceInformation
	Queries     []string
}

type QueryResponses struct {
	CarrierSettingsVersion string // Version of the carrier settings.
	CurrentCarrierNetwork  string // Name of the current carrier network
	CurrentMCC             string // Current Mobile Country Code (numeric string)
	CurrentMNC             string // Current Mobile Network Code (numeric string)
	ICCID                  string // The ICCID value.
	IMEI                   string // The device IMEI number.
	IsDataPreferred        bool   // If true, this subscription is preferred for data.
	IsVoicePreferred       bool   // If true, this subscription is preferred for voice.
	Label                  string // The label of this subscription.
	LabelID                string // The UUID identifying this subscription (as a string)
	MEID                   string // The device MEID number.
	PhoneNumber            string // Raw phone number without punctuation, including country code
	Slot                   string // Description of the slot containing the SIM representing this subscription.
}

type DeviceInformationCommandResponse struct {
	CommandUUID    string
	QueryResponses QueryResponses
}

func (command DeviceInformationCommand) UUID() string {
	return command.CommandUUID
}

func NewDeviceInformationCommand() DeviceInformationCommand {
	queries := []string{
		"CarrierSettingsVersion",
		"CurrentCarrierNetwork",
		"CurrentMCC",
		"CurrentMNC",
		"ICCID",
		"IMEI",
		"IsDataPreferred",
		"IsVoicePreferred",
		"Label",
		"LabelID",
		"MEID",
		"PhoneNumber",
		"Slot",
	}
	return DeviceInformationCommand{CommandUUID: uuid.New().String(), Command: DeviceInformationCommandBody{RequestType: "DeviceInformation", Queries: queries}}
}
