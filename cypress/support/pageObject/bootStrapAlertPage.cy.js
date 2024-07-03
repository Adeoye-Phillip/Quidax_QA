class BootStrapAlertPage 
{
    getNormalSuccessMessage() {
        return cy.get('#normal-btn-success')
    }

    getNormalSuccessAlert() {
        return cy.get('.alert-normal-success')
    }
}
export default BootStrapAlertPage;