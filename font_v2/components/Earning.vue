<template>
    <h3 v-if="earning !== null && earning !== undefined">My Total Earning: ${{ earning }}</h3>
    <h3 v-else>Loading...</h3>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const earning = ref(null); // Initialize as null to trigger the loading state
  
  const freelancerEarning = async () => {
    try {
      const response = await axios.get(`/order/getOrderForSellerEarning`);
      earning.value = response.data.earning;  // Assign the numeric value only
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(() => {
    freelancerEarning();
  });
  </script>
  