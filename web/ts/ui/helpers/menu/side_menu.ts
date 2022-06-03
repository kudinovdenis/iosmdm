import { Div } from "../html/div";
import { TableControl } from "../table";
import { UIElement } from "../uielement";

export class MenuItem {

    identifier: string;
    content: UIElement;

    constructor(identifier: string, content: UIElement) {
        this.identifier = identifier;
        this.content = content;
    }

}

export class SideMenu extends Div {

    menuTable: TableControl;
    items: MenuItem[];

    constructor(items: MenuItem[], onItemSelected: (item: MenuItem) => void) {
        super();

        this.menuTable = new TableControl();
        for (const item of items) {
            const menuButton = new UIElement($('<button>'));
            menuButton.append(item.content);
            menuButton.setOnClick(() => {
                onItemSelected(item);
            });
            this.menuTable.appendRow([menuButton]);
        }

        this.append(this.menuTable);
    }
    
}
