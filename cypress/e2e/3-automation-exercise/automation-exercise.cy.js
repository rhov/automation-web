/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');
const { expect } = require('chai');

describe('Automation exercise', () => {
    beforeEach(() => {
        cy.viewport('samsung-s10');
        cy.visit('https://automationexercise.com/');
    });

    it('Cadastrar usuário', () => {
        const timestamp = new Date().getTime();
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

        cy.contains('button', 'Create Account').click();

        // Assert
        cy.url().should('includes', 'account_created');
        cy.contains('b', 'Account Created!');



    });
    it('Login', () => {
        cy.loginUsuario();
    });

    it.only('Contact us', () => {
        cy.log(`FILL THE FORM ${faker.person.fullName()}`);
        cy.get('a[href="/contact_us"]').click();
        cy.get('input[data-qa="name"]').type(faker.person.fullName());
        cy.get('input[data-qa="email"]').type(faker.internet.email());
        cy.get('input[data-qa="subject"]').type("Teste Automatizado de envio de formulário com anexo");
        cy.get('textarea[data-qa="message"]').type(faker.lorem.paragraphs(1));
        
        cy.log('UPLOAD THE IMAGE');
        cy.fixture('iatec.jpeg').as('imagem-iatec');
        cy.get('input[name="upload_file"]').selectFile('@imagem-iatec');

        cy.log('SUBMIT FORM');
        cy.get('input[data-qa="submit-button"]').click();

        cy.log('ASSERTS');
        cy.contains('div','Success! Your details have been submitted successfully.'); //Indireta
        cy.contains('span',' Home'); // Indireta
        cy.get('.status').should('be.visible'); //Somente com should que aparece o destaque
        cy.get('.status').should('have.text','Success! Your details have been submitted successfully.');
        cy.get('div[class="status alert alert-success"]').should('have.text','Success! Your details have been submitted successfully.');
        cy.get('a[class="btn btn-success"]').should('be.visible');

    });


});

