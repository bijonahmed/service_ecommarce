<template>
  <header class="header-nav nav-homepage-style stricky main-menu border-0" style="max-height: 80px; z-index: 11;">
    <nav class="posr ">
      <div class="container posr">
        <div class="row align-items-center justify-content-between navbar-scrolltofixed">
          <div class="col-auto px-0 px-xl-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="logos">
                <nuxt-link class="header-logo logo1" to="/"><img src="/logo-white.png" alt="Header Logo"
                    style="width: 150px;"></nuxt-link>
                <nuxt-link class="header-logo logo2" to="/"><img src="/logo-green.png" alt="Header Logo"
                    style="width: 150px;"></nuxt-link>
              </div>

              <div class="home1_style at-home2">
                <div id="mega-menu" style="background-color: transparent !important;" ref="menu">
                  <div class="text-center">
                    <a class="btn-mega  d-flex fw500" href="#">
                      <span class="pr5 fz15 vam flaticon-menu"></span>
                      <span>Categories</span></a>
                  </div>

                  <!-- Dynamic Main Categories -->

                  <ul class="menu ps-0">
                    <li v-for="category in categoryData.slice(0, 20)" :key="category.id">
                      <nuxt-link :to="`/category/${category.slug}`" class="dropdown_">
                        <span class="menu-title">{{ category.name }}</span>
                      </nuxt-link>

                      <div class="drop-menu" v-if="category.children && category.children.length > 0">
                        <div v-for="(subCategoryGroup, index) in groupedSubCategories(category.children)" :key="index"
                          class="row mb-1">
                          <div v-for="subCategory in subCategoryGroup" :key="subCategory.id" class="col-6">
                            <div class="h6 cat-title">
                              <nuxt-link :to="`/category/${subCategory.slug}`">{{ subCategory.name }}</nuxt-link>
                            </div>
                            <ul class="ps-0" v-if="subCategory.children && subCategory.children.length > 0">
                              <li v-for="subSubCategory in subCategory.children" :key="subSubCategory.id">
                                <nuxt-link :to="`/category/${subSubCategory.slug}`">{{ subSubCategory.name
                                  }}</nuxt-link>
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
                <li v-if="isLoggedIn" class="d-none">
                  <nuxt-link class="list-item pe-0" to="/dashboard/welcome" v-if="userStore.role_id == 2">
                    <!-- <i class="fa fa-home"></i> -->
                    Dashboard</nuxt-link>
                  <nuxt-link class="list-item pe-0" to="/dashboard/buyer/welcome" v-if="userStore.role_id == 3">
                    <!-- <i class="fa fa-home"></i> -->
                    Dashboard</nuxt-link>

                </li>
              </ul>
            </div>
          </div>
          <div class="col-auto pe-0 pe-xl-3">
            <div class="d-flex align-items-center" style="margin-top: 15px;">
              <!-- <a class="login-info" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span
                  class="flaticon-loupe"></span></a> -->
              <nuxt-link class="login-info me-3 list-item pe-0" v-if="!isLoggedIn" to="/seller"><span
                  class="d-none d-xl-inline-block">Become a</span> Seller</nuxt-link>


              <nuxt-link class="login-info me-3 list-item pe-0" to="/yes-deal"><span
                  class="d-none d-xl-inline-block">iDeal</span></nuxt-link>

              <nuxt-link class="login-info me-3 list-item pe-0" to="/affiliate"><span
                  class="d-none d-xl-inline-block">Affiliate</span></nuxt-link>


              <nuxt-link class="login-info mr15-xl mr30" to="/sign-in" v-if="!isLoggedIn"><i class="fa fa-sign-in"></i>
                Sign in</nuxt-link>
              <nuxt-link class="ud-btn btn-white add-joining bdrs50 text-thm2 me-2" v-if="!isLoggedIn"
                to="/sign-up">Sign
                up</nuxt-link>

              <ul id="respMenu" class="ace-responsive-menu me-2" data-menu-style="horizontal">

                <li v-if="isLoggedIn" class="me-2">
                  <nuxt-link style="padding: 2px 15px;" class="list-item pe-0 position-relative"
                    to="/dashboard/buyer/notificationBox" v-if="isLoggedIn && userStore.role_id == 3"><i
                      class="fa fa-bell "></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{
                      unseen_notifications }}+<span
                        class="visually-hidden">unread messages</span>
                    </span>
                  </nuxt-link>
                  <nuxt-link style="padding: 2px 15px;" class="list-item pe-0 position-relative"
                    to="/dashboard/notificationBox" v-if="isLoggedIn && userStore.role_id == 2"><i
                      class="fa fa-bell "></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{
                      unseen_notifications }}+<span class="visually-hidden">unread messages</span>
                    </span>
                  </nuxt-link>
                </li>
                <li v-if="isLoggedIn" class="me-2">
                  <nuxt-link style="padding: 2px 15px;" class="list-item pe-0 position-relative" to="/dashboard/chatbox"
                    v-if="isLoggedIn && userStore.role_id == 2"><i class="fa fa-envelope "></i>

                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{
                      countmsg }}+<span class="visually-hidden">unread messages</span>
                    </span>
                  </nuxt-link>
                  <nuxt-link style="padding: 2px 15px;" class="list-item pe-0 position-relative"
                    to="/dashboard/buyer/chatbox" v-if="isLoggedIn && userStore.role_id == 3"><i
                      class="fa fa-envelope "></i>

                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ buyermsgCount }}+<span
                        class="visually-hidden">unread messages</span>
                    </span>
                  </nuxt-link>
                </li>

                <li v-if="isLoggedIn" class=" ">

                  <nuxt-link style="padding: 2px 15px;" class="list-item pe-0 position-relative" to="/dashboard/welcome"
                    v-if="isLoggedIn && userStore.role_id == 2">
                    <i class="fa fa-shopping-cart "></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ pendingOrders }}+<span
                        class="visually-hidden">unread messages</span>
                    </span>
                  </nuxt-link>

                  <nuxt-link style="padding: 2px 15px;" class="list-item  position-relative pe-0"
                    to="/dashboard/buyer/welcome" v-if="isLoggedIn && userStore.role_id == 3">
                    <i class="fa fa-shopping-cart "></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{buyerpendingOrders}}+<span
                        class="visually-hidden">unread messages</span>
                    </span>
                  </nuxt-link>

                </li>
                <!-- <h2> ========== {{userStore.role_id }}</h2> -->
              </ul>
              <!-- <span class="badge bg-danger">01</span> -->



              <div class="dropdown ms-2 ace-responsive-menu" v-if="isLoggedIn">
                <a class="d-flex align-items-center head_pro list-item" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img :src="imagePreview || '/blank_user.jpg'" style="height: 40px;width: 40px;" alt=""
                    class="img-fluid rounded-circle bordered m-1">
                  <div class="p-2 " style="display: flex; flex-direction: column;">
                    <span style="font-size: 14px;text-transform: capitalize; line-height: auto;"
                      class="list-item fw-bold m-0"> {{ name }}</span>
                    <span style="font-size: 11px;line-height: auto;" class="list-item m-0"
                      v-if="isLoggedIn && userStore.role_id == 3">
                      Buyer </span>
                    <span style="font-size: 11px;" class="list-item m-0" v-if="isLoggedIn && userStore.role_id == 2">
                      Seller </span>
                  </div>
                  <i class="fa-solid fa-chevron-down p-1 "></i>
                </a>




                <ul class="dropdown-menu bordered-0">
                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/myprofile"><i class="fa fa-user"></i>&nbsp;Profile</nuxt-link></li>
                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/welcome"><i class="fa fa-grid"></i>&nbsp;Dashboard</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/chatbox"><i class="fa fa-envelope"></i>&nbsp;Messages</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/mlm"><i class="fa fa-user"></i>&nbsp;Community</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/orders"><i class="fa fa-cart-shopping"></i>&nbsp;Orders</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/withdraw"><i class="fas fa-dollar-sign"></i>&nbsp;Withdraw</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/setting"><i class="fa-solid fa-cogs"></i>&nbsp;Settings</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 3"><nuxt-link class="dropdown-item"
                      to="/dashboard/buyer/deposit"><i class="far fa-money-bill-alt"></i>&nbsp;Deposit</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 2"><nuxt-link class="dropdown-item"
                      to="/dashboard/myprofile"><i class="fa fa-user"></i>&nbsp;Profile</nuxt-link></li>
                  <li v-if="isLoggedIn && userStore.role_id == 2"><nuxt-link class="dropdown-item"
                      to="/dashboard/welcome"><i class="fa fa-grid"></i>&nbsp;Dashboard</nuxt-link></li>
                  <li v-if="isLoggedIn && userStore.role_id == 2">
                    <nuxt-link class="dropdown-item" to="/dashboard/mygig/giglist">
                      <i class="fa fa-list"></i>&nbsp;My Gig
                    </nuxt-link>
                  </li>
                  <li v-if="isLoggedIn && userStore.role_id == 2"><nuxt-link class="dropdown-item"
                      to="/dashboard/chatbox"><i class="fa fa-envelope"></i>&nbsp;Messages</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 2"><nuxt-link class="dropdown-item"
                      to="/dashboard/orders"><i class="fa fa-cart-shopping"></i>&nbsp;Orders</nuxt-link></li>

                  <li v-if="isLoggedIn && userStore.role_id == 2"><nuxt-link class="dropdown-item"
                      to="/dashboard/withdrawalrequest"><i class="fa fas fa-dollar-sign"></i>&nbsp;Withdraw</nuxt-link>
                  </li>

                  <li v-if="isLoggedIn && userStore.role_id == 2"><nuxt-link class="dropdown-item"
                      to="/dashboard/setting"><i class="fa-solid fa-cogs"></i>&nbsp;Settings</nuxt-link></li>

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

