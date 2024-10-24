<template>
  <div>
    <title>Sign In</title>

    <body class="bgc-thm2">
      <div class="wrapper ovh">
        <Header />
        <MobileMenu />
        <div class="body_content">
          <!-- Our LogIn Area -->
          <section class="our-login">
            <div class="container">
              <center>
                <h2 class="title text-white">Log In</h2>
              </center>
              <form @submit.prevent="login()">
                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                  <Loader />
                </div>
                <div class="row wow fadeInRight">

                  <div class="col-xl-6 mx-auto">
                    <div class="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                      <div class="mb30">
                        <h4>We're glad to see you again!</h4>
                        <p class="text">
                          Don't have an account? <nuxt-link to="/sign-up" class="text-thm">Sign Up!</nuxt-link>
                        </p>
                      </div>
                      <center><span class="text-danger">{{ errors.account }}</span></center>
                      <div class="mb20">
                        <label for="email" class="form-label fw600 dark-color">Email Address</label>
                        <input type="email" id="email" class="form-control" placeholder="example@gmail.com"
                          v-model="email">
                        <span class="text-danger">{{ errors.email }}</span>
                      </div>

                      <div class="mb15">
                        <label for="password" class="form-label fw600 dark-color">Password</label>
                        <div class="position-relative">
    <input 
      :id="passwordId" 
      class="form-control" 
      placeholder="*******" 
      :type="isPasswordVisible ? 'text' : 'password'" 
      v-model="password"
    />
    <i 
      class="fa-solid position-absolute" 
      :class="isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'" 
      style="cursor: pointer; right: 10px; top: 50%; transform: translateY(-50%);" 
      @click="togglePassword"
    ></i>
  </div>
                        <span class="text-danger">{{ errors.password }}</span>
                      </div>

                      <div class="mb15">
                        <label for="userCapInput" class="form-label fw600 dark-color">Captcha</label>
                        <div class="CaptchaWrap">
                          <div id="CaptchaImageCode" class="CaptchaTxtField">
                            <canvas id="CapCode" class="capcode" width="500" height="50"
                              style="margin-top: -15px;"></canvas>
                          </div>
                          <button type="button" @click="createCaptcha" class="ReloadBtn">
                            <img src="/refresh.webp" alt="Refresh Captcha" />
                          </button>
                        </div>

                        <input type="hidden" id="UserCaptchaCode" class="CaptchaTxtField form-control mt-2"
                          placeholder="Enter Captcha - Case Sensitive" v-model="captchaInput" @input="validateCaptcha"
                          required>
                        <input type="text" id="userCapInput" class="CaptchaTxtField form-control mt-2"
                          placeholder="Enter Captcha - Case Sensitive" v-model="userCapInput">

                        <span id="WrongCaptchaError" class="error">{{ captchaError }}</span>
                        <span class="text-danger">{{ errors.userCapInput }}</span>
                      </div>
<!-- 
                      <div class="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                        <a class="fz14 ff-heading" href="#">Lost your password?</a>
                      </div> -->

                      <div class="d-grid mb20">
                        <button class="ud-btn btn-thm default-box-shadow2" type="submit">Login</button>
                      </div>
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

  </div>
</template>

<script setup>

import axios from "axios";
import { useUserStore } from "~~/stores/user";
import Swal from "sweetalert2";
const userStore = useUserStore();
const router = useRouter();

// definePageMeta({
//     middleware: 'is-logged-in'
// })

const passwordFieldType = ref("password");
const confirmPasswordFieldType = ref("password");
const emailError = ref("");
const passwordError = ref("");
const account = ref("");

const loading = ref(false);
const captchaInput = ref("");
const userCapInput = ref("");
const email = ref("");
const password = ref("");
const errors = ref({ email: "", password: "" }); // Initialize error messages
const captchaError = ref("");
const captchaValid = ref(false);


const isPasswordVisible = ref(false);
const passwordId = 'password';

const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};


// const togglePassword = (id) => {
//   const inputField = document.querySelector(id);
//   if (inputField.type === "password") {
//     inputField.type = "text";
//   } else {
//     inputField.type = "password";
//   }
// };

