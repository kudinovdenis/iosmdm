export class ModalWindow {

    element: JQuery<HTMLElement>;

    constructor(title: string, body: JQuery<HTMLElement>) {
        this.element = $('<div>').addClass('modal').addClass('fade');
        const modalDialog = $('<div>').addClass('modal-dialog').addClass('modal-lg');

        const modalContent = $('<div>').addClass('modal-content');

        modalContent.append(this.modalHeader(title));
        modalContent.append(this.modalBody(body));

        modalDialog.append(modalContent);

        this.element.append(modalDialog);
    }

    modalHeader(title: string): JQuery<HTMLElement> {
        /**
         * <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
         */
        const header = $('<div>').addClass('modal-header');
        const modalTitle = $('<div>').addClass('modal-title')
        modalTitle.html(title);
        const closeButton = $('<button>').addClass('btn-close').attr('data-bs-dismiss', 'modal')

        header.append(title);
        header.append(closeButton);

        return header;
    }

    modalBody(body: JQuery<HTMLElement>): JQuery<HTMLElement> {
        // anything goes in html
        const modalBody = $('<div>').addClass('modal-body');
        modalBody.append(body);

        return body;
    }

}