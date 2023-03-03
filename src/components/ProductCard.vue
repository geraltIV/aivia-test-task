<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <carousel :items="item.images" />

    <v-card-item>
      <v-card-title>{{ item.title }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">$ • {{ item.price }}</div>

      <div>
        {{ item.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Product Card",
  components: {
    Carousel,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => ({
        title: "",
        description: "",
        price: 0,
      }),
    },
  },
};
</script>
