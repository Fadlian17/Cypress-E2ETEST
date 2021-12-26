describe('Searchbox E2E Test', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        
    });
    it('should type into searchbox and submit with presenting enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('should show result search resuts page', () => {
        cy.get('h2').contains('Search Results:')
    });
});