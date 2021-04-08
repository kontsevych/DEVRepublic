export default class Page{

    open(url){
        return cy.visit(url);
    }
}