const loading = ref(false);
const router = useRouter();
const name = ref();
const unseen_notifications = ref(0);
const countmsg = ref(0);
const buyermsgCount = ref(0);
const pendingOrders = ref(0);
const buyerpendingOrders = ref(0);
const imagePreview = ref();
const email = ref();


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

const groupedSubCategories = (children) => {
  const groupSize = 2; // Adjust the number of columns per row
  return Array.from({ length: Math.ceil(children.length / groupSize) }, (_, i) =>
    children.slice(i * groupSize, i * groupSize + groupSize)
  );
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

const notificationCount = async () => {
  try {
    loading.value = true;
    const response = await axios.get("/user/pendingCountNotification");
    unseen_notifications.value = response.data.unseen_notifications;

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
const getChatusersList = async () => {
  
  try {
    const response = await axios.get(`/chat/getChatUsersTo`);
    countmsg.value = response.data.countmsg;
    pendingOrders.value = response.data.pendingOrders;
    //console.log("pendingOrders: " + response.data.pendingOrders);

  } catch (error) {
    console.error('Error fetching chat users:', error);
  }
};
const buyerPendingOrderCount = async () => {

  try {
    const response = await axios.get(`/chat/byerPendingOrders`);
    buyerpendingOrders.value = response.data.pendingOrders;
  } catch (error) {
    console.error('Error fetching chat users:', error);
  }
};

const buyerPendingMsgCount = async () => {
 
  try {
    const response = await axios.get(`/chat/msgCountBuyer`);
    buyermsgCount.value = response.data.buyermsgCount;
  } catch (error) {
    console.error('Error fetching chat users:', error);
  }
};
onMounted(async () => {
  fetchCatData();
  buyerPendingMsgCount();
  buyerPendingOrderCount();
  navbarScrollfixed();
  getUserRow();
  notificationCount();
  getChatusersList();
});

</script>

<style scoped>
/* Base Dropdown Styling */
.dropdown-menu {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  min-width: 200px;
  list-style: none;
  margin: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Menu Items */
.dropdown-menu .dropdown-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-menu .dropdown-item i {
  margin-right: 10px;
  font-size: 16px;
  color: #007bff;
  /* Icon color */
}

/* Hover Effects */
.dropdown-menu .dropdown-item:hover {
  background-color: #007bff;
  color: #ffffff;
}

.dropdown-menu .dropdown-item:hover i {
  color: #ffffff;
}

/* Logout Button Special Style */
.dropdown-menu .dropdown-item:last-child {
  border-top: 1px solid #e0e0e0;
  color: #ff4d4f;
}

.dropdown-menu .dropdown-item:last-child i {
  color: #696969;
}

.dropdown-menu .dropdown-item:last-child:hover {
  background-color: #17171717;
  color: #ffffff;
}

/* Responsive for Mobile */
@media (max-width: 768px) {
  .dropdown-menu {
    min-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
}



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
  /* position: fixed; */
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
  padding: 0px 20px;
  display: list-item;
  position: relative;
  line-height: 25px;
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
#mega-menu .menu li:hover .drop-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(1.8%);
    max-height: 80vh;
    overflow-y: auto;
    scrollbar-width: 0;
}
#mega-menu .menu li:hover .drop-menu::-webkit-scrollbar{
  width: 0;
  display: none;
}
</style>