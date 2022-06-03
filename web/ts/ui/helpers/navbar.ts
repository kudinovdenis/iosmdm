import { UIElement } from "./uielement";

export class NavbarTitleContentPair {

    title: string;
    content: UIElement
    tabIdentifier: string
    contentIdentifier: string
    isSelected: boolean;

    constructor(title: string, content: UIElement, isSelected: boolean) {
        this.title = title;
        this.content = content;
        this.isSelected = isSelected;
        this.tabIdentifier = this.makeid(10);
        this.contentIdentifier = this.makeid(10);
    }

    private makeid(length: number) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       return result;
    }

}

export class Navbar extends UIElement {
    /**
     *  <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>
     */

    constructor(data: NavbarTitleContentPair[]) {
        super($('<div>'));

        const navElement = new UIElement($('<nav>'));

        const tabTitlesContainer = new UIElement($('<div>')
            .addClass('nav')
            .addClass('nav-tabs'));

        const tabContentContainer = new UIElement($('<div>').addClass('tab-content'));

        for (const titleContentPair of data) {
            const tabTitle = new UIElement($('<div>')
                .addClass('nav-link')
                .attr('data-bs-toggle', 'tab')
                .attr('data-bs-target', `#${titleContentPair.contentIdentifier}`)
                .attr('id', titleContentPair.tabIdentifier)
                .attr('type', 'button')
                .html(titleContentPair.title));
            tabTitlesContainer.append(tabTitle);

            const tabContent = new UIElement($('<div>')
                .addClass('tab-pane')
                .addClass('fade')
                .attr('id', titleContentPair.contentIdentifier));
            tabContent.append(titleContentPair.content);
            tabContentContainer.append(tabContent);

            if (titleContentPair.isSelected) {
                tabTitle.addClass('active');
                tabContent.addClass('show');
                tabContent.addClass('active');
            }
        }

        navElement.append(tabTitlesContainer);

        this.append(navElement);
        this.append(tabContentContainer);
    }
    
}
