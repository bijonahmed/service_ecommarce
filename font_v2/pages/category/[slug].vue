<template>
  <div>
    <title>{{ categoryName }}</title>

    <body class="bgc-thm1">
      <div class="wrapper ovh">
        <Header />
        <MobileMenu />
        <div class="body_content">
          <section class="categories_list_section overflow-hidden">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="listings_category_nav_list_menu">
                    <ul class="mb0 d-flex ps-0">
                      <li v-for="data in categoryData" :key="data.id">
                        <nuxt-link :to="`/category/${data.slug}`" :class="{ active: isActive(data.slug) }">
                          {{ data.name }}
                        </nuxt-link>
                      </li>
                      <!-- {{categoryData}} -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Breadcumb Sections -->
          <section class="breadcumb-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcumb-style1">
                    <div class="breadcumb-list">
                      <nuxt-link to="/">Home</nuxt-link>
                      <a href="#">Category</a>
                      <nuxt-link to="/all-category">All Categorys</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>
          <!-- Breadcumb Sections -->
          <section class="breadcumb-section pt-0">
            <div
              class="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg px10-xs">
              <img class="left-top-img wow zoomIn" src="/images/vector-img/left-top.png" alt="">
              <img class="right-bottom-img wow zoomIn" src="/images/vector-img/right-bottom.png" alt="">
              <img class="service-v1-vector bounce-y d-none d-lg-block" src="/images/vector-img/vector-service-v1.png"
                alt="">
              <div class="container">
                <div class="row wow fadeInUp">
                  <div class="col-xl-7">
                    <div class="position-relative">
                      <h2>Category {{ categoryName }}</h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- About Section Area -->
          <!-- Listings All Lists -->
          <section class="pt30 pb90">
            <div class="container-fluid">
              <div class="row align-items-center mb20">
                <div class="col-6 col-sm-6 col-lg-12 pe-0">
                  <div class="text-center text-sm-start">
                    <div class="dropdown-lists">
                      <ul class="p-0 mb-0 text-center text-sm-start d-none">

                        <li class="list-inline-item position-relative d-none d-xl-inline-block">
                          <button class="open-btn mb10 dropdown-toggle" type="button" data-bs-toggle="dropdown">Location
                            <i class="fa fa-angle-down ms-2"></i></button>
                          <div class="dropdown-menu dd4 pb20">
                            <div class="widget-wrapper pr20">
                              <div class="checkbox-style1">
                                <label class="custom_checkbox">United States
                                  <input type="checkbox">
                                  <span class="checkmark"></span>
                                </label>
                                <label class="custom_checkbox">United Kingdom
                                  <input type="checkbox" checked="checked">
                                  <span class="checkmark"></span>
                                </label>
                                <label class="custom_checkbox">Canada
                                  <input type="checkbox">
                                  <span class="checkmark"></span>
                                </label>
                                <label class="custom_checkbox">Germany
                                  <input type="checkbox">
                                  <span class="checkmark"></span>
                                </label>
                                <label class="custom_checkbox">Turkey
                                  <input type="checkbox">
                                  <span class="checkmark"></span>
                                </label>
                              </div>
                            </div>
                            <button class="done-btn ud-btn btn-thm drop_btn4">Apply<i
                                class="fal fa-arrow-right-long"></i></button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>





              <div class="row">

                <div class="col-sm-2 col-sm-3" v-for="data in responseData" :key="data.id">
                  <div class="listing-style1">
                    <div class="list-thumb">
                      <!-- Dynamically set the image source -->
                      <nuxt-link :to="`/gigs/${data.gig_slug}`"> <img class="w-100 gig_image"
                        :src="data.thumbnail_images ? data.thumbnail_images : '/images/listings/category-1.jpg'"
                        alt="Listing Image"></nuxt-link>


                             <a href="#" class="listing-fav fz12" @click.prevent="myHeart(data)"><span
                          class="far fa-heart"></span></a>

                      <a href="#" v-if="!isLoggedIn" class="listing-fav fz12" @click="faJheart()"><span
                          class="far fa-heart"></span></a>
                      <!-- <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a> -->
                    </div>
                    <div class="list-content">
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="list-text body-color fz14 mb-1">{{ categoryName || '' }}</p>
                        <p class="mb-1"><i class="fa-solid fa-star text-success"></i> {{ data.calculatedReview }}/5 ({{ data.completeOrder }} Jobs)</p>
                      </div>
                      <h5 class="list-title">
                        <nuxt-link :to="`/gigs/${data.gig_slug}`">{{ data.name || '' }} </nuxt-link>
                      </h5>

                      <hr class="my-2">
                      <div class="list-meta d-flex justify-content-between align-items-center mt15">
                        <nuxt-link :to="{ path: '/public', query: { profile: data.sellerSlug } }">
                          <span class="position-relative mr10">
                            <img class="rounded-circle" :src="data.freelancer_images || '/blank_user.jpg'" alt="Photo" style="height: 50px;width: 50px;">
                            <span class="online-badge" style="height: 10px;width: 10px;"></span>
                          </span>
                          <span class="fz14">{{ data.user_name || '' }}   </span>
                        </nuxt-link>
                        <div class="budget">
                          
                          <p v-if="data.types == 1">
                            Starting at<span class="fz17 fw500 dark-color ms-1">${{ data.price }}</span>
                          </p>

                          <p v-if="data.types == 2">
                            Starting at<span class="fz17 fw500 dark-color ms-1">${{ data.basic_price }}</span>
                          </p>
                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="mbp_pagination mt30 text-center" v-if="currentPage < totalPages">
                  <button class="btn btn-primary" @click="fetchData" :disabled="isLoading">
                    <span v-if="isLoading">Loading...</span>
                    <span v-else>Load More</span>
                  </button>
                </div>

              </div>
            </div>
          </section>
        </div>

        <!-- Login Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">

            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="login()">
                  <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                  </div>
                  <div class="row wow fadeInRight">

                    <div class="log-reg-form search-modal form-style1 bgc-white p30-sm default-box-shadow1 bdrs12">
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
                        <input type="password" id="password" class="form-control" placeholder="*******"
                          v-model="password">
                        <span class="text-danger">{{ errors.password }}</span>
                      </div>

                      <div class="mb15">
                        <label for="userCapInput" class="form-label fw600 dark-color">Captcha</label>
                        <div class="CaptchaWrap">
                          <div id="CaptchaImageCode" class="CaptchaTxtField">
                            <canvas id="CapCode" class="capcode" width="100" height="50"></canvas>
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

                      <div class="d-grid mb20">
                        <button class="ud-btn btn-thm default-box-shadow2" type="submit">Login</button>
                      </div>
                    </div>

                  </div>
                </form>

              </div>

            </div>

          </div>
        </div>

        <Footer />
      </div>
    </body>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
