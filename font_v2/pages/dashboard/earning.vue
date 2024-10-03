<template>
    <title>My Earning</title>
  
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
                        <nuxt-link :to="`/category/${data.slug}`">
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
  
          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>
          <section class="breadcumb-section">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-lg-10">
                  <div class="breadcumb-style1 mb10-xs">
                    <div class="breadcumb-list">
                      <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                      <a href="#">Earning</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-2">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <div class="share-save-widget d-flex align-items-center">
                      <span class="icon flaticon-share dark-color fz12 mr10"></span>
                      <div class="h6 mb-0"><nuxt-link to="/dashboard/welcome">Back</nuxt-link></div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Start Profile -->
          <div class="container">
            <h3>Total Earning : ${{earning}}</h3>
            <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">
              <div class="packages_table table-responsive">
                <table class="table-style1 table at-savesearch">
                  <thead class="t-head">
                    <tr>
                      <th scope="col">OrderID</th>
                      <th scope="col">OrderDate</th>
                      <th scope="col">Delivery Time</th>
                      <th scope="col">Packages</th>
                      <th scope="col">Amount</th>
                      <th scope="col text-center" style="text-align: center;">Status</th>
                      <th scope="col text-center" style="text-align: center;">Action</th>
                    </tr>
                  </thead>
                  <tbody class="t-body">
                    <!-- v-for loop to iterate over orderData -->
                    <tr v-for="(order, index) in orderData" :key="index">
                      <th scope="row">
                        <div>#{{ order.orderId }} <span class="ms-3"><nuxt-link :to="`/gigs/${order.gig_slug}`">{{
                          order.gig_name }}</nuxt-link>
                          </span></div>
                      </th>
                      <td class="vam">{{ formatDate(order.created_at) }}</td>
                      <td class="vam">{{ order.reamingitime }}</td>
                      <td class="vam">{{ order.selected_packages }}</td>
                      <td class="vam">${{ order.selected_price }}</td>
                      <td class="vam">
                        <span v-if="order.order_status == 1">Order Placed</span>
                        <span v-if="order.order_status == 2">Completed</span>
                        <span v-if="order.order_status == 3">Delivered</span>
                        <span v-if="order.order_status == 4">Under Review</span>
                        <span v-if="order.order_status == 5">Order Cancelled</span>
                      </td>
  
                      <td class="vam" style="text-align: center;">
                        <a href="#" @click="getAllOrdersList">
                          <i class="fa fa-refresh" aria-hidden="true"></i> Reload
                        </a>
  
                      </td>
                    </tr>
                  </tbody>
                </table>
  
  
              </div>
            </div>
          </div>
          <!-- END Profile -->
          <div />
        </div>
      </div>
  
      <!-- Modal Template -->
  
  
  
  
      <Footer />
    </body>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  import { useRouter } from 'vue-router';
  import Swal from "sweetalert2";
  
  const router = useRouter();
  const categoryData = ref([]);
   const earning = ref(0);
  const loading = ref(false);
  const route = useRoute();
  
  definePageMeta({
    middleware: "is-logged-out",
  });
  
  
  const orderData = ref('');
  const getCatList = async () => {
    try {
      loading.value = true;
      const response = await axios.get(`/unauthenticate/getFindCategorys`);
      categoryData.value = response.data;
    } catch (error) {
      // Handle error
    } finally {
      loading.value = false;
    }
  };
  
  // Function to format the date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  const getAllOrdersList = async () => {
    try {
      loading.value = true;
      const response = await axios.get(`/order/getOrderForSellerEarning`);
      orderData.value = response.data.orders;
      earning.value = response.data.earning;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };
  
  
  onMounted(() => {
    getAllOrdersList();
    getCatList();
  
  });
  
  </script>
  
  <style scoped>
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