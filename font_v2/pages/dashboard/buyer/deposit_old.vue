<template>
    <title>Deposit</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <br />
            <div class="body_content">
                <div class="container my-5">
                    <section class="breadcrumb-section">
                        <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <div class="breadcrumb-list">
                                <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link> /
                                <span>Deposit</span>
                            </div>
                            <nuxt-link to="/dashboard/buyer/welcome" class="back-link">Back</nuxt-link>
                        </div>
                    </section>

                    <!-- Tab Navigation -->
                    <ul class="nav nav-pills mt-4" id="paymentTabs" role="tablist" @click="getStripPaymentList">
                        <li class="nav-item">
                            <a class="nav-link active" id="stripe-tab" data-bs-toggle="pill" href="#stripe"
                                role="tab">Fiat</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="stripe-tab" data-bs-toggle="pill" href="#paypal"
                                role="tab">Paypal</a>
                        </li>
                        <li class="nav-item" @click="getusdtDeposit">
                            <a class="nav-link" id="usdt-tab" data-bs-toggle="pill" href="#usdt" role="tab">USDT</a>
                        </li>
                    </ul>

                    <div class="loading-indicator" v-if="processing" style="text-align: center;">
                        <ProgressbarLoader />
                    </div>
                    <!-- Tab Content -->
                    <div class="tab-content mt-3">
                        <!-- Stripe Payment -->
                        <div class="tab-pane fade show active" id="stripe">
                            <form @submit.prevent="handlePayment">
                                <label for="stripeAmount">Deposit Amount</label>
                                <input type="number" id="stripeAmount" v-model="amount" class="form-control"
                                    placeholder="Enter amount" @keypress="validateKeyPress" />
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Pay with Stripe
                                </button>


                            </form>

                            <!-- Modal for Error Message -->
                            <div v-if="showModal" class="modal-overlay">
                                <div class="modal-content">
                                    <p>{{ errorMessage }}</p>
                                    <button @click="showModal = false">Close</button>
                                </div>
                            </div>

                            <!-- Pay by card -->

                            <!-- Strip table  -->

                            <div class="container">
                                <center>
                                    <div v-if="loading" class="loader">Loading...</div>
                                </center>
                                <h4 class="mb-3">Payment List ({{ depositstripeDataCount }})</h4>
                                <div class="table-responsive" v-if="!loading">
                                    <table class="table table-bordered table-striped table-hover">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>Deposit ID</th>
                                                <th class="text-center">Currency</th>
                                                <th class="text-center">Deposit Amount</th>
                                                <th class="text-center">Payment Status</th>
                                                <th class="text-center">Created Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(deposit, index) in depositstripeData" :key="index">
                                                <td>{{ deposit.depositID }}</td>
                                                <td class="text-center">{{ deposit.currency }}</td>
                                                <td class="text-center">{{ deposit.deposit_amount }}</td>
                                                <td :class="{
                                                    'text-success': deposit.payment_status === 'succeeded',
                                                    'text-danger': deposit.payment_status === 'failed',
                                                    'text-warning': deposit.payment_status === 'pending'
                                                }" class="text-center">
                                                    {{ deposit.payment_status }}</td>
                                                <td class="text-center">{{ deposit.createdate }}</td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <!-- End Table -->

                        </div>

                        <div class="tab-pane fade" id="paypal">
                                <h1>Paypal....</h1>


                        </div>

                        <!-- USDT Payment -->
                        <div class="tab-pane fade" id="usdt">
                            <form @submit.prevent="usdthandlePayment">
                                <label for="usdtAmount">Deposit Amount</label>
                                <input type="number" id="usdtAmount" class="form-control" v-model="amount"
                                    placeholder="Enter amount" @keypress="validateKeyPress">
                                <small v-if="errors.deposit_amount" class="text-danger">
                                    {{ errors.deposit_amount[0] }}
                                </small>
                                <button type="submit" class="btn btn-primary w-100 mt-3"> Pay with USDT</button>
                            </form>
                            <h4 class="mb-3">USDT List ({{ depositusdtDataCount }})</h4>
                            <div class="table-responsive" v-if="!loading">
                                <table class="table table-bordered table-striped table-hover">
                                    <thead class="table-dark">
                                        <tr>
                                            <th>Deposit ID</th>
                                            <th class="text-center">Payment Type</th>
                                            <th class="text-center">Deposit Amount</th>
                                            <th class="text-center">Payment Status</th>
                                            <th class="text-center">Created Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(deposit, index) in depositusdtData" :key="index">
                                            <td>{{ deposit.depositID }}</td>
                                            <td class="text-center">Crypto</td>
                                            <td class="text-center">{{ deposit.deposit_amount }}</td>
                                            <td :class="{
                                                'text-success': deposit.status == '1',
                                                'text-danger': deposit.status == '2',
                                                'text-warning': deposit.status == '0'
                                            }" class="text-center">
                                                {{ getStatusText(deposit.status) }}
                                            </td>
                                            <td class="text-center">{{ deposit.createdate }}</td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Template -->
        </div>
        <Footer />
    </body>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();

