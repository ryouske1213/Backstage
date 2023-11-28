import { defineStore } from 'pinia';
import axios from 'axios'
// const pinia = createPinia();

export const useApiStore = defineStore('api', {
    state: () => ({
      data: null,
      loading: false,
      error: null,
      id: Number,
      productId: Number,
      name: String,
      roast: String,
      Origin: String,
      method: String,
      flavour: String,
      unit: Number,
      price: Number,
      count: Number,
    }),

    actions: {
      async fetchData(id, productId, name, roast, Origin, method, flavour, unit, price, count) {
        this.loading = true;

        this.id = id
        this.productId = productId,
        this.name = name,
        this.roast = roast,
        this.Origin = Origin,
        this.method = method,
        this.flavour = flavour,
        this.unit = unit,
        this.price = price,
        this.count = count
  
        try {
          // 在這裡執行 API 請求，這裡只是一個示例
          const response = await axios.get(`http://localhost:8080/api/coffeeData?id=${id}&productId=${productId}&name=${name}&roast=${roast}&Origin=${Origin}&method=${method}&flavour=${flavour}&unit=${unit}&price=${price}&count=${count}`);
          const data = await response.json();
          this.data = data;
          this.error = null;
        } catch (error) {
          this.error = error.message || 'An error occurred';
        } finally {
          this.loading = false;
        }
      },
    },
  });