<template>
  <title>Admin Login</title>
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


          <button class="btn btn-primary w-100" type="submit" :disabled="loading">
            <span v-if="loading">Loading...</span>
            <span v-else>Sign In</span>
          </button>
        </form>
        <div v-if="requiresVerification">
      <p>Enter the verification code sent to your email:</p>
      <input 
        type="text" 
        v-model="verificationCode" 
        placeholder="Verification Code" 
      />
      <button @click="verifyCode" :disabled="loading">Verify Code</button>
      
      <p class="text-white" v-if="errors.verification">{{ errors.verification }}</p>
    </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const userStore = useUserStore();
const router = useRouter();

const requiresVerification = ref(false);
const verificationCode = ref('');
import { useUserStore } from "~~/stores/user";
const isLoggedIn = computed(() => userStore.isLoggedIn);

definePageMeta({
  middleware: "is-logged-in",
});

const loading = ref(false);
const email = ref("");
const password = ref("");
const errors = ref({ email: "", password: "" }); // Initialize error messages

 
const handleError = (error) => {
  if (error.response && error.response.data.errors) {
    errors.value.general = error.response.data.errors.account[0]; // Adjust based on your API structure
  } else {
    errors.value.general = "An unexpected error occurred. Please try again.";
  }
};

const completeLogin = (token) => {
  localStorage.setItem("token", token);
  console.log("Low login working...");
  // Redirect or perform any action needed after successful login
  //router.push('/dashboard'); // Redirect to the dashboard or home page
};

const login = async () => {
  loading.value = true;
  errors.value = {}; // Reset errors at the start

  try {
    // Call your user store's login method
    const response = await userStore.login(email.value, password.value);
    console.log("Get Response: " + response);

    // Check if verification is required
    if (response.requires_verification) {
      requiresVerification.value = true; // Set verification required state
      localStorage.setItem("requires_verification", true); // Store verification state
    } else {
      completeLogin(response.token); // Proceed to complete login
    }
  } catch (error) {
    handleError(error); // Handle any errors that occur
  } finally {
    loading.value = false; // Reset loading state
  }
};

const verifyCode = async () => {
  loading.value = true;
  errors.value.verification = null; // Reset verification errors

  try {
    const response = await userStore.verifyCode(verificationCode.value);

    // Complete the login if verification is successful
    if (response.success) {
      completeLogin(response.token);
    }
  } catch (error) {
    errors.value.verification = "Invalid verification code. Please try again.";
  } finally {
    loading.value = false; // Reset loading state
  }
};
onMounted(() => {
 // checkLogin();
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
