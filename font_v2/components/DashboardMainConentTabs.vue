<template>
  <div>

    <div class="col-lg-12" style="margin-top: 10px;;">
      <div class="ui-content container">
        <div class="navpill-style1">
          <ul class="nav nav-pills overflow_auto mb12" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active fw500 dark-color" id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i
                  class="fa fa-grid" aria-hidden="true"></i>&nbsp;Dashboard</button>
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
              <button class="nav-link fw500 dark-color" @click="mygig" aria-selected="false"><i class="fa fa-tasks"
                  aria-hidden="true"></i>&nbsp;My GIGs</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="myorders" aria-selected="false"><i
                  class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Orders</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="mywithdraw" aria-selected="false">
                <i class="	fas fa-dollar-sign" aria-hidden="true"></i>&nbsp;Withdraw </button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link fw500 dark-color" @click="mysetting" aria-selected="false"><i class="fa fa-cogs"
                  aria-hidden="true"></i>&nbsp;Setting</button>
            </li>
            <li class="nav-item d-none" role="presentation">
              <button class="nav-link fw500 dark-color" id="#" data-bs-toggle="pill" data-bs-target="#" type="button"
                role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fa fa-line-chart"
                  aria-hidden="true"></i>&nbsp;Report</button>
            </li>
          </ul>

          <div class="d-flex justify-content-center loading-indicator" v-if="loading">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
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
                          <div class="list-meta d-flex align-items-center mt30">
                            <a class="position-relative freelancer-single-style" href="#">
                              <span class="online"></span>
                              <img class=" wa-sm mb15-sm profile_ rounded-circle"
                                :src="profileLogo || '/blank_user.jpg'" alt="">
                            </a>

                            <div class="ml20 ml0-xs pro_details">
                              <h5 class="title  mb-1"> <b>{{ name }}</b></h5>
                              <p class="mb-0">{{ profName }}</p>
                              <p class="mb-0 me-2 dark-color fz15 fw500 list-inline-item mb5-sm ml0-xs">
                                <i class="flaticon-place vam fz20 me-2"></i>
                                {{ countryName }}
                              </p>
                              <p class="mb-0 dark-color _date fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                                <i class="flaticon-30-days vam fz20 me-2"></i>
                                Join : {{ joindate }}
                              </p>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- Success Alert -->
              <!-- Service Details -->
              <section class="pt10 pb90 pb30-md">
                <div class="container">
                  <div class="row wow fadeInUp">
                    <div class="col-lg-4">
                      <Earning />
                      <!-- <MessageComponent /> -->
                      <ShareProfileLink />
                    </div>

                    <div class="col-lg-8">
                      <OrdersComponents />
                    </div>

                  </div>
                </div>
              </section>
            </div>
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
const mlmData = ref([]);
const router = useRouter();
const name = ref('');
const joindate = ref('');
const countryName = ref('');
const profName = ref('');
const introduce_yourself = ref('');
const profileLogo = ref('');
const earning = ref('');
const skillsdata = ref('');
const loading = ref(false);
const route = useRoute();
const errors = ref({});
const chatUsers = ref([]);
const msgData = ref([]);

definePageMeta({
  middleware: "is-logged-out",
});

const sellerId = ref('');
const orderId = ref('');

const setReview = async (orders) => {
  sellerId.value = orders.sellerId;
  orderId.value = orders.orderId;
  $('#review_modal').modal('show');
}


const chkUserrow = async () => {
  try {
    loading.value = true;
    const response = await axios.post(`/auth/me`);
    name.value = response.data.name;
    joindate.value = response.data.joindate;
    countryName.value = response.data.countryName;
    profName.value = response.data.profName;
    introduce_yourself.value = response.data.introduce_yourself
    profileLogo.value = response.data.profileLogo;

  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    loading.value = false;
  }
};

const myprofile = () => {
  router.push('/dashboard/myprofile')
}

const chatbox = () => {
  router.push('/dashboard/chatbox')
}

const mysetting = () => {
  router.push('/dashboard/setting')
}
const myorders = () => {
  router.push('/dashboard/orders')
}

const mywithdraw = () => {
  router.push('/dashboard/withdrawalrequest')
}

const mygig = () => {
  router.push('/dashboard/mygig/giglist')
}



onMounted(() => {
  chkUserrow();

});

</script>


<style>
.spinner-border {
  width: 2rem;
  height: 2rem;
}
</style>