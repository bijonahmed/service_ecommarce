<template>
    <title>Pay Loan Preview</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Pay Loan Preview</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/walletmanagement/pay-loan-return-management">Back to List
                                    </LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">

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
                                                        <td width="50%">{{ request.loanID }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td width="40%">To Address </td>
                                                        <td width="1%"><strong>:</strong></td>
                                                        <td width="50%">{{ request.to_crypto_wallet_address }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td width="40%">Form Address </td>
                                                        <td width="1%"><strong>:</strong></td>
                                                        <td width="50%">{{ request.frm_wallet_address }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td width="40%">Trn ID </td>
                                                        <td width="1%"><strong>:</strong></td>
                                                        <td width="50%">{{ request.trxId }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Request By</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Deposit Amount</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.deposit_amount }}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Receivable Amount</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.receivable_amount }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Method </td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ request.payment_method }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Created Time</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ formatDate(request.created_at) }}</td>
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

                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                        enctype="multipart/form-data">
                                        <div class="card card-primary card-outline card-tabs">
                                            <div class="card-header p-0 pt-1 border-bottom-0">
                                                <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="custom-tabs-three-home-tab"
                                                            data-toggle="pill" href="#custom-tabs-three-home" role="tab"
                                                            aria-controls="custom-tabs-three-home"
                                                            aria-selected="true">Update</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class="card-body">
                                                <div class="tab-content" id="custom-tabs-three-tabContent">
                                                    <div class="tab-pane fade active show" id="custom-tabs-three-home"
                                                        role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                                                        <!-- General  {{ request.deposit_amount }}-->

                                                        <div class="row mb-3 required">
                                                            <label for="input-name-1"
                                                                class="col-sm-2 col-form-label required-label">Loan
                                                                Amount</label>
                                                            <div class="col-sm-10">
                                                                <input type="hidden" v-model="request.user_id"
                                                                    class="form-control" />

                                                                <input type="text" name="name" placeholder="Name"
                                                                    v-model="request.deposit_amount" disabled readonly
                                                                    class="form-control" />
                                                            </div>
                                                        </div>

                                                        <div class="row mb-3 required">
                                                            <label for="input-name-1"
                                                                class="col-sm-2 col-form-label required-label">Receivable
                                                                Amount</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" v-model="request.receivable_amount"
                                                                    autofocus class="form-control" />
                                                                <span class="text-danger"
                                                                    v-if="errors.receivable_amount">{{
                                                                        errors.receivable_amount[0] }}</span>
                                                            </div>
                                                        </div>

                                                        <div class="row mb-3 required">
                                                            <label for="input-name-1"
                                                                class="col-sm-2 col-form-label required-label">Status</label>
                                                            <div class="col-sm-10">
                                                                <select v-model="request.status" class="form-control">
                                                                    <option value="0">Review</option>
                                                                    <option value="2">Reject</option>
                                                                    <option value="1">Approved</option>
                                                                </select>
                                                                <span class="text-danger" v-if="errors.status">{{
                                                                    errors.status[0] }}</span>
                                                            </div>
                                                        </div>

                                                        <button type="submit" class="btn btn-success px-5 w-100">
                                                            <i class="bx bx-check-circle mr-1"></i> Update
                                                        </button>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>

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
    depositID: '',
    deposit_amount: '',
    receivable_amount: '',

    to_crypto_wallet_address: '',
    frm_wallet_address: '',
    trxId: '',
    user_id: '',
    payment_method: '',
    approved_by: '',
    created_at: '',
    status: '',

});

const notifmsg = ref('');
const errors = ref({});

const saveData = () => {
    const formData = new FormData();
    const id = router.currentRoute.value.query.parameter;
    formData.append('id', id);
    formData.append('receivable_amount', request.value.receivable_amount);
    formData.append('user_id', request.value.user_id);
    formData.append('status', request.value.status);

    axios.post('/loan/updatePayLoanReturnRequest', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        //$('#formrest')[0].reset();
        success_noti();
        // Redirect to product variant page
        router.push({
            path: '/walletmanagement/pay-loan-return-management',
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
    axios.get(`/loan/payLoanrow/${id}`).then(response => {
        const data = response.data;
        request.value.name = data.name;
        request.value.loanID = data.loanID;
        request.value.user_id = data.user_id;
        request.value.deposit_amount = data.deposit_amount;
        request.value.receivable_amount = data.receivable_amount;
        request.value.payment_method = data.payment_method;
        request.value.approved_by = data.approved_by;
        request.value.created_at = data.created_at;

        request.value.to_crypto_wallet_address = data.to_crypto_wallet_address;
        request.value.frm_wallet_address = data.frm_wallet_address;
        request.value.trxId = data.trxId;

        request.value.status = data.status;

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
        title: "Has been successfully update Deposit."
    });
};
onMounted(() => {
    productDetails();
});
</script>