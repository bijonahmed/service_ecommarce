<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->
        <section class="main_content " style="min-height: 50vh;">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-12">
                        <div class="cart" v-if="itemCount !== 0">

                            <div class="side_title" v-if="itemCount !== 0">
                                <h5>Cart({{ itemCount }})</h5>
                            </div>
                            <div class="loading-indicator text-center" v-if="loading">
                                <div class="lodcontainer">
                                    <center class="loader-text">Loading...</center>
                                    <img src="/loader/loader.gif" alt="Loader" />
                                </div>
                            </div>
                            <div class="card_porduct">
                                <!-- {{ cart }} -->
                                <ul>
                                    <li v-for="item in cart" :key="item.product.id">
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="img_title">
                                                    <img :src="item.product.thumnail_img" class="img-fluid" alt="">
                                                    <div>
                                                        <h1 class="mb-0">
                                                            <Nuxt-Link
                                                                :to="`/product-details/${item.product.pro_slug}`">{{
                            item.product.product_name }}</Nuxt-Link>
                                                        </h1>
                                                        <p class="m-0" v-if="item.product.seller_name">Seller:
                                                            <nuxt-link style="color: #900c3f;"
                                                                :to="`/business/${item.product.seller_slug}`">{{
                            item.product.seller_name }}</nuxt-link>
                                                        </p>
                                                        <p class="m-0" v-else>Seller: Ecommerce</p>
                                                        <p class="m-0" v-if="item.product.warranty_id">Warranty:
                                                            {{ item.product.warranty_name }}</p>
                                                        <span class="mt-0 text-success d-block"
                                                            v-if="item.product.stock_qty >= 1">In stock </span>
                                                        <span class="mt-0 text-danger  d-block" v-else>Out of stock
                                                        </span>
                                                        <p class="mt-0 "
                                                            v-if="item.product.flat_rate_price !== 0 && item.product.free_shopping == 0">
                                                            Delivery Charge ${{ item.product.flat_rate_price }}</p>
                                                        <p class="mt-0 freeBadge" style=""
                                                            v-else-if="item.product.freeshopping == 1">Free Shipping</p>
                                                        <p class="mt-0 freeBadge" style="" v-else>Free Shipping</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="cart_price">
                                                    <small>(Qty: {{ item.quantity }})</small> x
                                                    <strong>${{ parseFloat(item.product.last_price).toFixed(2)
                                                        }}</strong>
                                                    <strong class="d-block" style="color:#adadad;">Was:<del>${{
                            parseFloat(item.product.price).toFixed(2) }}</del></strong>
                                                    <span style="font-size: 14px;"
                                                        v-if="item.product.warranty_id">Warranty: ${{
                            item.product.warrantyamt.toFixed(2) }}</span>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <div class=" p- me-1">
                                                <Button class="btn_cart" style="visibility: unset;"
                                                    @click="removeFromCart(item.product)"><i
                                                        class="fa-solid fa-trash-can"></i>Remove</Button>
                                            </div>
                                            <div>
                                                <div class="number">
                                                    <input v-model="item.quantity" :max="item.product.stock_qty"
                                                        @change="checkqty(item.product.stock_qty, item.quantity)"
                                                        class="quantity" type="number" @keypress="allowOnlyNumbers" />
                                                </div>
                                                <Button class="btn_cart mt-2"
                                                    :disabled="item.quantity >= item.product.stock_qty"
                                                    style="visibility: unset; background-color: #0C356A;"
                                                    @click="updateQuantity(item.product.id, item.quantity)">Update</Button>

                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div class="d-flex justify-content-between align-item-center mt-3">
                                    <nuxt-link class="btn btn_edit" style="width: fit-content;" to="/">Continue
                                        Shopping</nuxt-link>

                                    <button class="btn_cart " style="width: fit-content;" v-if="itemCount !== 0"
                                        @click="clearCart()">Clear Cart</button>
                                </div>

                            </div>

                        </div>
                        <div class="cart d-flex justify-content-center align-items-center" style="min-height: 95%;"
                            v-else>
                            <div class="blank_data text-center">
                                <i class="fa-solid fa-triangle-exclamation"></i>
                                <p>No Data</p>
                            </div>
                        </div>
                        <!-- not included part start here  -->

                    </div>
                    <div class="col-xl-4 .col-lg-4 .col-md-12 " style="position: sticky;top: 60px;height: fit-content;">
                        <div class="cart_summary">
                            <div class="side_title">
                                <h5>Card Summary</h5>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h3>Subtotal</h3>
                                <h2>${{ subtotal.toFixed(2) }}</h2>
                            </div>
                            <p>Delivery fees not included yet.</p>

                            <span v-if="loggedIn">
                                <a class="btn_cart"
                                    style="visibility: unset;width: 100%; display: block;text-align: center;"
                                    @click="gotoCheckOut">CheckOut (${{ subtotal.toFixed(2) }})</a>
                            </span>
                            <span v-else>
                                <a class="btn_cart"
                                    style="visibility: unset;width: 100%; display: block;text-align: center;"
                                    @click="openLoginModal">CheckOut (${{ subtotal.toFixed(2) }})</a>
                            </span>

                        </div>
                        <div class="de_returns">
                            <h3>Returns are easy</h3>
                            <p>Free return within 15 days for Official Store items and 7 days for other eligible items
                                <Nuxt-link to="/refund">See more</Nuxt-link>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- recent view part start here  -->
                <RecentView />
                <!-- recent view part end here  -->
            </div>
        </section>
        <!-- END Main Section here -->
        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
        <login_popup />

    </div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import RecentView from '~/components/RecentView.vue';
