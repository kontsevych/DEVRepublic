import MainPage from "../pages/main.page";
import NavigationMenu from "../pages/navigationMenu";
import {settings} from "../../fixtures/settings";


describe("Verify navigation menu", () =>{
    const mainPage = new MainPage();
    const navigationMenu = new NavigationMenu();

    before(() => {
        mainPage.open(settings.site_url);

    })

    context("Verify all nav buttons are visible", () => {
        it("Verify news button is visible", () =>{
            navigationMenu.news().should("be.visible").should("contain.text", settings.navigationMenuNewsRU);
        })
        it("Verify work button is visible", () => {
            navigationMenu.work().should('be.visible').should("contain.text", settings.navigationMenuWork);
        })
        it("Verify companies button is visible", () => {
            navigationMenu.companies().should("be.visible").should('contain.text', settings.navigationMenuCompanies);
        })

    })

    context("Verify all nav buttons has correct redirection", () => {
        it.skip("Verify news navigation button", () => {

        })
    })
})