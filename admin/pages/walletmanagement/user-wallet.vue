<template>
    <title>User Wallet</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>User Wallet</p>
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
            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">

                    <div class="page_top  my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-6">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" class="form-control"
                                                        placeholder="search by name, role  ">
                                                </th>
                                                <th class="border-0 p-0 me-1" style="padding-right: 5px !important;">
                                                    <select name="" id="" class="form-control">
                                                        <option value="" selected disabled>Select status</option>
                                                        <option value="">Active</option>
                                                        <option value="">Inactive</option>
                                                        <option value="">Draft</option>
                                                    </select>
                                                </th>
                                                <th class="border-0  p-0 h-100">
                                                    <button type="button" style="min-width: 90px;"
                                                        class="btn btn-primary btn-fla"><i
                                                            class="fas fa-search"></i>Search</button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </form>
                            </div>
                            <div class="col-md-6 ">
                                <div class="buttonList">
                                    <a href="#" type="button" class="btn btn-primary btn-flat btn-sm"><i
                                            class="fas fa-plus"></i>Add</a>
                                    <button type="button" class="btn btn-danger btn-flat btn-sm"><i
                                            class="fas fa-trash-alt"></i>Delete</button>
                                    <button type="button" class="btn btn-warning btn-flat btn-sm"><i
                                            class="fas fa-trash-alt"></i>Reset</button>

                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- table section start here  -->
                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">

                            </div>
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="checkAll"></th>
                                        <th>User Info</th>
                                        <th>Amount Available</th>
                                        <th>frozen amount</th>
                                        <th>Creation time </th>
                                        <th>Update time </th>
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" class="checkBox">
                                        </td>
                                        <td class="text-left">
                                            <p>Name: test305</p>
                                            <p>Cell phone: None</p>
                                            <p>Email: None</p>
                                            <p class="text-danger">Type: Vertual</p>
                                        </td>
                                        <td>0.00</td>
                                        <td>0.00</td>
                                        <td>11-7-2014 12:12:12</td>
                                        <td>11-7-2014 12:12:12</td>
                                        <td>
                                            <div class="btn-group">
                                                <button class="btn btn-default btn-sm btn-flat" data-toggle="modal"
                                                    data-target="#details" @click="getDetails()"><i
                                                        class="fas fa-eye"></i>Details</button>
                                                <nuxt-link to="/walletmanagement/manual-adjustment"
                                                    class="btn btn-warning btn-sm btn-flat"><i
                                                        class="fas fa-pen"></i>Manual adjustment</nuxt-link>
                                                <button class="btn btn-default btn-sm btn-flat" data-toggle="modal"
                                                    data-target="#history" @click="getHistory()"><i
                                                        class="fas fa-history"></i>history</button>
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
                        <table class="table">
                            <tr>
                                <td class="text-left">User Info</td>
                                <td class="text-left">
                                    <p>Name: test305</p>
                                    <p>Cell phone: None</p>
                                    <p>Email: None</p>
                                    <p class="text-danger">Type: Vertual user</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">Amount Available</td>
                                <td class="text-left">0.00</td>
                            </tr>
                            <tr>
                                <td class="text-left">frozen amount</td>
                                <td class="text-left">0.00</td>
                            </tr>
                            <tr>
                                <td class="text-left">Creation time </td>
                                <td class="text-left">2024-04-11 04:37:58</td>
                            </tr>
                            <tr>
                                <td class="text-left">Update time </td>
                                <td class="text-left">2024-04-11 04:37:58</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- history modal  -->
        <div class="modal fade" id="history" tabindex="-1" role="dialog" aria-labelledby="detailsTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header py-1">
                        <h5 class="modal-title" id="detailsTitle">History</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" id="checkAll"></th>
                                    <th>User Info</th>
                                    <th>business</th>
                                    <th>operate</th>
                                    <th>type</th>
                                    <th>Original amount($)</th>
                                    <th>Operation amount($)</th>
                                    <th>Latest amount($)</th>
                                    <th>Change Description</th>
                                    <th>add time</th>
                                    <th>Operator</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" class="checkBox">
                                    </td>
                                    <td class="text-left">
                                        <p>Name: test305</p>
                                        <p>Cell phone: None</p>
                                        <p>Email: None</p>
                                        <p class="text-danger">Type: Vertual</p>
                                    </td>
                                    <td>withdraw</td>
                                    <td>Increase</td>
                                    <td>efficient</td>
                                    <td>965.72</td>
                                    <td>+50.00 </td>
                                    <td>1015.72</td>
                                    <td>If the withdrawal application fails, the amount will be automatically refunded
                                        [effective amount increased by $50.00]</td>
                                    <td>2024-04-10 08:15:55</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- END Modal  -->
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

// Define a method to handle previewing
const getDetails = () => {
    $('#details').modal('show');
};

const getHistory = () => {
    $('#history').modal('show');
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