import NavbarSecond from '../components/NavbarSecond.vue';
import login_popup from '~/components/loginCartpage.vue';

export default {
    components: {
        login_popup,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView,
        NavbarSecond
    },
    data() {
        return {
            loading: false,
            qty_limite: '',
            cart: [],
            //    product:[],
            itemCount: 0,
            subtotal: 0,
            quantity: '',
            login: {
                email: '',
                password: '',
            },
            item: {
                quantity: '',
            },
            notifmsg: '',
            errors: {},
            // loggedIn: false,
            finalPrice: '',

        };
    },
    head: {
        title: 'Cart',
    },
    mounted() {

        if (process.client) {

            this.loadCart();
            this.cartItemCount();
            this.subtotal = this.calculateSubtotal();

            $(document).ready(function () {
                $(".filter_btn").on('click', function () {
                    $(".filter_modal").show();
                });
                $(".filter_close").on('click', function () {
                    $(".filter_modal").hide();
                });
            })
            // Now you can work with myElement
        }
        
        this.calculateSubtotal();
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        checkqty(sqty, s_qty) {
            const qty = sqty;
            const upqty = s_qty;
            if (upqty >= qty) {
                // Show a toast message
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "You've reached the stock limit"
                });
            }
        },

        gotoCheckOut() {
            this.$router.push('/checkout');
        },
        async customerLogin() {
            try {

                $(".show_error").html("");
                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                    // Add other parameters as needed
                };
                //console.log("==========login email:" +  this.login.email);
                //console.log("==========login password:" +  this.login.password);
                //return false; 
                let {
                    data
                } = await this.$axios.post('/auth/login', postData);
                await this.$auth.setUserToken(data.access_token);
                this.$router.push('/checkout');
                //this.loginForm.reset();
            } catch (err) {
                // console.log(err)
                // console.error('Login error:', err);
                if (err.response && err.response.status === 401) {
                    $(".show_error").html("Invalid credentials. Please try again.");
                } else {
                    $(".show_error").html('An error occurred. Please try again later.');
                }
            }
        },
        openLoginModal() {
            $(".login_popup_two").fadeIn();
        },
        allowOnlyNumbers(event) {
            var charCode = (event.which) ? event.which : event.keyCode;

            if (String.fromCharCode(charCode).match(/[^0-9]/g)) {
                event.preventDefault();
            }
        },
        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
        updateQuantity(productId, newQuantity) {

            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === productId);
            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.updateQuantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Successfull update quantity"
                });

            }

        },
        loadCart() {
            this.loading = true;
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);

            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                if (item.product) { // Add a check to ensure item.product is defined
                    itemCount += parseInt(item.quantity);
                }
            });
            this.itemCount = itemCount;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        handleCartItemCountUpdated(itemCount) {
            // This method will be called when the event is emitted from ComponentA
            // console.log('Received  DesktopViewOptions Com.:', itemCount);
            // Update the local data property with the received itemCount
            this.itemCount = itemCount;
        },

        removeFromCart(product) {
            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === product.id);

            if (index !== -1) {
                if (this.cart[index].quantity > 1) {
                    this.cart[index].quantity -= 1;
                } else {
                    this.cart.splice(index, 1);
                }

                this.saveCart();
                this.calculateSubtotal();
                this.cartItemCount();
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
        addToCart(productId) {

            const productToAdd = this.prouducts.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                //existingItem.quantity += 1;
            } else {
                this.cart.push({
                    product: productToAdd,
                    quantity: 1
                });
            }

            this.saveCart();
            this.cartItemCount();
            this.calculateSubtotal();
        },
        cartItemCount() {
            //  this.loading = true;
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            // console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        calculateSubtotal() {
    let subtotal = 0;
    this.cart.forEach((item) => {
        const product = item.product;
        const warrAmt = parseFloat(product.warrantyamt || 0); // Parse warranty amount to a number, defaulting to 0 if not provided

        let priceWithoutCommas;
        if (typeof product.last_price === 'string') {
            priceWithoutCommas = parseFloat(product.last_price.replace(/,/g, ''));
        } else {
            priceWithoutCommas = parseFloat(product.last_price);
        }

        if (!isNaN(item.quantity) && !isNaN(priceWithoutCommas)) {
            // Calculate the total price for the item including warranty, if applicable
            const totalPrice = priceWithoutCommas + warrAmt;

            // Add the total price multiplied by quantity to the subtotal
            subtotal += item.quantity * totalPrice;
        } else {
            console.error('Invalid quantity or price:', item.quantity, product.last_price);
        }
    });

    // Assign subtotal to both subtotal and subtotal_
    this.subtotal = subtotal;
    return subtotal;
},


    },
}
</script>
<style>
.freeBadge {
    font-size: 10px !important;
    /* background: #ff9901;
    padding: 2px 5px;
    border-radius: 3px;
    font-weight: 600; */
    color: #ff9901 !important;
    /* width: fit-content; */
}
</style>
