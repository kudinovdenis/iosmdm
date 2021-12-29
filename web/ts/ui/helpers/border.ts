export class Border {

    element: JQuery<HTMLElement>

    constructor(child: JQuery<HTMLElement>) {
        this.element = $('<div>')
            .addClass('border')
            .addClass('border-primary')
            .addClass('p-3')
            .addClass('m-3');

        this.element.append(child);
    }

}