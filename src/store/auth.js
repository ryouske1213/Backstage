import { defineStore } from "pinia";

export const useMemeberStore = defineStore('auth', {
  state: () => ({
    memberState: false
  }),

  actions: {
    showState() {
        this.memberState = true

    },
    closeState() {
        this.memberState = false

    }
  }
})