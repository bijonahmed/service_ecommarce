<template>
    <div>
        <title>All Categorys</title>

        <body class="bgc-thm1">
            <div class="wrapper ovh">
                <Header />
                <MobileMenu />
                <div class="body_content">

                    <!-- Breadcumb Sections -->
                    <section class="breadcumb-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="breadcumb-style1">
                                        <div class="breadcumb-list">
                                            <nuxt-link to="/">Home</nuxt-link>
                                            <a href="#">All Categorys</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <Loader />
                    </div>
                    <!-- Breadcumb Sections -->
                    <section class="breadcumb-section pt-0">
                        <div
                            class="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg px10-xs">
                            <img class="left-top-img wow zoomIn" src="/images/vector-img/left-top.png" alt="">
                            <img class="right-bottom-img wow zoomIn" src="/images/vector-img/right-bottom.png" alt="">
                            <img class="service-v1-vector bounce-y d-none d-lg-block"
                                src="/images/vector-img/vector-service-v1.png" alt="">
                            <div class="container">
                                <div class="row wow fadeInUp">
                                    <div class="col-xl-7">
                                        <div class="position-relative">
                                            <div
                                                class="advance-search-tab at-home6 bgc-white bdrs12 p10 position-relative border-0">
                                                <div class="row">
                                                    <div class="col-md-9 col-lg-8 col-xl-9">
                                                        <div class="advance-search-field mb10-sm">
                                                            <form class="form-search position-relative">
                                                                <div class="box-search">
                                                                    <span class="icon far fa-magnifying-glass"></span>
                                                                    <input class="form-control" type="text"
                                                                        v-model="searchtxt" name="search"
                                                                        placeholder="Category..." @keyup="fetchCatData">
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-4 col-xl-3">
                                                        <div class="text-center">
                                                            <button class="ud-btn btn-thm bdrs12 w-100 border-0"
                                                                @click="fetchCatData" type="button">Search</button>
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

                    <!-- About Section Area -->
                    <section class="pb0 pt60">
                        <div class="container maxw1600 bdrb1 pb60">
                            <div class="container">
                                <div class="row">
                                    <ul class="category-list list-unstyled d-flex flex-wrap">
                                        <li v-for="category in categoryData" :key="category.id"
                                            class="category-item col-4">
                                            <nuxt-link class="dropdown" :to="`/category/${category.slug}`">
                                                <span>{{ category.name }}</span>
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>


                    <!-- Our Features -->

                    <section class="p-0 d-none">
                        <div
                            class="cta-banner3 bgc-thm4 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
                            <div class="container">
                                <div class="row wow fadeInUp">
                                    <div class="col-xl-5">
                                        <div class="mb30">
                                            <div class="main-title">
                                                <h2 class="title">A whole world of freelance <br
                                                        class="d-none d-md-block"> talent at your fingertips</h2>
                                            </div>
                                        </div>
                                        <div class="why-chose-list">
                                            <div class="list-one d-flex align-items-start mb30">
                                                <span class="list-icon flex-shrink-0 flaticon-badge"></span>
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">Proof of quality</h4>
                                                    <p class="text mb-0 fz15">Check any pro’s work samples, client
                                                        reviews, and identity <br class="d-none d-lg-block">
                                                        verification.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <span class="list-icon flex-shrink-0 flaticon-money"></span>
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">No cost until you hire</h4>
                                                    <p class="text mb-0 fz15">Interview potential fits for your job,
                                                        negotiate rates, and only pay <br class="d-none d-lg-block"> for
                                                        work you approve.</p>
                                                </div>
                                            </div>
                                            <div class="list-one d-flex align-items-start mb30">
                                                <span class="list-icon flex-shrink-0 flaticon-security"></span>
                                                <div class="list-content flex-grow-1 ml20">
                                                    <h4 class="mb-1">Safe and secure</h4>
                                                    <p class="text mb-0 fz15">Focus on your work knowing we help protect
                                                        your data and privacy. We’re here with 24/7 support if you need
                                                        it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img class="cta-banner3-img wow fadeInLeft" src="/images/about/about-5.jpg" alt=""
                                data-wow-delay="300ms">
                        </div>
                    </section>
                    <!-- Funfact -->
                    <section class="pb0 pt60 d-none">
                        <div class="container maxw1600 bdrb1 pb60">
                            <div class="row">
                                <div class="col-xl-11 mx-auto">
                                    <div class="row justify-content-center" data-wow-delay="300ms">
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">834</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Total Freelancer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">732</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Positive Review</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">90</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Order recieved</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="funfact_one text-center">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex justify-content-center">
                                                        <li>
                                                            <div class="timer">236</div>
                                                        </li>
                                                        <li><span>M</span></li>
                                                    </ul>
                                                    <p class="text mb-0">Projects Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Our Agents -->

                </div>

                <Footer />
            </div>
        </body>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
const loading = ref(false);
const searchtxt = ref('');


const categoryData = ref([]);


const fetchCatData = async () => {
    try {
        loading.value = true;
        const response = await axios.get("/unauthenticate/allCategory", {
            params: {
                searchtxt: searchtxt.value,
            }
        });
        categoryData.value = response.data;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(async () => {
    fetchCatData();
});

</script>

<style scoped>
.category-list {
    list-style: none;
    padding: 0;
}

.category-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
}



.subcategory-container {
    margin-top: 10px;
}

.subcategory-item {
    background: #f8f9fa;
    border-radius: 5px;
    padding: 15px;
    margin: 5px 0;
}

.cat-title {
    font-size: 16px;
    color: #333;
    font-weight: 600;
    margin-bottom: 10px;
}

.sub-subcategory-list {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
}

.sub-subcategory-item {
    margin: 5px 0;
}

.sub-subcategory-item a {
    color: #555;
    text-decoration: none;
    transition: color 0.3s;
}

.sub-subcategory-item a:hover {
    color: #007bff;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
    .body_content {
        padding-bottom: 150px;
    }
}

@media (max-width: 575.98px) {
    .body_content {
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
}

/* Small Devices (tablets, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .body_content {
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
    }
}

/* Medium Devices (desktops, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .body_content {
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
}

/* Large Devices (large desktops, 992px and up) */
@media (min-width: 992px) {
    .body_content {
        padding: 100px;
    }
}
</style>