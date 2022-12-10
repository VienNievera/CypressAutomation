export const getContactMenu = () => cy.get('a[href="#/contact"]')
export const getWelcomeBanner = () => cy.get('[id=header-message]')

export const getForenameField = () => cy.get('[id=forename]')
export const getForenameError = () => cy.get('[id=forename-err]')

export const getEmailField = () => cy.get('[id="email"]')
export const getEmailError = () => cy.get('[id="email-err"]')

export const getMessageField = () => cy.get('[id="message"]')
export const getMessageError = () => cy.get('[id="message-err"]')

export const getSuccess = () => cy.get('[class="alert alert-success"]')

export const getSubmitBtn = () => cy.get('a[class="btn-contact btn btn-primary"]')
export const getBackBtn = () => cy.get('a[class="btn"]')