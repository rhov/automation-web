/// <reference types="cypress"/>

const products = require('../../../modules/products/products.js');
const menu = require('../../../modules/menu/menu.js');

describe('Test Case 8: Verify All Products and product detail page', () => {
    beforeEach(() => {
        //cy.viewport('samsung-s10');
        cy.visit('https://automationexercise.com/');
    });

    it('Verify All Products and product detail page', () => {
        cy.log('STEP 1 :: Access Products Page');
        menu.accessProductsPage();
        products.assertVerifyProductsPage();
        cy.log('STEP 2 :: View Product Details');
        products.viewProductDetails(1);
        products.assertVerifyProductsDetailPage();
    }); 
});