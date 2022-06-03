import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { Border } from "../../../../helpers/border";
import { ButtonControl } from "../../../../helpers/button";
import { TableControl } from "../../../../helpers/table";
import { TextField } from "../../../../helpers/textfield";

export class ProfilesControl extends Div {

    device: Device;
    apiClient: IApi;

    constructor(device: Device, apiClient: IApi) {
        super();
        this.device = device;
        this.apiClient = apiClient;
        
        const listProfilesBox = this.createListProfilesBox();
        this.append(listProfilesBox);

        const installProfileBox = this.createInstallProfileBox();
        this.append(installProfileBox);
    }

    // MARK: Private methods

    private createListProfilesBox(): UIElement {
        const listProfilesControl = new Div();

        const listProfilesLegend = new Header4('Load list of device profiles');
        const listProfilesInfo = new Paragraph('Will load all profiles on device.');
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
        listProfilesControl.append(listProfilesButton);
        listProfilesControl.append(listOfInstalledProfilesTable);

        const listProfilesBox = new Border(listProfilesControl);

        return listProfilesBox;
    }

    private createInstallProfileBox(): UIElement {
        const control = new Div();

        const title = new Header4('Install arbitrary profile');
        const legend = new Paragraph('Payload XML should be in base64');
        const textField = new TextField('Insert b64 data here');
        const installButton = new ButtonControl('Install');
        installButton.setOnClick(async () => {
            installButton.startLoading();

            this.apiClient.installProfile(this.device, textField.text());

            installButton.stopLoading();
        });

        control.append(title);
        control.append(legend);
        control.append(textField);
        control.append(installButton);

        const box = new Border(control);

        return box;
    }

}
