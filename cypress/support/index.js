// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const { Before, After } = require('cypress-cucumber-preprocessor/steps');

before(function () {
    cy.log("Support Before (Global Scope)");
})

beforeEach(function () {
    cy.log("Support Before Each (Global Scope)");
})

after(function () {
    cy.log("Support After (Global Scope) - this is called in the wrong place, Cypress bug");
})

afterEach(function () {
    cy.log("Support After Each (Global Scope)");
})

Before(function () {
    cy.log('Cucumber Before (Global Scope)');
})

After(function () {
    cy.log('Cucumber After (Global Scope)');
})