function createCaptcha() {
  const canvas = document.getElementById("CapCode");
  const context = canvas.getContext("2d");
  const captchaCode = generateCaptchaCode(6); // Change the length as needed

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "18px Arial";
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
    console.log("userrole" + userrole);
    const role_id = userStore.role_id; // Assuming userStore contains role_id after login

    console.log("RoleID" + role_id);
    if (role_id === 2) {
      router.push("/dashboard/welcome");
    } else if (role_id === 3) {
      router.push("/dashboard/buyer/welcome");
    } else if (role_id === 1) {
      roleMsg();
      loading.value = false;
      return;
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
/*
async function login() {
  try {
    loading.value = true;
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

    // Fetch the user role_id after login
    const role_id = userStore.role_id; // Assuming userStore contains role_id after login
    console.log("RoleID" + role_id);
    if (role_id === 2) {
      router.push("/dashboard/welcome");
    } else if (role_id === 3) {
      router.push("/dashboard/buyer/welcome");
    } else if (role_id === 1) {
      roleMsg();
      loading.value = false;
      return;
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
  */

const roleMsg = () => {
  Swal.fire({
    position: "center", // Changed to center
    position: "top-end",
    icon: "error",
    title: "Login not allowed for this role.",
    showConfirmButton: false,
    timer: 3000
  });
}

onMounted(() => {
  createCaptcha();
});
</script>


<style scoped>
h4 {
  margin-bottom: 15px;
  /* Space below the heading */
  color: #333;
  /* Darker color for heading */
}

.text {
  margin-bottom: 20px;
  /* Space below the paragraph */
  color: #666;
  /* Lighter color for text */
}

.form-label {
  display: block;
  /* Make labels block elements */
  margin-bottom: 5px;
  /* Space below the label */
  font-weight: 600;
  /* Bold font for labels */
  color: #333;
  /* Dark color for labels */
}

.form-control {
  width: 100%;
  /* Full width for inputs */
  padding: 10px;
  /* Padding inside inputs */
  border: 1px solid #ddd;
  /* Light border */
  border-radius: 6px;
  /* Rounded corners for inputs */
  transition: border-color 0.3s ease;
  /* Smooth transition on focus */
}

.form-control:focus {
  border-color: #007bff;
  /* Change border color on focus */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  /* Glow effect on focus */
}

.text-danger {
  color: #e74c3c;
  /* Red color for error messages */
  font-size: 0.9em;
  /* Slightly smaller font size for errors */
}

.CaptchaWrap {
  display: flex;
  /* Flex layout for captcha */
  align-items: center;
  /* Center items vertically */
  margin-bottom: 15px;
  /* Space below captcha */
}

.CaptchaTxtField {
  width: 100%;
  /* Full width for captcha input */
  padding: 10px;
  /* Padding inside captcha input */
  border: 1px solid #ddd;
  /* Light border */
  border-radius: 6px;
  /* Rounded corners */
}

.ReloadBtn {
  background: none;
  /* No background for button */
  border: none;
  /* No border */
  cursor: pointer;
  /* Pointer cursor on hover */
  margin-left: 10px;
  /* Space between button and captcha */
}

.ReloadBtn img {
  width: 30px;
  /* Size of the refresh icon */
  margin-left: -15px;
}

.checkbox-style1 a {
  color: #007bff;
  /* Link color */
  text-decoration: none;
  /* No underline */
}

.checkbox-style1 a:hover {
  text-decoration: underline;
  /* Underline on hover */
}

.ud-btn {
  background-color: #007bff;
  /* Button background color */
  color: white;
  /* Button text color */
  border: none;
  /* No border */
  border-radius: 6px;
  /* Rounded corners */
  padding: 12px;
  /* Padding inside button */
  font-size: 16px;
  /* Font size for button */
  transition: background-color 0.3s ease;
  /* Smooth transition */
}

.ud-btn:hover {
  background-color: #0056b3;
  /* Darker color on hover */
}

.sign-in {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-in .sign-in__main {
  padding: 01px 10px;
}
</style>
