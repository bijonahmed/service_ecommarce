<template>
    <title>Forget Password</title>
   <!-- MAGIC CURSOR -->
   <div class="mouse-cursor cursor-outer"></div>
		<div class="mouse-cursor cursor-inner"></div>
	<!-- /MAGIC CURSOR -->

    <section class="sign-in">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="sign-in__top center">
                        <nuxt-link to="/">
                            <img id="site-logo" src="/assets/images/logo.png"
                            alt="Monteno" width="165" height="40"
                            data-retina="/assets/images/logo.png" data-width="165"
                            data-height="40">
                        </nuxt-link>
                    </div>
                    <div class="sign-in__main">
                        <div class="top center">
                            <h3 class="title">Forget password</h3>
                            <p class="fs-17">With your Email address</p>
                        </div>

                        <form  @submit.prevent="forgetPassword()" id="formrest">
                            <div class="form-group">
                              <label >Email address <span>*</span> </label>
                              <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
                              <span class="text-danger" v-if="errors.email">{{ errors.email[0]}}</span>
                            </div>      
                            <button type="submit" class="btn-action style-1" :disabled="loading">
      <span v-if="!loading">Send</span>
      <span v-else>Sending...</span>
    </button>
                        </form>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import axios from "axios";
import swal from "sweetalert2";
const loading = ref(false);
 
const email = ref("");
const errors = ref({});

const forgetPassword = async ()  => {
  if (loading.value) return; // Prevent multiple submissions
  loading.value = true;

  const formData = new FormData();
  formData.append("email", email.value);

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  try {
    const res = await axios.post("/auth/password/email", formData, { headers });
    document.getElementById("formrest").reset();
    success_noti(); // Assuming success_noti() is defined elsewhere in your code
    router.push("/forget-password");
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      // Handle other types of errors here
      console.error("An error occurred:", error);
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
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Please check your email inbox/spam.",
  });
};
</script>
