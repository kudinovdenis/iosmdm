package mdmserver

import (
	"github.com/google/uuid"
)

type InstallProfileCommandBody struct {
	RequestType string // InstallProfile
	Payload     []byte
}

type InstallProfileCommand struct {
	CommandUUID string
	Command     InstallProfileCommandBody
}

type InstallProfileCommandResponse struct {
	CommandUUID string
}

func (command InstallProfileCommand) UUID() string {
	return command.CommandUUID
}

func NewInstallProfileCommand(payload []byte) InstallProfileCommand {
	return InstallProfileCommand{CommandUUID: uuid.New().String(), Command: InstallProfileCommandBody{RequestType: "InstallProfile", Payload: payload}}
}
