class products {
    assertVerifyProductsPage() {
        cy.url().should('include', '/products');
        cy.get('h2[class="title text-center"]').should('have.text', 'All Products');
        cy.get('div[class="product-image-wrapper"]').should('be.visible');
    }

    assertVerifyProductsDetailPage() {
        cy.contains('button', 'Add to cart').should('be.visible'); 
        cy.url().should('include', '/product_details/');
    }

    viewProductDetails(productId) {
        cy.get(`a[href="/product_details/${productId}"]`).click();
    }
}

module.exports = new products();

