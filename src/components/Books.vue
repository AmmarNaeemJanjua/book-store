<template>
  <v-container>
    <div class="justify-content-center">
      <v-row>
        <v-col v-for="(book, index) in paginatedBooks" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="mx-auto" max-width="300">
            <v-img class="align-end text-white" height="300" :src="book.cover_image">
            </v-img>
            <v-card-title>{{ book.title }}</v-card-title>

            <v-card-subtitle>
              {{ '$' + book.price }}
            </v-card-subtitle>

            <v-card-text>
              <div>{{ book.description }}</div>
            </v-card-text>

            <v-card-actions v-if="showUserActions">
              <v-btn color="orange" @click="bookDetails(book)">
                <v-icon>
                  mdi-information-outline
                </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="orange" @click="addToWishlist(book)">
                <v-icon>
                  mdi-heart-outline
                </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="orange">
                <v-icon @click="addToCart(book)">
                  mdi-cart
                </v-icon>
              </v-btn>
            </v-card-actions>

            <v-card-actions v-if="showAdminActions">
              <v-spacer></v-spacer>
              <v-btn color="orange" @click="showDialog = true">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>

              <v-btn color="orange" @click="deleteBook(book)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>

      <v-pagination v-model="page" :length="Math.ceil(books.length / perPage)" color="primary"
        class="mt-4 mb-4"></v-pagination>
    </div>
  </v-container>

  <v-dialog v-model="showDialog" max-width="600">
    <v-card>
      <v-card-title>Update Book</v-card-title>
      <v-card-text>
        <v-text-field v-model="updatedBook.title" label="Title"></v-text-field>
        <v-text-field v-model="updatedBook.author" label="Author"></v-text-field>
        <v-text-field v-model="updatedBook.description" label="Description"></v-text-field>
        <v-text-field v-model="updatedBook.cover_image" label="Cover Image"></v-text-field>
        <v-text-field v-model="updatedBook.price" label="Price"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="updateBook(book)">Update</v-btn>
        <v-btn color="red" @click="showDialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    showUserActions: Boolean,
    showAdminActions: Boolean,
  },
  data() {
    return {
      books: [],

      //for pagination
      page: 1,
      perPage: 12,

      showDialog: false,
      updatedBook: {
        title: '',
        author: '',
        description: '',
        price: '',
        cover_image: '',
      },
    }
  },
  computed: {
    paginatedBooks() {
      const startIndex = (this.page - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.books.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get('http://10.0.10.220:8080/api/book')
        this.books = response.data.books;
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    },

    async deleteBook(book) {
      const token = JSON.parse(localStorage.getItem('user-info')).token;

      const response = await axios.delete(`http://10.0.10.220:8080/api/book/${book.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      this.getBooks();
    },

    // async updateBook(book) {
    //   console.log('Book object:', book);
    //   const token = JSON.parse(localStorage.getItem('user-info')).token;

    //   try {
    //     const response = await axios.put(`http://10.0.10.220:8080/api/book/${book.id}`, this.updatedBook, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     console.log(response.data.message);

    //     this.showDialog = false;

    //     this.getBooks();
    //   } catch (error) {
    //     console.error('Error updating book:', error);
    //   }
    // },

    async addToWishlist(book) {
      const token = JSON.parse(localStorage.getItem('user-info')).token;

      const response = await axios.post(`http://10.0.10.220:8080/api/wishlist/${book.id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },

    async addToCart(book) {
      // this.$store.dispatch('addToCart', book);
      this.$store.dispatch("cart/addToCart", book);

    },

    bookDetails(book) {
      this.$router.push({ name: "BookDetails", params: { id: book.id } });
    }
  },
};
</script>
