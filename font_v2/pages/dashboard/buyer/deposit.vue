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
                    <ul class="nav nav-pills mt-4" id="paymentTabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="stripe-tab" data-bs-toggle="pill" href="#stripe"
                                role="tab">Stripe</a>
                        </li>
                        <li class="nav-item">
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
                                    placeholder="Enter amount" />
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

                        </div>

                        <!-- USDT Payment -->
                        <div class="tab-pane fade" id="usdt">
                            <form>
                                <label for="usdtAmount">Deposit Amount</label>
                                <input type="number" id="usdtAmount" class="form-control" placeholder="Enter amount">
                                <button type="submit" class="btn btn-primary w-100 mt-3">Submit</button>
                            </form>
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
const DepositData = ref([]);

const stripe = ref(null);
const amount = ref(0);
const showModal = ref(false);
const errorMessage = ref('');

//const stripePromise = loadStripe('pk_test_51QtCfx2NiQK26ALV6xsuIWwSRB8Fv5oewtOHwcQL9irvDL5U2kTryDxLtbnSE73dimjgVQGKUB1aUhMKGal4O96k00QZMyKfJm'); // Replace with your actual key
const processing = ref(false);
// Function to show modal with error message
function showErrorModal(message) {
    errorMessage.value = message;
    showModal.value = true;
}


const sendHandleWebhook = async () => {

    try {
        const response = await axios.post('/deposit/handleWebhook', {

            product: 'Custom Payment', // You can change this dynamically
        }, {
            headers: { 'Content-Type': 'application/json' } // Headers are optional in Axios
        });

        console.log("Response:" + response.data);

    } catch (error) {
        console.error(error);
        alert('Payment failed. Please try again.');
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


/*
const handlePayment = async () => {
    if (!amount.value || amount.value < 0.50) { // Ensure at least $0.50 for USD
    alert('Minimum amount required is $0.50');
    return;
  }

    processing.value = true;

    const response = await axios.post('/deposit/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount.value }),
    });

    const { clientSecret } = await response.json();

    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
        sessionId: clientSecret,
    });

    if (result.error) {
        console.error(result.error.message);
    }

    processing.value = false;
};
*/

const handleSubmit = async () => {
    if (!selectedPayment.value) {
        alert('Please select a payment option.');
        return;
    }

    const numericAmount = parseFloat(amount.value);
    if (isNaN(numericAmount) || numericAmount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // alert(`You have selected ${selectedPayment.value} and entered an amount of ${numericAmount}`);
    try {
        const response = await axios.post('/user/getWaypaymentConfirm', {
            paymentMethod: selectedPayment.value,
            amount: numericAmount

        }).catch((error) => {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                // Handle other types of errors here
                console.error("An error occurred:", error);
            }
        });;

        Swal.fire({
            title: 'Success!',
            text: 'Payment successful.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Handle the response as needed
        //alert(`Payment successful: ${response.data.message}`);
    } catch (error) {
        console.error('Error during payment:', error);
        alert('There was an error processing your payment. Please try again.');
    }


};

const validateInput = () => {
    // Replace any non-numeric characters
    amount.value = amount.value.replace(/[^0-9.]/g, '');
    // Ensure that only one decimal point can be present
    const parts = amount.value.split('.');
    if (parts.length > 2) {
        amount.value = parts[0] + '.' + parts[1].slice(0, 1); // Keep only the first decimal
    }
};



const submitFrm = () => {
    const formData = new FormData();
    formData.append("amount", depositArr.value.amount);
    formData.append("frm_wallet_address", depositArr.value.frm_wallet_address);
    const headers = {
        "Content-Type": "multipart/form-data",
    };
    axios.post("/user/saveDeposit", formData, { headers })
        .then((res) => {
            getDeposit();

            depositArr.value.amount == '';
            depositArr.value.frm_wallet_address == '';
            document.getElementById("formrest").reset();
            Swal.fire({
                title: 'Success!',
                text: 'Your Deposit Successfully Done.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            //router.push("/dashboard/buyer/welcome");
        })
        .catch((error) => {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                // Handle other types of errors here
                console.error("An error occurred:", error);
            }
        });
};

const getDeposit = async () => {
    try {
        const response = await axios.get(`/user/getDeposit`);
        DepositData.value = response.data.data;
    } catch (error) {
        console.log(error);
    }
};

const swiper = ref(null)

onMounted(async () => {
    getDeposit();
});


</script>

<style scoped>
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