<template>
    <title>Setting</title>
  
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
                      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
                      <a href="#">Setting</a>
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
          <div class="row">
              <div class="col-xl-12">
                <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb25">
                  <h5 class="list-title">Change password</h5>
                </div>
                <div class="col-lg-12">
                  <div class="row">
                    <form class="form-style1">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="mb20">
                            <label class="heading-color ff-heading fw500 mb10">Old Password</label>
                            <input type="text" class="form-control" placeholder="********">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="mb20">
                            <label class="heading-color ff-heading fw500 mb10">New Password</label>
                            <input type="text" class="form-control" placeholder="********">
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="mb20">
                            <label class="heading-color ff-heading fw500 mb10">Confirm New Password</label>
                            <input type="text" class="form-control" placeholder="********">
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="text-start">
                            <a class="ud-btn btn-thm" href="page-contact.html">Change Password<i class="fal fa-arrow-right-long"></i></a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="bdrb1 pb15 mb25">
                      <h5 class="list-title">Close Account</h5>
                    </div>
                    <form class="form-style1">
                      <div class="row">
                        <div class="col-sm-12">
                          <h6>Close account</h6>
                          <p class="text">Warning: If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</p>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <label class="heading-color ff-heading fw500 mb10">Enter Password</label>
                            <input type="text" class="form-control" placeholder="********">
                          </div>
                          <div class="text-start">
                            <a class="ud-btn btn-thm" href="page-contact.html">Change Password<i class="fal fa-arrow-right-long"></i></a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
                <br/>
               
                
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