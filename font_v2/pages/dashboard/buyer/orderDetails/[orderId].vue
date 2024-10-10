<template>
  <div>
    <title>Order [{{ name }}]</title>

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
                      <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                      <nuxt-link to="/dashboard/buyer/welcome">Order</nuxt-link>
                      <a href="#">{{ name }}</a>
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
          <div class="loading-indicator" v-if="loading" style="text-align: center;">
            <Loader />
          </div>
          <!-- Start Edit -->

          <div class="container">
            <div class="row">
              <div class="col-xl-8">

                <h2 class="mb-4">Order ID: #{{ oId }} <span :class="{
                  'badge bg-warning': ordsts == 2,
                  'badge bg-danger': ordsts == 3,
                  'badge bg-primary': ordsts == 4,
                  'badge bg-success': ordsts == 5,
                  'badge bg-secondary': ordsts !== 2 && ordsts !== 3 && ordsts !== 4 && ordsts !== 5
                }">
                    [{{ order_status }}]
                  </span></h2>

                <!-- {{ordsts}} -->

                <div align="right" v-if="ordsts !== '5'"><button class="btn btn-sm btn-primary text-white"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop">Change Order Status</button></div>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Order Status</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <center>
                          <div class="button-group">
                            <button type="button" class="btn btn-cancel btn-custom"
                              @click="orderAction(3)">Cancel</button>
                            <button type="button" class="btn btn-delivered btn-custom"
                              @click="orderAction(4)">Delivered</button>
                            <button type="button" class="btn btn-complete btn-custom"
                              @click="orderAction(5)">Complete</button>
                          </div>
                        </center>
                      </div>

                    </div>
                  </div>
                </div>

                <table class="table table-striped table-hover mt-3">
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
                      <td>{{ categoryName }}</td>
                    </tr>
                    <tr>
                      <th>Subcategory</th>
                      <td>{{ subCategoryName }}</td>
                    </tr>
                    <tr>
                      <th>InsubCategory</th>
                      <td>{{ inSubCategoryName }}</td>
                    </tr>
                    <tr>
                      <th>Type</th>
                      <td>
                        <span v-if="types == 1">Single GIG</span>
                        <span v-if="types == 2">Multiple GIG</span>

                      </td>
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

                <span v-if="types == 2">
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

                <span v-if="types == 2">
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
                <span v-if="types == 2">
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

              </div>
              <div class="col-xl-4">

                <div class="chat-container" ref="chatContainer" v-if="chatMessages.length">
                  <div class="message" v-for="message in chatMessages" :key="message.id"
                    :class="{ 'sender-message': message.sender_id === senderId, 'recipient-message': message.sender_id !== senderId }">

                    <img
                      :src="message.sender_id === senderId ? message.sender_profile_picture : message.recipient_profile_picture"
                      alt="Profile Picture" class="profile-picture" />

                    <div class="message-content">
                      <strong class="sender-name">{{ message.sender_name }}</strong>
                      <p class="message-text">{{ message.message }}</p>
                      <div v-if="message.files" class="file-attachment">
                        <p>Attached Files:</p>
                        <div v-if="isImage(message.files)">
                          <img :src="message.files" alt="Attached Image" class="attached-image" />
                        </div>
                        <div v-else>
                          <a :href="message.files" target="_blank" class="file-link">{{ getFileName(message.files)
                            }}</a>
                        </div>
                      </div>
                      <span class="timestamp">{{ new Date(message.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      }) }}</span>
                    </div>
                  </div>
                </div>

                <form id="chatForm" enctype="multipart/form-data" @submit.prevent="sendMessage()">
                  <!-- Message Textarea -->
                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" placeholder="Type your message..." rows="3"
                      v-model="messageContent"></textarea>
                    <span class="text-danger" v-if="errors.messages">{{ errors.messages[0] }}</span>
                  </div>
                  <!-- File Upload -->
                  <div class="mb-3">
                    <label for="file" class="form-label">Attach File</label>
                    <input type="file" class="form-control" id="fileInput" accept="image/*,application/pdf"
                      @change="handleFileUpload" />
                    <span class="text-danger" v-if="errors.images">{{ errors.images[0] }}</span>

                  </div>
                  <!-- Submit Button -->
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary text-white">Send Messages</button>
                  </div>
                </form>
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
const router = useRouter();
const errors = ref({});
const catData = ref([]);
const categoryData = ref([]);
const uploadedFile = ref(null);
const loading = ref(false);
const route = useRoute();
const { proxy } = getCurrentInstance(); // Get the current component instance

