
/// <reference types="cypress"/>

const menu = require('../../../modules/menu/menu');
const product = require('../../../modules/products/products');

describe('Test Case 9', () => {
    it.only('Search Product', () => {
        cy.viewport('samsung-s10');
        menu.accessHomePage().accessProductsPage();
        product.assertVerifyProductsPage();
        product.searchProduct('Jeans');
        product.assertVerifyProductsSearchPage();
        product.assertVerifySearchProductsList();
    });
});