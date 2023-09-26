<template>
  <v-app-bar app color="deep-orange-darken-4">
    <router-link to="/" class="custom-link">
      <v-toolbar-title class="ml-2">
        Book Store
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-text-field v-model="search" label="Search" hide-details single-line rounded variant="outlined"
      prepend-inner-icon="mdi-magnify">
    </v-text-field>

    <v-spacer></v-spacer>

    <v-btn icon @click="openUserProfile">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn icon @click="openCart">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
//
</script>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    openUserProfile() {
      // Implement your logic to open the user profile here
      // For example, show a dialog or navigate to a profile page
      console.log('User Profile Clicked');
    },
    openCart() {
      // Implement your logic to open the cart here
      // For example, show a cart drawer or navigate to a cart page
      console.log('Cart Clicked');
    },
  },
};
</script>

<style>
.custom-link {
  text-decoration: none;
  color: inherit;
}
</style>