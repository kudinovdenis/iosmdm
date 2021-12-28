
import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { ButtonControl } from "../../../../helpers/button";
import { ApplicationControl } from "./application_control";

export class ApplicationsControl {

    element: JQuery<HTMLElement>;
    loadListOfApplicationsButton: ButtonControl;
    applicationControls: ApplicationControl[] = [];
    device: Device;
    apiClient: IApi

    constructor(device: Device, apiClient: IApi) {
        this.device = device;
        this.apiClient = apiClient;

        this.element = $('<div>')
            .addClass('ApplicationsControl')
            .addClass('container');

        this.loadListOfApplicationsButton = new ButtonControl('Load applications list');
        this.element.append(this.loadListOfApplicationsButton.element);

        this.loadListOfApplicationsButton.setOnClick(async () => {
            this.clear();
            this.startLoading();

            const applications = await apiClient.getListOfApplications(device);

            this.stopLoading();
            
            for (const application of applications) {
                const applicationControl = new ApplicationControl(application);
                this.appendApplicationControl(applicationControl);
            }
        });
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
        this.loadListOfApplicationsButton.startLoading();
    }

    stopLoading() {
        this.loadListOfApplicationsButton.stopLoading();
    }

}