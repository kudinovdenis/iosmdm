export class Border extends UIElement {

    constructor(child: UIElement) {
        super($('<div>')
            .addClass('border')
            .addClass('border-primary')
            .addClass('p-3')
            .addClass('m-3'));

        this.append(child);
    }

}
