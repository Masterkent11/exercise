<template>
  <button
    @click="deletePerson"
    class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  >
    Delete Person
  </button>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async deletePerson() {
      await axios.delete(`http://localhost:3000/persons/${this.id}`);
      this.$emit("deleted");
    },
  },
};
</script>
