<template>
    <title>All Messages</title>

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
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                                        <a href="#">All Notification</a>
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

                <!-- Start Profile -->
                <div class="container">
                    <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">
                        <div class="packages_table table-responsive">                           


                        </div>
                    </div>
                </div>


                <!-- start -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                            aria-selected="true">Messages</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                            aria-selected="false">Notifications</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                        tabindex="0">
                        <div class="table-responsive tb_pc">
                            <table class="table-style1 table at-savesearch">
                                <thead class="t-head">
                                    <tr>
                                        <th scope="col">From</th>
                                        <th scope="col">Messages</th>
                                        <th scope="col">Date & Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody class="t-body">

                                    <!-- v-for loop to iterate over orderData -->
                                    <tr v-for="(order, index) in sellerMsgData" :key="index">
                                        <td class="vam">
                                            <a class="text-center d-block" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <img :src="'/blank_user.jpg'" style="height: 50px;width: 50px;" alt=""
                                                    class="img-fluid rounded-circle bordered">
                                            </a>
                                        </td>
                                        <td class="vam "> <span class="fw-bold">User name</span>, <span
                                                class="fw-bold">Gig name</span> {{ order.messages
                                            }}.......
                                        </td>
                                        <td class="vam"></td>
                                        <td class="vam">{{ formatDate(order.created_at) }}</td>
                                        <td class="vam"><nuxt-link class="btn text-white btn-primary"
                                                to="/dashboard/chatbox">Reply</nuxt-link></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <table class="w-100 mb_message">
                            <tbody class="w-100 d-block">
                                <tr class="mobile_table">
                                    <td class="vam">
                                        <a class="text-center d-block" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="mb_design">
                                                <div class="d-flex align-items-center">
                                                    <div
                                                        style="width: 50px;height: 50px;display: flex;align-items: center;">
                                                        <img :src="'/blank_user.jpg'" alt=""
                                                            class="img-fluid rounded-circle bordered">
                                                    </div>
                                                    <div>
                                                        <p class="mb-0"><strong>Gig Name</strong> Lorem ipsum dolor sit
                                                            amet
                                                            consectetur
                                                            adipisicing elit. Nihil labore esse, dolorum in atque
                                                            accusantium laboriosam. Voluptas, reprehenderit repellendus.
                                                            Laudantium cum at tempora quis asperiores quisquam quae, in
                                                            sed
                                                            neque.</p>
                                                        <p class="mt-0"><span>11 Jan 2024, 12:00 PM</span></p>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="" href="#" role="button" id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-trash-can"></i> Delete this message</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-eye"></i> Read this message</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="mobile_table">
                                    <td class="vam">
                                        <a class="text-center d-block" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="mb_design">
                                                <div class="d-flex align-items-center">
                                                    <div
                                                        style="width: 50px;height: 50px;display: flex;align-items: center;">
                                                        <img :src="'/blank_user.jpg'" alt=""
                                                            class="img-fluid rounded-circle bordered">
                                                    </div>
                                                    <div>
                                                        <p class="mb-0"><strong>Gig Name</strong> Lorem ipsum dolor sit
                                                            amet
                                                            consectetur
                                                            adipisicing elit. Nihil labore esse, dolorum in atque
                                                            accusantium laboriosam. Voluptas, reprehenderit repellendus.
                                                            Laudantium cum at tempora quis asperiores quisquam quae, in
                                                            sed
                                                            neque.</p>
                                                        <p class="mt-0"><span>11 Jan 2024, 12:00 PM</span></p>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="" href="#" role="button" id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>

                                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-trash-can"></i> Delete this message</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-eye"></i> Read this message</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="mobile_table">
                                    <td class="vam">
                                        <a class="text-center d-block" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="mb_design">
                                                <div class="d-flex align-items-center">
                                                    <div
                                                        style="width: 50px;height: 50px;display: flex;align-items: center;">
                                                        <img :src="'/blank_user.jpg'" alt=""
                                                            class="img-fluid rounded-circle bordered">
                                                    </div>
                                                    <div>
                                                        <p class="mb-0"><strong>Gig Name</strong> Lorem ipsum dolor sit
                                                            amet
                                                            consectetur
                                                            adipisicing elit. Nihil labore esse, dolorum in atque
                                                            accusantium laboriosam. Voluptas, reprehenderit repellendus.
                                                            Laudantium cum at tempora quis asperiores quisquam quae, in
                                                            sed
                                                            neque.</p>
                                                        <p class="mt-0"><span>11 Jan 2024, 12:00 PM</span></p>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="" href="#" role="button" id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-trash-can"></i> Delete this message</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-eye"></i> Read this message</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary text-white">See Previous Messages</button>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                        tabindex="0">
                        <!-- start -->
                        <div class="table-responsive tb_pc">
                            <!-- start -->
                            <table class="table-style1 table at-savesearch">
                                <thead class="t-head">
                                    <tr>
                                        <!-- <th scope="col">Title</th> -->
                                        <th scope="col">Notification</th>
                                        <th scope="col">Date & Time</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody class="t-body">
                                    <tr v-for="(order, index) in sellData" :key="index">
                                        <!-- <td class="vam">{{ order.name }}</td> -->
                                        <td class="vam">{{ order.messages }}</td>
                                        <td class="vam">{{ formatDate(order.created_at) }}</td>
                                    </tr>
                                    <tr>
                                        <td class="vam" style="max-width: 300px;">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipisicing elit. In reiciendis ipsa delectus minus deserunt molestias
                                            consequatur, ad quod dolorum recusandae?.......</td>
                                        <td class="vam">28 Jun 2024, 12:00 PM</td>
                                        <td>
                                            <div class="btn-group">
                                                <button class="btn text-danger"><i
                                                        class="fa-solid fa-trash-can"></i></button>
                                                <button class="btn text-black" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"><i
                                                        class="fa-regular fa-eye"></i></button>

                                                <!-- Modal -->
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered postion-relative">
                                                        <button class="btn text-white position-absolute" style="top: 20px; cursor: pointer; right: 0; font-size: 13px; background: #000; z-index: 9; border-radius: 50%; height: 24px; width: 24px; padding: 0; display: flex; align-content: center; justify-content: center;" data-bs-dismiss="modal">x</button>
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                <h6>Notification</h6>
                                                                <h6 style="font-size: 14px;">28 Jun 2024, 12:00 PM</h6>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                                                    elit. Veniam ex ea ipsam veritatis velit vitae
                                                                    repellat minus vero! Minima dignissimos quos aut
                                                                    provident, voluptates debitis autem ab quibusdam
                                                                    numquam esse obcaecati laborum, aspernatur sapiente
                                                                    modi aliquid consequuntur nulla ratione accusamus,
                                                                    nam repellendus soluta unde aperiam ea deserunt. Ex,
                                                                    magnam iure!</p>
                                                            </div>
                                                            <!-- // -->
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <table class="w-100 mb_message">
                            <tbody class="w-100 d-block">
                                <tr class="mobile_table">
                                    <td class="vam">
                                        <a class="text-center d-block" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="mb_design">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <p class="mb-0"><strong>Gig Name</strong> Lorem ipsum dolor sit
                                                            amet
                                                            consectetur
                                                            adipisicing elit. Nihil labore esse, dolorum in atque
                                                            accusantium laboriosam. Voluptas, reprehenderit repellendus.
                                                            Laudantium cum at tempora quis asperiores quisquam quae, in
                                                            sed
                                                            neque.</p>
                                                        <p class="mt-0"><span>11 Jan 2024, 12:00 PM</span></p>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="" href="#" role="button" id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>

                                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-trash-can"></i> Delete this notification</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-eye"></i> Read this notification</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="mobile_table">
                                    <td class="vam">
                                        <a class="text-center d-block" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="mb_design">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <p class="mb-0"><strong>Gig Name</strong> Lorem ipsum dolor sit
                                                            amet
                                                            consectetur
                                                            adipisicing elit. Nihil labore esse, dolorum in atque
                                                            accusantium laboriosam. Voluptas, reprehenderit repellendus.
                                                            Laudantium cum at tempora quis asperiores quisquam quae, in
                                                            sed
                                                            neque.</p>
                                                        <p class="mt-0"><span>11 Jan 2024, 12:00 PM</span></p>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="" href="#" role="button" id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>

                                                    
                                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-trash-can"></i> Delete this notification</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-eye"></i> Read this notification</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="mobile_table">
                                    <td class="vam">
                                        <a class="text-center d-block" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <div class="mb_design">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <p class="mb-0"><strong>Gig Name</strong> Lorem ipsum dolor sit
                                                            amet
                                                            consectetur
                                                            adipisicing elit. Nihil labore esse, dolorum in atque
                                                            accusantium laboriosam. Voluptas, reprehenderit repellendus.
                                                            Laudantium cum at tempora quis asperiores quisquam quae, in
                                                            sed
                                                            neque.</p>
                                                        <p class="mt-0"><span>11 Jan 2024, 12:00 PM</span></p>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="" href="#" role="button" id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    
                                                    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i class="fa-regular fa-trash-can"></i> Delete this notification</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa-regular fa-eye"></i> Read this notification</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary text-white">See Previous Notifications</button>
                        </div>
                        <!-- END -->
                    </div>
                </div>
                <!-- END -->













                <!-- END Profile -->
                <div />
            </div>
        </div>

        <!-- Modal Template -->




        <Footer />
    </body>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const router = useRouter();
const sellerMsgData = ref([]);

const loading = ref(false);
const sellData = ref("");

definePageMeta({
    middleware: "is-logged-out",
});


const orderData = ref('');
const getSellerNotificationData = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getSellerAllMessages`);
        sellerMsgData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};


const allSellersreadporbo = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getSellerAllMessagesSignle`);
        sellerMsgData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};



const getSellerAllMessagesSignle = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getSellerAllMessagesSignle`);
        sellData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

// Function to format the date
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

onMounted(() => {
    getSellerAllMessagesSignle();
    allSellersreadporbo();
    getSellerNotificationData();
    //getCatList();

});

</script>

<style scoped>
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