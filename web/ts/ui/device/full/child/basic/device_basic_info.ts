import { IApi } from "../../../../../api/api";
import { Device } from "../../../../../models/models";
import { ButtonControl } from "../../../../helpers/button";
import { TableControl } from "../../../../helpers/table";

export class DeviceBasicInfoControl {

    element: JQuery<HTMLElement>;

    constructor(device: Device, apiClient: IApi) {
       this.element = $('<div>')

       const queryAdditionalInfoButton = new ButtonControl('Query device information');
       this.element.append(queryAdditionalInfoButton.element);
       queryAdditionalInfoButton.setOnClick(async () => {
           queryAdditionalInfoButton.startLoading();
           const deviceInfo = await apiClient.getDeviceInfo(device);
           
           const info = $('<p>').html(JSON.stringify(deviceInfo));
           this.element.append(info);

           queryAdditionalInfoButton.stopLoading();
       });
       
       const table = new TableControl();
       table.setHeaders(["Parameter", "Value"]);
       table.appendRow(["Identifier", device.UDID]);
       table.appendRow(["Push token", device.PushToken]);
       table.appendRow(["Push magic", device.PushMagic]);
       table.appendRow(["Topic", device.Topic]);
       table.appendRow(["CheckedOut", device.CheckedOut ? "true" : "false"]);

       this.element.append(table.element);
    }

}