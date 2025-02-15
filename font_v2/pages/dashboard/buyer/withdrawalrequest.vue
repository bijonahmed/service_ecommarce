<template>
  <title>Withdrawal</title>

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

                    <!-- Left navigation button -->
                    <button class="btn btn-default btn_l position-absolute left-0"
                        @click="goToPrevSlide">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>

                    <!-- Swiper container -->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="data in categoryData" :key="data.id">
                                <nuxt-link :to="`/category/${data.slug}`">
                                    {{ data.name }}
                                </nuxt-link>
                            </div>
                        </div>

                    </div>

                    <!-- Right navigation button -->
                    <button class="btn btn-default btn_r position-absolute right-0"
                        @click="goToNextSlide">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
        <!-- Breadcumb Sections -->

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
                    <a href="#">Withdrawal</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Start Profile -->
        <div class="container">
          <div class="card border-top border-0 border-4 border-info">
            <div class="card-body">

              <p class="text-black">Your Earning Amount is : ${{ earning }}</p>

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="withdrawal-tab" data-bs-toggle="tab" href="#withdrawal" role="tab"
                    aria-controls="withdrawal" aria-selected="true">Withdrawal Request</a>
                </li>
                <li class="nav-item" role="presentation" @click=getWithdrawalMethod(1)>
                  <a class="nav-link" id="wallet-tab" data-bs-toggle="tab" href="#wallet" role="tab"
                    aria-controls="wallet" aria-selected="false">Add Cryptop Address</a>
                </li>
                <li class="nav-item" role="presentation" @click=getWithdrawalMethod(2)>
                  <a class="nav-link" id="AddPaypal-tab" data-bs-toggle="tab" href="#AddPaypal" role="tab"
                    aria-controls="AddPaypal" aria-selected="false">Add Paypal Address</a>
                </li>
                <li class="nav-item" role="presentation" @click=getWithdrawalMethod(3)>
                  <a class="nav-link" id="AddPayooner-tab" data-bs-toggle="tab" href="#AddPayooner" role="tab"
                    aria-controls="AddPayooner" aria-selected="false">Add Payooner Address</a>
                </li>

                <li class="nav-item" role="presentation" @click=getWithdrawalMethod(4)>
                  <a class="nav-link" id="AddBank-tab" data-bs-toggle="tab" href="#AddBank" role="tab"
                    aria-controls="AddBank" aria-selected="false">Add Bank Account</a>
                </li>
              </ul>

              <!-- Tab content -->
              <div class="tab-content" id="myTabContent">
                <!-- Withdrawal Request Tab -->
                <div class="tab-pane fade show active" id="withdrawal" role="tabpanel" aria-labelledby="withdrawal-tab">
                  <div class="row">
                    <div class="col-md-4">
                      <form class="mt-3" @submit.prevent="submitWithdrawalAdd()" id="formrest">
                        <div class="mb-3">
                          <label for="withdrawalSelect" class="form-label">Select Type:</label>

                          <select id="withdrawalSelect" class="form-select" v-model="selected_type"
                            @change="getWithdrawalMethod(selected_type)">
                            <option value="" disabled selected>Select</option>
                            <option value="1">Crypto</option>
                            <option value="2">Paypal</option>
                            <option value="3">Payooner</option>
                            <option value="4">Bank</option>
                          </select>
                          <span class="text-danger" v-if="errors.selected_type">{{ errors.selected_type[0] }}</span>
                        </div>

                        <!-- {{ selected_type }} -->

                        <!-- For Crypto -->
                        <div class="mb-3" v-if="selected_type == 1">
                          <label for="accountDetails" class="form-label">Wallet Address</label>
                          <select v-model="method_id" class="form-select">
                            <option value="" disabled selected>Select a Wallet Address</option>
                            <option v-for="(method, index) in withDrawaldata" :key="index" :value="method.id">
                              {{ method.name }} - {{ method.wallet_address }}
                            </option>
                          </select>
                          <span class="text-danger" v-if="errors.method_id">{{ errors.method_id[0]
                            }}</span>
                          <!-- <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p> -->
                        </div>

                        <!-- For Paypal -->
                        <div class="mb-3" v-if="selected_type == 2">
                          <label for="accountDetails" class="form-label">Papal ID</label>
                          <select v-model="method_id" class="form-select">
                            <option value="" disabled selected>Select Papal</option>
                            <option v-for="(method, index) in withDrawaldata" :key="index" :value="method.id">
                              {{ method.email }}
                            </option>
                          </select>
                          <span class="text-danger" v-if="errors.method_id">{{ errors.method_id[0]
                            }}</span>
                          <!-- -----<p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p> -->
                        </div>

                        <!-- For Payooner -->
                        <div class="mb-3" v-if="selected_type == 3">

                          <label for="accountDetails" class="form-label">Payooner ID</label>
                          <select v-model="method_id" class="form-select">
                            <option value="" disabled selected>Select Payooner</option>
                            <option v-for="(method, index) in withDrawaldata" :key="index" :value="method.id">
                              {{ method.email }}
                            </option>
                          </select>
                          <span class="text-danger" v-if="errors.method_id">{{ errors.method_id[0]
                            }}</span>
                          <!-- <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p> -->
                        </div>


                        <!-- For Bank -->
                        <span v-if="selected_type == 4">

                          <div class="mb-3">
                            <label for="accountDetails" class="form-label">Bank </label>
                            <select v-model="method_id" class="form-select">
                              <option value="" disabled selected>Select a Bank</option>
                              <option v-for="(method, index) in withDrawaldata" :key="index" :value="method.id">
                                {{ method.bankName }} - {{ method.branchName }} {{ method.account_name }} - {{
                                  method.account_num }} -
                                {{ method.ibn_no }}
                              </option>
                            </select>
                            <span class="text-danger" v-if="errors.method_id">{{ errors.method_id[0]
                              }}</span>
                            <!-- <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p> -->
                          </div>
                        </span>


                        <div class="mb-3">
                          <label for="accountDetails" class="form-label">Amount</label>
                          <input type="text" class="form-control" placeholder="0" v-model="withdrawal_amount"
                            @input="filterInput" @keyup="validationAmount">
                          <span class="text-danger" v-if="errors.withdrawal_amount">{{ errors.withdrawal_amount[0]
                            }}</span>
                          <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
                        </div>
                        <button type="submit" class="btn btn-primary text-white" :disabled="isButtonDisabled">Send
                          Request</button>
                      </form>
                    </div>
                    <div class="col-md-8">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                            <th scope="col">Details</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(withdrawal, index) in withData" :key="index">
                            <td>{{ withdrawal.created_at }}</td>
                            <td>{{ capitalizeFirstLetter(withdrawal.type) }}</td>
                            <td>
                              <!-- {{withdrawal.selected_type}} -->
                              <span v-if="withdrawal.selected_type == 1">
                                Wallet Type: {{ withdrawal.crypto_wallet_type }}<br />
                                Wallet Address: {{ withdrawal.wallet_address }}
                              </span>

                              <span v-if="withdrawal.selected_type == 2">
                                Paypal ID: {{ withdrawal.email }}
                              </span>

                              <span v-if="withdrawal.selected_type == 3">
                                Payooner ID: {{ withdrawal.email }}
                              </span>


                              <span v-if="withdrawal.selected_type == 4">
                                Bank Name:{{ withdrawal.bankName }} , Branch Name : {{ withdrawal.branchName }}, AC Name
                                : {{ withdrawal.account_name }}, AC Num : {{ withdrawal.account_num }}, IBN NO. : {{
                                  withdrawal.ibn_no }}
                              </span>
                            </td>

                            <td>
                              <center>${{ withdrawal.withdrawal_amount }}</center>
                            </td>

                            <td v-html="withdrawal.wStatus"></td>
                          </tr>
                          <tr v-if="withDrawaldata.length === 0">
                            <td colspan="4" class="text-center">No withdrawal data available.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Add Wallet Address Tab -->
                <div class="tab-pane fade" id="wallet" role="tabpanel" aria-labelledby="wallet-tab">
                  <div class="row">
                    <div class="col-md-7">
                      <form class="mt-3" @submit.prevent="submitWithdrawalAddressCrypto()">
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Select Withdrawal Method</label>
                          <select class="form-select" id="name" v-model="insertdatawithdrwal.name">
                            <option value="">Choose...</option>
                            <option value="USDT TRC-20">USDT TRC-20</option>
                          </select>

                          <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                        <div class="mb-3">
                          <label for="accountDetails" class="form-label">Wallet Address</label>
                          <input type="text" class="form-control" id="accountDetails"
                            placeholder="Enter your wallet address" v-model="insertdatawithdrwal.wallet_address">
                          <span class="text-danger" v-if="errors.wallet_address">{{ errors.wallet_address[0] }}</span>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">Save</button>
                      </form>
                    </div>
                    <div class="col-md-5">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Wallet Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(withdrawal, index) in withDrawaldata" :key="index">
                            <td>{{ withdrawal.name }}</td>
                            <td>{{ withdrawal.wallet_address }}</td>
                          </tr>
                          <tr v-if="withDrawaldata.length === 0">
                            <td colspan="2" class="text-center">No Crypto data available.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                </div>

                <div class="tab-pane fade" id="AddPaypal" role="tabpanel" aria-labelledby="AddPaypal-tab">
                  <div class="row">
                    <div class="col-md-7">
                      <form class="mt-3" @submit.prevent="submitWithdrawalAddressPaypal()">
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Paypal ID</label>
                          <input type="text" class="form-control" id="accountDetails"
                            placeholder="Enter your Paypal Email" v-model="email">
                          <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">Save</button>
                      </form>
                    </div>
                    <div class="col-md-5">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Email ID</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(withdrawal, index) in withDrawaldata" :key="index">
                            <td>{{ withdrawal.email }}</td>
                          </tr>
                          <tr v-if="withDrawaldata.length === 0">
                            <td colspan="1" class="text-center">No Paypal data available.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                </div>

                <div class="tab-pane fade" id="AddPayooner" role="tabpanel" aria-labelledby="AddPayooner-tab">
                  <div class="row">
                    <div class="col-md-7">
                      <form class="mt-3" @submit.prevent="submitWithdrawalAddressPayooner()">
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Payooner ID</label>
                          <input type="text" class="form-control" id="accountDetails"
                            placeholder="Enter your Payooner ID" v-model="email">
                          <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">Save</button>
                      </form>
                    </div>
                    <div class="col-md-5">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Payooner ID</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(withdrawal, index) in withDrawaldata" :key="index">
                            <td>{{ withdrawal.email }}</td>
                          </tr>
                          <tr v-if="withDrawaldata.length === 0">
                            <td colspan="1" class="text-center">No Payooner data available.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                </div>

                <div class="tab-pane fade" id="AddBank" role="tabpanel" aria-labelledby="AddBank-tab">
                  <div class="row">
                    <div class="col-md-5">
                      <form class="mt-3" @submit.prevent="submitWithdrawalAddressBank()">
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Country</label>
                          <select name="" id="" class="form-control" v-model="insertdataBank.countryName">
                            <option value="" selected disabled >Select country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="USA">USA</option>
                          </select>
                          <span class="text-danger" v-if="errors.countryName">{{ errors.countryName[0] }}</span>
                        </div>
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Bank name</label>
                          <input type="text" class="form-control"  
                            v-model="insertdataBank.bank_name">
                          <span class="text-danger" v-if="errors.bank_name">{{ errors.bank_name[0] }}</span>
                        </div>

                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Account Title</label>
                          <input type="text" class="form-control" 
                            v-model="insertdataBank.account_name">
                          <span class="text-danger" v-if="errors.account_name">{{ errors.account_name[0] }}</span>
                        </div>
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Account Number</label>
                          <input type="text" class="form-control"  
                            v-model="insertdataBank.account_num">
                          <span class="text-danger" v-if="errors.account_num">{{ errors.account_num[0] }}</span>
                        </div>

                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">IBN</label>
                          <input type="text" class="form-control"  
                            v-model="insertdataBank.ibn_no">
                          <span class="text-danger" v-if="errors.ibn_no">{{ errors.ibn_no[0] }}</span>
                        </div>
                        <div class="mb-3">
                          <label for="withdrawalMethod" class="form-label">Swift/BIC</label>
                          <input type="text" class="form-control"  
                            v-model="insertdataBank.swift_bic">
                          <span class="text-danger" v-if="errors.swift_bic">{{ errors.swift_bic[0] }}</span>
                        </div>

                        <!-- <div>
                          <label for="withdrawalMethod" class="form-label">Bank</label>
                          <select v-model="insertdataBank.bank_id" class="form-control" @change="getBranchList">
                            <option value="">Select Bank</option>
                            <option v-for="bank in bankData" :key="bank.id" :value="bank.id">{{ bank.name }}</option>
                          </select>
                          <span class="text-danger" v-if="errors.bank_id">{{ errors.bank_id[0] }}</span>
                        </div>

                        <div>
                          <label for="withdrawalMethod" class="form-label">Branch</label>
                          <select v-model="insertdataBank.branch_id" class="form-control">
                            <option value="">Select Branch</option>
                            <option v-for="branch in branchData" :key="branch.id" :value="branch.id">{{ branch.name }}
                            </option>
                          </select>
                          <span class="text-danger" v-if="errors.branch_id">{{ errors.branch_id[0] }}</span>
                        </div> -->

                        <br />

                        <button type="submit" class="btn btn-primary text-white">Save</button>
                      </form>
                    </div>
                    <div class="col-md-7">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Account Title</th>
                            <th scope="col">Account Number</th>
                            <th scope="col">IBN No.</th>
                            <th scope="col">Bank Name</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(withdrawal, index) in withDrawaldata" :key="index">
                            <td>{{ withdrawal.countryName || 'N/A' }}</td>
                            <td>{{ withdrawal.account_name }}</td>
                            <td>{{ withdrawal.account_num }}</td>
                            <td>{{ withdrawal.ibn_no }}</td>
                            <td>{{ withdrawal.bank_name }}</td>
                         
                          </tr>
                          <tr v-if="withDrawaldata.length === 0">
                            <td colspan="5" class="text-center">No Bank data available.</td>
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

        <!-- Modal Template -->

      </div>
    </div>

    <Footer />
  </body>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
