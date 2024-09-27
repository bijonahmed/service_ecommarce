<template>
    <div class="dashboard show">
        <title>My Wallet</title>
        <DashboardSidebar />

        <div class="dashboard_main_content">
            <div class="dashboard__content">

                <DashboardHeader />
                <div class="dashboard__main">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="wallet_container">
                                <div class="wallet_box">
                                    <h4> <img src="/assets/images/gold_coin.png" alt="" class="img-fluid"> {{ balanceOcn
                                        }}</h4>
                                    <p>OCN Balance</p>
                                    <p> {{ convert_usdt }} USDT</p>
                                </div>
                                <div class="wallet_box">
                                    <h4><img src="/assets/images/usdt.png" alt="" class="img-fluid">{{ usdtAmount }}
                                    </h4>
                                    <p>USDT Balance</p>
                                    <p>Loan {{ loanBalance }} USDT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex justify-content-start align-items-center buy_btns">
                                <a class="btn-action style-5 btn_boost mx-0 me-2" data-bs-toggle="offcanvas"
                                    data-bs-target="#deposit_" aria-controls="deposit_">Deposit</a>
                                <nuxt-link to="/dashboard/withdraw"
                                    class="btn-action style-5 btn_boost mx-0">Withdraw</nuxt-link>&nbsp;

                                <nuxt-link to="/dashboard/loan-request-send"
                                    class="btn-action style-5 btn_boost mx-0">Pay</nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="market section-faq style-2 ">
                                <div class="faq__content pe-0">
                                    <div class="flat-tabs">
                                        <ul class="menu-tab">
                                            <li class="active" @click="fetchDepositData">
                                                <h5>Deposit</h5>
                                            </li>
                                            <li class="" @click="fetchWithdrawalData">
                                                <h5>Withdraw</h5>
                                            </li>

                                            <li class="" @click="fetchLoanData">
                                                <h5>Loan</h5>
                                            </li>

                                            <li class="" @click="fetchRewardData">
                                                <h5>Reward</h5>
                                            </li>

                                        </ul>
                                        <center>
                                            <div class="loading-indicator" v-if="loading" style="text-align: center">
                                                <Loader />
                                            </div>
                                        </center>
                                        <div class="content-tab">
                                            <div class="content-inner flat-accordion">
                                                <div class="search_section">
                                                    <form action="">
                                                        <div class="search_div">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="input_form mb-2 m-0">
                                                                        <input type="text" placeholder="Search TRX id"
                                                                            class="form-control" v-model="depsoit_trxId"
                                                                            @keyup="fetchDepositData">
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class=" d-flex align-items-center w-100">
                                                                        <div class="input_form w-100">
                                                                            <input type="date" class="form-control"
                                                                                v-model="depsoit_frmDate">
                                                                        </div>
                                                                        <p>TO</p>
                                                                        <div class="input_form w-100 m-0">
                                                                            <input type="date" class="form-control"
                                                                                v-model="depsoit_toDate"
                                                                                @change="fetchDepositData">
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div class="table-responsive">
                                                    <table class="table table-dark table-striped table_crypto">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">TRX id</th>
                                                                <th scope="col" class="text-center">Date</th>
                                                                <th scope="col" class="text-center">Amount</th>
                                                                <th scope="col" class="text-center">Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="v in depositData" :key="v.id">
                                                                <td>{{ v.trxId }}</td>
                                                                <td class="text-center">{{
                                                                    formatDateTime(v.created_at) }}</td>
                                                                <td class="text-center">{{ v.deposit_amount }}</td>

                                                                <td class="text-center"><span class="text-warning">
                                                                        <span v-if="v.status == 0"
                                                                            style="color:yellow;">Pending</span>
                                                                        <span v-if="v.status == 1"
                                                                            style="color:green;">Approved</span>
                                                                        <span v-if="v.status == 2"
                                                                            style="color:red;">Reject</span>
                                                                    </span>
                                                                </td>

                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="content-inner flat-accordion">
                                                <div class="search_section">
                                                    <form action="">
                                                        <div class="search_div">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="input_form mb-2 m-0">
                                                                        <input type="text"
                                                                            placeholder="Search Withdrawal Id"
                                                                            class="form-control" v-model="withdrawal_Id"
                                                                            @keyup="fetchWithdrawalData">
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class=" d-flex align-items-center w-100">
                                                                        <div class="input_form w-100">
                                                                            <input type="date" class="form-control"
                                                                                v-model="withdrawal_frmDate">
                                                                        </div>
                                                                        <p>TO</p>
                                                                        <div class="input_form w-100 m-0">
                                                                            <input type="date" class="form-control"
                                                                                v-model="withdrawal_toDate"
                                                                                @change="fetchWithdrawalData">
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="table-responsive">
                                                    <table class="table table-dark table-striped table_crypto">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Withdraw ID</th>
                                                                <th scope="col" class="text-center">Date</th>
                                                                <th scope="col" class="text-center">Amount</th>
                                                                <th scope="col" class="text-center">Status</th>
                                                                <th scope="col">Remark</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="v in withdrwalData" :key="v.id">
                                                                <td>{{ v.withdrawID }}</td>
                                                                <td class="text-center">{{
                                                                    formatDateTime(v.created_at) }}</td>
                                                                <td class="text-center">{{ v.withdrawal_amount }}</td>
                                                                <td class="text-center"><span class="text-warning">
                                                                        <span v-if="v.status == 0"
                                                                            style="color:yellow;">Pending</span>
                                                                        <span v-if="v.status == 1"
                                                                            style="color:green;">Approved</span>
                                                                        <span v-if="v.status == 2"
                                                                            style="color:red;">Reject</span>
                                                                    </span>
                                                                </td>
                                                                <td>{{ v.remarks }}</td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <!-- For Loan -->
                                            <div class="content-inner flat-accordion">
                                                <div class="table-responsive">
                                                    <table class="table table-dark table-striped table_crypto">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" class="text-left">Datetime</th>
                                                                <th scope="col">Type</th>
                                                                <th scope="col" class="text-right">Amount</th>
                                                              
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="v in loanData" :key="v.id">
                                                                <td>{{ formatDateTime(v.created_at) }}</td>
                                                                <td>
                                                                    <span v-if="v.type==1">Loan</span>
                                                                    <span v-if="v.type==2">Pay</span>
                                                                </td>
                                                                <td class="text-right">{{ formatNumber(v.amount) }}</td>
                                                                
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- For Reward -->

                                            <div class="content-inner flat-accordion">
                                                <div class="table-responsive">
                                                    <table class="table table-dark table-striped table_crypto">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" class="text-left">Datetime</th>
                                                                <th scope="col">Remark</th>
                                                                <th scope="col" class="text-center">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="v in rewardsData" :key="v.id">
                                                                <td>{{ formatDateTime(v.created_at) }}</td>
                                                                <td>{{ v.detailed_remarks }}</td>
                                                                <td class="text-center">{{ v.adjustment_amount }}USDT
                                                                </td>
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
                    </div>
                </div>
            </div>
        </div>
        <!-- deposit offcanvas  -->
        <div class="offcanvas offcanvas-bottom trade_history_table" tabindex="-1" id="deposit_"
            aria-labelledby="deposit_Label">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="mininge_confirmLabel"></h5>
                <button type="button" class="btn_close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                        class="fas fa-times"></i></button>
            </div>
            <div class="offcanvas-body small pt-0">
                <div class="row">
                    <div class="col-md-4 m-auto">

                        <form @submit.prevent="depositSubmit()" id="formrest" class="withdraw_form but_token_form">
                            <center style="font-size: 22px; color: red;">{{ show_messages }}</center>
                            <div class="input_form mb-2 m-0">
                                <label for="amount" class="mb-2">Enter Deposit Amount</label>
                                <div class="input_group">
                                    <input type="text" class="form-control" placeholder="00.00" v-model="deposit_amount"
                                        @keypress="isNumber($event)">
                                    <img src="/assets/images/usdt.png" alt="" class="img-fluid img_g_coin">

                                </div>
                                <span class="text-danger" v-if="errors.deposit_amount">{{
                                    errors.deposit_amount[0] }}</span>
                            </div>
                            <!-- <a href="dashboard-desposite-confirm.html" class="btn-action style-5 btn_confirm btn_deposit_confirm" >Confirm</a> -->
                            <button type="submit"
                                class="btn-action style-5 btn_confirm btn_deposit_confirm">Confirm</button>
                        </form>

                        <div class="refer_members latest_buy text-start">
                            <h6>Latest Deposit</h6>
                            <ul>
                                <li v-for="user in users.slice(0, 12)" :key="user.username">
                                    <strong>@{{ user.username }} desposit {{ user.amount }} USDT</strong>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DashboardSidebar from "~/layouts/DashboardSidebar.vue";
