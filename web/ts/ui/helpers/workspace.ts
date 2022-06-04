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

    constructor(apiClient: IApi) {
        super();

        const serviceMenuItem = new MenuItem("service-menu-item", new Paragraph('Service'));
        const devicesMenuItem = new MenuItem("devices-menu-item", new Paragraph('Devices'));

        this.content = new Div();
        this.sideMenu = new SideMenu([serviceMenuItem, devicesMenuItem], (item) => {
            console.log(`Selected item: ${JSON.parse(JSON.stringify(item))}`);
            switch (item.identifier) {
                case serviceMenuItem.identifier:
                    this.replaceContent(new ServiceControl(apiClient));
                    break;

                case devicesMenuItem.identifier:
                    this.replaceContent(new DevicesControl(apiClient));
                    break;
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

    private replaceContent(newContent: UIElement) {
        this.content.empty();
        this.content.append(newContent);
    }

}
