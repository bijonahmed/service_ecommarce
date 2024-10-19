<template>
  <title>Messages</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
                                                                                      
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
                    <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                    <a href="#">Messages</a>
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
        <!-- <DashboardMainConentTabs /> -->
        <!-- Start Chatbox -->
        <div class="dashboard__content content">
          <div class="row">
            <div class="col-lg-3">
              <!-- <button @click="getChatusersList">Test</button> -->
              <div class="message_container">
                <!-- ============={{recipientId}}=== -->
                <div v-if="chatUsers.length">
                  <ul class="chat-user-list">
                    <li v-for="user in chatUsers" :key="user.id" @click="selectUser(user)"
                      class="chat-user-item"
                      :class="['chat-user-item', { selected: selectedUserId === user.id }]">
                      <img :src="user.profilePicture" alt="Profile Picture" class="profile-pic" />
                      <span>{{ user.user_name }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-9">
              <div class="card">
                <div class="card-header">
                  Chat History <span v-if="user_name">[{{ user_name }}]</span>
                </div>
                <div class="chatbox" id="" ref="chatContainer">
                  <div class="" ref="chatContainer" v-if="chatMessages.length">
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
const chatContainer = ref(null); // Reference for the chat container
const isUserAtBottom = ref(true); // Track if the user is at the bottom
const senderId = ref(''); // Set this to the ID of the logged-in buyer
const recipientId = ref(''); // The ID of the recipient (seller)
// Send a new message
const selUser = ref(null); // Property to store the selected user
// Method to select a user
const selectUserSelect = (user) => {
  selUser.value = user.user_id; // Set the selected user
  console.log('Selected user:', user); // Debugging purpose
};
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

// Automatically reload the chat history every 5 seconds
const fetchChatHistory = async () => {
  //loading.value = true; // Set loading to true
  try {
    // Fetch chat history from the server
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

    //messageContent.value = ''; // Clear the message input

    // Scroll to the bottom if the user is at or near the bottom
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
    console.error('Error fetching chat history:', error);
  }
};

// Track scroll position to determine if the user is at the bottom
const handleScroll = () => {
  if (chatContainer.value) {
    const { scrollTop, scrollHeight, clientHeight } = chatContainer.value;
    isUserAtBottom.value = scrollTop + clientHeight >= scrollHeight - 10; // User is near the bottom
  }
};

const selectedUserId = ref(null);
async function selectUser(users) {
  console.log("====" + users.user_id);
  recipientId.value = users.user_id;
  selectedUserId.value = users.id;
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
    const response = await axios.get(`/chat/getChatUsersTo`);
    chatUsers.value = response.data;
  } catch (error) {
    // Handle error
  }
};
const chkUserrow = async () => {
  try {
    loading.value = true;
    const response = await axios.post(`/auth/me`);
    senderId.value = response.data.user_id;

  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    loading.value = false;

  }
};
let intervalId;
onMounted(() => {
  chkUserrow();
  fetchChatHistory(); // Fetch chat history immediately
  intervalId = setInterval(fetchChatHistory, 5000); // Set interval to reload every 5 seconds
  // Attach scroll event listener to track user scrolling
  if (chatContainer.value) {
    chatContainer.value.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  getChatusersList();
  fetchChatHistory();
  //getCatList();

});


// Clear the interval when the component is unmounted
onBeforeUnmount(() => {
  clearInterval(intervalId); // Stop the interval when the component is destroyed

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
  max-width: 75%;
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
</style>