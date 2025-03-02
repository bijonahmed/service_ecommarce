<template>
  <div>
    <title>Order Details [{{ name }}]</title>

    <body class="bgc-thm1">
      <div class="wrapper ovh">
        <Header />
        <MobileMenu />
        <div class="body_content">
          <section class="categories_list_section overflow-hidden">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="listings_category_nav_list_menu">
                    <ul class="mb0 d-flex ps-0">
                      <li v-for="data in categoryData" :key="data.id">
                        <nuxt-link :to="`/category/${data.slug}`" :class="{ active: isActive(data.slug) }">
                          {{ data.name }}
                        </nuxt-link>
                      </li>
                      <!-- {{categoryData}} -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Breadcumb Sections -->
          <section class="breadcumb-section">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-lg-10">
                  <div class="breadcumb-style1 mb10-xs">
                    <div class="breadcumb-list">
                      <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                      <nuxt-link to="/dashboard/welcome">Order</nuxt-link>
                      <a href="#">{{ name }}</a>
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
          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>
          <!-- Start Edit -->

          <div class="container">
            <div class="row">
              <div class="col-xl-12">

                <h2 class="mb-4">Order ID: #{{ oId }} <span :class="{
                  'badge bg-warning': ordsts == 2,
                  'badge bg-danger': ordsts == 3,
                  'badge bg-primary': ordsts == 4,
                  'badge bg-success': ordsts == 5,
                  'badge bg-secondary': ordsts !== 2 && ordsts !== 3 && ordsts !== 4 && ordsts !== 5
                }">
                    [{{ order_status }}]
                  </span></h2>
                <table class="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <th>Buyer Name</th>
                      <td>{{ buyerName }}</td>
                    </tr>
                    <tr>
                      <th>Title</th>
                      <td>{{ name }}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td><div v-if="categoryName"> {{ categoryName }} </div> <div v-if="subCategoryName">{{ subCategoryName }}</div>  <div v-if="inSubCategoryName">{{ inSubCategoryName }}</div></td>
                    </tr>
                    
                    <tr v-if="types == 1">
                      <th>Regular Price</th>
                      <td>${{ selected_price }}</td>
                    </tr>
                    <tr v-if="types == 1">
                      <th>Delivery Days</th>
                      <td>{{ delivery_day }} Days</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td v-html="gig_description"></td>
                    </tr>
                    <tr>
                      <th>Order Rules</th>
                      <td v-if="order_rules"></td>
                    </tr>
                  </tbody>
                </table>
                      
                <span v-if="selected_packages === 'Basic'">
                  <h3><u>Basic Packages</u></h3>
                  <table class="table table-striped table-hover">
                    <tbody>
                      <tr>
                        <th>Price</th>
                        <td v-if="basic_price">${{ basic_price }} </td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td v-html="basic_description"></td>
                      </tr>
                      <tr>
                        <th>Delivery </th>
                        <td>{{ basic_delivery_days }} Days</td>
                      </tr>
                      <tr>
                        <th>Source Files</th>
                        <td>{{ source_file }}</td>
                      </tr>

                    </tbody>
                  </table>
                </span>

                <span v-else-if="selected_packages === 'Standart'">
                  <h3><u>Standard Packages</u></h3>
                  <table class="table table-striped table-hover">
                    <tbody>
                      <tr>
                        <th>Price</th>
                        <td v-if="standard_price">${{ standard_price }} </td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td>{{ stn_descrition }}</td>
                      </tr>
                      <tr>
                        <th>Delivery </th>
                        <td>{{ stn_delivery_days }} Days</td>
                      </tr>
                      <tr>
                        <th>Source Files</th>
                        <td>{{ stn_source_file }}</td>
                      </tr>

                    </tbody>
                  </table>
                </span>
                <span v-else-if="selected_packages === 'Premium'">
                  <h3><u>Premimum Packages</u></h3>
                  <table class="table table-striped table-hover">
                    <tbody>
                      <tr>
                        <th>Price</th>
                        <td v-if="premium_price">${{ premium_price }} </td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td>{{ premium_description }}</td>
                      </tr>
                      <tr>
                        <th>Delivery Days</th>
                        <td>{{ premium_delivery_days }}</td>
                      </tr>
                      <tr>
                        <th>Source Files</th>
                        <td>{{ premium_source_file }}</td>
                      </tr>

                    </tbody>
                  </table>
                </span>
                <br />

                <div class="row image-gallery">
                  <div v-for="(image, index) in imgdata" :key="index" class="col-md-4 mb-4">
                    <!-- Image element with specified width, height, and border effect -->
                    <div class="image-wrapper border rounded shadow-sm">
                      <img :src="image.image_path" alt="Image" class="img-fluid"
                        style="width: 100%; height: 220px; object-fit: cover;" />
                    </div>
                  </div>
                </div>
               
                <div v-if="ordsts==2">
                    <h3 class="text-center">Send Message</h3>
                    <form @submit.prevent="submitForm">
                      <!-- Message Textarea -->
                      <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" v-model="messages" rows="5"
                          placeholder="Type your message here"></textarea>
                        <span class="text-danger" v-if="errors.messages">{{ errors.messages[0] }}</span>
                      </div>
                      <!-- File Upload -->
                      <div class="mb-3">
                        <label for="file" class="form-label">Attach File</label>
                        <input type="file" class="form-control" id="images" @change="onFileChange">
                        <span class="text-danger" v-if="errors.images">{{ errors.images[0] }}</span>

                      </div>

                      <!-- Submit Button -->
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary text-white">Send to Delivery</button>
                      </div>
                    </form>
                  </div>

              </div>
            </div>
          </div>

          <!-- END Edit -->
        </div>

        <Footer />
      </div>
    </body>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

