<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0">
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="main_profile">
                            
                            <div class="recent_orders">
                                <h4>Orders </h4>
                                <!-- {{ orders }} -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th class="text-center">Place On </th>
                                            <th class="text-center">Item </th>
                                            <th class="text-center">Quantity </th>
                                            <th class="text-center">Total </th>
                                            <th class="text-center">Status </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="order in orders" :key="order.id">
                                            <!-- {{ order.name }} -->
                                            <td>{{ order.orderId }}</td>
                                            <td class="text-center">{{ order.placeOn }}</td>
                                            <td class="order_item text-center">
                                                <nuxt-link :to="`../product-details/${order.pro_slug}`">
                                                    <img :src="order.pro_img" class="img-fluid"
                                                        :alt="order.pro_name">
                                                </nuxt-link>
                                            </td>
                                            <td class="text-center">{{ order.qty }}</td>
                                            <td class="text-center">{{ order.total }}</td>
                                            <td class="text-center">
                                                <p v-if="order.name == 'Cancelled or Returned'"
                                                    class="badge bg-danger-light" style="font-size: 10px;"> {{
                            order.name }}</p>
                                                <p v-else-if="order.name == 'Payment Processing'"
                                                    class="badge bg-success-light" style="font-size: 10px;"> {{
                            order.name }}</p>
                                                <p v-else-if="order.name == 'Order Confirmed'"
                                                    class="badge bg-success-light" style="font-size: 10px;"> {{
                            order.name }}</p>
                                                <p v-else-if="order.name == 'Item Shipped'"
                                                    class="badge bg-success-light" style="font-size: 10px;"> {{
                            order.name }}</p>
                                                <p v-else-if="order.name == 'In Transit'" class="badge bg-success-light"
                                                    style="font-size: 10px;"> {{ order.name }}</p>
                                                <p v-else-if="order.name == 'Out for Delivery'"
                                                    class="badge bg-danger-light" style="font-size: 10px;"> {{
                            order.name }}</p>

                                                <p v-else-if="order.name == 'Delivered'" class="badge bg-success-light"
                                                    style="font-size: 10px;"> {{ order.name }}</p>
                                                <p v-else-if="order.name == 'Order Completed'"
                                                    class="badge bg-success-light" style="font-size: 10px;"> {{
                            order.name }}</p>
                                                <p v-else-if="order.name == 'Order Placed'"
                                                    class="badge bg-success-light" style="font-size: 10px;"> {{
                                                    order.name }}</p>
                                            </td>
                                            <td>
                                                <button class="btn btn-warning bg-history-light w-100 "
                                                    style="padding: 1px !important;"
                                                    @click="trackOrder(order.orderId)"><i
                                                        class="fa-regular fa-eye"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row d-none">
                                    <div class="col-12">
                                        <div class="pagination">
                                            <ul>
                                                <li>
                                                    <a href="#"> prv </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="active"> 1 </a>
                                                </li>
                                                <li>
                                                    <a href="#"> 2 </a>
                                                </li>
                                                <li>
                                                    <a href="#"> 3 </a>
                                                </li>
                                                <li>
                                                    <a href="#"> next </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
import userSidebar from '~/components/userSidebar.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';

export default {

    middleware: 'IsUser',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'My Orders',
    },
    data() {
        return {
            loading: false,
            orders: [],
            errors: {},
        }
    },
    mounted() {
        this.loadingOrders();
        this.setupEventHandlers();
    },
    methods: {
        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".product_slider").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
                $(".product_slider").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
                $(".product_slider").css("z-index", "1");
            })
        },

        trackOrder(orderId) {

            this.$router.push({
                path: '/user/track-order',
                query: {
                    orderId: orderId
                }
            })

        },
        async loadingOrders() {
            this.loading = true;
            await this.$axios.get(`/order/allOrders`).then(response => {
                this.orders = response.data.orderdata;
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
