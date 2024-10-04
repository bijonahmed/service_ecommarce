<template>
    <title>Affiliate Report</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header" style="margin-bottom: -25px;">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Affiliate Report</p>
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
                    <div class="page_top my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col-lg-6 col-md-8 col-sm-12 mb-2">
                                        <input type="text" v-model="searchQuery" class="form-control"
                                            placeholder="Search by email..." />
                                    </div>


                                    <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                                        <button @click="filterData()" class="btn btn-primary w-100">
                                            Filter
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- table section start here  -->
                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">
                                <div class="loading-indicator" v-if="loading" style="text-align: center">
                                    <Loader />
                                </div>
                            </div>

                            <UserLevels :user-email="u_details_email" />

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

import Swal from "sweetalert2";

definePageMeta({
    middleware: "is-logged-out",
});

const router = useRouter();
const searchQuery = ref(""); 
const u_details_email = ref(""); 

// Function to assign searchQuery value to u_details_email
const filterData = async () => {
    // Assign the value properly using .value
    u_details_email.value = searchQuery.value; 
};

</script>


<style>

/* Table */
.table-wrapper {
    width: 100%;
    /* max-width: 500px; */
    overflow-x: auto;
}

.table td,
.table th {
    padding: 0.2rem;
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