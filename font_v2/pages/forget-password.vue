<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import swal from "sweetalert2";
import { useHead } from "#imports";
import Swal from "sweetalert2";
useHead({
  title: "Sign In"
});

const router = useRouter();
const loading = ref(false);
const email = ref("");
const errors = ref({});
const currentDomain = ref(window.location.origin); // Get current domain dynamically

const forgetPassword = async () => {

  if (email.value == "") {

    Swal.fire({
      position: "center", // Changed to center
      position: "top-end",
      icon: "error",
      title: "Please type your valid email.",
      showConfirmButton: false,
      timer: 3000
    });

    return false;

  }


  if (loading.value) return; // Prevent multiple submissions
  loading.value = true;

  const formData = new FormData();
  formData.append("email", email.value);
  formData.append('current_domain', currentDomain.value); // Append current domain

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  try {
    const response = await axios.post("/auth/password/email", formData, { headers });
    // success_noti();
    router.push("/");
  } catch (error) {
    if (error.response) {
      console.log("Full Error Response:", error.response.data); // Debugging
      if (error.response.status == 422) {
        //  error_noti();  // Notify error
        errors.value = error.response.data.errors;  // Assign errors
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
  } finally {
    loading.value = false;
  }
};

const success_noti = () => {
  const Toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = swal.stopTimer;
      toast.onmouseleave = swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: "success",
    title: "Please check your email inbox/spam.",
  });
};


const error_noti = () => {
  const Toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = swal.stopTimer;
      toast.onmouseleave = swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: "success",
    title: "Please check your email inbox/spam.",
  });
};


</script>

<template>

  <body class="bgc-thm2">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
        <!-- Our LogIn Area -->
        <section class="our-login">
          <div class="container">
            <center>
              <h2 class="title text-white">Forget password</h2>
            </center>
            <form @submit.prevent="forgetPassword()">
              <div class="loading-indicator" v-if="loading" style="text-align: center;">
                <Loader />
              </div>
              <div class="row wow fadeInRight">

                <div class="col-xl-6 mx-auto">
                  <div class="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">


                    <div class="mb20">
                      <label for="email" class="form-label fw600 dark-color">Email Address</label>
                      <input type="email" id="email" class="form-control" placeholder="example@gmail.com"
                        v-model="email">
                      <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>

                    </div>


                    <div class="d-grid mb20">

                      <button type="submit" class="ud-btn btn-thm default-box-shadow2" :disabled="loading">
                        <span v-if="!loading">Submit</span>
                        <span v-else>Sending...</span>
                      </button>
                    </div>
                    <div class="mb30">
                      <p class="text">
                        Don't have an account? <nuxt-link to="/sign-up" class="text-thm">Sign Up!</nuxt-link>
                      </p>
                    </div>
                    <center><span class="text-danger">{{ errors.account }}</span></center>
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
