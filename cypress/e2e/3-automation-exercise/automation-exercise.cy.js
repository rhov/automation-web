/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');

describe('Automation exercise', () => {
    it.only('Cadastrar usuário', () => {
        const timestamp = new Date().getTime();
        // Altera a responsividade
        cy.viewport('samsung-s10');

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-email"]').type(`sheldon-${timestamp}@mailinator.com`);
        cy.get('input[data-qa="signup-name"]').type("Sheldon Lee Cooper");
        //cy.get('button[data-qa="signup-button"]').click();
        cy.contains('button', 'Signup').click();
        cy.get('input[type="radio"]').check('Mr');

        //Pegando por id
        cy.get('input#password').type('teste123', { log: false });

        // O select podemos buscar por value ou valor visivel
        cy.get('select[data-qa=days]').select('23');
        cy.get('select[data-qa=months]').select('March');
        cy.get('select[data-qa=years]').select('1989');

        //checkboxes
        cy.get('input#newsletter').check();
        cy.get('input[type="checkbox"][name="optin"]').check();

        //Preenchendo endereço com faker
        cy.get('input[data-qa="first_name"]').type(faker.person.firstName());
        cy.get('input[data-qa="last_name"]').type(faker.person.lastName());
        cy.get('input[data-qa="company"]').type(faker.company.name());
        cy.get('input[data-qa="address"]').type(faker.location.streetAddress());
        cy.get('input[data-qa="address2"]').type(faker.location.secondaryAddress());

        cy.get('select[data-qa="country"]').select('Canada');

        cy.get('input[data-qa="state"]').type(faker.location.state());
        cy.get('input[data-qa="city"]').type(faker.location.city());
        cy.get('input[data-qa="zipcode"]').type(faker.location.zipCode());
        cy.get('input[data-qa="mobile_number"]').type(faker.phone.number());

        cy.contains('button','Create Account').click();

        // Assert
        cy.url().should('includes','account_created');
        cy.contains('b','Account Created!');






    });
    it('Login', () => {
        cy.loginUsuario();
    });


});

