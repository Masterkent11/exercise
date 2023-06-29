<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-blue-600 py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-white text-3xl font-bold">Persons List</h1>
      </div>
    </header>
    <div class="container mx-auto py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2">
          <PersonList :key="personListKey" @select="selectPerson" />
        </div>
        <div class="md:col-span-1">
          <div v-if="selectedPerson" class="bg-white p-4 rounded shadow-md">
            <h2 class="text-xl font-bold mb-4">Person Details</h2>
            <PersonDetails
              :key="selectedPerson"
              :id="selectedPerson"
              @deleted="clearSelection"
            />
          </div>
          <div
            v-if="creatingNewPerson || !selectedPerson"
            class="bg-white p-4 rounded shadow-md"
          >
            <h2 class="text-xl font-bold mb-4">Create New Person</h2>
            <PersonForm @submit="finishCreatingPerson" />
          </div>
          <div
            v-if="!creatingNewPerson && selectedPerson"
            class="bg-white p-4 rounded shadow-md"
          >
            <h2 class="text-xl font-bold mb-4">Create Person</h2>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              @click="createPerson"
            >
              Create Person
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonList from "./components/PersonList/PersonList.vue";
import PersonDetails from "./components/PersonDetails/PersonDetails.vue";
import PersonForm from "./components/PersonForm/personForm.vue";

export default {
  components: {
    PersonList,
    PersonDetails,
    PersonForm,
  },
  data() {
    return {
      selectedPerson: null,
      creatingNewPerson: false,
      personListKey: 0,
    };
  },
  methods: {
    selectPerson(id) {
      this.selectedPerson = id;
      this.creatingNewPerson = false;
    },
    clearSelection() {
      this.selectedPerson = null;
      this.personListKey += 1;
    },
    createPerson() {
      this.selectedPerson = null;
      this.creatingNewPerson = true;
    },
    finishCreatingPerson() {
      this.creatingNewPerson = false;
      this.personListKey += 1;
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
