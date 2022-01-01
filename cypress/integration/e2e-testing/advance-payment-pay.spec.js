describe('E2E Test Payment', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user=>{
            
            const username = user.id
            const password = user.pwd

            //function diambil dari support/command.js
            cy.login(username,password)
        })
    })

    it('should be a testing payment {fake}', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2021-12-31{enter}')
        cy.get('#sp_description').type('just a description')
        cy.get('#pay_saved_payees').click()
    });

    it('notification show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain','The payment was successfully submitted')
    });
});