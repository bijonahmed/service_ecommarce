<template>
  <title>Login....</title>
  <div class="Login">
    <div class="section">
      <div class="login bg-white m-4">

        <!-- <h1 class="text-center">Login Here!</h1> -->
        <center>
          <span class="text-danger text-center">{{ errors.account }}</span>
        </center>
        <div id="error-alert" class="alert alert-danger" role="alert" style="display: none"></div>

        <form class="" @submit.prevent="login()">
          <br />
          <div class="form-group">
            <small class="text-white">Email Address</small>
            <input class="form-control" type="email" id="email" placeholder="Enter Email" v-model="email"
              style="margin-top: 5px" />
            <span class="text-danger">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <small class="text-white">Password</small>
            <input class="form-control" type="password" id="password" placeholder="Enter Password" v-model="password"
              style="margin-top: 5px" />
            <span class="text-danger">{{ errors.password }}</span>
          </div>

          <div class="form-group">
            <div class="CaptchaWrap">
              <div class="row">
                <div class="col">
                  <div id="CaptchaImageCode" class="CaptchaTxtField bgCanvas">
                    <canvas id="CapCode" class="capcode" width="250" height="50"></canvas>
                    <input type="hidden" id="UserCaptchaCode" class="CaptchaTxtField form-control mt-2"
                      v-model="captchaInput" @input="validateCaptcha" />
                  </div>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-primary" @click="createCaptcha">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <input type="text" class="CaptchaTxtField form-control mt-2" placeholder="Enter Captcha - Case Sensitive"
              v-model="userCapInput" />

            <span id="WrongCaptchaError" class="error">{{ captchaError }}</span>
            <span class="text-danger">{{ errors.userCapInput }}</span>
          </div>

          <button class="btn btn-primary w-100" type="submit" :disabled="loading">
            <span v-if="loading">Loading...</span>
            <span v-else>Sign In</span>
          </button>
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const userStore = useUserStore();
const router = useRouter();

import { useUserStore } from "~~/stores/user";
const isLoggedIn = computed(() => userStore.isLoggedIn);

definePageMeta({
  middleware: "is-logged-in",
});

const loading = ref(false);
const email = ref("");
const password = ref("");
const errors = ref({ email: "", password: "" }); // Initialize error messages
const emailError = ref("");
const passwordError = ref("");

const captchaInput = ref("");
const userCapInput = ref("");
const account = ref("");
const captchaError = ref("");
const captchaValid = ref(false);

const passwordFieldType = ref("password");
const confirmPasswordFieldType = ref("password");

const togglePassword = (id) => {
  const inputField = document.querySelector(id);
  if (inputField.type === "password") {
    inputField.type = "text";
  } else {
    inputField.type = "password";
  }
};

const checkLogin = () => {
  if (isLoggedIn) {
    router.push("/admin/dashboard");
  } else {
    router.push("/index");
  }
};

function createCaptcha() {
  const canvas = document.getElementById("CapCode");
  const context = canvas.getContext("2d");
  const captchaCode = generateCaptchaCode(6); // Change the length as needed

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "48px Arial";
  context.fillStyle = "white";  // Set the font color to white
  context.fillText(captchaCode, 10, 50);
  captchaInput.value = captchaCode;
}

function generateCaptchaCode(length) {
  const characters = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function validateCaptcha() {
  if (
    captchaInput.value.toUpperCase() !==
    document.getElementById("UserCaptchaCode").value.toUpperCase()
  ) {
    captchaError.value = "Incorrect CAPTCHA code";
    captchaValid.value = false;
  } else {
    captchaError.value = "";
    captchaValid.value = true;
  }
}

async function login() {
  try {
    loading.value = true;
    // Your login logic here
    // Assuming you're making an API request to log in
    await userStore.login(
      email.value,
      password.value,
      captchaInput.value,
      userCapInput.value
    );
    const token = window.localStorage.getItem("token");
    //console.log("My token: " + token);
    if (token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + userStore.api_token;
    }

    const userrole = window.localStorage.getItem("userrole");
    //console.log("userrole" + userrole);

    if (userrole == 1 || userrole == 3) {
      router.push('/admin/dashboard')
      if (isLoggedIn) {
        router.push("/admin/dashboard");
      }
    } else {
      loading.value = false;
      await userStore.logout();
      localStorage.removeItem("token");
      router.push("/"); // Redirect to the root route
    }
  } catch (error) {
    loading.value = false;
    // If the request fails, display the error messages
    if (error.response && error.response.data.errors) {
      const responseErrors = error.response.data.errors;
      errors.value = {
        email: responseErrors.email ? responseErrors.email[0] : "",
        password: responseErrors.password ? responseErrors.password[0] : "",
        userCapInput: responseErrors.userCapInput
          ? responseErrors.userCapInput[0]
          : "",
        account: responseErrors.account ? responseErrors.account[0] : "",
      };
    } else {
      console.error("An error occurred while logging in:", error);
    }
  }
}

onMounted(() => {
  createCaptcha();
  checkLogin();
});
</script>

<style>
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;400&display=swap'); */
.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #18393c00;
  background-clip: padding-box;
  border: 1px solid #29464c;
  border-radius: .25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282c34;
  background-image: url('/login.jpg');
   background-size: cover; 
   background-position: center; 
  /* Centers the background image */
  /* background-repeat: no-repeat; 
  /* Prevents the image from repeating */
}

.bg-white {
  background-color: #021a1ebf !important
}

.login {
  width: 360px;
  height: min-content;
  padding: 20px;
  border-radius: 8px;
  /* background: green; */
}

.img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.img:hover {
  color: rgb(0, 0, 255);
}

.login h1 {
  font-size: 36px;
  margin-bottom: 25px;
}

.login form {
  font-size: 20px;
}

.login form .form-group {
  margin-bottom: 12px;
}

.login form input[type="submit"] {
  font-size: 20px;
  margin-top: 15px;
}

.bgCanvas {
  background-color: #37565b00;
  padding-bottom: 10px;
  border-radius: 5px;
}
</style>
