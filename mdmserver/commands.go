package mdmserver

import (
	"log"

	"github.com/google/uuid"
)

type Command interface {
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
