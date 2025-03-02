<template>
    <title>All Notification</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">

                <!-- Breadcumb Sections -->

                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                </div>
                <section class="breadcumb-section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                    <div class="breadcumb-list">
                        <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                        <nuxt-link to="/notifications">All Notifications</nuxt-link> <!-- Changed from <a> to <nuxt-link> -->
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                    <div class="share-save-widget d-flex align-items-center">
                        <div>
                            <nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


                <!-- Start Profile -->
                <!-- start -->
                <div class="table-responsive">
                    <table class="table-style1 table at-savesearch">
                        <thead class="t-head bg-primary text-white">
                            <tr>
                                <th scope="col" class="p-3">Notification</th>
                                <th scope="col" class="p-3" style="text-align: right;">Date & Time</th>
                            </tr>
                        </thead>
                        <tbody class="t-body">

                            <!-- v-for loop to iterate over sellerMsgData -->
                            <tr v-for="(order, index) in sellerMsgData" :key="index" @click="markAsSeen(order)"
                                :class="{ 'unseen-notification': !order.seen, 'seen-notification': order.seen }"
                                class="notification-row border-bottom">
                                <td class="vam p-3">
                                    <span :class="{ 'fw-bold': !order.seen, 'text-muted': order.seen }">
                                        {{ order.messages }}
                                    </span>
                                </td>
                                <td class="vam p-3 text-end"
                                    :class="{ 'fw-bold': !order.seen, 'text-muted': order.seen }">
                                    {{ formatDate(order.created_at) }}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                <!-- END -->

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
const sellerMsgData = ref([]);

const loading = ref(false);
const sellData = ref("");

definePageMeta({
    middleware: "is-logged-out",
});


const orderData = ref('');
const getSellerNotificationData = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getSellerAllMessages`);
        sellerMsgData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};


const allSellersreadporbo = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getSellerAllMessagesSignle`);
        sellerMsgData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};



const getSellerAllMessagesSignle = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getSellerAllMessagesSignle`);
        sellData.value = response.data;
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



const markAsSeen = async (order) => {
  if (!order.seen) {
    try {
      // Send API request to mark as seen
      await axios.post(`/user/notifications/${order.id}/seen`);
      order.seen = true; // Update frontend state after successful API call
    } catch (error) {
      console.error('Error marking notification as seen:', error);
    }
  }
};

onMounted(() => {
    getSellerAllMessagesSignle();
    allSellersreadporbo();
    getSellerNotificationData();
    //getCatList();

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

/* General Table Styling */
.table-style1 {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
}

.table-style1 th,
.table-style1 td {
    padding: 15px;
    vertical-align: middle;
}

/* Header Styling */
.t-head {
    background-color: #007bff;
    /* Bootstrap primary color */
    color: #ffffff;
    font-weight: bold;
}

/* Notification Row Hover Effect */
.notification-row {
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.notification-row:hover {
    background-color: #f1f1f1;
}

/* Unseen Notifications: Bold and Light Background */
.unseen-notification {
    background-color: #f9f9f9;
    font-weight: bold;
}

/* Seen Notifications: Normal Font and White Background */
.seen-notification {
    background-color: #ffffff;
    font-weight: normal;
    color: #6c757d;
    /* Muted text color */
}

/* Responsive Design */
.table-responsive {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}
</style>