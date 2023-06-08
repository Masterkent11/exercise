<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="Name" required />
    <input v-model="details" placeholder="Details" required />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      details: "",
    };
  },
  methods: {
    async submit() {
      const person = {
        name: this.name,
        details: this.details,
      };
      await axios.post("http://localhost:3000/persons", person);
      this.$emit("personCreated"); // Emit the event
      this.name = ""; // Reset the form fields
      this.details = "";
    },
  },
};
</script>
