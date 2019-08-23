before(function () {
    cy.log('Second Before (Scoped to Second Feature)');
});

beforeEach(function () {
    cy.log('Second Before Each (Scoped to Second Feature)');
});

after(function () {
    cy.log('Second After (Scoped to Second Feature)');
});

afterEach(function () {
    cy.log('Second After Each (Scoped to Second Feature)');
});

Before(function () {
    cy.log('Cucumber Before (Scoped to Second Feature)');
})

After(function () {
    cy.log('Cucumber After (Scoped to Second Feature)');
})

