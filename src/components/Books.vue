<template>
  <div class="justify-content-center">

    <v-row>
      <v-col v-for="(book, index) in books" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="300">
          <v-img class="align-end text-white" height="300" :src="book.image" cover>
            <v-card-title>{{ book.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            {{ book.price }}
          </v-card-subtitle>

          <v-card-text>
            <div>{{ book.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              <v-icon>
                mdi-information-outline
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="orange">
              <v-icon>
                mdi-heart-outline
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="orange">
              <v-icon>
                mdi-cart
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     books: [
  //       {
  //         title: "Title 1",
  //         image: "https://images.booksense.com/images/221/010/9780545010221.jpg",
  //         description: "Description 1",
  //         price: "$2",
  //       },
  //       {
  //         title: "Title 2",
  //         image: "https://images.booksense.com/images/221/010/9780545010221.jpg",
  //         description: "Description 2",
  //         price: "$2",
  //       },
  //       {
  //         title: "Title 3",
  //         image: "https://images.booksense.com/images/221/010/9780545010221.jpg",
  //         description: "Description 3",
  //         price: "$2",
  //       },
  //       {
  //         title: "Title 4",
  //         image: "https://images.booksense.com/images/221/010/9780545010221.jpg",
  //         description: "Description 4",
  //         price: "$2",
  //       },
  //       {
  //         title: "Title 1",
  //         image: "https://images.booksense.com/images/221/010/9780545010221.jpg",
  //         description: "Description 1",
  //         price: "$2",
  //       },
  //       {
  //         title: "Title 2",
  //         image: "https://images.booksense.com/images/221/010/9780545010221.jpg",
  //         description: "Description 2",
  //         price: "$2",
  //       }
  //     ]
  //   }
  // }
  computed:{
    books(){
      return this.$store.state.books;
    }
  }
};
</script>
