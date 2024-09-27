<template>
    <div>
      <Header />
        <NuxtPage /> <!-- This is where your page content will be injected -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  </script>
  
  <style scoped>
  /* Add your styles for the layout here */
  </style>
  