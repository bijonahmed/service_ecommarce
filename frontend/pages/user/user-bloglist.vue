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
                        <userSidebar/>
                    </div>
                    <div class="col-md-9 ps-md-0 col-12">
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="main_profile">
                            <div class="d-flex justify-content-between align-items-center">
                                
                            <h4>My Blog List </h4>
                            <nuxt-link to="/user/user-blogPost" class="btn_cart py-2" style="width: fit-content">Create Blog Post</nuxt-link>
                            </div>
                            <hr>
                        <div class="bologContainer">
                            <!-- =============={{ blogs }} -->

                            <div class="blog_box" v-for="blog in blogs" :key="blog.id">
                                <img :src="blog.image" alt="" class="img-fluid">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>{{ blog.created_at }}</span>
                                    <strong>{{ blog.category_name }}</strong>
                                </div>
                                <a @click="details(blog.slug)">{{ blog.title }}</a>
                                <p v-html="blog.content"></p>
                                <!-- <nuxt-link :to="`/blog-details/${blog.slug}`" class="blogLink">Read Full Blog <i
                                        class="fa-solid fa-arrow-right"></i></nuxt-link> -->
                                <div class="d-flex justify-content-between">

                                    <p v-if="blog.status == 1" class="badge bg-success text-light">Approve</p>
                                    <p v-else-if="blog.status == 2" class="badge bg-warning text-light">Pending</p>
                                    <p v-else class="badge bg-danger text-light">Reject</p>


                                    <a @click="details(blog.slug)" class="blogLink">Read Full Blog <i
                                        class="fa-solid fa-arrow-right"></i></a>
                                </div>
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
        title: 'My Sallary',
    },
    data() {
        return {
            product: [],
            cart: [],
            loading: false,
            products: [],
            errors: {},
            salaryall: [],
            blogs: [],
        }
    },
    mounted() {
        this.setupEventHandlers();
        this.loadingWishList();
        this.getDefaultData();
        this.getBlogs();
        this.getBlogCat();
    },
    methods: {

        details(slug) {
            this.$router.push({
                path: '/blog-details',
                query: {
                    slug: slug
                }
            })
        },
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
        getDefaultData(){
            this.$axios.get('/unauthenticate/getsalaryuser')
            .then(response => {
                console.log("========"+response.data);
                this.salaryall = response.data;
            })
        },
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

            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
        
        getBlogs() {
            this.$axios.get("/user/blogs")
                .then(response => {
                    // console.log(response.data);
                    this.blogs = response.data;
                })
        },
        
        getBlogCat() {
            this.$axios.get("/unauthenticate/blogCat")
                .then(response => {
                    // console.log(response.data);
                    this.blogCat = response.data;
                })
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
