import PersonList from "./PersonList";

describe("<PersonList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PersonList);
  });
});
