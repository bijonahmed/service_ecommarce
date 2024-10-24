<template>
  <title>Seller Send Messages</title>

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
            <div class="col-lg-3">
              <div class="message_container">

                <div class="m-4 d-flex align-items-center justify-content-center">
                  <input type="text" placeholder="Search" class="form-control search_form">
                  <button type="button" class="btn btn-primary m-0 h-100 search_btn">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
                <!-- ============={{recipientId}}=== -->
                <div v-if="chatUsers.length">
                  <ul class="chat-user-list">
                    <li v-for="user in chatUsers" :key="user.id" @click="selectUser(user)" class="chat-user-item"
                      :class="{ selected: selectedUserId === user.id }">
                      <img :src="user.profilePicture ? user.profilePicture : '/blank_user.jpg'" alt=""
                        class="profile-pic" />
                      <span>{{ user.user_name }}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">

                <div class="card-header justify-content-between align-items-center d-flex p-2">
                  <span class="text-white text-start" v-if="user_name">{{ user_name }}</span>
                  <span style="font-size: 12px;">Last seen: {{ lastSeen }}</span>
                </div>
                <div class="chatbox" id="" ref="chatContainer">
                  <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                  </div>
                  <div class="" ref="chatContainer" v-if="chatMessages.length">
                    <div class="message" v-for="message in chatMessages" :key="message.id"
                      :class="{ 'sender-message': message.sender_id === senderId, 'recipient-message': message.sender_id !== senderId }">
                      <!-- <img
                        :src="message.sender_id === senderId ? message.sender_profile_picture : message.recipient_profile_picture"
                        alt="Profile Picture" class="profile-picture" /> -->

                      <div class="message-content">
                        <!-- <strong class="sender-name">{{ message.sender_name }}</strong> -->
                        <p class="message-text">{{ message.message }}</p>
                        <div v-if="message.files" class="file-attachment">
                          <!-- <p>Attached Files:</p> -->
                          <div v-if="isImage(message.files)">
                            <img style="width: 100px;" :src="message.files" alt="Attached Image"
                              class="attached-image" />
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
                      <input class="form-control" id="message" placeholder="Type your message..."
                        v-model="messageContent">
                      <div class="p-2 px-3 bg-white d-flex align-items-center justify-content-center">
                        <label for="fileInput" style="cursor: pointer;"
                          class=" d-flex align-items-center justify-content-center"><i
                            class="fas fa-paperclip"></i></label>
                      </div>
                      <input type="file" hidden class=" " id="fileInput" accept="image/*,application/pdf"
                        @change="handleFileUpload" />
                      <button class="btn btn-primary text-white send_button" type="submit"><i
                          class="fas fa-paper-plane"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <!-- <button @click="getChatusersList">Test</button> -->
              <div class="bg-white h-100 p-4">
                <img :src="profilePicture || '/blank_user.jpg'" alt="" class="img-fluid rounded-circle bg-red"
                  style="height: 80px;width: 80px;">
                <h4 class="text-center mt-2 mb-0">{{ user_name }}</h4>
                <p class="text-center">{{ professionName }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <p>From</p>
                  <strong>{{ country }}</strong>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p>Registered</p>
                  <strong>{{ join_date }}</strong>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p>Language</p>
                  <strong>English</strong>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                  <p>Completed orders</p>
                  <p>{{ sellerOrder }}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p>Average rating given</p>
                  <p>{{sellerReview}}</p>
                </div>
                <div class=" d-none  justify-content-between align-items-center">
                  <p>Average order price</p>
                  <p>0</p>
                </div>
                <div class="d-none justify-content-between align-items-center">
                  <p>Tip Frequency</p>
                  <p>0</p>
                </div>
                <div class="d-none justify-content-between align-items-center">
                  <p>Repeat order rate</p>
                  <p>0</p>
                </div>
                <div class="d-none d-flex justify-content-between align-items-center">
                  <p>Order completion rate</p>
                  <p>90%</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p>Date of last order</p>
                  <p>{{ lastOrderDate }}</p>
                </div>
                <div class="d-none justify-content-between align-items-center">
                  <p>Preferred service</p>
                  <p>0</p>
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
const profilePicture = ref('');
const country = ref('');
const gigName = ref('');
const uploadedFile = ref(null);
const chatMessages = ref([]);
const chatUsers = ref([]);
const messageContent = ref('');
const user_name = ref('');
const chatContainer = ref(null);
const isUserAtBottom = ref(true);
const senderId = ref(''); // Set this to the ID of the logged-in buyer
const recipientId = ref(''); // The ID of the recipient (seller)
const selectedUserId = ref(null);
const professionName = ref(null);
const lastSeen = ref("");
const join_date = ref("");
const sellerOrder = ref(0);
const lastOrderDate = ref("");
const sellerReview = ref("");
const handleFileUpload = (event) => {
  uploadedFile.value = event.target.files[0];
};

const isImage = (fileUrl) => {
  return fileUrl.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

const getFileName = (fileUrl) => {
  return fileUrl.split('/').pop();
}

// Method to send the message
async function sendMessage() {
  try {
    const formData = new FormData();
    formData.append("senderId", senderId.value);
    formData.append("recipientId", recipientId.value);
    formData.append("message", messageContent.value);

    if (uploadedFile.value) {
      formData.append("files", uploadedFile.value);
    }

    const response = await axios.post("/chat/sendMessages", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    fetchChatHistory();
    messageContent.value = '';
    uploadedFile.value = null;
  } catch (error) {

    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      console.error("An error occurred:", error);
    }
  }
}


const fetchChatHistory = async () => {
  try {
    const response = await axios.get('/chat/getMessages', {
      params: {
        sender_id: senderId.value, // The ID of the buyer (logged-in user)
        to_id: recipientId.value // The ID of the seller (recipient)
      }
    });

    chatMessages.value = response.data.map(message => ({
      ...message,
      sender_name: message.sender_name || 'Unknown'
    }));

    nextTick(() => {
      if (isUserAtBottom.value && chatContainer.value) {
        chatContainer.value.scrollTo({
          top: chatContainer.value.scrollHeight,
          behavior: 'smooth'
        });
      }
    });
  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

const handleScroll = () => {
  if (chatContainer.value) {
    const { scrollTop, scrollHeight, clientHeight } = chatContainer.value;
    isUserAtBottom.value = scrollTop + clientHeight >= scrollHeight - 10; // User is near the bottom
  }
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


const getParticularData = async () => {
  try {
    const response = await axios.post(`/auth/me`);
    senderId.value = response.data.user_id;
  } catch (error) {
    // Handle error
  }
};

async function selectUser(users) {
  console.log("==recipientId==" + users.user_id);
  console.log("==selectedUserId==" + users.id);
  console.log("==user_name==" + users.user_name);

  sellerReview.value = users.sellerReview;
  lastOrderDate.value = users.lastOrderDate;
  sellerOrder.value = users.sellerOrder;
  join_date.value = users.join_date;
  lastSeen.value = formatCurrentTime();
  professionName.value = users.professionName;
  country.value = users.country;
  profilePicture.value = users.profilePicture;
  recipientId.value = users.user_id;
  selectedUserId.value = users.id;
  user_name.value = users.user_name;
  fetchChatHistory();
}


const formatCurrentTime = () => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const currentDateTime = new Date();
  return new Intl.DateTimeFormat('en-US', options).format(currentDateTime);
}


const defaultLoadingUser = async () => {
  const sellerId = route.params.sellerId; // Get sellerId from the route
  console.log('Seller ID from route:', sellerId); // Debugging log
  loading.value = true;
  try {
    const response = await axios.get('/chat/userrowCheck', {
      params: {
        sellerId: sellerId, // The ID of the buyer (logged-in user)
      }
    });
    //console.log('Response data:', response.data); // Debugging log
    selectUser(response.data); // Call the function to select the user
  } catch (error) {
    console.error('Error fetching user data:', error); // Log the error
    // Optionally, you can show an error message to the user here
  } finally {
    loading.value = false; // Set loader to false
  }
};

let intervalId;
onMounted(() => {
  lastSeen.value = formatCurrentTime();
  defaultLoadingUser();
  getParticularData();
  // fetchChatHistory();
  intervalId = setInterval(fetchChatHistory, 5000); // Set interval to reload every 5 seconds
  if (chatContainer.value) {
    chatContainer.value.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  getChatusersList();
  // fetchChatHistory();
  getCatList();

});


onBeforeUnmount(() => {
  clearInterval(intervalId);
  if (chatContainer.value) {
    chatContainer.value.removeEventListener('scroll', handleScroll);
  }
});

</script>


<style scoped>
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
  /* height: 100vh; */
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
  width: 50%;
  /* Fixed width for chat area */
  display: flex;
  flex-direction: column;
}

.card {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 650px;
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
  max-width: 45%;
  padding: 15px;
  border-radius: 10px;
  position: relative;
  text-align: left;
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
  /* border-radius: 20px;
  margin-left: 10px; */
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

.search_form {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: 0;
  border: 1px solid #adadad;
}

.search_btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 15px;
  color: #fff;
  background: #1f4b3f;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.send_button {
  background: #1f4b3f !important;
  color: #fff;
}
</style>