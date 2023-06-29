import { mount } from "cypress/vue";
import PersonDetails from "../PersonDetails/PersonDetails.vue";
import { people } from "../../api/data";

describe("PersonDetails.vue", () => {
  it("renders person details correctly", () => {
    const testPerson = people[0]; // Let's assume people array is not empty
    mount(PersonDetails, {
      propsData: {
        id: testPerson.id,
      },
    });

    // Assert that the person details are rendered correctly
    cy.get("table").within(() => {
      cy.get("td").eq(0).should("contain", testPerson.name);
      cy.get("td").eq(1).should("contain", testPerson.details);
    });
  });

  it("enters and leaves edit mode correctly", () => {
    const testPerson = people[0]; // Let's assume people array is not empty
    mount(PersonDetails, {
      propsData: {
        id: testPerson.id,
      },
    });

    cy.get(".bg-blue-500").click(); // Click on the Edit button
    cy.get("input").should("be.visible"); // Assert that the input fields are visible

    cy.get(".bg-green-500").click(); // Click on the Save button
    cy.get("input").should("not.exist"); // Assert that the input fields are no longer visible
  });
});
