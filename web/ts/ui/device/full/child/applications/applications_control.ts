import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { Border } from "../../../../helpers/border";
import { ButtonControl } from "../../../../helpers/button";
import { TextField } from "../../../../helpers/textfield";
import { ApplicationControl } from "./application_control";

export class ApplicationsControl extends Div {

    applicationControls: ApplicationControl[] = [];
    applicationsListForm: UIElement;
    device: Device;
    apiClient: IApi;

    constructor(device: Device, apiClient: IApi) {
        super();
        this.addClass('ApplicationsControl')
        this.addClass('container');

        this.device = device;
        this.apiClient = apiClient;

        // install KSC for iOS app button
        const installKSCForiOSForm = this.makeInstallKSCForiOSForm(apiClient, device)
        this.append(new Border(installKSCForiOSForm));

        // Arbitrary app form        
        const installArbitraryAppFromAppStoreForm = this.makeInstallArbitraryAppFromAppStoreForm(apiClient, device);
        this.append(new Border(installArbitraryAppFromAppStoreForm));

        // Install with manifest URL
        const installByManifestURLForm = this.makeInstallWithManifestURLForm(apiClient, device);
        this.append(new Border(installByManifestURLForm));

        // Load list of applications
        this.applicationsListForm = this.makeLoadListOfApplicationsForm(apiClient, device);
        this.append(new Border(this.applicationsListForm));
    }

    clear() {
        for (const applicationControl of this.applicationControls) {
            this.removeApplicationControl(applicationControl);
        }
    }

    appendApplicationControl(applicationControl: ApplicationControl) {
        this.applicationControls.push(applicationControl);
        this.applicationsListForm.append(applicationControl);
    }

    removeApplicationControl(applicationControl: ApplicationControl) {
        applicationControl.remove();
        const index = this.applicationControls.indexOf(applicationControl, 0);
        if (index > -1) {
            this.applicationControls.splice(index, 1);
        }
    }

    // MARK: Private

    private makeInstallKSCForiOSForm(apiClient: IApi, device: Device): UIElement {
        const installKSCForm = new Div();
        const installKSCLegend = new Header4('Installation Kaspersky Security Cloud (KSC) for iOS');
        const installKSCInfo = new Paragraph('Device will prompt installation.');
        const installKSCButton = new ButtonControl('Tap to install from AppStore');
        installKSCButton.setOnClick(async () => {
            installKSCButton.startLoading();
            await apiClient.installKSCApplication(device);
            installKSCButton.stopLoading();
        });

        installKSCForm.append(installKSCLegend);
        installKSCForm.append(installKSCInfo);
        installKSCForm.append(installKSCButton);

        return installKSCForm;
    }

    private makeInstallArbitraryAppFromAppStoreForm(apiClient: IApi, device: Device): UIElement {
        const installArbitraryApplicationForm = new Div();
        const legend = new Header4('Installation of arbitrary application');
        const label = new Paragraph('Enter any application id from appstore link. For example, number 1089969624 from https://apps.apple.com/ru/app/kaspersky-security-cloud/id1089969624 for KSC.');
        const input = new TextField('Application id');

        const installButton = new ButtonControl('Install', () => {
            installButton.startLoading();
            const applicationId = input.number();
            apiClient.installApplicationById(device, applicationId);
            installButton.stopLoading();
        });

        installArbitraryApplicationForm.append(legend);
        installArbitraryApplicationForm.append(label);
        installArbitraryApplicationForm.append(input);
        installArbitraryApplicationForm.append(installButton);

        return installArbitraryApplicationForm;
    }

    private makeInstallWithManifestURLForm(apiClient: IApi, device: Device): UIElement {
        const form = new Div();
        const legend = new Header4('Installation by Manifest URL');
        const label = new Paragraph('Install any application by specifying manifest url.\nAs an example: https://m1553d.com/api/backend/static/apps/ios/internoffer/manifest');
        const input = new TextField('Manifest URL');

        const installButton = new ButtonControl('Install', () => {
            installButton.startLoading();
            const manifestURL = input.text();
            apiClient.installApplicationByManifest(device, manifestURL);
            installButton.stopLoading();
        });

        form.append(legend);
        form.append(label);
        form.append(input);
        form.append(installButton);

        return form;
    }

    private makeLoadListOfApplicationsForm(apiClient: IApi, device: Device): UIElement {
        const applicationsListForm = new Div();
        const applicationsListLegend = new Header4('Request installed applications list');
        const loadListOfApplicationsButton = new ButtonControl('Load applications list');

        loadListOfApplicationsButton.setOnClick(async () => {
            this.clear();
            loadListOfApplicationsButton.startLoading();

            const applications = await apiClient.getListOfApplications(device);

            loadListOfApplicationsButton.stopLoading();
            
            for (const application of applications) {
                const applicationControl = new ApplicationControl(application);
                this.appendApplicationControl(applicationControl);
            }
        });

        applicationsListForm.append(applicationsListLegend);
        applicationsListForm.append(loadListOfApplicationsButton);

        return applicationsListForm;
    }

}
