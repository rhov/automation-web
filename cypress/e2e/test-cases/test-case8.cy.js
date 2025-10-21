//Test Case 8: Verify All Products and product detail page
/*


1. Abra o navegador
2. Navegue até a URL 'http://automationexercise.com'
3. Verifique se a página inicial está visível com sucesso
4. Clique no botão 'Produtos'
5. Verifique se o usuário foi direcionado para a página TODOS OS PRODUTOS com sucesso
6. A lista de produtos está visível
7. Clique em 'Ver Produto' do primeiro produto
8. O usuário é direcionado para a página de detalhes do produto

*/
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