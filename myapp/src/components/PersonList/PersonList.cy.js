import PersonList from "../PersonList/PersonList.vue";

describe("<PersonList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PersonList);
  });
});
