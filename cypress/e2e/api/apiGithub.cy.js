import { faker } from "@faker-js/faker";

describe("Criar um repositório no GitHub", () => {
  const baseUrl = "https://api.github.com";
  const githubToken = Cypress.env("github_token");
  const repositorio = `repoCypressAuto-${faker.string.alphanumeric(4)}`;
  const userName = "renanpacheco21";

  it.only("Cria um novo repositório no GitHub", () => {
    //Cria o repositório no GitHub
    cy.request({
      method: "POST",
      url: `${baseUrl}/user/repos`,
      headers: {
        Authorization: `token ${githubToken}`,
      },
      body: {
        name: repositorio,
        description: "Repositório criado via Cypress",
        private: false,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", repositorio);
    });

    //Valida o repositório criado
    cy.request({
      method: "GET",
      url: `${baseUrl}/repos/${userName}/${repositorio}`,
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }).then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body).to.have.property("name", repositorio);
    });

    //Cria a issue no repositório criado
    cy.request({
      method: "POST",
      url: `${baseUrl}/repos/${userName}/${repositorio}/issues`,
      headers: {
        Authorization: `token ${githubToken}`,
      },
      body: {
        title: "Primeira Issue criada via Cypress",
        body: "Esta é a descrição da primeira issue criada no repositório via Cypress.",
      },
    }).then((issueResponse) => {
      expect(issueResponse.status).to.eq(201);
      expect(issueResponse.body).to.have.property(
        "title",
        "Primeira Issue criada via Cypress"
      );
      expect(issueResponse.body).to.have.property(
        "body",
        "Esta é a descrição da primeira issue criada no repositório via Cypress."
      );
      cy.log(`Issue criada com sucesso: ${issueResponse.body.html_url}`);

      // Valida a criação da issue no repositório
      cy.request({
        method: "GET",
        url: `${baseUrl}/repos/${userName}/${repositorio}/issues`,
        headers: {
          Authorization: `token ${githubToken}`,
        },
      }).then((getIssuesResponse) => {
        expect(getIssuesResponse.status).to.eq(200);
        const createdIssue = getIssuesResponse.body.find(
          (issue) => issue.title === "Primeira Issue criada via Cypress"
        );
        expect(createdIssue).to.exist;
      });
    });

    // Exclui o repositório criado
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/repos/${userName}/${repositorio}`,
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(204);

      // Verificar se o repositório foi excluído
      cy.request({
        method: "GET",
        url: `${baseUrl}/repos/${userName}/${repositorio}`,
        headers: {
          Authorization: `token ${githubToken}`,
        },
        failOnStatusCode: false,
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(404);
      });
    });
  });
});
