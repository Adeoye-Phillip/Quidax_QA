class LandingPage 
{
    visitUrl() {
        return cy.visit("https://demo.seleniumeasy.com/");
    }

    getStartPractising() {
        return cy.get('#btn_basic_example')
    }
}
export default LandingPage;