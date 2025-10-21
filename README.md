
# Automation Web - Cypress

Este projeto utiliza Cypress para automação de testes end-to-end em aplicações web. Abaixo estão os principais conceitos, bibliotecas e comandos utilizados.

## Principais Conceitos

- **Cypress**: Framework de testes end-to-end para aplicações web, fácil de configurar e executar.
- **Faker**: Biblioteca para geração de dados fake (nome, e-mail, endereço, texto, etc.), utilizada para tornar os testes mais dinâmicos e evitar dados repetidos.
- **Chai**: Biblioteca de asserções utilizada pelo Cypress para validar resultados dos testes.

## Estrutura do Projeto

```
cypress.config.js
package.json
cypress/
	e2e/
		...
	fixtures/
	helpers/
	support/
```

- **cypress/e2e/**: Contém os arquivos de testes automatizados.
- **cypress/fixtures/**: Arquivos de dados estáticos para uso nos testes.
- **cypress/helpers/**: Funções auxiliares para facilitar a escrita dos testes.
- **cypress/support/**: Comandos customizados e configurações globais do Cypress.

## Principais Comandos e Exemplos

### Instalação de Dependências

```bash
npm install
```

### Executar os Testes

```bash
npx cypress open   # Abre o Cypress em modo interativo
npx cypress run    # Executa os testes em modo headless
```

### Uso do Faker

```js
const { faker } = require('@faker-js/faker');

// Gerar nome
faker.person.fullName();
// Gerar e-mail
faker.internet.email();
// Gerar endereço
faker.location.streetAddress();
// Gerar texto grande
faker.lorem.paragraphs(3);
```

### Exemplo de Teste

```js
describe('Cadastro de usuário', () => {
	it('Deve cadastrar um novo usuário', () => {
		cy.visit('https://automationexercise.com/');
		cy.get('input[data-qa="signup-email"]').type(faker.internet.email());
		cy.get('input[data-qa="signup-name"]').type(faker.person.fullName());
		// ...outros comandos
	});
});
```

### Comandos Customizados

Você pode criar comandos customizados em `cypress/support/commands.js` para reutilizar ações comuns:

```js
Cypress.Commands.add('loginUsuario', () => {
	// lógica de login
});
```

## Dicas
- Use o Faker para evitar dados duplicados e tornar os testes mais robustos.
- Utilize comandos customizados para manter os testes organizados e reutilizáveis.
- Consulte a documentação oficial do Cypress e do Faker para mais opções.

## Documentação
- [Cypress](https://docs.cypress.io/)
- [Faker](https://fakerjs.dev/)
- [Chai](https://www.chaijs.com/)

---

Se tiver dúvidas ou sugestões, contribua com o projeto!
