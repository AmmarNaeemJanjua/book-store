<template>
    <v-container>
        <v-card>
            <v-card-title>Wishlist</v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-center">Product ID</th>
                        <th class="text-center">Product Image</th>
                        <th class="text-center">Product Name</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in wishlist" :key="product.id">
                        <td class="text-center">{{ product.id }}</td>
                        <td class="text-center">
                            <img :src="product.image" alt="Product Image" width="80" height="80">
                        </td>
                        <td class="text-center">{{ product.name }}</td>
                        <td class="text-center">
                            <v-button @click="removeFromWishlist(product)">
                                <v-icon color="red" style="cursor: pointer">mdi-delete</v-icon>
                            </v-button>
                            
                            <v-button class="ml-10">
                                <v-icon color="green" style="cursor: pointer">mdi-cart-plus</v-icon>
                            </v-button>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
</template>
  
<script>
export default {
    
    data() {
        return {
            wishlist: [
                { id: "1", name: "Hello", image: "https://images.booksense.com/images/221/010/9780545010221.jpg"},
                { id: "2", name: "Hi", image: "https://images.booksense.com/images/221/010/9780545010221.jpg"},
                { id: "3", name: "Hey", image: "https://images.booksense.com/images/221/010/9780545010221.jpg"},
            ],
        };
    },
    methods: {
        removeFromWishlist(product) {
            const index = this.wishlist.indexOf(product);
            if (index !== -1) {
                this.wishlist.splice(index, 1);
            }
        },
    },
};
</script>
  