import { defineStore } from "pinia";

export const useMemeberStore = defineStore('auth', {
  state: () => ({
    model: false,
    ReviseModel: false
  }),

  actions: {
    showModel() {
        this.model = true
        console.log(this.model)

    },
    closeModel() {
        this.model = false
        console.log(this.model)
    },
    ReviseShowModel() {
        this.ReviseModel = true
        console.log(this.ReviseModel)
    },
    ReviseCloseModel() {
        this.ReviseModel = false
        console.log(this.ReviseModel)
    }
  }
})