const isUserAtBottom = ref(true); // Track if the user is at the bottom
const buyerId = ref('');
const senderId = ref(''); // Set this to the ID of the logged-in buyer
const recipientId = ref(''); // The ID of the recipient (seller)
// Initialize reactive form data
const ordsts = ref('');
const oId = ref('');
const id = ref('');

const name = ref('');
const categoryName = ref('');
const chatContainer = ref(null); // Reference for the chat container
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
const chatMessages = ref([]);
const messages = ref('');



const slug = route.params.orderId; // Capture the slug parameter from the URL

// Assuming categoryData is provided as a prop or fetched from a store
const props = defineProps({
  categoryData: {
    type: Array,
    required: true
  }
});

const messageContent = ref('');

const isActive = (slug) => {
  return slug === route.params.slug;
};

const isImage = (fileUrl) => {
  return fileUrl.match(/\.(jpeg|jpg|gif|png)$/) != null;
}
const getFileName = (fileUrl) => {
  return fileUrl.split('/').pop(); // Extracts the file name from the URL
}

const orderAction = (status) => {


  Swal.fire({
    title: 'Are you sure?',
    text: `You are about to mark this order as ${status}.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, do it!'
  }).then((result) => {
    // If the user clicks "Yes"
    if (result.isConfirmed) {
      // Make an Axios GET request to the server with the new status
      axios.get(`/order/updateStatus`, {
        params: {
          status: status,
          oId: oId.value

        } // Pass the status as a parameter
      })
        .then(response => {
          window.location.href = '/dashboard/buyer/welcome';
          //router.push('/dashboard/buyer/welcome');
          // Handle success response
          Swal.fire(
            'Updated!',
            `The order status has been updated.`,
            'success'
          );
        })
        .catch(error => {
          // Handle error response
          Swal.fire(
            'Error!',
            'There was a problem updating the order status.',
            'error'
          );
          console.error('There was an error!', error);
        });
    }
  });



}



// Handle file upload
const handleFileUpload = (event) => {
  uploadedFile.value = event.target.files[0]; // Store the first uploaded file
};

async function sendMessage() {
  try {
    const formData = new FormData();
    formData.append("senderId", senderId.value);
    formData.append("recipientId", recipientId.value);
    formData.append("message", messageContent.value);

    // Append the file if it exists
    if (uploadedFile.value) {
      formData.append("files", uploadedFile.value);
    }

    // Send the message using axios
    const response = await axios.post("/chat/sendMessages", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);

    // Handle the response
    fetchChatHistory(); // Refresh the chat history after sending the message
    messageContent.value = ''; // Clear the message input
    uploadedFile.value = null; // Clear the file input
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors; // Validation errors
    } else {
      console.error("An error occurred:", error); // Other errors
    }
  }
}

const fetchChatHistory = async () => {

  try {
    const response = await axios.get('/chat/getMessages', {
      params: {
        sender_id: senderId.value, // ID of the logged-in buyer
        to_id: recipientId.value // ID of the recipient (seller)
      }
    });

    chatMessages.value = response.data.map(message => ({
      ...message,
      sender_name: message.sender_name || 'Unknown' // Use sender_name directly
    }));

    nextTick(() => {
      if (isUserAtBottom.value && chatContainer.value) {
        handleScroll();
        chatContainer.value.scrollTo({
          top: chatContainer.value.scrollHeight,
          behavior: 'smooth' // Smooth scrolling effect
        });
      }
    });
  } catch (error) {

  }
};

// Track scroll position to determine if the user is at the bottom
const handleScroll = () => {
  if (chatContainer.value) {
    const { scrollTop, scrollHeight, clientHeight } = chatContainer.value;
    isUserAtBottom.value = scrollTop + clientHeight >= scrollHeight - 10; // User is near the bottom
  }
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

    console.log("daraz buyerId: " + response.data.data.buyerId);
    console.log("daraz sellerID: " + response.data.data.sellerId);

    senderId.value = response.data.data.buyerId;
    recipientId.value = response.data.data.sellerId;
    ordsts.value = response.data.data.ordsts;
  } catch (error) {
    console.log(error);
  } finally {

    loading.value = false;
  }
};

let intervalId;
onMounted(() => {
  getCategoryAll();
  getCatList();
  checkrow();
  //chkUserrow();
  fetchChatHistory(); // Fetch chat history immediately
  intervalId = setInterval(fetchChatHistory, 5000); // Set interval to reload every 5 seconds
  // Attach scroll event listener to track user scrolling
  if (chatContainer.value) {
    chatContainer.value.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  //getChatusersList();
  fetchChatHistory();

});

</script>

<style scoped>
.chat-container {
  height: 650px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.message-content {
  max-width: 100%;
  word-wrap: break-word;
}

.timestamp {
  font-size: 0.8em;
  color: #999;
  display: block;
  margin-top: 5px;
}

.sender-message {

  padding: 10px;
  border-radius: 10px;
  align-self: flex-end;
}

.recipient-message {
  background-color: #e9e9eb;
  padding: 10px;
  border-radius: 10px;
  align-self: flex-start;
}

.attached-image {
  max-width: 100px;
  max-height: 100px;
  margin-top: 5px;
}

.message_container {
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
  width: 100%;
  /* Fixed width for user list */

}

.chat-user-item {
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  border-bottom: 1px solid #e0e0e0;
  /* Add a bottom border for separation */
}

.chat-user-item:last-child {
  border-bottom: none;
  /* Remove border for the last item */
}

.chat-user-item:hover {
  background-color: #065252;
  /* Change background on hover */
}

.chat-user-item {
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-user-item:hover {
  background-color: #075e54;
  color: white;
}

.profile-pic {
  width: 30px;
  /* Smaller image size */
  height: 30px;
  /* Smaller image size */
  border-radius: 50%;
  margin-right: 10px;
}

.dashboard__content {
  background-color: #f0f0f0;
  padding: 10px 10px 10px;
  height: 100vh;
}

.chat-user-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chat-user-item {
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-user-item:hover {
  background-color: #075e54;
  color: white;
}

.chat-user-item.selected {
  background-color: #075e54;
}

.profile-pic {
  width: 30px;
  /* Smaller image size */
  height: 30px;
  /* Smaller image size */
  border-radius: 50%;
  margin-right: 10px;
}

.chat-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.card {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 650px;
  flex: 1;
  /* Takes the remaining height */
}

.card-header {
  background-color: #075e54;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
}

.chatbox {
  height: calc(100vh - 130px);
  overflow-y: auto;
  background-color: #ffffff;
  padding: 10px;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.sender-message {
  justify-content: flex-end;
}

.recipient-message {
  justify-content: flex-start;
}

.profile-picture {
  width: 30px;
  /* Smaller image size */
  height: 30px;
  /* Smaller image size */
  border-radius: 50%;
  margin: 0 10px;
}

.message-content {
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  text-align: left;
  /* Align text to the left */
}

.sender-message .message-content {
  background-color: #dcf8c6;
  margin-left: auto;
}

.recipient-message .message-content {
  background-color: #f1f1f1;
  margin-right: auto;
}

.message-text {
  margin: 0;
}

.file-attachment {
  margin-top: 5px;
}

.attached-image {
  max-width: 100%;
  border-radius: 10px;
}

.file-link {
  display: inline-block;
  margin-top: 5px;
  color: #075e54;
}

.timestamp {
  font-size: 12px;
  color: #999999;
  margin-top: 5px;
}

.card-footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.input-group {
  display: flex;
  align-items: center;
}

textarea {
  border: 1px solid #ccc;
  border-radius: 20px;
  resize: none;
  padding: 10px;
  flex: 1;
  /* Allow textarea to take available space */
  margin-right: 10px;
  /* Add space between textarea and file input */
}

input[type="file"]+label {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 8px;
  background-color: #e1e1e1;
  cursor: pointer;
}

.btn {
  border-radius: 20px;
  margin-left: 10px;
}

.right-sidebar {
  background-color: #ffffff;
  /* Optional: Add styles for right sidebar */
  border-left: 1px solid #e0e0e0;
  width: 25%;
  /* Fixed width for right sidebar */
  overflow-y: auto;
  /* Allow scrolling if needed */
}

/* end message */
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

.btn-cancel {
  background-color: #dc3545;
  /* Bootstrap's danger color */
  color: white;
}

.btn-delivered {
  background-color: #ffc107;
  /* Bootstrap's warning color */
  color: white;
}

.btn-complete {
  background-color: #28a745;
  /* Bootstrap's success color */
  color: white;
}

.btn-custom {
  width: 120px;
  /* Custom width for the buttons */
  margin-right: 10px;
  /* Space between buttons */
}
</style>