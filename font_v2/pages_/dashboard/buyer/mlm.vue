<template>
    <title>Community</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">
                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <ProgressbarLoader />
                </div>
                <section class="breadcumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                                        <a href="#">Community</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                    <div class="share-save-widget d-flex align-items-center">
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Start Profile -->
                <div class="container">
                    <ReferralLink />
                </div>

                <div class="container mt-5">
                    <h4 class="mb-4">Referral Commission</h4>
                    <p>Total Users: {{ uniqueUserCount }}<br /> Amount : ${{ totalAmount }}</p>
                </div>



                <div class="container">
                    <button @click="fetchUserLevels" class="d-none">Call</button>
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

                </div>
            </div>
        </div>
        <!-- Modal Template -->

        <Footer />
    </body>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const router = useRouter();
const categoryData = ref([]);
const comissionData = ref([]);
const loading = ref(false);
const route = useRoute();
const sumAmount = ref(0);
definePageMeta({
    middleware: "is-logged-out",
});

const levelData = ref([]);

const getRefferalCommission = async () => {
    loading.value = true;
    try {
        const response = await axios.get("/order/referralCommission");
        comissionData.value = response.data.data;
        sumAmount.value = response.data.sumAmount;
    } catch (err) {
        console.log(err)
    } finally {
        loading.value = false;
    }
};


const allUsers = ref([]);
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

const fetchUserLevels = async () => {
    loading.value = true;
    const email = 'test50@gmail.com';
    try {
        const response = await axios.get("/user/checkLevelHistorys", {
            params: { email },
        });

        for (const level in response.data) {
            allUsers.value.push(...response.data[level]);
        }
    } catch (err) {
        console.log(err);
    } finally {
        loading.value = false;
    }
};

 
// Computed property to calculate the total amount
const totalAmount = computed(() => {
    const sum = allUsers.value.reduce((sum, user) => {
        const userAmount = parseFloat(user.amount) || 0;
        return sum + userAmount;
    }, 0);

    // Fix the precision to 2 decimal places if needed
    return parseFloat(sum.toFixed(2));
});

onMounted(() => {
    fetchUserLevels();
    getRefferalCommission();
   

});

</script>

<style scoped>
/* New */

h4 {
    color: #333;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

p {
    font-size: 16px;
    color: #555;
    text-align: center;
    font-weight: 500;
}

.table {
    margin-top: 20px;
    border-radius: 8px;
    overflow: hidden;
}

.table th {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 12px;
}

.table td {
    text-align: center;
    padding: 10px;
    vertical-align: middle;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f8f9fa;
}

.table-striped tbody tr:hover {
    background-color: #e9ecef;
    transition: 0.3s ease-in-out;
}

.text-center {
    font-weight: bold;
    color: #dc3545;
}

.button {
    display: block;
    width: 100%;
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #0056b3;
}

/* END */
.table {
    margin-top: 20px;
}

.level-section {
    margin-bottom: 20px;
}

.preview-image {
    max-width: 300px;
    max-height: 300px;
    margin-top: 10px;
    border: 2px solid #ddd;
}

.body_content {
    padding: 100px;
}

@media (max-width: 991.98px) {
    .body_content {
        padding: 20px 20px 150px;
    }
}

@media (max-width: 575.98px) {
    .body_content {
        padding: 20px 10px;
    }
}

.categories_list_section {
    border-bottom: 1px solid #E9E9E9;
    padding: 7px 0 3px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>