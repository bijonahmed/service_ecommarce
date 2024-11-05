<template>
  <title>Login</title>
  <div class="d-flex justify-content-center align-items-center min-vh-100 custom-bg">
    <div class="card login-card shadow-lg p-4">
      <div class="card-body">
        <div class="loading-indicator" v-if="loading" style="text-align: center;">
          <Loader />
        </div>
        <h2 class="text-center mb-4">LOGIN ISUMAX ADMIN</h2>
        <div class="mb-3">
          <input v-model="email" type="email" class="form-control" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Password" required />
        </div>
        <button @click="login" class="btn btn-primary w-100" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
        <small><div class="text-center"><nuxt-link to="/verificode">Verifiy code</nuxt-link></div></small>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { useUserStore } from "~~/stores/user";
import axios from 'axios';

window.Swal = swal;
const userStore = useUserStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const errors = ref({});
const requiresVerification = ref(false);
const isLoggedIn = computed(() => userStore.isLoggedIn);

async function login() {
  loading.value = true; // Show loading state
  errors.value = {}; // Reset errors

  try {
    console.log("Email:", email.value);
    console.log("Password:", password.value);

    await userStore.adminLogin(email.value, password.value);
    requiresVerification.value = true;

    // Redirect to verification code page after login
    router.push("/verificode");
  } catch (error) {
    if (error.response) {
      // Display error message from response
      errors.value = error.response.data.errors || {};
      swal.fire('Login Failed', error.response.data.message || 'Invalid credentials', 'error');
    } else {
      swal.fire('Error', 'An error occurred while trying to log in. Please try again later.', 'error');
    }
  } finally {
    loading.value = false; // Reset loading state
  }
}
</script>


<style scoped>
.custom-bg {
  background-color: #f0f2f5;
  position: relative;
  overflow: hidden;
}

.login-card {
  max-width: 400px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Subtle background shadow for the Windows 10 look */
.custom-bg::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  bottom: -50px;
  left: -50px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  filter: blur(20px);
  z-index: -1;
}
</style>