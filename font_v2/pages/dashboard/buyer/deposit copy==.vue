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

                <!-- Start Profile -->
                <div class="container">

                    <div class="row">
                        <div class="col-xl-12">
                            <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">

                                <div class="container mt-5">
                                    <form @submit.prevent="handleSubmit">
                                        <div class="mb-3">
                                            <label for="amount" class="form-label">Enter Amount</label>
                                            <input type="number" class="form-control" v-model="amount"
                                                placeholder="Enter amount" />
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 d-grid mb-3">
                                                <div class="payment-option"
                                                    :class="{ selected: selectedPayment === 'paypal' }"
                                                    @click="selectPaymentOption('paypal')">
                                                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                                                        alt="Pay with PayPal" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 d-grid mb-3">
                                                <div class="payment-option"
                                                    :class="{ selected: selectedPayment === 'visa' }"
                                                    @click="selectPaymentOption('visa')">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/2000px-Visa_2014_logo_detail.svg.png"
                                                        alt="Pay with Visa" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-3">
                                            <button type="submit" class="btn btn-primary">Proceed to Pay</button>
                                        </div>
                                    </form>





                                    <div class="col-lg-12 d-none">

                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                    aria-selected="true">Deposit</button>
                                            </li>


                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel"
                                                aria-labelledby="home-tab">


                                                <div class="row">

                                                    <div class="col-md-6">
                                                        <form class="form-style1" @submit.prevent="submitFrm()"
                                                            id="formrest">
                                                            <div class="row">
                                                                <div class="col-sm-4 d-none">
                                                                    <div class="mb20 ">
                                                                        <label
                                                                            class="heading-color ff-heading fw500 mb10">Crypto
                                                                            Address</label>
                                                                        <input type="text" class="form-control"
                                                                            v-model="depositArr.frm_wallet_address">
                                                                        <span class="text-danger"
                                                                            v-if="errors.frm_wallet_address">{{
                                                                                errors.frm_wallet_address[0] }}</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4">
                                                                    <div class="mb20">
                                                                        <label
                                                                            class="heading-color ff-heading fw500 mb10">Amount</label>
                                                                        <input type="text" class="form-control"
                                                                            @input="validateInput"
                                                                            v-model="depositArr.amount">
                                                                        <span class="text-danger"
                                                                            v-if="errors.amount">{{
                                                                                errors.amount[0] }}</span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-12">
                                                                    <div class="text-start">
                                                                        <button type="submit"
                                                                            class="ud-btn btn-thm">Save<i
                                                                                class="fal fa-arrow-right-long"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <!-- END -->
                                                    </div>

                                                    <div class="col-md-6">
                                                        <br />
                                                        <div class="table-responsive">
                                                            <table class="table table-bordered pt-2">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Deposit ID</th>
                                                                        <th>Amount</th>
                                                                        <th>Status</th>
                                                                        <th>Wallet Address</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="deposit in DepositData"
                                                                        :key="deposit.id">
                                                                        <td>{{ deposit.depositID }}</td>
                                                                        <td>${{ deposit.deposit_amount }}</td>
                                                                        <td>{{ getStatus(deposit.status) }}</td>
                                                                        <td>{{ deposit.frm_wallet_address }}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <br />

                            </div>
                        </div>
                        <!-- END Profile -->
                        <div />
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

const handleSubmit = () => {
    if (!selectedPayment.value) {
        alert('Please select a payment option.');
        return;
    }

    if (amount.value <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    alert(`You have selected ${selectedPayment.value} and entered an amount of ${amount.value}`);
};

const getStatus = (status) => {
    return status === 0 ? 'Pending' :
        status === 1 ? 'Approved' :
            status === 2 ? 'Rejected' :
                'Unknown';
};
const validateInput = () => {
    // Remove non-numeric characters from the input
    depositArr.value.amount = depositArr.value.amount.replace(/[^0-9]/g, '');
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
    padding: 10px;
}

.payment-option.selected {
    border-color: #007bff;
}

.payment-option img {
    width: 100%;
    max-width: 150px;
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