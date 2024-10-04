<template>
  <title>Bulk Order Status Update</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Bulk Order Status Update</p>
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
          <form @submit.prevent="submitBulkOrder" id="formrest" enctype="multipart/form-data">
            <div class="row text-center" style="text-align: center; padding-bottom: 10px">
              <center>
                <button type="button" class="btn btn-default">
                  To be paid
                  <span class="badge bg-secondary">{{ tobePaid_count }}</span>
                </button>
                <button type="button" class="btn btn-default">
                  To be confiremed
                  <span class="badge bg-secondary">{{
                    tobeconfiremed_count
                  }}</span>
                </button>
                <button type="button" class="btn btn-default">
                  Goods To be received
                  <span class="badge bg-secondary">{{
                    goodsTobereceived_count
                  }}</span>
                </button>
                <button type="button" class="btn btn-default">
                  Platform procced
                  <span class="badge bg-secondary">{{
                    platformprocced_count
                  }}</span>
                </button>
                <button type="button" class="btn btn-default">
                  To be shipped
                  <span class="badge bg-secondary">{{
                    tobeshipped_count
                  }}</span>
                </button>

                <button type="button" class="btn btn-default">
                  Complete
                  <span class="badge bg-secondary">{{ complete_count }}</span>
                </button>
              </center>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-10 mb-2">
                <label>Select Store</label>
                <select name="storeType" id="storeType" class="form-control" v-model="selectedcategoryId"
                  @change="handleSelectionChange">
                  <option value="">Select Stores</option>
                  <option v-for="store in activeStores" :key="store.id" :value="store.id">
                    {{ store.name }}
                  </option>
                </select>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-10 mb-2">
                <label>Pay confirmation date</label>
                <input type="date" placeholder="Start date" v-model="pay_confirm_date" class="form-control" />
              </div>

              <div class="col-lg-2 col-md-2 col-sm-1 mb-2">
                <label>Order Status</label>
                <select v-model="selectedStatus" class="form-control" @change="filterData()">
                  <!-- Loop over allStatus to create options -->
                  <option value="">All</option>
                  <option v-for="status in allStatus" :key="status.id" :value="status.id">
                    {{ status.name }} [{{ status.id }}]
                  </option>
                </select>
              </div>

              <div class="col-lg-2 col-md-2 col-sm-1 mb-4" style="margin-top: 35px">
                <button @click="filterData" type="button">Search</button>
              </div>
              <br />
            </div>

            <div class="row">
              <div class="loading-indicator" v-if="loading" style="text-align: center">
                <BulkLoader />
              </div>

              <div class="col-md-12" v-if="ordersCount">
                <center>Number of orders {{ ordersCount }}</center>
                <div class="card-body">
                  <div>
                    <div class="row">
                      <div class="col-6"></div>
                      <div class="col-3">
                        <select v-model="updateOrderStatus" class="form-control" required>
                          <!-- Loop over allStatus to create options -->
                          <option v-for="status in allStatus" :key="status.id" :value="status.id">
                            {{ status.name }} [{{ status.id }}]
                          </option>
                        </select>
                        <span class="text-danger" v-if="errors.orderStatus">{{
                          errors.orderStatus[0]
                        }}</span>
                      </div>
                      <div class="col-2">
                        <button type="submit">Update</button>
                      </div>
                    </div>

                    <hr />

                    <table class="table w-100 table-wrapper">
                      <thead>
                        <tr>
                          <th class="text-left">
                            <input type="checkbox" id="checkAll" v-model="selectAll" @change="toggleAllCheckboxes" />
                          </th>
                          <th class="text-left">SL</th>
                          <th class="text-left">OrderID</th>
                          <th class="text-left">Product Name</th>
                          <th class="text-left">Cost Price</th>
                          <th class="text-left">Pay confirm date</th>
                          <th class="text-left">Order Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product, index) in productdata" :key="index">
                          <td class="text-left">
                            <input type="checkbox" :id="'check_' + index" v-model="selectedOrders"
                              :value="product.id" />
                          </td>
                          <td class="text-left">{{ index + 1 }}</td>
                          <td class="text-left">{{ product.id }}</td>
                          <td class="text-left">{{ product.product_name }}</td>
                          <td class="text-left">{{ product.buying_price }}</td>
                          <td class="text-left">
                            {{ product.pay_confirm_time }}
                          </td>
                          <td class="text-left">{{ product.order_status }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <center>
            <div class="pagination" style="text-align: center">
              <button :disabled="currentPage === 1" @click="fetchData(currentPage - 1)">
                Previous
              </button>
              <template v-for="pageNumber in displayedPages" :key="pageNumber">
                <button @click="fetchData(pageNumber)">
                  {{ pageNumber }}
                </button>
              </template>
              <button :disabled="currentPage === totalPages" @click="fetchData(currentPage + 1)">
                Next
              </button>
            </div>
          </center>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
const router = useRouter();
const selectAll = ref(false);
const selectedcategoryId = ref("");
const loading = ref(false);
const selectedFilter = ref("");
const activeStores = ref([]);
const errors = ref({});

const productdata = ref([]);
const usersCount = ref();
const tobePaid_count = ref(0);
const ordersCount = ref(0);
const updateOrderStatus = ref(0);

const selectedOrders = ref([]);
const orderStatus = ref("");
const allStatus = ref([]);
const pageSize = 300;
const currentPage = ref(1);
const totalRecords = ref(0);
const totalPages = ref(0);
const prodcutsArray = ref([]);
//count
const tobeconfiremed_count = ref(0);
const goodsTobereceived_count = ref(0);
const platformprocced_count = ref(0);
const tobeshipped_count = ref(0);
const complete_count = ref(0);
const selling_price_sum = ref(0);
const costing_price_sum = ref(0);
const profit_sum = ref(0);
const selectedStatus = ref("");
const pay_confirm_date = ref("");
//

definePageMeta({
  middleware: "is-logged-out",
});

const toggleAllCheckboxes = () => {
  if (selectAll.value) {
    selectedOrders.value = productdata.value.map((user) => user.id);
  } else {
    selectedOrders.value = [];
  }
};

const fetchData = async (page) => {
  try {
    loading.value = true;
    const response = await axios.get("/dropUser/filterOrders", {
      params: {
        page: page,
        pageSize: pageSize,
        categoryId: selectedcategoryId.value,
        pay_confirm_date: pay_confirm_date.value,
        selectedStatus: selectedStatus.value,
      },
    });
    // productdata.value = response.data.ordersArray;
    ordersCount.value = response.data.ordersCount;
    productdata.value = response.data.data;
    totalRecords.value = response.data.total_records;
    totalPages.value = response.data.total_pages;
    currentPage.value = response.data.current_page;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loading.value = false;
  }
};
const filterData = async () => {
  fetchData(1); // Reset to first page when search query changes
};

// Compute the range of displayed pages
const displayedPages = computed(() => {
  const maxDisplayedPages = 10; // Maximum number of displayed pages
  const startPage = Math.max(
    1,
    currentPage.value - Math.floor(maxDisplayedPages / 2)
  );
  const endPage = Math.min(totalPages.value, startPage + maxDisplayedPages - 1);
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});

// Watch for changes in current page and fetch data accordingly
watch(currentPage, (newPage) => {
  fetchData(newPage);
});

const submitBulkOrder = () => {

  const order_status = updateOrderStatus.value;
  console.log("update order status: " + updateOrderStatus.value);
  const formData = new FormData();
  selectedOrders.value.forEach((id) => {
    formData.append("id[]", id);
  });
  formData.append("order_status", order_status);

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  Swal.fire({
    title: "Are you sure?",
    text: "You want to upate orders update.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      loading.value = true;
      axios
        .post("/order/bulkOrderStatus", formData, { headers })
        .then((res) => {
          orderStatus.value = [];
          Swal.fire({
            title: "Success!",
            icon: "success",
          });
          document.getElementById("formrest").reset();

          router.push("/usermanagement/order-status-messages");
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors;
          } else {
            // Handle other types of errors here
            console.error("An error occurred:", error);
          }
        })
        .finally(() => {
          loading.value = false;
          //   window.location.reload();
        });
    }
  });
};

