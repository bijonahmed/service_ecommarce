<template>
  <title>Admin Dashboard</title>
  <div class="content-wrapper mt-3" v-if="userRoleIsAdmin">
    <section class="content" v-if="userStatusIsAdmin">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card card-secondary">
                <div class="card-header">
                  <h3 class="card-title">Welcome to {{ user_name }}</h3>
                </div>

                <div class="card-body">
                  <br />
                  <div class="row">
                    <div class="container-fluid">
                      <div class="row">
                        <center>
                          <div class="loading-indicator" v-if="loading" style="text-align: center">
                            <Loader />
                          </div>
                        </center>

                        <div class="col-md-3 col-sm-6 col-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-warning"><i class="fas fa-user-circle"></i></span>
                            <nuxt-link to="/usermanagement/userlist" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Users</span>
                                <span class="info-box-number">{{
                                  total_users
                                  }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-info"><i class="fa fa-money"></i></span>
                            <nuxt-link to="/walletmanagement/deposit-management" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Deposit Amount</span>
                                <span class="info-box-number">${{ total_deposit }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>



                        <div class="col-md-3 col-sm-6 col-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-info"><i class="fa fa-money"></i></span>
                            <nuxt-link to="/walletmanagement/deposit-management" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Service Fee Amount</span>
                                <span class="info-box-number">${{ serviceFee }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>



                <div class="col-md-3 col-sm-6 col-12">
                                  <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="fa fa-money"></i></span>
                                    <nuxt-link to="/walletmanagement/deposit-management" style="text-decoration: none">
                                      <div class="info-box-content">
                                        <span class="info-box-text">Total Amount in MLM Wallet of USer</span>
                                        <span class="info-box-number">${{ totalmlmwallet }}</span>
                                      </div>
                                    </nuxt-link>
                                  </div>
                                </div>




                        <div class="col-md-3 col-sm-6 col-12 d-none">
                          <div class="info-box">
                            <span class="info-box-icon bg-success"><i class="fa fa-money-bill"></i></span>
                            <nuxt-link to="/walletmanagement/withdrawal-management" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Withdrawal</span>
                                <span class="info-box-number">{{
                                  total_withdraw
                                  }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-danger"><i class="fa fa-product-hunt"></i></span>
                            <nuxt-link to="#" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Seller</span>
                                <span class="info-box-number">{{ total_seller }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-danger"><i class="fa fa-product-hunt"></i></span>
                            <nuxt-link to="#" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Buyer</span>
                                <span class="info-box-number">{{ total_buyer }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-primary"><i class="fa fa-product-hunt"></i></span>
                            <nuxt-link to="/walletmanagement/pay-loan-return-management" style="text-decoration: none">
                              <div class="info-box-content">
                                <span class="info-box-text">Total Order</span>
                                <span class="info-box-number">{{ total_order }}</span>
                              </div>
                            </nuxt-link>
                          </div>
                        </div>


                      </div>
                      <div class="row">
                        <div class="col-12">
                          <ChartComponent />
                        </div>
                        <!-- <div class="col-6">
                          <usersJoinReg />
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
  <!--end page wrapper -->
</template>

<script setup>
import ChartComponent from "~/components/usersJoinCharts.vue";
import usersJoinReg from "~/components/usersJoinReg.vue";
import { useUserStore } from "~~/stores/user";
import { storeToRefs } from "pinia";
import axios from "axios";

const router = useRouter();
const userStore = useUserStore();
const total_deposit = ref(0);
const total_withdraw = ref(0);
const total_users = ref(0);
const total_products = ref(0);
const total_seller = ref(0);
const user_name = ref('');
const total_buyer = ref(0);
const serviceFee = ref(0);
const totalmlmwallet = ref(0);
const total_order = ref(0);

const { email } = storeToRefs(userStore);
const loading = ref(true);
definePageMeta({
  middleware: "is-logged-out",
});

const userRoleIsAdmin = computed(() => userStore.role_id === 1);
const userStatusIsAdmin = computed(() => userStore.status === 1);
const fetchData = async () => {
  try {
    const response = await axios.get(`/product/dashboardCounting`);
    total_deposit.value = response.data.total_deposit;
    serviceFee.value = response.data.serviceFee;
    totalmlmwallet.value = response.data.totalmlmwallet;
    total_withdraw.value = response.data.total_withdraw;
    total_users.value = response.data.total_users;
    total_products.value = response.data.total_products;
    total_seller.value = response.data.total_seller;
    total_buyer.value = response.data.total_buyer;
    total_order.value = response.data.total_order;
    user_name.value = response.data.user_name;
  } catch (error) {
    // Handle error
  } finally {
    //loading.value = false;
  }
};

onMounted(async () => {
  // After 5 seconds, hide the loading indicator
  setTimeout(() => {
    loading.value = false; // Hide the loading indicator after 5 seconds
  }, 500);

  try {
    fetchData();
    await userStore.getUser();
  } catch (error) {
    //  console.log(error)
  }
});
</script>
