import MainPage from "../pages/main.page";
import {settings} from "../../fixtures/settings";

describe("Checkin search in ain web", () => {
    const mainPage = new MainPage();

    beforeEach(() => {
        cy.fixture('global').as('global');
    })

    before(() => {
        mainPage.open(settings.site_url);
        cy.url().should('contain', 'ain.ua');
    })

    context("Check the search input", () => {
    it("Filing the search field", () => {
        cy.get('div#onesignal-slidedown-dialog', {timeout: 5000}).should('be.visible');
        cy.get('div#onesignal-slidedown-dialog button.secondary').click();
    })
        it('filling the valid data into input', () => {
            cy.get('@global').then((global) => {
                mainPage.searchButton().should('be.visible').click();
                cy.get('input[type="text"]').type(global.linkedin_text);
                cy.get(".header-search-results li.new_post_item:nth-child(1)")
                    .should('be.visible').click();
                cy.url()
                    .should('contain', global.linkedin_part_url);
        })

    })
    })

})




