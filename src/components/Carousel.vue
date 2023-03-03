<template>
  <v-carousel>
    <v-carousel-item
      v-for="item in items"
      :key="item"
      :src="item"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
