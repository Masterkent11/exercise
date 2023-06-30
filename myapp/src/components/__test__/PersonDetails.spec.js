import { mount } from "@vue/test-utils";
import PersonDetails from "@/components/PersonDetails.vue";
import { people } from "@/api/data.js";

describe("PersonDetails", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PersonDetails, {
      propsData: {
        id: people[0].id,
      },
      stubs: ["PersonDelete"], // This is necessary if 'PersonDelete' is a child component, and you want to avoid mounting it.
    });
  });

  it("displays a person's name and details", () => {
    const nameCell = wrapper.find('td:contains("Name")');
    const detailsCell = wrapper.find('td:contains("Details")');

    expect(nameCell.text()).toBe(people[0].name);
    expect(detailsCell.text()).toBe(people[0].details);
  });

  it("can edit a person", async () => {
    const editButton = wrapper.find('button:contains("Edit")');
    await editButton.trigger("click");

    const nameInput = wrapper.find("input");
    const detailsInput = wrapper.find("textarea");
    await nameInput.setValue("New Name");
    await detailsInput.setValue("New Details");

    const saveButton = wrapper.find('button:contains("Save")');
    await saveButton.trigger("click");

    expect(wrapper.vm.editedPerson.name).toBe("New Name");
    expect(wrapper.vm.editedPerson.details).toBe("New Details");
  });
});
