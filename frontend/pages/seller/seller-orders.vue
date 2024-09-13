<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SellerLeftsidebar />
                </div>
                <div class="col-md-8">

                    <div class="top_filter">
                        <h4>Orders Overviews</h4>
                        <ul>
                            <li>
                                <button type="button " class="active">All</button>
                            </li>
                            <li>
                                <button type="button">Pending</button>
                            </li>
                            <li>
                                <button type="button">Ready To shiped</button>
                            </li>
                            <li>
                                <button type="button">Shiped</button>
                            </li>
                            <li>
                                <button type="button">Deliverd</button>
                            </li>
                            <li>
                                <button type="button">Cancel</button>
                            </li>
                            <li>
                                <button type="button">Return</button>
                            </li>
                            <li>
                                <button type="button">Failed To Delivery</button>
                            </li>
                            <li>
                                <button type="button">Refund Only</button>
                            </li>
                        </ul>
                    </div>
                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-8 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Order Id" v-model="orderId" @change="applyFilters">
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="button" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;" @click="applyFilters">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="loading-indicator" v-if="loading">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="main_profile">
                        <div class="user_details order_details_table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order ID</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ product.orderId }}</td>
                                        <td>{{ `${product.total}TK` }}</td>
                                        <td>{{ product.order_status }}</td>
                                        <td>
                                            <center>

                                                <span><button type="button" class="btn_edit_nxt" @click="orderDetails(product.orderId)"><i class="fa-solid fa-magnifying-glass-plus"></i></button></span>
                                            </center>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <!-- pagination -->
                            <center>
                                <button class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;" @click="loadMore" :disabled="loading">
                                    <span v-if="loading">Loading...</span>
                                    <span v-else>Load More...</span>
                                </button>
                            </center>
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
        SellerLeftsidebar,
    },
    head: {
        title: 'Orders',
    },
    data() {
        return {
            loading: false,
            searchCriteria: {
                productName: '', // Add other filter criteria as needed
            },
            notifmsg: '',
            products: [],
            errors: {},
            //
            currentPage: 1,
            totalPages: 1,
            orderId: null,
            productName: null,
            sku: null,

        }
    },
    async mounted() {
        await this.defaultLoading();
    },
    methods: {

        orderDetails(orderId) {
            this.$router.push({
                path: '/seller/order-details',
                query: {
                    orderId: orderId
                }
            })

        },

        async defaultLoading() {
            this.loading = true;
            try {
                const response = await this.fetchProducts();
                this.products = response.data.data;
                this.currentPage = response.data.current_page;
                this.totalPages = response.data.last_page;
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchProducts() {
            const params = {
                page: this.currentPage,
                orderId: this.orderId,
                productName: this.productName,
                sku: this.sku,
            };

            return this.$axios.get('/product/sellerOrderProductList', {
                params
            });
        },
        async loadMore() {
            if (this.currentPage < this.totalPages) {
                this.loading = true;
                try {
                    this.currentPage += 1;
                    const response = await this.fetchProducts();
                    this.products = [...this.products, ...response.data.data];
                } catch (error) {
                    console.error('Error fetching more data:', error);
                } finally {
                    this.loading = false;
                }
            }
        },
        applyFilters() {
            this.currentPage = 1; // Reset page when filters change
            this.defaultLoading();
        },
    },
    computed: {
        hasMorePages() {
            return this.currentPage < this.totalPages;
        },
    },

}
</script>

<style scoped>
.top_search_box {
    background: #fff;
    box-shadow: 0 0 20px #ededed;
    padding: 0px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
}

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
