<template>
    <title>Account Details</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Account Details</p>
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
                <div class="container-fluid" v-if="roleId ==1">
                    <div class="page_top  my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-6">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" class="form-control"
                                                        placeholder="Search by email id... ">
                                                </th>
                                                <th class="border-0  p-0 h-100">
                                                    <button type="button" style="min-width: 90px;" @click="filterData"
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
                            <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <Loader />
                                </div>
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th class="text-left">SL</th>
                                        <th class="text-left">UserID</th>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Available Balance</th>
                                        <th class="text-left">Email</th>
                                        <th class="text-left">Password</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr v-for="(pro, index) in productdata" :key="index">
                                        <td class="text-left">{{ index+1 }}</td>
                                        <td class="text-left">{{ pro.id }}</td>
                                        <td class="text-left">{{ pro.name }}</td>
                                        <td class="text-left">${{ pro.available_balance }}</td>
                                        <td class="text-left">{{ pro.email }}</td>
                                        <td class="text-left">{{ pro.show_password }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
                </div>
                <div v-else>
                        Upcomming.....
                </div>
            </section>
            <!-- /.content -->
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

const roleId = ref();

const defaultLoading = async () => {
  try {
    // loading.value = true;
    const response = await axios.post(`/auth/me`);
    console.log("Res:" + response.data.role_id);
    roleId.value = response.data.role_id;
  } catch (error) {
    console.error(error);
  }
}
const fetchData = async (page) => {
    defaultLoading();
    try {
        loading.value = true;
        const response = await axios.get(`/user/checkminusAmount`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchQuery: searchQuery.value, // Pass the search query parameter
                selectedFilter: selectedFilter.value, // Pass the search query parameter
            },
        });
        productdata.value = response.data.data;

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

const filterData = () => {
    fetchData(1); // Reset to first page when search query changes
    defaultLoading();
};
</script>