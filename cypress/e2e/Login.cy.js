// Import Login page methods
import LoginPage from '../PageObject/LoginPage'

// Import test data
import testCases from '../fixtures/MyData.json'

// --------------------
// POSITIVE LOGIN (UI + API)
// --------------------
/*describe('Login Positive (UI + API)', () => {

  it('Login success via UI and API', () => {

    // Get only the valid login data
    const validData = testCases.find(tc => tc.expected === 'success')

    // ---------- UI LOGIN ----------

    // Open login page
    LoginPage.visit()

    // Enter valid email
    LoginPage.enterEmail(validData.email)

    // Enter valid password
    LoginPage.enterPassword(validData.password)

    // Click login
    LoginPage.clickLogin()

    // Check login success
    cy.url().should('not.include', '/auth/login')

    // ---------- API LOGIN ----------

    // Call login API with valid credentials
    cy.request({
      method: 'POST',
      url: 'https://kaushalam.ap.gov.in/api/auth/login',
      body: {
        email: validData.email,
        password: validData.password
      }
    }).then((response) => {

      // Check API status code
      expect(response.status).to.eq(200)

      // Check access token exists
      expect(response.body.data).to.have.property('accessToken')

      // Print API response in console
      console.log('POSITIVE LOGIN API RESPONSE:', response)

      // Print token in Cypress log
      cy.log('Access Token:', response.body.data.accessToken)

    })

  })

})
*/

describe('Login Positive (UI + API)', () => {

  it('Login success and print token in console', () => {

    // ---------- API LOGIN ----------
    cy.request({
      method: 'POST',
      url: 'https://kaushalam.ap.gov.in/api/auth/login',
      body: {
        email: Cypress.env('validUsername'),
        password: Cypress.env('validPassword')
      }
    }).then((response) => {

      // Validate response
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('accessToken')

      // Store token in a variable
      const token = response.body.data.accessToken

      // PRINT TOKEN IN BROWSER CONSOLE
      console.log('ACCESS TOKEN 👉', token)

      // Optional: also show in Cypress runner
      cy.log('Access Token printed in browser console')
    })

    
  })

})
