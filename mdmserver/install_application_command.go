package mdmserver

import "github.com/google/uuid"

type InstallApplicationCommandBody struct {
	RequestType           string // InstallApplication
	ITunesStoreID         int    `plist:"iTunesStoreID"`
	ManagementFlags       int
	ChangeManagementState string
}

type InstallApplicationCommand struct {
	CommandUUID string
	Command     InstallApplicationCommandBody
}

type InstallApplicationCommandResponse struct {
	CommandUUID string
	Identifier  string // The appʼs identifier (Bundle ID)
	State       string // The appʼs installation state. If the state is NeedsRedemption, the server needs to send a redemption code to complete the app installation. If it is PromptingForUpdate, the process is waiting for the user to approve an app update.
}

func (command InstallApplicationCommand) UUID() string {
	return command.CommandUUID
}

func NewInstallApplicationCommand(iTunesStoreID int) InstallApplicationCommand {
	return InstallApplicationCommand{CommandUUID: uuid.New().String(), Command: InstallApplicationCommandBody{RequestType: "InstallApplication", ITunesStoreID: iTunesStoreID, ManagementFlags: 0, ChangeManagementState: "Managed"}}
}
