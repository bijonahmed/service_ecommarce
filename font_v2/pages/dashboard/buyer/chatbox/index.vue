<template>
    <title>Messages</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">

                <!-- Breadcumb Sections -->


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
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <br />
                <!-- Loader: Show only when loading is true -->
                <center v-if="loading">
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </center>


                <div class="container chat-container p-4">
                    <center>
                        <h3 class="chat-title">Chat List</h3>
                    </center>
                    <div v-if="chatUsers.length" class="chat-list-container">
                        <ul class="list-group">
                            <li v-for="user in chatUsers" :key="user.id" @click="setSellerUserId(user)"
                                class="list-group-item chat-user-item d-flex align-items-center">
                                <img :src="user.profilePicture || '/about-17.png'" alt="User Avatar"
                                    class="chat-user-img" />
                                <NuxtLink :to="`/dashboard/buyer/chatbox/${user.user_id}`" class="chat-user-name">
                                    {{ user.user_name }}
                                </NuxtLink>
                                <span class="badge chat-badge" v-if="user.unread_count > 0">{{ user.unread_count
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="text-muted">No chats available.</div>
                </div>
                <br/>
            </div>
        </div>
    </body>


</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const loading = ref(false);
const route = useRoute();
const errors = ref({});
const chatUsers = ref([]);

definePageMeta({
    middleware: "is-logged-out",
});


const getChatusersList = async () => {
    try {
        loading.value = true; // Start loading
        const response = await axios.get(`/chat/getChatUsers`);
        chatUsers.value = response.data;
    } catch (error) {
        console.error('Error fetching chat users:', error);
    } finally {
        loading.value = false; // Stop loading
    }
};


const setSellerUserId = (user) => {
    const userId = user.user_id;
    const to_id = user.to_id;
    localStorage.setItem('seller_user_id', userId);
    localStorage.setItem('to_id', to_id);
};


onMounted(() => {
    getChatusersList();
});

</script>
<style>
/* Chat container styling */
.chat-container {
    max-width: 500px;
    margin: auto;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

/* Hover effect for the container */
.chat-container:hover {
    transform: translateY(-5px);
}

/* Chat title styling */
.chat-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #2c3e50;
}

/* List group container */
.chat-list-container {
    padding: 15px;
}

/* List group item styling */
.chat-user-item {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, background 0.3s;
    cursor: pointer;
}

/* Hover effect on chat item */
.chat-user-item:hover {
    background: linear-gradient(135deg, #e9f7ef, #d4edda);
    transform: translateY(-3px);
}

/* Profile picture */
.chat-user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    border: 3px solid #28a745;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

/* Profile picture hover effect */
.chat-user-item:hover .chat-user-img {
    transform: scale(1.1);
}

/* User name styling */
.chat-user-name {
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    text-decoration: none;
    flex-grow: 1;
    transition: color 0.3s;
}

/* Hover effect on user name */
.chat-user-name:hover {
    color: #28a745;
    text-decoration: underline;
}

/* Unread message badge */
.chat-badge {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 20px;
    background-color: #dc3545;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(220, 53, 69, 0.5);
    animation: pulse 1.5s infinite;
}

/* Pulse animation for unread badge */
@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>
