// inside /cypress/integration/personList.spec.js

// Import your data from the api
import { people } from "../../src/api/data.js";

describe("PersonList", () => {
  before(() => {
    cy.visit("http://localhost:5173"); // change this to the address where your Vue app is being served
  });

  it("displays list of people correctly", () => {
    cy.get("table tbody tr").should("have.length", people.length);
    people.forEach((person, index) => {
      cy.get("table tbody tr").eq(index).contains(person.name);
    });
  });
});
