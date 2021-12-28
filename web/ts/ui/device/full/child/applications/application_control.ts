/// <reference types="jquery" />

import { ApplicationInfo } from "../../../../../models/models"

export class ApplicationControl {

    element: JQuery<HTMLElement>
    applicationInfo: ApplicationInfo

    constructor(applicationInfo: ApplicationInfo) {
        this.element = $("<div>")
            .addClass('card')
            .addClass('ApplicationControl')

        const nameDiv = $('<p>').text(`App: ${ applicationInfo.Name }`);
        const identifierDiv = $('<p>').text(`Identifier: ${ applicationInfo.Identifier }`);
        const appVersionDiv = $('<p>').text(`Version: ${ applicationInfo.Version }`);

        this.element.append(nameDiv);
        this.element.append(identifierDiv);
        this.element.append(appVersionDiv);

        this.applicationInfo = applicationInfo;
    }

    clear() {
        this.element.empty();
    }

}