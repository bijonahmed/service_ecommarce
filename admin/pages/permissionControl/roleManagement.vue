<template>
    <title>Role Management</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Role Management</p>
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
                    <div class="page_top  my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-6">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" class="form-control" placeholder="Search by role"
                                                        v-model="searchQuery">
                                                </th>
                                                <th class="border-0 p-0 me-1" style="padding-right: 5px !important;">
                                                    <select name="" id="" class="form-control" v-model="selectedFilter"
                                                        @change="filterData">
                                                        <option value="" selected disabled>Select status</option>
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
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
                            <div class="col-md-6 ">
                                <div class="buttonList">
                                    <LazyNuxtLink to="/permissionControl/add-role" type="button" class="btn btn-primary btn-flat btn-sm"><i
                                            class="fas fa-plus"></i>Add</LazyNuxtLink>

                                    <button type="button" class="btn btn-danger btn-flat btn-sm"><i
                                            class="fas fa-trash-alt"></i>Delete</button>
                                    <button type="button" class="btn btn-warning btn-flat btn-sm"><i
                                            class="fas fa-trash-alt"></i>Reset</button>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                <Loader />
                            </div>
                            <table class="table w-100 table-wrapper">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="checkAll"></th>
                                        <th>Role</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Creation Time</th>
                                        <th class="text-center">Update Time</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="item in productdata" :key="item.id">
                                        <td><input type="checkbox" class="checkBox"></td>
                                        <td>{{ item.name }}</td>
                                        <td class="text-center">{{ item.status }}</td>
                                        <td>{{ item.created_at }}</td>
                                        <td>{{ item.updated_at }}</td>
                                        <td>
                                            <div class="btn-group">
                                                <button class="btn btn-warning btn-sm btn-flat" @click="edit(item.id)"><i class="fas fa-pen"
                                                        ></i>Edit</button>
                                                <button class="btn btn-danger btn-sm btn-flat"><i
                                                        class="fas fa-trash-alt"></i>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <center><input type="checkbox" id="checkAll"></center>
                                        </th>
                                        <th>
                                            <center>Role</center>
                                        </th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Creation Time</th>
                                        <th class="text-center">Update Time</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </tfoot>
                            </table>

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
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
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
        const response = await axios.get(`/user/getRoleList`, {
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
        path: '/permissionControl/ruleedit',
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
    font-size: 15px;
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
