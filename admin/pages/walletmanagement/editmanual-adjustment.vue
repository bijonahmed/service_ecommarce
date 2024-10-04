<template>
  <title>Edit Slider</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Edit</p>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                </li>
                <li class="breadcrumb-item active">
                  <LazyNuxtLink to="/walletmanagement/manual-adjustment-report">Back to List</LazyNuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- <button @click="pageRedirect()">Pages</button> -->
      <section class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <center>
                <div v-for="(errorArray, idx) in notifmsg" :key="idx">
                  <div v-for="(allErrors, idx) in errorArray" :key="idx">
                    <span class="text-danger">{{ allErrors }} </span>
                  </div>
                </div>
              </center>
              <form
                @submit.prevent="saveManualAdjustment"
                id="formrest"
                class="forms-sample"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <div class="col-md-6">
                    <h4 v-if="currentBalance">
                      Current Balance : ${{ currentBalance }}
                    </h4>
                  </div>
                  <div class="col-md-6 text-right" v-if="calculateBalance">
                    <h4>${{ calculateBalance }}</h4>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group mb-2">
                      <label for="">User Email </label>
                      <input type="text" :value="query" @input="onInput" disabled placeholder="Search for users by email" class="form-control" />

                      <span class="text-danger" v-if="errors.userId">{{
                        errors.userId[0]
                      }}</span>

                      <div v-if="users.length > 0" class="autocomplete-results">
                        <ul>
                          <li
                            v-for="user in users"
                            :key="user.id"
                            @click="selectUser(user)"
                          >
                            {{ user.name }} [{{ user.email }}]
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="form-group mb-2">
                      <label for="status">Adjustment type</label>
                      <select
                        name=""
                        v-model="manualAdjment.adjustment_type"
                        id=""
                        class="form-control"
                        @change="emptyAmunt"
                      >
                        <option value="1">
                          The effective amount is manually increased (+)
                        </option>
                        <option value="2">
                          The effective amount is manually reduced (-)
                        </option>
                      </select>
                      <span class="text-danger" v-if="errors.adjustment_type">{{
                        errors.adjustment_type[0]
                      }}</span>
                    </div>
                    <div class="form-group mb-2">
                      <label for="">Adjustment amount</label>
                      <input
                        type="text"
                        v-model="manualAdjment.adjustment_amount"
                        @keypress="isNumber($event)"
                        @keyup="getAmuntCheck"
                        placeholder="Please enter the adjustment amount"
                        class="form-control"
                      />
                      <span
                        class="text-danger"
                        v-if="errors.adjustment_amount"
                        >{{ errors.adjustment_amount[0] }}</span
                      >
                    </div>
                    <div class="form-group mb-2">
                      <label for="status">Detailed remarks</label>

                      <textarea
                        class="form-control"
                        v-model="manualAdjment.detailed_remarks"
                      ></textarea>
                      <span
                        class="text-danger"
                        v-if="errors.detailed_remarks"
                        >{{ errors.detailed_remarks[0] }}</span
                      >
                    </div>
                    <button type="submit" class="btn-primary w-100">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();

if (process.client) {
  window.Swal = swal;
}
const file = ref(null);
const userId = ref("");
const adjustmentAmount = ref("");
const currentBalance = ref(0);
const calculateBalance = ref(0);
const manualAdjment = reactive({
  id:"",  
  query: "",
  user_id: "",
  adjustment_type: "",
  adjustment_amount: "",
  detailed_remarks: "",
});
definePageMeta({
  middleware: "is-logged-out",
});

const previewUrl = ref(null);
const errors = ref({});
const notifmsg = ref("");

