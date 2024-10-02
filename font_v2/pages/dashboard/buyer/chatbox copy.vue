<template>
  <title>Messages</title>

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
                      <nuxt-link :to="`/category/${data.slug}`">
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

        <div class="loading-indicator" v-if="loading" style="text-align: center;">
          <Loader />
        </div>
        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                    <a href="#">Messages</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <span class="icon flaticon-share dark-color fz12 mr10"></span>
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- <DashboardMainConentTabs /> -->
        <!-- Start Chatbox -->
        <div class="dashboard__content content">
          <div class="row">
            <div class="col-lg-3 col-xl-3 col-xxl-3">
              <div class="message_container">
                <!-- ============={{recipientId}}=== -->
                <div v-if="chatUsers.length">
                  <ul class="chat-user-list">
                    <li v-for="user in chatUsers" :key="user.id" @click="selectUser(user)" class="chat-user-item">
                      <img :src="user.profilePicture" alt="Profile Picture" class="profile-pic" />
                      <span>{{ user.user_name }}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="col-lg-6 col-xl-7 col-xxl-8">
              <div class="card">
                <div class="card-header">
                  Chat History <span v-if="user_name">[{{user_name}}]</span>
                </div>
                <div class="chatbox" id="">
                  <div class="" v-if="chatMessages.length">
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

                  <div class="no-messages" v-else>
                    <p>No messages yet.</p>
                  </div>
                </div>
                <div class="card-footer">
                  <form id="chatForm" enctype="multipart/form-data" @submit.prevent="sendMessage()">
                    <div class="input-group">
                      <textarea class="form-control" id="message" placeholder="Type your message..." rows="3"
                        v-model="messageContent"></textarea>
                      <input type="file" class="form-control" id="fileInput" accept="image/*,application/pdf"
                        @change="handleFileUpload" />
                      <button class="btn btn-primary text-white" type="submit">Send</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- END ChatBox -->
        <div />
      </div>
    </div>

    <!-- Modal Template -->

    <Footer />
  </body>
</template>

<script setup>
definePageMeta({
  middleware: "is-logged-out",
});
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();
const errors = ref({});
const orderData = ref('');
const gigName = ref('');
const uploadedFile = ref(null);

const chatMessages = ref([]);
const chatUsers = ref([]);
const messageContent = ref('');
const user_name = ref('');
const senderId = ref(37); // Set this to the ID of the logged-in buyer
const recipientId = ref(''); // The ID of the recipient (seller)
// Send a new message

// Method to handle file upload
const handleFileUpload = (event) => {
  uploadedFile.value = event.target.files[0]; // Store the first uploaded file
};

const isImage = (fileUrl) => {
  return fileUrl.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

const getFileName = (fileUrl) => {
  return fileUrl.split('/').pop(); // Extracts the file name from the URL
}

// Method to send the message
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

// Fetch chat history
async function fetchChatHistory() {
  loading.value = true; // Set loading to true
  try {
    // Send user_id as a query parameter
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
    messageContent.value = ''; // Clear the message input 
  } catch (error) {
    console.error('Error fetching chat history:', error);
  } finally {
    loading.value = false; // Set loading to false after fetching
  }
}



async function selectUser(users) {

  console.log("====" + users.user_id);
  recipientId.value = users.user_id;
  user_name.value = users.user_name;
  fetchChatHistory();

}

// Handle sending message on form submit
function handleSendMessage() {
  if (messageContent.value.trim() === '') return;
  sendMessage();
}

const showDetails = (order) => {
  fetchChatHistory()
  console.log(order.gig_name);
  gigName.value = order.gig_name;
  $('#staticBackdrop').modal('show');

}
// Function to format the date
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const getCatList = async () => {
  try {
    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;
  } catch (error) {
    // Handle error
  }
};


const getChatusersList = async () => {
  try {
    const response = await axios.get(`/chat/getChatUsers`);
    chatUsers.value = response.data;
  } catch (error) {
    // Handle error
  }
};



const getAllOrdersList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/order/getOrder`);
    orderData.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getChatusersList();
  fetchChatHistory();
  getCatList();
  getAllOrdersList();

});

</script>


<style scoped>
.chat-user-list {
  list-style-type: none;
  padding: 0;
}

.chat-user-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.chat-user-item:hover {
  background-color: #f0f0f0;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-details {
  margin-top: 20px;
}

.chat-message {
  margin: 5px 0;
}

.chat-message.sender {
  text-align: right;
}

.timestamp {
  font-size: 0.8em;
  color: gray;
}

/* message */
.modal-backdrop.show {
  opacity: 0;
}

.dashboard__content {
  border-radius: 4px;
  padding: 10px 60px 20px;
  width: 100%;
}

.chatbox {
  padding: 10px;
  background-color: #e5ddd5;
  /* Light gray background similar to WhatsApp */
  border: 1px solid #ddd;
  border-radius: 10px;
  max-height: 500px;
  text-align: left;
  max-width: 100%;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.profile-picture {
  width: 40px;
  /* Set a fixed width */
  height: 40px;
  /* Set a fixed height */
  border-radius: 50%;
  /* Make it circular */
  margin-right: 10px;
  /* Space between the image and message */
  object-fit: cover;
  /* Crop the image to fit */
}

.message {
  display: flex;
  /* Use flexbox for alignment */
  align-items: flex-start;
  /* Align items vertically */
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 20px;
  position: relative;
  /* Needed for the arrow effect */
  max-width: 100%;
  /* Limit width for messages */
}

.message-content {
  flex-grow: 1;
  /* Allow content to take available space */
}

.sender-message {
  background-color: #dcf8c6;
  color: #000;
  align-self: flex-end;
  /* margin-left: auto; */
  border-bottom-left-radius: 20px;
}

.recipient-message {
  background-color: #fff;
  color: #000;
  align-self: flex-start;
  margin-right: auto;
  border-bottom-right-radius: 20px;
}

.sender-name {
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.message-text {
  margin: 0;
  line-height: 1.4;
}

.file-attachment {
  margin-top: 5px;
  font-size: 0.9em;
}

.attached-image {
  max-width: 200px;
  height: auto;
  margin-top: 5px;
  border-radius: 5px;
}

.file-link {
  color: #007bff;
  text-decoration: none;
}

.file-link:hover {
  text-decoration: underline;
}

.timestamp {
  display: block;
  font-size: 0.75em;
  color: #888;
  margin-top: 5px;
  text-align: right;
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
</style>