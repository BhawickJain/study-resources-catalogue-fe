/// <reference types="cypress" />
// suppressed 'cannot find name "cy"'

describe('My Resource Study Site', () => {
    it('is available online', () => {
        cy.visit('http://localhost:3000')
        cy.get('select#user-dropdown').select('Sevgi')
        cy.contains('Login').click()
        cy.contains('My Study List')
        cy.contains('Submit Resource')
        cy.contains('LogOut').click()
        cy.contains('My Study List').should('not.exist')
        cy.contains('Submit Resource').should('not.exist')
    })
})