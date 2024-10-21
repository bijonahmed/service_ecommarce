<template>
  <title>Withdrawal</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
       
       
        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                    <a href="#">Withdrawal</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/welcome">Back</nuxt-link></div>
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

              </ul>
              <div class="loading-indicator" v-if="loading" style="text-align: center;">
          <Loader />
        </div>
              <!-- Tab content -->
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="withdrawal" role="tabpanel" aria-labelledby="withdrawal-tab">

                  <div class="row">

                    <div class="col-md-4">

                      <form class="mt-3" @submit.prevent="submitWithdrawalAdd()" id="formrest">
                        <div class="mb-3">
                          <label for="withdrawalSelect" class="form-label">Choose a withdrawal method:</label>
                          <select id="withdrawalSelect" class="form-select" v-model="wallet_address">
                            <option value="" disabled selected>Select a withdrawal method</option>
                            <option v-for="(withdrawal, index) in withDrawaldata" :key="index"
                              :value="withdrawal.account_number">
                              {{ withdrawal.name }} - {{ withdrawal.account_number }}
                            </option>
                          </select>
                          <span class="text-danger" v-if="errors.wallet_address">{{ errors.wallet_address[0] }}</span>
                        </div>


                        <div class="mb-3">
                          <label for="accountDetails" class="form-label">Amount</label>
                          <input type="text" class="form-control" id="accountDetails"
                            placeholder="Enter your wallet address" v-model="withdrawal_amount" @input="filterInput"
                            @keyup="validationAmount">
                          <span class="text-danger" v-if="errors.withdrawal_amount">{{
                            errors.withdrawal_amount[0] }}</span>
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
                            <th scope="col">Request Date</th>
                            <th scope="col"><center>Request Amount</center></th>
                            <th scope="col">Wallet Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(withdrawal, index) in withData" :key="index">
                            <td>{{ withdrawal.created_at }}</td>
                            <td><center>${{ withdrawal.withdrawal_amount }}</center></td>
                            <td>{{ withdrawal.wallet_address }}</td>
                            <td v-html="withdrawal.wStatus"></td>
                            <td>{{ withdrawal.remarks }}</td>
                          </tr>
                          <tr v-if="withDrawaldata.length === 0">
                            <td colspan="5" class="text-center">No withdrawal data available.</td>
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

const errorMessage = ref('');
const withData = ref([]);
const withDrawaldata = ref([]);
const categoryData = ref([]);
const account_number = ref('');
const earning = ref(0);
const wallet_address = ref('');
const withdrawal_amount = ref('');
const errors = ref({});
const loading = ref(false)
//Find Product Row


const submitWithdrawalAdd = () => {


  const formData = new FormData();
  formData.append('wallet_address', wallet_address.value);
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
      router.push('/dashboard/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
        errorMessage.value = error.response.data.errors.error_usdt;
        errorMessage.value = error.response.data.errors.error_minim_usdt.join(' ');

      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });


}

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


const getWithdrawalMethod = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/user/getwithdrawalMethod`);
    withDrawaldata.value = response.data.data;
  } catch (error) {
    console.log(error);
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

const freelancerEarning = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/order/getOrderForSellerEarning`);
    earning.value = response.data.earning;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};


const withdrawList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/deposit/getwithdrawList`);
    withData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

// Call the loadeditor function when the component is mounted
onMounted(async () => {
  withdrawList();
 // getCatList();
  getWithdrawalMethod();
  freelancerEarning();
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