import DashboardHeader from "~/layouts/DashboardHeader.vue";
import swal from "sweetalert2";
import { useUserStore } from "~~/stores/user";

import { useRandomUsers } from '@/compositions/useRandomUsers';
const { users } = useRandomUsers();


const userStore = useUserStore();
const router = useRouter()
const isLoggedIn = computed(() => userStore.isLoggedIn);
definePageMeta({
    middleware: "is-logged-out",
});

const deposit_amount = ref("");
const errors = ref({});
const minimum_amt = 20;
const show_messages = ref("");
const loanBalance = ref('');

const loading = ref(false);

const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDateTime = date.toISOString().slice(0, 19).replace('T', ' ');
    return formattedDateTime;
};

const depositSubmit = () => {
    const dpAmount = deposit_amount.value;

    if (dpAmount == "") {
        error_noti();
        return false;
    } else {

        if (dpAmount >= minimum_amt) {
            show_messages.value = "";
            localStorage.setItem('depositAmount', dpAmount)
            console.log(`Deposit amount ${dpAmount} has been saved to local storage.`)
            router.push('/dashboard/deposit/deposit-confirm')
        } else {
            show_messages.value = `Deposit minimum amount is ${minimum_amt}`;
            deposit_amount.value = "";

        }
    }
}

const isNumber = ($event) => {
    let keyCode = $event.keyCode ? $event.keyCode : $event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
    }
};