definePageMeta({
  middleware: "is-logged-out",
});

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
import CKEditorComponent from '@/components/CKEditorComponent.vue';
const router = useRouter();
const errors = ref({});
const catData = ref([]);
const categoryData = ref([]);

const loading = ref(false);
const route = useRoute();
const { proxy } = getCurrentInstance(); // Get the current component instance

const slug = route.params.orderId; // Capture the slug parameter from the URL

// Assuming categoryData is provided as a prop or fetched from a store
const props = defineProps({
  categoryData: {
    type: Array,
    required: true
  }
});

const isActive = (slug) => {
  return slug === route.params.slug;
};

// Initialize reactive form data
const ordsts = ref('');
const oId = ref('');
const id = ref('');
const buyerId = ref('');
const name = ref('');
const categoryName = ref('');
const subCategoryName = ref('');
const inSubCategoryName = ref('');
const types = ref('');
const selected_packages = ref('');
const selected_price = ref('');
const gig_description = ref('');
const order_rules = ref('');
const delivery_day = ref('');
//
const basic_price = ref('');
const basic_description = ref('');
const basic_delivery_days = ref('');
const source_file = ref('');
//
const standard_price = ref('');
const stn_descrition = ref('');
const stn_delivery_days = ref('');
const stn_source_file = ref('');
//
const premium_price = ref('');
const premium_description = ref('');
const premium_delivery_days = ref('');
const premium_source_file = ref('');
const order_status = ref('');
//
const buyerName = ref('');
const imgdata = ref([]);
const file = ref(null);
const category_id = ref('');
const images = ref([]);
const messages = ref('');
// Handle file upload
const onFileChange = (event) => {
  file.value = event.target.files[0]; // Get the selected file
};

