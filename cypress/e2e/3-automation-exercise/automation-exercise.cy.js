/// <reference types="cypress"/>

describe('Automation exercise', () => {
    it('Cadastrar usuário', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="login-email"]').type("sheldon@mailinator.com");
        cy.get('input[data-qa="login-password"]').type("sheldon@123");
        cy.get('button[data-qa="login-button"]').click();
        
    
    });
    it.only('Login', () => {
        cy.loginUsuario();
    });


});

