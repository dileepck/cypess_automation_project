// This class contains all actions related to the Register (Sign Up) page
class RegisterPage {

  // This method checks whether the Register page is opened
  registerPageShouldBeVisible() {
    // Gets the current page URL
    // Checks that the URL contains "/auth/signup"
    // This confirms that we are on the Register page
    cy.url().should('include', '/auth/signup')
  }

  // This method navigates back to the Login page from the Register page
  goBackToLogin() {

    // Finds text like "login" or "sign in" on the page
    // Scrolls the page until the text comes into view
    // Checks that the element is visible
    // Clicks on it to go back to the Login page
    cy.contains(/login|sign in/i)
      .scrollIntoView()
      .should('be.visible')
      .click()
  }
}

// This exports the RegisterPage object
// It allows test files to use these methods directly
export default new RegisterPage()
