describe('E2E Test Filter Transaction', () => {
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

    it('should be a filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('1000')
        cy.get('button[type="submit"]').click()
    });

    it('should display result of filter', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr')
            .its('length')
            .should('be.gt', 0)
    });
});