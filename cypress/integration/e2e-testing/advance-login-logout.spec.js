    describe('Log In and Log Out E2E Test', () => {
        before(function(){
            cy.visit('http://zero.webappsecurity.com/index.html')
            cy.url().should('include','index.html')
            cy.get('#signin_button').click()
        })

        //negative case
        
        it('should try login with wrong/invalid data', () => {
            cy.login("invalid username","invalid password")
         });
 
         it('should display error message after failed login', () => {
             cy.get('.alert-error')
                 .should('be.visible')
                 .and('contain','Login and/or password are wrong')
         });

        //positive case

        it('should passed login into application', () => {
            cy.fixture('user').then(user=>{
                const username = user.id
                const password = user.pwd

                //pemanggilan via support/command.js
                cy.login(username,password)
            })

            cy.get('ul.nav-tabs').should('be.visible')
        });
        
        it('should logout from application', () => {
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.url().should('include','index.html')
        });

        
        

    });