class Paragraph extends UIElement {

    constructor(text: string) {
        super($('<p>'));
        this.setText(text);
    }

    setText(text: string) {
        this.getJQueryElement().text(text);
    }
    
}
