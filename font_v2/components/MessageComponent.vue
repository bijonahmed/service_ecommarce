<template>
    <center><span>Messages List</span></center>
    <div v-if="chatUsers.length">
        <ul class="list-group">
            <li v-for="user in chatUsers" :key="user.id" class="list-group-item chat-user-item">
                <img :src="user.profilePicture || '/about-17.png'" alt="" class="rounded-circle me-2"
                    style="width: 40px; height: 40px;" />
                <a :href="`/dashboard/chatbox/${user.user_id}`" class="text-decoration-none text-dark">
                    {{ user.user_name }}
                </a>
                <span class="badge bg-danger ms-1" v-if="user.unread_count > 0">{{ user.unread_count
                    }}</span> <!-- Unread count -->
            </li>
        </ul>
    </div>
</template>
<style></style>

<script setup>
import axios from 'axios';


import Swal from "sweetalert2";
const loading = ref(false);
const route = useRoute();
const errors = ref({});
const chatUsers = ref([]);
const msgData = ref([]);
const usermsgData = ref([]);


const getChatusersList = async () => {
    try {
        const response = await axios.get(`/chat/getChatUsersTo`);
        chatUsers.value = response.data;
    } catch (error) {
        // Handle error
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

const getUsersMessages = async () => {
    try {
        const response = await axios.get(`/user/getMessagesUserWise`);
        usermsgData.value = response.data;
    } catch (error) {
        console.log(error);
    }
};
onMounted(() => {
    getUsersMessages();
    getMessages();


});

</script>