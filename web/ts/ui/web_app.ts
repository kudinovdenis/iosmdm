import { IApi } from "../api/api";
import { Device } from "../models/models"
import { DevicesControl } from "./devices/devices_control";
import { DeviceControl } from "./devices/device_control";
import { ServiceControl } from "./service_control";


export class WebAppControl {

    element: JQuery<HTMLElement>
    serviceControl: ServiceControl
    devicesControl: DevicesControl

    apiClient: IApi;

    constructor(apiClient: IApi) {
        this.element = $("<div>").addClass("WebAppControl");

        this.serviceControl = new ServiceControl(apiClient);
        this.devicesControl = new DevicesControl();
        this.apiClient = apiClient;

        this.element.append(this.serviceControl.element);
        this.element.append(this.devicesControl.element);

        $(document.body).append(this.element);
    }

    async load() {
        let allDevices = await this.apiClient.getAllDevices();
        console.log("Get all devices: " + allDevices);
        this.showListOfDevices(allDevices);
    }

    private showListOfDevices(devices: Device[]) {
        for (const device of devices) {
            const deviceControl = new DeviceControl(device, this.apiClient);
            this.devicesControl.appendDeviceControl(deviceControl);
        };
    }

}