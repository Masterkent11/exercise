import { createStore } from "vuex";

const store = createStore({
  state: {
    people: [],
  },
  mutations: {
    updatePerson(state, updatedPerson) {
      const person = state.people.find((p) => p.id === updatedPerson.id);
      if (person) {
        person.name = updatedPerson.name;
        person.details = updatedPerson.details;
      }
    },
    deletePerson(state, personId) {
      const index = state.people.findIndex((p) => p.id === personId);
      if (index !== -1) {
        state.people.splice(index, 1);
      }
    },
    addPerson(state, newPerson) {
      state.people.push(newPerson);
    },
  },
});

export default store;
