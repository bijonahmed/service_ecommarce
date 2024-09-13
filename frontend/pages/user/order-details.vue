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
                    <div class="col-md-9 px-md-0">
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="main_profile">
                            
                            <div class="">

                                <div>
                                    <div class="d-flex justify-content-start">
                                        <nuxt-link :to='`/user/track-order?orderId=${orderData.orderId}`' class="btn_edit"> <i
                                                class="fa-solid fa-arrow-left"></i> </nuxt-link>
                                    </div>
                                    

                                    <div class="text-center" style="text-transform: uppercase;">Invoice </div>
                                    <br />
                                    <div class="row">

                                        <div class="col-md-6">
                                            <p style="font-size: 15px;"><b>Billing Details</b></p>
                                            <p class="billing">{{ orderData.billing_name }}</p>
                                            <p class="billing">{{ orderData.billing_email }}</p>
                                            <p class="billing">{{ orderData.billing_phone_number }}</p>
                                            <p class="billing">{{ orderData.billing_address }}</p>
                                            <p class="billing">{{ orderData.billing_city }}</p>
                                            <p class="billing">{{ orderData.billing_country }}</p>

                                        </div>
                                        <div class="col-md-6 text-right">
                                            <div align="right">
                                                <p style="font-size: 15px;"><b>Shipping Details</b></p>
                                                <p class="billing">{{ orderData.shipper_name }}</p>
                                                <p class="billing">{{ orderData.shipper_email }}</p>
                                                <p class="billing">{{ orderData.shipper_phone_number }}</p>
                                                <p class="billing">{{ orderData.shipper_address }}</p>
                                                <p class="billing">{{ orderData.shipper_city }}</p>
                                                <p class="billing">{{ orderData.shipper_country }}</p>

                                            </div>
                                        </div>
                                        <hr class="my-2" />
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-md-12 ">
                                            <div class="d-flex justify-content-between">
                                                <strong>Order Id: #{{ orderData.orderId }}</strong>
                                                <strong>Order status:{{ orderstatus }}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table width="100%" border="0" class="table table-bordered hover">
                                    <tr>
                                        <th width="30px">#</th>
                                        <th width="916">Item Description </th>
                                        <th width="63">
                                            <div align="center">Qty</div>
                                        </th>
                                        <th width="80">
                                            <div align="center">Price</div>
                                        </th>
                                        <th width="80">
                                            <div align="center">Total</div>
                                        </th>
                                    </tr>
                                    <tr v-for="(order, index) in products" :key="index" class="billing">
                                        <th>{{ index + 1 }}</th>
                                        <td style="padding-bottom: 10px;">{{ order.pro_name }}</td>
                                        <td>
                                            <div align="center">{{ order.qty }}</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ order.last_price.toFixed(2) }}</div>
                                        </td>
                                        <td>
                                            <div align="center">{{ (order.qty*order.last_price).toFixed(2) }}</div>
                                        </td>
                                    </tr>
                                </table>
                                <div class="text-end">
                                    <ul class="ms-auto">
                                        <li class="d-flex justify-content-end">
                                            <strong>Total Quantity:</strong>
                                            <strong style="min-width: 100px;">{{ totalQuantity }}</strong>
                                        </li>
                                        <li class="d-flex justify-content-end">
                                            <strong>Total Ammount:</strong>
                                            <strong style="min-width: 100px;">{{ totalAmount.toFixed(2) }}</strong>
                                        </li>
                                    </ul>
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
            orderstatus: '',
            orderData: '',
            orders: [],
            errors: {},
            products: [],
        }
    },
    mounted() {
        const orderId = this.$route.query.orderId;
        console.log("order I D: " + orderId);
        this.loadingOrders();

    },
    computed: {
        totalQuantity() {
            return this.products.reduce((acc, product) => acc + product.qty, 0);
        },
        totalAmount() {
            return this.products.reduce((acc, product) => acc + product.last_price * product.qty, 0)
        },
    },
    methods: {
        async loadingOrders() {
            this.loading = true;
            const orderId = this.$route.query.orderId;
            await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
                this.orders = response.data.orderdata;
                this.orderstatus = response.data.orderrow;
                this.orderData = response.data.orderData;
                this.products = response.data.products;
            })
            .catch(error => {
                // Handle error
            })
            .finally(() => {
                this.loading = false; // Hide loader after response
            });

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

.billing {
    font-size: 13px;
}
</style>
