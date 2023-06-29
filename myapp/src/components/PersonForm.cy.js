import PersonForm from "./PersonForm.vue";

describe("<PersonForm/>", () => {
  it("render", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PersonForm);
  });
});
