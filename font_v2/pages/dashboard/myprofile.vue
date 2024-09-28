<template>
    <div class="dashboard show">
        <title>Profile</title>

       <h1>Hellow....</h1>


    </div>
</template>

<script setup>
 
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
