<template>
  <div>
    <title>Chat Box</title>
    <LogoAndPayment />
    <NavbarSecond />
    <div class="wrapper-inline message_box">
      <!-- Page content start -->

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 mt-3">
            <!-- last message start here  -->
            <h3>Messages</h3>
            <ul class="list-group">
              <li class="list-group-item" v-for="(user, index) in userList" :key="index"
                :class="{ 'selected-item': selectedUser === user }">
                <a href="#" @click="selectUser(user)" style="color:black;">
                  {{ user.name }} [ {{ user.email }}]
                </a>
              </li>
            </ul>

          </div>
          <!-- END -->

          <div class="col-md-8 mt-3">
            <!-- Main Start -->
            <div class="conta">
              <div class="chat-box">
                <div class="chat-header">

                  <center>

                    <!-- Button to manually scroll to bottom -->
                    <!-- <button @click="scrollToBottom">Scroll Down</button> ----{{ currentUserEmail }}-->
                    <u class="text-white">Seller Chatbox</u>
                    <span v-if="selectedEmail">{{ selectedEmail }}</span>
                  </center>
                  <span class="d-none">
                    <input type="text" v-model="username" class="username-input" placeholder="Enter your username"
                      readonly />
                  </span>
                </div>
                <center>
                  <div class="loading-indicator" v-if="loading">
                    <div class="loader-container">
                      <center class="loader-text">Loading...</center>
                      <img src="/loader/loader.gif" alt="Loader" />
                    </div>
                  </div>
                </center>
                <!-- Chat Messages Section -->
                <section class="ok chat-messages scrollarea" ref="chatContainer">

                  <div v-for="message in messages" :key="message.id" :class="{
                    'message-container': true,
                    sent: message.username === currentUser.username,
                    received: message.username !== currentUser.username,
                  }">
                    <div class="message">
                      <div class="message-username">{{ message.name }}</div>
                      <div class="message-text">
                        {{ message.message }}
                        <small class="message-time">{{ message.created_at }}</small>
                      </div>

                      <!-- Conditionally render the file if it exists -->
                      <div v-if="message.files" class="message-file">
                        <a :href="message.files" target="_blank"><i class="fa fa-file" style="font-size:24px"></i></a>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- <section class="ok chat-messages scrollarea" ref="chatContainer">
                  <div v-for="(message, index) in messages" :key="message.id" :class="{
                    'message-container': true,
                    sent: message.username === currentUser.username,
                    received: message.username !== currentUser.username,
                  }">
                    <div class="message">
                      <div class="message-username">{{ message.name }}</div>
                      <div class="message-text">
                        {{ message.message }}
                        <small class="message-time">{{ message.created_at }}</small>
                      </div>
                    </div>
                  </div>
                </section> -->

                <!-- Chat Footer with Input -->
                <form @submit.prevent="submit" class="chat-footer-menu" enctype="multipart/form-data">
                  <div class="row">
                    <div class="col-md-8">
                      <input class="message-input" placeholder="Write a message" v-model="message" />
                    </div>
                    <div class="col-md-4">
                      <input type="file" ref="files" @change="onFileChange" class="form-control mb-2">
                    </div>
                  </div>
                  <button class="btn w-100 btn btn-primary">Send</button>
                </form>




              </div>
            </div>
            <!-- END -->
          </div>
          <div class="col-md-2 mt-3">
            <center><b><u>Profile</u></b><br /></center>
            <span v-if="buyerEmail">
              <center><img src="/user-100.png" class="img-thumbnail mt-2" style="height: 60px; width:60px;" /></center>
              Name : {{ buyerName }}<br />
              Email : {{ buyerEmail }}<br />
              Invite Code : {{ buyerInviteCode }}<br />

            </span>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import { format } from 'date-fns';

