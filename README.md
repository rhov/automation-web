
# Automation Web - Cypress

Este projeto utiliza Cypress para automação de testes end-to-end em aplicações web. Abaixo estão os principais conceitos, bibliotecas e comandos utilizados.


## Principais Conceitos

- **Cypress**: Framework de testes end-to-end para aplicações web, fácil de configurar e executar.
- **Faker**: Biblioteca para geração de dados fake (nome, e-mail, endereço, texto, etc.), utilizada para tornar os testes mais dinâmicos e evitar dados repetidos.
- **Chai**: Biblioteca de asserções utilizada pelo Cypress para validar resultados dos testes.
- **Encadeamento de Métodos**: Métodos que retornam `this` permitem chamadas encadeadas, facilitando a escrita de fluxos de navegação.
- **Asserts**: Validação de resultados usando `.should()` e `expect()` para garantir que elementos, textos e URLs estejam corretos.

## Exemplos de Comandos e Asserts

### Executar apenas um teste

Adicione `.only` ao bloco desejado:
```js
it.only('Executa só este teste', () => {
	// ...
});
```

### Executar um arquivo específico

```bash
npx cypress run --spec cypress/e2e/3-automation-exercise/automation-exercise.cy.js
```

### Assert de URL
```js
cy.url().should('include', 'automationexercise.com'); // parte da URL
cy.url().should('eq', 'https://automationexercise.com/'); // URL exata
```

### Assert de texto em lista de produtos
```js
cy.get('.productinfo p').each(($el) => {
	expect($el.text().toLowerCase()).to.include('jeans');
});
```

### Assert de estilo CSS
```js
cy.get('li > a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)');
```

### Encadeamento de métodos
```js
menu.accessHomePage().accessProductsPage();
```

## Dicas
- Use o Faker para evitar dados duplicados e tornar os testes mais robustos.
- Utilize comandos customizados para manter os testes organizados e reutilizáveis.
- Use `.only` para focar em um teste durante o desenvolvimento.
- Prefira asserts específicos para cada tipo de retorno (elemento, texto, URL, etc).
- Consulte a documentação oficial do Cypress e do Faker para mais opções.

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


## Instalação de Dependências

```bash
npm install
# Instale as dependências de relatórios:
npm install --save-dev cypress-mochawesome-reporter
```

## Configuração do Reporter Mochawesome

No arquivo `cypress.config.js`:

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		reporter: 'cypress-mochawesome-reporter',
		reporterOptions: {
			reportDir: 'cypress/reports',
			charts: true,
			overwrite: false,
			html: true,
			json: true
		},
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
			return config;
		},
	},
});
```

No arquivo `cypress/support/e2e.js`:

```js
import 'cypress-mochawesome-reporter/register';
```

## Como gerar e visualizar o relatório

Após rodar os testes com:

```bash
npx cypress run
```

O relatório HTML será gerado em `cypress/reports/index.html`. Basta abrir esse arquivo no navegador para visualizar os resultados dos testes.

## Instalação resumida

```bash
npm install
npm install --save-dev cypress-mochawesome-reporter
```

## Uso resumido

1. Configure o `cypress.config.js` conforme acima.
2. Importe o reporter em `cypress/support/e2e.js`.
3. Execute os testes com `npx cypress run`.
4. Abra o relatório em `cypress/reports/index.html`.

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
