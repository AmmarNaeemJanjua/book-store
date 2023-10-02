<template>
    <v-card min-width="400">
        <v-card-title class="headline">
            Login
        </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="loginForm">
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
        email: '',
        password: '',
    }),
    computed: {
        emailRules() {
            return [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ];
        },
        passwordRules() {
            return [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters',
            ];
        },
        isFormValid() {
            return this.emailRules.every(rule => rule(this.email) === true) &&
                this.passwordRules.every(rule => rule(this.password) === true)
        }
    },
    // mounted() {
    //     let user = localStorage.getItem('user-info')
    //     if (user) {
    //         this.$router.push('/')
    //     }
    // },
    methods: {
        async loginForm() {
            let result = await axios.post('http://10.0.10.220:8080/api/login', {
                email: this.email,
                password: this.password,
            })
            if (result.status == 200) {
                localStorage.setItem('user-info', JSON.stringify(result.data));
                if (this.email == 'admin@gmail.com' && this.password == '12345678') {
                    this.$router.push('/adminview');
                } else {
                    this.$router.push('/');
                }
                // this.$router.push('/');
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