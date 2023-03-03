import { createStore } from "vuex";
import endpoint from "@/utils/axios";

export const store = createStore({
  state: () => ({
    products: [],
  }),
  mutations: {
    SET_PRODUCTS(store, products) {
      store.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      await endpoint
        .get("/products")
        .then((response) => {
          commit("SET_PRODUCTS", response.data.products);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    getProducts: (store) => store.products,
  },
});
