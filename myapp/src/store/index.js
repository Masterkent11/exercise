import { createStore } from "vuex";
import persons from "./person";

const store = createStore({
  modules: {
    persons,
  },
});

export default store;