const router = useRouter();

if (process.client) {
  window.Swal = Swal;

}

definePageMeta({
  middleware: 'is-logged-out',

})

const method_id = ref("");
const selected_type = ref('');
const errorMessage = ref('');
const withData = ref([]);
const withDrawaldata = ref([]);
const categoryData = ref([]);
const bankData = ref([]);
const branchData = ref([]);
const earning = ref(0);
const wallet_address = ref('');
const type = ref('');
const withdrawal_amount = ref('');
const errors = ref({});
const loading = ref(false)
const selectedBank = ref("")
const email = ref("")
const selectedbranch = ref("")
//Find Product Row

const insertdatawithdrwal = reactive({
  name: '',
  wallet_address: '',
});
const insertdataBank = reactive({
  countryName:'',
  account_name: '',
  account_num: '',
  ibn_no: '',
  swift_bic: '',
  bank_id: '',
  branch_id: '',
  bank_name:''
});

const getBranchList = async () => {

  let bankId = insertdataBank.bank_id;
  try {
    loading.value = true;
    const response = await axios.get('/setting/checkBankWiseBranch', {
      params: {
        bankId: bankId,
      }
    });
    branchData.value = response.data.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching bank list:", error);
  } finally {
    loading.value = false;
  }

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const submitWithdrawalAdd = () => {
  const formData = new FormData();

  formData.append('selected_type', selected_type.value);
  formData.append('method_id', method_id.value);
  formData.append('withdrawal_amount', withdrawal_amount.value);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/deposit/saveWithdrawal', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();

      Swal.fire({
        title: 'Successfulluy Request send',
        text: 'Thank you.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      withdrawList();
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
        errorMessage.value = error.response.data.errors.error_usdt;
        errorMessage.value = error.response.data.errors.error_minim_usdt.join(' ');

      } else {
        // Handle other types of errors here
        //console.error('An error occurred:', error);
      }
    });

}

