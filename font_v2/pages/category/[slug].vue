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
                <div class="col-sm-6 col-xl-3" v-for="data in responseData" :key="data.id">
                  <div class="listing-style1">
                    <div class="list-thumb">
                      <!-- Dynamically set the image source -->
                      <img class="w-100"
                        :src="data.thumbnail_images ? data.thumbnail_images : '/images/listings/category-1.jpg'"
                        alt="Listing Image">
                      <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a>
                    </div>
                    <div class="list-content">
                      <p class="list-text body-color fz14 mb-1">{{ categoryName || '' }}</p>
                      <h5 class="list-title">
                        <nuxt-link :to="`/gigs/${data.gig_slug}`">{{ data.name || '' }} </nuxt-link>
                      </h5>

                      <hr class="my-2">
                      <div class="list-meta d-flex justify-content-between align-items-center mt15">
                        <a href="#">
                          <span class="position-relative mr10">
                            <img class="rounded-circle" :src="data.freelancer_images" alt="Freelancer Photo"
                              style="height: 50px;width: 50px;">
                            <span class="online-badge" style="height: 10px;width: 10px;"></span>
                          </span>
                          <span class="fz14">{{ data.user_name || '' }}</span>
                        </a>
                        <div class="budget">
                          <p class="mb-0 body-color">
                            Starting at<span class="fz17 fw500 dark-color ms-1">${{ data.price || '0.00' }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div class="row">
                <div class="mbp_pagination mt30 text-center" v-if="currentPage < totalPages">
      <button
        class="btn btn-primary"
        @click="fetchData"
        :disabled="isLoading"
      >
        <span v-if="isLoading">Loading...</span>
        <span v-else>Load More</span>
      </button>
    </div>

              </div>
            </div>
          </section>
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
const router = useRouter();

const loading = ref(false);
const route = useRoute();
const slug = route.params.slug; // Capture the slug parameter from the URL
const categoryName = ref('');
const categoryData = ref([]);
const responseData = ref([]);
const currentPage = ref(1);
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
    if (page === 1) {
      responseData.value = response.data.data;
    } else {
      responseData.value.push(...response.data.data);
    }
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
  fetchData();
  checkrow();
});



</script>

<style scoped>
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

@media (max-width: 768px) {
  .body_content {
    padding-bottom: 150px;
  }
}

@media (max-width: 575.98px) {
  .body_content {
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

/* Small Devices (tablets, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .body_content {
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

/* Medium Devices (desktops, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .body_content {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* Large Devices (large desktops, 992px and up) */
@media (min-width: 992px) {
  .body_content {
    padding: 100px;
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