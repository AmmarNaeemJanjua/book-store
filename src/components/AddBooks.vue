<template>
    <v-container>
        <v-btn color="yellow-darken-4" @click="showDialog = true">Add Book</v-btn>
    </v-container>

    <v-dialog v-model="showDialog" max-width="600">
        <v-card>
            <v-card-title>Add Book</v-card-title>
            <v-card-text>
                <v-text-field v-model="book.title" label="Title"></v-text-field>
                <v-text-field v-model="book.author" label="Author"></v-text-field>
                <v-text-field v-model="book.description" label="Description"></v-text-field>
                <!-- <v-file-input v-model="book.cover_image" accept="image/*" label="Cover Image"></v-file-input> -->
                <v-text-field v-model="book.cover_image" label="Cover Image"></v-text-field>
                <v-text-field v-model="book.price" label="Price"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="addBook">Add</v-btn>
                <v-btn color="red" @click="showDialog = false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            showDialog: false,
            book: {
                title: '',
                author: '',
                description: '',
                cover_image: '',
                price: '',
            },
        };
    }, 
    methods: {
        addBook() {
            const formData = {
                title: this.book.title,
                author: this.book.author,
                description: this.book.description,
                price: this.book.price,
                cover_image: this.book.cover_image,
            };

            const token = JSON.parse(localStorage.getItem('user-info')).token;

            axios
                .post('http://10.0.10.220:8080/api/addbook', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }, 
                })
                .then((response) => {
                    this.showDialog = false;
                    console.log(response.data.message); // Log the success message
                })
                .catch((error) => {
                    console.error('Error adding book:', error);
                });
        },
    },

};
</script>