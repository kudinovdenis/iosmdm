import { Div } from "./html/div";
import { UIElement } from "./uielement";

export class List extends Div {
    
    constructor(items: UIElement[]) {
        super();
        this.addClass('d-flex flex-column');

        for (const item of items) {
            const separatorContainer = new Div();
            separatorContainer.addClass('p-2');
            separatorContainer.append(item);
            this.append(separatorContainer);
        }
    }

}
