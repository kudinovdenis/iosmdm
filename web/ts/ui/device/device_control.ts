import { IApi } from "../../api/api";
import { Device } from "../../models/models";
import { FullDeviceInfoControl } from "./full/full_device_info";
import { ModalWindow } from "../helpers/modal";
import { Div } from "../helpers/html/div";
import { Paragraph } from "../helpers/html/paragraph";
import { UIElement } from "../helpers/uielement";

export class DeviceControl extends Div {

    fullDeviceInfoControl: FullDeviceInfoControl;
    device: Device;
    apiClient: IApi;
    card: UIElement;

    constructor(device: Device, apiClient: IApi) {
        super();
        this.addClass('col');
        this.card = new UIElement($('<a>')
            .addClass('DeviceControl')
            .addClass('card')
            .addClass('p-3') // padding (inside)
            .addClass('m-3') // margin (outside)
            .attr('style', 'width: 18rem;'));

        const udidDiv = new Paragraph(`Device: ${ device.UDID }.`);
        const lastConnectionDateDiv = new Paragraph(`LastConnectionDate: ${ device.LastConnectionDate }`);

        this.card.append(udidDiv);
        this.card.append(lastConnectionDateDiv);

        this.device = device;
        this.apiClient = apiClient;

        this.fullDeviceInfoControl = new FullDeviceInfoControl(device, apiClient);
        const modalFullDeviceIfoControl = new ModalWindow(`Device info`, this.fullDeviceInfoControl);
        this.append(modalFullDeviceIfoControl);

        this.card.setOnClick(() => {
            modalFullDeviceIfoControl.show();
        });

        this.append(this.card);
    }

}
