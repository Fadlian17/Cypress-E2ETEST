    describe('Log In and Log Out E2E Test', () => {
        before(function(){
            cy.visit('http://zero.webappsecurity.com/index.html')
            cy.url().should('include','index.html')
            cy.get('#signin_button').click()
        })

        //positive case

        it('should passed login into application', () => {
            cy.fixture('user').then(user=>{
                const username = user.id
                const password = user.pwd

                cy.get('#user_login').type(username)
                cy.get('#user_password').type(password)
                cy.get('#user_remember_me').click()
                cy.contains('Sign in').click()
            })

            cy.get('ul.nav-tabs').should('be.visible')
        });
        
        it('should logout from application', () => {
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.url().should('include','index.html')
        });

        
        //negative case
        
        it('should try login with wrong/invalid data', () => {
            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type('invalid username')
            cy.get('#user_password').type('invalid password')
            cy.contains('Sign in').click()
        });

        it('should display error message after failed login', () => {
            cy.get('.alert-error')
                .should('be.visible')
                .and('contain','Login and/or password are wrong')
        });

    });