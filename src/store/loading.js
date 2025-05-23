import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () =>({
    isLoading:false
  }),
  actions: {
    start() {
      this.isLoading = true;
    },
    stop() {
      this.isLoading = false;
    },
    set(value) {
      this.isLoading = value;
    },
  },
});
