export class UIElement {

    private jqueryElement: JQuery<HTMLElement>

    constructor(jqueryElement: JQuery<HTMLElement>) {
        this.jqueryElement = jqueryElement
    }

    append(uiElement: UIElement) {
        this.jqueryElement.append(uiElement.jqueryElement);
    }

    empty() {
        this.jqueryElement.empty();
    }

    remove() {
        this.jqueryElement.remove();
    }

    addClass(classname: string) {
        this.jqueryElement.addClass(classname);
    }

    getJQueryElement(): JQuery<HTMLElement> {
        return this.jqueryElement;
    }

    setOnClick(onClick?: () => void) {
        this.jqueryElement.on('click', onClick);
    }

    disableUserInteraction() {
        this.jqueryElement.prop('disabled', true);
    }

    enableUserInteraction() {
        this.jqueryElement.prop('disabled', false);
    }

    placeElementOnTop(element: UIElement) {
        this.jqueryElement.prepend(element.jqueryElement);
    }

}
