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

type QueryResponseServiceSubscriptions struct {
	// Service subscription properties
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

type QueryResponses struct {
	// Network information
	ICCID                    string   // The ICC identifier for the installed SIM card. skip (duplicate)
	BluetoothMAC             string   // Bluetooth MAC address.
	WiFiMAC                  string   // Wi-Fi MAC address.
	EthernetMACs             []string // Ethernet MAC addresses. Availability: Available in iOS 7 and later.
	EthernetMAC              string   // Primary Ethernet MAC address. Availability: Available in macOS v10.7 and later.
	CurrentCarrierNetwork    string   // Name of the current carrier network. (duplicate)
	SIMCarrierNetwork        string   // Name of the home carrier network. (Replaces SIMCarrierNetwork.)
	SubscriberCarrierNetwork string   // Name of the home carrier network. (Replaces SIMCarrierNetwork.) Availability: Available in iOS 5.0 and later.
	CarrierSettingsVersion   string   // Version of the currently-installed carrier settings file. (duplicate)
	PhoneNumber              string   // Raw phone number without punctuation, including country code. (duplicate)
	VoiceRoamingEnabled      bool     // The current setting of the Voice Roaming setting. This is only available on certain carriers. Availability: iOS 5.0 and later.
	DataRoamingEnabled       bool     // The current setting of the Data Roaming setting.
	IsRoaming                bool     // Returns whether the device is currently roaming. Availability: Available in iOS 4.2 and later. See note below.
	PersonalHotspotEnabled   bool     // True if the Personal Hotspot feature is currently turned on. This value is available only with certain carriers. Availability: iOS 7.0 and later.
	SubscriberMCC            string   // Home Mobile Country Code (numeric string). Availability: Available in iOS 4.2.6 and later.
	SubscriberMNC            string   // Home Mobile Network Code (numeric string). Availability: Available in iOS 4.2.6 and later.
	CurrentMCC               string   // Current Mobile Country Code (numeric string). (duplicate)
	CurrentMNC               string   // Current Mobile Network Code (numeric string). (duplicate)
	ServiceSubscriptions     []QueryResponseServiceSubscriptions
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
		// Network information
		"ICCID",
		"BluetoothMAC",
		"WiFiMAC",
		"EthernetMACs",
		"EthernetMAC",
		"CurrentCarrierNetwork",
		"SIMCarrierNetwork",
		"SubscriberCarrierNetwork",
		"CarrierSettingsVersion",
		"PhoneNumber",
		"VoiceRoamingEnabled",
		"DataRoamingEnabled",
		"IsRoaming",
		"PersonalHotspotEnabled",
		"SubscriberMCC",
		"SubscriberMNC",
		"CurrentMCC",
		"CurrentMNC",
		"ServiceSubscriptions",
	}
	return DeviceInformationCommand{CommandUUID: uuid.New().String(), Command: DeviceInformationCommandBody{RequestType: "DeviceInformation", Queries: queries}}
}
