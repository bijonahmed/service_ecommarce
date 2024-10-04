<template>
    <title>Configuration Management</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Configuration Management</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/walletmanagement/wallet">Back to wallet</LazyNuxtLink>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-header">

                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="form-group mb-2">
                                            <label for="">Enable recharge </label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="Yes" name="recharge" checked>
                                                    <label for="Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="No" name="recharge">
                                                    <label for="No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">Modify user account balance password</label>
                                            <input type="text" placeholder="Modify user account balance password"
                                                class="form-control">
                                        </div>

                                        <div class="bg-warning message  p-2 mt-2 mb-3">
                                            <p>1. This password can only be modified by super administrators.</p>
                                            <p>2. In user wallet management, you need to enter this password when
                                                modifying the user's wallet balance.</p>
                                            <p>3. Leave blank to make no changes.</p>
                                        </div>

                                        <div class="form-group mb-2">
                                            <label for="">Opening withdrawal application </label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="application_Yes" name="application" checked>
                                                    <label for="application_Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="application_No" name="application">
                                                    <label for="application_No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">Turn on the automatic renewal of the operation package </label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="renewal_Yes" name="renewal">
                                                    <label for="renewal_Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="renewal_No" name="renewal" checked>
                                                    <label for="renewal_No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">When turning on withdrawals, the condition verification of whether [total amount of orders completed] is greater than [recharge amount]</label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="verification_Yes" name="verification" checked>
                                                    <label for="verification_Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="verification_No" name="verification">
                                                    <label for="verification_No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">Turn on withdrawal restrictions [need to keep at least $100 operating funds] </label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="restrictions_Yes" name="restrictions">
                                                    <label for="restrictions_Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="restrictions_No" name="restrictions" checked>
                                                    <label for="restrictions_No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">Turning on automatic payment orders </label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="orders_Yes" name="orders" checked>
                                                    <label for="orders_Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="orders_No" name="orders">
                                                    <label for="orders_No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">24 hours after changing the new address.</label>
                                            <div class="d-flex">
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="changing_Yes" name="changing">
                                                    <label for="changing_Yes" class="m-0">Yes</label>
                                                </div>
                                                <div class="d-flex align-items-center ml-2">
                                                    <input type="radio" id="changing_No" name="changing" checked>
                                                    <label for="changing_No" class="m-0">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for=""> The minimum withdrawal amount <span
                                                    class="f-sm text-danger">(is unlimited by default)</span> </label>
                                            <input type="text" placeholder=" The minimum withdrawal amount is unlimited by default" class="form-control">
                                        </div>
                                        <div class="bg-warning message  p-2 mt-2 mb-3">
                                            <p>For example, if 100 is set, the available balance in the user account must meet $100 before a withdrawal application can be initiated.</p>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">Withdrawal fee <span
                                                    class="f-sm text-danger">(defaults to 0)</span> </label>
                                            <input type="text" placeholder=" " class="form-control">
                                        </div>
                                        <div class="bg-warning message  p-2 mt-2 mb-3">
                                            <p>For example, if setting 5, the user withdraws 100, he will finally get 100*(1-5%) = 95</p>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="">The order transaction fee rate <span
                                                    class="f-sm text-danger">(defaults to 0)</span> </label>
                                            <input type="text" placeholder=" " class="form-control">
                                        </div>
                                        <div class="bg-warning message  p-2 mt-2 mb-3">
                                            <p>For example, if you set 5 and the order profit is $10, you will finally get 10* (1-5%) = 9.5.</p>
                                        </div>
                                        <button type="submit" class="btn-primary w-100">Save</button>

                                    </div>
                                </div>
                            </form>
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
