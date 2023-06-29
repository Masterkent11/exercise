import { mount } from "@cypress/vue";
import PersonDetails from "../../src/components/PersonDetails/PersonDetails.vue";
import { people } from "../../src/api/data";

describe("PersonDetails", () => {
  beforeEach(() => {
    mount(PersonDetails, {
      propsData: {
        id: people[0].id,
      },
    });
  });
  it("display a person's name and details", () => {
    cy.get("table").within(() => {
      cy.get("th").contains("Name").next("td").contains(people[0].name);
      cy.get("th").contains("Details").next("td").contains(people[0].details);
    });
  });
  it("can edit a person's name and details", () => {
    cy.get("button").contains("Edit").click();

    cy.get("input").clear().type("New name");
    cy.get("textarea").clear().type("New details");
    cy.get("button").contains("Save").click();

    cy.get("table").within(() => {
      cy.get("th").contains("Name").next("td").contains("New name");
      cy.get("th").contains("Details").next("td").contains("New details");
    });
  });

  it("can delete a person", () => {
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("button")
      .contains("Delete Person")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.callWith(
          "Are you sure you want to delete this person?"
        );
      });
  });
});
