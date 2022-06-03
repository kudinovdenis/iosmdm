class Header4 extends UIElement {
    constructor(title: string) {
        super($('<h4>'));
        this.setTitle(title);
    }

    setTitle(title: string) {
        this.getJQueryElement().html(title);
    }
}
