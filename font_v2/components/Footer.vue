<template>
  <section class="footer-style1 at-home6 home2-footer-radius pt25 pb-0">
    <div class="container">
      <div class="row bb-white-light pb10 mb60">
        <div class="col-md-7">
          <div
            class="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
            <nuxt-link class="fz17 fw500 text-white mr15-md mr30" to="/terms-and-condition">Terms of Service</nuxt-link>
            <nuxt-link class="fz17 fw500 text-white mr15-md mr30" to="/privacy-and-policy">Privacy Policy</nuxt-link>
            <!-- <a class="fz17 fw500 text-white" href="#">Site Map</a> -->
          </div>
        </div>
        <div class="col-md-5">
          <div class="social-widget text-center text-md-end">
            <div class="social-style1">
              <a class="text-white me-2 fw500 fz17" href="#">Follow us</a>
              <a :href="fblink" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-facebook-f list-inline-item"></i>
</a>
              <!-- <a href="#"><i class="fab fa-twitter list-inline-item"></i></a>
              <a href="#"><i class="fab fa-instagram list-inline-item"></i></a>
              <a href="#"><i class="fab fa-linkedin-in list-inline-item"></i></a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="link-style1 mb-4 mb-sm-5">
            <h5 class="text-white mb15">About</h5>
            <div class="link-list">
              <nuxt-link to="/aboutus">About us</nuxt-link>
              <nuxt-link to="/privacy-and-policy">Privacy Policy</nuxt-link>
              <nuxt-link to="/terms-and-condition">Terms of Service</nuxt-link>
            
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="link-style1 mb-4 mb-sm-5">
            <h5 class="text-white mb15">Categories</h5>
            <ul class="ps-0">
              <li><Nuxt-link  to="/category/programming-tech">Programming & Tech</Nuxt-link></li>
              <li><Nuxt-link to="/category/graphics-design">Graphics & Design</Nuxt-link></li>
              <li><Nuxt-link to="/category/digital-marketing">Digital Marketing</Nuxt-link></li>
              <li><Nuxt-link to="/category/video-animation">Video & Animation</Nuxt-link></li>
              <li><Nuxt-link to="/category/writing-translation">Writing & Translation</Nuxt-link></li>
              <li><Nuxt-link to="/category/e-commerce-development">E-Commerce Development</Nuxt-link></li>
              <li><Nuxt-link to="/category/website-development">Website Development</Nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="link-style1 mb-4 mb-sm-5">
            <h5 class="text-white mb15">Support</h5>
            <ul class="ps-0">
              <li><nuxt-link to="/help-and-support">Help & Support</nuxt-link></li>
              <li><nuxt-link to="/trustand-safety">Trust & Safety</nuxt-link></li>
              <li><nuxt-link to="/selling-on-isumax">Selling on isumax</nuxt-link></li>
              <li><nuxt-link to="/buying-on-isumax">Buying on isumax</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="footer-widget">

            <div class="app-widget mb-4 mb-sm-5">
              <h5 class="title text-white mb20">Apps</h5>
              <div class="row mb-4 mb-lg-5">
                <div class="col-lg-12">
                  <a class="app-list d-flex align-items-center mb10" href="#">
                    <i class="fab fa-apple fz17 mr15"></i>
                    <h6 class="app-title fz15 fw400 mb-0">iOS App</h6>
                  </a>
                  <a class="app-list d-flex align-items-center" href="#">
                    <i class="fab fa-google-play fz15 mr15"></i>
                    <h6 class="app-title fz15 fw400 mb-0">
                      Android App
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container white-bdrt1 py-4">
      <div class="row">
        <div class="col-md-6">
          <div class="text-center text-lg-start">
            <p class="copyright-text mb-0 text-white-light ff-heading">
              {{ copyright }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="footer_bottom_right_btns text-center text-lg-end">
            <ul class="p-0 m-0">
              <li class="list-inline-item">
                <select class="selectpicker show-tick">
                  <option>US$ USD</option>
                  <option>Euro</option>
                  <option>Pound</option>
                </select>
              </li>
              <li class="list-inline-item">
                <select class="selectpicker show-tick">
                  <option>English</option>
                  <option>Frenc</option>
                  <option>Italian</option>
                  <option>Spanish</option>
                  <option>Turkey</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a class="scrollToHome at-home2" href="#"><i class="fas fa-angle-up"></i></a>

  <div class="position-fixed w-100 bg-white  d-md-none shadow"
    style="bottom: 0;left: 0;right: 0;padding: 20px;z-index: 99;">
    <ul class="d-flex justify-content-between align-items-center m-0 p-0 footer_menu">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/orders">Order</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/chatbox">Messages</NuxtLink>
      </li>
      <li>
        <div class="dropdown ms-2" v-if="isLoggedIn">
          <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
            <!-- <img :src="imagePreview || '/blank_user.jpg'" style="height: 30px;width: 30px;" alt=""
              class="img-fluid rounded-circle bordered"><span class="text-white fw-bold">&nbsp;{{ name }}</span> -->
          </a>

          <ul class="dropdown-menu bordered-0">
            <li><nuxt-link class="dropdown-item" to="/dashboard/myprofile"><i
                  class="fa fa-user"></i>&nbsp;Profile</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/dashboard/welcome"><i
                  class="fa fa-grid"></i>&nbsp;Dashboard</nuxt-link></li>

            <li v-if="isLoggedIn && userStore.role_id == 2">
              <nuxt-link class="dropdown-item" to="/dashboard/mygig/giglist">
                <i class="fa fa-list"></i>&nbsp;My Gig
              </nuxt-link>
            </li>
            <li><nuxt-link class="dropdown-item" to="/dashboard/chatbox"><i
                  class="fa fa-messages"></i>&nbsp;Messages</nuxt-link></li>
            <li><nuxt-link class="dropdown-item" to="/dashboard/orders"><i
                  class="fa fa-cart-shopping"></i>&nbsp;Orders</nuxt-link></li>
            
            <li><nuxt-link class="dropdown-item" to="/dashboard/setting"><i
                  class="fa-solid fa-cogs"></i>&nbsp;Settings</nuxt-link></li>



            <li><nuxt-link class="dropdown-item" to="#" @click="logout()"><i
                  class="fa fa-sign-out"></i>&nbsp;Logout</nuxt-link></li>
          </ul>
        </div>
        <NuxtLink v-else to="/sign-in">Profile</NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie'; // Import the Cookies object from the js-cookie library
import { useUserStore } from '~~/stores/user'
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore)
import Swal from "sweetalert2";
const loading = ref(false);
const router = useRouter();
const name = ref();
const imagePreview = ref();
const email = ref();
const copyright = ref();
const fblink = ref();

