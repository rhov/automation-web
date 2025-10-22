class menu {


    accessHomePage(){
        cy.visit('http://automationexercise.com');
        this.assertVerifyHomePage();   
        return this;
    }

    accessProductsPage() {
        cy.get('a[href="/products"]').click();
    }

    assertVerifyHomePage(){
        cy.log('VERIFICANDO SE ESTAMOS NA HOME PAGE');
        cy.url().should('eq','https://automationexercise.com/');
        cy.get('li > a[href="/"]').should('have.attr', 'style', 'color: orange;');
    }


}

module.exports = new menu();