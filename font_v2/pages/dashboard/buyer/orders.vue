<template>
    <title>My Orders</title>
  
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
                      <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                      <a href="#">Orders</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-2">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <div class="share-save-widget d-flex align-items-center">
                      <span class="icon flaticon-share dark-color fz12 mr10"></span>
                      <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link></div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Start Profile -->
         <div class="container">
            <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">
                <div class="packages_table table-responsive">
                  <table class="table-style1 table at-savesearch">
                    <thead class="t-head">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody class="t-body">
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style1">In Progress</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style2">Completed</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th class="active">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style2">Completed</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style3">Cancel</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style3">Cancel</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th class="active">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style2">Completed</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style2">Completed</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style1">In Progress</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>#99 <span class="ms-3">App Services</span></div>
                        </th>
                        <td class="vam">April 9, 2023</td>
                        <td class="vam">$1.200</td>
                        <td class="vam"><span class="pending-style style3">Cancel</span></td>
                        <td class="vam">
                          <a href="#" class="table-action fz15 fw500 text-thm2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="View"><span class="flaticon-website me-2 vam"></span> View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="mbp_pagination text-center mt30">
                    <ul class="page_navigation">
                      <li class="page-item">
                        <a class="page-link" href="#"> <span class="fas fa-angle-left"></span></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item"><a class="page-link" href="#">5</a></li>
                      <li class="page-item"><a class="page-link" href="#">...</a></li>
                      <li class="page-item"><a class="page-link" href="#">20</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#"><span class="fas fa-angle-right"></span></a>
                      </li>
                    </ul>
                    <p class="mt10 mb-0 pagination_page_count text-center">1 – 20 of 300+ property available</p>
                  </div>
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
  const loading = ref(false);
  const route = useRoute();
  
  definePageMeta({
    middleware: "is-logged-out",
  });
  
  const profileModal = ref(null);
  
  const errors = ref({});
  const profilePicture = ref(null);
  const imagePreview = ref(null);
  const name = ref('');
  const email = ref('');
  const selectedProfession = ref('');
  const phone = ref('');
  const skillInput = ref('');
  const country_1 = ref('');
  const skills = ref([]);
  const professinListData = ref([]);
  const skillsError = ref('');
  let countryData = ref('');
  
  const myprofile = () => {
    console.log("working....");
    router.push('/dashboard/myprofile')
  }
  
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
  
  
  
  onMounted(() => {
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