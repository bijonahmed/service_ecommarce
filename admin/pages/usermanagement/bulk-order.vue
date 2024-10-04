<template>
  <title>Bulk Order</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Bulk Order</p>
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
        <form @submit.prevent="submitBulkOrder" id="formrest" enctype="multipart/form-data">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-3 mb-2">
                To be paid
                <span class="badge bg-secondary">{{ tobePaid_count }}</span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 mb-2">
                <select name="storeType" id="storeType" class="form-control" v-model="selectedcategoryId"
                  @change="handleSelectionChange">
                  <option value="">Select Stores</option>
                  <option v-for="store in activeStores" :key="store.id" :value="store.id">
                    {{ store.name }}
                  </option>
                </select>
              </div>

              <div class="col-lg-2 col-md-2 col-sm-1 mb-2">
                <!-- <button @click="submitBulkOrder" type="button">Query</button> -->
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <br />
                <div class="card">
                  <div class="loading-indicator" v-if="loading" style="text-align: center">
                    <Loader />
                  </div>

                  <center>Number of users {{ usersCount }}</center>
                  <div class="card-body">
                    <div>
                      <table class="table w-100 table-wrapper">
                        <thead>
                          <tr>
                            <th class="text-left">
                              <input type="checkbox" id="checkAll" v-model="selectAll" @change="toggleAllCheckboxes" />
                            </th>
                            <th class="text-left">UserID</th>
                            <th class="text-left">Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(user, index) in usersArray" :key="index">
                            <td class="text-left">
                              <input type="checkbox" :id="'check_' + index" v-model="selectedUsers" :value="user.id" />
                            </td>
                            <td class="text-left">{{ user.id }}</td>
                            <td class="text-left">{{ user.email }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card-body">
                  <div>
                    <h6 v-if="totalBuyingPrice">
                      <div class="row">
                        <div class="col">
                          Sum of select product:
                          <strong>${{ totalBuyingPrice.toFixed(2) }}</strong>
                          <p>
                            Selected Number of Products:
                            {{ selectedProductCount }}
                          </p>
                        </div>

                        <div class="col" style="text-align: right">
                          <button type="submit">Send orders</button>
                        </div>
                      </div>
                    </h6>
                    <table class="table w-100 table-wrapper">
                      <thead>
                        <tr>
                          <th></th>
                          <th class="text-left">Name</th>
                          <th class="text-left">Buying Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product, index) in productArray" :key="index" @click="onRowClick(product.id)">
                          <td class="text-left">
                            <input type="checkbox" :checked="isProductSelected(product.id)"
                              @click="toggleCheckbox($event, product.id)" />
                          </td>
                          <td class="text-left">{{ product.name }}</td>
                          <td class="text-left">{{ product.buying_price }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
const router = useRouter();

const selectedcategoryId = ref("");
const loading = ref(false);
const selectedFilter = ref("");
const activeStores = ref([]);
const errors = ref({});
const usersArray = ref([]);
const selectedProductIDs = ref([]);
const productArray = ref([]);
const usersCount = ref();
const tobePaid_count = ref(0);
const selectedProductCount = ref(0);
const selectAll = ref(false);
const selectedUsers = ref([]);

definePageMeta({
  middleware: "is-logged-out",
});

const toggleAllCheckboxes = () => {
  if (selectAll.value) {
    selectedUsers.value = usersArray.value.map((user) => user.id);
  } else {
    selectedUsers.value = [];
  }
};

const totalBuyingPrice = computed(() => {
  return productArray.value
    .filter((product) => isProductSelected(product.id)) // Select only products that are selected
    .reduce((sum, product) => sum + parseFloat(product.buying_price), 0); // Sum the buying prices
});

// Function to check if a product ID is in the selected list
const isProductSelected = (productId) => {
  return selectedProductIDs.value.includes(productId);
};
// Function to handle row clicks for selection/deselection
const onRowClick = (productId) => {
  if (isProductSelected(productId)) {
    // Deselect if already selected
    selectedProductIDs.value = selectedProductIDs.value.filter(
      (id) => id !== productId
    );
  } else {
    // Select if not already selected
    selectedProductIDs.value.push(productId);
  }
  // Update the count of selected products
  selectedProductCount.value = selectedProductIDs.value.length;
};

// Function to handle checkbox clicks and prevent event propagation
const toggleCheckbox = (event, productId) => {
  event.stopPropagation(); // Prevent row click from being triggered by checkbox click

  const isChecked = event.target.checked;

  if (isChecked) {
    if (!isProductSelected(productId)) {
      selectedProductIDs.value.push(productId);
    }
  } else {
    selectedProductIDs.value = selectedProductIDs.value.filter(
      (id) => id !== productId
    );
  }

  // Update the count of selected products
  selectedProductCount.value = selectedProductIDs.value.length;
};

// const toggleCheckbox = (event, productId) => {
//   event.stopPropagation(); // Prevent row click from being triggered by checkbox click

//   const isChecked = event.target.checked;

//   if (isChecked) {
//     if (!isProductSelected(productId)) {
//       selectedProductIDs.value.push(productId);
//     }
//   } else {
//     selectedProductIDs.value = selectedProductIDs.value.filter(
//       (id) => id !== productId
//     );
//   }

// // Update the selectedProductIDs array based on checkbox state

// };

const handleSelectionChange = async (event) => {
  selectedcategoryId.value = event.target.value;
  console.log(selectedcategoryId.value); // You can do further processing with the selected ID
  try {
    loading.value = true;
    // const response = await axios.get(`/product/categoryWiseProduct?categoryId=${selectedcategoryId.value}`);
    const response = await axios.get("/dropUser/filterUsersProducts", {
      params: {
        categoryId: selectedcategoryId.value, // Pass the category ID
      },
    });
    usersCount.value = response.data.usersCount;
    usersArray.value = response.data.usersArray;
    productArray.value = response.data.productArray;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loading.value = false;
  }
};

const submitBulkOrder = () => {
  const formData = new FormData();
  selectedUsers.value.forEach((userId) => {
    formData.append("user_ids[]", userId);
  });
  formData.append("selectedProductIDs", selectedProductIDs.value);
  formData.append("selectedcategoryId", selectedcategoryId.value);
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  Swal.fire({
    title: "Are you sure?",
    text: "You want to create orders for the selected items for the specified user? Please note: After clicking 'Confirm', all previously 'To be paid' orders will be removed and new orders will be created.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      loading.value = true;
      axios
        .post("/order/bulkOrderSend", formData, { headers })
        .then((res) => {
          selectedUsers.value = [];
          selectedProductIDs.value = [];
          // Handle success response
          // For example, reset form
          // document.getElementById('formrest').reset();
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
          Swal.fire({
            title: "Success!",
            icon: "success",
          });
          loading.value = false;
          window.location.reload();
        });
    }
  });
};

const getActiveStore = () => {
  axios.get(`/store/getActiveStoreList`).then((response) => {
    activeStores.value = response.data.activeStores;
    tobePaid_count.value = response.data.tobePaid;
  });
};

onMounted(() => {
  getActiveStore();
});
</script>

<style>
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
