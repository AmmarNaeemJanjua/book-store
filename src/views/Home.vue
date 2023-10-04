<template>
    <v-app>
        <AppBar :showUserAppBar="true" />
        <v-main>
            <RouterView />
        </v-main>
        <Footer />
    </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
import Footer from '@/components/Footer.vue';

</script>
