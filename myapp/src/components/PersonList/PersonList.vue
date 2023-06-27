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
import { people } from "../../api/data.js";

export default {
  data() {
    return {
      persons: people,
    };
  },
  methods: {
    updatePerson(updatedPerson) {
      const person = this.persons.find((p) => p.id === updatedPerson.id);
      if (person) {
        person.name = updatedPerson.name;
        person.details = updatedPerson.details;
      }
    },
    deletePerson(personId) {
      const index = this.persons.findIndex((p) => p.id === personId);
      if (index !== -1) {
        this.persons.splice(index, 1);
      }
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
