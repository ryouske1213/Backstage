import { defineStore } from 'pinia';
import axios from 'axios'
// const pinia = createPinia();

export const useApiStore = defineStore('api', {
    state: () => ({
      data: null,
      coffeeData: null,
      loading: false,
      error: null,
      id: Number,
      productId: Number,
      username: String,
      roast: String,
      Origin: String,
      method: String,
      flavour: String,
      unit: Number,
      price: Number,
      count: Number,
    }),

    actions: {
      async fetchData(id, productId, username, roast, Origin, method, flavour, unit, price, count) {
        this.loading = true;

        this.id = id
        this.productId = productId,
        this.username = username,
        this.roast = roast,
        this.Origin = Origin,
        this.method = method,
        this.flavour = flavour,
        this.unit = unit,
        this.price = price,
        this.count = count
  
        try {
          // 創建 CoffeeItem 資料
          const response = await axios.get(`http://localhost:8080/api/coffeeData?id=${id}&productId=${productId}&username=${username}&roast=${roast}&Origin=${Origin}&method=${method}&flavour=${flavour}&unit=${unit}&price=${price}&count=${count}`);
          const data = await response.json();
          this.data = data;
          this.error = null;
        } catch (error) {
          this.error = error.message || 'An error occurred';
        } finally {
          this.loading = false;
        }
      },
      async ShowCoffeeData() {
        try {
          // 查詢 CoffeeItem 所有資料
          const response = await axios.get('http://localhost:8080/api/coffeeData/Inquire')
          const { data } = response
          this.data = data
          this.error = null;
          return data
        } catch(error) {
          this.error = error.message || 'An error occurred';
        }
      },
      async ReviseCoffeeData(id, productId, username, roast, Origin, method, flavour, unit, price, count) {

        this.id = id
        this.productId = productId,
        this.username = username,
        this.roast = roast,
        this.Origin = Origin,
        this.method = method,
        this.flavour = flavour,
        this.unit = unit,
        this.price = price,
        this.count = count
        
        try {
          // 查詢 CoffeeItem 所有資料
          const response = await axios.patch(`http://localhost:8080/update/${id}`)
          const { data } = response
          this.data = data
          this.error = null;
          return data
        } catch(error) {
          this.error = error.message || 'An error occurred';
        } 
      }
    },
    getters: {
      
    }
  });