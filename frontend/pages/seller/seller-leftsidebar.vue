<template>
<div>
    <div class="user_sidebar">
        <div class="user_page_list">
            <ul>
                <li>
                    <NuxtLink :to="'/business/' + business_name_slug" exact>My Shop</NuxtLink>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-dashboard' }">
                    <Nuxt-link to="/seller/seller-dashboard" exact>Dashboard </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-products' }">
                    <Nuxt-link to="/seller/seller-products" exact>Products </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-products-post' }">
                    <Nuxt-link to="/seller/seller-products-post" exact>Add Products </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-orders' }">
                    <Nuxt-link to="/seller/seller-orders" exact>Orders </Nuxt-link>
                </li>

                <li :class="{ active: $route.path === '/seller/seller-wishlist' }">
                    <Nuxt-link to="/seller/seller-wishlist" exact>Wishlist </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-wallet' }">
                    <Nuxt-link to="/seller/seller-wallet" exact>Wallet</Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/seller/seller-profile' }">
                    <Nuxt-link to="/seller/seller-profile" exact>Profile information</Nuxt-link>
                </li>

                <li :class="{ active: $route.path === '/seller/seller-comission-history' }">
                    <Nuxt-link to="/seller/seller-comission-history" exact>Comission History</Nuxt-link>
                </li>

                <li :class="{ active: $route.path === '/seller/seller-payment-history' }">
                    <Nuxt-link to="/seller/seller-payment-history" exact>Payment History</Nuxt-link>
                </li>

                <li :class="{ active: $route.path === '/seller/seller-account-setting' }">
                    <Nuxt-link to="/seller/seller-account-setting" exact>Account Settings</Nuxt-link>
                </li>

                <!-- <li :class="{ active: $route.path === '/seller/seller-customer-returns' }">
                    <Nuxt-link to="/seller/seller-customer-returns" exact>Returns</Nuxt-link>
                </li> -->
                <!-- <li :class="{ active: $route.path === '/seller/seller-message' }">
                    <Nuxt-link to="/seller/seller-message" exact>Massages</Nuxt-link>
                </li> -->
                <li>
                    <a href="#" @click="logout">LogOut </a>
                </li>
            </ul>
        </div>

    </div>
</div>
</template>

<script>
export default {
    middleware: 'IsSeller',
    data() {
        return {
            loading: false,
            business_name_slug: '',
            notifmsg: '',
            orders: [],
            errors: {},
        }
    },
    mounted() {
        this.defaultLoading();
    },
    methods: {
        async defaultLoading() {

            this.loading = true;
            await this.$axios.post(`/auth/me`).then(response => {
                    // Seller Account Info
                    this.business_name_slug = response.data.business_name_slug;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },
        logout() {
            this.$auth.logout();
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>
