import { IApi } from "../../../api/api";
import { Device } from "../../../models/models";
import { Navbar, NavbarTitleContentPair } from "../../helpers/navbar";
import { ApplicationsControl } from "./child/applications/applications_control";
import { DeviceBasicInfoControl } from "./child/basic/device_basic_info";

export class FullDeviceInfoControl {

    element: JQuery<HTMLElement>;
    device: Device;

    private deviceBasicInfo: DeviceBasicInfoControl;
    private applicationsControl: ApplicationsControl;

    constructor(device: Device, apiClient: IApi) {
        this.element = $('<div>').addClass('FullDeviceInfoControl')

        this.deviceBasicInfo = new DeviceBasicInfoControl(device);
        this.applicationsControl = new ApplicationsControl(device, apiClient);

        const navBarData: NavbarTitleContentPair[] = [
            new NavbarTitleContentPair('Basic info', this.deviceBasicInfo.element, true),
            new NavbarTitleContentPair('Applications', this.applicationsControl.element, false)
        ];
        const navBar = new Navbar(navBarData);

        this.element.append(navBar.element);
    }

    clear() {

    }

}
