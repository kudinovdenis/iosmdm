
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

        // install KSC button

        const installApplicationButton = new ButtonControl('Install Kaspersky Security Center app from AppStore (interaction on device required)');
        installApplicationButton.setOnClick(async () => {
            installApplicationButton.startLoading();
            await apiClient.installKSCApplication(device);
            installApplicationButton.stopLoading();
        })

        // Arbitrary app form

        const installArbitraryApplicationForm = $('<form>');

        const legend = $('<legend>').html('Install arbitrary application');
        const formElement = $('<div>').addClass('mb-3');
        const label = $('<label>').addClass('form-label').html('Enter any application id from appstore link. For example, number 1089969624 from https://apps.apple.com/ru/app/kaspersky-security-cloud/id1089969624 for KSC.');
        const input = $('<input>').prop('type', 'text').addClass('form-control').prop('placeholder', 'Application identifier');

        const installButton = new ButtonControl('Install', () => {
            const applicationId = input.val() as number;
            apiClient.installApplication(device, applicationId);
        });

        formElement.append(label);
        formElement.append(input);
        formElement.append(installButton.element);

        installArbitraryApplicationForm.append(legend);
        this.element.append(installArbitraryApplicationForm);

        // Load list of applications

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