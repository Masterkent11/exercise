// cypress/integration/PersonList.spec.js

describe("PersonList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("displays a list of persons", () => {
    // This test assumes you have two persons, 'John Doe' and 'Jane Doe'
    cy.get("td").contains("John Doe");
    cy.get("td").contains("Jane Doe");
  });

  it("selects a person when a row is clicked", () => {
    cy.get("td").contains("John Doe").click();
    // Check if the person was selected (adapt this according to your app's behavior)
    // e.g. if the person's name is displayed somewhere else after selection
    cy.get(".selected-person").contains("John Doe");
  });
});
