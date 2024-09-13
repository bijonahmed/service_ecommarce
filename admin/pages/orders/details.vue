<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item">
                                    <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                                </li>
                                <li class="breadcrumb-item" aria-current="page">
                                    <router-link to="/orders/order-list">Orders</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Order details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!--end breadcrumb-->

                <!--end row-->
                <div class="row">
                    <div class="col-xl-12 mx-auto">
                        <div class="card border-top border-0 border-4 border-info">
                            <div class="card-body">
                                <div class="border p-4 rounded">

                                    <div class="row">

                                        <div class="col">
                                            <h4>Orders Details(Order id: {{ orderid }}) </h4>
                                            Customer Name: {{ customername }}, Customer Email: {{ customeremail }}
                                        </div>

                                        <div class="col">
                                            <strong style="color:green; text-align: right;">
                                                <h4>Order Status: {{ orderstatus }}</h4>
                                            </strong>
                                        </div>

                                    </div>

                                    <table width="100%" border="0" class="table table-bordered hover">
                                        <tr>
                                            <td width="22">#</td>
                                            <td>Images</td>
                                            <td width="916">Item Description </td>
                                            <td width="63">
                                                <div align="center">Qty</div>
                                            </td>
                                            <td width="80">
                                                <div align="center">Price</div>
                                            </td>
                                            <td width="80">
                                                <div align="center">Total</div>
                                            </td>
                                        </tr>
                                        <tr v-for="(order, index) in orders" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>
                                                <img :src="order.thumbnail_img" alt="Thumbnail Image"
                                                    style="height:50px;width:50px;" />
                                            </td>
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
                                        <tr>
                                            <td>&nbsp;</td>
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
                                        </tr>
                                    </table>
                                    <hr />
                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                        enctype="multipart/form-data">
                                        <div class="row mb-3">
                                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">Order
                                                Status</label>
                                            <div class="col-sm-9">
                                                <select name="status" v-model="insertdata.orderstatus"
                                                    class="form-select orderstatus">
                                                    <option v-for="(option, index) in order_status" :key="index"
                                                        :value="option.id">
                                                        {{ option.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <label class="col-sm-3 col-form-label"></label>
                                            <div class="col-sm-9">
                                                <button type="submit" class="btn btn-success px-5 w-100"><i
                                                        class="bx bx-check-circle mr-1"></i> Submit</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end row-->
                <!-- ========{{ordersData}} -->
                <div class="card">
                    <div class="card-body">
                        <div class="container mt-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Add Tracking Event</h5>
                                    <form id="trackingForm" @submit.prevent="adddTrackingStatus()">
                                        <div class="mb-3">
                                            <label for="orderId" hidden class="form-label">Order ID</label>
                                            <input type="text" disabled class="form-control" v-model="orderid" name="orderId"
                                                required>
                                        </div>
                                        <!-- <div class="mb-3 d-none">
                                            <label for="eventDescription" class="form-label">Event Description</label>
                                            <input type="text" class="form-control" v-model="tracking.description" id="eventDescription"
                                                name="eventDescription" required>
                                        </div> -->
                                        <div class="mb-3">
                                            <label for="eventStatus" class="form-label">Event Status</label>
                                            <div class="form-group">
                                                <input type="checkbox" v-model="trackStatus.packed" :checked="trackStatus.packed==1" id="packed">
                                                <label for="packed">Packed</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="checkbox" v-model="trackStatus.dispatched" :checked="trackStatus.dispatched==1" id="Dispatched">
                                                <label for="Dispatched">Dispatched</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="checkbox"  v-model="trackStatus.outForDelivery" :checked="trackStatus.outForDelivery==1"  id="Out">
                                                <label for="Out">Out for delivery</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="checkbox"  :disabled="trackStatus.returned == 1  || trackStatus.canceled ==1" v-model="trackStatus.deliverd"  :checked="trackStatus.deliverd==1"  id="Delivered">
                                                <label for="Delivered">Delivered</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="checkbox" :disabled="trackStatus.deliverd == 1  || trackStatus.returned ==1" v-model="trackStatus.canceled" :checked="trackStatus.canceled==1"  id="Canceled">
                                                <label for="Canceled">Canceled</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="checkbox" :disabled="trackStatus.deliverd == 1 || trackStatus.canceled ==1" v-model="trackStatus.returned" :checked="trackStatus.returned==1"  id="Return">
                                                <label for="Return">Return</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn bg-success-light">Submit</button>
                                    </form>
                                </div>
                                <div class="col-md-6">
                                    <h5>Tracking Events</h5>
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
                                        <div class="order-track-step"  :class="{ active: trackStatus.packed == 1 }">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Packed</p>
                                                <span class="order-track-text-sub">Your order items packed and ready for delivery.</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step"  :class="{ active: trackStatus.dispatched == 1 }">
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
                                        <div class="order-track-step" :class="{ active: trackStatus.outForDelivery == 1 }">
                                            <div class="order-track-status">
                                                <span class="order-track-status-dot"></span>
                                                <span class="order-track-status-line"></span>
                                            </div>
                                            <div class="order-track-text">
                                                <p class="order-track-text-stat">Out for delivery</p>
                                                <span class="order-track-text-sub">Your order is ready for delivery</span>
                                            </div>
                                        </div>
                                        <div class="order-track-step " v-if="trackStatus.canceled == 0 || trackStatus.canceled == '' " :class="{ active: trackStatus.deliverd == 1 }">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>

<script>
export default {

    data() {
        return {
            orderstatus: '',
            orderid: '',
            customername: '',
            customeremail: '',
            insertdata: {
                orderId: this.$route.query.orderId,
                orderstatus: '',
            },
            tracking: {
                status: '',
                description: '',
            },
            orders: [],
            order_status: [],
            notifmsg: '',
            errors: {},
            orderDate: '',
            trackStatus:{
                packed: '',
                dispatched: '',
                outForDelivery: '',
                deliverd: '',
                canceled: '',
                returned: '',
            },
            orderTruckDate: '',
            ordersData: '',
        }
    },
    async mounted() {
        this.defaultLoading();
        // this.getTrackstatus();
    },
    computed: {
        pageTitle() {
            return this.orderid ? 'Order Details ' + this.orderid : 'Order Details';
        },
        totalQuantity() {
            // Calculate total quantity
            return this.orders.reduce((total, order) => total + order.quantity, 0);
        },
        totalAmount() {
            // Calculate total amount
            return this.orders.reduce((total, order) => total + order.total, 0);
        },
    },
    head() {
        return {
            title: this.pageTitle
        };
    },
    methods: {
        adddTrackingStatus() {
            const formData = new FormData();
            formData.append('packed', this.trackStatus.packed);
            formData.append('dispatched', this.trackStatus.dispatched);
            formData.append('outForDelivery', this.trackStatus.outForDelivery);
            formData.append('deliverd', this.trackStatus.deliverd);
            formData.append('canceled', this.trackStatus.canceled);
            formData.append('returned', this.trackStatus.returned);
            

            formData.append('order_id', this.orderid);
            // formData.append('status', this.tracking.status);
            // formData.append('description', this.tracking.description);
            // console.log(formData);
            this.$axios.post('/order/orderTrack', formData)
                // .then(response => {
                //     // Handle successful response
                //     console.log('Success:', response.data);
                // })
                .then(response => {
                    console.log('Success:', response.data);
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Order has been successfully updated'
                    });
                })
                .catch(error => {
                    // Handle error
                    console.error('Error:', error);
                    let errorMessage = 'An error occurred while updating the order. Please try again later.';

                    if (error.response && error.response.status === 422) {
                        const validationErrors = error.response.data.errors;
                        errorMessage = Object.keys(validationErrors)
                            .map(field => `${field}: ${validationErrors[field].join(', ')}`)
                            .join('\n');
                    } else if (error.response && error.response.data && error.response.data.message) {
                        errorMessage = error.response.data.message;
                    }

                    Lobibox.notify('error', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-error-circle',
                        msg: errorMessage
                    });

                });



            // this.$axios.post('/order/orderTrack', formData)
            //     .then(response => {
            //         Lobibox.notify('success', {
            //             pauseDelayOnHover: true,
            //             continueDelayOnInactiveTab: false,
            //             position: 'top right',
            //             icon: 'bx bx-check-circle',
            //             msg: 'Order has been successfully updated'
            //         });
            //     })
            //     .catch(error => {
            //         let errorMessage = 'An error occurred while updating the order. Please try again later.';

            //         if (error.response && error.response.status === 422) {
            //             const validationErrors = error.response.data.errors;
            //             errorMessage = Object.keys(validationErrors)
            //                 .map(field => `${field}: ${validationErrors[field].join(', ')}`)
            //                 .join('\n');
            //         } else if (error.response && error.response.data && error.response.data.message) {
            //             errorMessage = error.response.data.message;
            //         }

            //         Lobibox.notify('error', {
            //             pauseDelayOnHover: true,
            //             continueDelayOnInactiveTab: false,
            //             position: 'top right',
            //             icon: 'bx bx-error-circle',
            //             msg: errorMessage
            //         });

            //         console.error('Error:', error);
            //     });
        },
        // getTrackstatus(){
        //     const orderId = this.$route.query.orderId;
        //     this.$axios.get(`/order/orderTrackList/${orderId}`)
        //     .then(response =>{
        //         this.trackData = response.data;
        //         console.log(response.data);
        //     });
        // },
        saveData() {
            const formData = new FormData();
            formData.append('orderId', this.insertdata.orderId);
            formData.append('orderstatus', this.insertdata.orderstatus);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/order/update_order_status',
                formData, {
                headers
            }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/orders/order-list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        async defaultLoading() {
            const orderId = this.$route.query.orderId;
            this.orderid = orderId;
            await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
                this.ordersData = response.data;
                this.orders = response.data.orderdata;
                this.orderstatus = response.data.orderrow;
                this.customername = response.data.customername;
                this.customeremail = response.data.customeremail;
                this.order_status = response.data.OrderStatus;
                this.orderDate = response.data.create_at;
                this.insertdata.orderstatus = response.data.orderstatus_id;
                
                this.trackStatus.packed = response.data.packed_status;
                this.trackStatus.dispatched = response.data.dispatched_status;
                this.trackStatus.outForDelivery = response.data.outForDelivery_status;
                this.trackStatus.deliverd = response.data.delivered_status;
                this.trackStatus.canceled = response.data.cancel_status;
                this.trackStatus.returned = response.data.return_status;
                // this.trackStatus = response.data;
                // $(".orderstatus").html(1);
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Has been successfully update order'
            });
        },

    },
}
</script>
