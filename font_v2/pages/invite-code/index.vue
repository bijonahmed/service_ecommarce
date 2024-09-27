<template>
  <div>
    <title>Sign Up</title>
    <section class="sign-in sign-up">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sign-in__top center">
              <nuxt-link to="/">
                <img id="site-logo" src="/assets/images/logo/logo-main.png" alt="Monteno" width="165" height="40"
                  data-retina="assets/images/logo/logo-main@x2.png" data-width="165" data-height="40">
              </nuxt-link>
            </div>
            <div class="sign-in__main">
              <div class="top center">
                <h3 class="title">Sign up</h3>
                <p class="fs-17">Create New OCN Account</p>
              </div>
              <center>
                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                  <Loader />
                </div>
              </center>
              <form @submit.prevent="register()">
                <div class="form-group">
                  <label>Email address <span>*</span> </label>
                  <div class="input_bt_group">
                    <input type="text" placeholder="example@gmail.com" class="form-control" v-model="email">
                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                    <button class="btn_copy" @click="sendCode" :disabled="buttonDisabled">Send code
                      <span v-if="loading"><span style="color:white">Loading...</span></span>

                    </button>
                  </div>

                </div>
                <div class="form-group">
                  <label for="code">OTP Code<span>*</span></label>
                  <input type="text" class="form-control" id="code" placeholder="OTP" v-model="otp">
                  <p class="ms-2" style="font-size: 12px;">Click 'Send Code,' check your email (inbox/spam) for the OTP.
                  </p>
                  <span class="text-danger" v-if="errors.otp">{{ errors.otp[0] }}</span>
                  <span class="text-danger" v-if="errors.invaliteotp">{{ errors.invaliteotp[0] }}</span>

                  
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password<span>*</span></label>
                  <input id="newpass" :type="passwordFieldType" name="password" class="form-control" v-model="password">
                  <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password<span>*</span></label>
                  <input id="repass" :type="confirmPasswordFieldType" name="password" class="form-control"
                    v-model="confirmPassword">
                  <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0]
                    }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Ref. <span>*</span></label>
                  <input type="text" class="form-control" placeholder="Invite code" v-model="inviteCode">
                  <span class="text-danger" v-if="errors.inviteCode">{{ errors.inviteCode[0] }}</span>
                </div>
                <div class="form-check">
                  <div class="left" style="height: 20px;">
                    <input type="checkbox" checked class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">I agree to the <a href="#">Terms
                        of User</a></label>
                  </div>
                </div>
                <button type="submit" class="btn-action style-1"><span>Sign Up</span> </button>
              </form>

            </div>

            <p class="bottom">Dont have an account? <nuxt-link to="/sign-in">Sign in</nuxt-link></p>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>



<script setup>
import { ref, watch, onMounted } from "vue";
import { useUserStore } from '~~/stores/user';
import axios from "axios";
import Swal from "sweetalert2";

const router = useRouter();
const userStore = useUserStore()
const errors = ref({});

const loading = ref(false)
let email = ref('');
let name = ref('');
let password = ref(null);
let inviteCode = ref(null);
let confirmPassword = ref(null);
let otp = ref(null)

const passwordFieldType = ref('password');
const confirmPasswordFieldType = ref('password');

const checkEmail = async () => {
  try {
    loading.value = true;
    const response = await axios.post('/sendEmail', {
      email: email.value // Send the email value in the request body
    });
    console.log("Send Code: " + response.data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Email sent successfully! Please check your email or spam folder for the OTP.",
      showConfirmButton: false,
      timer: 3000
    });



  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      // Handle other types of errors here
      console.error('An error occurred:', error);
    }
  }
};

const buttonDisabled = ref(false); // Initially, button is enabled

async function sendCode() {
  if (!buttonDisabled.value) { // Check if button is not disabled
    try {
      loading.value = true; // Show loader
      buttonDisabled.value = true; // Disable the button to prevent double-clicking
      // Your asynchronous operation (e.g., axios request)
      await checkEmail(); // Assuming checkEmail is an asynchronous function
    } finally {
      loading.value = false; // Hide loader
      buttonDisabled.value = false; // Re-enable the button after operation completes or fails
    }
  }
}

const register = async () => {
  loading.value = true;
  try {
    await userStore.register(
      name.value,
      email.value,
      otp.value,
      inviteCode.value,
      password.value,
      confirmPassword.value
    )
    router.push('/sign-in')
  } catch (error) {
    //console.log(error)
    errors.value = error.response.data.errors
  } finally {
    loading.value = false; // Hide loader

  }

}

 
let queryParams = {};
if (process.client) {
  queryParams = new URLSearchParams(window.location.search);
  const codeValue = queryParams.toString().split('=')[1];
  console.log("----" + codeValue);
  inviteCode.value = codeValue;
}
</script>
