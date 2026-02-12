// This class contains all actions related to the Login page
class LoginPage {

  // This method opens the Login page
  visit() {
    // Opens the login page using the base URL + /auth/login
    cy.visit('/auth/login')

    // Scrolls to the login form and checks that it is visible
    cy.get('form')
      .scrollIntoView()
      .should('be.visible')
  }

  // This method enters the email value in the email input field
  enterEmail(email) {
    // Finds the email input field
    // Scrolls to it so it is visible on the screen
    // Checks that the field is visible
    // Clears any existing value
    // Types the given email value
    cy.get('input[type="email"]')
      .scrollIntoView()
      .should('be.visible')
      .clear()
      .type(email)
  }

  // This method enters the password value in the password input field
  enterPassword(password) {
    // Finds the password input field
    // Scrolls to it so it is visible on the screen
    // Checks that the field is visible
    // Clears any existing value
    // Types the given password value
    cy.get('input[type="password"]')
      .scrollIntoView()
      .should('be.visible')
      .clear()
      .type(password)
  }

  // This method clicks the Login button
  clickLogin() {
    // Finds the login submit button
    // Scrolls to it so it is visible
    // Checks that the button is enabled
    // Clicks the button to submit the login form
    cy.get('button[type="submit"]')
      .scrollIntoView()
      .should('be.enabled')
      .click()
  }

  // This method clicks the Forgot Password link
  clickForgotPassword() {
    // Finds the text that contains the word "forgot"
    // Picks the first matching element to avoid multiple matches
    // Scrolls to the element
    // Checks that it is visible
    // Clicks on it to open the Forgot Password page
    cy.contains(/forgot/i)
      .first()                 // Ensures only one element is selected
      .scrollIntoView()
      .should('be.visible')
      .click()
  }

  // This method clicks the "Register here" link
  clickRegisterHere() {
    // Finds the text "register here" on the page
    // Scrolls to the element
    // Checks that it is visible
    // Clicks on it to open the Register page
    cy.contains(/register here/i)
      .scrollIntoView()
      .should('be.visible')
      .click()
  }

  // This method checks whether the Login form is visible
  loginFormShouldBeVisible() {
    // Checks that the login form is visible on the screen
    cy.get('form').should('be.visible')
  }
}

// This exports the LoginPage object
// It allows test files to use these methods directly
export default new LoginPage()
