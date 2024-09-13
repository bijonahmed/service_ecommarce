
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
                            <div class="shopContainer d-block">
                                <div class="order-complete" bis_skin_checked="1">
                                    <div class="order-complete__message" bis_skin_checked="1">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="40" cy="40" r="40" fill="#B9A16B"></circle>
                                            <path
                                                d="M52.9743 35.7612C52.9743 35.3426 52.8069 34.9241 52.5056 34.6228L50.2288 32.346C49.9275 32.0446 49.5089 31.8772 49.0904 31.8772C48.6719 31.8772 48.2533 32.0446 47.952 32.346L36.9699 43.3449L32.048 38.4062C31.7467 38.1049 31.3281 37.9375 30.9096 37.9375C30.4911 37.9375 30.0725 38.1049 29.7712 38.4062L27.4944 40.683C27.1931 40.9844 27.0257 41.4029 27.0257 41.8214C27.0257 42.24 27.1931 42.6585 27.4944 42.9598L33.5547 49.0201L35.8315 51.2969C36.1328 51.5982 36.5513 51.7656 36.9699 51.7656C37.3884 51.7656 37.8069 51.5982 38.1083 51.2969L40.385 49.0201L52.5056 36.8996C52.8069 36.5982 52.9743 36.1797 52.9743 35.7612Z"
                                                fill="white"></path>
                                        </svg>
                                        <h3>Your order is completed!</h3>
                                        <p>Thank you. Your order has been received.</p>
                                    </div>
                                    <div class="order-info" bis_skin_checked="1">
                                        <div class="order-info__item" bis_skin_checked="1">
                                            <label>Order Number</label>
                                            <span>13119</span>
                                        </div>
                                        <div class="order-info__item" bis_skin_checked="1">
                                            <label>Date</label>
                                            <span>27/10/2023</span>
                                        </div>
                                        <div class="order-info__item" bis_skin_checked="1">
                                            <label>Total</label>
                                            <span>$81.40</span>
                                        </div>
                                        <div class="order-info__item" bis_skin_checked="1">
                                            <label>Paymetn Method</label>
                                            <span>Direct Bank Transfer</span>
                                        </div>
                                    </div>
                                    <div class="checkout__totals-wrapper" bis_skin_checked="1">
                                        <div class="checkout__totals" bis_skin_checked="1">
                                            <h3>Order Details</h3>
                                            <table class="checkout-cart-items">
                                                <thead>
                                                    <tr>
                                                        <th>PRODUCT</th>
                                                        <th>SUBTOTAL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Zessi Dresses x 2
                                                        </td>
                                                        <td>
                                                            $32.50
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Kirby T-Shirt
                                                        </td>
                                                        <td>
                                                            $29.90
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="checkout-totals">
                                                <tbody>
                                                    <tr>
                                                        <th>SUBTOTAL</th>
                                                        <td>$62.40</td>
                                                    </tr>
                                                    <tr>
                                                        <th>SHIPPING</th>
                                                        <td>Free shipping</td>
                                                    </tr>
                                                    <tr>
                                                        <th>VAT</th>
                                                        <td>$19</td>
                                                    </tr>
                                                    <tr>
                                                        <th>TOTAL</th>
                                                        <td>$81.40</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
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