const submitWithdrawalAddressBank = () => {

  const formData = new FormData();
  formData.append('type', 'bank');
  formData.append('countryName', insertdataBank.countryName);
  formData.append('account_name', insertdataBank.account_name);
  formData.append('account_num', insertdataBank.account_num);
  formData.append('ibn_no', insertdataBank.ibn_no);
  formData.append('bank_id', insertdataBank.bank_id);
  formData.append('branch_id', insertdataBank.branch_id);
  formData.append('bank_name', insertdataBank.bank_name);
  formData.append('swift_bic', insertdataBank.swift_bic);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/user/addCryptoWalletAddressBank', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();

      Swal.fire({
        title: 'Added your Bank Details!',
        text: 'Thank you.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,  // Close after 3 seconds
        timerProgressBar: true  // Shows a progress bar
      });
      getWithdrawalMethod(4);
      insertdataBank.account_name = "";
      insertdataBank.account_num = "";
      insertdataBank.ibn_no = "";
      insertdataBank.bank_id = "";
      insertdataBank.branch_id = "";

      // router.push('/dashboard/buyer/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });
}

const submitWithdrawalAddressPayooner = () => {
  const formData = new FormData();
  formData.append('type', 'payooner');
  formData.append('email', email.value);
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/user/addCryptoWalletAddressPayooner', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();

      Swal.fire({
        title: 'Added your Payooner address!',
        text: 'Thank you.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,  // Close after 3 seconds
        timerProgressBar: true  // Shows a progress bar
      });
      getWithdrawalMethod(3);
      email.value = "";

      // router.push('/dashboard/buyer/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });
}

