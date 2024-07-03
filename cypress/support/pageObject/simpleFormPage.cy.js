class SimpleFormPage 
{
    getInputField1() {
        return cy.get('#user-message');
    }

    getInputField2a() {
        return cy.get('#value1')
    }

    getInputField2b() {
        return cy.get('#value2')
    }

    getShowMessage() {
        return cy.get('#get-input > .btn')
    }

    getDisplay() {
        return cy.get('#display')
    }

    getTotal() {
        return cy.get('#gettotal > .btn')
    }

    getDisplay2() {
        return cy.get('#displayvalue')
    }
}
export default SimpleFormPage;