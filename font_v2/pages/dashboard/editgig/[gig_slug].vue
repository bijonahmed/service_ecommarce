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
                      <a href="#">EDIT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>
          <center><h1>Working on.....</h1></center>
          <!-- Breadcumb Sections -->
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