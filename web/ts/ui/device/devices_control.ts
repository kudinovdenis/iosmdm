import { IApi } from "../../api/api";
import { Device } from "../../models/models";
import { Div } from "../helpers/html/div";
import { Paragraph } from "../helpers/html/paragraph";
import { MenuItem, SideMenu } from "../helpers/menu/side_menu";
import { UIElement } from "../helpers/uielement";
import { DeviceControl } from "./device_control";

export class DevicesControl extends Div {

    private deviceControls: DeviceControl[] = [];
    private row: UIElement;
    private apiClient: IApi;
    private sideMenu: SideMenu;

    constructor(apiClient: IApi) {
        super();

        this.addClass("DevicesControl");
        this.addClass("container");

        this.apiClient = apiClient;

        this.row = new Div()
        this.row.addClass('row');
        this.row.addClass('w-85');

        this.sideMenu = this.makeSideMenu();
        this.sideMenu.addClass('w-15');

        const container = new Div();
        container.addClass('d-flex align-items-stretch');

        container.append(this.sideMenu);
        container.append(this.row);

        this.append(container);

        this.load().then(() => {
            console.log("Loaded devices");
        })
    }

    private async load() {
        let allDevices = await this.apiClient.getAllDevices();
        this.showListOfDevices(allDevices);
    }

    private showListOfDevices(devices: Device[]) {
        for (const device of devices) {
            const deviceControl = new DeviceControl(device, this.apiClient);
            this.appendDeviceControl(deviceControl);
        };
    }

    private appendDeviceControl(deviceControl: DeviceControl) {
        this.deviceControls.push(deviceControl);
        this.row.append(deviceControl);
    }

    private makeSideMenu(): SideMenu {
        const iOSDevicesMenuItem = new MenuItem('iOS-devices-menu-item', new Paragraph('iOS'));
        const macOSDevicesMenuItem = new MenuItem('macOS-devices-menu-item', new Paragraph('macOS'));
        return new SideMenu([iOSDevicesMenuItem, macOSDevicesMenuItem], (item) => {
            switch (item.identifier) {
                case iOSDevicesMenuItem.identifier:
                    console.log('Filter only iOS Devices');
                    break;

                case macOSDevicesMenuItem.identifier:
                    console.log('Filter only macOS Devices');
                    break;
            }
        });
    }

}
