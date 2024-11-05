<template>
    <title>Verification</title>
    <div class="d-flex justify-content-center align-items-center min-vh-100 custom-bg">
      <div class="card verification-card shadow-lg p-4">
        <div class="card-body">
          <h2 class="text-center mb-4">Verification</h2>
          <p class="text-center">Enter the verification code sent to your email:</p>
          
          <div class="mb-3">
            <input 
              v-model="verificationCode" 
              class="form-control" 
              placeholder="Verification Code" 
              required 
            />
          </div>
          
          <button 
            @click="verifyCode" 
            class="btn btn-primary w-100" 
            :disabled="loading"
          >
            {{ loading ? 'Verifying...' : 'Verify Code' }}
          </button>
          <small><div class="text-center"><nuxt-link to="/">Back to Home</nuxt-link></div></small>
          <p class="text-danger text-center mt-3" v-if="errors.general">{{ errors.general }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import swal from 'sweetalert2'
  window.Swal = swal;
  const userStore = useUserStore();
  const router = useRouter();
  import { useUserStore } from "~~/stores/user";
  import axios from 'axios';
  const email = ref('');
  const password = ref('');
  const verificationCode = ref('');
  const loading = ref(false);
  const errors = ref({});
  const requiresVerification = ref(false);
  const isLoggedIn = computed(() => userStore.isLoggedIn);
  

  async function verifyCode() {
    loading.value = true; // Show loading state
    errors.value = {}; // Reset errors
    //requiresVerification.value = true;
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      const response = await axios.post(
        `/auth/adminVertificationCode`,
        {
          verificationCode: verificationCode.value,
          token: token,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the Authorization header
          },
        }
      );
  
      // On success, complete login with access token
      completeLogin(response.data.access_token);
  
    } catch (error) {
      console.error("Error verifying code:", error);
      if (error.response) {
        if (error.response.status === 422) {
          // Show alert with error message from API
          //alert(error.response.data.error_message);
  
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Code Invalid."
          });
          errors.value.verification = error.response.data.error_message; // Set error for UI
        } else {
          alert("An error occurred during verification");
          errors.value.verification = "An error occurred during verification.";
        }
      } else {
        alert("Network error: Please check your connection.");
        errors.value.verification = "Network error: Please check your connection.";
      }
    } finally {
      loading.value = false; // Reset loading state
    }
  }
  
  function completeLogin(token) {
    localStorage.setItem("token", token);
  
    const userrole = window.localStorage.getItem("userrole");
    if (userrole == 1) {
      if (isLoggedIn) {
        window.location.href = "/admin/dashboard";
        //router.push("/admin/dashboard");
      }
    } else {
      router.push("/");
    }
  
  }
  </script>
  <style scoped>
  .custom-bg {
    background-color: #f0f2f5;
    position: relative;
    overflow: hidden;
  }
  
  .verification-card {
    max-width: 400px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 
                0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
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