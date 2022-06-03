export class ModalWindow extends Div {

    constructor(title: string, body: UIElement) {
        super();
        this.addClass('modal');
        this.addClass('fade');

        const modalDialog = new Div()
        modalDialog.addClass('modal-dialog');
        modalDialog.addClass('modal-xl');

        const modalContent = new Div();
        modalContent.addClass('modal-content');

        modalContent.append(this.modalHeader(title));
        modalContent.append(this.modalBody(body));

        modalDialog.append(modalContent);

        this.append(modalDialog);
    }

    show() {
        this.getJQueryElement().modal('show');
    }

    private modalHeader(title: string): UIElement {
        /**
         * <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
         */
        const header = new Div();
        header.addClass('modal-header');

        const modalTitle = new Header4(title);
        modalTitle.addClass('modal-title');

        const closeButton = new UIElement($('<button>').addClass('btn-close').attr('data-bs-dismiss', 'modal'));

        header.append(modalTitle);
        header.append(closeButton);

        return header;
    }

    private modalBody(body: UIElement): UIElement {
        // anything goes in html
        const modalBody = new Div();
        modalBody.addClass('modal-body');

        modalBody.append(body);

        return modalBody;
    }

}
