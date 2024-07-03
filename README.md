# Quidax Assessment Cypress Tests
This repository contains Cypress tests for the Quidax assessment project.

## Prerequisites
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)
- Google Chrome browser
- Git

## Installation
1. Clone this repository:
https://github.com/Adeoye-Phillip/Quidax_Assessment
2. Navigate to the project directory: cd Quidax_Assessment
3. Install dependencies: npm install

## Running the Tests
To run the Cypress tests:

1. Open Cypress Test Runner: npx cypress open
2. In the Cypress Test Runner, click on the test file you want to run (e.g., `quidax.cy.js`).
Alternatively, to run tests headlessly: npx cypress run

## Test Structure
The tests are organized into the following modules:

- Single Input Field
- Multiple Input Field
- Select List Demo
- Multi Select List Demo
- Bootstrap Alert Messages
- Bootstrap Single Modals
- Bootstrap Multiple Modals

## Notes

### Observations

1. Some tests in the Single Input Field module are failing, particularly those involving angle brackets and XSS attempts.
2. The Multiple Input Field module has issues with decimal inputs, empty fields, and non-numeric inputs.
3. The Multi Select List Demo has problems with deselection and displaying all selected options.

### Blockers

1. The system doesn't handle angle brackets correctly in the Single Input Field.
2. XSS protection may be inadequate in the Single Input Field.
3. Calculation errors occur with decimal inputs in the Multiple Input Field.
4. Error handling for empty or invalid inputs is insufficient in the Multiple Input Field.
5. The Multi Select List Demo has issues with option deselection and displaying all selected options.

### Recommendations

1. Implement proper input sanitization for the Single Input Field.
2. Improve XSS protection in the Single Input Field.
3. Fix calculation logic for decimal inputs in the Multiple Input Field.
4. Implement proper error handling for empty and invalid inputs.
5. Improve the Multi Select List Demo to handle deselection correctly and display all selected options.
6. Consider adding labels, error messages, and user-friendly placeholders as suggested in the recommendations document.
