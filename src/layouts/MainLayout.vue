<template>
    <div>
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
</script>
