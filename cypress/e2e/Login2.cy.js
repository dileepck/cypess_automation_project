// Import Login page methods
import LoginPage from '../PageObject/LoginPage'

// Import test data
import testCases from '../fixtures/MyData.json'


// --------------------
// NEGATIVE LOGIN TESTS
// --------------------
describe('Login Negative Test Cases', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  // Loop through all test cases
  testCases.forEach((data) => {

    // Skip the success case
    if (data.expected !== 'success') {

      it(`Login with ${data.expected}`, () => {

        // Enter email from test data
        LoginPage.enterEmail(data.email)

        // Enter password from test data
        LoginPage.enterPassword(data.password)

        // Click login button
        LoginPage.clickLogin()

        // Verify error message is shown
        cy.contains(/invalid/i).should('be.visible')
      })

    }
  })

})
