import { mount } from "@cypress/vue";
import PersonForm from "../../src/components/PersonForm.vue";
describe("PersonForm.vue", () => {
  it("submits new person", () => {
    const stub = cy.stub();
    mount(PersonForm, {
      listeners: {
        personCreated: stub,
      },
    });

    cy.get("form").within(() => {
      cy.get('input[placeholder="Name"]').type("Test Name");
      cy.get('input[placeholder="Details"]').type("Test Details");
      cy.get('button[type="submit"]').click();
    });

    cy.wrap(stub).should("be.calledOnce");
  });

  it("resets form after submission", () => {
    mount(PersonForm);

    cy.get("form").within(() => {
      cy.get('input[placeholder="Name"]')
        .type("Test Name")
        .should("have.value", "Test Name");
      cy.get('input[placeholder="Details"]')
        .type("Test Details")
        .should("have.value", "Test Details");
      cy.get('button[type="submit"]').click();
      cy.get('input[placeholder="Name"]').should("have.value", "");
      cy.get('input[placeholder="Details"]').should("have.value", "");
    });
  });
});
