<template>
  <div>
    <div class="col-lg-12" style="margin-top: 10px;;">
      <div class="ui-content container">
        <div class="navpill-style1">
          <ul class="nav nav-pills mb12" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active fw500 dark-color" id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i
                  class="fa fa-home" aria-hidden="true"></i>&nbsp;Welcome</button>
            </li>
           
            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="chatbox"><i class="fa fa-commenting"
                  aria-hidden="true"></i>&nbsp;Messages</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="myprofile" aria-selected="false"><i class="fa fa-user"
                  aria-hidden="true"></i>&nbsp;Profile</button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="deposit" aria-selected="false"><i
                  class="far fa-money-bill-alt" aria-hidden="true"></i>&nbsp;Deposit</button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="myorders" aria-selected="false"><i
                  class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Orders</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="mysetting" aria-selected="false"><i class="fa fa-cogs"
                  aria-hidden="true"></i>&nbsp;Setting</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" id="#" data-bs-toggle="pill" data-bs-target="#" type="button"
                role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fa fa-line-chart"
                  aria-hidden="true"></i>&nbsp;Report</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade fz15 text show active" id="pills-home" role="tabpanel"
              aria-labelledby="pills-home-tab">

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
                              <img class="w-100 wa-sm mb15-sm" :src="profileLogo || 'profile_default.png'"
                                style="height:150px; border-radius: 10px;;" alt="Loading...">
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
                <div class="container">
                  <div class="row wow fadeInUp">
                    <div class="col-lg-8">

                      <!-- ============{{ userResponseData.profile_status }}======== -->
                      <div class="service-about">
                        <h4>Description</h4>
                        <p class="text mb30 text-justify" style="text-align: justify;">{{ introduce_yourself }}</p>

                        <hr class="opacity-100 mb60 mt60">
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

                    <div class="col-lg-4">
                      <div class="blog-sidebar ms-lg-auto">
                        <div class="sidebar-widget mb30 pb20 bdrs8">
                             <ShareProfileLinkBuyer/>
                        </div>

                        <div class="sidebar-widget mb30 pb20 bdrs8">
                          <h4 class="widget-title">My Skills</h4>
                          <div class="tag-list mt30">
                            <a v-for="(skill, index) in skillsdata" :key="index" href="#">{{ skill.name }}</a>
                          </div>
                        </div>

                      </div>
                    </div>




                  </div>
                </div>
              </section>

            </div>
            
            <!-- <div class="tab-pane fade fz15 text" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div> -->
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const euddata = ref([]);
const expdata = ref([]);
const certificatedata = ref([]);
const router = useRouter();
const name = ref('');
const joindate = ref('');
const countryName = ref('');
const profName = ref('');
const introduce_yourself = ref('');
const profileLogo = ref('');
const skillsdata = ref('');
const loading = ref(false);
const route = useRoute();

definePageMeta({
  middleware: "is-logged-out",
});

const profileModal = ref(null);

const chkUserrow = async () => {
  try {
    const response = await axios.post(`/auth/me`);
    //console.log("Profile Status: ", response.data.profile_status);
    name.value = response.data.name;
    joindate.value = response.data.joindate;
    countryName.value = response.data.countryName;
    profName.value = response.data.profName;
    introduce_yourself.value = response.data.introduce_yourself
    profileLogo.value = response.data.profileLogo;

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};


const myprofile = () => {
  router.push('/dashboard/buyer/myprofile')
}

const chatbox = () => {
  router.push('/dashboard/buyer/chatbox')
}

const mysetting = () => {
  router.push('/dashboard/buyer/setting')
}
const myorders = () => {
  router.push('/dashboard/buyer/orders')
}
const deposit = () => {
  router.push('/dashboard/buyer/deposit')
}

const getExperience = async () => {
  try {
    const response = await axios.get(`/user/getExperience`);
    expdata.value = response.data.expdata;
  } catch (error) {
    console.log(error);
  }
};


const getEducations = async () => {
  try {
    const response = await axios.get(`/user/geteducation`);
    euddata.value = response.data.euddata;
  } catch (error) {
    console.log(error);
  }
};

const getCertificates = async () => {
  try {
    const response = await axios.get(`/user/getCertificate`);
    certificatedata.value = response.data.certificatedata;
  } catch (error) {
    console.log(error);
  }
};



const getSkills = async () => {
  try {
    const response = await axios.get(`/user/skillsData`);
    skillsdata.value = response.data.skillsdata;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
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