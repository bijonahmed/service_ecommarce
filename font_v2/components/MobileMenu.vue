<template>
  <div id="page" class="mobilie_header_nav stylehome1">
    <div class="mobile-menu">
      <div class="header bdrb1">
        <div class="menu_and_widgets">
          <div class="mobile_menu_bar d-flex justify-content-between align-items-center">
            <nuxt-link class="mobile_logo" to="/"><img src="/images/header-logo.png" alt=""
                style="width: 150px;" /></nuxt-link>
            <div class="right-side text-end">



              <nuxt-link class="" to="/sign-in" v-if="!isLoggedIn">Login</nuxt-link>
              <nuxt-link class="" to="/dashboard/welcome"
                v-if="isLoggedIn">Dashboard&nbsp;&nbsp;&nbsp;&nbsp;</nuxt-link>
              <nuxt-link to="#" v-if="isLoggedIn" @click="logout"><i class="fa fa-sign-out"></i>&nbsp;Logout</nuxt-link>



              <a class="menubar ml30" href="#menu" @click="toggleMenu"><img src="/images/mobile-dark-nav-icon.svg"
                  alt="" /></a>
            </div>
          </div>
        </div>
        <div class="posr">
          <div class="mobile_menu_close_btn">
            <span class="far fa-times"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- /.mobile-menu -->
    <nav id="menu" :class="{ 'hidden': !isMenuOpen, 'shown': isMenuOpen }">
      <ul>
        <li v-for="(category, index) in categoryData" :key="index">
          <span> <nuxt-link :to="`/category/${category.slug}`">{{ category.name }}</nuxt-link></span>
        </li>
        <!-- Only for Mobile View -->
      </ul>
    </nav>
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

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const categoryData = ref([]);
const frmDate = ref('');

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
const menuRef = ref(null);

// Access Mmenu from Nuxt app
const { $mmenu } = useNuxtApp();

onMounted(async () => {
  if (menuRef.value) {
    new $mmenu(menuRef.value, {
      navbar: {
        title: "Menu"
      },
      searchfield: {
        add: false,
        addTo: "#contacts"
      },
      offCanvas: {
        position: "left-front"
      }
    });
  }
  fetchCatData();
});

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
</script>

<style scoped>
.menubar {
  cursor: pointer;
}

#menu {
  background-color: #fff;
  /* Menu background color */
  position: absolute;
  /* Position menu absolutely */
  top: 60px;
  /* Adjust based on your layout */
  left: 0;
  width: 100%;
  /* Full width */
  z-index: 1000;
  /* Ensure it appears on top */
}

#menu ul {
  list-style-type: none;
  /* Remove default list styles */
  padding: 0;
  /* Remove padding */
  margin: 0;
  /* Remove margin */
}

#menu ul li {
  padding: 10px 20px;
  /* Padding for menu items */
}

#menu a {
  text-decoration: none;
  /* Remove underline from links */
  color: #333;
  /* Menu link color */
}

#menu.hidden {
  display: none;
  /* Hide menu when closed */
}

#menu.shown {
  display: block;
  /* Show menu when opened */
}
</style>