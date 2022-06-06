import { Border } from "../border";
import { Div } from "../html/div";
import { List } from "../list";
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

    menuList: List;
    items: MenuItem[];

    constructor(items: MenuItem[], onItemSelected: (item: MenuItem) => void) {
        super();

        var menuListItems: UIElement[] = [];
        for (const item of items) {
            const menuButton = new UIElement($('<button>'));
            menuButton.addClass('list-group-item');
            menuButton.addClass('list-group-item-action');
            menuButton.append(item.content);
            menuButton.setOnClick(() => {
                onItemSelected(item);
            });
            menuListItems.push(menuButton);
        }

        this.menuList = new List(menuListItems);
        const border = new Border(this.menuList, 1, 1);

        this.append(border);
    }
    
}
