<template>
    <v-footer class="bg-grey-darken-3 text-center d-flex flex-column">
        <v-container>
            <div>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
            </div>

            <div class="text-h6">Join our newsletter</div>

            <div class="pt-3">
                <v-row justify="center">
                    <v-col lg="5" sm="7">
                        <div class="d-flex">
                            <v-text-field v-model="email" label="Email" variant="outlined" single-line hide-details
                                class="w-50"></v-text-field>
                            <v-btn @click="Subscribe()" size="x-large">Subscribe</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="pt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda facilis repellat ullam minima,
                quasi
                impedit? Vitae, aliquid. At minima maiores culpa eligendi totam itaque nesciunt et atque rerum! Neque.
            </div>

            <div class="pt-3">
                <strong>Copyright © 2023, Bookify, All Rights Reserved.</strong>
            </div>
        </v-container>
    </v-footer>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
    methods: {
        Subscribe(){
            const token = JSON.parse(localStorage.getItem('user-info')).token;

            try {
                axios.post('http://10.0.10.220:8080/api/subscribe', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }, 
                });
            } catch (error) {
                console.error('Error subscribing:', error);
            }
        }
    }
}
</script>