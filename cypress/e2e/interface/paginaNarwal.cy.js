describe("Casos de testes Página Narwal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("Solicita uma demonstração do sistema", () => {
    //Dado que acessa a pagina de solicitação de demonstração
    cy.contains("Solicite uma demonstração").click();
    //Quando preenchido e enviado o formulário
    cy.preencheFormulario();
    //Então é redirecionado para a página de confirmação de inscrição
    cy.contains("Recebemos sua inscrição");
  });

  it("Acessa a página Blog e busca conteúdo de Supply Chain", () => {
    //Dado que acessa a página Blog
    cy.contains("Blog").click();
    //Quando pesquisa pelo assunto supply chain e acessa o conteúdo
    cy.get("#elementor-search-form-01549fa").type("Supply Chain");
    cy.get(".e-font-icon-svg-container").click();
    cy.contains(
      "Supply chain no Comex: qual a importância e como superar os desafios"
    ).click();
    //Então é redireciado para a página do assunto
    cy.location("pathname", { timeout: 1000 }).should(
      "eq",
      "/blog/supply-chain-comex/"
    );
  });
});
