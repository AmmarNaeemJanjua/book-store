<template>
    <v-card min-width="400">
        <v-card-title class="headline">
            Login
        </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="signupForm">
                <v-text-field v-model="name" label="Name" :rules="nameRules" validate-on="blur"></v-text-field>
                
                <v-text-field v-model="email" label="Email" :rules="emailRules" validate-on="blur"></v-text-field>
        
                <v-text-field label="Password" type="password" v-model="password" :rules="passwordRules"
                    validate-on="blur"></v-text-field>
        
                <v-btn type="submit" class="mt-1 mb-1" :disabled="!isFormValid" color="indigo">Submit</v-btn>
        
                <p class="mt-2">Not registered? <router-link to="/signupview">Click here to Sign Up</router-link></p>
            </v-form>

        </v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
    name: "LoginForm",
    data: () => ({
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length >= 4 || 'Name must be at least 4 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Password must be at least 8 characters',
        ]
    }),
    computed: {
        isFormValid() {
            return this.nameRules.every(rule => rule(this.name) === true) &&
                this.emailRules.every(rule => rule(this.email) === true) &&
                this.passwordRules.every(rule => rule(this.password) === true)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push('/')
        }
    },
    methods: {
        async signupForm() {
            let result = await axios.post('http://localhost:8000/user', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            if (result.status == 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
.v-card {
    margin: auto;
}
</style>