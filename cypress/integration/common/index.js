before("common before", function () {
    cy.log('Common Before (Feature Scope)');
});

beforeEach(function () {
    cy.log('Common Before Each (Feature Scope)');
});

after(function () {
    cy.log('Common After (Feature Scope)');
});

afterEach(function () {
    cy.log('Common After Each (Feature Scope)');
});

Before(function () {
    cy.log('Cucumber Before (Feature Scope)');
})

After(function () {
    cy.log('Cucumber After (Feature Scope)');
})
