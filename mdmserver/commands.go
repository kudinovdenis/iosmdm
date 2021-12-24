package mdmserver

import (
	"log"

	"github.com/google/uuid"
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
	Identifier string
}

type InstalledApplicationsCommandResponse struct {
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
	DidFinishCommand(commandUUID string, response CommandResponse)
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

	if len(availableCommands) != 1 {
		processor.commandsForDeviceId[device.UDID] = availableCommands[1:]
	} else {
		processor.commandsForDeviceId[device.UDID] = make([]*CommandWithCallback, 0)
	}
	log.Printf("Updated queue: %+v", processor.commandsForDeviceId)

	return &firstAvailableCommand.command
}

func (processor CommandsProcessorImpl) DidFinishCommand(commandUUID string, response CommandResponse) {
	log.Printf("Looking for command with UUID: %+s", commandUUID)
	commandWithCallback := processor.commandWithUUID(commandUUID)

	if commandWithCallback == nil {
		log.Printf("Not found command with UUID: %+s", commandUUID)
		return
	}

	log.Printf("Found command with UUID: %+s. Calling callback", commandUUID)

	callback := commandWithCallback.callback
	callback(commandWithCallback.command, response)
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
