<template>
    <title>All Messages</title>

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
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                                        <a href="#">All Messages</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                    <div class="share-save-widget d-flex align-items-center">
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
                           


                        </div>
                    </div>
                </div>


                <!-- start -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                            aria-selected="true">Global Messages</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                            aria-selected="false">Important Message</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                        tabindex="0">



                        <table class="table-style1 table at-savesearch">
                                <thead class="t-head">
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Messages</th>
                                        <th scope="col">Sending Date</th>

                                    </tr>
                                </thead>
                                <tbody class="t-body">

                                    <!-- v-for loop to iterate over orderData -->
                                    <tr v-for="(order, index) in sellerMsgData" :key="index">
                                        <td class="vam">{{ order.name }}</td>
                                        <td class="vam">{{ order.messages }}</td>
                                        <td class="vam">{{ formatDate(order.created_at) }}</td>
                                    </tr>
                                </tbody>
                            </table>

                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                        tabindex="0">
                    
                    
                        <!-- start -->
                        <table class="table-style1 table at-savesearch">
                                <thead class="t-head">
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Messages</th>
                                        <th scope="col">Sending Date</th>

                                    </tr>
                                </thead>
                                <tbody class="t-body">

                                    <!-- v-for loop to iterate over orderData -->
                                    <tr v-for="(order, index) in sellData" :key="index">
                                        <td class="vam">{{ order.name }}</td>
                                        <td class="vam">{{ order.messages }}</td>
                                        <td class="vam">{{ formatDate(order.created_at) }}</td>
                                    </tr>
                                </tbody>
                            </table>


                        <!-- END -->
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>

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


const getNotificationData = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getBuyerAllMessages`);
        sellerMsgData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};


const getAllMessagesSignle = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getBuyerAllMessagesSignle`);
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

onMounted(() => {
     getAllMessagesSignle();
     getNotificationData();
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