const submitForm = async () => {

  try {
    // if (!file.value) return;
    // Create a new FormData object
    const formData = new FormData();
    formData.append('orderId', oId.value);
    formData.append('messages', messages.value);
    formData.append('buyerId', buyerId.value);
    formData.append('images', file.value);

    // Make the Axios request
    const response = await axios.post('/order/updateDeliveryGig', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Success:', response.data);

    Swal.fire({
      title: 'Delivered!',
      text: 'Your order now delivered.',
      icon: 'success',
      confirmButtonText: 'OK'
    });


    resetForm();

    router.push('/dashboard/welcome')
  } catch (error) {
    // Handle error response
    if (error.response) {
      if (error.response.status === 422) {
        // Capture validation errors from the server
        errors.value = error.response.data.errors; // Assuming errors is a reactive variable
      } else {
        console.error('An error occurred:', error.response.data);
      }
    } else {
      console.error('Error:', error.message);
    }
  }
};
// Reset form fields
const resetForm = () => {
  name.value = '';
  category_id.value = '';
  order_rules.value = '';
  images.value = [];
  errors.value = [];
};

const getCatList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const getCategoryAll = async () => {
  try {
    const response = await axios.get(`/unauthenticate/getCategoryList`);
    catData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const checkrow = async () => {
  const orderId = route.params.orderId;

  try {
    loading.value = true;
    const response = await axios.get(`/order/checkOrder`, {
      params: {
        orderId: orderId,
      },
    });
    oId.value = response.data.data.orderId;
    id.value = response.data.data.id;
    name.value = response.data.data.name;
    categoryName.value = response.data.data.categoryName;
    subCategoryName.value = response.data.data.subCategoryName;
    inSubCategoryName.value = response.data.data.inSubCategoryName;
    types.value = response.data.data.types;
    selected_packages.value = response.data.data.selected_packages;
    selected_price.value = response.data.data.selected_price;
    gig_description.value = response.data.data.gig_description;
    order_rules.value = response.data.data.order_rules;
    delivery_day.value = response.data.data.delivery_day;
    //Basic 
    basic_price.value = response.data.data.basic_price;
    basic_description.value = response.data.data.basic_description;
    basic_delivery_days.value = response.data.data.basic_delivery_days;
    source_file.value = response.data.data.source_file;
    //Standard
    standard_price.value = response.data.data.standard_price;
    stn_descrition.value = response.data.data.stn_descrition;
    stn_delivery_days.value = response.data.data.stn_delivery_days;
    stn_source_file.value = response.data.data.stn_source_file;
    //Premium
    premium_price.value = response.data.data.premium_price;
    premium_description.value = response.data.data.premium_description;
    premium_delivery_days.value = response.data.data.premium_delivery_days;
    premium_source_file.value = response.data.data.premium_source_file;
    order_status.value = response.data.data.order_status;
    buyerName.value = response.data.data.buyerName;
    imgdata.value = response.data.data.imgdata;
    buyerId.value = response.data.data.buyerId;
    ordsts.value = response.data.data.ordsts;
  } catch (error) {
    console.log(error);
  } finally {

    loading.value = false;
  }
};

const showType = () => {
  const gigtype = type.value;
  $(".multiple_pack").toggle(gigtype == 2);
  $(".single_pack").toggle(gigtype != 2);
};

onMounted(() => {
  getCategoryAll();
  getCatList();
  checkrow();

});

</script>

<style scoped>

/* new */
/* General Table Styling */
.table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Table Header Styling */
.table th {
    background: #007bff;
    color: #ffffff;
    padding: 14px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    border-right: 1px solid #fff;
}

/* Table Body Styling */
.table td {
    padding: 14px;
    color: #444;
    font-size: 15px;
    border-bottom: 1px solid #ddd;
    font-weight: 500;
}

/* Alternating Row Colors */
.table-striped tbody tr:nth-of-type(odd) {
    background: #f8f9fa;
}

/* Hover Effect */
.table-hover tbody tr:hover {
    background: #dbe6fd;
    transition: background 0.3s ease-in-out;
}

/* Headings */
h3 {
    color: #007bff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
}

/* Underline for Headings */
h3 u {
    text-decoration: none;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .table th,
    .table td {
        font-size: 14px;
        padding: 10px;
    }

    h3 {
        font-size: 18px;
    }
}

/* end */
.text-danger {
  color: red;
}

.thumbnail-preview,
.image-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-preview,
.thumbnail-preview {
  position: relative;
  width: 330px;
  height: 220px;
  overflow: hidden;
  /* Optional: This ensures any overflow is hidden */
}

.thumbnail-image,
.preview-image {
  width: 330px;
  /* Updated to 330px */
  height: 220px;
  /* Updated to 220px */
  border-radius: 10px;
}

.remove-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #dc3545;
  color: #fff;
  font-size: 12px;
  padding: 5px 0;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  border: none;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-4,
.col-3 {
  flex: 1;
  min-width: 300px;
  max-width: 33.33%;
  box-sizing: border-box;
  margin: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
}

b {
  color: #333;
}

label {
  font-weight: bold;
  margin-top: 10px;
  display: block;
  color: #555;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

input::placeholder {
  color: #aaa;
}

select {
  cursor: pointer;
}

select option {
  padding: 10px;
}

input[type="text"]:disabled,
select:disabled {
  background-color: #f8f9fa;
  border-color: #ddd;
  cursor: not-allowed;
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

.textarea-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.textarea-box {
  position: relative;
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

small {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #888;
}

.text-danger {
  color: red;
}

.thumbnail-preview,
.image-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-preview,
.thumbnail-preview {
  position: relative;
  width: 100px;
  height: 130px;
}

.thumbnail-image,
.preview-image {
  max-width: 100%;
  max-height: 100px;
  border-radius: 10px;
}

.remove-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #dc3545;
  color: #fff;
  font-size: 12px;
  padding: 5px 0;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  border: none;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-4,
.col-3 {
  flex: 1;
  min-width: 300px;
  max-width: 33.33%;
  box-sizing: border-box;
  margin: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
}

b {
  color: #333;
}

label {
  font-weight: bold;
  margin-top: 10px;
  display: block;
  color: #555;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

input::placeholder {
  color: #aaa;
}

select {
  cursor: pointer;
}

select option {
  padding: 10px;
}

input[type="text"]:disabled,
select:disabled {
  background-color: #f8f9fa;
  border-color: #ddd;
  cursor: not-allowed;
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

.bgColor {
  background-color: #1f4b3f;
  color: white;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  /* Smooth transition */
}

.image-gallery .image-wrapper {
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Add hover effect for border and shadow */
.image-gallery .image-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>