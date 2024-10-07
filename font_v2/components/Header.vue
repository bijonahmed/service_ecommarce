<template>
  <header class="header-nav nav-homepage-style stricky main-menu border-0">
    <nav class="posr">
      <div class="container posr">
        <div class="row align-items-center justify-content-between navbar-scrolltofixed">
          <div class="col-auto px-0 px-xl-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="logos">
                <nuxt-link class="header-logo logo1" to="/"><img src="/images/header-logo.png" alt="Header Logo"
                    style="width: 150px;"></nuxt-link>
                <nuxt-link class="header-logo logo2" to="/"><img src="/images/header-logo.png" alt="Header Logo"
                    style="width: 150px;"></nuxt-link>
              </div>

              <div class="home1_style at-home2">
                <div id="mega-menu" ref="menu">
                  <div class="text-center"><a class="btn-mega fw500" href="#"><span
                        class="pr5 fz15 vam flaticon-menu"></span><span>Categories</span></a></div>
                  <ul class="menu ps-0">
                    <li v-for="category in categoryData.slice(0, 15)" :key="category.id">
                      <nuxt-link :to="`/category/${category.slug}`" class="dropdown">
                        <!-- <span class="menu-icn flaticon-developer"></span> -->
                        <span class="menu-title">{{ category.name }}</span>
                      </nuxt-link>
                      <div class="drop-menu">
                        <div v-for="(subCategoryGroup, index) in groupedSubCategories(category.children)" :key="index"
                          class="row mb-1">
                          <div v-for="subCategory in subCategoryGroup" :key="subCategory.id" class="col-6">
                            <div class="h6 cat-title"> <nuxt-link :to="`/category/${subCategory.slug}`">{{
                              subCategory.name }}</nuxt-link></div>
                            <ul class="ps-0">
                              <li v-for="subSubCategory in subCategory.children" :key="subSubCategory.id">
                                <a href="#"><nuxt-link :to="`/category/${subSubCategory.slug}`">{{ subSubCategory.name
                                    }}</nuxt-link></a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><nuxt-link to="/all-category">All Categoryes</nuxt-link></li>
                  </ul>
                </div>
              </div>
              <!-- Responsive Menu Structure-->
              <ul id="respMenu" class="ace-responsive-menu" data-menu-style="horizontal">
                <li v-if="isLoggedIn">
                  <nuxt-link class="list-item pe-0" to="/dashboard/welcome" v-if="userStore.role_id == 2"><i
                      class="fa fa-home"></i>My Dashboard</nuxt-link>
                  <nuxt-link class="list-item pe-0" to="/dashboard/buyer/welcome" v-if="userStore.role_id == 3"><i
                      class="fa fa-home"></i>My Dashboard</nuxt-link>

                </li>
              </ul>
            </div>
          </div>
          <div class="col-auto pe-0 pe-xl-3">
            <div class="d-flex align-items-center">
              <!-- <a class="login-info" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span
                  class="flaticon-loupe"></span></a> -->
              <nuxt-link class="login-info mx15-xl mx30 list-item pe-0" v-if="!isLoggedIn" to="/seller"><span
                  class="d-none d-xl-inline-block">Become a</span> Seller</nuxt-link>

              <nuxt-link class="login-info mr15-xl mr30" to="/sign-in" v-if="!isLoggedIn"><i class="fa fa-sign-in"></i>
                Sign in</nuxt-link>
              <nuxt-link class="ud-btn btn-white add-joining bdrs50 text-thm2 me-2" v-if="!isLoggedIn" to="/sign-up">Sign
                up</nuxt-link>

              <ul id="respMenu" class="ace-responsive-menu" data-menu-style="horizontal">
                <li v-if="isLoggedIn" class="me-2">
                  <nuxt-link class="list-item pe-0" to="/dashboard/welcome" v-if="isLoggedIn"><i
                      class="fa fa-cart-shopping "></i></nuxt-link>

                </li>
              </ul>
              <div class="dropdown ms-2" v-if="isLoggedIn">
                <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img :src="imagePreview || '/blank_user.jpg'" style="height: 30px;width: 30px;" alt=""
                    class="img-fluid rounded-circle bordered">
                </a>

                <ul class="dropdown-menu bordered-0">
                  <li><nuxt-link class="dropdown-item" to="/dashboard/myprofile"><i
                        class="fa fa-user"></i>&nbsp;Profile</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/dashboard/welcome"><i
                        class="fa fa-grid"></i>&nbsp;Dashboard</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/dashboard/mygig/giglist"><i class="fa fa-list"></i>&nbsp;My
                      Gig</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/dashboard/chatbox"><i
                        class="fa fa-messages"></i>&nbsp;Messages</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/dashboard/orders"><i
                        class="fa fa-cart-shopping"></i>&nbsp;Orders</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/dashboard/earning"><i
                        class="fa fa-dollar-sign"></i>&nbsp;Earning</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/dashboard/setting"><i
                        class="fa-solid fa-cogs"></i>&nbsp;Settings</nuxt-link></li>



                  <li><nuxt-link class="dropdown-item" to="#" @click="logout()"><i
                        class="fa fa-sign-out"></i>&nbsp;Logout</nuxt-link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="hiddenbar-body-ovelay"></div>

  </header>
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



const getUserRow = async () => {
  try {
    const response = await axios.post("/auth/me");
    console.log("Response data:", response.data.name); // Log the response data
    name.value = response.data.name;
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
  fetchCatData();
  navbarScrollfixed();
  getUserRow();
});

</script>

<style scoped>
#mega-menu .menu .menu-title {
  color: var(--headings-color);
  font-family: var(--title-font-family);
  font-weight: 10;
  font-size: 15px;
  line-height: 5px;
}

header.nav-homepage-style {
  background-color: #1f4b3f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 7px 0;
  position: fixed;
  width: 100%;
  z-index: 3;
}

/* Submenu container */
#mega-menu .drop-menu {
  height: auto;
  /* Automatically adjusts height */
  overflow-y: visible;
  /* Ensures the full height is visible */
  padding: 5px 5px;
  /* Adjust the padding as needed */
}

/* For sub-items within the submenu */
#mega-menu .drop-menu .cat-title,
#mega-menu .drop-menu ul {
  margin: 0;
  /* Reset margin */
  padding: 0;
  /* Reset padding */
}

#mega-menu .drop-menu ul li {
  padding: 8px 2px;
  /* Adjust padding within sub-items */
}

/* Reducing spacing around menu titles */
#mega-menu .menu .menu-title {
  padding-top: 5px;
  padding-bottom: 5px;
  line-height: 1.2;
  font-size: 15px;
}

#mega-menu .menu li a {
  border-left: 2px solid transparent;
  padding: 5px 20px;
  display: flex;
  position: relative;
}

#mega-menu .drop-menu ul li {
  padding: 0px 1px;
  padding-top: 0px;
  padding-right: 1px;
  padding-bottom: 0px;
  padding-left: 1px;
}

section {
  padding: 10px 0;
  position: relative;
}
</style>