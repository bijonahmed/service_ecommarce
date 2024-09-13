<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>

    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">

            <h2 class="text-center">{{ business_name }}</h2>

            <center v-if="loggedIn">
                <nuxt-link to="/seller/seller-account-setting"><button class="form-control" style="width: 30%;">Back to Dashboard</button></nuxt-link>
            </center>
            <!-- bannar slider  -->
            <div class="store_bannar">

                <span v-if="top_banner_img">
                    <img :src="top_banner_img" class="img-fluid" alt="">
                </span>
                <span v-else>
                    <img src="/images/Slider_fold.jpg" class="img-fluid" loading="lazy" alt="">
                </span>

                <div class="store_details">
                    <div class="row">
                        <div class="col-sm-3 text-center m-auto justify-content-center">
                            <div class="img_box">
                                <span v-if="business_logo">
                                    <img :src="business_logo" class="img-fluid" alt="">
                                </span>
                                <span v-else>
                                    <img src="/images/user-100.png" loading="lazy" class="img-fluid" alt="">
                                </span>

                            </div>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="store_information">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-location-dot"></i>{{ business_address }} </a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-phone"></i> {{ business_phone }}</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-envelope"></i> {{ business_email }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <div class="loading-indicator" v-if="loading">
                    <div class="loader-container">
                        <center class="loader-text">Loading...</center>
                        <img src="/loader/loader.gif"  loading="lazy" alt="Loader" />
                    </div>
                </div>
            </center>
            <!-- Top deals  -->
            <div class="row">
                <div class="col-12">
                    <div class="top_selling">
                        <div class="row mb-2">
                            <div class="col-6">
                                <div class="sell_title">
                                    <h5>Top Deals </h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="(item, index) in slidersImg" :key="index" class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                                <nuxt-link :to="`/product-details/${item.slug}`">
                                    <div class="sell_itm">
                                        <img :src="item.thumnail" class=" img-fluid" alt="">
                                        <h5>{{ item.name }}</h5>
                                        <h6>Price: {{ item.price }}</h6>
                                        <p v-if="item.discount !==0"><strike>${{ item.discount }}</strike></p>
                                    </div>
                                </nuxt-link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- top deals end here  -->

            <!-- ads bannar 3 img  -->
            <div class="row">
                <div class="col-12">
                    <div class="deal_foryou">

                        <div class="row">
                            <div class="col-4">
                                <a href="#">
                                    <span v-if="banner1">
                                        <img :src="banner1" class="img-fluid" alt="">
                                    </span>
                                    <span v-else>
                                        <img src="/images/images_global.jpg" loading="lazy" class="img-fluid" alt="">
                                    </span>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#">
                                    <span v-if="banner2">
                                        <img :src="banner2" class="img-fluid" alt="">
                                    </span>
                                    <span v-else>
                                        <img src="/images/images_global.jpg" loading="lazy" class="img-fluid" alt="">
                                    </span>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#">
                                    <span v-if="banner3">
                                        <img :src="banner3" class="img-fluid" loading="lazy" alt="">
                                    </span>
                                    <span v-else>
                                        <img src="/images/images_global.jpg" loading="lazy" class="img-fluid" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ads bannar 2 img  -->
            <div class="row">
                <div class="col-12">
                    <div class="deal_foryou">
                        <div class="row">
                            <div class="col-6">
                                <a href="#">
                                    <span v-if="banner4">
                                        <img :src="banner4" class="img-fluid" alt="">
                                    </span>
                                    <span v-else>
                                        <img src="/images/images_global.jpg" class="img-fluid" alt="">
                                    </span>
                                </a>
                            </div>
                            <div class="col-6">
                                <a href="#">
                                    <span v-if="banner5">
                                        <img :src="banner5" class="img-fluid" alt="">
                                    </span>
                                    <span v-else>
                                        <img src="/images/images_global.jpg" class="img-fluid" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- video ads section  -->
            <div class="video_ads">
                <span v-if="file_name">
                    <iframe :src="getVideoUrl()" frameborder="0"></iframe>
                </span>
                <span v-else>
                    <iframe src="https://www.youtube.com/embed/0pTqynKiki4" frameborder="0"></iframe>
                </span>

            </div>

            <!-- product grid part start here  -->
            <div class="row">
                <div class="col-12">
                    <div class="product_section">
                        <div class="row px-2">
                            <!-- sidebar fillter  -->
                            <div class="col-md-4 desktop_view">
                                <div class="left_side_product">
                                    <div class="category_list">
                                        <h6>Category</h6>
                                        <ul>
                                            <li v-for="uniqueCategory in uniqueCategories" :key="uniqueCategory.id">
                                                <i class="fa fa-list-alt" aria-hidden="true"></i> <a :href="'#'" v-text="uniqueCategory.name" @click.prevent="filterCategory(uniqueCategory.id)"></a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <!-- grid  -->
                            <div class="col-md-8">
                                <div class="product_list">
                                    <div class="title_product">
                                        <div>
                                            <h6>Officail Store Deals</h6>
                                        </div>

                                    </div>
                                    <div class="grid_list">
                                        <div>
                                            <p>{{ products.length }} product found</p>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6" v-for="item in products" :key="item.id">
                                            <div class="product_grid">
                                                <nuxt-link :to="`/product-details/${item.slug}`" v-if="products.length > 0">
                                                    <img :src="item.thumnail_img" class="img-fluid" alt="">
                                                    <strong>Official Store </strong>
                                                    <h1>{{ item.name }}</h1>
                                                    <p>${{ item.price }}</p>
                                                    <p v-if="item.discount !== 0"><strike>${{ item.discount }}</strike>
                                                    </p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating d-none">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                    </div>

                                                </Nuxt-link>
                                                <button type="button" class="btn_cart" @click="addToCart(item.id)">Add to cart
                                                </button>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- recent view part start here  -->

    </section>
    <!-- Main section end here  -->
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>

    <Footer />

