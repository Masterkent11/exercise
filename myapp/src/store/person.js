const persons = {
  state: {
    people: [],
  },
  mutations: {
    updatePerson(state, updatePerson) {
      const person = state.people.find((p) => p.id === updatePerson.id);
      if (person) {
        person.name = updatePerson.name;
        person.details = updatePerson.details;
      }
    },
    deletePerson(state, personId) {
      const index = state.findIndex((p) => p.id === personId);
      if (index !== -1) {
        state.people.splice(index, 1);
      }
    },
    addPerson(state, newPerson) {
      state.people.push(newPerson);
    },
  },
};

export default persons;
