package mdmserver

import (
	"log"

	"github.com/google/uuid"
	"howett.net/plist"
)

type Command interface {
	UUID() string
}

type CommandResponse interface {
}

// RequestType: InstalledApplicationList
type InstalledApplicationsCommandBody struct {
	RequestType string
}

type InstalledApplicationsCommand struct {
	CommandUUID string
	Command     InstalledApplicationsCommandBody
}

func (command InstalledApplicationsCommand) UUID() string {
	return command.CommandUUID
}

func NewInstalledApplicationsCommand() InstalledApplicationsCommand {
	return InstalledApplicationsCommand{CommandUUID: uuid.New().String(), Command: InstalledApplicationsCommandBody{RequestType: "InstalledApplicationList"}}
}

type InstalledApplication struct {
	AdHocCodeSigned           bool
	AppStoreVendable          bool
	BetaApp                   bool
	BundleSize                int
	DeviceBasedVPP            bool
	DynamicSize               int
	ExternalVersionIdentifier int
	HasUpdateAvailable        bool
	Identifier                string
	Installing                bool
	IsValidated               bool
	Name                      string
	ShortVersion              string
	Version                   string
}

type InstalledApplicationsCommandResponse struct {
	CommandUUID              string
	InstalledApplicationList []InstalledApplication
}

// Service implementation

type CommandWithCallback struct {
	command  Command
	callback func(command Command, response CommandResponse)
}

type CommandsProcessorI interface {
	QueueCommand(device Device, command Command, completion func(command Command, response CommandResponse))
	NextCommandForDevice(device Device) *Command
	DidFinishCommand(commandUUID string, responseBody []byte)
	ResetCommands(device Device)
}

type CommandsProcessorImpl struct {
	pusher              PusherI
	commandsForDeviceId map[string][]*CommandWithCallback
}

func NewCommandsProcessor(pusher PusherI) CommandsProcessorI {
	return CommandsProcessorImpl{pusher: pusher, commandsForDeviceId: make(map[string][]*CommandWithCallback)}
}

func (processor CommandsProcessorImpl) QueueCommand(device Device, command Command, completion func(command Command, response CommandResponse)) {
	log.Printf("Queue command: %+v To device: %+s", command, device.UDID)
	processor.pusher.SendMDMPush(device)

	commandWithCallback := &CommandWithCallback{command: command, callback: completion}
	commandsForDevice, exists := processor.commandsForDeviceId[device.UDID]

	if !exists {
		var newCommandsList []*CommandWithCallback
		newCommandsList = append(newCommandsList, commandWithCallback)
		processor.commandsForDeviceId[device.UDID] = newCommandsList
	} else {
		// exists
		var newCommandsList = commandsForDevice
		newCommandsList = append(newCommandsList, commandWithCallback)
		processor.commandsForDeviceId[device.UDID] = newCommandsList
	}

	log.Printf("Push sent. Command: %+v To device: %+s", command, device.UDID)
}

func (processor CommandsProcessorImpl) NextCommandForDevice(device Device) *Command {
	log.Printf("Searching for next command for device: %+s", device.UDID)
	log.Printf("Current queue: %+v", processor.commandsForDeviceId)

	availableCommands, exists := processor.commandsForDeviceId[device.UDID]

	if !exists {
		log.Printf("Not found next command for device: %+s", device.UDID)
		return nil
	}

	if len(availableCommands) == 0 {
		log.Printf("Not found next command for device: %+s", device.UDID)
		return nil
	}

	firstAvailableCommand := availableCommands[0]
	log.Printf("Found next command for device: %+v", firstAvailableCommand)

	return &firstAvailableCommand.command
}

func (processor CommandsProcessorImpl) DidFinishCommand(commandUUID string, responseBody []byte) {
	log.Printf("Looking for command with UUID: %+s", commandUUID)
	commandWithCallback := processor.commandWithUUID(commandUUID)

	if commandWithCallback == nil {
		log.Printf("Not found command with UUID: %+s", commandUUID)
		return
	}

	log.Printf("Found command with UUID: %+s. Calling callback", commandUUID)

	switch commandWithCallback.command.(type) {
	case InstalledApplicationsCommand:
		log.Print("Decoding InstalledApplicationsCommand")
		var response InstalledApplicationsCommandResponse
		_, err := plist.Unmarshal(responseBody, &response)
		if err != nil {
			log.Print("Unable to decode answer")
			return
		}
		callback := commandWithCallback.callback
		log.Printf("Calling callback for InstalledApplicationsCommand with %+v", response)
		callback(commandWithCallback.command, response)

	case DeviceInformationCommand:
		log.Print("Decoding DeviceInformationCommand")
		var response DeviceInformationCommandResponse
		_, err := plist.Unmarshal(responseBody, &response)
		if err != nil {
			log.Print("Unable to decode answer")
			return
		}
		callback := commandWithCallback.callback
		log.Printf("Calling callback for DeviceInformationCommand with %+v", response)
		callback(commandWithCallback.command, response)

	case InstallApplicationCommand:
		log.Print("Decoding InstallApplicationCommand")
		var response InstallApplicationCommandResponse
		_, err := plist.Unmarshal(responseBody, &response)
		if err != nil {
			log.Print("Unable to decode answer")
			return
		}
		callback := commandWithCallback.callback
		log.Printf("Calling callback for InstallApplicationCommand with %+v", response)
		callback(commandWithCallback.command, response)

	case ProfileListCommand:
		log.Print("Decoding ProfileListCommand")
		var response ProfileListCommandResponse
		_, err := plist.Unmarshal(responseBody, &response)
		if err != nil {
			log.Print("Unable to decode answer")
			return
		}
		callback := commandWithCallback.callback
		log.Printf("Calling callback for ProfileListCommand with %+v", response)
		callback(commandWithCallback.command, response)
	}

	// Remove this command from list
	processor.removeCommandWithUUID(commandUUID)
}

func (processor CommandsProcessorImpl) ResetCommands(device Device) {
	log.Printf("Resetting commands queue for device: %+s", device.UDID)
	processor.commandsForDeviceId[device.UDID] = make([]*CommandWithCallback, 0)
}

// MARK Private methods

func (processor CommandsProcessorImpl) commandWithUUID(uuid string) *CommandWithCallback {
	for _, commandsArray := range processor.commandsForDeviceId {
		for i := 0; i < len(commandsArray); i++ {
			command := commandsArray[i]
			if command.command.UUID() == uuid {
				return command
			}
		}
	}
	return nil
}

func (processor CommandsProcessorImpl) removeCommandWithUUID(uuid string) {
	log.Printf("Removing command: %+s", uuid)
	for deviceIdentifier, commandsArray := range processor.commandsForDeviceId {
		for i := 0; i < len(commandsArray); i++ {
			command := commandsArray[i]
			if command.command.UUID() == uuid {
				processor.commandsForDeviceId[deviceIdentifier] = remove(commandsArray, i)
				log.Printf("Removed command: %+s. New Queue: %+v", uuid, processor.commandsForDeviceId)
				return
			}
		}
	}
	log.Printf("Command not found: %+s", uuid)
}

func remove(slice []*CommandWithCallback, i int) []*CommandWithCallback {
	return append(slice[:i], slice[i+1:]...)
}