//Submit
const saveManualAdjustment = () => {
  const formData = new FormData();
  formData.append("id", manualAdjment.id);
  formData.append("userId", manualAdjment.user_id);
  formData.append("query", manualAdjment.query);
  formData.append("adjustment_type", manualAdjment.adjustment_type);
  formData.append("adjustment_amount", manualAdjment.adjustment_amount);
  formData.append("detailed_remarks", manualAdjment.detailed_remarks);

  const headers = {
    "Content-Type": "multipart/form-data",
  };
  axios
    .post("/user/editsendUserManualAdjst", formData, { headers })
    .then((res) => {
      document.getElementById("formrest").reset();
      success_noti();
      // query.value= "",
      currentBalance.value = "";
      calculateBalance.value = "";
      manualAdjment.adjustment_amount = "";
      manualAdjment.detailed_remarks = "";

      router.push("/walletmanagement/manual-adjustment-report");
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

//Find Product Row
const adujustmentrow = () => {
  const id = router.currentRoute.value.query.parameter;
    //console.log("----" + category_id);
  axios.get(`/user/adujustmentrow/${id}`).then((response) => {
    manualAdjment.id = response.data.data.id;
    query.value = response.data.data.email;
    manualAdjment.user_id = response.data.data.user_id;
    manualAdjment.adjustment_type = response.data.data.adjustment_type;
    manualAdjment.adjustment_amount = response.data.data.adjustment_amount;
    manualAdjment.detailed_remarks = response.data.data.detailed_remarks;
    getSelectedUsersInfo(response.data.data.user_id);
  });
};

//Validation

const emptyAmunt = () => {
  calculateBalance.value = "";
  manualAdjment.adjustment_amount = "";
};

// Function to allow only numbers in the input
const getAmuntCheck = async () => {
  console.log("current Balance: " + currentBalance.value);
  console.log("input amount : " + manualAdjment.adjustment_amount);

  if (manualAdjment.adjustment_type == 1) {
    const result =
      parseFloat(currentBalance.value) +
      parseFloat(manualAdjment.adjustment_amount);
    calculateBalance.value = result;
  }

  if (manualAdjment.adjustment_type == 2) {
    const result =
      parseFloat(currentBalance.value) -
      parseFloat(manualAdjment.adjustment_amount);
    calculateBalance.value = result;
  }
};

const isNumber = (evt) => {
  evt = evt ? evt : window.evt;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
};
const success_noti = () => {
  const Toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = swal.stopTimer;
      toast.onmouseleave = swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Manual Adjustment Send...",
  });
};

//Autocomlete
// Reactive state variables
const query = ref("");
const users = ref([]);

// Function to fetch users from the API
const fetchUsers = async (searchQuery) => {
  if (searchQuery.length < 1) {
    users.value = []; // Clear users if the query is less than 3 characters
    return;
  }

  try {
    const response = await axios.get(
      `/user/autocompleteUser?query=${searchQuery}`
    );
    users.value = response.data; // Update users with the result
  } catch (error) {
    console.error("Error fetching users:", error);
    users.value = []; // Clear users on error
  }
};

// Event handler for input changes
const onInput = (event) => {
  query.value = event.target.value; // Update query value
};

// Watch the query for changes and fetch users
watch(query, (newQuery) => {
  fetchUsers(newQuery);
});

const getSelectedUsersInfo = async (userid) => {
  try {
    const response = await axios.get(
      `/user/getUserWiseCurrentBalance?userid=${userid}`
    );
    // console.log("response:" + response.data);
    currentBalance.value = response.data; // Update users with the result
  } catch (error) {
    console.error("Error fetching users:", error);
    users.value = []; // Clear users on error
  }
};

// Function to handle user selection
const selectUser = (user) => {
  query.value = user.name; // Replace input with selected user
  userId.value = user.id;
  getSelectedUsersInfo(user.id);
  // console.log("-------" + user.id);
  users.value = []; // Clear suggestions
  // Perform additional actions like setting user ID
};

// Call the loadeditor function when the component is mounted
onMounted(async () => {
  adujustmentrow();
});
</script>
 
<style scoped>
.autocomplete-results {
  border: 1px solid #ddd;
  background-color: #fff;
  position: absolute;
  z-index: 1000;
  width: 100%;
}

.autocomplete-results ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.autocomplete-results li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-results li:hover {
  background-color: #f0f0f0;
}
</style>