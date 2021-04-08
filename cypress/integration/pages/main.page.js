import Page from "./page";

class MainPage extends Page{

    searchButton(){
        return cy.get('#header span.search-text');
    }

    // -- Subscribe show message pop-up --
    subscribePopUp(){
        return cy.get('.onesignal-slidedown-dialog');
    }

    subscribePopUpCancelButton(){
        return cy.get('div#onesignal-slidedown-dialog button.secondary');
    }

    // -- Navigation menu --
    navigationMenuNewsButtonRU(){
        return cy.get('#menu-item-912064 > a[href="https://ain.ua/post-list/"]');
    }

    //  -- Rounded switch --

    rounderSwitcherLabelEN (){
        return cy.get(".lang-slug");
    }

    rounderSwitcher(){
        return cy.get("#header span.lang-switcher a[href~=\"https://ain.ua/en\"]");
    }

}

export default MainPage;