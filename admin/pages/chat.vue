<template>
    <title>Chat</title>
    <!-- <AdminLayout> -->
      <div class="container">
        <div class="chat-box">
            <div class="chat-header">
                <input class="username-input" v-model="username" placeholder="Enter your username" />
            </div>
            <div class="chat-messages scrollarea">
                <div v-for="message in messages" :key="message.id" 
                    :class="{'message': true, 'sent': message.username === username, 'received': message.username !== username}">
                    <div class="message-username">{{ message.username }}</div>
                    <div class="message-text">{{ message.message }}</div>
                </div>
            </div>
            <form @submit.prevent="submit" class="chat-form">
                <input class="message-input" placeholder="Write a message" v-model="message" />
            </form>
        </div>
    </div>


    <!-- </AdminLayout> -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Pusher from 'pusher-js';
import axios from 'axios';

const username = ref('username');
const message = ref('');
const messages = ref([]);


onMounted(() => {
  Pusher.logToConsole = true;
  const pusher = new Pusher('300d162fd051675e56e4', {
    cluster: 'ap2',
  });

  const channel = pusher.subscribe('chat');
  channel.bind('message', data => {
    if (data && data.message) {
      messages.value.push(data);
    }
  });
});

const submit = async () => {
  if (message.value.trim() === '') {
    console.log('Message is empty, not sending.');
    return;
  }

  try {
    const response = await axios.post('/messages', {
      username: username.value,
      message: message.value,
    });

    console.log('Message sent:', response.data);
    message.value = '';
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

</script>
<style scoped>
/* Container styling */
.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 0 20px;
}

/* Chat box styling */
.chat-box {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
}

/* Header styling */
.chat-header {
    background: linear-gradient(to right, #4a90e2, #7b61ff);
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
}

.message {
    max-width: 80%;
    padding: 10px 15px;
    margin: 10px 0;
    border-radius: 15px;
    position: relative;
}

.sent {
    background: #d1e7dd;
    margin-left: auto;
    border-bottom-right-radius: 0;
}

.received {
    background: #f1f1f1;
    margin-right: auto;
    border-bottom-left-radius: 0;
}

.message-username {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

.message-text {
    color: #555;
}

/* Form styling */
.chat-form {
    background: #f1f1f1;
    padding: 15px;
    border-top: 1px solid #ddd;
}

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
</style>
