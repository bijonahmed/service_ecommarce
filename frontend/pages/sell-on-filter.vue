<template>
<div>
    <div class="row">
        <div class="col-12">

            <div class="product_section">
                <div class="row px-2">
                    <!-- sidebar fillter  -->
                    <div class="col-md-4 desktop_view">
                        <div class="left_side_product" style="margin-top: 10px;">
                            <div class="category_list">
                                <h6>Category</h6>
                                <ul>
                                    <li v-for="category in categories" :key="category.id"><a href="#" @click="fetchData(category.slug)">{{ category.name }}</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <!-- grid  -->
                    <div class="col-md-8">
                        <div class="product_list p-0 " style="margin-top: 10px;">
                            <div class="title_product  top_title_here">
                                <div>
                                    <h6>Sell On Ecommerce </h6>
                                </div>
                                <div class="d-none">
                                    <label for="">Short By:</label>
                                    <select name="" style="color: #110f0f;" id="">
                                        <option value="">Popularity</option>
                                        <option value="">New arrival</option>
                                        <option value="">Low to High</option>
                                        <option value="">high to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid_list p-3">
                                <div>
                                    <p>{{ prouducts.length }} product found</p>
                                    <div class="loading-indicator" v-if="loading">
                                        <div class="loader-container">
                                            <center class="loader-text">Loading...</center>
                                            <img src="/loader/loader.gif" loading="lazy" alt="Loader" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <a type="button" class="filter_btn mobile_view"><i class="fa-solid fa-sliders"></i></a>
                                </div>

                            </div>
                            <div class="row p-4">
                                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6" v-for="item in prouducts" :key="item.id">
                                    <div class="product_grid">
                                        <nuxt-link :to="`/product-details/${item.pro_slug}`" v-if="prouducts.length > 0">
                                            <img :src="item.thumnail_img" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>{{ item.product_name }}</h1>
                                            <p>${{ item.price }}</p>
                                            <p v-if="item.discount !== 0"><strike>${{ item.discount }}</strike>
                                                <span>-5%</span></p>
                                            <div class="d-flex align-items-center">
                                                <div class="rating d-none">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star "></i>
                                                </div>
                                                <h6>(200)</h6>
                                            </div>
                                            <p class="left_item d-none">50 items left</p>
                                            <div class="progress d-none">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                                                </div>
                                            </div>

                                        </Nuxt-link>
                                        <button type="button" class="btn_cart" @click="addToCart(item.id)">Add to cart
                                        </button>

                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-12 text-center">
                                    <button class="btn_cart my-2 mx-auto " @click="loadMore" :disabled="loadings" style="visibility: visible; width: fit-content;">
                                        {{ loadings ? 'Loading...' : 'Load more...' }}
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
</template>

<script>
export default {
    props: {
        receivedSlug: String,
    },
    data() {
        return {
            loadings: false,
            currentPage: 1,
            loading: false,
            cart: [],
            loading: false,
            prouducts: [],
            categories: [],
            pro_count: 0,
            categoryname: '',
        };
    },
    async mounted() {
        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();
        await this.fetchDataCategory();
        await this.defalutLoading();

    },
    methods: {
        async loadMore() {
            this.loadings = true;
            this.currentPage++;

            await this.$axios
                .get(`/unauthenticate/pagniatedProducts?page=${this.currentPage}`)
                .then((response) => {
                    this.prouducts = [...this.prouducts, ...response.data.result];
                })
                .catch((error) => {
                    // Handle error
                })
                .finally(() => {
                    this.loadings = false;
                });
        },

        async defalutLoading() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/pagniatedProducts`).then(response => {
                    // this.categories = response.data;
                    this.prouducts = response.data.result;
                    this.pro_count = response.data.pro_count;
                    // this.categoryname = response.data.categoryname;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

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
            let subtotal = 0;
            this.cart.forEach((item) => {
                const product = item.product;
                console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
                const priceAsNumber = parseFloat(product.price.replace(/[^\d.]/g, '')); //510;//product.price;
                if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
                    subtotal += item.quantity * priceAsNumber;
                } else {
                    console.error('Invalid quantity or price:', item.quantity, product.price);
                }
                // console.log(`Intermediate Subtotal: ${subtotal}`);
            });
            //console.log(`Final Subtotal: ${subtotal}`);
            return this.subtotal = subtotal;
            //return subtotal;
        },
        categoryGrid() {
            const slug = this.$route.query.slug;
            //alert(paramSlug);
            this.$router.push({
                path: '/category/category-list',
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
                    this.prouducts = response.data.result;
                    this.pro_count = response.data.pro_count;
                    this.categoryname = response.data.categoryname;

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
