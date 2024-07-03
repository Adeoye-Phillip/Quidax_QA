class BasicExamplesPage
{
    getSimpleFormDemo()
    {
        return cy.get('.list-group > [href="./basic-first-form-demo.html"]')
    }

    getSelectDropdownList()
    {
        return cy.get('.list-group > [href="./basic-select-dropdown-demo.html"]')
    }
    getBootStrapAlert()
    {
        return cy.get('.list-group > [href="./bootstrap-alert-messages-demo.html"]')
    }
    getBootStrapModal()
    {
        return cy.get('.list-group > [href="./bootstrap-modal-demo.html"]')
    }
}
export default BasicExamplesPage;