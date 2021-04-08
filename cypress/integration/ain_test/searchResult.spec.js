import MainPage from "../pages/main.page";
import {settings} from "../../fixtures/settings";

describe("Checkin search in ain web", () => {
    const mainPage = new MainPage();

    before(() => {
        mainPage.open(settings.site_url);
        cy.url().should('contain', settings.site_url);
    })

    context("Check the search input", () => {
        it("Fill the search field", () => {
            cy.get('div#onesignal-slidedown-dialog', {timeout: 5000}).should('be.visible');
            cy.get('div#onesignal-slidedown-dialog button.secondary').click();
        })

        it('filling the valid data into input', () => {
            mainPage.searchButton().should('be.visible').click();
            cy.get('input[type="text"]').type(settings.linkedin_text);
            cy.get(".header-search-results li.new_post_item:nth-child(1)")
                .should('be.visible').click();
            cy.url()
                .should('contain', settings.linkedin_part_url);
        })
    })

})




