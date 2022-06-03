import { UIElement } from "./uielement";

export class LinkButton extends UIElement {

    constructor(title: string, link: string) {
        super($('<a>'));
        this.addClass('btn btn-primary');
        this.getJQueryElement().html('Install profile');
        this.getJQueryElement().attr('href', link);
    }

}
