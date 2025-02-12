<template>
    <title>Messages</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">

                <!-- Breadcumb Sections -->


                <br><br><br>

                <div class="container">
                    <center><span><b>Buyer Message List</b></span></center>
                    <br>

                    <!-- Loader: Show only when loading is true -->
                    <center v-if="loading">
                        <div class="spinner-border text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </center>

                    <!-- Buyer List: Show only when not loading and chatUsers exist -->
                    <div v-else-if="chatUsers.length">
                        <ul class="list-group">
                            <li v-for="user in chatUsers" :key="user.id" class="list-group-item chat-user-item">
                                <img :src="user.profilePicture || '/about-17.png'" alt="" class="rounded-circle me-2"
                                    style="width: 40px; height: 40px;" />
                                <!-- <a :href="`/dashboard/chatbox/${user.user_id}`" class="text-decoration-none text-dark">
                                    {{ user.user_name }}
                                </a> -->
                                <NuxtLink :to="`/dashboard/chatbox/${user.user_id}`" @click="setBuyerUserId(user)"
                                    class="text-decoration-none text-dark">
                                    {{ user.user_name }}
                                </NuxtLink>

                                <span class="badge bg-danger ms-1" v-if="user.unread_count > 0">{{ user.unread_count
                                    }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- No Buyers Found: Show if no chatUsers exist -->
                    <div v-else class="text-center text-muted mt-3">
                        No buyers found.
                    </div>
                </div>
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
    loading.value = true; // Start loading
    try {
        const response = await axios.get(`/chat/getChatUsersTo`);
        chatUsers.value = response.data.chatusers;
        //  console.log("counts" + response.data.countmsg);
    } catch (error) {
        console.error('Error fetching chat users:', error);
    } finally {
        loading.value = false; // Stop loading
    }
};



const setBuyerUserId = (user) => {
    const userId = user.user_id;
    const to_id = user.to_id;
    localStorage.setItem('buyer_user_id', userId);
    localStorage.setItem('to_id', to_id);
};

onMounted(() => {
    getChatusersList();
});

</script>
<style scoped>
/* General container styling with gradient background */
.container {
    max-width: 600px;
    margin: 20px auto;
    background: linear-gradient(135deg, #ffffff, #f8f9fa);
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    padding: 25px 30px;
    transition: transform 0.3s ease-in-out;
}

/* Add subtle hover lift for the container */
.container:hover {
    transform: translateY(-5px);
}



/* Loader styling with modern look */
.spinner-border {
    margin: 20px 0;
    width: 3rem;
    height: 3rem;
    border-width: 0.4em;
    border-color: #28a745 transparent #28a745 transparent;
    animation: spin 1.2s linear infinite;
}

/* Spin animation for loader */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* List styling with clean look */
.list-group {
    padding: 0;
    margin: 0;
    list-style: none;
}

/* List item with glassmorphism effect */
.list-group-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px 20px;
    transition: all 0.3s ease-in-out;
    border-radius: 12px;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Hover effect with color change */
.list-group-item:hover {
    background: linear-gradient(135deg, #e9f7ef, #d4edda);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Profile picture with shadow and rounded border */
.list-group-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
    border: 3px solid #28a745;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

/* Profile picture hover effect */
.list-group-item img:hover {
    transform: rotate(10deg) scale(1.1);
}

/* User link with modern font and hover underline */
.list-group-item a {
    font-size: 20px;
    font-weight: 600;
    color: #2c3e50;
    text-decoration: none;
    flex-grow: 1;
    transition: color 0.3s;
}

/* Hover effect on username */
.list-group-item a:hover {
    color: #28a745;
    text-decoration: underline;
}

/* Unread message badge with pulse animation */
.badge {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 20px;
    background-color: #dc3545;
    color: #fff;
    font-weight: 700;
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

/* Empty message styling */
.text-muted {
    font-size: 16px;
    color: #999;
    margin-top: 20px;
    text-align: center;
    font-style: italic;
}
</style>
