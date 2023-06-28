const person = {
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
  },
};
