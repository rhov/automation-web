class products {
    assertVerifyProductsPage() {
        cy.log('VERIFICANDO SE ESTAMOS NA PÁGINA DE PRODUTOS');
        cy.url().should('include', '/products');
        cy.get('h2[class="title text-center"]').should('have.text', 'All Products');
        cy.get('div[class="product-image-wrapper"]').should('be.visible');
    }

    assertVerifyProductsDetailPage() {
        cy.log('VERIFICANDO SE ESTAMOS NA PÁGINA DE DETALHES DO PRODUTOS');
        cy.contains('button', 'Add to cart').should('be.visible');
        cy.url().should('include', '/product_details/');
    }

    assertVerifySearchProductsList() {
        cy.get('.productinfo p').each(($el) => {
            expect($el.text().toLowerCase()).to.include('jeans');
        });
    }
    assertVerifyProductsSearchPage() {
        cy.log('VERIFICANDO SE ESTAMOS NA BUSCA DE PRODUTOS');
        cy.url().should('include', '/products?search');
        cy.get('h2[class="title text-center"]').should('have.text', 'Searched Products');

    }


    searchProduct(product) {
        cy.get('input#search_product').type(product);
        this.searchProductButton();
    }

    searchProductButton() {
        cy.get('button[id="submit_search"]').click();
    }



    viewProductDetails(productId) {
        cy.get(`a[href="/product_details/${productId}"]`).click();
    }
}

module.exports = new products();

