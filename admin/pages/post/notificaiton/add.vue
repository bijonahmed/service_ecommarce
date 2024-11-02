<template>
  <title>Send Notification</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Send Notification</p>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                </li>
                <li class="breadcrumb-item active">
                  <LazyNuxtLink to="/post/notificaiton/list">Back to List</LazyNuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- <button @click="pageRedirect()">Pages</button> -->
      <section class="content">
        <div class="container-fluid">
          <!-- Start -->
          <div class="card border-top border-0 border-4 border-info">
            <div class="border p-4 rounded">

              <div class="card card-primary card-outline card-tabs">
                <div class="card-header p-0 pt-1 border-bottom-0">
                  <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="general-tab" data-toggle="pill" href="#general" role="tab"
                        aria-controls="general" aria-selected="true">Global</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="seller-message-tab" data-toggle="pill" href="#seller-message" role="tab"
                        aria-controls="seller-message" aria-selected="false">Seller Message</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="buyer-message-tab" data-toggle="pill" href="#buyer-message" role="tab"
                        aria-controls="buyer-message" aria-selected="false">Buyer Message</a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content" id="custom-tabs-three-tabContent">

                    <!-- General Tab -->
                    <div class="tab-pane fade active show" id="general" role="tabpanel" aria-labelledby="general-tab">
                      <!-- General fields -->
                      <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                        enctype="multipart/form-data">
                        <div class="row mb-3 required">
                          <label for="input-name-1" class="col-sm-2 col-form-label required-label">Title</label>
                          <div class="col-sm-10">
                            <input type="text" name="name" placeholder="Title" v-model="insertdata.name"
                              class="form-control" />
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label for="input-description-1"
                            class="col-sm-2 col-form-label required-label">Messages</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" v-model="insertdata.description_full" rows="5"
                              cols="5"></textarea>
                            <span class="text-danger" v-if="errors.description_full">{{ errors.description_full[0]
                              }}</span>
                          </div>

                        </div>

                        <div class="row mb-3">
                          <label for="input-description-1" class="col-sm-2 col-form-label required-label">Type</label>
                          <div class="col-sm-10">
                            <select name="" id="" class="form-control" v-model="insertdata.selectedtype">
                              <option value="" selected>Select</option>
                              <option value="2">Seller</option>
                              <option value="3">Buyer</option>
                            </select>
                            <span class="text-danger" v-if="errors.selectedtype">{{ errors.selectedtype[0] }}</span>
                          </div>
                        </div>

                        <!-- Save Button -->
                        <button type="submit" class="btn btn-success px-5 w-100">
                          <i class="bx bx-check-circle mr-1"></i> Save
                        </button>
                      </form>

                    </div>


                    <!-- Seller Message Tab -->
                    <div class="tab-pane fade" id="seller-message" role="tabpanel" aria-labelledby="seller-message-tab">
                      <form @submit.prevent="sendSellerMessages()" id="formrest" class="forms-sample"
                        enctype="multipart/form-data">
                        <div class="row mb-3">
                          <label for="seller-message" class="col-sm-2 col-form-label">Sellers</label>
                          <div class="col-sm-10">
                            <select v-model="sellerInsertdata.selectedSeller" id="sellerSelect" class="form-control">
                              <option value="" disabled>Select a seller</option>
                              <option v-for="(seller, index) in sellersData" :key="index" :value="seller.id">
                                {{ seller.name }}
                              </option>
                            </select>
                            <span class="text-danger" v-if="errors.selectedSeller">{{ errors.selectedSeller[0] }}</span>

                            <br />
                          </div>




                          <label for="seller-message" class="col-sm-2 col-form-label">Title</label>
                          <div class="col-sm-10">
                            <input type="text" name="name" placeholder="Title" v-model="sellerInsertdata.name"
                              class="form-control" />
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            <br />
                          </div>



                          <label for="row mb-3 required" class="col-sm-2 col-form-label"> Message</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" v-model="sellerInsertdata.sellerMessage"
                              placeholder="Enter seller message here" rows="5" cols="5"></textarea>
                            <span class="text-danger" v-if="errors.sellerMessage">{{ errors.sellerMessage[0] }}</span>
                          </div>
                        </div>

                        <!-- Save Button -->
                        <button type="submit" class="btn btn-success px-5 w-100">
                          <i class="bx bx-check-circle mr-1"></i> Save
                        </button>
                      </form>

                    </div>

                    <!-- Buyer Message Tab -->
                    <div class="tab-pane fade" id="buyer-message" role="tabpanel" aria-labelledby="buyer-message-tab">
                      <form @submit.prevent="sendBuyerMessages()" id="formrest" class="forms-sample"
                        enctype="multipart/form-data">
                        <div class="row mb-3">
                          <label for="seller-message" class="col-sm-2 col-form-label">Buyer</label>
                          <div class="col-sm-10">
                            <select v-model="buyerInsertdata.selectedBuyer" id="sellerSelect" class="form-control">
                              <option value="" disabled>Select a seller</option>
                              <option v-for="(seller, index) in buyersData" :key="index" :value="seller.id">
                                {{ seller.name }}
                              </option>
                            </select>
                            <span class="text-danger" v-if="errors.selectedBuyer">{{ errors.selectedBuyer[0] }}</span>
                          </div>

                        </div>


                        <div class="row mb-3">
                          <label for="seller-message" class="col-sm-2 col-form-label">Title</label>
                          <div class="col-sm-10">
                            <input type="text" name="name" placeholder="Title" v-model="buyerInsertdata.name"
                              class="form-control" />
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>


                          </div>

                        </div>

                        <div class="row mb-3">
                          <label for="buyer-message" class="col-sm-2 col-form-label">Buyer Message</label>
                          <div class="col-sm-10">
                            <textarea class="form-control" v-model="buyerInsertdata.buyerMessage"
                              placeholder="Enter buyer message here" rows="5" cols="5"></textarea>
                            <span class="text-danger" v-if="errors.buyerMessage">{{ errors.buyerMessage[0] }}</span>
                          </div>
                        </div>

                        <!-- Save Button -->
                        <button type="submit" class="btn btn-success px-5 w-100">
                          <i class="bx bx-check-circle mr-1"></i> Save
                        </button>
                      </form>
                    </div>


                  </div>
                </div>
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
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import swal from 'sweetalert2';
import 'summernote/dist/summernote-bs4.js';
import 'summernote/dist/summernote-bs4.css';

