import { IApi } from "../../api/api";
import { Device } from "../../models/models";
import { Div } from "../helpers/html/div";
import { UIElement } from "../helpers/uielement";
import { DeviceControl } from "./device_control";

export class DevicesControl extends Div {

    deviceControls: DeviceControl[] = [];
    row: UIElement;
    apiClient: IApi;

    constructor(apiClient: IApi) {
        super();

        this.addClass("DevicesControl");
        this.addClass("container");

        this.apiClient = apiClient;

        this.row = new Div()
        this.row.addClass('row');

        this.append(this.row);

        this.load().then(() => {
            console.log("Wow");
        })
    }

    clear() {
        for (const deviceControl of this.deviceControls) {
            this.removeDeviceControl(deviceControl);
        }
    }

    async load() {
        let allDevices = await this.apiClient.getAllDevices();
        this.showListOfDevices(allDevices);
    }

    private showListOfDevices(devices: Device[]) {
        for (const device of devices) {
            const deviceControl = new DeviceControl(device, this.apiClient);
            this.appendDeviceControl(deviceControl);
        };
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
