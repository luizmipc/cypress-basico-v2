/// <reference types="Cypress" />

const BASE_URL = './src/index.html'
const PAGE_TITLE = 'Central de Atendimento ao Cliente TAT'
describe(PAGE_TITLE, function() {
  it('verifica o título da aplicação', function() {
    cy.visit(BASE_URL)
    cy.title().should('eq', PAGE_TITLE)
  })
})