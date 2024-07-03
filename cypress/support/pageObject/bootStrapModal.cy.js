class BootStrapModal 
{
    getLaunchModal() {
        return cy.get('a[href="#myModal0"]')
    }

    getModal() {
        return cy.get('.modal-content')
    }

    getCloseModal() {
        return cy.get('#myModal0 .modal-footer a[data-dismiss="modal"]')
    }

    getModalRep() {
        return cy.get('.modal-content')
    }

    getMultipleLaunch()
    {
        return cy.get('a[href="#myModal"]')
    }

    getFirstModal()
    {
        return cy.get('#myModal')
    }

    getLaunchModal2()
    {
        return cy.get('#myModal a[href="#myModal2"]')
    }

    getSecondModal()
    {
        return cy.get('#myModal2')
    }

    getSaveChanges()
    {
        return cy.get('#myModal2 .modal-footer a.btn-primary')
    }
}
export default BootStrapModal;