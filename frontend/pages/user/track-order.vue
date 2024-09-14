<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="main_content track_order_page">
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
                        <!-- {{ orders }} -->

                        <!-- <div class="col-md-">
                            <div class="main_profile p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <nuxt-link to='/user/user-orders' class="btn_edit"> <i
                                            class="fa-solid fa-arrow-left"></i>
                                    </nuxt-link>
                                    <h6 class="mb-0">Order Id: {{ orderData.orderId }}</h6>
                                    <nuxt-link :to='`/user/order-details?orderId=${orderData.orderId}`'
                                        class="btn_edit">
                                        <img src="/images/invoice.png" width="30px" alt=""
                                            class="img-fluid"></nuxt-link>
                                </div>
                            </div>
                        </div> -->


                        <div class="row">
                            <div class="col-md-8 ">
                                <div class="main_profile">
                                    <div class="d-flex justify-content-start">
                                        <nuxt-link to='/user/user-orders' class="btn_edit"> <i
                                                class="fa-solid fa-arrow-left"></i>
                                        </nuxt-link>
                                    </div>
                                    <div class="order-track">
                                        <div class="order-track-step active">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Order Confirmed</p>
                                                <span class="order-track-text-sub">{{ orderDate }}</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step" :class="{ active: trackStatus.packed == 1 }">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Packed</p>
                                                <span class="order-track-text-sub">Your order items packed and ready for
                                                    delivery.</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step" :class="{ active: trackStatus.dispatched == 1 }">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Order Dispatched</p>
                                                <span class="order-track-text-sub">Your shipment has been dispatched to
                                                    the
                                                    final hub.</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step"
                                            :class="{ active: trackStatus.outForDelivery == 1 }">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Out for delivery</p>
                                                <span class="order-track-text-sub">Your order is ready for
                                                    delivery</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step "
                                            v-if="trackStatus.canceled == 0 || trackStatus.canceled == ''"
                                            :class="{ active: trackStatus.deliverd == 1 }">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Order Delivered</p>
                                                <span class="order-track-text-sub">Your order has been delivered.</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step " v-if="trackStatus.canceled == 1">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot bg-danger"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat text-danger">Order Canceled</p>
                                                <span class="order-track-text-sub text-danger">Your order has been
                                                    Canceled.</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step " v-if="trackStatus.returned == 1">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot bg-danger"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat text-danger">Order Returned</p>
                                                <span class="order-track-text-sub text-danger">Your order has been
                                                    Returned.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <div class="countdown-timer">
                                        <div class="countdown-item">
                                        <span class="countdown-number">{{ days }}</span>
                                        <span class="countdown-label">Days</span>
                                        </div>
                                        <div class="countdown-separator">:</div>
                                        <div class="countdown-item">
                                        <span class="countdown-number">{{ hours }}</span>
                                        <span class="countdown-label">Hours</span>
                                        </div>
                                        <div class="countdown-separator">:</div>
                                        <div class="countdown-item">
                                        <span class="countdown-number">{{ minutes }}</span>
                                        <span class="countdown-label">Minutes</span>
                                        </div>
                                        <div class="countdown-separator">:</div>
                                        <div class="countdown-item">
                                        <span class="countdown-number">{{ seconds }}</span>
                                        <span class="countdown-label">Seconds</span>
                                        </div>
                                    </div>
                                </center>
                                <div class="main_profile">
                                    <!-- <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="table-responsiv">
                                                <table class="border">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Name:
                                                            </td>
                                                            <td>

                                                                {{ orderData.billing_name }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Email:
                                                            </td>
                                                            <td>
                                                                {{ orderData.billing_email }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone:</td>
                                                            <td>{{ orderData.billing_phone_number }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>{{ orderData.billing_address }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="table-responsiv">
                                                <table class="border">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Name:
                                                            </td>
                                                            <td>

                                                                {{ orderData.shipper_name }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Email:
                                                            </td>
                                                            <td>
                                                                {{ orderData.shipper_email }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone:</td>
                                                            <td>{{ orderData.shipper_phone_number }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>{{ orderData.shipper_address }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="">
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
                                            </tr>
                                            <tr v-for="(order, index) in products" :key="index" class="billing">
                                                <th>{{ index + 1 }}</th>
                                                <td style="padding-bottom: 10px;">{{ order.pro_name }}</td>
                                                <td>
                                                    <div align="center">{{ order.qty }}</div>
                                                </td>
                                                <td>
                                                    <div align="center">{{ order.last_price }}</div>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 ps-md-0">
                                <div class="col-md-">
                                    <div class="main_profile p-2">
                                        <h6 class="text-center m-0">Order Id: {{ orderData.orderId }}</h6>
                                    </div>

                                    <div class="main_profile ">
                                        <p style="font-size: 15px;"><b>Shipping Details</b></p>
                                        <p class="billing">{{ orderData.shipper_name }}</p>
                                        <p class="billing">{{ orderData.shipper_email }}</p>
                                        <p class="billing">{{ orderData.shipper_phone_number }}</p>
                                        <p class="billing">{{ orderData.shipper_address }}</p>
                                        <p class="billing">{{ orderData.shipper_city }}</p>
                                        <p class="billing">{{ orderData.shipper_country }}</p>
                                    </div>
                                    <div class="main_profile">
                                        <nuxt-link :to='`/user/order-details?orderId=${orderData.orderId}`'
                                            class="btn_edit p-0 d-flex justify-content-between">
                                            <h6 class="mb-0">View Order/invoice summery ></h6>
                                            <img src="/images/invoice.png" width="20px" alt="" class="img-fluid">
                                        </nuxt-link>
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
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            timer: null,
            timeLeft: 0,
            loading: false,
            devliveryDate: '', // Number of days
            orderDate: '',
            orderStatus: '',
            orderData: '',
            orders: [],
            errors: {},
            trackStatus: {
                packed: '',
                dispatched: '',
                outForDelivery: '',
                deliverd: '',
                canceled: '',
                returned: '',
            },
            products: [],
        };
    },
    mounted() {
        this.loadingOrders();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    computed: {
        totalQuantity() {
            return this.products.reduce((total, product) => total + product.qty, 0);
        },
        totalAmount() {
            return this.products.reduce((total, product) => total + product.last_price, 0);
        },
    },
    methods: {
        startCountdown() {
            console.log("Starting countdown with devliveryDate (days):", this.devliveryDate);
            if (this.devliveryDate) {
                // Calculate the target time based on the number of days
                const now = new Date().getTime();
                this.timeLeft = this.devliveryDate * 24 * 60 * 60 * 1000; // Convert days to milliseconds
                this.targetTime = now + this.timeLeft;

                this.timer = setInterval(this.calculateTimeLeft, 1000);
            }
        },
        calculateTimeLeft() {
            const now = new Date().getTime();
            this.timeLeft = this.targetTime - now;

            if (this.timeLeft > 0) {
                this.days = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
            } else {
                // Stop the countdown when it reaches 0
                clearInterval(this.timer);
                this.days = 0;
                this.hours = 0;
                this.minutes = 0;
                this.seconds = 0;
            }
        },
        async loadingOrders() {
            this.loading = true;
            const orderId = this.$route.query.orderId;
            try {
                const response = await this.$axios.get(`/order/orderDetails/${orderId}`);
                
                console.log("Order response:", response.data);
                
                this.orders = response.data.orderdata;
                this.orderStatus = response.data.orderrow;
                this.orderData = response.data.orderData;
                this.orderDate = response.data.create_at;
                this.products = response.data.products;
                this.devliveryDate = response.data.devliveryDate; // Now a number of days
                
                this.trackStatus.packed = response.data.packed_status;
                this.trackStatus.dispatched = response.data.dispatched_status;
                this.trackStatus.outForDelivery = response.data.outForDelivery_status;
                this.trackStatus.deliverd = response.data.delivered_status;
                this.trackStatus.canceled = response.data.cancel_status;
                this.trackStatus.returned = response.data.return_status;

                // Start the countdown after setting devliveryDate
                this.startCountdown();
            } catch (error) {
                console.error('Error fetching order details:', error);
            } finally {
                this.loading = false; // Hide loader after response
            }
        },
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    },
};

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

.track_order_page .main_profile {
    min-height: auto;
}
.countdown-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  background-color: #282c34;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.countdown-item {
  text-align: center;
}

.countdown-number {
  font-size: 2.5rem;
  font-weight: bold;
}

.countdown-label {
  display: block;
  font-size: 0.8rem;
  margin-top: 5px;
}

.countdown-separator {
  font-size: 2.5rem;
  padding: 0 10px;
}
</style>
