import { IApi } from "../api/api";
import { Device } from "../models/models"
import { DevicesControl } from "./device/devices_control";
import { DeviceControl } from "./device/device_control";
import { Div } from "./helpers/html/div";
import { Workspace } from "./helpers/workspace";
import { ServiceControl } from "./service_control";


export class WebAppControl extends Div {

    workspace: Workspace;
    apiClient: IApi;

    constructor(apiClient: IApi) {
        super();
        this.addClass("WebAppControl");

        this.workspace = new Workspace(apiClient);
        this.apiClient = apiClient;

        this.append(this.workspace);
    }

}
