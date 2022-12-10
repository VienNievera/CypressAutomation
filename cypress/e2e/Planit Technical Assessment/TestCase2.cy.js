import { 
  getContactMenu, 
  getForenameField, 
  getEmailField, 
  getMessageField,
  getSubmitBtn,
  getSuccess, 
  getBackBtn
} from "../../page-object-model/Contact/contact.cy"

describe('Test Case 2', () => {
  // Initialize Variables
  let foreName = "", email = "", message = ""
  const testRunCount = 5

    beforeEach(() => {
        cy.fixture('contact').then(function (contact) {
          foreName = contact.foreName
          email = contact.email
          message = contact.message
        })
    })

    it('Run 5 Successful Submissions', () => {
        // Visit "Jupiter Toys" Home Page
        cy.visit('http://jupiter.cloud.planittesting.com/')

        // From Home Page, Go to "Contact" Page
        getContactMenu().click()

        for (let i = 1; i<=testRunCount; i++) {
          // Populate Mandatory Field
          getForenameField().type(foreName, {force: true})
          getEmailField().type(email, {force: true})
          getMessageField().type(message, {force: true})
  
          // Click "Submit" Button
          getSubmitBtn().click()
  
          // Validate Successful Submission Message
          getSuccess().should('contains.text', 'Thanks ' + foreName + ", we appreciate your feedback.")
  
          // Click "Back" Button
          getBackBtn().click()

          // Print in Console How Many Times Test have Passed
          cy.log("Test Run Count: " + i)
        }  
  })
})