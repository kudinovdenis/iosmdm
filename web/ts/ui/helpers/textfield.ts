export class TextField {

    element: JQuery<HTMLElement>;

    constructor(placeholder: string) {
        this.element = $('<input>').prop('placeholder', placeholder);
    }

    text(): string {
        return this.element.val() as string;
    }

    number(): number {
        return this.element.val() as number;
    }
    
}