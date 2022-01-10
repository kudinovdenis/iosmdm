package mdmserver

import "github.com/google/uuid"

type ProfileListCommandBody struct {
	RequestType string // ProfileList
}

type ProfileListCommand struct {
	CommandUUID string
	Command     ProfileListCommandBody
}

type ProfilePayloadContent struct {
	PayloadDisplayName  string
	PayloadIdentifier   string
	PayloadType         string
	PayloadVersion      int
	PayloadOrganization string
	PayloadDescription  string
	PayloadUUID         string
}

type Profile struct {
	HasRemovalPasscode       bool
	IsEncrypted              bool
	IsManaged                bool
	PayloadContent           []ProfilePayloadContent
	PayloadDisplayName       string
	PayloadIdentifier        string
	PayloadRemovalDisallowed bool
	PayloadUUID              string
	PayloadOrganization      string
}

type ProfileListCommandResponse struct {
	CommandUUID string
	ProfileList []Profile
}

func (command ProfileListCommand) UUID() string {
	return command.CommandUUID
}

func NewProfileListCommand() ProfileListCommand {
	return ProfileListCommand{CommandUUID: uuid.New().String(), Command: ProfileListCommandBody{RequestType: "ProfileList"}}
}