export default {
  data() {
    return {
      communitySlug: this.$route.query.slug,
      username: "jons", //this.$route.query.email,
      name: this.$route.query.name,
      seller_id: this.$route.query.seller_id,
      message: "",
      loading: false,
      messages: [],
      userList: [],
      currentUser: {
        username: "", // Your logged-in user's email/username seller3@gmail.com
      },
      isAtBottom: true,
      buyerId: null,
      selectedEmail: null,
      chatMessagesRef: null,
      pollingInterval: null,
      currentUserEmail: null,
      selectedUser: null,
      buyerName: null,
      buyerEmail: null,
      buyerInviteCode: null,


    };
  },
  head: {
    title: "ChatBox",
  },
  mounted() {
    this.getCurrentUser();
    this.scrollToBottom(); // Scroll to bottom when the component is mounted
    this.getBuyersListForSeller();
    this.afterSubmitResponse();
    this.pollingInterval = setInterval(this.afterSubmitResponse, 10000); // Poll every 10 seconds
    this.$nextTick(() => {
      this.chatMessagesRef = this.$refs.chatMessagesRef;
    });
  },
  updated() {
    this.scrollToBottom(); // Scroll to bottom when a new message is added
  },
  beforeDestroy() {
    clearInterval(this.pollingInterval);
  },
  methods: {
    selectUser(user) {
      this.message = "";
      this.selectedUser = user;
      this.showBuyerMessages(user);
    },
    async getCurrentUser() {
      await this.$axios.post(`/auth/me`).then((response) => {
        // Seller Account Info
        this.currentUserEmail = response.data.email;
        this.currentUser.username = response.data.email;

      });
    },
    scrollToDiv() {
      // Use vanilla JS to scroll to the div with ref 'targetDiv'
      const targetElement = this.$refs.targetDiv;
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Ensures smooth scrolling
        });
      }
    },

    async showBuyerMessages(user) {
      this.loading = true;

      try {

        let buyerId = user.user_id;
        this.selectedEmail = user.username;
        this.buyerId = user.user_id;
        //console.log("===" + user.name);
        this.buyerName = user.name;
        this.buyerEmail = user.username;
        this.buyerInviteCode = user.invite_code;
        //console.log("Eamil:==========" + selectedEmail);
        const response = await this.$axios.get(`/getSellerMessages/${buyerId}`);
        this.messages = response.data;
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchMessages() {
      try {
        //getSellerMessages
        const response = await this.$axios.get(
          `/getSellerMessages/${this.seller_id}`
        );
        this.messages = response.data;
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },

    async getBuyersListForSeller() {
      try {
        this.loading = true;
        //getSellerMessages
        const response = await this.$axios.get(`/getBuyListForSeller`);
        this.userList = response.data;
        this.fetchMessages();
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        this.loading = false;
      }
    },
    onFileChange(event) {
      // Log the event and $refs to check their values
      console.log(event); // Check the event object
      console.log(this.$refs.files); // Ensure the reference is correct

      const file = this.$refs.files.files[0];

      // Check if the file is captured
      console.log(file); // Should log the selected file
    },



    async submit() {
      if (this.message.trim() === "") {
        console.log("Message is empty, not sending.");
        return;
      }


      try {

        const file = this.$refs.files.files[0];
        // Create a FormData object
        const formData = new FormData();
        formData.append('files', file);
        formData.append('username', this.username);
        formData.append('message', this.message);
        formData.append('userId', this.buyerId);
        formData.append('community_slug', this.name);

        // Make the axios POST request with formData
        this.$axios.post('/sellerSendMessages', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then(response => {
          this.$refs.files.value = '';
          // Handle the response here
          console.log(response.data);
        }).catch(error => {
          // Handle errors here
          console.error(error);
        });

        this.message = "";
        this.afterSubmitResponse();

        this.$nextTick(() => {
          this.scrollToBottom();
        });
      } catch (error) {
        console.error("Error sending message:", error);
      }
      // try {
      //   const response = await this.$axios.post("/sellerSendMessages", {
      //     username: this.username,
      //     message: this.message,
      //     userId: this.buyerId,
      //     community_slug: this.name,
      //   });
      //   console.log("Message sent:", response.data);

      //   this.message = "";
      //   this.afterSubmitResponse();

      //   this.$nextTick(() => {
      //     this.scrollToBottom();
      //   });
      // } catch (error) {
      //   console.error("Error sending message:", error);
      // }
    },

    async afterSubmitResponse() {
      //After response stop redirect
      let buyerId = this.buyerId;
      const res = await this.$axios.get(`/getSellerMessages/${buyerId}`);
      this.messages = res.data;
    },

    scrollToBottom() {
      // Ensure scrolling happens only after DOM is updated
      this.$nextTick(() => {
        const chatContainer = this.$refs.chatContainer;
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
        }
      });
    },
  },
};
</script>

<style scoped>
/* new */
.chat-box {
  border: 1px solid #ccc;
  height: 400px;
  /* Adjust height as per requirement */
  display: flex;
  flex-direction: column;
}

.ok.chat-messages.scrollarea {
  flex: 1;
  overflow-y: auto;
  /* Enable scrolling */
}

.message-container {
  margin-bottom: 10px;
}

.sent .message {
  background-color: #e0ffe0;
  /* Sent message background */
}

.received .message {
  background-color: #e0e0ff;
  /* Received message background */
}

.message-time {
  font-size: 10px;
  display: block;
}

.chat-footer-menu {
  padding: 10px;
  border-top: 1px solid #ccc;
}

.message-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

/* Container styling */
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 0 20px;
}

