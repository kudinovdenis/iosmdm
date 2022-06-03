import { IApi } from "../../api/api";
import { Device } from "../../models/models";
import { DevicesControl } from "../device/devices_control";
import { ServiceControl } from "../service_control";
import { Div } from "./html/div";
import { Paragraph } from "./html/paragraph";
import { MenuItem, SideMenu } from "./menu/side_menu";
import { UIElement } from "./uielement";

export class WorkspaceMenuModel {

    menuItem: UIElement;
    content: UIElement;
    identifier: string
    
    constructor(menuItem: UIElement, content: UIElement) {
        this.menuItem = menuItem;
        this.content = content;
        this.identifier = this.makeid(10)
    }

    private makeid(length: number) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        // identifier must start with alphabetical character.
        return "menu" + result;
    }

}

export class Workspace extends Div {

    private sideMenu: SideMenu;
    private content: UIElement;
    private apiClient: IApi;

    constructor(apiClient: IApi) {
        super();

        const menuItem1 = new MenuItem("id1", new Paragraph('Service'));
        const menuItem2 = new MenuItem("id2", new Paragraph('Devices'));

        this.content = new Div();
        this.sideMenu = new SideMenu([menuItem1, menuItem2], (item) => {
            console.log(`Selected item: ${JSON.parse(JSON.stringify(item))}`);
            switch (item.identifier) {
                case 'id1':
                    this.content.empty();
                    const services = new ServiceControl(apiClient);
                    this.content.append(services);

                case 'id2':
                    this.content.empty();
                    const devicesControl = new DevicesControl(apiClient);
                    this.content.append(devicesControl);
            }
        });

        this.sideMenu.addClass('w-25');
        this.content.addClass('w-75');

        const container = new Div();
        container.addClass('d-flex align-items-stretch');

        container.append(this.sideMenu);
        container.append(this.content);

        this.append(container);
    }

}
