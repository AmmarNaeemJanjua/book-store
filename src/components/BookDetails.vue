<template>
    <v-container>

        <v-row>
            <!-- Book Image (Left) -->
            <v-col cols="12" md="3">
                <v-img :src="specificbook.cover_image" height="400"></v-img>
            </v-col>

            <!-- Book Details (Right) -->
            <v-col cols="12" md="9">
                <v-card height="400">
                    <div class="mt-8 ml-8">
                        <v-card-title class="text-h4">{{ specificbook.title }}</v-card-title>
                        <v-card-subtitle class="mb-4">By: {{ specificbook.author }}</v-card-subtitle>
                        <v-card-text>Description: {{ specificbook.description }}</v-card-text>
                        <v-card-text>Rating: {{ bookdetails.details.rating }}</v-card-text>
                        <v-card-text>Price: ${{ specificbook.price }}</v-card-text>
                        <v-card-actions>
                            <v-btn @click="addToCart">Add to Cart</v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-card>
            <v-card-title class="ml-4 mt-4">Reviews</v-card-title>
            <v-card-text>
                <v-rating v-model="bookdetails.details.rating" :half-increments="0.5" color="amber" disabled></v-rating>
                <v-list>
                    <v-list-item>
                        <li v-for="review in bookdetails.details.reviews" :key="review.user_id">{{ review.text }}</li>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>

    <div class="text-center text-h6">Related Books</div>

    <v-container>
        <v-row>
            <v-col v-for="relatedBook in bookdetails.details.related_books" :key="relatedBook" cols="12" sm="6" md="4"
                lg="3">
                <v-card>
                    <v-img class="align-end text-white" height="300" :src="relatedBook">
                    </v-img>
                    <v-card-text>
                        By: {{ specificbook.author }}
                    </v-card-text>
                    <v-card-subtitle class="mb-2">
                        {{ '$' + specificbook.price }}
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            specificbook: [],
            bookdetails: {
                details: {
                    rating: [],
                    related_books: [],
                },
            },
        };
    },
    methods: {
        async specificBook() {
            try {
                const bookId = this.$route.params.id;
                const response = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
                this.specificbook = response.data.book;
            } catch (error) {
                console.error("Error fetching specific book:", error);
            }
        },

        async bookDetails() {
            try {
                const id = this.$route.params.id;
                const response = await axios.get(`http://10.0.10.220:8080/api/bookdetail/${id}`)
                this.bookdetails = response.data;
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        },

        addToCart() {

        },

    },
    mounted() {
        this.specificBook();
        this.bookDetails();
    },
};
</script>