<template>
    <title>Pre-Setting</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Pre-Setting</p>
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
                    <!-- Start -->
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div v-if="errors.length" class="text-danger text-center">
                                    <div v-for="(error, index) in errors" :key="index" class="error-message">
                                        * {{ error }}
                                    </div>
                                </div>

                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                    enctype="multipart/form-data">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-toggle="tab"
                                                data-target="#home" type="button" role="tab" aria-controls="home"
                                                aria-selected="true">
                                                WebSite Confirgration
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-toggle="tab"
                                                data-target="#profile" type="button" role="tab" aria-controls="profile"
                                                aria-selected="false">
                                                Others Configration
                                            </button>
                                        </li>
                                        <!-- <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li> -->
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel"
                                            aria-labelledby="home-tab">
                                            <br />
                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Company
                                                    name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control name"
                                                        v-model="insertdata.name" id="name"
                                                        placeholder="Company name" />
                                                    <span class="text-danger" v-if="errors.name">{{
                                                        errors.name[0]
                                                    }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Email</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control email"
                                                        v-model="insertdata.email" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Address</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.address" placeholder="Address" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">WhatsApp</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control whatsApp"
                                                        v-model="insertdata.whatsApp" placeholder="WhatsApp" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Business
                                                    Description</label>
                                                <div class="col-sm-9">
                                                    <textarea class="form-control description"
                                                        v-model="insertdata.description"
                                                        placeholder="Business Description"></textarea>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Currency</label>
                                                <div class="col-sm-9">
                                                    <select class="form-control currency" v-model="insertdata.currency">
                                                        <option value="$">US Dollar ($)</option>
                                                        <option value="€">Euro (€)</option>
                                                        <option value="£">British Pound (£)</option>
                                                        <option value="¥">Japanese Yen (¥)</option>
                                                        <option value="A$">Australian Dollar (A$)</option>
                                                        <option value="C$">Canadian Dollar (C$)</option>
                                                        <option value="CHF">Swiss Franc (CHF)</option>
                                                        <option value="CN¥">Chinese Yuan (CN¥)</option>
                                                        <option value="₽">Russian Ruble (₽)</option>
                                                        <option value="₹">Indian Rupee (₹)</option>
                                                        <option value="R">South African Rand (R)</option>
                                                        <option value="NZ$">
                                                            New Zealand Dollar (NZ$)
                                                        </option>
                                                        <option value="kr">Swedish Krona (kr)</option>
                                                        <option value="₩">South Korean Won (₩)</option>
                                                        <option value="₺">Turkish Lira (₺)</option>
                                                        <option value="Mex$">Mexican Peso (Mex$)</option>
                                                        <option value="R$">Brazilian Real (R$)</option>
                                                        <option value="฿">Thai Baht (฿)</option>
                                                        <option value="₱">Philippine Peso (₱)</option>
                                                        <option value="Rp">Indonesian Rupiah (Rp)</option>
                                                        <option value="₪">Israeli New Shekel (₪)</option>
                                                        <option value="د.إ">UAE Dirham (د.إ)</option>
                                                        <option value="kr">Norwegian Krone (kr)</option>
                                                        <option value="HK$">Hong Kong Dollar (HK$)</option>
                                                        <option value="kr">Danish Krone (kr)</option>
                                                        <option value="S$">Singapore Dollar (S$)</option>
                                                        <option value="RM">Malaysian Ringgit (RM)</option>
                                                        <option value="kr">Polish Złoty (zł)</option>
                                                        <option value="¥">Taiwan New Dollar (NT$)</option>
                                                        <option value="₦">Nigerian Naira (₦)</option>
                                                        <option value="৳">Bangladeshi Taka (৳)</option>
                                                        <option value="₨">Pakistani Rupee (₨)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">FB
                                                    Link</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control fblink"
                                                        v-model="insertdata.fblink" placeholder="FBlink" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Website</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control website"
                                                        v-model="insertdata.website" placeholder="Website" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Telegram</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control website"
                                                        v-model="insertdata.telegram" placeholder="Telegram" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Copyright</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control copyright"
                                                        v-model="insertdata.copyright" placeholder="Copyright" />
                                                </div>
                                            </div>


                                        </div>
                                        <div class="tab-pane fade" id="profile" role="tabpanel"
                                            aria-labelledby="profile-tab">
                                            <br />
                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Minimum
                                                    Deposit Amount</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.mininmum_deposit_amount"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.mininmum_deposit_amount">{{
                                                        errors.mininmum_deposit_amount[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Maximum
                                                    Deposit Amount</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.maximum_deposit_amount"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.maximum_deposit_amount">
                                                        {{errors.maximum_deposit_amount[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Minimum
                                                    Withdrawal Amount</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.minimum_withdrawal"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.minimum_withdrawal">{{
                                                        errors.minimum_withdrawal[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Maximum
                                                    Withdrawal Amount</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.maximum_withdrawal"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.maximum_withdrawal">{{
                                                        errors.maximum_withdrawal[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Daily
                                                    Max Withdrawal Request</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.daily_max_withdraw_request"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger"
                                                        v-if="errors.daily_max_withdraw_request">{{
                                                            errors.daily_max_withdraw_request[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Withdrawal Fee fixed Amount</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.withdrawal_free_amount"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.withdrawal_free_amount">{{
                                                        errors.withdrawal_free_amount[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Withdrawal Fee on Percentage
                                                    %</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.withdrawal_free_on_percentage"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger"
                                                        v-if="errors.withdrawal_free_on_percentage">{{
                                                            errors.withdrawal_free_on_percentage[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Minimum
                                                    Transfer Amount to Other User</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address" v-model="insertdata.mimumun_transfer_amount_to_other_user
                                                        " @keypress="isNumber($event)" />
                                                    <span class="text-danger"
                                                        v-if="errors.mimumun_transfer_amount_to_other_user">{{
                                                            errors.mimumun_transfer_amount_to_other_user[0]
                                                        }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Maximum
                                                    Transfer Amount to Other User</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address" v-model="insertdata.maximum_transfer_amount_to_other_user
                                                        " @keypress="isNumber($event)" />
                                                    <span class="text-danger"
                                                        v-if="errors.maximum_transfer_amount_to_other_user">{{
                                                            errors.maximum_transfer_amount_to_other_user[0]
                                                        }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Transfer
                                                    Fee fixed Amount</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.transfer_fee_fixed_amount"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.transfer_fee_fixed_amount">{{
                                                        errors.transfer_fee_fixed_amount[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Transfer
                                                    Fee on Percentage %</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.traansfer_fee_on_percentage"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger"
                                                        v-if="errors.traansfer_fee_on_percentage">{{
                                                            errors.traansfer_fee_on_percentage[0] }}</span>
                                                </div>
                                            </div>
                                            <hr>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">New
                                                    Member Register
                                                    Bonus</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.register_bonus"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.register_bonus">{{
                                                        errors.register_bonus[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Level -
                                                    1 Bonus</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.level_1_bonus"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.level_1_bonus">{{
                                                        errors.level_1_bonus[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Level -
                                                    2 Bonus</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.level_2_bonus"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.level_2_bonus">{{
                                                        errors.level_2_bonus[0] }}</span>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Level -
                                                    3 Bonus</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control address"
                                                        v-model="insertdata.level_3_bonus"
                                                        @keypress="isNumber($event)" />
                                                    <span class="text-danger" v-if="errors.level_3_bonus">{{
                                                        errors.level_3_bonus[0] }}</span>
                                                </div>
                                            </div>

                                            <hr />

                                            <div class="row mb-3 d-none">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Deposit
                                                    Service Charge Fee</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control deposit_service_charge"
                                                        v-model="insertdata.deposit_service_charge" placeholder="0.00"
                                                        @keypress="isNumber($event)" />
                                                </div>
                                            </div>

                                            <div class="row mb-3 3 d-none">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">Withdrawal Service Charge
                                                    Free</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control"
                                                        v-model="insertdata.withdraw_service_charge" placeholder="0.00"
                                                        @keypress="isNumber($event)" />
                                                </div>
                                            </div>

                                            <hr />
                                            <div class="row mb-3 3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">For Seller Deduct Commission Percetage %
                                                    </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control"
                                                        v-model="insertdata.forSellerCommission" placeholder="0.00"
                                                        @keypress="isNumber($event)" />
                                                </div>
                                            </div>
                                            <div class="row mb-3 3">
                                                <label for="inputEnterYourName"
                                                    class="col-sm-3 col-form-label">For Buyer Deduct Commission Percetage %
                                                    </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control withdraw_service_charge"
                                                        v-model="insertdata.forBuyerCommission" placeholder="0.00"
                                                        @keypress="isNumber($event)" />
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Crypto
                                                    Wallet Address</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control crypto_wallet_address"
                                                        v-model="insertdata.crypto_wallet_address" placeholder="0.00" />
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-success px-5 w-100">
                                                <i class="bx bx-check-circle mr-1"></i> Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END -->
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import swal from "sweetalert2";
window.Swal = swal;

definePageMeta({
    middleware: "is-logged-out",
});

const previewUrl = ref(null);
//const files = ref(null);
const file = ref(null);

const BuyToken = ref(0);

const insertdata = reactive({
    name: "",
    email: "",
    address: "",
    whatsApp: "",
    telegram: "",
    deposit_service_charge: "",
    withdraw_service_charge: "",
    crypto_wallet_address: "",
    maximum_supply: "",
    total_supply: "",
    register_bonus: "",

    level_1_bonus: "",
    level_2_bonus: "",
    level_3_bonus: "",
    beganing_price: "",

    store_policy: "",
    description: "",
    website: "",
    copyright: "",
    currency: "",
    fblink: "",

    forBuyerCommission: "",
    forSellerCommission: "",

    mininmum_deposit_amount: "",
    maximum_deposit_amount: "",
    minimum_withdrawal: "",
    maximum_withdrawal: "",
    daily_max_withdraw_request: "",
    withdrawal_free_amount: "",
    withdrawal_free_on_percentage: "",
    mimumun_transfer_amount_to_other_user: "",
    maximum_transfer_amount_to_other_user: "",
    transfer_fee_fixed_amount: "",
    traansfer_fee_on_percentage: "",
    circlation: "",
    ocn_purchage: 0,
    liquidity_total_supply: "",


});

const isNumber = (evt) => {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
    } else {
        return true;
    }
};

const errors = ref({});
const notifmsg = ref("");
const router = useRouter();

const begaingCalculation = () => {

    const total_supply = insertdata.total_supply;
    const liquidity_total_supply = insertdata.liquidity_total_supply;
    const ocn_purchage = BuyToken.value;
    
    const result_1 = parseFloat(liquidity_total_supply)  + parseFloat(ocn_purchage);
    const b_price = result_1/ total_supply;
    const beganing_price = b_price.toFixed(10);
    insertdata.beganing_price = beganing_price;
 

}

const checkImageDimensionsThunbnail = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
            previewUrl.value = e.target.result;
        };
    };
    reader.readAsDataURL(file);
    //resetInput();
};

const previewImage = (event) => {
    const file = event.target.files[0];
    previewUrl.value = URL.createObjectURL(file);
    checkImageDimensionsThunbnail(file);
};

const onFileSelected = (event) => {
    previewImage(event);
    file.value = event.target.files[0];
};

const saveData = () => {
    const formData = new FormData();
    formData.append("name", insertdata.name);
    formData.append("email", insertdata.email);
    formData.append("address", insertdata.address);
    formData.append("whatsApp", insertdata.whatsApp);
    formData.append("description", insertdata.description);
    formData.append("copyright", insertdata.copyright);
    formData.append("currency", insertdata.currency);
    formData.append("fblink", insertdata.fblink);
    formData.append("telegram", insertdata.telegram);
    formData.append("deposit_service_charge", insertdata.deposit_service_charge);

    formData.append("mininmum_deposit_amount", insertdata.mininmum_deposit_amount);
    formData.append("maximum_deposit_amount", insertdata.maximum_deposit_amount);
    formData.append("minimum_withdrawal", insertdata.minimum_withdrawal);
    formData.append("maximum_withdrawal", insertdata.maximum_withdrawal);

    formData.append("liquidity_total_supply", insertdata.liquidity_total_supply);
    formData.append("circlation", insertdata.circlation);
    formData.append("beganing_price", insertdata.beganing_price);

    formData.append("daily_max_withdraw_request", insertdata.daily_max_withdraw_request);
    formData.append("withdrawal_free_amount", insertdata.withdrawal_free_amount);
    formData.append("withdrawal_free_on_percentage", insertdata.withdrawal_free_on_percentage);
    formData.append("mimumun_transfer_amount_to_other_user", insertdata.mimumun_transfer_amount_to_other_user);
    formData.append("maximum_transfer_amount_to_other_user", insertdata.maximum_transfer_amount_to_other_user);
    formData.append("transfer_fee_fixed_amount", insertdata.transfer_fee_fixed_amount);
    formData.append("traansfer_fee_on_percentage", insertdata.traansfer_fee_on_percentage);

    formData.append("level_1_bonus", insertdata.level_1_bonus);
    formData.append("level_2_bonus", insertdata.level_2_bonus);
    formData.append("level_3_bonus", insertdata.level_3_bonus);


    formData.append("forSellerCommission", insertdata.forSellerCommission);
    formData.append("forBuyerCommission", insertdata.forBuyerCommission);


    formData.append("withdraw_service_charge", insertdata.withdraw_service_charge);
    formData.append("crypto_wallet_address", insertdata.crypto_wallet_address);
    formData.append("store_policy", insertdata.store_policy);

    formData.append("register_bonus", insertdata.register_bonus);
    formData.append("maximum_supply", insertdata.maximum_supply);
    formData.append("total_supply", insertdata.total_supply);
    formData.append("ocn_purchage", insertdata.ocn_purchage);
    formData.append("website", insertdata.website);
    const headers = {
        "Content-Type": "multipart/form-data",
    };
    axios
        .post("/setting/upateSetting", formData, { headers })
        .then((res) => {
            success_noti();
            router.push("/admin/dashboard");
        })
        .catch((error) => {
            if (error.response && error.response.status === 422) {
                // Check if general validation errors are present
                if (error.response.data.errors) {
                    errors.value = Object.values(error.response.data.errors).flat();
                }
            } else {
                // Handle other types of errors here
                console.error("An error occurred:", error);
            }
        });
};

const success_noti = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    Toast.fire({
        icon: "success",
        title: "Your data has been successfully update.",
    });
};


const loadingRow = () => {
    const id = router.currentRoute.value.query.parameter;
    //console.log("----" + category_id);
    axios.get(`/setting/settingrowSystem`).then((response) => {
        //console.log("====" + response.data.data.name);
        //return false;
        insertdata.name = response.data.data.name;
        insertdata.email = response.data.data.email;
        insertdata.address = response.data.data.address;
        insertdata.whatsApp = response.data.data.whatsApp;
        insertdata.description = response.data.data.description;
        insertdata.copyright = response.data.data.copyright;
        insertdata.currency = response.data.data.currency;
        insertdata.fblink = response.data.data.fblink;
        insertdata.website = response.data.data.website;
        insertdata.telegram = response.data.data.telegram;
        insertdata.deposit_service_charge = response.data.data.deposit_service_charge;
        insertdata.register_bonus = response.data.data.register_bonus;
        insertdata.withdraw_service_charge = response.data.data.withdraw_service_charge;
        insertdata.crypto_wallet_address = response.data.data.crypto_wallet_address;

        insertdata.liquidity_total_supply = response.data.data.liquidity_total_supply;
        insertdata.circlation = response.data.data.circlation;

        insertdata.withdraw_minimum_amount = response.data.data.withdraw_minimum_amount;
        insertdata.maximum_supply = response.data.data.maximum_supply;
        insertdata.total_supply = response.data.data.total_supply;
        insertdata.level_1_bonus = response.data.data.level_1_bonus;
        insertdata.level_2_bonus = response.data.data.level_2_bonus;
        insertdata.level_3_bonus = response.data.data.level_3_bonus;

        insertdata.mininmum_deposit_amount = response.data.data.mininmum_deposit_amount;
        insertdata.maximum_deposit_amount = response.data.data.maximum_deposit_amount;
        insertdata.minimum_withdrawal = response.data.data.minimum_withdrawal;
        insertdata.maximum_withdrawal = response.data.data.maximum_withdrawal;
        insertdata.daily_max_withdraw_request = response.data.data.daily_max_withdraw_request;
        insertdata.withdrawal_free_amount = response.data.data.withdrawal_free_amount;
        insertdata.withdrawal_free_on_percentage = response.data.data.withdrawal_free_on_percentage;
        insertdata.mimumun_transfer_amount_to_other_user = response.data.data.mimumun_transfer_amount_to_other_user;
        insertdata.maximum_transfer_amount_to_other_user = response.data.data.maximum_transfer_amount_to_other_user;

        insertdata.forSellerCommission = response.data.data.forSellerCommission;
        insertdata.forBuyerCommission = response.data.data.forBuyerCommission;

        insertdata.transfer_fee_fixed_amount = response.data.data.transfer_fee_fixed_amount;
        insertdata.traansfer_fee_on_percentage = response.data.data.traansfer_fee_on_percentage;
        insertdata.ocn_purchage = response.data.data.ocn_purchage;
        insertdata.beganing_price = response.data.data.beganing_price;
        BuyToken.value = response.data.BuyToken;



    });
};

// Call the loadeditor function when the component is mounted
onMounted(async () => {
    
    begaingCalculation();
    loadingRow();

});
</script>
