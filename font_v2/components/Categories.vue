<template>
    <ul>
      <CategoryItem
        v-for="category in categoryData.slice(0, 15)"
        :key="category.id"
        :category="category"
      />
    </ul>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import CategoryItem from './Header.vue'
  import axios from 'axios'
  
  const categoryData = ref([])
  
  onMounted(async () => {
    const response = await axios.get('/api/allCategory')
    categoryData.value = response.data
  })
  </script>
  