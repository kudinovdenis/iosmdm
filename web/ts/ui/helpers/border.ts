import { Div } from "./html/div";
import { UIElement } from "./uielement";

export class Border extends Div {

    constructor(child: UIElement, padding: number = 3, margin: number = 3) {
        super();
        this.addClass('border');
        this.addClass('border-primary');
        this.addClass(`p-${padding}`);
        this.addClass(`m-${margin}`);

        this.append(child);
    }

}
