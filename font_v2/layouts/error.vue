<!-- layouts/error.vue -->
<template>
    <div>
      <div v-if="error && error.statusCode === 404">
        <h1>Page not found</h1>
        <p>Redirecting to the home page...</p>
      </div>
      <div v-else>
        <h1>An error occurred: {{ error.message }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useError, useRouter } from 'nuxt/app'
  import { onMounted } from 'vue'
  
  const error = useError()
  const router = useRouter()
  
  onMounted(() => {
    if (error && error.statusCode === 404) {
      // Redirect to home after a delay
      setTimeout(() => {
        router.push('/')
      }, 2000) // You can adjust or remove the delay
    }
  })
  </script>
  