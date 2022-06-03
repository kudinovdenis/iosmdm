import { UIElement } from "./uielement";

export class Spiner extends UIElement {

    constructor() {
        super($("<span>"));
        this.addClass('spinner-grow');
        this.addClass('spinner-grow-sm');
    }

}
