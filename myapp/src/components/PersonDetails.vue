<template>
  <div v-if="person" class="p-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">
        {{ editing ? editedPerson.name : person.name }}
      </h2>
      <div class="space-x-2">
        <button
          v-if="!editing"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          @click="startEditing"
        >
          Edit
        </button>
        <button
          v-if="editing"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          @click="updatePerson"
        >
          Save
        </button>
        <PersonDelete :id="id" @deleted="handleDelete" />
      </div>
    </div>
    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
      <tbody>
        <tr>
          <th class="py-2 px-4 bg-gray-100 border-b border-gray-200">Name</th>
          <td class="py-2 px-4 border-b border-gray-200">
            <input
              v-if="editing"
              v-model="editedPerson.name"
              class="w-full px-2 py-1 border rounded"
            />
            <span v-else>{{ editing ? editedPerson.name : person.name }}</span>
          </td>
        </tr>
        <tr>
          <th class="py-2 px-4 bg-gray-100 border-b border-gray-200">
            Details
          </th>
          <td class="py-2 px-4 border-b border-gray-200">
            <textarea
              v-if="editing"
              v-model="editedPerson.details"
              class="w-full px-2 py-1 border rounded"
            ></textarea>
            <span v-else>{{
              editing ? editedPerson.details : person.details
            }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
import { people } from "../api/data.js";
import PersonDelete from "./PersonDelete.vue";

export default {
  data() {
    return {
      person: null,
      editedPerson: null,
      editing: false,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    PersonDelete,
  },
  methods: {
    fetchPerson() {
      const person = people.find((p) => p.id === this.id);
      this.person = person;
      this.editedPerson = { ...person };
    },
    startEditing() {
      this.editing = true;
    },
    updatePerson() {
      const index = people.findIndex((p) => p.id === this.id);
      if (index !== -1) {
        people[index] = { ...this.editedPerson };
        this.person = { ...this.editedPerson };
        this.editing = false;
      }
    },
    handleDelete() {
      this.person = null;
      this.$emit("deleted");
    },
  },
  watch: {
    id() {
      this.fetchPerson();
    },
    person: {
      deep: true,
      handler() {
        this.editedPerson = { ...this.person };
      },
    },
  },
  created() {
    this.fetchPerson();
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  padding: 0.75rem;
  text-align: left;
}
</style>
