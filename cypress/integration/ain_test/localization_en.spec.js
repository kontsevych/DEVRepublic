import MainPage from "../pages/main.page";
import {settings} from "../../fixtures/settings";

describe("Check English localization", () => {
    const mainPage = new MainPage();

    before(() =>{
      mainPage.open(settings.site_url);
      cy.url().should('contain', settings.site_url);
      cy.get(mainPage.subscribePopUp(), {timeout: 5000}).should('be.visible');
      cy.get(mainPage.subscribePopUpCancelButton()).click();
    })
    context("Check language change", () => {
      it("Verify actual localization", () =>{
          cy.get(mainPage.navigationMenuNewsButtonRU()).should('contain', settings.navigationMenuNewsButtonRu);
          cy.get('.lang-slug').should('contain', settings.labelEN);
        })
      it("Switch language button", () => {
          cy.get(mainPage.rounderSwitcher()).click();
          cy.get("#menu-item-810947 > a[href~=\"https://ain.ua/en/tag/news/\"]").should('contain', 'news');
      })
    })
})