package mdmserver

import "github.com/google/uuid"

type ProfileListCommandBody struct {
	RequestType string // ProfileList
}

type ProfileListCommand struct {
	CommandUUID string
	Command     ProfileListCommandBody
}

type Profile struct {
	PayloadDisplayName string
	PayloadIdentifier  string
}

type ProfileListCommandResponse struct {
	CommandUUID string
	ProfileList Profile
}

func (command ProfileListCommand) UUID() string {
	return command.CommandUUID
}

func NewProfileListCommand() ProfileListCommand {
	return ProfileListCommand{CommandUUID: uuid.New().String(), Command: ProfileListCommandBody{RequestType: "ProfileList"}}
}
