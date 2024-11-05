<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" v-if="verfificationSts == 0 & isLoggedIn">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <!-- <center>
       ==={{ isActive }}===
      </center> -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li v-for="(menuItem, index) in menuItems" :key="index"
            :class="{ 'nav-item': true, 'menu-open': menuItem.children }">
            <router-link :to="menuItem.route ? menuItem.route : '#'" class="nav-link">
              <i :class="'nav-icon fas ' + menuItem.icon"></i>
              <p>
                {{ menuItem.label }}
                <i v-if="menuItem.children" class="right fas fa-angle-left"></i>
              </p>
            </router-link>

            <ul v-if="menuItem.children" class="nav nav-treeview">
              <li v-for="(childItem, childIndex) in menuItem.children" :key="childIndex" class="nav-item">
                <router-link :to="childItem.route" class="nav-link">
                  <p>{{ childItem.label }}</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script setup>
import { useUserStore } from '~~/stores/user'
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore)
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const isActive = ref(null);
const verfificationSts = ref(null);




const fetchAdminInfo = async () => {
  const token = localStorage.getItem('token'); // Get the token from local storage

  try {
    const response = await axios.post('/auth/adminMe', {
      headers: {
        'Authorization': `Bearer ${token}` // Set the Authorization header
      }
    });
    verfificationSts.value = response.data.verification_code;
  } catch (error) {
    console.error("Error fetching admin info:", error);
  }
};



onMounted(async () => {
  fetchAdminInfo();

});
const menuItems = ref([
  {
    label: "Dashboard",
    icon: "fa-home",
    badge: "New",
    open: false,
    route: "/admin/dashboard",
    children: null,
  },
  {
    label: "Profile",
    icon: "fa-th",
    badge: "New",
    open: false,
    route: "/user/my-profile",
    children: null,
  },

  {
    label: 'Order Management',
    icon: 'fa-folder',
    badge: '',
    open: false,
    route: null,
    children: [
      { label: 'Order List', icon: 'fa-circle', route: '/orders/order-list' },

    ]
  },
  {
    label: "User Management",
    icon: "nav-icon fas fa-users",
    badge: "6",
    open: false,
    route: null,
    children: [

      { label: "Super Admin list", icon: "fa-circle", route: "/usermanagement/superadmin-list", },
      { label: "User list", icon: "fa-circle", route: "/usermanagement/userlist", },
      { label: 'MLM ', icon: 'fa-circle', route: '/usermanagement/mlmreport' },


    ],
  },


  {
    label: 'Post Management',
    icon: 'fa-folder',
    badge: '',
    open: false,
    route: null,
    children: [
      { label: 'GIG List', icon: 'fa-circle', route: '/gig/list' },
      { label: 'Notificaiton List', icon: 'fa-circle', route: '/post/notificaiton/list' },
      { label: 'Add Post', icon: 'fa-circle', route: '/post/add' },
      { label: 'Post List', icon: 'fa-circle', route: '/post/list' },

    ]
  },


  //new menu

  {
    label: "System settings",
    icon: "nav-icon fas fa-cog",
    badge: "6",
    open: false,
    route: null,
    children: [
      { label: "Bank", icon: "fa-circle", route: "/setting/bank/list" },
      { label: "Branch", icon: "fa-circle", route: "/setting/branch/list" },
      { label: 'Category List', icon: 'fa-circle', route: '/category/list' },
      //  { label: 'Reward Center List', icon: 'fa-circle', route: '/setting/reward/rewardcenter-list' },
      //  { label: "Boost Mining Setup", icon: "fa-circle", route: "/setting/boost/boostMiningSetupList" },
      //  { label: "Boost Bot Setup", icon: "fa-circle", route: "/setting/boost/boostBotList" },
      //   { label: "Global Wallet Address", icon: "fa-circle", route: "/setting/wallet/globalwalletAddressList" },
      //   { label: "Real Time Wallet Tracking", icon: "fa-circle", route: "/setting/wallet/realtimewalletTracking" },
      { label: "Notification", icon: "fa-circle", route: "/setting/notificationlist" },
      { label: "Pre-Setting", icon: "fa-circle", route: "/setting/presetting" },
      //  { label: "Mining Category", icon: "fa-circle", route: "/setting/mining-category-list", },
      //  { label: "Mining Duration", icon: "fa-circle", route: "/setting/duration/mining-duration-list", },
      //  { label: "Community List", icon: "fa-circle", route: "/setting/community/list", },

    ],
  },


  {
    label: "Wallet Management",
    icon: "nav-icon fas fa-cog",
    badge: "6",
    open: false,
    route: null,
    children: [
      { label: "Deposit Request ", icon: "fa-circle", route: "/walletmanagement/deposit-management", },
      { label: "Withdrawal Request", icon: "fa-circle", route: "/walletmanagement/withdrawal-management", },
      // { label: "Reward center Request", icon: "fa-circle", route: "/walletmanagement/reward-center-management", },
      // { label: "All User with Address", icon: "fa-circle", route: "/walletmanagement/withdrawal-address", },
      // { label: "Manual Adjustment report", icon: "fa-circle", route: "/walletmanagement/manual-adjustment-report", },
      //{ label: "Create Manual adjustment", icon: "fa-circle", route: "/walletmanagement/manual-adjustment", },

    ],
  },
]);

const toggleMenu = (item) => {
  item.open = !item.open;
};
</script>
<style>
body:not(.layout-fixed) .main-sidebar {
  min-height: 100vh;
  position: fixed;
}

.disabled {
  pointer-events: none;
  color: #ccc;
}
</style>