//web for testing : http://zero.webappsecurity.com/index.html
describe('Feedback Form E2E Test', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form on click button in homepage', () => {
        cy.get('form').should('be.visible')
    })


    it('should fill feedback form ', () => {
      cy.get('#name').type('name')
      cy.get('#email').type('fadli@email.com')
      cy.get('#subject').type('Isi Feedback Form')
      cy.get('#comment').type('Isi Cooment Form')
    })

    it('should submit feeback after filled', () => {
        cy.get('.btn-signin').click()
    });

    it('should display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
    });
});