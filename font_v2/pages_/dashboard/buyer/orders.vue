<template>
  <title>My Orders</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
     
        <!-- Breadcumb Sections -->

        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                    <a href="#">Orders</a>
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
        <center>
          <div class="container">
            <div class="loading-indicator" v-if="loading" style="text-align: center;">
              <ProgressbarLoader />
            </div>
          </div>
          </center>
        <div class="container">
          <h3>Total Amount is : ${{totalAmt}}</h3>
          <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">
            <div class="packages_table table-responsive">
              <table class="table-style1 table at-savesearch">
                <thead class="t-head">
                  <tr>
                    <th scope="col">OrderID</th>
                    <th scope="col">OrderDate</th>
                    <th scope="col">Delivery Time</th>
                    <th scope="col">Amount</th>
                    <th scope="col text-center" style="text-align: center;">Action</th>
                  </tr>
                </thead>
                <tbody class="t-body">
                  <!-- v-for loop to iterate over orderData -->
                  <tr v-for="(order, index) in orderData" :key="index">
                    <th scope="row">
                      <div>#{{ order.orderId }} <span class="ms-3"><nuxt-link :to="`/gigs/${order.gig_slug}`">{{
                        order.gig_name }}</nuxt-link>
                        </span></div>
                    </th>
                    <td class="vam">{{ formatDate(order.created_at) }}</td>
                    <td class="vam">{{ order.reamingitime }}</td>
                    <td class="vam">${{ order.selected_price }}</td>
                    <td class="vam" style="text-align: center;">
                     
                      <a href="#" @click="getAllOrdersList">
                        <i class="fa fa-refresh" aria-hidden="true"></i> Reload
                      </a>

                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <!-- END Profile -->
        <div />
      </div>
    </div>

    <!-- Modal Template -->

    <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Order Status [{{ gigName }}]</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="form-style1" @submit.prevent="submitFrm()" id="formrest">
              <input type="hidden" v-model="orderId" />
              <center>
                <h3>OrderID: {{ orderId }}</h3>
              </center>
              <!-- Billing Information -->
              <div class="mb-3">
                <label for="fullName" class="form-label">Status</label>
                <select v-model="selectedStatus" class="form-select">
                  <option v-for="status in orderStatuses" :key="status.id" :value="status.id">
                    {{ status.text }}
                  </option>
                </select>
              </div>

              <!-- Payment Submit Button -->
              <button type="submit" class="btn btn-primary w-100 text-white">Update</button>
            </form>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </body>
</template>

<script setup>
definePageMeta({
  middleware: "is-logged-out",
});
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import axios from 'axios';


import Swal from "sweetalert2";
const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();
const errors = ref({});
const orderData = ref('');
const totalAmt = ref(0);
const gigName = ref('');
const orderId = ref('');

const selectedStatus = ref(null); // Track the selected dropdown status



const submitFrm = () => {
  const formData = new FormData();
  formData.append("orderId", orderId.value);
  formData.append("selectedStatus", selectedStatus.value);
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  axios.post("/order/updateOrder", formData, { headers })
    .then((res) => {
      document.getElementById("formrest").reset();
      getAllOrdersList();
      Swal.fire({
        icon: 'success',
        title: 'Order Update',
        text: 'Your order confirm please.',
      });
      $('#staticBackdrop').modal('hide');

      //router.push("/dashboard/welcome");
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


// Define order statuses
const orderStatuses = ref([
  { id: 1, text: 'Order Placed' },
  { id: 2, text: 'Completed' },
  { id: 3, text: 'Delivered' },
  { id: 4, text: 'Under Review' },
  { id: 5, text: 'Order Cancelled' },
]);

const showDetails = (order) => {
  console.log(order.orderId);
  orderId.value = order.orderId;
  selectedStatus.value = order.order_status;
  gigName.value = order.gig_name;
  $('#staticBackdrop').modal('show');

}
// Function to format the date
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const getAllOrdersList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/order/getOrder`);
    orderData.value = response.data.orders;
    totalAmt.value = response.data.totalAmt;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
 // getCatList();
  getAllOrdersList();

});

</script>

<style scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
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