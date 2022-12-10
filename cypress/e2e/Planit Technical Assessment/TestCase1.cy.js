import { 
  getContactMenu, 
  getWelcomeBanner, 
  getForenameField, 
  getForenameError, 
  getEmailField, 
  getEmailError, 
  getMessageField, 
  getMessageError, 
  getSubmitBtn 
} from "../../page-object-model/Contact/contact.cy"

describe('Test Case 1', () => {
  // Initialize Variables
  let foreName = "", email = "", message = ""

    beforeEach(() => {
        cy.fixture('contact').then(function (contact) {
          foreName = contact.foreName
          email = contact.email
          message = contact.message
        })
    })

    it('Error Messages', () => {
        // Visit "Jupiter Toys" Home Page
        cy.visit('http://jupiter.cloud.planittesting.com/')

        // From Home Page, Go to "Contact" Page
        getContactMenu().click()

        // Click "Submit" Button
        getSubmitBtn().click()

        // Verify "Welcome" Banner Error
        getWelcomeBanner().should('contains.text', "We welcome your feedback - but we won't get it unless you complete the form correctly.")

        // Verify "Fore Name" Field
        getForenameError().should('contains.text', 'Forename is required')
        getForenameField().type(foreName)
        getForenameError().should('not.exist')

        // Verify "Email" Field
        getEmailField().type(foreName)
        getEmailError().should('contains.text', 'Please enter a valid email')
        getEmailField().clear()
        getEmailError().should('contains.text', 'Email is required')
        getEmailField().type(email)
        getEmailError().should('not.exist')

        // Verify "Message" Text Area
        getMessageError().should('contains.text', 'Message is required')
        getMessageField().type(message)
        getMessageError().should('not.exist')

        // Validate Errors are Gone for "Welcome Banner"
        getWelcomeBanner().should('contains.text', "We welcome your feedback - tell it how it is.")
  })
})