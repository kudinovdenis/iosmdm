import { Div } from "./html/div";
import { Paragraph } from "./html/paragraph";
import { SideMenu } from "./menu/side_menu";
import { UIElement } from "./uielement";

export class Workspace extends Div {

    private sideMenu: SideMenu;

    constructor(content: UIElement) {
        super();
        const menuItem1 = new Paragraph("Item1");
        const menuItem2 = new Paragraph("Item2");
        this.sideMenu = new SideMenu([menuItem1, menuItem2], (item) => {
            console.log(`Selected item: ${JSON.parse(JSON.stringify(item))}`);
        });

        this.sideMenu.addClass('w-25');
        content.addClass('w-75');

        const container = new Div();
        container.addClass('d-flex align-items-stretch');

        container.append(this.sideMenu);
        container.append(content);

        this.append(container);
    }

}
