<template>
    <div class="dashboard show">
        <title>Payment</title>

        <DashboardSidebar />
        <div class="dashboard_main_content">
            <div class="dashboard__content">
                <DashboardHeader />
                <center>
      <div class="loading-indicator" v-if="loading" style="text-align: center">
        <Loader />
      </div>
    </center>
                <div class="dashboard__main">
                    <br/>
                   <h2><center>Has been successfully buy.</center></h2>
                </div>
            </div>
        </div>

 

    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DashboardSidebar from "~/layouts/DashboardSidebar.vue";
import DashboardHeader from "~/layouts/DashboardHeader.vue";
import { useRouter } from 'vue-router';

// const loading = ref(false);
// const router = useRouter();

// onMounted(async () => {
//     loading.value = true;
//     setInterval(() => {
//         loading.value = false;
//         router.push('/dashboard/mining');
//     }, 2000);

// });
</script>