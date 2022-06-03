import { IApi } from "../api/api";

export class ServiceControl extends LinkButton {

    constructor(apiClient: IApi) {
        super('Install profile', apiClient.downloadProfileLink());
    }

}
