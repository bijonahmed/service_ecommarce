<template>

    <center><span>Messages List</span></center>
    <div v-if="chatUsers.length">
        <ul class="list-group">
            <li v-for="user in chatUsers" :key="user.id" @click="selectUser(user)"
                class="list-group-item chat-user-item">
                <img :src="user.profilePicture || '/images/avatar/avatar1.png'" class="rounded-circle me-2"
                    style="width: 40px; height: 40px;" />

                <NuxtLink :to="`/dashboard/buyer/chatbox/${user.user_id}`" class="text-decoration-none text-dark">
                    {{ user.user_name }}
                </NuxtLink>

                <span class="badge bg-danger ms-1" v-if="user.unread_count > 0">{{ user.unread_count
                }}</span>
                <!-- Unread count -->
            </li>
        </ul>
    </div>
</template>

<script setup>
import {
    useRoute
} from 'vue-router';
import axios from 'axios';

import {
    useRouter
} from 'vue-router';
import Swal from "sweetalert2";

const chatUsers = ref([]);
const router = useRouter();
const usermsgData = ref([]);
const msgData = ref([]);

const getChatusersList = async () => {
    try {
        const response = await axios.get(`/chat/getChatUsers`);
        chatUsers.value = response.data;
    } catch (error) {
        // Handle error
    }
};

const getUsersMessages = async () => {
    try {
        const response = await axios.get(`/user/getMessagesUserWisebuyer`);
        usermsgData.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

const getMessagesNotif = async () => {
    try {
        const response = await axios.get(`/user/getMessagesNoti`);
        msgData.value = response.data;
    } catch (error) {
        console.log(error);
    }
};
const getMessages = async () => {
    try {
        const response = await axios.get(`/user/getMessagesNoti`);
        msgData.value = response.data;
    } catch (error) {
        console.log(error);
    }
};


const selectUser = (users) => {
    const userId = users.user_id; // Get user_id from reactive data
    const currentUrl = window.location.origin; // Get current origin (e.g., http://example.com)
    const fullUrl = `${currentUrl}/dashboard/buyer/chatbox/${userId}`; // Construct the full URL
 router.push(`/dashboard/buyer/chatbox/${userId}`);
}


onMounted(() => {
    getUsersMessages();
    getChatusersList();
    getMessages();
    getMessagesNotif();
});

</script>
<style scoped>
.chat-user-item {
    cursor: pointer;
    /* Change cursor to pointer */
    transition: background-color 0.3s;
    /* Smooth background transition */
}

.chat-user-item:hover {
    background-color: #f8f9fa;
    /* Light gray on hover */
}

.chat-user-item.selected {
    background-color: #e0e0e0;
    /* Background for selected user */
    font-weight: bold;
    /* Bold text for selected user */
}
</style>
