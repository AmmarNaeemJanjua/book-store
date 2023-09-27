<template>
  <v-container>
    <v-carousel hide-delimiters show-arrows="hover">
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <img :src="item.image" alt="Carousel Item" class="responsive-image" />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        { image: '../src/assets/carousel 1.jpeg' },
        { image: '../src/assets/carousel 2.jpeg' },
        { image: '../src/assets/carousel 3.jpeg' },
      ],
    };
  },
};
</script>

<style>
.responsive-image {
  width: 100%;
  height: 100%;
}
</style>