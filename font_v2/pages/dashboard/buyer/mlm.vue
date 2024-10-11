<template>
    <title>MLM</title>

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
                                        <a href="#">MLM</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                    <div class="share-save-widget d-flex align-items-center">
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Start Profile -->
                <div class="container">
                    <ReferralLink />
                </div>

                <div class="container mt-5">
                    <h4 class="mb-4">Referral Commission</h4>
                    Amount : ${{ sumAmount }}
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Received From</th>
                                <th scope="col">Commission Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Example rows -->
                            <tr v-for="com in comissionData" :key="com.id">
                                <td>{{ com.orderId }}</td>
                                <td>{{ com.commission_recv_frm_name }}
                                    <!-- <br/>ID:{{com.commission_recev_frm}} -->
                                </td>
                                <td>${{ com.amount }}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>



                <div class="container d-none">
                    <button @click="fetchUserLevels">Call</button>
                    <div class="container mt-5">
                        <h2>User Levels</h2>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Level</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in levelData" :key="user.id">
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.level }}</td>
                                    <td>{{ user.amount }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
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
const comissionData = ref([]);
const loading = ref(false);
const route = useRoute();
const sumAmount = ref(0);
definePageMeta({
    middleware: "is-logged-out",
});

const levelData = ref([]);




const getRefferalCommission = async () => {
    loading.value = true;
    try {
        const response = await axios.get("/order/referralCommission");
        comissionData.value = response.data.data;
        sumAmount.value = response.data.sumAmount;
    } catch (err) {
        console.log(err)
    } finally {
        loading.value = false;
    }
};






const fetchUserLevels = async () => {
    loading.value = true;
    const email = 'test50@gmail.com';
    try {
        const response = await axios.get("/user/checkLevelHistorys", {
            params: { email },
        });
        levelData.value = response.data.finalResponse;
    } catch (err) {
        console.log(err)
    } finally {
        loading.value = false;
    }
};


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
    getRefferalCommission();
    getCatList();

});

</script>

<style scoped>
.table {
    margin-top: 20px;
}

.preview-image {
    max-width: 300px;
    max-height: 300px;
    margin-top: 10px;
    border: 2px solid #ddd;
}

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