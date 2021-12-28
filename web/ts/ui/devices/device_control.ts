import { IApi } from "../../api/api";
import { Device } from "../../models/models";
import { FullDeviceInfoControl } from "./full/full_device_info";
import { ModalWindow } from "../helpers/modal";

export class DeviceControl {

    element: JQuery<HTMLElement>;

    fullDeviceInfoControl: FullDeviceInfoControl;
    device: Device;
    apiClient: IApi;
    card: JQuery<HTMLElement>;

    constructor(device: Device, apiClient: IApi) {
        this.element = $('<div>').addClass('col');
        this.card = $('<a>')
            .addClass('DeviceControl')
            .addClass('card')
            .addClass('p-3') // padding (inside)
            .addClass('m-3') // margin (outside)
            .attr('style', 'width: 18rem;')

        const udidDiv = $('<p>').text(`Device: ${ device.UDID }.`);
        const lastConnectionDateDiv = $('<p>').text(`LastConnectionDate: ${ device.LastConnectionDate }`);

        this.card.append(udidDiv);
        this.card.append(lastConnectionDateDiv);

        this.device = device;
        this.apiClient = apiClient;

        this.fullDeviceInfoControl = new FullDeviceInfoControl(device);
        const modalFullDeviceIfoControl = new ModalWindow(`Device info`, this.fullDeviceInfoControl.element);
        this.element.append(modalFullDeviceIfoControl.element);

        this.card.on('click', () => {
            modalFullDeviceIfoControl.element.modal('show');
        })

        this.element.append(this.card);
    }

    clear() {
        this.fullDeviceInfoControl.clear()
    }

}