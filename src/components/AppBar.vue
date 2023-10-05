<template>
  <v-app-bar app color="deep-orange-darken-4">

    <template v-if="showUserAppBar">
      <v-container>
        <v-row align="center">
          <v-col cols="4">
            <v-toolbar-title>
              <router-link to="/" class="custom-link">
                Bookify
              </router-link>
            </v-toolbar-title>
          </v-col>

          <v-col cols="4">
            <v-text-field v-model="search" label="Search" hide-details single-line rounded variant="outlined"
              prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-col>

          <v-col cols="1">
            <v-btn to="/wishlist" icon @click="openWishlist">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="1">
            <v-btn to="/userprofile" icon @click="openUserProfile">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="1">
            <v-btn to="/cart" icon @click="openCart">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="1">
            <v-btn v-if="!user" to="/loginview"><v-icon>mdi-login</v-icon></v-btn>
            <v-btn v-else @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-if="showAdminAppBar">
      <v-container>
        <v-row>
          <v-col>
            <v-toolbar-title>
              <router-link to="/adminview" class="custom-link">
                Bookify
              </router-link>
            </v-toolbar-title>
          </v-col>

          <v-col cols="auto">
            <v-btn to="/adminview/manageorders">Orders</v-btn>

            <v-btn to="/adminview/allusers">Users</v-btn>

            <v-btn v-if="!user" to="/loginview"><v-icon>mdi-login</v-icon></v-btn>
            <v-btn v-else @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>
</template>
  
<script setup>
import axios from 'axios';

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
  computed: {
    user() {
      return localStorage.getItem('user-info');
    },
  },
  methods: {
    openUserProfile() {

      console.log('User Profile Clicked');
    },
    openCart() {

      console.log('Cart Clicked');
    },
    logout() {
      const token = JSON.parse(localStorage.getItem('user-info')).token;
      axios.post('http://10.0.10.220:8080/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          console.log(response.data.message);
          localStorage.removeItem('user-info');
          window.location.reload();
        })
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