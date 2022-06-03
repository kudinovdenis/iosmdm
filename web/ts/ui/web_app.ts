import { IApi } from "../api/api";
import { Device } from "../models/models"
import { DevicesControl } from "./device/devices_control";
import { DeviceControl } from "./device/device_control";
import { Div } from "./helpers/html/div";
import { Workspace } from "./helpers/workspace";
import { ServiceControl } from "./service_control";


export class WebAppControl extends Div {

    workspace: Workspace;
    devicesControl: DevicesControl
    apiClient: IApi;

    constructor(apiClient: IApi) {

        super();
        this.addClass("WebAppControl");

        // this.serviceControl = new ServiceControl(apiClient);
        this.devicesControl = new DevicesControl();
        this.workspace = new Workspace(this.devicesControl);
        this.apiClient = apiClient;

        this.append(this.workspace);

        $(document.body).append(this.getJQueryElement());
    }

    async load() {
        let allDevices = await this.apiClient.getAllDevices();
        this.showListOfDevices(allDevices);
    }

    private showListOfDevices(devices: Device[]) {
        for (const device of devices) {
            const deviceControl = new DeviceControl(device, this.apiClient);
            this.devicesControl.appendDeviceControl(deviceControl);
        };
    }

}
