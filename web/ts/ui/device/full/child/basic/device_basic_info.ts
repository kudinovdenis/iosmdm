import { Device } from "../../../../../models/models";
import { TableControl } from "../../../../helpers/table";

export class DeviceBasicInfoControl {

    element: JQuery<HTMLElement>;

    constructor(device: Device) {
       this.element = $('<div>')
       
       const table = new TableControl();
       table.setHeaders(["Parameter", "Value"]);
       table.appendRow(["Identifier", device.UDID]);
       table.appendRow(["Push token", device.PushToken]);
       table.appendRow(["Push magic", device.PushMagic]);
       table.appendRow(["Topic", device.Topic]);
       table.appendRow(["CheckedOut", device.CheckedOut ? "true" : "false"]);

       this.element.append(table.element);
    }

}