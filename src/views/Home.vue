<template>
  <v-container class="justify-center d-flex">
    <loader v-if="loading" />
    <v-row v-else>
      <v-col
        v-for="product in allProducts"
        :key="product.id"
        cols="12"
        lg="4"
        md="4"
        sm="12"
        xs="12"
        class="d-flex"
        style="flex-direction: column"
      >
        <product-card :item="product" :loading="loading" class="flex-grow-1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/Loader.vue";
export default {
  name: "Products",
  components: {
    Loader,
    ProductCard,
  },
  data: () => ({
    loading: false,
    timeout: null,
  }),
  async mounted() {
    this.loading = true;
    await this.fetchProducts();
    this.loading = false;

    this.timeout = setTimeout(() => {
      sessionStorage.removeItem("token");
    }, 30000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  computed: {
    ...mapGetters({
      allProducts: "getProducts",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
  },
};
</script>
