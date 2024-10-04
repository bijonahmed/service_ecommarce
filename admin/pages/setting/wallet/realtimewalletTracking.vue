<template>
    <title>Real Time Wallet Tracking List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Real Time Wallet Tracking List</p>
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
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-lg-10 col-md-10 col-sm-12 mb-2">
                                    <input type="text" v-model="searchQuery" class="form-control"
                                        placeholder="Search Wallet Address..." />
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
                                            <table class="table w-100 table-wrapper">
                                                <thead>
                                                    <tr>
                                                        <th class="text-left">Wallet</th>
                                                        <th class="text-left">User Email</th>
                                                        <th class="text-center">Created Time</th>
                                                        <th class="text-center">Status</th>
                                                        <th class="text-center">Unlock</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in productdata" :key="item.id">
                                                        <td class="text-left">{{ item.wallet_address }}</td>
                                                        <td class="text-left">{{ item.email }}</td>
                                                        <td class="text-center">{{ item.created_at }}</td>
                                                        <td class="text-center">Lock</td>
                                                        <td>
                                                            <center>
                                                                <button type="button"><i class="fas fa-edit"
                                                                        @click="edit(item.id, item.wallet_address)"></i></button>
                                                            </center>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th class="text-left">Wallet</th>
                                                        <th class="text-center">User Email</th>
                                                        <th class="text-center">Created Time</th>
                                                        <th class="text-center">Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
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
import Swal from "sweetalert2";
definePageMeta({
    middleware: 'is-logged-out',
    title: 'Profile' // Set your desired page title here

})
const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 20;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query
const selectedFilterLock = ref(); // Add a ref for the search query

const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/setting/getUsersRealTimeWalletAddress`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchQuery: searchQuery.value, // Pass the search query parameter
                selectedFilter: selectedFilter.value, // Pass the search query parameter
                selectedFilterLock: selectedFilterLock.value, // Pass the search query parameter
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
const edit = (id, wallet_address) => {

    Swal.fire({
        title: "Are you sure?",
        text: "Unlock wallet address ? " + wallet_address,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Unlock!"
    }).then((result) => {
        if (result.isConfirmed) {
            const response = axios.get(`/setting/updateUserwalletAddress`, {
                params: {
                    id: id,
                },
            });

            filterData();

            Swal.fire({
                title: "Unlock!",
                text: "Wallet address successfully unlock.",
                icon: "success"
            });
        }
    });

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

.primary {
    background-color: rgb(207, 8, 8);
    color: white;

}

.danger {
    background-color: green;
}
</style>
