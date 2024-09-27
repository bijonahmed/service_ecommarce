<template>
  <header class="header-nav nav-homepage-style stricky main-menu border-0">
    <!-- Ace Responsive Menu -->
    <nav class="posr">
      <div class="container posr">
        <div class="row align-items-center justify-content-between">
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
                      <a class="dropdown" href="#">
                        <!-- <span class="menu-icn flaticon-developer"></span> -->
                        <span class="menu-title">{{ category.name }}</span>
                      </a>
                      <div class="drop-menu">
                        <div v-for="(subCategoryGroup, index) in groupedSubCategories(category.children)" :key="index"
                          class="row mb-1">
                          <div v-for="subCategory in subCategoryGroup" :key="subCategory.id" class="col-6">
                            <div class="h6 cat-title">{{ subCategory.name }}</div>
                            <ul class="ps-0">
                              <li v-for="subSubCategory in subCategory.children" :key="subSubCategory.id">
                                <a href="#">{{ subSubCategory.name }}</a>
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
                <li> <nuxt-link class="list-item pe-0" to="/support">Support</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-auto pe-0 pe-xl-3">
            <div class="d-flex align-items-center">
              <a class="login-info" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span
                  class="flaticon-loupe"></span></a>
              <nuxt-link class="login-info mx15-xl mx30 list-item pe-0" to="/seller"><span
                  class="d-none d-xl-inline-block">Become a</span> Seller</nuxt-link>
              <nuxt-link class="login-info mr15-xl mr30" to="/sign-in">Sign in</nuxt-link>
              <nuxt-link class="ud-btn btn-white add-joining bdrs50 text-thm2" to="/sign-up">Join</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="search-modal">
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fal fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="popup-search-field search_area">
                <input type="text" class="form-control border-0"
                  placeholder="What service are you looking for today?" />
                <label><span class="far fa-magnifying-glass"></span></label>
                <button class="ud-btn btn-thm" type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hiddenbar-body-ovelay"></div>

  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
const loading = ref(false);
definePageMeta({
  middleware: 'is-logged-out',
})

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

onMounted(async () => {
  fetchCatData();
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