import { useUserStore } from '~~/stores/user'
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore)

const captchaInput = ref("");
const userCapInput = ref("");
const email = ref("");
const password = ref("");
const errors = ref({ email: "", password: "" }); // Initialize error messages
const loading = ref(false);
const route = useRoute();
const slug = route.params.slug; // Capture the slug parameter from the URL
const categoryName = ref('');
const categoryData = ref([]);
const responseData = ref([]);
const currentPage = ref(1);
const completeOrder = ref(1);
const totalPages = ref(5);    // Total number of pages (update as needed)
const isLoading = ref(false); // Loading state indicator


// Assuming categoryData is provided as a prop or fetched from a store
const props = defineProps({
  categoryData: {
    type: Array,
    required: true
  }
});

// Create a computed property or method to check for the active slug
const isActive = (slug) => {
  return slug === route.params.slug; // Compare slug with the current route's slug
};


const faJheart = async () => {
  $('#staticBackdrop').modal('show'); // This should hide the modal

}

const myHeart = async (data) => {

  try {
    // Make the API call and wait for the response
    const response = await axios.get(`/user/myheartTouch`, {
      params: {
        gig_id: data.id,
      },
    });

    // Show success confirmation alert
    await Swal.fire({
      title: 'Success!',
      text: 'Item added to your wishlist!',
      icon: 'success',
      confirmButtonText: 'Okay',
    });
  } catch (error) {
    console.error(error);

    // Show error alert
    await Swal.fire({
      title: 'Error!',
      text: 'Something went wrong. Please try again.',
      icon: 'error',
      confirmButtonText: 'Okay',
    });
  }
};





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
    //loading.value = true;
    await userStore.login(
      email.value,
      password.value,
      captchaInput.value,
      userCapInput.value
    );

    const token = window.localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + userStore.api_token;
    }
    const role_id = userStore.role_id; // Assuming userStore contains role_id after login
    if (role_id === 3) {
      $('#staticBackdrop').modal('hide'); // This should hide the modal
      loading.value = false;
      const redirectslug = route.params.slug;
      location.reload();

      //router.push("/category/" + redirectslug);
    } else if (role_id === 1 || role_id === 2) {
      roleMsg();
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
  } finally {
    loading.value = false;
  }
}

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

const fetchData = async (page = 1) => {
  try {
    loading.value = true;
    isLoading.value = true; // Set loading to true
    const response = await axios.get(`/unauthenticate/filterCategoryesSlug`, {
      params: {
        slug: slug,
        page: page, // Pass the page number
      },
    });
    //responseData.value.push(...response.data.data);
     // Shuffle the fetched data before adding it
     const shuffledData = response.data.data.sort(() => Math.random() - 0.5);
     // Add shuffled data to responseData
     responseData.value.push(...shuffledData);
    currentPage.value = response.data.pagination.current_page;
    totalPages.value = response.data.pagination.last_page;
  } catch (error) {
  } finally {
    isLoading.value = false; // Set loading to true
    loading.value = false;
  }
};


const checkrow = async () => {
  try {
    const response = await axios.get(`/unauthenticate/findCategorys`, {
      params: {
        slug: slug,
      },
    });
    categoryName.value = response.data.category_name;
    categoryData.value = response.data.categoryData;

  } catch (error) {
    // Handle error
  }
};

onMounted(() => {
  createCaptcha();
  fetchData();
  checkrow();
});



</script>

<style scoped>
/* .gig_image{
  height: 250px;
} */


.CaptchaTxtField {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.categories_list_section {
  border-bottom: 1px solid #E9E9E9;
  padding: 7px 0 3px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ReloadBtn {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.ReloadBtn img {
  width: 30px;
  margin-left: -50px;
}

.CaptchaWrap {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.CaptchaTxtField {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.mbp_pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.mbp_pagination .btn-primary {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}


.mbp_pagination .btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}


.mbp_pagination .btn-primary:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mbp_pagination .btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.4);
}

.body_content {
  padding: 100px;
}

@media (max-width: 991.98px) {
  .body_content {
    padding: 20px 20px 150px;
  }
}

@media (max-width: 575.98px) {
  .body_content {
    padding: 20px 10px;
  }
}

.categories_list_section {
  border-bottom: 1px solid #E9E9E9;
  padding: 7px 0 3px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>