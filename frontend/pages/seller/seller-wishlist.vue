<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SellerLeftsidebar />

                </div>
                <div class="col-md-8">
                    <div class="loading-indicator" v-if="loading">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="cart">
                        <div class="side_title">
                            <h5>Wishlist</h5>

                        </div>
                        <div class="card_porduct">
                            <ul>
                                <li v-for="product in products" :key="product.wishid">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="img_title">
                                                <img :src="product.thumnail_img" class="img-fluid" alt="">
                                                <div>
                                                    <h1>
                                                        <nuxt-link :to="`/product-details/${product.slug}`">{{ product.product_name }}</nuxt-link>
                                                    </h1>
                                                    <p>Seller: Ecommerce</p>
                                                    <span>In stock </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-4">
                                            <div class="cart_price">
                                                <strong>{{ product.price }}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div><Button class="btn_cart" style="visibility: unset;" @click="remove(product.wishid)"><i class="fa-solid fa-trash-can"></i>Remove</Button></div>
                                        <div>
                                            <nuxt-link :to="`/product-details/${product.slug}`"><button class="btn_cart" type="button" style="visibility: unset;"><i class="fa-solid fa-cart-shopping"></i> Details </button></nuxt-link>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- END Main Section here -->
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import SellerLeftsidebar from '~/pages/seller/seller-leftsidebar.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';

export default {
    middleware: 'IsSeller',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        SellerLeftsidebar

    },
    head: {
        title: 'My Wishlist',
    },
    data() {
        return {
            product: [],
            cart: [],
            loading: false,
            products: [],
            errors: {},
        }
    },
    mounted() {

        this.loadingWishList();
    },
    methods: {

        async remove(productid) {
            this.loading = true;
            await this.$axios.get(`/order/removeWishList/${productid}`).then(response => {
                    this.loadingWishList();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "WishList item deleted successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        async loadingWishList() {
            this.loading = true;
            await this.$axios.get(`/order/allWishList`).then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>
