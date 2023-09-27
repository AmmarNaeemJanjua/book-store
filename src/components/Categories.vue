<template>
  <v-container>
    <h3>Categories</h3>
    <v-row>
      <v-col v-for="(category, index) in categories" :key="index" cols="">
        <v-card @click="selectCategory(category)">
          <v-card-text>{{ category.name }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  data() {
    return {
      categories: [
        { name: 'Fiction' },
        { name: 'Non-Fiction' },
        { name: 'Science Fiction' },
        { name: 'Mystery' },
      ],
    };
  },
  methods: {
    selectCategory(category) {

    },
  },
};
</script>
