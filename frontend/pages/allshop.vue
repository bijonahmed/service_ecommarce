<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->
        <section class="main_content">
            <div class="container">
                <div class="main_profile">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page_title">
                                <h4>All Shops</h4>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="shopContainer">
                                <!-- loop start here  -->
                                <div class="shopBox" v-for="sellerlist in paginatedSellerList" :key="sellerlist.id">
                                    <nuxt-link :to="`/business/${sellerlist.slug}`" class="shopImg">
                                        <img :src="sellerlist.businessLogo" alt="Shop Logo" class="img-fluid">
                                    </nuxt-link>
                                    <nuxt-link :to="`/business/${sellerlist.slug}`">
                                        <h6>{{ sellerlist.businessName }}</h6>
                                    </nuxt-link>
                                    <div class="rateReview">
                                        <div class="start_ratings">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <p>(100 reviews)</p>
                                        <p>1k Followers</p>
                                    </div>
                                    <nuxt-link :to="`/business/${sellerlist.slug}`" class="btn_primary">Visit
                                        Store</nuxt-link>
                                </div>
                                <!-- loop end here  -->
                                <!-- <div class="pagination">
                                <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
                                <span>{{ currentPage }}</span>
                                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                            </div> -->

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="pagination">
                                <ul>
                                    <li>
                                        <a href="#" type="button" @click="previousPage" :disabled="currentPage === 1">
                                            Previous </a>
                                    </li>
                                    <li>
                                        <a href="#" class="active"> {{ currentPage }}</a>
                                    </li>
                                    <li>
                                        <a href="#" type="button" @click="nextPage"
                                            :disabled="currentPage === totalPages">
                                            Next </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import $ from 'jquery';
import NavbarSecond from '~/components/NavbarSecond.vue';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import _ from 'lodash';

export default {
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
    },
    data() {
        return {
            sellerlist: [],
            currentPage: 1,
            pageSize: 20, // Set the data limit to 2 items per page
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.sellerlist.length / this.pageSize);
        },
        paginatedSellerList() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.sellerlist.slice(startIndex, endIndex);
        },
    },
    methods: {
        async fetchData() {
            try {
                const response = await this.$axios.get(`/unauthenticate/allsellerList`);
                this.sellerlist = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        editCustomer(id) {
            this.$router.push({
                path: `/edit/${id}`
            });
        }
    },
};
</script>