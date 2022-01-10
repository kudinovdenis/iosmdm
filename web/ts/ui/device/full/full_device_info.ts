import { IApi } from "../../../api/api";
import { Device } from "../../../models/models";
import { Navbar, NavbarTitleContentPair } from "../../helpers/navbar";
import { ApplicationsControl } from "./child/applications/applications_control";
import { DeviceBasicInfoControl } from "./child/basic/device_basic_info";
import { ProfilesControl } from "./child/profile/profiles_control";

export class FullDeviceInfoControl {

    element: JQuery<HTMLElement>;
    device: Device;

    private deviceBasicInfo: DeviceBasicInfoControl;
    private applicationsControl: ApplicationsControl;
    private profilesControl: ProfilesControl;

    constructor(device: Device, apiClient: IApi) {
        this.element = $('<div>').addClass('FullDeviceInfoControl')

        this.deviceBasicInfo = new DeviceBasicInfoControl(device, apiClient);
        this.applicationsControl = new ApplicationsControl(device, apiClient);
        this.profilesControl = new ProfilesControl(device, apiClient);

        const navBarData: NavbarTitleContentPair[] = [
            new NavbarTitleContentPair('Basic info', this.deviceBasicInfo.element, true),
            new NavbarTitleContentPair('Applications', this.applicationsControl.element, false),
            new NavbarTitleContentPair('Profiles', this.profilesControl.element, false)
        ];
        const navBar = new Navbar(navBarData);

        this.element.append(navBar.element);
    }

    clear() {

    }

}