const error_noti = () => {
    const Toast = swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2200,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = swal.stopTimer;
            toast.onmouseleave = swal.resumeTimer;
        },
    });
    Toast.fire({
        icon: "error",
        title: "Please input amount.",
    });
};

const depsoit_trxId = ref('');
const depsoit_frmDate = ref('');
const depsoit_toDate = ref('');
const depositData = ref([]);

const withdrawal_Id = ref('');
const withdrawal_frmDate = ref('');
const withdrawal_toDate = ref('');

const withdrwalData = ref([]);
const loanData = ref([]);
const rewardsData = ref([]);
const usdtAmount = ref(0);
const currentprice = ref(0);

const convert_usdt = ref(0);
const balanceOcn = ref(0);

const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const fetchDepositData = async () => {
    try {
        loading.value = true;
        const response = await axios.get("/deposit/getDepositfetchdata", {
            params: {
                trxId: depsoit_trxId.value,
                frmDate: depsoit_frmDate.value,
                toDate: depsoit_toDate.value
            }
        });
        //console.log("Response data:", response.data.levels);
        depositData.value = response.data.depositData;
        usdtAmount.value = response.data.depositAmount;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
};

const fetchWithdrawalData = async () => {
    try {
        loading.value = true;
        const response = await axios.get("/deposit/getWithdrwalfetchdata", {
            params: {
                withdrawal_Id: withdrawal_Id.value,
                frmDate: withdrawal_frmDate.value,
                toDate: withdrawal_toDate.value
            }
        });
        //console.log("Response data:", response.data.levels);
        withdrwalData.value = response.data.withdrwalData;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
};


const fetchLoanData = async () => {

    try {
        loading.value = true;
        const response = await axios.get("/loan/getAdminSendingLoan");
        console.log("Response data:", response.data.loanBalance);
        loanData.value = response.data.data;
        loanBalance.value = response.data.loanBalance;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }

}


const fetchRewardData = async () => {

    try {
        loading.value = true;
        const response = await axios.get("/reward/getAdminSendingRewards");
        //console.log("Response data:", response.data.levels);
        rewardsData.value = response.data.data;

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }

}



const getCurrentPrices = async () => {
    try {
        const response = await axios.get("/trading/getCurrentPrice");
        currentprice.value = response.data.current_price;
        const res = await axios.get("/trading/getToken");
        const token = res.data.ocntoken;
        const cp = response.data.current_price;
        convert_usdt.value = Number((cp * token).toFixed(2));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getocntokenBalance = async () => {
    try {
        const response = await axios.get("/trading/getToken");
        balanceOcn.value = response.data.ocntoken;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

onMounted(() => {
    fetchLoanData();
    getCurrentPrices();
    getocntokenBalance();
    fetchDepositData();
    fetchWithdrawalData();
    const flattabs = () => {
        $('.flat-tabs').each(function () {
            $(this).find('.content-tab').children().hide()
            $(this).find('.content-tab').children().first().show()
            $(this).find('.menu-tab').children('li').on('click', function () {
                const liActive = $(this).index()
                const contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive)
                contentActive.addClass('active').fadeIn('slow')
                contentActive.siblings().removeClass('active')
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide()
            })
        })
    }

    flattabs()
})

</script>