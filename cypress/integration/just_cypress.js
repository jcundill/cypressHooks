describe('Hello world', () => {

    before(function () {
        cy.log('cy scoped Before');
    });

    beforeEach(function () {
        cy.log('cy scoped Before Each');
    });

    after(function () {
        cy.log('cy scoped After');
    });

    afterEach(function () {
        cy.log('cy scoped After Each');
    });

    it('works', () => {
        cy.log("pure cypress test stuff");

    });
});