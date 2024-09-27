<template>
    <div class="top_bannerOne">
        <div class="row my-2">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mini_tab_hide sec_One">

                <div class="nav_menu">

                    <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <nav v-if="categories.length > 0">
                        <ul v-for="(category, index) in categories" :key="category.id">
                            <li :key="category.id" v-if="index < limit">
                                <a href="#" class="d-flex justify-content-between align-items-center"
                                    @click="redirectCategory(category.slug)">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-list" style="font-size: 10px;"></i>

                                        {{ category.name }}
                                    </div> <i class="fa-solid fa-angle-right"></i>
                                </a>
                                <div class="sub_menu">
                                    <div class="row" v-if="category.children && category.children.length > 0">
                                        <div class="col-4" v-for="childCategory in category.children"
                                            :key="childCategory.id">
                                            <h6><a href="#" @click="redirectCategory(childCategory.slug)"> {{ childCategory.name }}</a></h6>

                                            <ul v-if="childCategory.children && childCategory.children.length > 0">
                                                <li v-for="inSubCategory in childCategory.children"
                                                    :key="inSubCategory.id"><a href="#"
                                                        @click="redirectCategory(inSubCategory.slug)">{{ inSubCategory.name }}</a></li>

                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <Nuxt-link to="/category/all-categorys" class="d-flex justify-content-between">
                                    <div><img src="images/cat_svg/more-100.png" alt="">All Categories</div>
                                    <div><i class="fa-solid fa-angle-right"></i></div>
                                </Nuxt-link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
            <div class="col-xl-6 col-lg-9 col-md-12 col-sm-12 sec_One" v-if="sliders.length > 0">

                <div id="carouselExample" class="carousel_nav carousel w-100 height_100" data-bs-ride="carousel"
                    data-bs-interval="3000">
                    <div class="carousel-indicators">
                        <button v-for="(item, index) in sliders" :key="index" type="button"
                            data-bs-target="#carouselExample" :data-bs-slide-to="index"
                            :class="{ 'active': index === currentIndex }"></button>
                    </div>
                    <div class="carousel-inner height_100" v-if="sliders.length > 0">
                        <div class="carousel-item height_100" v-for="(item, index) in sliders" :key="item.id"
                            :class="{ active: index === 0 }">
                            <img class="d-block w-100 height_100" :src="item.images" :alt="'Slide ' + (index + 1)">
                        </div>

                    </div>
                    <button class="carousel-control-prev" data-bs-target="#carouselExample" type="button"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" data-bs-target="#carouselExample" type="button"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div class="col-lg-3 col-12  d-xl-block d-none">
                <div class="row" style="height: 49%; object-fit: cover;">
                    <div class="col-12 ">
                        <img :src="adsData1" class="img-fluid h-100" alt="">
                    </div>
                </div>
                <div class="row mt-2" style="height: 49%; object-fit: cover;">
                    <div class="col-12 ">
                        <img :src="adsData2" class="img-fluid h-100" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.top_bannerOne .sec_One {
    max-height: 380px;
}

.hi-50 {
    height: 49% !important;
    object-fit: cover;
}

.height_100 {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
}
</style>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            loading: true,
            limit: 12,
            categories: [],
            sliders: [],
            currentIndex: 0,
            adsData1: '',
            adsData2: '',
        };
        // Set the initial index
    },

    mounted() {

        this.slidersImg();
        this.fetchData();
        this.fetchAdsData();
    },
    methods: {
        handleCarouselSlide(event) {
            const carousel = event.target;
            if (carousel.classList.contains('carousel_nav')) {
                if (carousel.querySelector('.carousel-inner .carousel-item:last-child').classList.contains('active')) {
                    carousel.querySelector('.carousel-control-next').click();
                }
            }
        },
        redirectCategory(slug) {
            this.$router.push({
                path: '/category/category-grid',
                query: {
                    slug: slug
                }
            })
        },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            setTimeout(() => {
                this.loading = false;
                this.categories = response.data;
            }, 2000); // Adjust the time as needed
        },

        async slidersImg() {
            console.log("slider images...");
            const response = await this.$axios.get(`/unauthenticate/slidersImages`);
            this.sliders = response.data;
        },
        async fetchAdsData() {

            this.$axios.get('/unauthenticate/getAdsbanner').then(response => {
                this.adsData1 = response.data.image1;
                this.adsData2 = response.data.image2;
                // console.log(response.data.image1);
            }).catch(error => {
                this.error = error.message;
                console.error('Error fetching Top ads header banner data:', error);
            });

        },
    },
};
</script>

<style scoped></style>
