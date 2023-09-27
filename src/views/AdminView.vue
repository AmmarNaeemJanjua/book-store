<template>
    <v-app>
        <AppBar :showAdminAppBar="true" />
        <v-main>
            <RouterView/>
        </v-main>
    </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';

</script>
