<template>

    <div class="custom-tab-container">
        <!-- Custom Nav Tabs -->
        <ul class="custom-nav-tabs nav nav-tabs" id="orderTabs" role="tablist">
            <li class="custom-tab-item nav-item" role="presentation" @click="getOrderStatus(1)">
                <a class="custom-tab-link nav-link active" id="new-order-tab" data-bs-toggle="tab" href="#new-order"
                    role="tab" aria-controls="new-order" aria-selected="true">
                    Place Order
                    <span class="badge bg-primary" style="position: absolute; top: 0; right: 0;">{{
                        placeOrdersCount }}</span>
                </a>
            </li>
            <li class="custom-tab-item nav-item" role="presentation">
                <a class="custom-tab-link nav-link" id="inprogress-tab" @click="getOrderStatus(2)" data-bs-toggle="tab"
                    href="#inprogress" role="tab" aria-controls="inprogress" aria-selected="false">
                    In Progress
                    <span class="badge bg-primary" style="position: absolute; top: 0; right: 0;">{{
                        inprogressOrdersCount }}</span>
                </a>
            </li>
            <li class="custom-tab-item nav-item" role="presentation">
                <a class="custom-tab-link nav-link" id="cancel-tab" data-bs-toggle="tab" href="#cancel"
                    @click="getOrderStatus(3)" role="tab" aria-controls="cancel" aria-selected="false">
                    Cancel
                    <span class="badge bg-primary" style="position: absolute; top: 0; right: 0;">{{
                        cancelOrdersCount }}</span>
                </a>
            </li>
            <li class="custom-tab-item nav-item" role="presentation">
                <a class="custom-tab-link nav-link" id="delivery-tab" data-bs-toggle="tab" href="#delivery"
                    @click="getOrderStatus(4)" role="tab" aria-controls="delivery" aria-selected="false">
                    Delivered
                    <span class="badge bg-primary" style="position: absolute; top: 0; right: 0;">{{
                        deliveryOrdersCount }}</span>
                </a>
            </li>

            <li class="custom-tab-item nav-item" role="presentation">
                <a class="custom-tab-link nav-link" id="complete-tab" data-bs-toggle="tab" href="#complete"
                    @click="getOrderStatus(5)" role="tab" aria-controls="complete" aria-selected="false">
                    Complete
                    <span class="badge bg-primary" style="position: absolute; top: 0; right: 0;">{{
                        completeOrdersCount }}</span>
                </a>
            </li>
        </ul>

        <!-- Custom Tab Content complete -->
        <div class="tab-content" id="orderTabContent">
            <div class="tab-pane fade show active" id="new-order" role="tabpanel" aria-labelledby="new-order-tab">
                <div class="">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Gig Title</th>
                                    <th scope="col">
                                        <center>Date</center>
                                    </th>
                                    <!-- <th scope="col">Action</th>  -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(order, index) in orderData" :key="index">
                                    <td>#{{ order.orderId }}</td>
                                    <td><nuxt-link :to="`/gigs/${order.gig_slug}`">{{ order.gig_name }}
                                            Price:
                                            ${{ order.selected_price }}</nuxt-link>
                                    </td>
                                    <td class="text-center">
                                        {{ formatDate(order.created_at) }}</td>
                                    <!-- <td>
                                        <button class="btn btn-success btn-sm text-white me-2"
                                          @click="acceptMyOrders(order.orderId)">Accept</button>
                                        <button class="btn btn-danger btn-sm text-white"
                                          @click="rejectOrders(order.orderId)">Cancel</button>
                                      </td> -->
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
            <div class="tab-pane fade" id="inprogress" role="tabpanel" aria-labelledby="inprogress-tab">
                <!-- <p>Custom Content for In Progress.</p> -->
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Order ID & Date</th>
                                <th scope="col">Gig Title</th>
                                <th scope="col">
                                    <center>Reaming Time</center>
                                </th>
                                <th scope="col">Action</th>
                                <!-- Action Column -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in inprogressData" :key="index">
                                <td>#{{ order.orderId }}<br />{{ formatDate(order.created_at) }}
                                </td>
                                <td><nuxt-link :to="`/gigs/${order.gig_slug}`">{{ order.gig_name }}
                                        Price:
                                        ${{ order.selected_price }}</nuxt-link>
                                </td>
                                <td class="text-center" v-html="order.reamingitime"></td>
                                <td>

                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <nuxt-link :to="`/dashboard/buyer/orderDetails/${order.orderId}`"
                                            class="btn-sm btn btn-primary text-white">Details</nuxt-link>
                                        <nuxt-link :to="`#`" class="btn-sm btn btn-danger text-white"
                                            @click="cancelOrders(order.orderId)">Cancel</nuxt-link>
                                    </div>
                                    <!-- <button class="btn btn-primary btn-sm text-white" @click="rejectOrders(order.orderId)">Details</button> -->
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
            <div class="tab-pane fade" id="cancel" role="tabpanel" aria-labelledby="cancel-tab">
                <!-- <p>Custom Content for Cancel.</p> -->

                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Gig Title</th>
                                <th scope="col">
                                    <center>Date</center>
                                </th>
                                <th scope="col">Status</th>
                                <!-- Action Column -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in cancelData" :key="index">
                                <td>#{{ order.orderId }}</td>
                                <td><nuxt-link :to="`/gigs/${order.gig_slug}`">{{ order.gig_name }}
                                        Price:
                                        ${{ order.selected_price }}</nuxt-link>
                                </td>
                                <td class="text-center">
                                    {{ formatDate(order.created_at) }}</td>
                                <td class="text-danger text-center">Canceled
                                    <br />[{{ order.cancel_resion }}]
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
            <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <ProgressbarLoader />
                </div>
            <div class="tab-pane fade" id="delivery" role="tabpanel" aria-labelledby="delivery-tab">
                <!-- <p>Custom Content for Delivery.</p> -->

                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Gig Title</th>
                                <th scope="col">
                                    <center>Date</center>
                                </th>
                                <th scope="col">Action</th>
                                <!-- Action Column -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in deliveryData" :key="index">
                                <td>#{{ order.orderId }}</td>
                                <td><nuxt-link :to="`/gigs/${order.gig_slug}`">{{ order.gig_name }}
                                        Price:
                                        ${{ order.selected_price }}</nuxt-link>
                                </td>
                                <td class="text-center">
                                    {{ formatDate(order.created_at) }}</td>
                                <td>
                                    <nuxt-link :to="`/dashboard/buyer/orderDetails/${order.orderId}`"
                                        class="btn-sm btn btn-primary text-white">Details</nuxt-link>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>

            <div class="tab-pane fade" id="complete" role="tabpanel" aria-labelledby="complete-tab">
                <!-- <p>Custom Content for Delivery.</p> -->

                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Gig Title</th>
                                <th scope="col">
                                    <center>Date</center>
                                </th>
                                <th scope="col">Action</th>
                                <!-- Action Column -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in completeData" :key="index">
                                <td>#{{ order.orderId }}</td>
                                <td><nuxt-link :to="`/gigs/${order.gig_slug}`">{{ order.gig_name }}
                                        Price:
                                        ${{ order.selected_price }}</nuxt-link>
                                </td>
                                <td class="text-center">
                                    {{ formatDate(order.created_at) }}</td>
                                <td>
                                    <nuxt-link :to="`/dashboard/buyer/orderDetails/${order.orderId}`"
                                        class="btn-sm btn btn-primary text-white">Details</nuxt-link>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal_cancel" tabindex="-1" aria-labelledby="myModal_cancelLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModal_cancelLabel">Cancel Order</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Cancel Order Form -->
                    <form @submit.prevent="submitCancelOrder">
                        <div class="mb-3">
                            <label for="cancelReason" class="form-label">Reason for
                                Cancellation</label>
                            <textarea v-model="cancelReason" id="cancelReason" class="form-control" rows="4"
                                placeholder="Please explain why you want to cancel the order"></textarea>
                        </div>
                        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary text-white" @click="submitCancelOrder">Submit
                        Cancellation</button>
                </div>
            </div>
        </div>
    </div>

    <!-- END -->
