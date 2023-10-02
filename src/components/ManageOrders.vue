<template>
    <v-container>
        <v-card>
            <v-card-title>All Orders</v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-center">Order ID</th>
                        <th class="text-center">User ID</th>
                        <th class="text-center">Amount</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in allorders" :key="order.id">
                        <td class="text-center">{{ order.id }}</td>
                        <td class="text-center">{{ order.user_id }}</td>
                        <td class="text-center">{{ order.total_amount }}</td>
                        <td class="text-center">{{ order.status }}</td>
                        <td class="text-center">{{ order.created_at }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
</template>
  
<script>
import axios from 'axios';

export default {
    
    data() {
        return {
            allorders: [],
        };
    },
    mounted() {
        this.fetchOrdersData();
    },
    methods: {
        async fetchOrdersData() {
            const token = JSON.parse(localStorage.getItem('user-info')).token;

            try {
                const response = await axios.get('http://10.0.10.220:8080/api/order', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }, 
                });
                this.allorders = response.data.orders;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
    },
};
</script>
  