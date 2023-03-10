import { defineStore } from "pinia"

export const useCommStore = defineStore("comm", {
  state: () => ({ count: 1 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
