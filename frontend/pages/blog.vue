<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="main_content  mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="blog_sidebar d-md-block d-none">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6>Categories</h6>
                                <button class="bt_close d-md-none d-block text-dark"><i
                                        class="fa-solid fa-x"></i></button>
                            </div>
                            <!-- {{ blogCat }} -->
                            <form action="">
                                <hr>
                                <div v-for="category in blogCat" :key="category.id" class="form_align">
                                    <input type="checkbox" :id="category.id" @change="catfilter(category.slug)"
                                        :name="category.id" :value="category.name" v-model="selectedCategories">
                                    <label :for="category.id">{{ category.name }}</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page_title d-flex justify-content-between align-items-center  d-md-none">
                                    <h4>Blogs</h4>
                                    <button type="button" class="btn_edit btn_sidebar"><i class="fa-solid"><i
                                                class="fa-solid fa-filter"></i></i></button>
                                </div>
                            </div>
                        </div>
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
                                <a @click="details(blog.slug)" class="blogLink">Read Full Blog <i
                                        class="fa-solid fa-arrow-right"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import RecentView from '~/components/RecentView.vue';
import FlashSaleFilter from '~/components/FlashSaleFilter.vue';
import OfficialStoreProductList from '~/components/OfficialStoreProductList.vue';
import NavbarSecond from '../components/NavbarSecond.vue';



export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView,
        FlashSaleFilter,
        OfficialStoreProductList,
        NavbarSecond,

    },
    head: {
        title: "Blogs",
    },
    data() {
        return {
            blogCat: '',
            selectedCategories: [],
            blogs: [],
        }
    },
    mounted() {
        this.jqueryScripts();
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
        jqueryScripts() {
            $(".btn_sidebar").click(() => {
                $(".blog_sidebar").addClass('active');
            });

            $(".bt_close").click(() => {
                $(".blog_sidebar").removeClass('active');
            });
        },
        getBlogs() {
            this.$axios.get("/unauthenticate/blogs")
                .then(response => {
                    // console.log(response.data);
                    this.blogs = response.data;
                })
        },
        catfilter(slug) {
            // console.log(slug);
            // return false;
            this.$axios.get('/unauthenticate/blogs', {
                params: {
                    category_slug: slug
                }
            })
                .then(response => {
                    // console.log(response.data);
                    this.blogs = response.data;
                })
                .catch(error => {
                    console.error('Error fetching blogs:', error);
                });
        },
        getBlogCat() {
            this.$axios.get("/unauthenticate/blogCat")
                .then(response => {
                    // console.log(response.data);
                    this.blogCat = response.data;
                })
        }
    },

}
</script>
<style>
.blog_sidebar.active {
    display: block !important;
    position: fixed;
    background: #fff;
    min-height: 100vh;
    left: 0;
    top: 62px;
    min-width: 260px;
}
</style>