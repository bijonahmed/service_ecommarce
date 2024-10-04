<template>
    <title>Order Management List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Order Management</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>

                                <li class="breadcrumb-item">
                                    <button type="button" @click="bulkUpdate">Bulk Update</button>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Main content -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="row text-center" style="text-align: center; padding-bottom: 10px;">
                        <center>
                            <button type="button" class="btn btn-default">
                                To be paid <span class="badge bg-secondary">{{ tobePaid_count }}</span>
                            </button>
                            <button type="button" class="btn btn-default">
                                To be confiremed <span class="badge bg-secondary">{{ tobeconfiremed_count }}</span>
                            </button>
                            <button type="button" class="btn btn-default">
                                Goods To be received <span class="badge bg-secondary">{{ goodsTobereceived_count
                                    }}</span>
                            </button>
                            <button type="button" class="btn btn-default">
                                Platform procced <span class="badge bg-secondary">{{ platformprocced_count }}</span>
                            </button>
                            <button type="button" class="btn btn-default">
                                To be shipped <span class="badge bg-secondary">{{ tobeshipped_count }}</span>
                            </button>

                            <button type="button" class="btn btn-default">
                                Complete <span class="badge bg-secondary">{{ complete_count }}</span>
                            </button>
                        </center>
                    </div>

                    <div class="page_top">
                        <div class="row justify-content-between align-items-center">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="basic_data_container">
                                        <div class="data_box">
                                            <h6>Total Active Members: <strong>{{ activeMembersCount }}</strong></h6>
                                        </div>
                                        <div class="data_box">
                                            <h6>Users with Receivable Orders: <strong>{{ tobepaidcount }}</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div class="col-md-9">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 custompadd">
                                                    <input type="text" class="form-control" placeholder="Search Email"
                                                        v-model="searchUserEmail">
                                                </th>
                                                <th class="border-0  p-0 custompadd">
                                                    <input type="text" class="form-control" placeholder="Search OrderId"
                                                        v-model="searchOrderId">
                                                </th>
                                                <th class="border-0 p-0 mr-1 custompadd">
                                                    <input type="date" placeholder="Start date" v-model="startDate"
                                                        class="form-control">
                                                </th>
                                                <th class="border-0 p-0 mr-1 custompadd">
                                                    <input type="date" placeholder="End date" v-model="endDate"
                                                        class="form-control">
                                                </th>
                                                <th class="border-0 p-0 mr-1 custompadd">

                                                    <select v-model="selectedStatus" class="form-control" @change="filterData()">
                                                        <!-- Loop over allStatus to create options -->
                                                        <option value="">All</option>
                                                        <option v-for="status in allStatus" :key="status.id"
                                                            :value="status.id"> {{ status.name }}</option>
                                                    </select>
                                                </th>

                                                <th class="border-0  p-0 h-100">
                                                    <button type="button" style="min-width: 90px;"
                                                        class="btn btn-primary btn-fla" @click="filterData"><i
                                                            class="fas fa-search"></i>Search</button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>

                                </form>
                            </div>
                            <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                <Loader />
                            </div>
                            <div class="col-md-3">
                                <div class="buttonList">
                                    <!-- <a href="#" type="button" class="btn btn-primary btn-flat" @click="orderProcess">
                                        <i class="fas fa-plus"></i>Create Auto order for all users
                                    </a> -->
                                    <a data-toggle="modal" data-target="#addorder" type="button mx-2"
                                        class="btn btn-warning btn-flat ">
                                        <i class="fas fa-plus"></i>Create individual order
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <!-- table section start here  -->
                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">
                                <p>
            <center> <small>Selling Price:&nbsp;{{ selling_price_sum }},&nbsp;Costing Price:&nbsp;{{ costing_price_sum }},&nbsp;Profit:&nbsp;{{ profit_sum }}
                Total Number of Records:&nbsp;{{ totalRecords }},&nbsp;Current Pages:{{ currentPage }},&nbsp;Total Pages:&nbsp;{{
                totalPages }} </small> </center>
        </p>
                            </div>
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="checkAll"></th>
                                        <th>Basic information</th>
                                        <th class="text-left">User Info</th>
                                        <th>Order Status</th>
                                        <th>Costing price($)</th>
                                        <th>Profit($)</th>
                                        <th>Date</th>
                                        <td>Action </td>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr v-for="item in productdata" :key="item.id">
                                        <td>
                                            <input type="checkbox" class="checkBox">
                                        </td>
                                        <td>
                                            <h3>Order id: {{ item.orderId }}</h3>
                                            <div class="d-flex">
                                                <div>
                                                    <h3>{{ item.product_name }}</h3>
                                                    <p>price: ${{ item.selling_price }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-left">
                                            <p>Name: {{ item.userInfo_1 }}</p>
                                            <p>Cell phone: {{ item.userInfo_2 }}</p>
                                            <p>Email: {{ item.userInfo_3 }}</p>
                                        </td>
                                        <td>{{ item.status }}</td>
                                        <td>{{ item.costing_price }}</td>
                                        <td>{{ item.profit }}</td>
                                        <td>{{ item.order_date }}</td>

                                        <td>
                                            <div class="btn-group">
                                                <button class="btn btn-default btn-sm btn-flat" data-toggle="modal"
                                                    @click="getDetails(item)" data-target="#details"> Details</button>
                                                <button class="btn btn-danger btn-sm btn-flat"
                                                    @click="cancelOrder(item.orderId)">Delete</button>

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
                </div>
            </section>
            <!-- /.content -->
            <!-- /.content -->
        </div>

        <!-- Start  Modal  -->
        <!-- add manual order modal  -->
        <div class="modal fade" id="addorder" tabindex="-1" role="dialog" aria-labelledby="detailsTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header py-1">
                        <h5 class="modal-title" id="detailsTitle">Create Individual User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <center>
                            <span v-if="currentBalance">
                                <b>Current Balance : ${{ currentBalance }}</b>
                            </span>
                        </center>
                        <div class="col-md-12 m-auto">
                            <form @submit.prevent="maualOrderSubmit" id="formrest" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="">Users</label>
                                    <input type="text" :value="query" @input="onInput"
                                        placeholder="Search for users by email" class="form-control" />
                                    <span class="text-danger" v-if="errors.userId">{{ errors.userId[0]
                                        }}</span>
                                    <div v-if="users.length > 0" class="autocomplete-results">
                                        <ul>
                                            <li v-for="user in users" :key="user.id" @click="selectUser(user)">
                                                {{ user.name }} [{{ user.email }}]
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="form-group mb-2">
                                    <select name="storeType" id="storeType" class="form-control"
                                        v-model="selectedcategoryId" @change="showProducts">
                                        <option value="">Select Stores</option>
                                        <option v-for="store in feachStoreNames" :key="store.id" :value="store.id">
                                            {{ store.name }}
                                        </option>
                                    </select>

                                    <span class="text-danger" v-if="errors.selectedcategoryId">{{
                                        errors.selectedcategoryId[0] }}</span>


                                </div>

                                <h6 v-if="totalBuyingPrice">
                                    <div class="row">
                                        <div class="container">
                                            Sum of select product: <strong>${{ totalBuyingPrice.toFixed(2) }}</strong>
                                            <p>Selected Product IDs: {{ selectedProductIDs }}</p>
                                        </div>
                                    </div>
                                </h6>
                                <div class="proListh">
                                    <span class="text-danger" v-if="errors.selectedProductIDs">{{
                                        errors.selectedProductIDs[0] }}</span>
                                    <table class="table">
                                        <tr v-for="product in prodcutsArray" :key="product.product_id"
                                            @click="onRowClick(product.product_id)">
                                            <td>
                                                <!-- Checkbox with binding to check if it's selected -->
                                                <input type="checkbox" :checked="isProductSelected(product.product_id)"
                                                    @click="toggleCheckbox($event, product.product_id)">
                                            </td>
                                            <td>{{ product.product_name }}</td> <!-- Product name -->
                                            <td><strong>${{ product.buying_price }}</strong></td>
                                            <!-- Product price -->
                                        </tr>
                                    </table>

                                </div>
                                <button type="submit" class="btn btn-primary w-100">Send Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- showUpdate -->
        <div class="modal fade" id="showUpdate" tabindex="-1" role="dialog" aria-labelledby="detailsTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header py-1">
                        <h5 class="modal-title" id="detailsTitle">Bulk Update</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12 m-auto">

                            <form @submit.prevent="saveData()" id="formrest" class="form-group"
                                enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="">Select Date</label>
                                    <!-- {{ orderrow.created_at }} -->

                                    <input type="date" v-model="filterOrderDate" class="form-control"
                                        @change="checkfilterOrderDate" />
                                </div>

                                <div class="form-group">
                                    <!-- {{ orderrow.pay_confirm_time }} -->
                                    <label for="">Find Order Status</label>
                                    <select v-model="orderStatus" class="form-control" @change="checkOrderStatus">
                                        <option value="">All</option>
                                        <option v-for="status in allStatus" :key="status.id" :value="status.id">
                                            {{ status.name }}
                                        </option>
                                    </select>
                                </div>
                                <button type="button" @click="checkOrderStatus">Check Status</button>

                                {{ orderdata }}
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Order Date</th>
                                            <th>PayConfirm Time</th>
                                            <th>Approximately Time</th>
                                            <th>Order Status </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr v-for="item in orderdata" :key="item.id">
                                            <td>{{ item.order_date }}</td>
                                            <td>{{ item.pay_confirm_time }}</td>
                                            <td>{{ item.apx_complete_time }}</td>
                                            <td>{{ item.status }}</td>

                                        </tr>
                                    </tbody>
                                </table>
                                <div class="form-group">
                                    <!-- {{ orderrow.pay_confirm_time }} -->
                                    <label for="">Update Order Status</label>
                                    <select v-model="selectedStatus" class="form-control">
                                        <!-- Loop over allStatus to create options -->
                                        <!-- <option value="">All</option> -->
                                        <option v-for="status in allStatus" :key="status.id" :value="status.id">
                                            {{ status.name }}
                                        </option>
                                    </select>
                                </div>

                                <button class="btn btn-primary w-100" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- details modal  -->
        <div class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="detailsTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header py-1">
                        <h5 class="modal-title" id="detailsTitle">Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12 m-auto">

                            <table class="table">
                                <tr>
                                    <td class="text-left">Basic information</td>
                                    <td>
                                        <h3>OrderID: {{ orderrow.orderId }}</h3>
                                        <div class="d-flex">

                                            <div>
                                                <h3>{{ orderrow.product_name }}</h3>
                                                <p>price: ${{ orderrow.selling_price }}</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left">User info </td>

                                    <td class="text-left">
                                        <p>Name: {{ orderrow.userInfo_1 }}</p>
                                        <p>Cell phone: {{ orderrow.userInfo_2 }}</p>
                                        <p>Email: {{ orderrow.userInfo_3 }}</p>

                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left">Order Status</td>
                                    <td class="text-left"><span class="text-danger">{{ orderrow.status }}</span></td>
                                </tr>
                                <tr>
                                    <td class="text-left">Costing price($)</td>
                                    <td class="text-left"><span class="text-success">${{ orderrow.costing_price
                                            }}</span></td>
                                </tr>
                                <tr>
                                    <td class="text-left">Profit($)</td>
                                    <td class="text-left">${{ orderrow.profit }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left">Order Date</td>
                                    <td class="text-left">{{ orderrow.order_date }}</td>
                                </tr>

                                <tr>
                                    <td class="text-left">Created At</td>
                                    <td class="text-left">{{ orderrow.created_at }}</td>
                                </tr>

                                <tr>
                                    <td class="text-left">Pay Confirm Time</td>
                                    <td class="text-left">
                                        <span v-if="isNotReceived(orderrow.pay_confirm_time)">Order Not Confirm</span>
                                        <span v-else>{{ orderrow.pay_confirm_time }}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="text-left">Approximately Order Complete</td>
                                    <td class="text-left">{{ orderrow.complete_time }}</td>
                                </tr>


                            </table>

                            <form @submit.prevent="saveData()" id="formrest" class="form-group"
                                enctype="multipart/form-data">
                                <div class="form-group d-none">
                                    <label for="">Created At</label>
                                    {{ orderrow.created_at }}
                                    <!-- <input type="date" v-model="orderrow.created_at" class="form-control" /> -->
                                </div>
                                <div class="form-group d-none">
                                    <!-- {{ orderrow.pay_confirm_time }} -->
                                    <label for="">Pay Confirm Time: </label>
                                    <!-- <input type="date" v-model="orderrow.pay_confirm_time" class="form-control" /> -->
                                    <span v-if="isNotReceived(orderrow.pay_confirm_time)">Order Not Confirm</span>
                                    <span v-else>{{ orderrow.pay_confirm_time }}</span>
                                </div>

                                <div class="form-group d-none">
                                    <!-- {{ orderrow.complete_time }} -->
                                    <label for="">Approximately Order Complete Time: </label>
                                    <input type="date" v-model="orderrow.complete_time" class="form-control" />
                                </div>


                                <button class="btn btn-primary w-100 d-none" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


       

        <center>

            <div class="pagination" style="text-align: center">

                <button :disabled="currentPage === 1" @click="fetchData(currentPage - 1)">
                    Previous
                </button>
                <template v-for="pageNumber in displayedPages" :key="pageNumber">
                    <button @click="fetchData(pageNumber)">
                        {{ pageNumber }}
                    </button>
                </template>
                <button :disabled="currentPage === totalPages" @click="fetchData(currentPage + 1)">
                    Next
                </button>
            </div>
        </center>

    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
definePageMeta({
    middleware: 'is-logged-out',
})


const router = useRouter();
const errors = ref({});
const notifmsg = ref('');
const startDate = ref('');
const endDate = ref('');
const allStatus = ref([]);
const status = ref('');
const userId = ref('');
const query = ref('');
const users = ref([]);
const feachStoreNames = ref([]);
const storeName = ref('');
const currentBalance = ref(0);
const selectedcategoryId = ref('');
const selectedProductIDs = ref([]);
const selectedStatus = ref(1);
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);
const prodcutsArray = ref([]);
const orderdata = ref([]);
const searchUserEmail = ref(""); // Add a ref for the search query
const searchOrderId = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query
const filterDate = ref("");
const filterOrderDate = ref('');
const orderStatus = ref('');
const tobepaidcount = ref(0);
const activeMembersCount = ref(0);

const tobePaid_count = ref(0);
const tobeconfiremed_count = ref(0);
const goodsTobereceived_count = ref(0);
const platformprocced_count = ref(0);
const tobeshipped_count = ref(0);
const complete_count = ref(0);
const selling_price_sum = ref(0);
const costing_price_sum = ref(0);
const profit_sum = ref(0);


// Utility function to format prices
const orderrow = reactive({
    orderId: '',
    product_name: '',
    selling_price: '',
    userInfo_1: '',
    userInfo_2: '',
    userInfo_3: '',
    status: '',
    costing_price: '',
    profit: '',
    created_at: '',
    pay_confirm_time: '',
    complete_time: '',
    order_date: '',

});

const bulkUpdate = () => {
    $('#showUpdate').modal('show');
}

const isNotReceived = (dateString) => {
    return dateString.startsWith("1970-01-01");
};



const checkfilterOrderDate = () => {
    console.log("Selected Date:", filterOrderDate.value); // Outputs the selected date to the console
};

const checkOrderStatus = () => {

    const selectedStatus = orderStatus.value;
    const orderDate = filterOrderDate.value;
    //console.log(orderDate);
    const res = axios.get('/order/checkOrderData', {
        params: {
            selectedStatus: selectedStatus,
            orderDate: orderDate,
        },
    })
        .then((response) => {
            // This code runs once the request completes successfully
            // console.log("Response data:", response.data);
            orderdata.value = response.data; // Assign the response data to a variable or ref
        })
        .catch((error) => {
            // This code runs if there's an error with the request
            console.error("Error fetching order data:", error);
        });

}


const cancelOrder = (orderId) => {
    Swal.fire({
        title: "Are you sure?",
        text: "Cance order !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
        if (result.isConfirmed) {

            try {
                loading.value = true;
                const response = axios.get('/order/orderCancel', {
                    params: {
                        orderId: orderId,
                    },
                });
                console.log(response.data);
                fetchData(currentPage.value);
            } catch (error) {
                console.error('Error fetching users:', error);

            } finally {
                loading.value = false;
            }

            Swal.fire({
                title: "Cancel!",
                text: "Your order has been cancel.",
                icon: "success"
            });
        }
    });



}

//Manual Order Submit
const maualOrderSubmit = () => {
    const formData = new FormData();
    formData.append('userId', userId.value);
    formData.append('selectedcategoryId', selectedcategoryId.value);
    formData.append('selectedProductIDs', selectedProductIDs.value);

    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    axios.post('/order/sendManualOrderAdmin', formData, { headers })
        .then((res) => {
            document.getElementById('formrest').reset();
            success_noti();
            fetchData(1);

            query.value = "";
            $('#addorder').modal('hide');
            router.push('/usermanagement/order-messages');
        }).catch(error => {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                // Handle other types of errors here
                console.error('An error occurred:', error);
            }
        });
};

