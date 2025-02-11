<template>
    <title>Deposit</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">
                <section class="categories_list_section overflow-hidden">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="position-relative">

                                    <button class="btn btn-default  btn_l position-absolute left-0"><i
                                            class="fa-solid fa-chevron-left"></i></button>
                                    <div class="listings_category_nav_list_menu">

                                        <ul class="mb0 d-flex ps-0">
                                            <li v-for="data in categoryData" :key="data.id">
                                                <nuxt-link :to="`/category/${data.slug}`">
                                                    {{ data.name }}
                                                </nuxt-link>
                                            </li>
                                            <!-- {{categoryData}} -->
                                        </ul>
                                    </div>
                                    <button class="btn btn-default btn_r position-absolute right-0"><i
                                            class="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Breadcumb Sections -->

                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                </div>
                <section class="breadcumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                                        <a href="#">Deposit</a>
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
                <div class="container my-5">
                    <form action="">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="button_list">
                                    <button class="btn_card active">
                                        <span>Creadit Card</span>
                                        <img src="/cards1.png" alt="" class="img-fluid">
                                    </button>
                                    <a href="" class="btn_card">
                                        <span>Paypal</span>
                                        <img src="/paypal.webp" alt="" class="img-fluid">
                                    </a>
                                    <a href="" class="btn_card">
                                        <span>Stripe</span>
                                        <img src="/stripe.png" alt="" class="img-fluid">
                                    </a>
                                    <a href="" class="btn_card">
                                        <span>USDT(TRC-20)</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="card_form">
                                    <h6 class="mb-3">Amount being paid now: <strong>$115.50</strong></h6>
                                    <img src="/cards1.png" alt="" class="img-fluid mb-2">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Card Holder Name</label>
                                        <input type="text" class="form-control" name="name">
                                    </div>
                                    <div class="mb-3">
                                        <label for="number" class="form-label">Card number</label>
                                        <input type="text" class="form-control" id="number" name="number">
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="mb-3 me-3">
                                            <label for="exdate" class="form-label">Expiration Date</label>
                                            <input type="text" class="form-control" id="exdate" name="exdate">
                                        </div>
                                        <div class="mb-3">
                                            <label for="cvv" class="form-label">CVV Code</label>
                                            <input type="text" class="form-control" id="cvv" name="cvv">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- <div class="container mt-5">
                    <form @submit.prevent="handleSubmit" class="shadow p-4 rounded bg-light">
                        <div class="mb-3">
                            <label for="amount" class="form-label">Enter Amount</label>
                            <input type="text" class="form-control" v-model="amount" @input="validateInput"
                                placeholder="0.00" />
                            <span class="text-danger" v-if="errors.amount">{{ errors.amount[0] }}</span>
                        </div>

                        <h5 class="mb-3">Select Payment Method</h5>
                        <div class="row mb-4">
                            <div class="col-md-6 d-grid mb-3">
                                <div class="payment-option" :class="{ selected: selectedPayment === 'paypal' }"
                                    @click="selectPaymentOption('paypal')">
                                    <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                                        alt="Pay with PayPal" class="payment-image" />
                                    <span class="payment-label">PayPal</span>
                                </div>
                            </div>
                            <div class="col-md-6 d-grid mb-3">
                                <div class="payment-option" :class="{ selected: selectedPayment === 'visa' }"
                                    @click="selectPaymentOption('visa')">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                                        alt="Pay with Visa" class="payment-image" />
                                    <span class="payment-label">Visa</span>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary text-white">Proceed to Pay</button>
                        </div>
                    </form>
                </div> -->


            </div>
            <!-- Modal Template -->
        </div>
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
const loading = ref(false);
const route = useRoute();

definePageMeta({
    middleware: "is-logged-out",
});

const errors = ref({});
const DepositData = ref([]);

//Add education 
const depositArr = ref({
    amount: '',
    frm_wallet_address: ''
});



const amount = ref(0);
const selectedPayment = ref(null);

const selectPaymentOption = (option) => {
    selectedPayment.value = option;
};

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

const getStatus = (status) => {
    return status === 0 ? 'Pending' :
        status === 1 ? 'Approved' :
            status === 2 ? 'Rejected' :
                'Unknown';
};


const getCatList = async () => {
    try {
        const response = await axios.get(`/unauthenticate/getFindCategorys`);
        categoryData.value = response.data;
    } catch (error) {
        // Handle error
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

onMounted(() => {
    getCatList();
    getDeposit();

});

</script>

<style scoped>
.payment-option {
    cursor: pointer;
    border: 2px solid transparent;
    padding: 15px;
    text-align: center;
    transition: border-color 0.3s;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.payment-option:hover {
    border-color: #007bff;
}

.payment-option.selected {
    border-color: #007bff;
    background-color: #f0f9ff;
    /* Light blue background when selected */
}

.payment-image {
    width: 100%;
    max-width: 120px;
    margin-bottom: 10px;
}

.payment-label {
    display: block;
    font-weight: bold;
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