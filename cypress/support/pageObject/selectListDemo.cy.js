class SelectListDemo 
{
    getDropdownList() {
        return cy.get("#select-demo")
    }

    getDisplay() {
        return cy.get('.selected-value')
    }

    getMultipleOptions() {
        return cy.get('#multi-select')
    }

    getDisplay2() {
        return cy.get('#displayvalue')
    }
}
export default SelectListDemo;