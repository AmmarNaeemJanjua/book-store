<template>
  <v-container>
    <v-card>
      <v-card-title>Cart</v-card-title>
      <v-table>
        <thead>
          <tr>
            <!-- <th class="text-center">ID</th> -->
            <th class="text-center">Image</th>
            <th class="text-center">Title</th>
            <th class="text-center">Price</th>
            <th class="text-center">Quantity</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cartItem in cartItems" :key="cartItem.book.id">
            <!-- <td class="text-center">{{ cartItem.book.id }}</td> -->
            <td class="text-center">
              <img :src="cartItem.book.cover_image" alt="Product Image" height="90">
            </td>
            <td class="text-center">{{ cartItem.book.title }}</td>
            <td class="text-center">${{ calculatePrice(cartItem) }}</td>
            <td class="text-center">{{ cartItem.quantity }}</td>
            <td class="text-center">
              <v-row justify="space-around">
                <v-btn size="x-small" @click="removeFromCart(cartItem.book)" color="red"><v-icon>mdi-minus</v-icon></v-btn>
                <v-btn size="x-small" @click="incrementQuantity(cartItem)" color="green"><v-icon>mdi-plus</v-icon></v-btn>
              </v-row>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>

  <v-container>
    <v-card width="200">
      <v-card-title>Order Summary</v-card-title>
      <v-card-text>Price: ${{ calculateTotalPrice() }}</v-card-text>
      <v-card-actions>
        <v-btn @click="confirmOrder" color="primary">Confirm Order</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

  
</template>
  
<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters["cart/getCartItems"];
    },
  },
  methods: {
    removeFromCart(book) {
      this.$store.commit("cart/removeFromCart", book);
    },
    incrementQuantity(cartItem) {
      this.$store.commit("cart/addToCart", cartItem.book);
    },
    calculatePrice(cartItem) {
      return cartItem.book.price * cartItem.quantity;
    },
    calculateTotalPrice() {
      let totalPrice = 0;

      for (const cartItem of this.cartItems) {
        totalPrice += this.calculatePrice(cartItem);
      }

      return totalPrice;
    },
    async confirmOrder() {
      try {
        await this.$store.dispatch("cart/confirmOrder");
      } catch (error) {
        console.error("Error confirming order:", error);
      }
    },
  },
};
</script>