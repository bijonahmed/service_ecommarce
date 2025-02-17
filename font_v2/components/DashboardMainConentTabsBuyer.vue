<template>
  <div>

    <div class="col-lg-12" style="margin-top: 10px;;">
      <div class="ui-content container">
        <div class="navpill-style1">
          <div class="nav overflow-auto nav-pills mb12" id="pills-tab" role="tablist">

            <button class="nav-link custom-btn active fw500 dark-color" id="pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              <i class="fa fa-grid" aria-hidden="true"></i>&nbsp;Dashboard
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="chatbox">
              <i class="fa fa-commenting" aria-hidden="true"></i>&nbsp;Messages
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="myprofile" aria-selected="false">
              <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Profile
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="deposit" aria-selected="false">
              <i class="far fa-money-bill-alt" aria-hidden="true"></i>&nbsp;Deposit
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="mywithdraw" aria-selected="false">
              <i class="fas fa-dollar-sign" aria-hidden="true"></i>&nbsp;Withdraw
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="myorders" aria-selected="false">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Orders
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="mlm" aria-selected="false">
              <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Community
            </button>

            <button class="nav-link custom-btn fw500 dark-color" @click="mysetting" aria-selected="false">
              <i class="fa fa-cogs" aria-hidden="true"></i>&nbsp;Setting
            </button>

            <button class="nav-link custom-btn fw500 dark-color d-none" id="#" data-bs-toggle="pill" data-bs-target="#"
              type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              <i class="fa fa-line-chart" aria-hidden="true"></i>&nbsp;Report
            </button>

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
                            <a class="position-relative freelancer-single-style me-1" href="#">
                              <span class="online"></span>

                              <img class=" wa-sm mb15-sm rounded-circle profile_"
                                :src="profileLogo || '/blank_user.jpg'" alt="">

                            </a>
                            <div class="ml20 ml0-xs pro_details">
                              <h5 class="title  mb-1">{{ name }} <b><u>Buyer</u></b></h5>
                              <p class="mb-0">{{ profName }}</p>
                              <!-- <p class="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm d-none">
                                <i class="fas fa-star vam fz10 review-color me-2"></i>
                                0
                                reviews
                              </p> -->
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



              <!-- Service Details -->
              <section class="pt10 pb90">
                <div class="container">
                  <div class="row wow fadeInUp">
                    <div class="col-lg-4">
                      <h3 class="title_balence"> Available Balance: ${{ currentBalance }}</h3>
                      <MessageComponentBuyer />
                      <hr />
                      <ShareProfileLinkBuyer />
                      <div class="service-about">
                        <h4 class="title_balence">Description</h4>
                        <p class="text mb30 text-justify" style="text-align: justify;">
                          {{ introduce_yourself }}</p>

                      </div>
                    </div>

                    <!-- Start -->

                    <div class="col-lg-8">
                      <!-- Order Management Component-->
                      <OrderManagementBuyer />
                      <!-- <center><button class="btn btn-primary" @click=getwhislistData>Test</button></center> -->
                      <!-- <nuxt-link :to="`/gigs/${data.gig_slug}`">{{ data.name || '' }} </nuxt-link> -->
                      <div class="row">

                        <center>
                          <br />
                          <p>Wish List</p>
                        </center>
                        <div class="col-sm-6 col-xl-4" v-for="gig in gigData" :key="gig.id">
                          <div class="listing-style1">
                            <div class="list-thumb">
                              <!-- Delete -->
                              <nuxt-link :to="`/gigs/${gig.gig_slug}`"><img class="w-100" :src="gig.thumbnail_images"
                                  alt="">
                                <a href="#" class="listing-fav fz12" @click="deleteGig(gig.id)"><i
                                    class="fa-solid fa-trash"></i></a></nuxt-link>
                              <!-- Share  -->
                              <nuxt-link :to="`/gigs/${gig.gig_slug}`" @click="shareUrl(gig.gig_slug)"
                                class="listing-fav fz12" style="left: 20px;">
                                <i class="fa-solid fa-share"></i>
                              </nuxt-link>

                              <!-- Edit  -->
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </section>

            </div>

            <!-- Modal -->


          </div>
        </div>

      </div>

      <!-- <div class="tab-pane fade fz15 text" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div> -->
    </div>
  </div>

</template>

<script setup>
import {
  useRoute
} from 'vue-router';
import axios from 'axios';

import {
  useRouter
} from 'vue-router';
import Swal from "sweetalert2";

const chatUsers = ref([]);

const router = useRouter();
const name = ref('');
const joindate = ref('');

const countryName = ref('');
const profName = ref('');
const introduce_yourself = ref('');
const profileLogo = ref('');

const loading = ref(false);
const route = useRoute();
const orderData = ref('');
const currentBalance = ref(0);
const cancelReason = ref('');

definePageMeta({
  middleware: "is-logged-out",
});

const profileModal = ref(null);


const gigData = ref([]);

const getwhislistData = async () => {
  try {
    const response = await axios.get(`/gig/getwishListGig`);
    gigData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};



const shareUrl = (slug) => {
  const currentUrl = window.location.origin; // Get the base URL (e.g., https://example.com)
  const fullUrl = `${currentUrl}/gigs/${slug}`; // Construct the full URL with slug

  navigator.clipboard.writeText(fullUrl)
    .then(() => {

      Swal.fire(
        'Copied!',
        'Your gig URL has been copied.',
        'success'
      );

      //alert('URL copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy URL: ', err);
    });
};


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

const mywithdraw = () => {
  router.push('/dashboard/buyer/withdrawalrequest')
}

const mlm = () => {
  router.push('/dashboard/buyer/mlm')
}

const getBalance = async () => {
  try {
    const response = await axios.get(`/user/checkBalance`);
    currentBalance.value = response.data.currentBalance;
  } catch (error) {
    console.log(error);
  }
};


const deleteGig = async (id) => {
  // Show confirmation dialog
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  // Check if the user confirmed
  if (result.isConfirmed) {
    try {
      const response = await axios.get('/gig/deleteWishListGig', {
        params: { id: id }
      });

      // Call gigList function after successful deletion
      if (response.status === 200) {

        Swal.fire(
          'Deleted!',
          'Your gig has been deleted.',
          'success'
        );
        getwhislistData();
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error!',
        'There was an error deleting your gig.',
        'error'
      );
    }
  }
};


onMounted(() => {
  getwhislistData();
  getBalance();
  chkUserrow();

});

</script>

<style>
/* Custom styles for the nav buttons */
.custom-btn {
  display: inline-flex;
  align-items: center;
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px 20px;
  margin-right: 10px;
  transition: all 0.3s ease;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.custom-btn:hover {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.custom-btn i {
  margin-right: 8px;
}

.custom-btn.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.custom-btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

/* Optional: Adding a hover effect when not active */
.custom-btn:not(.active):hover {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

/* Optional: Making the pill container overflow horizontally */
.nav {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 10px;
  gap: 12px;
}

.mb12 {
  margin-bottom: 12px;
}
</style>