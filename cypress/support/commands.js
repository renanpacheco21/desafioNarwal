import { faker } from "@faker-js/faker";

Cypress.Commands.add("preencheFormulario", () => {
    cy.get('input[name="name"]').type(faker.person.fullName());
    cy.get('input[name="email"]').type('teste@logica.com');
    cy.get('input[name="job_title"]').type(faker.person.jobTitle());
    cy.get('input[name="personal_phone"]').type(faker.phone.number());
    cy.get('input[name="company"]').type(faker.company.name());
    cy.get("#rd-select_field-m4l7psxn").select('Exportação').should("have.value", 'Exportação');
    cy.contains('Enviar').click();
});