const saveData = () => {
    const formData = new FormData();
    formData.append('orderId', orderrow.orderId);
    // formData.append('created_at', orderrow.created_at);
    // formData.append('pay_confirm_time', orderrow.pay_confirm_time);
    formData.append('complete_time', orderrow.complete_time);

    axios.post('/order/updateOrder', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {

        //details
        $('#details').modal('hide');
        $('#formrest')[0].reset();
        success_noti();
        //details
    }).catch(error => {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors;
        } else {
            // Handle other types of errors here
            console.error("An error occurred:", error);
        }
    });
};

const success_noti = () => {
    //alert("Your data has been successfully inserted.");
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Successfully update."
    });
};

const getDetails = (item) => {
    console.log("===" + item.complete_time);
    loading.value = true; // Set loading to true
    // Simulate a delay (3 seconds)
    setTimeout(() => {
        // Update orderrow with item details
        orderrow.orderId = item.orderId;
        orderrow.product_name = item.product_name;
        orderrow.selling_price = item.selling_price;
        orderrow.userInfo_1 = item.userInfo_1;
        orderrow.userInfo_2 = item.userInfo_2;
        orderrow.userInfo_3 = item.userInfo_3;
        orderrow.status = item.status;
        orderrow.costing_price = item.costing_price;

        orderrow.created_at = item.created_at;
        orderrow.pay_confirm_time = item.pay_confirm_time;
        orderrow.complete_time = item.complete_time;

        orderrow.profit = item.profit;
        orderrow.order_date = item.order_date;
        // Set loading to false after the delay
        loading.value = false;
    }, 1000); // 3-second delay
}

