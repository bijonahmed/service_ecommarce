<template>
    <title>Recharge List</title>
    <div>
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Recharge Report</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">

                    <div class="page_top  my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-9">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 customSearch">
                                                    <input type="text" placeholder="Search TRX ID" class="form-control"
                                                        v-model="searchOrderId">
                                                </th>
                                                <th class="border-0  p-0 customSearch">
                                                    <input type="text" placeholder="Search User Email"
                                                        class="form-control" v-model="searchUserEmail">
                                                </th>
                                                <th class="border-0  p-0 customSearch">
                                                    <input type="date" v-model="startDate" placeholder="Start date"
                                                        class="form-control">
                                                </th>
                                                <th class="border-0 p-0 me-1 customSearch">
                                                    <input type="date" v-model="endDate" placeholder="End date"
                                                        class="form-control">
                                                </th>
                                                <th class="border-0 p-0 me-1 customSearch w-10">
                                                    <select v-model="selectedStatus" class="form-control">
                                                        <option value="">All</option>
                                                        <option value="1">Success</option>
                                                        <option value="2">Unpaid</option>

                                                    </select>
                                                </th>
                                                <th class="border-0  p-0 h-100">
                                                    <button type="button" style="min-width: 90px;" @click="filterData"
                                                        class="btn btn-primary btn-fla"><i
                                                            class="fas fa-search"></i>Search</button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- table section start here  -->
                    <div class="card">
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">

                                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <Loader />
                                </div>

                            </div>
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Transection ID</th>
                                        <th>User info</th>
                                        <th>Currency</th>
                                        <!-- <th>Wallet address</th> -->
                                        <th>Amount</th>
                                        <th>Receiveable amount </th>
                                        <th>Status</th>
                                        <!-- <th>Remarks</th> -->
                                        <th>Date time</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr v-for="item in productdata" :key="item.id">
                                        <td>{{ item.depositID }}</td>
                                        <td>
                                            <p>Name: {{ item.userInfo_1 }}</p>
                                            <p>Cell phone: {{ item.userInfo_2 }}</p>
                                            <p>Email: {{ item.userInfo_3 }}</p>
                                        </td>
                                        <td>USDT</td>
                                        <!-- <td width="100px">{{ item.wallet_address }}</td> -->
                                        <td>${{ item.deposit_amount }}</td>
                                        <td>${{ item.receivable_amount }}</td>
                                        <td>{{ item.status }}</td>
                                        <!-- <td>Payment not received</td> -->
                                        <td>{{ item.deposit_date }}</td>
                                        <td>
                                            <button class="btn w-100 d-block btn-danger btn-sm btn-flat" @click="getDetails(item)"
                                                data-toggle="modal" data-target="#details"><i
                                                    class="far fa-edit"></i>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
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
            </section>
            <!-- /.content -->
        </div>

        <!-- Start Modal  -->
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
                        <form action="">
                            <table class="table">
                                <tr>
                                    <td>Transection ID</td>
                                    <td>{{ orderrow.depositID }}</td>
                                </tr>
                                <tr>
                                    <td>User info</td>
                                    <td>
                                        <p>Name: {{ orderrow.userInfo_1 }}</p>
                                            <p>Cell phone: {{ orderrow.userInfo_2 }}</p>
                                            <p>Email: {{ orderrow.userInfo_3 }}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Currency</td>
                                    <td>
                                        <select name="" id="" class="form-control">
                                            <option value="">USDT</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wallet address</td>
                                    <td>
                                        <input type="text" placeholder="hkj345h3k453h4k5kh3k4jl34j34"
                                            class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>
                                        <input type="text" placeholder="00.00" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Receiveable amount</td>
                                    <td>
                                        <input type="text" placeholder="00.00" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>
                                        <select name="" id="" class="form-control">
                                            <option value="">Unpaid</option>
                                            <option value="">Success</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Remarks</td>
                                    <td>
                                        <textarea name="" id="" cols="30" rows="3" class="form-control">Payment not received</textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date time</td>
                                    <td>
                                        <input type="date" value="2024-06-12T19:30" min="2024-01-07T00:00"
                                            max="2080-06-14T00:00" class="form-control">
                                    </td>
                                </tr>
                            </table>
                            <button type="button" class="btn btn-success w-100">Save and Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
const router = useRouter();
const startDate = ref('');
const endDate = ref('');
const status = ref('');
const selectedStatus = ref('');
definePageMeta({
    middleware: 'is-logged-out',
})

const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);

const searchUserEmail = ref(""); // Add a ref for the search query
const searchOrderId = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query

const orderrow = reactive({
    depositID: '',
    userInfo_1: '',
    userInfo_2: '',
    userInfo_3: '',
    status: '',
    deposit_date: '',
    deposit_amount: '',
    order_date: '',
    receivable_amount:'',
});


const saveData = () => {
    const formData = new FormData();
    formData.append('order_id', orderrow.orderId);
    formData.append('selectedStatus', selectedStatus.value);
    formData.append('status', status.value);
    axios.post('/order/updateOrder', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {

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
    loading.value = true; // Set loading to true
    // Simulate a delay (3 seconds)
    setTimeout(() => {
        // Update orderrow with item details
        orderrow.depositID = item.depositID;
        orderrow.userInfo_1 = item.userInfo_1;
        orderrow.userInfo_2 = item.userInfo_2;
        orderrow.userInfo_3 = item.userInfo_3;
        orderrow.status = item.status;
        orderrow.deposit_date = item.deposit_date;
        orderrow.deposit_amount = item.deposit_amount;
        orderrow.receivable_amount = item.receivable_amount;
        // Set loading to false after the delay
        loading.value = false;
    }, 1000); // 3-second delay
}


//Pagniation with filter
const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/deposit/filterRechargeList`, {
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


const filterData = () => {
    fetchData(1); // Reset to first page when search query changes
};

onMounted(() => {
    fetchData(currentPage.value);
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    startDate.value = today; // Set the default date to today
    endDate.value = today;

});
//orderProcess
</script>
<style>
.customSearch {
    padding-right: 8px !important;
}
</style>