</template>

<script setup>

import {
    useRoute
} from 'vue-router';
import axios from 'axios';

import {
    useRouter
} from 'vue-router';
import Swal from "sweetalert2";
const loading = ref(false);
const submitCancelOrder = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to cancel this order?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        if (result.isConfirmed) {
            // If user confirms, send the cancel request
            axios.get('/order/cancel-order-buyer', {
                params: {
                    orderId: canceOrderID.value,
                    cancel_resion: cancelReason.value
                }
            })
                .then(response => {
                    // Handle the response (success or failure)
                    Swal.fire(
                        'Cancelled!',
                        'Your order has been cancelled.',
                        'success'
                    );
                })
                .catch(error => {
                    // Handle errors
                    Swal.fire(
                        'Error!',
                        'There was an issue cancelling your order. Please try again.',
                        'error'
                    );
                });
        }
    });
}

const canceOrderID = ref("");
const cancelOrders = (orderId) => {
    canceOrderID.value = orderId;
    $('#myModal_cancel').modal('show');

}


const getAllOrdersList = async () => {
    
    try {
        loading.value = true;
        const response = await axios.get(`/order/getOrderPlace`);
        orderData.value = response.data;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};

// Function to format the date
const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(date).toLocaleDateString(undefined, options);
};

let intervalId = null;
intervalId = setInterval(getAllOrdersList, 30000); // Set interval for 30 seconds
const orderData = ref('');
const inprogressData = ref([]);
const cancelData = ref([]);
const deliveryData = ref([]);
const completeData = ref([]);
const placeOrdersCount = ref(0);
const inprogressOrdersCount = ref(0);
const deliveryOrdersCount = ref(0);
const cancelOrdersCount = ref(0);
const completeOrdersCount = ref(0);

