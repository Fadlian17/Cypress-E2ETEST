describe('New Payment Test E2E Test', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user=>{
            
            const username = user.id
            const password = user.pwd

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })
    })

    it('should add new payee to list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('1234512345')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()
    });

    it('should notification success massage', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain','The new payee Name was successfully created')
    });
});