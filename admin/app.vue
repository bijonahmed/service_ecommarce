<template>
  <div>
    <body class="hold-transition sidebar-mini layout-fixed" v-if="userStatusIsAdmin">
      <div class="wrapper" v-if="userRoleIsAdmin">
        <AdminHeader />
        <AdminSidebar />
      </div>
    </body>
    
  </div>

  <VitePwaManifest />
  <NuxtPage />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AdminHeader from "~~/layouts/AdminHeader.vue";
import AdminSidebar from "~~/layouts/AdminSidebar.vue";
import { useUserStore } from "~~/stores/user";

const userStore = useUserStore();
const router = useRouter();

// Check if the token exists in localStorage
const token = localStorage.getItem('token');
const isLoggedIn = computed(() => token !== null && userStore.isLoggedIn);
const userRoleIsAdmin = computed(() => userStore.role_id === 1);
const userStatusIsAdmin = computed(() => userStore.status === 1);

// Redirect to login if not logged in
onMounted(() => {

  if (!isLoggedIn.value) {
    router.push('/'); // Redirect to login page
  }
});
</script>

  