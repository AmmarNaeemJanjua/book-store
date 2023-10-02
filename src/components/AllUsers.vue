<template>
    <v-container>
        <v-card>
            <v-card-title>User Details</v-card-title>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-center">User ID</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Created At</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td class="text-center">{{ user.id }}</td>
                        <td class="text-center">{{ user.name }}</td>
                        <td class="text-center">{{ user.email }}</td>
                        <td class="text-center">{{ user.created_at }}</td>
                        <td class="text-center">
                            <v-button @click="removeUser(user)">
                                <v-icon color="red" style="cursor: pointer">mdi-delete</v-icon>
                            </v-button>
                        </td>
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
            users: [],
        };
    },
    mounted() {
        this.fetchUserData();
    },
    methods: {
        async fetchUserData() {
            const token = JSON.parse(localStorage.getItem('user-info')).token;

            try {
                const response = await axios.get('http://10.0.10.220:8080/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }, 
                });
                this.users = response.data.data;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },

        async removeUser(user){
            const token = JSON.parse(localStorage.getItem('user-info')).token;

            const response = await axios.delete(`http://10.0.10.220:8080/api/users/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            this.fetchUserData();
        }
    },
};
</script>
  