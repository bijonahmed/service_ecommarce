<template>
    <div class="user_sidebar">
        <div class="user_page_list">
            <ul>
                <li :class="{ active: $route.path === '/user/user-dashborad' }">
                    <Nuxt-link to="/user/user-dashborad"  exact-active-class="active">Dashboard</Nuxt-link>
                </li>
                <li @click="setChatBox()">
                    <Nuxt-link to="#"><a href="#">ChatBox</a></Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/user-profile' }">
                    <Nuxt-link to="/user/user-profile" exact-active-class="active">My account </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/user-orders' }">
                    <Nuxt-link to="/user/user-orders" exact-active-class="active">My Orders </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/user-whichlist' }">
                    <Nuxt-link to="/user/user-whichlist" exact-active-class="active">Wishlist </Nuxt-link>
                </li>
                <li  :class="{ active: $route.path === '/user/user-mlm' }">
                    <Nuxt-link to="/user/user-mlm" exact-active-class="active">MLM </Nuxt-link>
                </li>
                <!-- <li>
                    <a type="button" class="post_mdal_open">Post </a>
                </li> -->
                
                <li :class="{ active: $route.path === '/user/user-bloglist' }">
                    <nuxt-link to="/user/user-bloglist" exact-active-class="active">My Blog post</Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/mySalary' }">
                    <nuxt-link to="/user/mySalary" exact-active-class="active">My Salary</Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/myPackages' }">
                    <nuxt-link to="/user/myPackages" exact-active-class="active">My Packages</Nuxt-link>
                </li>
               
                <li :class="{ active: $route.path === '/user/user-withdrawal' }">
                    <nuxt-link to="/user/user-withdrawal" exact-active-class="active">Withdrawal</Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/account-statement' }">
                    <nuxt-link to="/user/account-statement" exact-active-class="active">Account Statement</Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/user-security' }">
                    <nuxt-link to="/user/user-security" exact-active-class="active">Security </Nuxt-link>
                </li>
                <li :class="{ active: $route.path === '/user/my-reviews' }">
                    <nuxt-link to="/user/my-reviews" exact-active-class="active">My Reviews</Nuxt-link>
                </li>
                <li class="">
                    <a type="button" @click="logout">Logout </a>
                </li>
            </ul>
            <div class="post_mdal_ mdal_">
                <div class="mdal_content">
                    <div class="mdal_head">
                        <div class="w-50"></div>
                        <button class="bt_close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="mdal_body">
                        <nuxt-link to="/user/user-blogPost"> <i class="fa-solid fa-blog"></i>Blog Post</nuxt-link>
                        <!-- <nuxt-link to="/user/user-requireProduct"><i class="fa-solid fa-clipboard-check"></i> Require Product</nuxt-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    middleware: 'auth',
    components: {

    },
    head: {
        
    },
    data() {
        return {
            product: [],
            cart: [],
            loading: false,
            products: [],
            errors: {},
        }
    },
    mounted() {
    },
    methods: {
        async setChatBox() {
      await this.$axios.post(`/auth/me`).then((response) => {
        // Seller Account Info
        let userId = response.data.id;
        let name = response.data.name;
        let email = response.data.email;
        return this.$router.push({
          path: '/chatbox/messages',
          query: {
            slug: name,
            username: email,
            seller_id: userId,
            name: email
          }
        });
      });
    },
        async logout() {
            localStorage.removeItem('jwtToken');
            await this.$auth.logout()
        }
    }
}
</script>

<style scoped></style>