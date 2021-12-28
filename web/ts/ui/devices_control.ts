import { DeviceControl } from "./device_control";

export class DevicesControl {

    element: JQuery<HTMLElement>
    deviceControls: DeviceControl[] = []
    row: JQuery<HTMLElement>

    constructor() {
        this.element = $("<div>").addClass("DevicesControl").addClass("container");
        this.row = $('<div>').addClass('row');

        this.element.append(this.row);
    }

    clear() {
        for (const deviceControl of this.deviceControls) {
            this.removeDeviceControl(deviceControl);
        }
    }

    appendDeviceControl(deviceControl: DeviceControl) {
        this.deviceControls.push(deviceControl);
        this.row.append(deviceControl.element);
    }

    removeDeviceControl(deviceControl: DeviceControl) {
        deviceControl.element.remove();
        const index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    }

}