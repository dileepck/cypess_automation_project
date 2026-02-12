// This class contains all actions related to the Forgot Password page
class ForgotPasswordPage {

  // This method checks whether the Forgot / Reset Password screen is visible
  forgotTabShouldBeVisible() {
    // Finds text like "forgot" or "reset" on the page
    // Scrolls to it so it comes into view
    // Checks that the text is visible on the screen
    cy.contains(/forgot|reset/i)
      .scrollIntoView()
      .should('be.visible')
  }

  // This method clicks the Cancel button on the Forgot Password screen
  clickCancel() {
    // Finds the "cancel" text on the page
    // Scrolls to the cancel option
    // Ensures it is visible
    // Clicks on it to go back to the previous screen
    cy.contains(/cancel/i)
      .scrollIntoView()
      .should('be.visible')
      .click()
  }
}

// This exports the class so it can be used in test files
// Using "new" means we can directly use the methods without creating objects again
export default new ForgotPasswordPage()
