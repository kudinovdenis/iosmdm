import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { Border } from "../../../../helpers/border";
import { ButtonControl } from "../../../../helpers/button";
import { TableControl } from "../../../../helpers/table";
import { TextField } from "../../../../helpers/textfield";

export class ProfilesControl {

    element: JQuery<HTMLElement>;
    device: Device;
    apiClient: IApi;

    constructor(device: Device, apiClient: IApi) {
        this.device = device;
        this.apiClient = apiClient;
        this.element = $('<div>');
        
        const listProfilesBox = this.createListProfilesBox();
        this.element.append(listProfilesBox);

        const installProfileBox = this.createInstallProfileBox();
        this.element.append(installProfileBox);
    }

    // MARK: Private methods

    private createListProfilesBox(): JQuery<HTMLElement> {
        const listProfilesControl = $('<div>');

        const listProfilesLegend = $('<h4>').html('Load list of device profiles');
        const listProfilesInfo = $('<p>').html('Will load all profiles on device.');
        const listProfilesButton = new ButtonControl('Load list of profiles');
        const listOfInstalledProfilesTable = new TableControl()
        listProfilesButton.setOnClick(async () => {
            listProfilesButton.startLoading();

            listOfInstalledProfilesTable.clear();
            const listOfInstalledProfiles = await this.apiClient.getInstalledProfiles(this.device);
            listOfInstalledProfilesTable.addObject(listOfInstalledProfiles);

            listProfilesButton.stopLoading();
        });
        listProfilesControl.append(listProfilesLegend);
        listProfilesControl.append(listProfilesInfo);
        listProfilesControl.append(listProfilesButton.element);
        listProfilesControl.append(listOfInstalledProfilesTable.element);

        const listProfilesBox = new Border(listProfilesControl);

        return listProfilesBox.element;
    }

    private createInstallProfileBox(): JQuery<HTMLElement> {
        const control = $('<div>');

        const title = $('<h4>').html('Install arbitrary profile');
        const legend = $('<p>').html('Payload XML should be in base64');
        const textField = new TextField('Insert b64 data here');
        const installButton = new ButtonControl('Install');
        installButton.setOnClick(async () => {
            installButton.startLoading();

            const b64Encoded = Buffer.from(textField.text()).toString('base64');
            this.apiClient.installProfile(this.device, b64Encoded);

            installButton.stopLoading();
        });

        control.append(title);
        control.append(legend);
        control.append(textField.element);
        control.append(installButton.element);

        const box = new Border(control).element;

        return box;
    }

}