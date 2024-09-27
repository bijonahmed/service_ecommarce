<template>
  <div>
    <title>Sign In</title>

    <body class="bgc-thm2">
      <div class="wrapper ovh">
        <Header />
        <MobileMenu/>
       <div class="body_content">
    <!-- Our LogIn Area -->
    <section class="our-login">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
            <div class="main-title text-center">
              <h2 class="title text-white">Log In</h2>
            </div>
          </div>
        </div>
        <div class="row wow fadeInRight" data-wow-delay="300ms">
          <div class="col-xl-6 mx-auto">
            <div class="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
              <div class="mb30">
                <h4>We're glad to see you again!</h4>
                <p class="text">Don't have an account? <nuxt-link to="/sign-up" class="text-thm">Sign Up!</nuxt-link></p>
              </div>
              <div class="mb20">
                <label class="form-label fw600 dark-color">Email Address</label>
                <input type="email" class="form-control" placeholder="alitfn58@gmail.com">
              </div>
              <div class="mb15">
                <label class="form-label fw600 dark-color">Password</label>
                <input type="text" class="form-control" placeholder="*******">
              </div>
              <div class="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                <label class="custom_checkbox fz14 ff-heading">Remember me
                  <input type="checkbox" checked="checked">
                  <span class="checkmark"></span>
                </label>
                <a class="fz14 ff-heading" href="#">Lost your password?</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <Footer/>
  </div>

      </div>
    </body>
   
  </div>
</template>

<script setup>
import axios from "axios";
import { useUserStore } from "~~/stores/user";

const userStore = useUserStore();
const router = useRouter();

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

function createCaptcha() {
    /*
  const canvas = document.getElementById("CapCode");
  const context = canvas.getContext("2d");
  const captchaCode = generateCaptchaCode(6); // Change the length as needed

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "48px Arial";
  context.fillText(captchaCode, 10, 50);

  captchaInput.value = captchaCode;
  */
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
    router.push("/dashboard/mining");
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
});
</script>

<style scoped>
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
