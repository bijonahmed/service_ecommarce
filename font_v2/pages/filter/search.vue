<template>
    <div>
        <title>Search</title>

        <body class="bgc-thm1">
            <div class="wrapper ovh">
                <Header />
                <MobileMenu />
                <div class="body_content">

                    <!-- Breadcumb Sections -->
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
                    <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <Loader />
                    </div>
                    <!-- Breadcumb Sections -->
                    <!-- About Section Area -->
                    <section class="pb0 pt10">
                        <div class="container maxw1600 bdrb1 pb60">
                            <!-- Listings All Lists -->
                            <section class="pt30 pb90">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-6 col-xl-3" v-for="data in responseData" :key="data.id">
                                            <div class="listing-style1">
                                                <div class="list-thumb">
                                                    <!-- Dynamically set the image source -->
                                                    <img class="w-100"
                                                        :src="data.thumbnail_images ? data.thumbnail_images : '/images/listings/category-1.jpg'"
                                                        alt="Listing Image">
                                                    <a href="#" class="listing-fav fz12"><span
                                                            class="far fa-heart"></span></a>
                                                </div>
                                                <div class="list-content">
                                                    <p class="list-text body-color fz14 mb-1">{{ categoryName || ''
                                                        }}</p>
                                                    <h5 class="list-title">
                                                        <nuxt-link :to="`/gigs/${data.gig_slug}`">{{ data.name || ''
                                                            }} </nuxt-link>
                                                    </h5>

                                                    <hr class="my-2">
                                                    <div
                                                        class="list-meta d-flex justify-content-between align-items-center mt15">
                                                        <a href="#">
                                                            <span class="position-relative mr10">
                                                                <img class="rounded-circle"
                                                                    :src="data.freelancer_images" alt="Freelancer Photo"
                                                                    style="height: 50px;width: 50px;">
                                                                <span class="online-badge"
                                                                    style="height: 10px;width: 10px;"></span>
                                                            </span>
                                                            <span class="fz14">{{ data.user_name || '' }}</span>
                                                        </a>
                                                        <div class="budget">
                                                            <p class="mb-0 body-color">
                                                                Starting at<span class="fz17 fw500 dark-color ms-1">${{
                                                                    data.price || '0.00' }}</span>
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
                    </section>

                    <!-- Our Features -->


                    <!-- Funfact -->
                    <section class="pb0 pt60">
                        <div class="container maxw1600 bdrb1 pb60">
                            <div class="row">
                                <div class="col-xl-11 mx-auto">
                                    <div class="row justify-content-center" data-wow-delay="300ms">
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">834</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Total Freelancer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">732</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Positive Review</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">90</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Order recieved</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">236</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Projects Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Our Agents -->

                </div>

                <Footer />
            </div>
        </body>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
const responseData = ref([]);
const loading = ref(false);  // Loading state
const errorMessage = ref(''); // Error message state
const currentPage = ref(1);
const totalPages = ref(5);    // Total number of pages (update as needed)
const isLoading = ref(false); // Loading state indicator
const route = useRoute();
const slug = route.params.slug; // Capture the slug parameter from the URL
const categoryData = ref([]);

const props = defineProps({
  categoryData: {
    type: Array,
    required: true
  }
});


const fetchData = async (page = 1) => {
    const slugdata = router.currentRoute.value.query.slug;
    loading.value = true; // Set loading to true at the start

    try {
        const response = await axios.get(`/unauthenticate/userSearch/`, {
            params: {
                slug: slugdata,
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
        errorMessage.value = error.response ? error.response.data.message : 'An error occurred.';
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false;
    }
};
const isActive = (slug) => {
  return slug === route.params.slug; // Compare slug with the current route's slug
};


const fetechCategory = async () => {
  try {
    const response = await axios.get(`/unauthenticate/findCategorys`, {
      params: {
        slug: slug,
      },
    });
    categoryData.value = response.data.categoryData;

  } catch (error) {
    // Handle error
  }
};
onMounted(async () => {
    fetchData();
    fetechCategory();
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

/* Media query for mobile devices */
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