<template>
    <div>
        <!-- Start -->
        <div class="body_content">
            <!-- Home Banner Style V1 -->
            <section class="hero-home2 pb100-xs">
                <div class="container">
                    <div class="row mb60 mb0-xl">
                        <div class="col-xl-7" style="margin-bottom: 181px !important;">
                            <div class="pr30 pr0-lg mb30-md position-relative">
                                <h1 class="animate-up-1 mb25 text-white">
                                    Find the perfect freelance
                                    <br class="d-none d-xl-block" />services for your business
                                </h1>
                                <p class="text-white animate-up-2">
                                    Work with talented people at the most affordable price to
                                    get the most <br class="d-none d-lg-block" />
                                    out of your time and cost
                                </p>
                                <div
                                    class="advance-search-tab bgc-white p10 bdrs4-sm bdrs60 banner-btn position-relative zi1 animate-up-3 mt30">
                                    <form class="form-search position-relative">
                                        <div class="row">
                                            <div class="col-md-5 col-lg-6 col-xl-6">
                                                <div class="advance-search-field mb10-sm">
                                                    <div class="box-search">
                                                        <span class="icon far fa-magnifying-glass"></span>
                                                        <input class="form-control" type="text" name="search"
                                                            v-model="filter_name"
                                                            placeholder="What are you looking for?"
                                                            @keydown.enter.prevent />
                                                        <div class="search-suggestions">
                                                            <h6 class="fz14 ml30 mt25 mb-3">
                                                                Popular Search
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-lg-4 col-xl-3">
                                                <div class="bselect-style1 bdrl1 bdrn-sm">
                                                    <!-- Optional content -->
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-lg-2 col-xl-3">
                                                <div class="text-center text-xl-start">
                                                    <button class="ud-btn btn-thm w-100 bdrs60" type="button"
                                                        @click="fiterbySearch">
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                                <div class="row mt20 animate-up-4">
                                    <div class="col-xl-9">
                                        <div class="row justify-content-between">
                                            <div class="col-6 col-sm-3 funfact_one at-home2-hero">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex">
                                                        <li>
                                                            <div class="timer">1</div>
                                                        </li>
                                                        <li><span>K</span></li>
                                                    </ul>
                                                    <p class="text-white mb-0">Total Freelancer</p>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-3 funfact_one at-home2-hero">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex">
                                                        <li>
                                                            <div class="timer">10</div>
                                                        </li>
                                                        <li><span>K</span></li>
                                                    </ul>
                                                    <p class="text-white mb-0">Positive Review</p>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-3 funfact_one at-home2-hero">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex">
                                                        <li>
                                                            <div class="timer">2</div>
                                                        </li>
                                                        <li><span>K</span></li>
                                                    </ul>
                                                    <p class="text-white mb-0">Order recieved</p>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-3 funfact_one at-home2-hero pe-0">
                                                <div class="details">
                                                    <ul class="ps-0 mb-0 d-flex">
                                                        <li>
                                                            <div class="timer">4</div>
                                                        </li>
                                                        <li><span>K</span></li>
                                                    </ul>
                                                    <p class="text-white mb-0">Projects Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 d-none d-xl-block position-relative">
                            <img src="/images/about/about-1.png" alt="" class="animate-up-1 main-img-home2" />
                            <div class="home2-hero-content position-relative">
                                <div
                                    class="iconbox-small1 d-none d-xl-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1">
                                    <span class="icon flaticon-review"></span>
                                    <div class="details pl20">
                                        <h6 class="mb-1">Proof of quality</h6>

                                    </div>
                                </div>
                                <div
                                    class="iconbox-small2 d-none d-xl-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                                    <span class="icon flaticon-review"></span>
                                    <div class="details pl20">
                                        <h6 class="mb-1">Safe and secure</h6>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Need something -->
            <section class="our-features" style="padding: 10px 0; position: relative;">
                <div class="container wow fadeInUp">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="main-title">
                                <h2>Need something done?</h2>
                                <p class="text">
                                    Most viewed and all-time top-selling services
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="iconbox-style1 at-home5 p-0">
                                <div class="icon before-none">
                                    <span class="flaticon-cv"></span>
                                </div>
                                <div class="details">
                                    <h4 class="title mt10 mb-3">Post a job</h4>
                                    <!-- <p class="text">
                                        It’s free and easy to post a job. Simply fill
                                        <br class="d-none d-xxl-block" />
                                        in a title, description.
                                    </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="iconbox-style1 at-home5 p-0">
                                <div class="icon before-none">
                                    <span class="flaticon-web-design"></span>
                                </div>
                                <div class="details">
                                    <h4 class="title mt10 mb-3">Choose freelancers</h4>
                                    <!-- <p class="text">
                                        It’s free and easy to post a job. Simply fill
                                        <br class="d-none d-xxl-block" />
                                        in a title, description.
                                    </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="iconbox-style1 at-home5 p-0">
                                <div class="icon before-none">
                                    <span class="flaticon-secure"></span>
                                </div>
                                <div class="details">
                                    <h4 class="title mt10 mb-3">Pay safely</h4>
                                    <!-- <p class="text">
                                        It’s free and easy to post a job. Simply fill
                                        <br class="d-none d-xxl-block" />
                                        in a title, description.
                                    </p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="iconbox-style1 at-home5 p-0">
                                <div class="icon before-none">
                                    <span class="flaticon-customer-service"></span>
                                </div>
                                <div class="details">
                                    <h4 class="title mt10 mb-3">We’re here to help</h4>
                                    <!-- <p class="text">
                                        It’s free and easy to post a job. Simply fill
                                        <br class="d-none d-xxl-block" />
                                        in a title, description.
                                    </p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Popular Services -->
            <!-- Browse talent by category -->

            <section class="mt-50">
                <div class="container">
                    <div class="row align-items-center wow fadeInUp" data-wow-delay="300ms">
                        <div class="col-lg-9">
                            <div class="main-title2">
                                <h2 class="title"> <nuxt-link class="ud-btn2" to="/all-category">Browse All Categories<i
                                            class="fal fa-arrow-right-long"></i></nuxt-link></h2>
                            </div>
                        </div>

                    </div>

                    <!-- <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <Loader />
                    </div> -->


                    <center><button class="btn btn-primary" type="button" disabled v-if="loading">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button></center>

                    <div class="row">
                        <div v-for="(category, index) in categoryData" :key="index"
                            class="col-6 col-md-4 col-lg-3 mb-4">
                            <div class="category-item">
                                <nuxt-link :to="`/category/${category.slug}`" class="category-link">
                                    <span class="category-index">{{ index + 1 }}. </span>
                                    <span class="category-name">{{ category.name }}</span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <!-- CTA Banner -->

            <section class="cta-banner-about2 before-none at-home2 position-relative py-0">
                <div class="container position-relative">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-xl-5 mb100-md">
                            <div class="mb30">
                                <h5 class="text-thm">For clients</h5>
                                <h2 class="title">Find talent your way</h2>
                            </div>
                            <p class="text">
                                Work with the largest network of independent professionals
                                and
                                <br class="d-none d-lg-block" />
                                get things done—from quick turnarounds to big
                                transformations.
                            </p>
                            <!-- <nuxt-link class="ud-btn btn-thm bdrs90 default-box-shadow2 mt15 mb30-sm"
                                to="/support">Contact Us<i class="fal fa-arrow-right-long"></i></nuxt-link> -->

                                <nuxt-link class="ud-btn btn-thm bdrs90 default-box-shadow2 mt15 mb30-sm"
                                to="/help-and-support">Contact Us<i class="fal fa-arrow-right-long"></i></nuxt-link>


                        </div>
                        <div class="col-lg-5 col-xl-4 offset-xl-1 position-relative">
                            <div class="listbox-style1 px30 py-5 bdrs16 bgc-thm2 mt30-md position-relative">
                                <div class="list-style1">
                                    <ul class="mb-0">
                                        <li class="text-white fw500">
                                            <i class="far fa-check dark-color bgc-white"></i>The
                                            best for every budget
                                        </li>
                                        <li class="text-white fw500">
                                            <i class="far fa-check dark-color bgc-white"></i>Quality work done quickly
                                        </li>
                                        <li class="text-white fw500">
                                            <i class="far fa-check dark-color bgc-white"></i>Protected payments, every
                                            time
                                        </li>
                                        <li class="text-white fw500 mb-0">
                                            <i class="far fa-check dark-color bgc-white"></i>24/7
                                            support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="home6-cta-img" src="/about-17.png" alt="N/A" />

            </section>
            <Footer />
        </div>
        <!-- END -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const items = ref([
    { image: '/images/listings/category-1.jpg', title: 'Image 1' },
    { image: '/images/listings/category-2.jpg', title: 'Image 2' },
    { image: '/images/listings/category-3.jpg', title: 'Image 3' },
    { image: '/images/listings/category-4.jpg', title: 'Image 4' },
    { image: '/images/listings/category-5.jpg', title: 'Image 5' },
    { image: '/images/listings/category-1.jpg', title: 'Image 6' },
    { image: '/images/listings/category-2.jpg', title: 'Image 7' },

]);

