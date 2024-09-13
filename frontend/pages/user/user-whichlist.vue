<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond/>
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0 col-12">
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="cart main_profile rounded-0 " >
                            <div class="side_title">
                                <h6>Wishlist</h6>
                                <!-- <button type="button" class="btn_cart" style="visibility: unset; width: fit-content;">Add
                                    all to
                                    cart</button> -->
                            </div>
                            <div class="card_porduct userWpro">
                                <div class="row">
                                    <!-- ========== Loop ==============  -->
                                    <!-- {{ prouducts }} -->
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6" v-for="item in products"
                                        :key="item.id">
                                        <div class="product_grid text-start">
                                    <div class="loading-indicator" v-if="loading" style="text-align: center;position: absolute; z-index: 2; left: 0; top: 0; background: #ffffff5c; height: 100%; width: 100%; object-fit: contain;">
                                        <div class="loader-container">
                                            <!-- <center class="loader-text">Loading...</center> -->
                                            <img src="/loader/loader.gif" alt="Loader" />
                                        </div>
                                    </div>
                                    <nuxt-link :to="`/product-details/${item.slug}`">
                                        <img :src="item.thumnail_img" class="img-fluid" loading="lazy">

                                        <span v-if="item.free_shopping == 1">Free Delivery</span>
                                        <!-- <strong>Official Store </strong> -->
                                        <h1>{{ item.name }}</h1>
                                        <div v-if="item.discount_status == 1" class="d-flex aligh-items-center">
                                            <p>${{ item.last_price.toFixed(2) }}</p>
                                            <p class="ms-1" v-if="item.discount !== 0"><strike>${{ item.price.toFixed(2)
                                                    }}</strike> <span>{{ item.discount }}%</span> </p>
                                        </div>
                                        <div v-else-if="item.discount_status == 2" class="d-flex aligh-items-center">
                                            <p>${{ item.last_price.toFixed(2) }}</p>

                                            <p class="ms-1" v-if="item.discount !== 0"><strike>${{ item.price.toFixed(2)
                                                    }}</strike>
                                                <span>${{ item.discount.toFixed(2) }}</span>
                                            </p>
                                        </div>
                                        <div v-else>
                                            <p>${{ item.last_price.toFixed(2) }}</p>
                                        </div>
                                    </Nuxt-link>

                                    <div class="d-flex align-items-center">
                                        <div class="rating">
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star "></i>
                                        </div>
                                        <h6>(200)</h6>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <button type="button" class="btn_cart me-1" @click="addToCart(item.id)">Add to
                                        cart</button>
                                        <button class="btn_cart ms-1" @click="remove(item.wishid)">Remove</button>
                                    </div>
                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                </div>
                                    </div>
                                    <!-- ================= Loop ===================  -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- END Main Section here -->
        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import $ from "jquery";


import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import userSidebar from '~/components/userSidebar.vue'
import NavbarSecond from "../../components/NavbarSecond.vue";

export default {
    middleware: 'IsUser',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'My Wishlist',
    },
    data() {
        return {
            product: [],
            //cart
            loading: false,
            cart: [],
            itemCount: 0,
            subtotal: 0,
            updatedQuantity: 1,
            //end cart
            loading: false,
            products: [],
            errors: {},
        }
    },
    mounted() {
        this.setupEventHandlers();
        this.loadingWishList();
        // this.saveCart();
        // this.addToCart();
    },
    methods: {

        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".search_bar").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
            })
        },
        //for cart
        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
        },
        saveCart() {
            this.loading = true;
            localStorage.setItem('cart', JSON.stringify(this.cart));
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        cartItemCount() {
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        updateQuantity(productId, newQuantity) {
            const index = this.cart.findIndex((item) => item.product.id === productId);

            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
            }
        },
         addToCart(productId) {
             const productToAdd = this.products.find((product) => product.id === productId);

             if (!productToAdd) {
                 console.error('Product not found');
                 return;
             }

             const existingItem = this.cart.find((item) => item.product.id === productId);

             if (existingItem) {
                 // If the product already exists in the cart, increase its quantity
                 existingItem.quantity += 1;
             } else {
                 // If the product doesn't exist in the cart, add it
                 this.cart.push({
                     product: productToAdd,
                     quantity: 1, // Assuming you want to add one unit by default
                 });
             }

             // Save the updated cart to local storage
             this.saveCart();
             // Update the cart item count
             this.cartItemCount();
         },

        //end cart
        async remove(productid) {
            this.loading = true;
            await this.$axios.get(`/order/removeWishList/${productid}`).then(response => {
                this.loadingWishList();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "WishList item deleted successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        async loadingWishList() {
            this.loading = true;
            await this.$axios.get(`/order/allWishList`).then(response => {
                this.products = response.data;
                console.log(response.data);

            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        logout() {
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
