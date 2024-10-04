<template>
    <title>Recepient bank management</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Recepient bank management</p>
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

<div class="page_top  my-2">
    <div class="row justify-content-between align-items-center my-2">
        <div class="col-md-6">
            <form action="">
                <table class="table mb-0">
                    <thead>
                        <tr>
                            <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                <input type="text" class="form-control"
                                    placeholder="search by name ">
                            </th>
                            <th class="border-0  p-0 h-100">
                                <button type="button" style="min-width: 90px;"
                                    class="btn btn-primary w-100 btn-fla"><i
                                        class="fas fa-search"></i>Search</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
        <div class="col-md-6 ">
            <div class="buttonList">
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
                    <th>Alias</th>
                    <th>nation</th>
                    <th>Bank name</th>
                    <th> Whether to enable</th>
                    <th> Branch/USDT coin network</th>
                    <th> Card number/USDT payment address</th>
                    <th> exchange rate</th>
                    <th>action</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" class="checkBox">
                    </td>
                    <td>Brazil </td>
                    <td>Brazil</td>
                    <td></td>
                    <td> PIX</td>
                    <td> TJBA</td>
                    <td> 99999999999</td>
                    <td>4.85</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-default btn-sm btn-flat" data-toggle="modal"
                                data-target="#details"><i class="fas fa-eye"></i>Details</button>
                            <a class="btn btn-danger btn-sm btn-flat"><i
                                    class="fas fa-trash-alt"></i>Delete</a><button
                                class="btn btn-default btn-sm btn-flat" ><i
                                    class="fas fa-pen"></i>Edit</button>
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
