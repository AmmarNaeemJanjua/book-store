<template>
    <v-container>
        <v-card>
            <v-card-title>Wishlist</v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-center">Book ID</th>
                        <th class="text-center">Book Image</th>
                        <th class="text-center">Book Name</th>
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
            wishlist: [],
        };
    },
    methods: {
        async getWishlist() {
            try {
                const token = JSON.parse(localStorage.getItem('user-info')).token;
                
                const response = await axios.get('http://10.0.10.220:8080/api/wishlist', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                this.wishlist = response.data.wishlist;
            } catch (error) {
                console.error('Error fetching books:', error)
            }
        }
    },
};
</script>
  