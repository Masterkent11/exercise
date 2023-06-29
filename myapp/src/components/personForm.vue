<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="Name" required />
    <input v-model="details" placeholder="Details" required />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { people } from "../api/data.js";

export default {
  data() {
    return {
      name: "",
      details: "",
    };
  },
  methods: {
    submit() {
      const person = {
        id: Date.now(),
        name: this.name,
        details: this.details,
      };
      people.push(person);
      this.$emit("personCreated"); // Emit the event
      this.name = ""; // Reset the form fields
      this.details = "";
    },
  },
};
</script>
