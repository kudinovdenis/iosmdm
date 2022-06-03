/// <reference types="jquery" />

import { ApplicationInfo } from "../../../../../models/models"

export class ApplicationControl extends UIElement {

    applicationInfo: ApplicationInfo

    constructor(applicationInfo: ApplicationInfo) {
        super($("<div>")
            .addClass('card')
            .addClass('ApplicationControl'));

        const nameDiv = new UIElement($('<p>').text(`App: ${ applicationInfo.Name }`));
        const identifierDiv = new UIElement($('<p>').text(`Identifier: ${ applicationInfo.Identifier }`));
        const appVersionDiv = new UIElement($('<p>').text(`Version: ${ applicationInfo.Version }`));

        this.append(nameDiv);
        this.append(identifierDiv);
        this.append(appVersionDiv);

        this.applicationInfo = applicationInfo;
    }

    clear() {
        this.empty();
    }

}
