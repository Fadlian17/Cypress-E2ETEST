describe('E2E Test Transfer Funds Verification', () => {
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


    it('should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('1000')
        cy.get('#tf_description').type('Transfer Funds Test')
        cy.get('#btn_submit').click()
    });

    it('should verify correct data form', () => {
        cy.get('#tf_fromAccountId').should('have.value','Checking')
        cy.get('#tf_toAccountId').should('have.value','Loan')
        cy.get('#tf_amount').should('have.value','1000')
    });
});