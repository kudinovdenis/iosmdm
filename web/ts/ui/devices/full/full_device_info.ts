import { Device } from "../../../models/models";

export class FullDeviceInfoControl {

    element: JQuery<HTMLElement>;
    device: Device;

    constructor(device: Device) {
        this.element = $('<p>').addClass('FullDeviceInfoControl')
        this.element.html(device.UDID);
    }

    clear() {

    }

}