const categoryData = ref([]);
const filter_name = ref('');

const limitedCategories = computed(() => {
    return categoryData.value.slice(-500); // Get the last 20 categories
});

const loading = ref(false);
const fetchCatData = async () => {
    try {
        loading.value = true;
        const response = await axios.get("/unauthenticate/allActiveCategory");
        categoryData.value = response.data;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
};

const fiterbySearch = () => {
    const slug = filter_name.value;
    router.push({
        path: '/filter/search',
        query: { slug }
    });
}

onMounted(() => {
    fetchCatData();
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 5, // Number of items to show
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
    });
});
</script>

<style scoped>
.category-item {
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: left;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-item:hover {
    transform: translateY(-5px);
}

.category-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    color: #333;
}

.category-index {
    margin-right: 8px;
    font-weight: bold;
    color: #007bff;
    /* Adjust color if needed */
}

.category-name {
    color: #333;
    font-size: 16px;
}

@media (max-width: 768px) {
    .col-md-4 {
        flex: 0 0 50%;
        /* Adjust to 2 columns on smaller screens */
    }
}

@media (max-width: 576px) {

    .col-md-4,
    .col-lg-3 {
        flex: 0 0 100%;
        /* Stack in a single column on extra-small screens */
    }
}

.owl-carousel .item {
    height: 200px;
    /* Set height as needed */
    color: white;
    font-size: 20px;
    border-radius: 5px;
    /* Adjust as needed for border radius */
    padding: 20px;
    /* Adjust padding as needed */
    justify-content: center;
    /* Center horizontally */

}

.cta-banner-about2.at-home2 {
    height: 520px;
}

.iconbox-style1 {
    border-radius: 12px;
    border: 1px solid #ddd;
    /* Change this to your desired border color */
    overflow: hidden;
    padding: 20px !important;
    text-align: center;
    transition: transform 0.3s;
}

.iconbox-style1:hover {
    transform: scale(1.05);
}

.text {
    font-size: 14px;
    color: #777;
}

.title {
    font-size: 18px;
    font-weight: bold;
}

.iconbox-style1 {
    background-color: #ffffff;
    border-radius: 12px;
    border: 1px solid #eaeaea;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.iconbox-style1:hover {
    transform: translateY(-5px);
    /* Slight lift on hover */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    /* Increase shadow on hover */
}

.details .text {
    font-size: 14px;
    /* Font size for skills count */
    color: #666;
    /* Dark gray text */
}

.details .title {
    font-size: 18px;
    /* Font size for category title */
    color: #333;
    /* Darker gray for title */
    font-weight: bold;
    /* Bold text */
    margin: 0;
    /* Remove default margin */
}
</style>