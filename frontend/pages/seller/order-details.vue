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

                    <div class="loading-indicator" v-if="loading">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="main_profile">
                        <div class="">

                            <div>
                                <div class="d-flex justify-content-between">
                                    <nuxt-link to='/seller/seller-orders' class="btn_edit"> <i class="fa-solid fa-arrow-left"></i> </nuxt-link>
                                    <!-- <button class="btn_cart" style="visibility: unset; max-width: 80px;">Update</button> -->
                                    <form @submit.prevent="updateStatus()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                        <input type="hidden" v-model="orderId" />
                                        <div class="input-group">
                                            <select name="orderStatus" v-model="selectedOrderStatus" class="form-control orderstatus">
                                                <option v-for="status in orderStatuses" :key="status.id" :value="status.id">{{ status.name }}</option>
                                            </select>
                                            <input type="submit" value="Update Order" class="btn_primary">
                                        </div>
                                    </form>
                                </div>
                                <hr>
                                <div class="text-center" style="text-transform: uppercase;">Orders Details </div>
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
                                    <br />
                                    <hr />
                                </div>
                            </div>
                            <div class="row my-2">

                                <div class="col-4">
                                    <!-- <form action="">
                                            <div class="input-group">
                                                <select name="" id="" class="form-control">
                                                    <option value="">Order Placed</option>
                                                    <option value="">Order Approve</option>
                                                    <option value="">Order Delivered</option>
                                                    <option value="">Order Canceled</option>
                                                </select>
                                                <input type="submit" value="Update Order" class="btn_primary">
                                            </div>
                                        </form> -->
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
                                <tr v-for="(order, index) in orders" :key="index">
                                    <th>{{ index + 1 }}</th>
                                    <td>{{ order.product_name }}</td>
                                    <td>
                                        <div align="center">{{ order.quantity }}</div>
                                    </td>
                                    <td>
                                        <div align="center">{{ order.price }}</div>
                                    </td>
                                    <td>
                                        <div align="center">{{ order.total }}</div>
                                    </td>
                                </tr>
                                <!-- <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        <div align="right">Total</div>
                                    </td>
                                    <td>
                                        <div align="center">{{ totalQuantity }}</div>
                                    </td>
                                    <td>
                                        <div align="center">{{ totalAmount }}</div>
                                    </td>
                                    <td>
                                        <div align="center">{{ totalAmount }}</div>
                                    </td>
                                </tr> -->
                            </table>
                            <div class="text-end">
                                <ul class="ms-auto">
                                    <li class="d-flex justify-content-end">
                                        <strong>Total Quantity:</strong>
                                        <strong style="min-width: 100px;">{{ totalQuantity }}</strong>
                                    </li>
                                    <li class="d-flex justify-content-end">
                                        <strong>Total Ammount:</strong>
                                        <strong style="min-width: 100px;">{{ totalAmount }}</strong>
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
        title: 'Orders Details',
    },
    data() {
        return {
            loading: false,
            orderId: '',
            selectedOrderStatus: '',
            orderStatuses: [],
            orderstatus: '',
            orderData: '',
            orders: [],
            errors: {},
        }
    },
    mounted() {
        const orderId = this.$route.query.orderId;
        console.log("order I D: " + orderId);
        this.orderId = orderId;
        this.loadingOrders();

    },
    computed: {
        totalQuantity() {
            // Calculate total quantity
            return this.orders.reduce((total, order) => total + order.quantity, 0);
        },
        totalAmount() {
            // Calculate total amount
            return this.orders.reduce((total, order) => total + order.total, 0);
        },

    },
    methods: {

        async updateStatus() {

            const formData = new FormData();
            formData.append('orderId', this.orderId);
            formData.append('selectedOrderStatus', this.selectedOrderStatus);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/order/updateOrderStatus',
                formData, {
                    headers
                }).then((res) => {
                //   $('#formrest')[0].reset();
                this.$router.push('/seller/seller-orders');
                return false;
                //this.$router.push('/ecommarce/product-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },
        async loadingOrders() {
            this.loading = true;
            const orderId = this.$route.query.orderId;
            await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
                    console.log("------------" + response.data.order_status);
                    this.orders = response.data.orderdata;
                    this.orderStatuses = response.data.OrderStatus;
                    this.selectedOrderStatus = response.data.order_status;
                    this.orderData = response.data.orderData;
                    //$(".orderstatus").val(response.data.order_status);
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

.billing {
    font-size: 13px;
}
</style>
