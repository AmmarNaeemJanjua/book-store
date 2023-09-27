<template>
  <v-app-bar app color="deep-orange-darken-4">

    <template v-if="showUserAppBar">
      <router-link to="/" class="custom-link">
        <v-toolbar-title class="ml-2">
          Book Store
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-text-field class="ml-4" v-model="search" label="Search" hide-details single-line rounded variant="outlined"
        prepend-inner-icon="mdi-magnify">
      </v-text-field>

      <v-spacer></v-spacer>

      <v-btn to="/wishlist" icon @click="openWishlist">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/userprofile" icon @click="openUserProfile">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn to="/cart" icon @click="openCart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </template>

    <template v-if="showAdminAppBar">
      <router-link to="/adminview" class="custom-link">
        <v-toolbar-title class="ml-2">
          Book Store
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn to="/adminview/manageorders">Orders</v-btn>
      <v-btn to="/adminview/allusers">Users</v-btn>
      <v-btn to="/adminview/invoice">Invoice</v-btn>
    </template>

  </v-app-bar>
</template>
  
<script setup>
//
</script>
  
<script>
export default {
  props: {
    showUserAppBar: Boolean,
    showAdminAppBar: Boolean,
  },
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