<template>
  <div>
    <title>Sign Up</title>

    <body class="bgc-thm2">
      <div class="wrapper ovh">
        <Header />
        <MobileMenu />
        <div class="body_content">
          <!-- Our LogIn Area -->
          <form @submit.prevent="register()">
            <section class="our-register">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
                    <div class="main-title text-center">
                      <h2 class="title text-white">Register</h2>
                    </div>
                  </div>
                </div>
                <center>
                  <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                  </div>
                </center>

                <div class="row wow fadeInRight" data-wow-delay="300ms">
                  <div class="col-xl-6 mx-auto">
                    <div class="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                      <div class="mb30">
                        <h4>Let's create your account!</h4>
                        <p class="text mt20">Already have an account? <nuxt-link to="/sign-in" class="text-thm">Log
                            In!</nuxt-link></p>
                      </div>
                      <div v-if="slug_error" class="error">{{ slug_error.slugerror }}</div>
                      <div class="mb2">
                        <label class="form-label fw500 dark-color">Name</label>
                        <input type="text" class="form-control" placeholder="Jons" v-model="name" @blur="validateName">
                        <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        <div v-if="nameError" class="error">{{ nameError }}</div>
                      </div>
                      <div class="mb2">

                        <label class="form-label fw500 dark-color">Country</label>
                        <select class="form-control" v-model="country_1">
                          <option value="" disabled>Select your country</option>
                          <option v-for="country in countryData" :key="country.id" :value="country.id">
                            {{ country.countryname }}
                          </option>
                        </select>
                        <span class="text-danger" v-if="errors.country_1">{{ errors.country_1[0] }}</span>
                      </div>

                      <div class="mb2">
                        <label class="form-label fw500 dark-color">Email</label>
                        <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                      </div>

                      <div class="mb2">
                        <label class="form-label fw500 dark-color">Type</label>
                        <select class="form-control" v-model="userType">
                          <option value="" disabled selected>Select your type</option>
                          <option v-for="type in userTypes" :key="type.value" :value="type.value">
                            {{ type.text }}
                          </option>
                        </select>
                        <span class="text-danger" v-if="errors.userType">{{ errors.userType[0] }}</span>
                      </div>

                      <div class="mb2">
                        <label class="form-label fw500 dark-color">Invite Code</label>
                        <input type="text" class="form-control" placeholder="157878888.." v-model="inviteCode" readonly>
                        <span class="text-danger" v-if="errors.inviteCode">{{ errors.inviteCode[0] }}</span>
                      </div>


                      <div class="mb15">
                        <label class="form-label fw500 dark-color">Password</label>
                        <input type="password" class="form-control" placeholder="*******" v-model="password">
                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                      </div>

                      <div class="mb15">
                        <label class="form-label fw500 dark-color">Confirm Password</label>
                        <input type="password" class="form-control" placeholder="*******" v-model="confirmPassword">
                        <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0]
                          }}</span>
                      </div>
                      <div class="d-grid mb20">
                        <button class="ud-btn btn-thm default-box-shadow2 btn-action style-1" type="submit"
                          v-if="!hasInvalidChars && !isEmailFormat">Create
                          Account <i class="fal fa-arrow-right-long"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </form>
          <!-- Our Footer -->
          <Footer />
        </div>
      </div>
    </body>

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

let name = ref('');
let email = ref('');
let country_1 = ref("")
let inviteCode = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
let userType = ref('');
let countryData = ref('');


const userTypes = ref([
  { value: '2', text: 'Seller' },
  { value: '3', text: 'Buyer' }
]);
//getAllcountrys
const checkEmail = async () => {
  try {
    loading.value = true;
    //console.log("====" + email.value);
    const response = await axios.post('/sendEmail', {
      email: email.value // Send the email value in the request body
    });
    console.log("Send Code: " + response.data);
    //productdata.value = response.data.data;
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
const getCountrys = async () => {
  try {
    const response = await axios.get('/unauthenticate/getAllcountrys');
    countryData.value = response.data.data;

  } catch (error) {

  }
};
getCountrys();
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
let nameError = ref('');


// Computed property to check if name is in email format
const isEmailFormat = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(name.value); // Return true if name is in email format
});

// Computed property to check for invalid characters
const hasInvalidChars = computed(() => {
  const invalidCharsRegex = /[@\-~!#$%^&*()_+=]/; // Define invalid characters
  return invalidCharsRegex.test(name.value); // Return true if invalid characters are present
});

// Method to validate name
const validateName = () => {
  if (isEmailFormat.value) {
    nameError.value = "Email addresses are not allowed. Please enter a valid name.";
  } else if (hasInvalidChars.value) {
    nameError.value = "The name contains invalid characters. Please enter a valid name.";
  } else {
    nameError.value = ""; // Clear the error if the name is valid
  }
};
const register = async () => {
  loading.value = true;
  try {
    await userStore.register(
      name.value,
      email.value,
      country_1.value,
      inviteCode.value,
      userType.value,
      password.value,
      confirmPassword.value
    )

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your account has been successfully created.",
      showConfirmButton: false,
      timer: 3000
    });


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
