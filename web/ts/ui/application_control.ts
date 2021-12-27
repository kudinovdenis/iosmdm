/// <reference types="jquery" />

import { IApi } from "../api/api";

// UI

export class WebAppControl {

    element: JQuery<HTMLElement>
    devicesControl: DevicesControl

    apiClient: IApi;

    constructor(apiClient: IApi) {
        this.element = $("<div>").addClass("WebAppControl");

        this.devicesControl = new DevicesControl();
        this.apiClient = apiClient;

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

class DevicesControl {

    element: JQuery<HTMLElement>
    deviceControls: DeviceControl[] = []

    constructor() {
        this.element = $("<div>").addClass("DevicesControl").addClass("container");
    }

    clear() {
        for (const deviceControl of this.deviceControls) {
            this.removeDeviceControl(deviceControl);
        }
    }

    appendDeviceControl(deviceControl: DeviceControl) {
        this.deviceControls.push(deviceControl);
        this.element.append(deviceControl.element);
    }

    removeDeviceControl(deviceControl: DeviceControl) {
        deviceControl.element.remove();
        const index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    }

}

class DeviceControl {

    element: JQuery<HTMLElement>;
    applicationsControl: ApplicationsControl;
    device: Device;
    apiClient: IApi;

    constructor(device: Device, apiClient: IApi) {
        this.element = $('<h4>')
            .text(`Device: ${ device.UDID }. LastConnectionDate: ${ device.LastConnectionDate }`)
            .addClass('DeviceControl');

        this.device = device;
        this.apiClient = apiClient;

        this.applicationsControl = new ApplicationsControl(device, apiClient);

        this.element.append(this.applicationsControl.element);
    }

    clear() {
        this.applicationsControl.clear
    }

}

class ApplicationsControl {

    element: JQuery<HTMLElement>;
    loadListOfApplicationsButton: JQuery<HTMLElement>;
    applicationControls: ApplicationControl[] = [];
    spiner: JQuery<HTMLElement>;
    device: Device;
    apiClient: IApi

    constructor(device: Device, apiClient: IApi) {
        this.element = $('<div>').text('Applications');

        this.loadListOfApplicationsButton = $('<button>')
            .addClass('btn btn-primary')
            .html("Load applications list")

        this.element.append(this.loadListOfApplicationsButton);

        this.spiner = this.createSpinner();
        this.device = device;
        this.apiClient = apiClient;

        this.loadListOfApplicationsButton.on('click', async () => {
            this.clear();
            this.startLoading();

            console.log("OnClick!" + device.UDID);

            const applications = await apiClient.getListOfApplications(device);

            this.stopLoading();
            
            for (const application of applications) {
                const applicationControl = new ApplicationControl(application);
                this.appendApplicationControl(applicationControl);
            }
        });
    }

    private createSpinner(): JQuery<HTMLElement> {
        const spinner = $("<div>").addClass("Spinner").addClass('spinner-border text-light');
        return spinner;
    }

    clear() {
        for (const applicationControl of this.applicationControls) {
            this.removeApplicationControl(applicationControl);
        }
    }

    appendApplicationControl(applicationControl: ApplicationControl) {
        this.applicationControls.push(applicationControl);
        this.element.append(applicationControl.element);
    }

    removeApplicationControl(applicationControl: ApplicationControl) {
        applicationControl.element.remove();
        const index = this.applicationControls.indexOf(applicationControl, 0);
        if (index > -1) {
            this.applicationControls.splice(index, 1);
        }
    }

    startLoading() {
        this.loadListOfApplicationsButton.append(this.spiner);
    }

    stopLoading() {
        this.spiner.remove();
    }

}

class ApplicationControl {

    element: HTMLElement
    applicationInfo: ApplicationInfo

    constructor(applicationInfo: ApplicationInfo) {
        this.element = document.createElement("<div>");
        this.element.className = "ApplicationControl";

        this.applicationInfo = applicationInfo;

        this.element.textContent = `App: ${ applicationInfo.Name }. Identifier: ${ applicationInfo.Identifier }. Version: ${ applicationInfo.Version }`
    }

    clear() {
        this.element.innerHTML = "";
    }

}