import { IApi } from "../api/api";
import { LinkButton } from "./helpers/link_button";

export class ServiceControl extends LinkButton {

    constructor(apiClient: IApi) {
        super('Install profile', apiClient.downloadProfileLink());
    }

}
