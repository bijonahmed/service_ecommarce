<template>
    <title>Wallet</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Wallet</p>
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
            <section class="content">
                <div class="container-fluid">

                    <div class="bg-warning p-2 mt-2 message mb-3" bis_skin_checked="1">
                        <p>1. A user wallet is added by default when a user registers, or a user wallet is automatically
                            added when the user visits the wallet page.</p>
                        <p>2. To apply for withdrawal, you need to bind your mobile phone or email address for
                            withdrawal verification</p>
                        <p>3. To process the withdrawal, you need to make the payment according to the withdrawal
                            information filled in by the user, and then operate the payment status and remarks</p>
                    </div>

                    <div class="card">
                        <div class="card-header py-1 ">
                            <div class="d-flex align-items-center justify-content-between">
                                <p>Basic data </p>
                                <nuxt-link to="/walletmanagement/config-management"><i class="fas fa-pen"></i>Edit</nuxt-link>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="basic_data_container">
                                <div class="data_box">
                                    <h6>Start recharge</h6>
                                    <p>yes</p>
                                </div>
                                <div class="data_box">
                                    <h6>Modify user account balance password</h6>
                                    <p>Has been set </p>
                                </div>
                                <div class="data_box">
                                    <h6>Open withdrawal application</h6>
                                    <p>yes</p>
                                </div>
                                <div class="data_box">
                                    <h6>Turn on automatic renewal of operation package </h6>
                                    <p>no</p>
                                </div>
                                <div class="data_box">
                                    <h6>Verify whether the [total amount of completed orders] is greater than [90% of
                                        the first recharge amount] when opening withdrawals</h6>
                                    <p>Yes</p>
                                </div>
                                <div class="data_box">
                                    <h6>Enable withdrawal restrictions [need to reserve at least $100 operating funds]
                                    </h6>
                                    <p>no </p>
                                </div>
                                <div class="data_box">
                                    <h6>Enable automatic payment orders</h6>
                                    <p>no</p>
                                </div>
                                <div class="data_box">
                                    <h6>Withdrawals can only be made after 24 hours after changing the new address.</h6>
                                    <p>no</p>
                                </div>
                                <div class="data_box">
                                    <h6>Minimum amount to withdraw</h6>
                                    <p>Minimum: $20</p>
                                </div>
                                <div class="data_box">
                                    <h6>Withdrawal fee ratio</h6>
                                    <p>1%</p>
                                </div>
                                <div class="data_box">
                                    <h6>Order transaction fee final profit = order profit * (1-transaction fee)</h6>
                                    <p>17%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Manage 
                        </div>
                        <div class="card-body">
                            <div class="info_container">
                                <div class="manage_box">
                                    <div class="mTop">
                                        <h1>Total number of wallets</h1>
                                        <p>User 35</p>
                                    </div>
                                    <h2>35</h2>
                                    <div class="mbottom">
                                        <div>
                                            <p>Yesterday: 1</p>
                                            <p>Today 0</p>
                                        </div>
                                        <!-- <a href="#" class="btn btn-default btn-sm">manage </a> -->
                                    </div>
                                </div>
                                <div class="manage_box">
                                    <div class="mTop">
                                        <h1>Total number of wallets</h1>
                                        <p>User 35</p>
                                    </div>
                                    <h2>35</h2>
                                    <div class="mbottom">
                                        <div>
                                            <p>Yesterday: 1</p>
                                            <p>Today 0</p>
                                        </div>
                                        <!-- <a href="#" class="btn btn-default btn-sm">manage </a> -->
                                    </div>
                                </div>
                                <div class="manage_box">
                                    <div class="mTop">
                                        <h1>Total number of wallets</h1>
                                        <p>User 35</p>
                                    </div>
                                    <h2>35</h2>
                                    <div class="mbottom">
                                        <div>
                                            <p>Yesterday: 1</p>
                                            <p>Today 0</p>
                                        </div>
                                        <!-- <a href="#" class="btn btn-default btn-sm">manage </a> -->
                                    </div>
                                </div>
                                <div class="manage_box">
                                    <div class="mTop">
                                        <h1>Total number of wallets</h1>
                                        <p>User 35</p>
                                    </div>
                                    <h2>35</h2>
                                    <div class="mbottom">
                                        <div>
                                            <p>Yesterday: 1</p>
                                            <p>Today 0</p>
                                        </div>
                                        <!-- <a href="#" class="btn btn-default btn-sm">manage </a> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";

definePageMeta({
    middleware: 'is-logged-out',
})

const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query

const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/product/getProductList`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchQuery: searchQuery.value, // Pass the search query parameter
                selectedFilter: selectedFilter.value, // Pass the search query parameter
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

onMounted(() => {
    fetchData(currentPage.value);
});

// Watch for changes in current page and fetch data accordingly
watch(currentPage, (newPage) => {
    fetchData(newPage);
});

// Define a method to handle editing
const edit = (id) => {

    router.push({
        path: '/products/edit',
        query: {
            parameter: id
        }
    });

    // Your logic for editing goes here
    console.log('Editing item with id:', id);
};

// Define a method to handle deleting
const deleteProduct = (id) => {
    // Your logic for deleting goes here
    console.log('Deleting item with id:', id);
};

// Define a method to handle previewing
const preview = (id) => {
    router.push({
        path: '/products/preview',
        query: {
            parameter: id
        }
    });
    console.log('Previewing item with id:', id);
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


const filterData = () => {
    fetchData(1); // Reset to first page when search query changes
};
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
</style>
