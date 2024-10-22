<template>
    <title>MLM Report</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header" style="margin-bottom: -25px;">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>MLM Report</p>
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
                                        <button type="button" @click="fetchUserLevels()" class="btn btn-primary w-100">
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
                            <h4 class="mb-4">Referral Commission</h4>
                            <p>Total Users: {{ uniqueUserCount }}<br /> Amount : ${{ totalAmount }}</p>

                            <div class="container mt-5">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Register Date</th>
                                    <th>Name</th>
                                    <th>Commission</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Loop through all users across levels -->
                                <tr v-for="(user, index) in allUsers" :key="user.id">
                                    <td>{{ index + 1 }}</td> <!-- Serial number starts from 1 -->
                                    <td>{{ user.created_at }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>${{ user.amount }}</td> <!-- Placeholder for commission -->
                                </tr>
                                <tr v-if="allUsers.length === 0">
                                    <td colspan="4" class="text-center">No users found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                            <!-- <p v-if="totalCommission">Total Users: ${{ totalCommission }}</p> -->
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
const loading = ref(false);
const error = ref([]);
const storeData = ref([]);


const allUsers = ref([]);

// List of colors to cycle through for different groups
const colors = [
    '#f2f2f2', '#d1e7dd', '#f8d7da', '#cfe2ff', '#fefefe',
    '#ffebcc', '#e6ccff', '#ffcccc', '#ccffcc', '#ffccff',
    '#cceeff', '#ff99cc', '#ccff99', '#99ccff', '#ff9966',
    '#ffcc99', '#ccccff', '#99ffcc', '#ffcc00', '#ccff00',
    '#00ffcc', '#ff0066', '#cc00ff', '#66ff99', '#ff66cc',
    '#66ccff', '#ff6699', '#cccc66', '#66ffcc', '#ff3366',
    '#cc3366', '#ff66ff', '#cc6699', '#ff9933', '#66ff00',
    '#99ff00', '#ff3300', '#ff99ff', '#ff3399', '#00ccff',
    '#ff0033', '#ccff33', '#ffcc33', '#33ff66', '#9933ff',
    '#3399ff', '#33ccff', '#ff6633', '#33ffcc', '#66cc99'
];
// Define a computed property for unique users
const uniqueUsers = computed(() => {
    const uniqueIds = new Set();
    return allUsers.value.filter(user => {
        if (uniqueIds.has(user.id)) {
            return false; // Skip if ID is already in the Set
        }
        uniqueIds.add(user.id);
        return true; // Include this user
    });
});

// Define a computed property for the count of unique users
const uniqueUserCount = computed(() => uniqueUsers.value.length);
// Function to return a color based on the orderId group
const getOrderGroupColor = (orderId) => {
    const uniqueOrderIds = Array.from(new Set(storeData.value.map(user => user.orderId)));
    const colorIndex = uniqueOrderIds.indexOf(orderId) % colors.length; // Cycle through colors
    return colors[colorIndex];
};


// Function to assign searchQuery value to u_details_email

const fetchUserLevels = async () => {
    loading.value = true;
  
    const email = searchQuery.value
    try {
        const response = await axios.get("/user/checkLevelHistorysAdmin", {
            params: { email },
        });
 // Clear the array before pushing new data
 allUsers.value = [];
        for (const level in response.data) {
            allUsers.value.push(...response.data[level]);
        }
      
    } catch (err) {
        console.log(err);
    } finally {
        loading.value = false;
    }
};

// Computed property to calculate the total commission
 
// Computed property to calculate the total amount
const totalAmount = computed(() => {
  return allUsers.value.reduce((sum, user) => sum + (user.amount || 0), 0);
});
onMounted(() => {
    fetchUserLevels();
});
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