const getOrderCounting = async () => {
    try {
        const response = await axios.get(`/order/getOrderCountBuyer`);
        placeOrdersCount.value = response.data.placeOrdersCount;
        inprogressOrdersCount.value = response.data.inprogressOrdersCount;
        cancelOrdersCount.value = response.data.cancelOrdersCount;
        deliveryOrdersCount.value = response.data.deliveryOrdersCount;
        completeOrdersCount.value = response.data.completeOrdersCount;

    } catch (error) {
        console.log(error);
    }
};

const getOrderStatus = async (orderStatusId = 1) => {
    try {
        const response = await axios.get(`/order/getOrderPlaceForByer`, {
            params: {
                orderStatusId
            } // Passing orderStatusId as a query parameter
        });

        if (orderStatusId = 1) {
            orderData.value = response.data.placeOrders;
        }

        if (orderStatusId = 2) {
            inprogressData.value = response.data.inprogressOrders;

        }
        if (orderStatusId = 3) {
            cancelData.value = response.data.cancelOrders;
        }

        if (orderStatusId = 4) {
            deliveryData.value = response.data.deliveryOrders;
        }

        if (orderStatusId = 5) {
            completeData.value = response.data.completeOrders;
        }

        getOrderCounting();

    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    getOrderCounting();
    getOrderStatus();
    getAllOrdersList();
});
onBeforeUnmount(() => {
    clearInterval(intervalId); // Clear interval when component is unmounted
});


</script>
<style>
.chat-user-item {
    cursor: pointer;
    /* Change cursor to pointer */
    transition: background-color 0.3s;
    /* Smooth background transition */
}

.chat-user-item:hover {
    background-color: #f8f9fa;
    /* Light gray on hover */
}

.chat-user-item.selected {
    background-color: #e0e0e0;
    /* Background for selected user */
    font-weight: bold;
    /* Bold text for selected user */
}

.order-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}


.btn-primary {
    background-color: #007bff;
    border: none;
}

.btn-primary:hover {
    background-color: #0056b3;
    /* Darker blue on hover */
}

.categories_list_section {
    border-bottom: 1px solid #E9E9E9;
    padding: 7px 0 3px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Custom Tab Container */
.custom-tab-container {
    background-color: #f9f9f9;
    border-radius: 10px;
    width: 100%
}

/* Custom Tab Links */
.custom-nav-tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
    border-bottom: 2px solid #ccc;
}

.custom-tab-item {
    flex: 1;
    text-align: center;
}

.custom-tab-link {
    display: block;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    background-color: #e9ecef;
    text-decoration: none;
    border-radius: 5px 5px 0 0;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-tab-link:hover,
.custom-tab-link:focus {
    background-color: #185a48;
    color: #333;
}

.custom-tab-link.active {
    background-color: #1f4b3f;
    color: white;
    border-bottom: 3px solid #fff;
}

/* Custom Tab Content */
.tab-pane {
    padding: 10px;
    background-color: white;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 2px 4px rgba(119, 118, 118, 0.1);
}

/* Responsive Tabs */
@media (max-width: 767px) {
    .custom-nav-tabs {
        width: 100%;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(3, 3fr);
    }

    .custom-tab-item {
        margin-bottom: 10px;
    }
}

.custom-tab-link {
    position: relative;
    /* Add relative positioning to the link */
}


.table-responsive {
    max-width: 100%;
    overflow-x: auto;
}

@media(max-width: 576px) {
    .custom-tab-link {
        display: block;
        padding: 10px 0;
        font-size: 14px;
    }
}
</style>