const router = useRouter()
window.Swal = swal;
const sellersData = ref([]);
const buyersData = ref([]);
const insertdata = reactive({
  name: '',
  selectedtype: '',
  description_full: '',
  selectedStatus: 1,
});

const sellerInsertdata = reactive({
  name: '',
  selectedSeller: '',
  sellerMessage: '',
});

const buyerInsertdata = reactive({
  name: '',
  selectedBuyer: '',
  buyerMessage: '',
});

const errors = ref({});

definePageMeta({
  middleware: 'is-logged-out',
})


const sendBuyerMessages = async () => {

const formData = new FormData();
formData.append('name', buyerInsertdata.name);
formData.append('selectedBuyer', buyerInsertdata.selectedBuyer); // Using reactive object
formData.append('buyerMessage', buyerInsertdata.buyerMessage);
const headers = {
  'Content-Type': 'multipart/form-data'
};
axios.post('/post/buyerMessageSend', formData, { headers })
  .then((res) => {
    document.getElementById('formrest').reset();
    success_noti();
    router.push('/post/notificaiton/list');
  }).catch(error => {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      // Handle other types of errors here
      console.error('An error occurred:', error);
    }
  });
};



const sendSellerMessages = async () => {

  const formData = new FormData();
  formData.append('name', sellerInsertdata.name);
  formData.append('selectedSeller', sellerInsertdata.selectedSeller); // Using reactive object
  formData.append('sellerMessage', sellerInsertdata.sellerMessage);
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/post/sellerMessageSend', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();
      success_noti();
      router.push('/post/notificaiton/list');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });
};
const saveData = async () => {

  const formData = new FormData();
  formData.append('name', insertdata.name); // Using reactive object
  formData.append('selectedtype', insertdata.selectedtype);
  formData.append('description_full', insertdata.description_full);
  formData.append('selectedStatus', insertdata.selectedStatus);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/post/notificaitonsave', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();
      success_noti();
      router.push('/post/notificaiton/list');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
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
    title: "Your data has been successfully inserted."
  });
};

const allSellerLists = async () => {
  try {
    const response = await axios.get(`/user/allsellers`);
    sellersData.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};


const allBuyerLists = async () => {
  try {
    const response = await axios.get(`/user/allbuyers`);
    buyersData.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};



onMounted(() => {
  allSellerLists();
  allBuyerLists();
});

</script>

<style scoped>
.required-label::after {
  content: "\2605";
  color: red;
  margin-right: 4px;
}

/* CSS */
ol,
ul {
  padding-left: 0rem;
}

ul {
  list-style: none;
}

.bgColor {
  background-color: #c8c8c8;
  padding: 1px;
  border-radius: 2px;
}

.img-fluid {
  width: 300px;
  height: 150px;
}

.img-fluids {
  margin-top: 10px;
  width: 300px;
  height: 300px;
}

/* for checkbox */
.multiselect {
  position: relative;
  font-family: Arial, sans-serif;
  width: 100%;
}

.select-box {
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
}

.dropdown {
  border: 1px solid #ccc;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}

label {
  display: block;
  padding: 5px;
}

input[type="checkbox"] {
  margin-right: 8px;
}

.widthtxtbox {
  width: 50px;
}
</style>
