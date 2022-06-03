export class TextField extends UIElement {

    constructor(placeholder: string) {
        super($('<input>'))
        this.getJQueryElement().prop('placeholder', placeholder);
    }

    text(): string {
        return this.getJQueryElement().val() as string;
    }

    number(): number {
        return this.getJQueryElement().val() as number;
    }
    
}
