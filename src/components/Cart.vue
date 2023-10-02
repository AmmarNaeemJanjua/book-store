<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="book in cartItems" :key="book.id">{{ book.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        return this.$store.getters.getCartItems;
      },
    },
  };
  </script>