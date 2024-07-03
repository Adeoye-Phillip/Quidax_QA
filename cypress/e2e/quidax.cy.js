/// <reference types="cypress" />
import LandingPage from "../support/pageObject/landingPage.cy";
import BasicExamplesPage from "../support/pageObject/basicExamplesPage.cy";
import SimpleFormPage from "../support/pageObject/simpleFormPage.cy";
import SelectListDemo from "../support/pageObject/selectListDemo.cy";
import BootStrapAlertPage from "../support/pageObject/bootStrapAlertPage.cy";
import BootStrapModal from "../support/pageObject/bootStrapModal.cy";

describe('Quidax Assessment', () => {
    it('Single Form Demo: Verify That The Exact Message Typed Is Displayed', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const simpleFormPage = new SimpleFormPage()

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Click on 'Simple Form Demo'
        basicExamplesPage.getSimpleFormDemo().click();
        // Type Your Message
        simpleFormPage.getInputField1().first().type('Hello World!');
        // Show Message
        simpleFormPage.getShowMessage().click();
        // Verify The Message Was Displayed
        simpleFormPage.getDisplay().should('contain', 'Hello World!')
    });

    it('Multiple Form Demo: Verify that the "Get Total" button adds two positive integers ', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const simpleFormPage = new SimpleFormPage()

        // Input values
        const num1 = 5;
        const num2 = 10;
        const expectedTotal = num1 + num2;

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Click on 'Simple Form Demo'
        basicExamplesPage.getSimpleFormDemo().click();
        // Enter values into the input fields
        simpleFormPage.getInputField2a().type(num1);
        simpleFormPage.getInputField2b().type(num2);
        // Click the 'Get Total' button
        simpleFormPage.getTotal().click();
        // Assert the accurate total is displayed
        simpleFormPage.getDisplay2().should('have.text', expectedTotal.toString());
    });

    it('Single Dropdown List: Verify that the dropdown list defaults to "Please select" and "Day Selected" space is empty.', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const selectListDemo = new SelectListDemo()

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Click on 'Select Dropdown List'
        basicExamplesPage.getSelectDropdownList().click();
        // Assert that the dropdown defaults to "Please select"
        selectListDemo.getDropdownList().should('have.value', null);
        // Assert that the "Day Selected" space is empty
        selectListDemo.getDisplay().should('be.empty');
    });

    it('Multiple Dropdown List: Verify that the "Get All Selected" button displays all selected options below the buttons.', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const selectListDemo = new SelectListDemo()

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Click on 'Simple Form Demo'
        basicExamplesPage.getSelectDropdownList().click();

        // Select multiple options from the multi-select list
        const selectedOptions = ['California', 'Florida', 'New Jersey'];
        selectListDemo.getMultipleOptions().select(selectedOptions);
    
        // Verify that each selected option is highlighted
        selectedOptions.forEach(option => {
        selectListDemo.getMultipleOptions().contains('option', option).should('be.selected');
        });
     });

    it('Bootstrap Alert Messages: should display the normal success message when the button is clicked', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const bootStrapAlertPage = new BootStrapAlertPage()

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Click on 'Bootstrap Alert'
        basicExamplesPage.getBootStrapAlert().click();
        // Click the "Normal success message" button
        bootStrapAlertPage.getNormalSuccessMessage().click();
        // Verify that the normal success message alert appears
        bootStrapAlertPage.getNormalSuccessAlert().should('be.visible').and('include.text', 'normal success message');
     });

    it('Bootstrap Single Modal: should close the modal when the close link is clicked', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const bootStrapModal = new BootStrapModal()

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Go To Bootstrap Modal
        basicExamplesPage.getBootStrapModal().click();
        // Click the "Launch modal" button to open the modal
        bootStrapModal.getLaunchModal().click();
        // Verify that the modal appears
        bootStrapModal.getModal().should('be.visible');
        // Click the close link on the modal
        bootStrapModal.getCloseModal().click();  
        // Verify that the modal is no longer visible
        bootStrapModal.getModalRep().should('not.be.visible');
    });

    it('Bootstrap Multiple Modal', () => {
        const landingPage = new LandingPage()
        const basicExamplesPage = new BasicExamplesPage()
        const bootStrapModal = new BootStrapModal()

        // Visit the URL
        landingPage.visitUrl();
        // Navigate and click on 'Start Practising'
        landingPage.getStartPractising().click();
        // Go To Bootstrap Modal
        basicExamplesPage.getBootStrapModal().click();
        // Click the "Launch modal" button to open the first modal
        bootStrapModal.getMultipleLaunch().click();
        // Verify that the first modal appears
        bootStrapModal.getFirstModal().should('be.visible');
        // Click the "Launch modal" button inside the first modal to open the second modal
        bootStrapModal.getLaunchModal2().click();   
        // Verify that the second modal appears
        bootStrapModal.getSecondModal().should('be.visible');
        // Click the "Save changes" button on the second modal
        bootStrapModal.getSaveChanges().click();        
        // Verify that both modals are closed
        bootStrapModal.getFirstModal().should('not.be.visible');
        bootStrapModal.getSecondModal().should('not.be.visible');

    });
});