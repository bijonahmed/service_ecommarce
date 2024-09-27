<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="top_selling">
                    <div class="row">
                        <div class="col-6">
                            <div class="sell_title">
                                <h5>Top Selling items</h5>
                            </div>
                        </div>
                    </div>

                    <div class="swiper mySwiper pro_slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in toproducts" :key="item.id">
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
                                    <button type="button" class="btn_cart" @click="addToCart(item.id)">Add to
                                        cart</button>
                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            // currentSlide: 0, // Add this property to keep track of the current slide
            autoplayInterval: null,
            loading: false,
            toproducts: [],
            products: [],
            product: [],
            cart: [],

        };
    },
    async mounted() {

        // await this.initOwlCarousel();
        await this.fetchDefaultProduct();
        await this.ssliderTest();

        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();

    },

    methods: {
        ssliderTest() {
            // Product slider 
            const swiper = new Swiper('.pro_slider', {
                slidesPerView: 6,
                breakpoints: {
                    0: {
                        slidesPerView: 2
                    },
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 6
                    }
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        },
        cartItemCount() {
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += item.quantity;
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
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
            }
        },
        addToCart(productId) {
            const productToAdd = this.products.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;

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
                    title: "Product successfully Added to cart"
                });
            } else {
                this.cart.push({
                    product: productToAdd,
                    quantity: 1
                });
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
                    title: "Product successfully Added to cart"
                });
            }

            this.saveCart();
            this.cartItemCount();
            this.calculateSubtotal();
        },
        removeFromCart(product) {
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
            }
        },
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
        calculateSubtotal() {
            return 0;
        },

        async fetchDefaultProduct() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/topSellingProducts`).then(response => {
                this.toproducts = response.data;
                this.products = response.data;
                this.product = response.data;
                console.log(response.data);
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
    },
};
</script>

<style></style>
