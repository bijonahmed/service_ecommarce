<template>
  <div>

    <div class="col-lg-12" style="margin-top: 10px;;">
      <div class="ui-content container">
        <div class="navpill-style1">
          <div class="nav nav-pills overflow-auto mb-3" id="pills-tab" role="tablist">

            <button class="nav-link active fw500 dark-color" id="pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              <i class="fa fa-grid" aria-hidden="true"></i>&nbsp;Dashboard
            </button>

            <button class="nav-link fw500 dark-color" @click="chatbox">
              <i class="fa fa-commenting" aria-hidden="true"></i>&nbsp;Messages
            </button>

            <button class="nav-link fw500 dark-color" @click="myprofile">
              <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Profile
            </button>

            <button class="nav-link fw500 dark-color" @click="mygig">
              <i class="fa fa-tasks" aria-hidden="true"></i>&nbsp;My GIGs
            </button>

            <button class="nav-link fw500 dark-color" @click="myorders">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Orders
            </button>

            <button class="nav-link fw500 dark-color" @click="mywithdraw">
              <i class="fas fa-dollar-sign" aria-hidden="true"></i>&nbsp;Withdraw
            </button>

            <button class="nav-link fw500 dark-color" @click="mysetting">
              <i class="fa fa-cogs" aria-hidden="true"></i>&nbsp;Setting
            </button>

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
                      <div class="list-meta d-flex align-items-center mt30">
                        <a class="position-relative freelancer-single-style" href="#">
                          <span class="online"></span>
                          <img class=" wa-sm mb15-sm profile_ rounded-circle" :src="profileLogo || '/blank_user.jpg'"
                            alt="Image">
                        </a>

                        <div class="ml20 ml0-xs pro_details">
                          <h5 class="title  mb-1"> <b>{{ name || "Loading...." }}</b></h5>
                          <p class="mb-0">{{ profName || "Loading...." }}</p>
                          <p class="mb-0 me-2 dark-color fz15 fw500 list-inline-item mb5-sm ml0-xs">
                            <i class="flaticon-place vam fz20 me-2"></i>
                            {{ countryName || "Loading...." }}
                          </p>
                          <p class="mb-0 dark-color _date fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                            <i class="flaticon-30-days vam fz20 me-2"></i>
                            Join : {{ joindate || "Loading...." }}
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
          <center>
            <div class="spinner-border" role="status" v-if="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </center>


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

.nav-pills .nav-link {
  border-radius: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-pills .nav-link.active {
  background-color: #007bff;
  color: #fff;
}

.nav-pills .nav-link:hover {
  background-color: #f0f0f0;
  color: #007bff;
}

.nav-pills {
  gap: 10px;
  white-space: nowrap;
}
</style>