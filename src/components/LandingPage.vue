<template>
    <Categories />
    <Carousel />
    <Books :showUserActions="true" />
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import Categories from '@/components/Categories.vue';
import Books from '@/components/Books.vue'


</script>
