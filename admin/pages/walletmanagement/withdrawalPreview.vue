<template>
    <title>Withdrawal Details Preview</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Withdrawal Preview</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/walletmanagement/withdrawal-management">Back to List
                                    </LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <!-- <button @click="productDetails">dfdfdf</button>  -->
            <section class="content">
                <div class="container-fluid">
                    <div v-if="apiError" class="alert alert-danger" role="alert">
                        {{ apiError }}
                    </div>
                    <!-- <center><button type="button" @click="productDetails">test</button></center> -->
                    <div class="col-xl-12 mx-auto">
                        <div class="card border-top border-0 border-4 border-info">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="card">

                                        <div class="row">
                                            <div class="col-md-12">

                                               
                                                <table class="table table-bordered w-100">
                                                    <tr>
                                                        <td width="40%">ID</td>
                                                        <td width="1%"><strong>:</strong></td>
                                                        <td width="50%">{{ request.withdrawID }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Request By</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Amount</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.withdrawal_amount }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Type</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.type }}</td>
                                                    </tr>





                                                    <tr v-if="request.selected_type == 1">
                                                        <td>Wallet Type</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.crypto_wallet_type }}</td>
                                                    </tr>
                                                    <tr v-if="request.selected_type == 1">
                                                        <td>Request Wallet Address </td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.wallet_address }}</td>
                                                    </tr>

                                                    <tr v-if="request.selected_type == 2">
                                                        <td>Paypal ID</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.email }}</td>
                                                    </tr>
                                                    <tr v-if="request.selected_type == 3">
                                                        <td>Payoneer ID</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.email }}</td>
                                                    </tr>

                                                    <tr v-if="request.selected_type == 4">
                                                        <td>Bank Name </td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.bankName }}</td>
                                                    </tr>

                                                    <tr v-if="request.selected_type == 4">
                                                        <td>Branch Name </td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.branchName }}</td>
                                                    </tr>

                                                    <tr v-if="request.selected_type == 4">
                                                        <td>Account Name </td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.account_name }}</td>
                                                    </tr>

                                                    <tr v-if="request.selected_type == 4">
                                                        <td>Account Number</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.account_num }}</td>
                                                    </tr>

                                                    <tr v-if="request.selected_type == 4">
                                                        <td>IBN No.</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.ibn_no }}</td>
                                                    </tr>









                                                    <tr>
                                                        <td>Created Time</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.created_at }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Status</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ getStatus(request.status) }}</td>
                                                    </tr>

                                                </table>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">

                                        <div class="col-6">
                                            <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                                enctype="multipart/form-data">
                                                <button type="submit" class="btn btn-danger btn-lg px-5 w-100">
                                                    <i class="bx bx-check-circle mr-1"></i>
                                                    Reject
                                                </button>
                                                <br><br>

                                                <div class="row mb-3 required">
                                                    <br />
                                                    <label for="input-name-1"
                                                        class="col-sm-2 col-form-label required-label">Remarks</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" v-model="request.remarks" autofocus
                                                            class="form-control" />
                                                        <!-- <span class="text-danger" v-if="errors.remarks">{{ errors.remarks[0] }}</span> -->
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="col-6">

                                            <button type="submit" @click="submitToApproved"
                                                class="btn btn-info btn-lg px-5 w-100">
                                                <i class="bx bx-check-circle mr-1"></i>
                                                Approved
                                            </button>
                                        </div>

                                    </div>

                                    <!-- END -->
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
const router = useRouter();
import axios from 'axios';
import swal from 'sweetalert2';
window.Swal = swal;

definePageMeta({
    middleware: 'is-logged-out',
})
const request = ref({
    id: '',
    withdrawID: '',
    transection_fee: '',
    user_id: '',
    withdrawal_amount: '',
    usdt_amount: '',
    payable_amount: '',
    payment_method: '',
    wallet_address: '',
    currency_type_name: '',
    remarks: '',
    approved_by: '',
    apiError: '',
    created_at: '',
    name: '',
    status: '',

    selected_type: '',
    type: '',
    email: '',
    account_name: '',
    account_num: '',
    ibn_no: '',
    bankName: '',
    branchName: '',
    crypto_wallet_type: '',

});
const apiError = ref(null);
const notifmsg = ref('');
const errors = ref({});

const submitToApproved = () => {
    swal.fire({
        title: "Are you sure?",
        text: "Approved this withdraw request !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
    }).then((result) => {
        if (result.isConfirmed) {
            const id = router.currentRoute.value.query.parameter;
            const payable_amount = request.value.payable_amount;
            axios
                .get(`/deposit/approvedWithdrawRequest/${id}`)
                .then((response) => {
                    // Assuming the response has a data object with expected data
                    router.push({
                        path: '/walletmanagement/withdrawal-management',
                    });
                    // Do something with the data
                })
                .catch((error) => {
                    // Check if the error has a response object
                });
            swal.fire({
                title: "Succcess!",
                text: "Request approved",
                icon: "success",
                time: 100
            });
        }
    });

}
const saveData = () => {
    if (request.value.remarks == "") {
        error_noti();
        return false;
    }

    const formData = new FormData();
    const id = router.currentRoute.value.query.parameter;
    formData.append('id', id);
    formData.append('remarks', request.value.remarks);
    formData.append('status', 2);

    axios.post('/deposit/updateWithDrawRequest', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        //$('#formrest')[0].reset();
        success_noti();
        // Redirect to product variant page
        router.push({
            path: '/walletmanagement/withdrawal-management',
        });

    }).catch(error => {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors;
        } else {
            // Handle other types of errors here
            console.error("An error occurred:", error);
        }
    });
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const getStatus = (status) => {
    let result = '';
    if (status === 0) {
        result = 'Under review';
    } else if (status === 1) {
        result = 'Has been approved';
    } else if (status === 2) {
        result = 'Has been rejected';
    }
    return result;
}

const productDetails = () => {
    const id = router.currentRoute.value.query.parameter;
    axios.get(`/deposit/withdrawrow/${id}`).then(response => {
        console.log("created_at" + response.data.created_at);
        const data = response.data.datarow;
        const wallet_address = response.data.wallet_address;
        console.log("request wallet address: " + wallet_address);
        request.value.name = data.name;

        request.value.selected_type = data.selected_type;
        request.value.type = data.type;
        request.value.email = data.email;
        request.value.account_name = data.account_name;
        request.value.account_num = data.account_num;
        request.value.ibn_no = data.ibn_no;
        request.value.bankName = response.data.bankName;
        request.value.branchName = response.data.branchName;
        request.value.crypto_wallet_type = data.crypto_wallet_type;


        request.value.withdrawID = data.withdrawID;
        request.value.withdrawal_amount = data.withdrawal_amount;
        request.value.usdt_amount = data.usd_amount;
        request.value.payable_amount = data.payable_amount;
        request.value.payment_method = data.payment_method;
        request.value.approved_by = data.approved_by;
        request.value.payment_method = data.payment_method;


        // request.value.wallet_address = data.wallet_address;
        request.value.created_at = response.data.created_at;
        request.value.remarks = response.data.remarks;
        request.value.status = data.status;
        request.value.currency_type_name = data.currency_type_name;
        request.value.wallet_address = wallet_address;

    });
};
const success_noti = () => {
    //alert("Your data has been successfully inserted.");
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Has been successfully update"
    });
};

const error_noti = () => {
    //alert("Your data has been successfully inserted.");
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "error",
        title: "Please write reject reason."
    });
};
onMounted(() => {
    productDetails();
});
</script>