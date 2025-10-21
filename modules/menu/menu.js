class menu {
    accessProductsPage() {
        cy.get('a[href="/products"]').click();
    }
}

module.exports = new menu();