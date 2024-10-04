<template>
    <title>Partner List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Partner List</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-12 mb-2">
                                    <input type="text" v-model="searchQuery" class="form-control"
                                        placeholder="Search Name" />
                                </div>

                                <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                                    <select v-model="selectedFilter" class="form-control" @change="filterData">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                                    <button @click="filterData()" class="btn btn-primary w-100">Filter</button>
                                </div>
                            </div>

                            <br />

                            <div class="card">
                                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <Loader />
                                </div>
                                <div class="card-body">
                                    <div>
                                        <div class="table-responsive">
                                            <table class="table table-bordered table-striped">
                                                <thead>
                                                <tr>
                                                    <th>SL</th>
                                                    <th>Register Date and Time</th>
                                                    <th>Referral By</th>
                                                    <th>Invite Code</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Register IP</th>
                                                    <th>Login IP</th>
                                                    <th>Last Deposit</th>
                                                    <th>Total Deposit</th>
                                                    <th>Reward</th>
                                                    <th>Last Withdraw</th>
                                                    <th>Total Withdraw</th>
                                                    <th>Expance</th>
                                                    <th>Balance</th>
                                                    <th>Running Number of Order</th>
                                                    <th>Order Amount</th>
                                                    <th>Total Profit</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in partnerData" :key="item.id">
                                                    <td class="text-center">{{ partnerData.length - index }}</td>
                                                    <td>{{ item.created_at }}</td>
                                                    <td class="text-center">{{ item.refby }}</td>
                                                    <td>{{ item.inviteCode }}</td>
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.email }}</td>
                                                    <td>{{ item.phone_number }}</td>
                                                    <td>{{ item.register_ip }} {{ item.lastloginCountry }}</td>
                                                    <td>{{ item.lastloginIp }} {{ item.lastloginCountry }}</td>
                                                    <td class="text-center">${{ item.lastDeposit }}</td>
                                                    <td class="text-center">${{ item.totalDeposit }}</td>
                                                    <td class="text-center">${{ item.reward }}</td>
                                                    <td class="text-center">${{ item.lastWithdraw }}</td>
                                                    <td class="text-center">${{ item.total_withdraw }}</td>
                                                    <td class="text-center">${{ item.expance }}</td>
                                                    <td class="text-center">${{ item.balance }}</td>
                                                    <td class="text-center">${{ item.run_order }}</td>
                                                    <td class="text-center">${{ item.orderAmount }}</td>
                                                    <td class="text-center">${{ item.total_profit }}</td>
                                                    <td>{{ item.status }}</td>
                                                    <td> <center>
                                                            <button type="button"><i class="fas fa-edit"
                                                                    @click="edit(item.id)"></i></button>
                                                            <button type="button"><i class="fas fa-key"
                                                                    @click="changePass(item.id)"></i></button>
                                                        </center></td>
                                                </tr>
                                            </tbody>
                                            <tr>
                                                    <th>SL</th>
                                                    <th>Register Date and Time</th>
                                                    <th>Referral By</th>
                                                    <th>Invite Code</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Register IP</th>
                                                    <th>Login IP</th>
                                                    <th>Last Deposit</th>
                                                    <th>Total Deposit</th>
                                                    <th>Reward</th>
                                                    <th>Last Withdraw</th>
                                                    <th>Total Withdraw</th>
                                                    <th>Expance</th>
                                                    <th>Balance</th>
                                                    <th>Running Number of Order</th>
                                                    <th>Order Amount</th>
                                                    <th>Total Profit</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </table>
                                           

                                        </div>
                                        <br/>



                                        <center>
                                            <div class="pagination" style="text-align: center">
                                                <button :disabled="currentPage === 1"
                                                    @click="fetchData(currentPage - 1)">
                                                    Previous
                                                </button>
                                                <template v-for="pageNumber in displayedPages" :key="pageNumber">
                                                    <button @click="fetchData(pageNumber)">
                                                        {{ pageNumber }}
                                                    </button>
                                                </template>
                                                <button :disabled="currentPage === totalPages"
                                                    @click="fetchData(currentPage + 1)">
                                                    Next
                                                </button>
                                            </div>
                                        </center>
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
    title: 'Profile' // Set your desired page title here

})
const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const partnerData = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query

const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/allpartners`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchQuery: searchQuery.value, // Pass the search query parameter
                selectedFilter: selectedFilter.value, // Pass the search query parameter
            },
        });
        partnerData.value = response.data.data;
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
        path: '/user/useredit',
        query: {
            parameter: id
        }
    });
    // Your logic for editing goes here
    console.log('Editing item with id:', id);
};



// Define a method to handle editing
const changePass = (id) => {

    router.push({
        path: '/user/changePassword',
        query: {
            parameter: id
        }
    });
    // Your logic for editing goes here
    console.log('Change Password id:', id);
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
    white-space: nowrap;
}

tr:hover {
    background-color: rgb(221, 221, 221);
}

th,
td {
    white-space: nowrap;
}
th:nth-child(1) {
        background-color: #ff9999;
    }
    th:nth-child(2) {
        background-color: #99ccff;
    }
    th:nth-child(3) {
        background-color: #ffcc99;
    }
    th:nth-child(4) {
        background-color: #99ff99;
    }
    th:nth-child(5) {
        background-color: #ff99ff;
    }
    th:nth-child(6) {
        background-color: #ccff99;
    }
    th:nth-child(7) {
        background-color: #99ffff;
    }
    th:nth-child(8) {
        background-color: #ffff99;
    }
    th:nth-child(9) {
        background-color: #ff99cc;
    }
    th:nth-child(10) {
        background-color: #99ffcc;
    }
    th:nth-child(11) {
        background-color: #cc99ff;
    }
    th:nth-child(12) {
        background-color: #ffccff;
    }
    th:nth-child(13) {
        background-color: #ffcc66;
    }
    th:nth-child(14) {
        background-color: #66cccc;
    }
    th:nth-child(15) {
        background-color: #cc66cc;
    }
    th:nth-child(16) {
        background-color: #99cc66;
    }
    th:nth-child(17) {
        background-color: #6699cc;
    }
    th:nth-child(18) {
        background-color: #cc6699;
    }
    th:nth-child(19) {
        background-color: #66cc99;
    }
    th:nth-child(20) {
        background-color: #cc9966;
    }
    
</style>