.message-input {
  flex: 1;
  padding: 10px;
}

/* Chat box styling */
.chat-box {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  height: 85vh;
  border-radius: 0;
}

/* Header styling */
.chat-header {
  background: linear-gradient(to right, #122664, rgba(123, 97, 255, 0.14118));
  padding: 10px 15px;
}

.username-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  outline: none;
}

/* Messages area styling */
.scrollarea {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
}

/* Message container styling */
.message-container {
  display: flex;
  margin: 5px 0;
}

.message-container.sent {
  justify-content: flex-end;
}

.message-container.received {
  justify-content: flex-start;
}

.message {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  background: #333;
  color: #000;
  width: 50%;
}

.sent .message {
  background: #fff;
  border-bottom-right-radius: 0;
  box-shadow: 0 0 10px #0000004d;
  padding: 3px 15px;
}

.sent .message-text {
  display: flex;
  flex-direction: column;
  color: #000;
  font-size: 12px;
  align-items: end;
}

.received .message {
  background: #000;
  border-bottom-left-radius: 0;
  box-shadow: 0 0 10px #0000004d;
  padding: 5px 15px;
}

.received .message-username {
  font-weight: bold;
  margin-bottom: 2px;
  /* text-align: end; */
}

.message-username {
  font-weight: bold;
  margin-bottom: 5px;
  color: green;
  font-size: 12px;
}

.received .message-username {
  font-weight: bold;
  margin-bottom: 5px;
  color: #ffc458;
  font-size: 12px;
}

.message-text {
  display: flex;
  flex-direction: column;
  color: #474646;
}

.received .message-text {
  color: #fff;
}

.message-text small {
  align-self: flex-end;
  color: #5c5a5a;
  font-size: 10px;
}

/* Form styling */

.message-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.message-input:focus {
  border-color: #4a90e2;
}

.chat-messages {
  flex: 1;
  /* Take up all available space */
  overflow-y: auto;
  padding: 10px;
}

.message_box main {
  margin-top: 5px;
}

.chat-form {
  background: #f1f1f1;
  display: flex;
  gap: 10px;
  padding: 10px;
  position: fixed;

  width: 100% !important;
}

.message-input button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.selected-item {
  background-color: #f0f8ff;
  /* Change to your desired color */
  font-weight: bold;
  border-left: 5px solid #007bff;
  /* Optional highlight */
}
</style>