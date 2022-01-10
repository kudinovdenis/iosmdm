import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { Border } from "../../../../helpers/border";
import { ButtonControl } from "../../../../helpers/button";

export class ProfilesControl {

    element: JQuery<HTMLElement>;
    device: Device;

    constructor(device: Device, apiClient: IApi) {
        this.device = device;
        this.element = $('<div>');

        const listProfilesControl = $('<div>');

        const listProfilesLegend = $('<h4>').html('Installation Kaspersky Security Cloud (KSC) for iOS');
        const listProfilesInfo = $('<p>').html('Device will prompt installation.');
        const listProfilesButton = new ButtonControl('Load list of profiles');
        const listOfInstalledProfilesText = $('<p>');
        listProfilesButton.setOnClick(async () => {
            const listOfInstlledProfiles = await apiClient.getInstalledProfiles(device);
            listOfInstalledProfilesText.html(JSON.stringify(listOfInstlledProfiles));
        });
        listProfilesControl.append(listProfilesLegend);
        listProfilesControl.append(listProfilesInfo);
        listProfilesControl.append(listProfilesButton.element);
        listProfilesControl.append(listOfInstalledProfilesText);

        const listProfilesBox = new Border(listProfilesControl);

        this.element.append(listProfilesBox.element);
    }

}