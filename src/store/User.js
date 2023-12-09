import { defineStore } from 'pinia';
import axios from 'axios'

export const useUserApi = defineStore('User', {
    state: () => ({
        data: null,
        error: null,
        username: String,
        password: String
    }),

    actions: {
        async isUser(username, password){
            this.username = username,
            this.password = password

            try {
                const response = await axios.post('http://localhost:8080/api/User', username, password)
                const { data } = response
                this.data = data,
                this.error = null
            } catch(error) {
                this.error = error.message || 'An error occurred'
                console.log(error)
            }
        },
        async ShowUserData() {
            try {
              // 查詢 CoffeeItem 所有資料
              const response = await axios.get('http://localhost:8080/api/User/Account')
              const { data } = response
              this.data = data
              this.error = null;
              return data
            } catch(error) {
              this.error = error.message || 'An error occurred';
            }
          },
    }
})