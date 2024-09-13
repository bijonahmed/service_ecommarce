<template>
    <!-- <div> -->
    <section class="search_bar ">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-3 col-md-4 col-8">
                    <div class="logo nav_tab">
                        <!-- mobile view sidebar  -->
                        <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i
                                class="fa-solid fa-bars-staggered"></i></button>

                        <!-- sidebar offcanvas  -->
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ecommerce</h5>
                            </div>
                            <div class="offcanvas-body">
                                <!-- offf canvas start here  -->
                                <div class="side_nav">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="sidenav_title">
                                                <nuxt-link to="/user/user-profile">
                                                    <h6>My Ecommerce Account</h6>

                                                    <i class="fa-solid fa-chevron-right"></i>
                                                </nuxt-link>
                                            </div>
                                            <ul>
                                                <li v-if="loggedIn">
                                                    <nuxt-link to="/user/user-orders"><i
                                                            class="fa-solid fa-box"></i>Order</nuxt-link>
                                                </li>
                                                <li v-if="loggedIn">
                                                    <nuxt-link to="/user/my-reviews"><i
                                                            class="fa-regular fa-comment-dots"></i>Pending
                                                        Reviews</nuxt-link>
                                                </li>
                                                <li v-if="loggedIn">
                                                    <nuxt-link to="#"><i class="fa-solid fa-ticket-simple"></i>Voucher
                                                    </nuxt-link>
                                                </li>
                                                <li v-if="loggedIn">
                                                    <nuxt-link to="/user/user-whichlist"><i
                                                            class="fa-solid fa-heart"></i>Save items </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="row" v-for="category in categories" :key="category.id">
                                        <div class="col-12">
                                            <div class="sidenav_title">
                                                <Nuxt-link to="/category/all-categorys">
                                                    <h6>{{ category.name }}</h6>
                                                    <p>See all</p>
                                                </Nuxt-link>
                                            </div>
                                            <ul>
                                                <li v-for="childCategory in category.children" :key="childCategory.id">
                                                    <a href="#" @click="redirectCategory(category.slug)"> <i
                                                            class="fa-solid fa-list" style="font-size: 10px;"></i>{{
                                                                childCategory.name }}</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <ul>
                                                <li>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Terms and condition</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- mini tab view navbar here  -->
                        <div class="nav_bar tab_show" style="@media(max-width: 768px){display: none;}">
                            <button type="button" class="btn_menu"><i class="fa-solid fa-bars-staggered"></i></button>
                            <div class="nav_menu nav_op ">
                                <nav>
                                    <ul v-for="(category, index) in categories" :key="category.id">
                                        <li :key="category.id" v-if="index < limit">
                                            <a href="#" class="d-flex justify-content-between align-items-center"
                                                @click="redirectCategory(category.slug)">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-solid fa-list"></i>
                                                    {{ category.name }}
                                                </div> <i class="fa-solid fa-angle-right"></i>
                                            </a>
                                            <div class="sub_menu">
                                                <div class="row"
                                                    v-if="category.children && category.children.length > 0">
                                                    <div class="col-4" v-for="childCategory in category.children"
                                                        :key="childCategory.id">
                                                        <h6><a href="#" @click="redirectCategory(childCategory.slug)">
                                                                {{
                                                                    childCategory.name }}</a></h6>

                                                        <ul
                                                            v-if="childCategory.children && childCategory.children.length > 0">
                                                            <li v-for="inSubCategory in childCategory.children"
                                                                :key="inSubCategory.id"><a href="#"
                                                                    @click="redirectCategory(inSubCategory.slug)">{{
                                                                        inSubCategory.name }}</a></li>

                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Nuxt-link to="/category/all-categorys"
                                                class="d-flex justify-content-between">
                                                <div><img src="/images/cat_svg/more-100.png" alt="">Other Categories
                                                </div>
                                                <div><i class="fa-solid fa-angle-right"></i></div>
                                            </Nuxt-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- nav end  -->

                        <Nuxt-link to="/"><img src="/images/logo.png" alt="" class="img-fluid navLogo"
                                width="200px"></Nuxt-link>
                    </div>
                </div>

                <div class="col-6 desktop_view mini_tab_hide">
                    <form action="" class="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="autocomplete-input" class="form-control ui-menu-item"
                            placeholder="Search products...">
                        <button type="button">Search</button>
                    </form>
                </div>
                <!-- desktop_view options  -->
                <div class="col-lg-3 col-md-2 col-2 desktop_view">
                    <div class="menus">
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle btn_account b_link " type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user"></i> Account
                            </button>
                            <ul class="dropdown-menu">
                                <span v-if="loggedIn">
                                    <button class="drop_btn" type="button" @click="logout">Sign Out</button>
                                </span>
                                <span v-else>
                                    <button class="drop_btn" type="button" @click="openLoginModal">Sign In</button>
                                    <nuxt-link to="/login" class="drop_btn text-white" type="button">Signup</nuxt-link>
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
                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
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
                        <Nuxt-link to="/cart" class="cart_count"><i class="fas fa-cart-shopping"></i><span
                                style="top: -16px;">{{ itemCount }}</span>Cart</Nuxt-link>
                    </div>
                </div>
                <!-- mobile view options  -->
                <div class="col-4 ms-auto mobile_view">
                    <div class="mobile_nav_option">
                        <a class="search_form"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
                <!-- search modal  -->
                <div class="search_form_modal  ">
                    <div class="search_box_main">
                        <!-- <form action=""> -->
                        <div class="bar_search ">
                            <div>
                                <a class="close_search_modal"><i class="fa-solid fa-arrow-left"></i></a>
                            </div>
                            <div>
                                <input type="text" id="autocomplete-input_mobile" name=""
                                    placeholder="Search Product, Categories">
                            </div>
                            <div>
                                <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <!-- </form> -->
                        <ul>
                            <li v-for="(item, key) in searchloop" :key="key">
                                <nuxt-link v-if="item.type == 'category'"
                                    :to="`/category/category-grid?slug=${item.catslug}`">{{ item.label }}</nuxt-link>
                                <nuxt-link v-if="item.type == 'product'" :to="`/product-details/${item.slug}`">{{
                                    item.label }}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- </div> -->
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            limit: 12,
            cart: [],
            id: '',
            categories: [],
            itemCount: 0,
            //loggedIn: false,
            searchloop: [],
        };
    },
    async mounted() {
        if (process.client) {
            $(document).ready(() => {
                var self = this;
                $('#autocomplete-input').autocomplete({
                    source: (request, response) => {
                        const searchTerm = request.term;
                        if (searchTerm.length >= 1) {
                            // Make Axios request to fetch products dynamically
                            this.$axios.get(`/unauthenticate/products/search?term=${searchTerm}`)
                                .then(res => {
                                    //console.log("search console return " + res.data);
                                    response(res.data);
                                })
                                .catch(error => {
                                    console.error('Error fetching products:', error);
                                    response([]); // Return empty array in case of error
                                });
                        } else {
                            response([]); // Return empty array if search term is too short
                        }
                    },
                    minLength: 2, // Minimum characters before autocomplete starts

                    select: function (event, ui) {
                        if (ui.item.type == 'category') {
                            self.$router.push({
                                path: '/category/category-grid',
                                query: {
                                    slug: ui.item.catslug
                                }
                            });
                        }

                        if (ui.item.type == 'product') {
                            self.$router.push({
                                path: '/product-details/' + ui.item.slug,

                            });
                        }

                        var label = ui.item.label;
                        var value = ui.item.value;
                        // Store the selected value in session storage
                        sessionStorage.setItem('valueSelectedForAutocomplete', value);
                    }
                });

                $('#autocomplete-input_mobile').autocomplete({
                    source: (request, response) => {
                        const searchTerm = request.term;
                        if (searchTerm.length >= 1) {
                            // Make Axios request to fetch products dynamically
                            this.$axios.get(`/unauthenticate/products/search?term=${searchTerm}`)
                                .then(res => {
                                    //console.log("search console return " + res.data);
                                    // response(res.data);
                                    this.searchloop = res.data;
                                })
                                .catch(error => {
                                    console.error('Error fetching products:', error);
                                    response([]); // Return empty array in case of error
                                });
                        } else {
                            response([]); // Return empty array if search term is too short
                        }
                    },
                    minLength: 2, // Minimum characters before autocomplete starts

                    select: function (event, ui) {
                        if (ui.item.type == 'category') {
                            self.$router.push({
                                path: '/category/category-grid',
                                query: {
                                    slug: ui.item.catslug
                                }
                            });
                        }

                        if (ui.item.type == 'product') {
                            self.$router.push({
                                path: '/product-details/' + ui.item.slug,

                            });
                        }

                        var label = ui.item.label;
                        var value = ui.item.value;
                        // Store the selected value in session storage
                        sessionStorage.setItem('valueSelectedForAutocomplete', value);
                    }
                });
            });
        }
        // this.fetchUserData();
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
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },

        async fetchUserData() {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                this.$router.push('/');
                console.error('JWT token not found in local storage');
                return;
            }
            try {
                this.$axios.setToken(token, 'Bearer');
                const response = await this.$axios.post('/auth/me');
                //  console.log('User data:', response.data);
                this.id = response.data.id;
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                this.$axios.setToken(false);
            }
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
        redirectCategory(slug) {
            this.$router.push({
                path: '/category/category-list',
                query: {
                    slug: slug
                }
            })
        },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
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
<style scoped>
.ui-menu-item>a.ui-corner-all {
    display: block;
    padding: 3px 15px;
    clear: both;
    font-weight: normal;
    line-height: 18px;
    color: #555555;
    white-space: nowrap;
    text-decoration: none;
}

.ui-state-hover,
.ui-state-active {
    color: #ffffff;
    text-decoration: none;
    background-color: #0088cc;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    background-image: none;
}
</style>