const getActiveStore = () => {
  axios.get(`/store/getActiveStoreList`).then((response) => {
    activeStores.value = response.data.activeStores;
    tobePaid_count.value = response.data.tobePaid;
    tobePaid_count.value = response.data.tobePaid_count;
    tobeconfiremed_count.value = response.data.tobeconfiremed_count;
    goodsTobereceived_count.value = response.data.goodsTobereceived_count;
    platformprocced_count.value = response.data.platformprocced_count;
    tobeshipped_count.value = response.data.tobeshipped_count;
    complete_count.value = response.data.complete_count;
    selling_price_sum.value = response.data.selling_price_sum;
    costing_price_sum.value = response.data.costing_price_sum;
    profit_sum.value = response.data.profit_sum;
  });
};

const getOrderStatusList = () => {
  axios.get(`/order/getOrderStatus`).then((response) => {
    allStatus.value = response.data;
  });
};

onMounted(() => {
  getActiveStore();
  getOrderStatusList();
});
</script>

<style>
.pagination {
  display: inline-block;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #2f2f2f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #0056b3;
}

.pagination button[disabled] {
  background-color: #6c757d;
  cursor: not-allowed;
}

.proListh {
  height: 180px;
  overflow: auto;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem;
}

.btnSize {
  font-size: 12px;
  padding: 3px;
}

/* Table */
.table-wrapper {
  width: 100%;
  /* max-width: 500px; */
  overflow-x: auto;
}

.table td,
.table th {
  padding: 0.2rem;
  vertical-align: top;
  border-top: 1px solid #dae2ea;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 1px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: rgb(221, 221, 221);
}
</style>