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
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br>

                <div class="container">
                    <center><span>Buyer List</span></center>
                    <div v-if="chatUsers.length">
                        <ul class="list-group">
                            <li v-for="user in chatUsers" :key="user.id" @click="selectUser(user)"
                                class="list-group-item chat-user-item">
                                <img :src="user.profilePicture || '/about-17.png'" alt="" class="rounded-circle me-2"
                                    style="width: 40px; height: 40px;" />
                                <a :href="`/dashboard/buyer/chatbox/${user.user_id}`"
                                    class="text-decoration-none text-dark">
                                    {{ user.user_name }}
                                </a>
                                <span class="badge bg-danger ms-1" v-if="user.unread_count > 0">{{ user.unread_count
                                    }}</span> <!-- Unread count -->
                            </li>
                        </ul>
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
    try {
        const response = await axios.get(`/chat/getChatUsers`);
        chatUsers.value = response.data;
    } catch (error) {
        // Handle error
    }
};



onMounted(() => {
    getChatusersList();
});

</script>
<style></style>