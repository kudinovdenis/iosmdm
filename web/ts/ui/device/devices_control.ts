import { DeviceControl } from "./device_control";

export class DevicesControl extends Div {

    deviceControls: DeviceControl[] = [];
    row: UIElement;

    constructor() {
        super();
        this.addClass("DevicesControl");
        this.addClass("container");
        this.row = new Div()
        this.row.addClass('row');

        this.append(this.row);
    }

    clear() {
        for (const deviceControl of this.deviceControls) {
            this.removeDeviceControl(deviceControl);
        }
    }

    appendDeviceControl(deviceControl: DeviceControl) {
        this.deviceControls.push(deviceControl);
        this.row.append(deviceControl);
    }

    removeDeviceControl(deviceControl: DeviceControl) {
        deviceControl.remove();
        const index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    }

}
