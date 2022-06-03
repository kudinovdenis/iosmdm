import { Spiner } from "./spiner";
import { UIElement } from "./uielement";

export class ButtonControl extends UIElement {

    private spiner: Spiner;

    constructor(title: string, onClick?: () => void) {
        super($('<button>'));
        this.addClass('btn');
        this.addClass('btn-primary');

        this.getJQueryElement().html(title);

        this.spiner = new Spiner();

        this.setOnClick(onClick);
    }

    startLoading() {
        this.disableUserInteraction();
        this.placeElementOnTop(this.spiner);
    }

    stopLoading() {
        this.enableUserInteraction();
        this.spiner.remove();
    }

}