//Pagniation with filter
const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/order/filterOrderList`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchUserEmail: searchUserEmail.value,
                searchOrderId: searchOrderId.value,
                startDate: startDate.value,
                endDate: endDate.value,
                selectedStatus: selectedStatus.value,
            },
        });
        productdata.value = response.data.data;
        totalRecords.value = response.data.total_records;
        totalPages.value = response.data.total_pages;
        currentPage.value = response.data.current_page;
        tobepaidcount.value = response.data.tobepaidcount;
        activeMembersCount.value = response.data.activeMembersCount;
        tobePaid_count.value = response.data.tobePaid_count;
        tobeconfiremed_count.value = response.data.tobeconfiremed_count;
        goodsTobereceived_count.value = response.data.goodsTobereceived_count;
        platformprocced_count.value = response.data.platformprocced_count;
        tobeshipped_count.value = response.data.tobeshipped_count;
        complete_count.value = response.data.complete_count;
        selling_price_sum.value = response.data.selling_price_sum;
        costing_price_sum.value = response.data.costing_price_sum;
        profit_sum.value = response.data.profit_sum;

    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

// Compute the range of displayed pages
const displayedPages = computed(() => {
    const maxDisplayedPages = 10; // Maximum number of displayed pages
    const startPage = Math.max(
        1,
        currentPage.value - Math.floor(maxDisplayedPages / 2)
    );
    const endPage = Math.min(
        totalPages.value,
        startPage + maxDisplayedPages - 1
    );
    return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );
});

// Watch for changes in current page and fetch data accordingly
watch(currentPage, (newPage) => {
    fetchData(newPage);
});

// Function to check if a product ID is in the selected list
const isProductSelected = (productId) => {
    return selectedProductIDs.value.includes(productId);
};

// Function to handle row clicks for selection/deselection
const onRowClick = (productId) => {
    if (isProductSelected(productId)) {
        // Deselect if already selected
        selectedProductIDs.value = selectedProductIDs.value.filter((id) => id !== productId);
    } else {
        // Select if not already selected
        selectedProductIDs.value.push(productId);
    }
};

// Function to handle checkbox clicks and prevent event propagation
const toggleCheckbox = (event, productId) => {
    event.stopPropagation(); // Prevent row click from being triggered by checkbox click

    const isChecked = event.target.checked;

    if (isChecked) {
        if (!isProductSelected(productId)) {
            selectedProductIDs.value.push(productId);
        }
    } else {
        selectedProductIDs.value = selectedProductIDs.value.filter((id) => id !== productId);
    }
};


const totalBuyingPrice = computed(() => {
    return prodcutsArray.value
        .filter((product) => isProductSelected(product.product_id)) // Select only products that are selected
        .reduce((sum, product) => sum + parseFloat(product.buying_price), 0); // Sum the buying prices
});

const orderProcess = async () => {
    try {
        loading.value = true;
        const response = await axios.post(`/order/assignOrder`);
        console.log("Successfully assign order...");
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}

const getOrderStatusList = () => {
    axios.get(`/order/getOrderStatus`).then(response => {
        allStatus.value = response.data;
    });
};

const showProducts = async () => {
    console.log("Selected Category ID:", selectedcategoryId.value);
    console.log("userId:", userId.value);

    try {
        loading.value = true;
        // const response = await axios.get(`/product/categoryWiseProduct?categoryId=${selectedcategoryId.value}`);
        const response = await axios.get('/product/categoryWiseProduct', {
            params: {
                categoryId: selectedcategoryId.value, // Pass the category ID
                user_id: userId.value,                // Pass the user ID
            },
        });
        prodcutsArray.value = response.data.productsArr; // Update users with the result
    } catch (error) {
        console.error('Error fetching users:', error);
        users.value = []; // Clear users on error
    } finally {
        loading.value = false;
    }

};

/*
const filterData = async () => {

console.log("Selected Category ID:", selectedcategoryId.value);
console.log("userId:", userId.value);

try {
    loading.value = true;
    // const response = await axios.get(`/product/categoryWiseProduct?categoryId=${selectedcategoryId.value}`);
    const response = await axios.get('/product/categoryWiseProduct', {
        params: {
            categoryId: selectedcategoryId.value, // Pass the category ID
            user_id: userId.value,                // Pass the user ID
        },
    });
    prodcutsArray.value = response.data.productsArr; // Update users with the result
} catch (error) {
    console.error('Error fetching users:', error);
    users.value = []; // Clear users on error
} finally {
    loading.value = false;
}
};
*/

const filterData = async () => {
        fetchData(1);
};

// Function to fetch users from the API
const fetchUsers = async (searchQuery) => {
    if (searchQuery.length < 1) {
        users.value = []; // Clear users if the query is less than 3 characters
        return;
    }

    try {
        const response = await axios.get(`/user/autocompleteUser?query=${searchQuery}`);
        users.value = response.data; // Update users with the result
    } catch (error) {
        console.error('Error fetching users:', error);
        users.value = []; // Clear users on error
    }
};

// Event handler for input changes
const onInput = (event) => {
    query.value = event.target.value; // Update query value
};

// Watch the query for changes and fetch users
watch(query, (newQuery) => {
    fetchUsers(newQuery);
});
const getSelectedUsersInfo = async (userid) => {
    try {
        const response = await axios.get(`/user/getUserWiseCurrentBalance?userid=${userid}`);
        // console.log("response:" + response.data);
        currentBalance.value = response.data; // Update users with the result

    } catch (error) {
        console.error('Error fetching users:', error);
        users.value = []; // Clear users on error
    }
}

const checkActiveStore = async (userid) => {
    try {
        const response = await axios.get(`/dropshippingpro/checkActiveStoreInfo?userid=${userid}`);
        // console.log("response:" + response.data);
        storeName.value = response.data.storeName;
        feachStoreNames.value = response.data.feachStoreNames;

    } catch (error) {
        console.error('Error fetching users:', error);
        users.value = []; // Clear users on error
    }
}

// Function to handle user selection
const selectUser = (user) => {
    query.value = user.name; // Replace input with selected user
    userId.value = user.id
    getSelectedUsersInfo(user.id);
    checkActiveStore(user.id);
    // console.log("-------" + user.id);
    users.value = []; // Clear suggestions
    // Perform additional actions like setting user ID
};

onMounted(() => {
    fetchData(currentPage.value);
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    startDate.value = today; // Set the default date to today
    endDate.value = today;
    getOrderStatusList();
});
//orderProcess
</script>

<style>
.pagination {
    display: inline-block;
    text-align: center;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #2f2f2f;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #0056b3;
}

.pagination button[disabled] {
    background-color: #6c757d;
    cursor: not-allowed;
}

.proListh {
    height: 180px;
    overflow: auto;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0.5rem;
}

.btnSize {
    font-size: 12px;
    padding: 3px;
}

/* Table */
.table-wrapper {
    width: 100%;
    /* max-width: 500px; */
    overflow-x: auto;
}

.table td,
.table th {
    padding: .2rem;
    vertical-align: top;
    border-top: 1px solid #dae2ea;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 1px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: rgb(221, 221, 221);
}

.custompadd {
    padding-right: 5px !important;

}

/* Autocomplete */
.autocomplete-results {
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    z-index: 1000;
    width: 100%;
}

.autocomplete-results ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.autocomplete-results li {
    padding: 8px;
    cursor: pointer;
}

.autocomplete-results li:hover {
    background-color: #f0f0f0;
}

.content-header {
    padding: 5px .0rem;
}
</style>
