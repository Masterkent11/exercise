<template>
  <div class="container mx-auto">
    <table class="w-full table-auto divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="py-3 px-6 text-left">Name</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="person in persons"
          :key="person.id"
          @click="$emit('select', person.id)"
        >
          <td class="py-4 px-6 cursor-pointer">{{ person.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      persons: [],
    };
  },
  async created() {
    await this.fetchPersons();
  },
  methods: {
    async fetchPersons() {
      const response = await axios.get("http://localhost:3000/persons");
      this.persons = response.data;
    },
    async updatePerson(updatedPerson) {
      await axios.put(
        `http://localhost:3000/persons/${updatedPerson.id}`,
        updatedPerson
      );
      this.persons = this.persons.map((person) => {
        if (person.id === updatedPerson.id) {
          return updatedPerson;
        }
        return person;
      });
    },
    async deletePerson(personId) {
      await axios.delete(`http://localhost:3000/persons/${personId}`);
      this.persons = this.persons.filter((person) => person.id !== personId);
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

td {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>
