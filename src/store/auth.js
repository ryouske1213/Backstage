import { defineStore } from "pinia";

export const useMemeberStore = defineStore('auth', {
  state: () => ({
    memberState: false
  }),

  actions: {
    showState() {
        this.memberState = true
        console.log(this.memberState)

    },
    closeState() {
        this.memberState = false
        console.log(this.memberState)

    }
  }
})