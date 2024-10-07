<template>
  <div>
    <title>My Profile [{{ profileSlug }}]</title>

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
          <!-- Start -->

          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>

          <section class="breadcumb-section pt-2 pb">
            <div
              class="cta-service-v1 freelancer-single-style mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
              <img class="left-top-img wow zoomIn" src="/images/vector-img/left-top.png" alt="">
              <img class="right-bottom-img wow zoomIn" src="/images/vector-img/right-bottom.png" alt="">
              <div class="container">
                <div class="row wow fadeInUp">
                  <div class="col-xl-7">
                    <div class="position-relative">
                      <!-- <h2>I will design website UI UX in adobe xd or figma</h2> -->
                      <div class="list-meta d-sm-flex align-items-center mt30">
                        <a class="position-relative freelancer-single-style" href="#">
                          <span class="online"></span>
                            <img class=" wa-sm mb15-sm rounded-circle" style="height:150px; width: 150px; overflow: hidden; object-fit: cover;" :src="profileLogo || '/blank_user.jpg'"
                            alt="Photo">

                        </a>
                        <div class="ml20 ml0-xs">
                          <h5 class="title mb-1">{{ name }}</h5>
                          <p class="mb-0">{{ profName }}</p>
                          <!-- <p class="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm d-none">
                                <i class="fas fa-star vam fz10 review-color me-2"></i>
                                0
                                reviews
                              </p> -->
                          <p class="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm ml0-xs">
                            <i class="flaticon-place vam fz20 me-2"></i>
                            {{ countryName }}
                          </p>
                          <p class="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                            <i class="flaticon-30-days vam fz20 me-2"></i>
                            Join Date {{ joindate }}
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Service Details -->
          <section class="pt10 pb90 pb30-md">
            <div class="container-fluid">
              <div class="row wow fadeInUp">
                <h4>Description</h4>
                <p class="text mb30 text-justify" style="text-align: justify;" v-html="introduce_yourself"></p>

                
                <div class="col-lg-3">
                  <h4 class="widget-title">My Skills</h4>
                      <div class="tag-list mt30">
                        <a v-for="(skill, index) in skillsdata" :key="index" href="#">{{ skill.name }}</a>
                      </div>
                  <!-- ============{{ userResponseData.profile_status }}======== -->
                  <div class="service-about">
                    <hr class="opacity-100 mb10 mt10">
                    <h4 class="mb30">Education</h4>
                    <div class="educational-quality_">

                      <div class="wrapper mb40" v-for="edu in euddata" :key="edu.id">
                        <span class="tag">{{ edu.year }}</span>
                        <h5 class="mt15">{{ edu.subject }}</h5>
                        <h6 class="text-thm">{{ edu.college }}</h6>
                        <p>{{ edu.description }}
                        </p>
                      </div>

                    </div>
                    <hr class="opacity-100 mb60">
                    <h4 class="mb30">Work & Experience</h4>
                    <div class="educational-quality_">
                      <div class="wrapper mb40" v-for="edu in expdata" :key="edu.id">
                        <span class="tag">{{ edu.year }}</span>
                        <h5 class="mt15">{{ edu.role }}</h5>
                        <h6 class="text-thm">{{ edu.company }}</h6>
                        <p>{{ edu.description }}
                        </p>
                      </div>

                    </div>
                    <hr class="opacity-100 mb60">
                    <h4 class="mb30">Awards adn Certificates</h4>
                    <div class="educational-quality__">
                      <div class="wrapper mb40" v-for="cer in certificatedata" :key="cer.id">
                        <span class="tag">{{ cer.year }}</span>
                        <h5 class="mt15">{{ cer.course_name }}</h5>
                        <h6 class="text-thm">{{ cer.institute_name }}</h6>
                        <p>{{ cer.description }}
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-sm-6 col-xl-3" v-for="data in gigList" :key="data.id">
                      <div class="listing-style1">
                        <div class="list-thumb">
                          <!-- Dynamically set the image source -->
                          <img class="w-100"
                            :src="data.thumbnail_images ? data.thumbnail_images : '/images/listings/category-1.jpg'"
                            alt="Listing Image">
                          <!-- <a href="#" class="listing-fav fz12"><span class="far fa-heart"></span></a> -->
                        </div>
                        <div class="list-content">
                          <p class="list-text body-color fz14 mb-1">{{ categoryName || '' }}</p>
                          <h5 class="list-title">
                            <nuxt-link :to="`/gigs/${data.gig_slug}`">{{ data.name || '' }} </nuxt-link>
                          </h5>

                          <hr class="my-2">
                          <div class="list-meta d-flex justify-content-between align-items-center mt15">
                           
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
                </div>



               

              </div>
            </div>
          </section>

          <!-- END -->
          <div />
        </div>
        <Footer />
      </div>
    </body>

  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useUserStore } from '~~/stores/user';
import axios from "axios";
import Swal from "sweetalert2";

const router = useRouter();
const userStore = useUserStore()
const errors = ref({});

const loading = ref(false)
const categoryData = ref([]);
const gigList = ref([]);
const euddata = ref([]);
const expdata = ref([]);
const certificatedata = ref([]);
const skillsdata = ref('');
const name = ref('');
const joindate = ref('');
const countryName = ref('');
const profName = ref('');
const introduce_yourself = ref('');
const profileLogo = ref('');
const profileSlug = ref('');

const getCatList = async () => {
  try {

    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;
  } catch (error) {
    // Handle error
  }
};

let queryParams = {};
if (process.client) {
  queryParams = new URLSearchParams(window.location.search);
  const codeValue = queryParams.toString().split('=')[1];
  console.log("----" + codeValue);
  profileSlug.value = codeValue;
}

const getExperience = async () => {
  try {
    const response = await axios.get(`/unauthenticate/getExperience`, {
      params: {
        slug: profileSlug.value,
      }
    });
    expdata.value = response.data.expdata;
  } catch (error) {
    console.log(error);
  }
};

const getEducations = async () => {
  try {
    const response = await axios.get(`/unauthenticate/geteducation`, {
      params: {
        slug: profileSlug.value,
      }
    });
    euddata.value = response.data.euddata;
  } catch (error) {
    console.log(error);
  }
};

const getCertificates = async () => {
  try {
    const response = await axios.get(`/unauthenticate/getCertificate`, {
      params: {
        slug: profileSlug.value,
      }
    });
    certificatedata.value = response.data.certificatedata;
  } catch (error) {
    console.log(error);
  }
};

const getSkills = async () => {
  try {

    const response = await axios.get(`/unauthenticate/skillsData`, {
      params: {
        slug: profileSlug.value,
      }
    });
    skillsdata.value = response.data.skillsdata;
  } catch (error) {
    console.log(error);
  }
};

const chkUserrow = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/getPublic`, {
      params: {
        slug: profileSlug.value,
      }
    });
    gigList.value = response.data.gigList;
    name.value = response.data.name;
    joindate.value = response.data.joindate;
    countryName.value = response.data.countryName;
    profName.value = response.data.profName;
    introduce_yourself.value = response.data.introduce_yourself
    profileLogo.value = response.data.image;

  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    loading.value = false;

  }
};

onMounted(() => {
  getCatList();
  getCertificates();
  getExperience();
  getEducations();
  getSkills();
  chkUserrow();
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
