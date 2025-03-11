<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
import { useHead } from "#imports";

useHead({
  title: "Reset Password"
});

const router = useRouter();
const route = useRoute();
const loading = ref(false);
const email = ref(route.query.email || ""); // Get email from URL
const token = ref(route.query.token || ""); // Get token from URL
const newPassword = ref("");
const confirmPassword = ref("");
const errors = ref({});

const resetPassword = async () => {
  if (!newPassword.value || !confirmPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Please enter a new password.",
      showConfirmButton: false,
      timer: 3000
    });
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Passwords do not match!",
      showConfirmButton: false,
      timer: 3000
    });
    return;
  }

  loading.value = true;

  try {
    const res = await axios.post("/auth/password/reset", {
      email: email.value,
      token: token.value,
      password: newPassword.value,
      password_confirmation: confirmPassword.value
    });

    Swal.fire({
      icon: "success",
      title: "Password reset successful! Redirecting...",
      showConfirmButton: false,
      timer: 2000
    });

    setTimeout(() => {
      router.push("/login"); // Redirect to login page
    }, 2000);
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      console.error("An error occurred:", error);
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <body class="bgc-thm2">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
        <section class="our-login">
          <div class="container">
            <center>
              <h2 class="title text-white">Reset Password</h2>
            </center>
            <form @submit.prevent="resetPassword">
              <div v-if="loading" class="loading-indicator" style="text-align: center;">
                <Loader />
              </div>
              <div class="row wow fadeInRight">
                <div class="col-xl-6 mx-auto">
                  <div class="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                    <div class="mb20">
                      <label class="form-label fw600 dark-color">New Password</label>
                      <input type="password" class="form-control" v-model="newPassword" placeholder="Enter new password">
                      <span class="text-danger">{{ errors.password }}</span>
                    </div>
                    <div class="mb20">
                      <label class="form-label fw600 dark-color">Confirm Password</label>
                      <input type="password" class="form-control" v-model="confirmPassword" placeholder="Confirm password">
                    </div>
                    <div class="d-grid mb20">
                      <button type="submit" class="ud-btn btn-thm default-box-shadow2" :disabled="loading">
                        <span v-if="!loading">Reset Password</span>
                        <span v-else>Resetting...</span>
                      </button>
                    </div>
                    <center><span class="text-danger">{{ errors.token }}</span></center>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  </body>
</template>
