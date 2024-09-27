<template>
    <div class="dashboard show">
        <title>Profile</title>

        <DashboardSidebar />
        <div class="dashboard_main_content">
            <div class="dashboard__content">
              <DashboardHeader/>
              <div class="dashboard__main">
                <form @submit.prevent="update()" id="formrest">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="profile_">
                                <h4>Personal details</h4>
                                <ul class="profile_data">
                                    <li>
                                        <div class="personal_details">
                                            <label for="">User name</label>
                                            <input type="text" placeholder="user123" disabled class="form-control" v-model="name">
                                            <span class="text-danger" v-if="errors.name">{{ errors.name[0]}}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="personal_details">
                                            <label for="">Real Name</label>
                                            <input type="text" placeholder="Real name" class="form-control" v-model="real_name">
                                            <span class="text-danger" v-if="errors.real_name">{{ errors.real_name[0]}}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="personal_details">
                                            <label for="">Email address</label>
                                            <input type="email" placeholder="abc@mail.com" disabled class="form-control" v-model="email">
                                            <span class="text-danger" v-if="errors.email">{{ errors.email[0]}}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="personal_details">
                                            <label for="">Phone</label>
                                            <input type="tel" placeholder="Phone number" class="form-control" v-model="phone_number">
                                            <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0]}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile_">
                                <h4>Social links</h4>
                                <ul class="profile_data">
                                    <li>
                                        <div class="personal_details">
                                            <label for="">Facebook</label>
                                            <input type="text" placeholder="Facebook" class="form-control" v-model="facebook">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="personal_details">
                                            <label for="">Twitter</label>
                                            <input type="text" placeholder="Twitter" class="form-control" v-model="twitter">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="personal_details">
                                            <label for="">WhatsApp</label>
                                            <input type="text" placeholder="WhatsApp" class="form-control" v-model="whtsapp">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="personal_details">
                                            <label for="">Telegram</label>
                                            <input type="text" placeholder="Telegram" class="form-control" v-model="telegram">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn-action style-1">Update</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>



    </div>
</template>

<script setup>
import DashboardSidebar from "~/layouts/DashboardSidebar.vue";
import DashboardHeader from "~/layouts/DashboardHeader.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import axios from "axios";
import swal from "sweetalert2";

import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
definePageMeta({
  middleware: "is-logged-out",
});


const name = ref("");
const real_name = ref("");
const email = ref("");
const phone_number = ref("");
const whtsapp = ref("");
const facebook = ref("");
const twitter = ref("");
const telegram = ref("");
const errors = ref({});
const id = ref("");


const fetchData = async () => {
  try {
    const response = await axios.get("/auth/showProfileData");
    console.log("Response data:", response.data.name); // Log the response data
    name.value = response.data.name;
    real_name.value = response.data.real_name;
    email.value = response.data.email;
    phone_number.value = response.data.phone_number;
    whtsapp.value = response.data.whtsapp;
    facebook.value = response.data.facebook;
    twitter.value = response.data.twitter;
    telegram.value = response.data.telegram;
    id.value = response.data.id;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const update = () => {
  const formData = new FormData();
  formData.append("real_name", real_name.value);
  formData.append("phone_number", phone_number.value);
  formData.append("whtsapp", whtsapp.value);
  formData.append("facebook", facebook.value);
  formData.append("twitter", twitter.value);
  formData.append("telegram", telegram.value);
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  axios.post("/auth/updateprofile", formData, { headers })
    .then((res) => {
      document.getElementById("formrest").reset();
      success_noti();
      router.push("/dashboard/mining");
    })
    .catch((error) => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error("An error occurred:", error);
      }
    });
};

onMounted(async () => {
  await fetchData();
});
const success_noti = () => {
  const Toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Your profile has been successfully update.",
  });
};
</script>
