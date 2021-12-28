
import { IApi } from "../../../../api/api";
import { Device } from "../../../../models/models";
import { ApplicationControl } from "./application_control";

export class ApplicationsControl {

    element: JQuery<HTMLElement>;
    loadListOfApplicationsButton: JQuery<HTMLElement>;
    applicationControls: ApplicationControl[] = [];
    spiner: JQuery<HTMLElement>;
    device: Device;
    apiClient: IApi

    constructor(device: Device, apiClient: IApi) {
        this.element = $('<div>')
            .addClass('ApplicationsControl')
            .addClass('container')
            .text('Applications');

        this.loadListOfApplicationsButton = $('<a>')
            .addClass('btn btn-primary')
            .html("Load applications list")

        this.element.append(this.loadListOfApplicationsButton);

        this.spiner = this.createSpinner();
        this.device = device;
        this.apiClient = apiClient;

        this.loadListOfApplicationsButton.on('click', async () => {
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

    private createSpinner(): JQuery<HTMLElement> {
        const spinner = $("<span>")
            .addClass('spinner-grow')
            .addClass('spinner-grow-sm')
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
        this.loadListOfApplicationsButton.prop('disabled', 'true');
        this.loadListOfApplicationsButton.prepend(this.spiner);
    }

    stopLoading() {
        this.loadListOfApplicationsButton.prop('disabled', 'false');
        this.spiner.remove();
    }

}