</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';
export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },

    head: {
        title: 'My Business',
    },

    async asyncData({
        params
    }) {
        const productSlug = params.slug;
        return {
            //cart
            cart: [],
            loading: false,
            pro_row: '',
            productSlug: '',
            business_owner_name: '',
            business_name: '',
            business_register_num: '',
            business_address: '',
            business_logo: '',
            business_email: '',
            business_phone: '',
            top_banner_img: '',
            banner1: '',
            banner2: '',
            banner3: '',
            banner4: '',
            banner5: '',
            file_name: '',
            slidersImg: [],
            categories: [],
            products: [],
            categoryList: []
        };
    },
    mounted() {
        this.fetchData();
        this.loadCart();
        this.cartItemCount();
        this.fetchDataCategory();
        this.calculateSubtotal();
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },
        uniqueCategories() {
            // const uniqueSet = new Set(this.categoryList.map(category => category.id));
            // return Array.from(uniqueSet).map(id => {
            //     return this.categoryList.find(category => category.id === id);
            // });

            // Check if this.categoryList is an array
            if (!Array.isArray(this.categoryList)) {
                console.error("this.categoryList is not an array");
                return []; // or handle the error in a way that makes sense for your application
            }

            const uniqueSet = new Set(this.categoryList.map(category => category.id));
            return Array.from(uniqueSet).map(id => {
                return this.categoryList.find(category => category.id === id);
            });
        },
    },
    methods: {
        getVideoUrl() {
            return `https://www.youtube.com/embed/${this.file_name}`;
        },
        async filterCategory(category_id) {
            console.log(category_id);
            this.loading = true;
            const response = await this.$axios.get(`/unauthenticate/getSellerCategoryFilter/${category_id}`);
            this.products = response.data.products;
            this.loading = false;

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

        calculateSubtotal() {
            let subtotal;
            this.cart.forEach((item) => {
                const product = item.product;
                console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);

                if (typeof product.price === 'string') {
                    const priceMatch = product.price.match(/[\d.]+/);
                    if (priceMatch) {
                        const priceAsNumber = parseFloat(priceMatch[0]);
                        if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
                            subtotal += item.quantity * priceAsNumber;
                        } else {
                            console.error('Invalid quantity or price:', item.quantity, product.price);
                        }
                    } else {
                        console.error('Invalid price format:', product.price);
                    }
                } else if (typeof product.price === 'number') {
                    // Use the price directly if it's a number
                    if (!isNaN(item.quantity) && !isNaN(product.price)) {
                        subtotal += item.quantity * product.price;
                    } else {
                        console.error('Invalid quantity or price:', item.quantity, product.price);
                    }
                } else {
                    console.error('Invalid price type:', typeof product.price);
                }

                // console.log(`Intermediate Subtotal: ${subtotal}`);
            });

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

        isObjectNotEmpty(obj) {
            return Object.keys(obj).length > 0;
        },
        async fetchData() {
            const prosulg = this.$route.params.slug; //this.$route.query.slug;
            this.loading = true;
            const response = await this.$axios.get(`/unauthenticate/getSeller/${prosulg}`);
            this.business_owner_name = response.data.business_owner_name;
            this.business_name = response.data.business_name;
            this.business_register_num = response.data.business_register_num;
            this.business_address = response.data.business_address;
            this.business_logo = response.data.business_logo;
            this.business_email = response.data.business_email;
            this.business_phone = response.data.business_phone;
            this.slidersImg = response.data.slidersImg;
            this.products = response.data.products;
            this.categoryList = response.data.categoryList;
            this.top_banner_img = response.data.top_banner_img;
            this.banner1 = response.data.banner1;
            this.banner2 = response.data.banner2;
            this.banner3 = response.data.banner3;
            this.banner4 = response.data.banner4;
            this.banner5 = response.data.banner5;
            this.file_name = response.data.file_name;
            this.loading = false;
        },

        async fetchDataCategory() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/filterCategorys`).then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        }

    },

}
</script>

<style scoped>
.cat_box {
    position: relative;
    /* margin: 0px 5px; */
    border-radius: 5px;
    width: 100%;
    max-width: 250px;
    overflow: hidden;
    max-height: 320px;
}

.cat_box a {
    height: 100%;
    width: 100%;
    display: block;
}

.cat_box a img {
    width: 100%;
    height: 100%;
}

.cat_box::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #000;
    width: 100%;
    height: 50%;
    background: linear-gradient(0deg, #000000c7, transparent);
}

.top_search_box {
    background: #fff;
    box-shadow: 0 0 20px #ededed;
    padding: 0px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
}

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
