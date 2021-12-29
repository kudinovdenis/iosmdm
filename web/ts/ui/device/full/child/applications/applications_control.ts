
import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { Border } from "../../../../helpers/border";
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

        const installKSCForm = $('<div>')
        const installKSCLegend = $('<h4>').html('Installation Kaspersky Security Cloud (KSC) for iOS');
        const installKSCInfo = $('<p>').html('Device will prompt installation.');
        const installKSCButton = new ButtonControl('Tap to install from AppStore');
        installKSCButton.setOnClick(async () => {
            installKSCButton.startLoading();
            await apiClient.installKSCApplication(device);
            installKSCButton.stopLoading();
        });

        installKSCForm.append(installKSCLegend);
        installKSCForm.append(installKSCInfo);
        installKSCForm.append(installKSCButton.element);

        this.element.append(new Border(installKSCForm).element);

        // Arbitrary app form

        const installArbitraryApplicationForm = $('<div>')
        const legend = $('<h4>').html('Installation of arbitrary application');
        const label = $('<p>').html('Enter any application id from appstore link. For example, number 1089969624 from https://apps.apple.com/ru/app/kaspersky-security-cloud/id1089969624 for KSC.');
        const input = $('<input>').prop('placeholder', 'Application id');

        const installButton = new ButtonControl('Install', () => {
            installButton.startLoading();
            const applicationId = input.val() as number;
            apiClient.installApplication(device, applicationId);
            installButton.stopLoading();
        });

        installArbitraryApplicationForm.append(legend);
        installArbitraryApplicationForm.append(label);
        installArbitraryApplicationForm.append(input);
        installArbitraryApplicationForm.append(installButton.element);

        this.element.append(new Border(installArbitraryApplicationForm).element);

        // Load list of applications

        const applicationsListForm = $('<div>')
        const applicationsListLegend = $('<h4>').html('Request installed applications list');
        this.loadListOfApplicationsButton = new ButtonControl('Load applications list');

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

        applicationsListForm.append(applicationsListLegend);
        applicationsListForm.append(this.loadListOfApplicationsButton.element);

        this.element.append(new Border(applicationsListForm).element);
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