<template>
<div class="col-lg-3 col-md-2 col-2 desktop_view">
    <div class="menus">
        <div class="dropdown">
            <button class="btn  dropdown-toggle btn_account b_link " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user"></i> Account
            </button>
            <ul class="dropdown-menu">
                <span v-if="loggedIn">
                    <button class="drop_btn" type="button" @click="logout">Sign Out</button>
                </span>
                <span v-else>
                    <button class="drop_btn" type="button" @click="openLoginModal">Sign In</button>
                    <nuxt-link to="/login" class="drop_btn text-white" type="button" >Signup</nuxt-link>
                </span>

                <li v-if="loggedIn">
                    <Nuxt-link class="dropdown-item" :to="getProfileLink()">MY Account</Nuxt-link>
                </li>

                <li v-if="loggedIn && userRole === 3">
                    <Nuxt-link class="dropdown-item" to="/seller/seller-orders">Orders</Nuxt-link>
                </li>
                <li v-if="loggedIn && userRole === 2">
                    <Nuxt-link class="dropdown-item" to="/user/user-orders">Orders</Nuxt-link>
                </li>
                <li v-if="loggedIn && userRole === 2">
                    <Nuxt-link class="dropdown-item" to="/user/user-whichlist">Wishlist</Nuxt-link>
                </li>

                <li v-if="loggedIn && userRole === 3">
                    <Nuxt-link class="dropdown-item" to="/seller/seller-wishlist">Wishlist</Nuxt-link>
                </li>

            </ul>
        </div>
        <!-- help -->
        <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-circle-question"></i> Help
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Help Center </a></li>
                <li><a class="dropdown-item" href="#">Place An Order</a></li>
                <li><a class="dropdown-item" href="#">Payment Option </a></li>
                <li><a class="dropdown-item" href="#">Truck an order </a></li>
                <li><a class="dropdown-item" href="#">Cancel an order </a></li>
                <li><a class="dropdown-item" href="#">Return & Refund </a></li>
                <button class="drop_btn" type="button">live Chart </button>
            </ul>
        </div>
        <!-- cart  -->
        <Nuxt-link to="/cart" class="cart_count"><i class="fas fa-cart-shopping"></i><span style="top: -16px;">{{ itemCount }}</span>Cart</Nuxt-link>
    </div>
    <!-- Start  -->
    <div class="login_popup">
        <div class="popup_box_modal">
            <div>
                <div class="row" @click="closePopup">
                    <div class="col-6 ms-auto text-end"> <button class="btn_edit close_login"><i class="fa-solid fa-x"></i></button></div>
                </div>
            </div>
            <div class="popup_title">
                <h1>Login</h1>
                <p>Login and get access to all the features</p>
            </div>
            <div>
                <!-- Load Login Components -->
                <div>
                    <center><span class="show_error text-danger"></span></center>
                    <form @submit.prevent="customerLogin()" id="formrest" class="forms-sample d-block" enctype="multipart/form-data">
                        <div class="input_group">
                            <!-- <label for="">User Name </label> -->
                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            <input type="text" placeholder="Email" v-model="login.email">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="input_group mb-1">
                            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                            <input type="password" placeholder="Password" v-model="login.password">
                            <i class="toggle-password fa-solid fa-eye" ></i>
                        </div>
                        <div class="d-flex justify-content-end align-items-center mb-2">
                            <div class="d-flex align-items-center d-none">
                                <input type="checkbox" id="remeber"><label for="remeber">Remember me</label>
                            </div>
                            <nuxt-link to="/forget-password">Forget Password</nuxt-link>
                        </div>
                        <div>
                            <button class="btn_logins" type="submit">Login</button>
                        </div>
                        <div class="d-flex">
                            <p style="font-size: 12px !important;" class="text-center w-100 mt-2">Don't have Account? <nuxt-link to="/login" class="btn_signup " type="button">SignUp</nuxt-link>
                            </p>
                        </div>
                    </form>
                </div>
                <!-- END -->
            </div>
        </div>
    </div>
    <!-- END  -->
</div>
</template>

<script>
import axios from 'axios';
import LoginPopup from '~/components/LoginPopup.vue';
export default {
    components: {
        LoginPopup,
    },

    // middleware: "auth",
    data() {
        return {
            login: {
                email: '',
                password: '',
            },
            cart: [],
            itemCount: 0,
            limit: 12,
            id: '',
            categories: [],
            errors: [],

        };
    },
    async mounted() {
        this.$eventBus.$on('cartItemCountUpdated', this.handleCartItemCountUpdated);
        this.loadCart();
        await this.fetchData();
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

        userRole() {
            return this.$auth.loggedIn ? this.$auth.user.role_id : null;
        },

    },
    methods: {
        async customerLogin() {
            try {

                $(".show_error").html("");
                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                };
                let {
                    data
                } = await this.$axios.post('/auth/login', postData);
                await this.$auth.setUserToken(data.access_token);

                if (data.role_id === 3) {
                    return this.$router.push('/seller/seller-dashboard');
                } else if (data.role_id === 2) {
                    return this.$router.push('/user/user-profile');
                } else {
                    console.warn('Unsupported role_id:', data.role_id);
                }
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Has been successfully login...",
                    showConfirmButton: false,
                    timer: 1500
                });

                //this.loginForm.reset();
            } catch (err) {
                console.log(err)
                console.error('Login error:', err);
                if (err.response && err.response.status === 401) {
                    $(".show_error").html("Invalid credentials. Please try again.");
                } else {
                    $(".show_error").html('An error occurred. Please try again later.');
                }
            }
        },
        getProfileLink() {
            // Generate the profile link based on the user's role_id
            return this.userRole === 3 ? '/seller/seller-profile' : '/user/user-profile';
        },
        openLoginModal() {
            $(".login_popup").fadeIn();

        },

        closePopup() {
            $(".login_popup").fadeOut();
        },

        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
        },
        handleCartItemCountUpdated(itemCount) {
            // This method will be called when the event is emitted from ComponentA
            console.log('Received  DesktopViewOptions Com.:', itemCount);
            // Update the local data property with the received itemCount
            this.itemCount = itemCount;
        },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
        },
        getUser() {
            let user = this.$store.state.auth.user;
            console.log("Users data: " + user);

        },

        async logout() {
            await this.$auth.logout()           
            
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: "success",
                title: "Successfully Logout!",
            });
        }

    },
};
</script>

<style>
.input_group i{
    left: auto !important;
}
</style>