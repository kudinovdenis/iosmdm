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

type DeviceInformationCommandResponse struct {
	CommandUUID    string
	QueryResponses map[string]string
}

func (command DeviceInformationCommand) UUID() string {
	return command.CommandUUID
}

func NewDeviceInformationCommand() DeviceInformationCommand {
	return DeviceInformationCommand{CommandUUID: uuid.New().String(), Command: DeviceInformationCommandBody{RequestType: "DeviceInformation", Queries: []string{"DeviceName"}}}
}