const getUserRow = async () => {
  try {
    const response = await axios.post("/auth/me");
    console.log("Response data:", response.data.name); // Log the response data
    name.value = response.data.name;
    email.value = response.data.email;
    imagePreview.value = response.data.profileLogo;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

computed(async () => {
  try {
    await userStore.getUser()
  } catch (error) { }
})
const logout = async () => {
  try {
    await userStore.logout();  // Perform the logout action in your store
    Cookies.remove('user');    // Remove the 'user' cookie
    localStorage.removeItem('token');  // Remove token from local storage

    // Navigate to the home page after logout
    await router.push('/');
    location.reload();  // Optionally reload the page to clear any cached state
  } catch (error) {
    if (error.response && error.response.status === 401) {
      Cookies.remove('user');  // Handle unauthorized case
      console.log('Unauthorized access - logging out...');
      location.reload();  // Reload the page
    } else {
      console.error('Error during logout:', error);  // Log any other errors
    }
  }
};
/*
const logout = async () => {
  try {
    const router = useRouter();  
    await userStore.logout(); 
    Cookies.remove('user'); // Remove the user cookie
    localStorage.removeItem('token'); // Remove the token from local storage
    router.push('/').then(() => {
      location.reload();  
    });
  } catch (error) {
   // console.error('Error during logout:', error);
    if (error.response && error.response.status === 401) {
      Cookies.remove('user'); // Remove the user cookie again if unauthorized
      console.log('Unauthorized access - logging out...');
      location.reload();  
    }
  }
};
*/

const groupedSubCategories = (subCategories) => {
  const grouped = [];
  for (let i = 0; i < subCategories.length; i += 2) {
    grouped.push(subCategories.slice(i, i + 2));
  }
  return grouped;
};

const categoryData = ref([]);

const fetchCatData = async () => {
  try {
    loading.value = true;
    const response = await axios.get("/unauthenticate/getCategoryList");
    categoryData.value = response.data;

  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};


const settingData = async () => {
  try {
    loading.value = true;
    const response = await axios.get("/unauthenticate/getSettingData");
    copyright.value = response.data.copyright;
    fblink.value = response.data.fblink;

  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};



const navbarScrollfixed = () => {
  $('.navbar-scrolltofixed').scrollToFixed();
  var summaries = $('.summary');
  summaries.each(function (i) {
    var summary = $(summaries[i]);
    var next = summaries[i + 1];
    summary.scrollToFixed({
      marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
      limit: function () {
        var limit = 0;
        if (next) {
          limit = $(next).offset().top - $(this).outerHeight(true) - 10;
        } else {
          limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
        }
        return limit;
      },
      zIndex: 999
    });
  });
}


onMounted(async () => {
  settingData();
  fetchCatData();
  navbarScrollfixed();
  getUserRow();
});

</script>


<style scoped>
/* Add your styles for the header here */
.footer_menu i{
  color: #204c3f;
  font-size: 20px;
}
</style>