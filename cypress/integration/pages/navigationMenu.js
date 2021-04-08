import Page from "./page";

class NavigationMenu extends Page{
    // -- Navigation menu -- RU
    news(){
        return cy.get('#menu-tematika-1 a[href~="https://ain.ua/post-list/"]');
    }

    work(){
        return cy.get('#menu-tematika-1 a[href~="https://jobs.ain.ua"]');
    }

    companies(){
        return cy.get('#menu-tematika-1 a[href~="https://jobs.ain.ua/companies/"]');
    }

    // -- Navigation menu -- EN
    newsEN(){
        return cy.get('#menu-topics li a[href~="https://ain.ua/en/tag/news/"]');
    }



}

export default NavigationMenu;