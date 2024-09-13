<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SellerLeftsidebar />

                </div>
                <div class="col-md-8">

                    <div class="top_filter">
                        <h4>Product Management</h4>
                        <div class="returns_alert">
                            <div class="alert alert-primary"> <i class="fa-solid fa-exclamation"></i>Since we have upgraded the product management, For a better experience, the older operation of file uploading on the current page would be offline in a few days. You can experience the new one in the menu 'Products / Bulk Add/Edit Products'
                                Your products are not yet visible to buyers. Please add address to make them visible</div>
                        </div>
                        <ul>
                            <li>
                                <button type="button " class="active">All</button>
                            </li>
                            <li>
                                <button type="button">Online(0)</button>
                            </li>
                            <li>
                                <button type="button">Draft(0)</button>
                            </li>
                            <li>
                                <button type="button">Pending QC(0)</button>
                            </li>
                            <li>
                                <button type="button">Out Of stock(0)</button>
                            </li>
                            <li>
                                <button type="button">Inactive(0)</button>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <Nuxt-link to="/seller/seller-products-post" class="btn_download mb-2">Add New </Nuxt-link>
                    </div>
                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product Id" v-model="productId" @change="applyFilters">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product Name " v-model="productName" @change="applyFilters">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="SKU " v-model="sku" @change="applyFilters">
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="button" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;" @click="applyFilters">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="loading-indicator" v-if="loading">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="main_profile">
                        <div class="user_details order_details_table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product ID</th>
                                        <th>Name</th>
                                        <th>SKU</th>
                                        <th>Price </th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ product.id }}</td>
                                        <td class="table_product">
                                            <div>
                                                <img :src="product.image" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <nuxt-link :to="`/product-details/${product.slug}`">
                                                    <h6>{{ product.name }}</h6>
                                                </nuxt-link>
                                            </div>
                                        </td>
                                        <td>{{ product.sku }}</td>
                                        <td>{{ `${product.price}TK` }}</td>
                                        <td>{{ product.status }}</td>
                                        <td >
                                                <span @click="edit(product.id)"><button type="button" class="btn_edit_nxt" ><i class="fa-solid fa-pen-to-square"></i></button></span>
                                                <!-- <span @click="deleteProduct(product.id)"><button type="button"><i class="fa-solid fa-trash"></i></button></span> -->
                                                <span @click="preview(product.id)"><button type="button" class="btn_edit_nxt" ><i class="fa-solid fa-magnifying-glass-plus"></i></button></span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <!-- pagination -->
                            <center>
                                <button class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;" @click="loadMore" :disabled="loading">
                                    <span v-if="loading">Loading...</span>
                                    <span v-else>Load More...</span>
                                </button>
                            </center>
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
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import SellerLeftsidebar from '~/pages/seller/seller-leftsidebar.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';
export default {
    middleware: 'IsSeller',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        SellerLeftsidebar,
    },
    head: {
        title: 'Products List & Inventory',
    },
    data() {
        return {
            loading: false,
            searchCriteria: {
                productName: '', // Add other filter criteria as needed
            },
            notifmsg: '',
            products: [],
            errors: {},
            //
            currentPage: 1,
            totalPages: 1,
            productId: null,
            productName: null,
            sku: null,

        }
    },
    async mounted() {
        await this.defaultLoading();
    },
    methods: {
        edit(id) {
            this.$router.push({
                path: '/seller/products/product-edit',
                query: {
                    parameter: id
                }
            })
        },
        preview(id) {
            this.$router.push({
                path: '/seller/products/product-preview',
                query: {
                    parameter: id
                }
            })
        },
        async defaultLoading() {

            this.loading = true;
            try {
                const response = await this.fetchProducts();
                this.products = response.data.data;
                this.currentPage = response.data.current_page;
                this.totalPages = response.data.last_page;
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchProducts() {
            const params = {
                page: this.currentPage,
                productId: this.productId,
                productName: this.productName,
                sku: this.sku,
            };

            return this.$axios.get('/product/sellerProductList', {
                params
            });
        },
        async loadMore() {
            if (this.currentPage < this.totalPages) {
                this.loading = true;
                try {
                    this.currentPage += 1;
                    const response = await this.fetchProducts();
                    this.products = [...this.products, ...response.data.data];
                } catch (error) {
                    console.error('Error fetching more data:', error);
                } finally {
                    this.loading = false;
                }
            }
        },
        applyFilters() {
            this.currentPage = 1; // Reset page when filters change
            this.defaultLoading();
        },
    },
    computed: {
        hasMorePages() {
            return this.currentPage < this.totalPages;
        },
    },

}
</script>

<style scoped>
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
