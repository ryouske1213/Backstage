import { defineStore } from "pinia";

export const useMemeberStore = defineStore('auth', {
  state: () => ({
    model: false
  }),

  actions: {
    showModel() {
        this.model = true
        console.log(this.model)

    },
    closeModel() {
        this.model = false
        console.log(this.model)

    }
  }
})