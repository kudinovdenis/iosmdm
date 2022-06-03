import { Div } from "../html/div";
import { TableControl } from "../table";
import { UIElement } from "../uielement";

export class SideMenu extends Div {

    menuTable: TableControl;
    items: UIElement[];

    constructor(items: UIElement[], onItemSelected: (item: UIElement) => void) {
        super();

        this.menuTable = new TableControl();
        for (const item of items) {
            const menuButton = new UIElement($('<button>'));
            menuButton.append(item);
            menuButton.setOnClick(() => {
                onItemSelected(item);
            });
            this.menuTable.appendRow([menuButton]);
        }

        this.append(this.menuTable);
    }
    
}
