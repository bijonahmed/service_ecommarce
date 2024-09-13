<template>
<div>

    <div class="row">
        <div class="col-12">
            <div class="loading-indicator" v-if="loading">
                <div class="loader-container">
                    <center class="loader-text">Loading...</center>
                    <img src="/loader/loader.gif" alt="Loader" />
                </div>
            </div>
            <div class="product_section">
                <div class="row px-2">
                    <!-- sidebar fillter  -->
                    <div class="col-md-4 desktop_view">
                        <div class="left_side_product">
                            <div class="category_list">
                                <h6>Category</h6>
                                <ul>
                                    <li v-for="category in categories" :key="category.id"><a href="#" @click="fetchData(category.slug)">{{ category.name }}</a></li>
                                </ul>
                            </div>

                            
                        </div>
                    </div>
                    <!-- list  -->
                    <div class="col-md-8">
                        <div class="product_list">
                            <div class="title_product">
                                <div>
                                    <h6>{{ categoryname }}</h6>
                                </div>
                                <div class="d-none">
                                    <label for="">Short By:</label>
                                    <select name="" id="">
                                        <option value="">Popularity</option>
                                        <option value="">New arrival</option>
                                        <option value="">Low to High</option>
                                        <option value="">high to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid_list">
                                <div>
                                    <p>{{ pro_count }} product found</p>
                                </div>
                                <div class="d-flex">
                                    <!-- category_slug -->
                                    <a type="button" class="filter_btn mobile_view"><i class="fa-solid fa-sliders"></i></a>
                                    <Nuxt-Link to="/category/category-list" class="active"><i class="fa-solid fa-list"></i></Nuxt-Link>
                                    <!-- <Nuxt-Link to="/category/category-grid" :category_slug="343434"><i class="fa-solid fa-grip"></i></Nuxt-Link> -->
                                    <a href="#" @click="categoryGrid"><i class="fa-solid fa-grip"></i></a>

                                </div>
                                <div class="filter_modal">
                                    <div class="row px-4">
                                        <div class="col-6"></div>
                                        <div class="col-6 text-end "><i class="fa-solid fa-x filter_close" style="cursor: pointer;"></i></div>
                                    </div>
                                    <div class="modal_fdiv">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="left_side_product">
                                                    <div class="category_list">
                                                        <h6>Category</h6>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Computing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Electronics</a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="delivery_list">
                                                        <h6>Express delivery</h6>
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox"><label for="">DHL </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="delivery_list">
                                                        <h6>Shipped from </h6>
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox"><label for="">From Bangladesh </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">From Bangladesh </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="brands_list">
                                                        <h6>Brand</h6>
                                                        <div class="search_side">
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                            <input type="text" class="form-control" placeholder="Search">
                                                        </div>
                                                        <ul class="brand_scroll">
                                                            <li>
                                                                <input type="checkbox"><label for="">Addidas </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">AGM </label>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="price_range">
                                                        <div class="sidebr_title">
                                                            <h6>Price Range </h6>
                                                            <button type="button" class="btn_apply">Apply</button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div id="slider-range" class="price-filter-range" name="rangeInput"></div>
                                                                <div class="d-flex" style="margin:10px auto">
                                                                    <input type="number" style="width: 45%;margin: 0px 3px;" min=0 max="9900" oninput="validity.valid||(value='0');" id="min_price" class="price-range-field" />
                                                                    <input type="number" style="width: 45%;margin: 0px 3px" min=0 max="10000" oninput="validity.valid||(value='10000');" id="max_price" class="price-range-field" />
                                                                </div>
                                                                <!-- <button class="price-range-search" id="price-range-submit">Search</button>
                                                                <div id="searchResults" class="search-results-block"></div> -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="brands_list">
                                                        <h6>size</h6>
                                                        <div class="search_side">
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                            <input type="text" class="form-control" placeholder="Search">
                                                        </div>
                                                        <ul class="brand_scroll">
                                                            <li>
                                                                <input type="checkbox"><label for="">XS</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">S</label>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="brands_list">
                                                        <h6>Gender</h6>
                                                        <ul class="brand_scroll">
                                                            <li>
                                                                <input type="checkbox"><label for="">Boys</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Girls</label>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- cart details -->
                            <div class="d-none">
                                this div specially for testing
                                <h2>Shopping Cart</h2>
                                <ul>
                                    <li v-for="item in cart" :key="item.product.id">
                                        {{ item.product.product_name }} - ${{ item.product.price }} (Qty: {{ item.quantity }})-
                                        <input v-model="item.updatedQuantity" type="number" />
                                        <button @click="updateQuantity(item.product.id, item.updatedQuantity)">Update Quantity</button>

                                        <button @click="removeFromCart(item.product)">Remove</button>
                                        <hr />
                                    </li>
                                </ul>
                                <p>Subtotal: ${{ subtotal }}

                                </p>
                                <p>Items in Cart: {{ itemCount }}</p>

                                <hr />
                            </div>

                            <div class="row" v-for="item in prouducts" :key="item.id">
                                <div class="col-12" v-if="prouducts.length > 0" :id="item.id">
                                    <div class="products_list">
                                        <div class="col">
                                            <nuxt-link :to="`/product-details/${item.pro_slug}`">
                                                <img :src="item.thumnail_img" class="img-fluid" alt="">
                                                <span  v-if="item.free_shopping == 1">Free Delivery </span>
                                            </Nuxt-link>

                                        </div>
                                        <div class="col pad_ding">
                                            <strong v-if="item.seller_name">{{item.seller_name}}</strong>                                   
                                            <strong v-else >Admin Seller</strong>
                                            <h5>{{ item.product_name }}</h5>
                                            <div class="d-flex align-items-center">
                                                <div class="ratings m-0">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star "></i>
                                                </div>
                                                <h6 class="m-0">(200)</h6>
                                                
                                            </div>
                                            <div class="short_des">
                                                <p class="mt-0" v-html="item.short_description"></p>
                                            </div>
                                        </div>
                                        <div class="col pad_ding">
                                            <div class=""  v-if="item.discount_status == 1">                                                
                                                <h4  class="me-1">${{ (item.last_price).toFixed(2) }}</h4>
                                                <h4 class="disabled" v-if="item.discount !==0 && item.discount !== ''"><strike>${{ item.price }}</strike><span>{{ item.discount }}%</span></h4>
                                            </div>


                                            <div class=""  v-else-if="item.discount_status == 2">
                                                <h4  class="me-1">${{ (item.last_price).toFixed(2) }}</h4>
                                                <h4 class="disabled" v-if="item.discount !==0 && item.discount !== ''"><strike>${{ item.price }}</strike><span>${{ item.discount }}</span></h4>
                                            </div>
                                            <div class=""  v-else>
                                                <h4 class="me-1">${{ (item.last_price).toFixed(2) }}</h4>
                                            </div>


                                            <button v-if="item.stock_qty >= 1" type="button" class="btn_cart" style="display: block;visibility: unset;" @click="addToCart(item.id)">Add to cart</button>
                                            <button v-else type="button" disabled class="btn_sold " style="display: block;visibility: unset;">Sold Out</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <!-- pagination -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
    //  props: ['cart'],
    props: ['category_slug'],
    // props: ['product'],
    data() {
        return {
            loading: false,
            cart: [],
            updatedQuantity: 0,
            prouducts: [],
            product: [],
            subtotal: 0,
            categories: [],
            pro_count: 0,
            itemCount: 0,
            quantity: 1,
            categoryname: '',
        };
    },

    async mounted() {
        // const paramSlug = this.$route.query.slug;
        this.calculateSubtotal();
        //   this.loadCart();
        this.cartItemCount();
        const paramSlug = this.$route.query.slug;
        //alert(paramSlug);
        this.fetchData(paramSlug);
        await this.fetchDataCategory();

    },
    methods: {
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
            
            const productToAdd = this.prouducts.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                //existingItem.quantity += 1;
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

        calculateSubtotal() {
            return 0;
        },
        categoryGrid() {
            const slug = this.$route.query.slug;
            //alert(paramSlug);
            this.$router.push({
                path: '/category/category-grid',
                query: {
                    slug: slug
                }
            })

        },
        redirectCategory(slug) {
            this.$router.push({
                path: '/category/category-list',
                query: {
                    slug: slug
                }
            })
        },
        async fetchData(slug) {
            this.loading = true;
            const response = await this.$axios.get(`/unauthenticate/findCategorys/${slug}`).then(response => {
                    this.prouducts = response.data.result.reverse();
                    this.pro_count = response.data.pro_count;
                    this.categoryname = response.data.categoryname;
                    this.loading = false;                    
                    $('.short_des').html(response.data.result.short_description );

                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;;

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
