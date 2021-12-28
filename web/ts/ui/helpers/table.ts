export class TableControl {

    element: JQuery<HTMLElement>

    private header: JQuery<HTMLElement>
    private body: JQuery<HTMLElement>

    /**
     * 
     *  <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
     */
    constructor() {
        this.element = $('<table>').addClass('table');

        this.header = $('<thead>');
        this.body = $('<tbody>');

        this.element.append(this.header);
        this.element.append(this.body);
    }

    setHeadersText(headers: string[]) {
        const headersElements = headers.map((val) => {
            return $('<p>').html(val);
        })
        this.setHeaders(headersElements);
    }

    setHeaders(headers: JQuery<HTMLElement>[]) {
        const row = $('<tr>');
        for (const header of headers) {
            const col = $('<th>').append(header);
            row.append(col);
        }
        this.header.empty();
        this.header.append(row);
    }

    appendRowText(rowContent: string[]) {
        const rowContentElements = rowContent.map((val) => {
            return $('<p>').html(val);
        })
        this.setHeaders(rowContentElements);
    }

    appendRow(rowContent: JQuery<HTMLElement>[]) {
        const row = $('<tr>');
        for (const rowColumn of rowContent) {
            const col = $('<td>').append(rowColumn);
            row.append(col);
        }
        this.body.append(row);
    }

    clear() {
        this.body.empty();
    }

}