const submitWithdrawalAddressPaypal = () => {
  const formData = new FormData();
  formData.append('type', 'paypal');
  formData.append('email', email.value);
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/user/addCryptoWalletAddressPaypal', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();

      Swal.fire({
        title: 'Added your Paypal address!',
        text: 'Thank you.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,  // Close after 3 seconds
        timerProgressBar: true  // Shows a progress bar
      });
      getWithdrawalMethod(2);
      email.value = "";

      // router.push('/dashboard/buyer/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });
}

const submitWithdrawalAddressCrypto = () => {
  const formData = new FormData();
  formData.append('type', 'crypto');
  formData.append('name', insertdatawithdrwal.name);
  formData.append('wallet_address', insertdatawithdrwal.wallet_address);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/user/addCryptoWalletAddress', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();

      Swal.fire({
        title: 'Added your wallet address!',
        text: 'Thank you.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,  // Close after 3 seconds
        timerProgressBar: true  // Shows a progress bar
      });
      getWithdrawalMethod(1);
      insertdatawithdrwal.name = "";
      insertdatawithdrwal.wallet_address = "";
      // router.push('/dashboard/buyer/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });
}

const getBankList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/setting/getBankList`);
    bankData.value = response.data.data;
  } catch (error) {
    // Handle error
  } finally {
    loading.value = false;
  }
};

const getCatList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;
  } catch (error) {
    // Handle error
  } finally {
    loading.value = false;
  }
};

const getWithdrawalMethod = async (type) => {
  console.log("===" + type);
  try {
    loading.value = true;
    const response = await axios.get('/user/getwithdrawalMethod', {
      params: {
        type: type,

      }
    });
    withDrawaldata.value = response.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

// Method to validate amounts
const validationAmount = () => {
  // Convert withdrawal_amount to a number for comparison
  const withdrawalValue = Number(withdrawal_amount.value);
  if (withdrawalValue > earning.value) {
    errorMessage.value = "Withdrawal amount cannot be greater than your earning.";
  } else {
    errorMessage.value = ""; // Clear error if the condition is satisfied
  }
};

// Computed property to determine if the button should be disabled
const isButtonDisabled = computed(() => {
  const withdrawalValue = Number(withdrawal_amount.value);
  return withdrawalValue > earning.value;
});

const getEarning = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/user/checkBalance`);
    earning.value = response.data.currentBalance;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const withdrawList = async () => {
  try {
    //loading.value = true;
    const response = await axios.get(`/deposit/getwithdrawList`);
    withData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const swiper = ref(null);
// Call the loadeditor function when the component is mounted
onMounted(async () => {
  getBankList();
  withdrawList();
  getCatList();
  getWithdrawalMethod();
  getEarning();

swiper.value = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.btn_r',
        prevEl: '.btn_l'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
})
const goToPrevSlide = () => {
    if (swiper.value) {
        swiper.value.slidePrev()  // Go to previous slide
    }
}

const goToNextSlide = () => {
    if (swiper.value) {
        swiper.value.slideNext()  // Go to next slide
    }
}
});

</script>

<style scoped>
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