<template>
  <button
    @click="deletePerson"
    class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  >
    Delete Person
  </button>
</template>

<script>
import { people } from "../api/data.js";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deletePerson() {
      const index = people.findIndex((p) => p.id === this.id);
      if (index !== -1) {
        people.splice(index, 1);
      }
      this.$emit("deleted");
    },
  },
};
</script>
