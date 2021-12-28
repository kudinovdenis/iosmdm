import { IApi } from "../api/api";
import { ButtonControl } from "./helpers/button";

export class ServiceControl {

    element: JQuery<HTMLElement>;
    apiClient: IApi;

    constructor(apiClient: IApi) {
        this.apiClient = apiClient;

        this.element = $('<a>')
            .addClass('btn btn-primary')
            .html('Install profile')
            .attr('href', this.apiClient.downloadProfileLink());
    }

}