definePageMeta({
    middleware: "is-logged-out",
});

const errors = ref({});

const depositstripeData = ref([]);
const depositusdtData = ref([]);

const amount = ref("");
const depositstripeDataCount = ref(0);
const depositusdtDataCount = ref(0);

const showModal = ref(false);
const errorMessage = ref('');

const processing = ref(false);
// Function to show modal with error message
function showErrorModal(message) {
    errorMessage.value = message;
    showModal.value = true;
}

const validateKeyPress = (event) => {
    // Allow only numeric input (key codes for 0-9)
    if (event.charCode < 48 || event.charCode > 57) {
        event.preventDefault(); // Prevent any non-numeric character
    }
};


const handlePayment = async () => {
    const amountValue = parseFloat(amount.value); // Convert input to a number
    // Check if the value is not a number or less than the minimum amount
    if (isNaN(amountValue) || amountValue < 0.50) {
        // Show modal with error message
        showErrorModal("Minimum amount required is $0.50 and it cannot be zero or a string.");
        return;
    }
    processing.value = true;

    try {
        const response = await axios.post('/deposit/create-payment-intent', {
            amount: parseFloat(amount.value),
            product: 'Custom Payment', // You can change this dynamically
            success_url: window.location.origin + "/success", // ✅ Redirect frontend
            cancel_url: window.location.origin + "/cancel", // ✅ Redirect frontend
        }, {
            headers: { 'Content-Type': 'application/json' } // Headers are optional in Axios
        });

        if (response.data.checkout_url) {
            window.location.href = response.data.checkout_url; // Redirect to Stripe checkout
        } else {
            alert('Failed to initiate checkout.');
        }

    } catch (error) {
        console.error(error);
        alert('Payment failed. Please try again.');
    }

    processing.value = false;
};



const usdthandlePayment = async () => {
    errors.value = {}; // Clear previous errors

    try {
        const response = await axios.post("/deposit/sendRequesUsdtPayment", {
            deposit_amount: amount.value, // Ensure correct key name matches Laravel validation
        });

        Swal.fire({
            title: "Success!",
            text: "Payment successful.",
            icon: "success",
            confirmButtonText: "OK",
        });

        amount.value = ""; // Reset input field on success
        getusdtDeposit();

    } catch (error) {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors; // Store validation errors
        } else {
            console.error("An error occurred:", error);
            Swal.fire({
                title: "Error!",
                text: "There was an error processing your payment. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    }
};

const getStatusText = (status) => {
        if (status == '1') return "succeeded";
        if (status == 2) return "cancel";
        if (status == 0) return "Pending";
        return "Pending"; // Default for status == 0
    }
const getStripPaymentList = async () => {

    try {
        loading.value = true;
        const response = await axios.get(`/deposit/getUserStripDepositList`);
        depositstripeData.value = response.data.data;
        depositstripeDataCount.value = response.data.trans_count;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false; // Hide the loader once data is fetched
    }
};

const getusdtDeposit = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/deposit/getUserUsdtDepositList`);
        depositusdtData.value = response.data.data;
        depositusdtDataCount.value = response.data.trans_count;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false; // Hide the loader once data is fetched
    }
};

onMounted(async () => {
    getusdtDeposit();
    getStripPaymentList();
});


</script>

<style scoped>
.text-danger {
    color: red;
    font-size: 14px;
}

.loader {
    text-align: center;
    font-size: 20px;
    color: #007bff;
}

form {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
}

input {
    border-radius: 8px;
    padding: 10px;
}

button {
    border-radius: 8px;
}

@media (max-width: 576px) {
    .breadcrumb-section {
        flex-direction: column;
        align-items: flex-start;
        margin-top: -50px;
    }

    .breadcrumb-list {
        margin-bottom: 5px;
    }
}

/* Breadcrumb Styling */
.breadcrumb-section {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
}

.breadcrumb-list a {
    color: #007bff;
    text-decoration: none;
}

.breadcrumb-list span {
    color: #555;
}

.back-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
}

/* Tab Styling */
.nav-pills {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.nav-pills .nav-link {
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 8px;
    color: #007bff;
    background: #f8f9fa;
}

.nav-pills .nav-link.active {
    background: #007bff;
    color: white;
}

/* Form Styling */
form {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

label {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 5px;
}

.form-control {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

.btn-primary {
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    background: #007bff;
    border: none;
}

.btn-primary:hover {
    background: #0056b3;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    /* Horizontally center the modal */
    align-items: center;
    /* Vertically center the modal */
    z-index: 9999;
    /* Ensure modal stays above other content */
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    /* Set a fixed width for modal */
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    /* Add some shadow for depth */
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}
</style>