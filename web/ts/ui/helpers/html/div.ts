import { UIElement } from "../uielement";

export class Div extends UIElement {
    constructor() {
        super($('<div>'));
    }
}
