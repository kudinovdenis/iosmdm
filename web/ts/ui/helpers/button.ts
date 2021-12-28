export class ButtonControl {

    element: JQuery<HTMLElement>;
    private spiner: JQuery<HTMLElement>;

    constructor(title: string, onClick?: () => void) {
        this.element = $('<button>')
            .addClass('btn')
            .addClass('btn-primary');

        this.element.html(title);

        this.spiner = this.createSpinner();

        this.element.on('click', onClick);
    }

    startLoading() {
        this.element.prop('disabled', 'true');
        this.element.prepend(this.spiner);
    }

    stopLoading() {
        this.element.prop('disabled', 'false');
        this.spiner.remove();
    }

    setOnClick(onClick?: () => void) {
        this.element.on('click', onClick);
    }

    private createSpinner(): JQuery<HTMLElement> {
        const spinner = $("<span>")
            .addClass('spinner-grow')
            .addClass('spinner-grow-sm')
        return spinner;
    }

}