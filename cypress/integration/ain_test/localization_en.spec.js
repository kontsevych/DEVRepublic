import MainPage from "../pages/main.page";
import NavigationMenu from "../pages/navigationMenu"
import {settings} from "../../fixtures/settings";

describe("Verify an ability to switch on the English localization", () => {
    const mainPage = new MainPage();
    const navigationMenu = new NavigationMenu();

    before(() =>{
      mainPage.open(settings.site_url);
      cy.url().should('contain', settings.site_url);
      mainPage.subscribePopUp({ timeout: 10000 }).should('be.visible');
      mainPage.subscribePopUpCancelButton().click();
    })
    context("Check language change", () => {
      it("Verify actual localization", () =>{
          navigationMenu.news().should('contain.text', settings.navigationMenuNewsRU);
          mainPage.rounderSwitcherLabelEN().should('contain.text', settings.labelEN);
        })
      it("Switch language button", () => {
          mainPage.rounderSwitcher().click();
          navigationMenu.newsEN().should('contain.text', settings.navigationMenuNewsEN);
      })
    })
})