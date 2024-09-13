<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="main_content   mt-3">
            <div class="container">
                <div class="row blog_details_sec">
                    <div class="col-md-9">
                        <div class="single_blog">
                            <img :src="blog.image" alt="" class="img-fluid">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>{{ blog.created_at }}</span>
                                <strong>{{ blog.category_name }}</strong>
                            </div>
                            <h3>{{ blog.title }}</h3>
                            <div class="blogDes">
                                <p v-html="blog.content"> </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="recentBlogs">
                            <ul>
                                <h4>Recent Blogs</h4>
                                <li v-for="(blog, index) in blogs" :key="index">
                                    <a style="cursor: pointer;"  @click="details(blog.slug)"   class="rBlog">
                                        <img :src="blog.image" alt="" class="img-fluid">
                                        <div>
                                            <h6>{{ blog.title }}</h6>
                                            <strong>{{blog.category_name}}</strong>
                                            <span>{{blog.created_at}}</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
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
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import RecentView from '~/components/RecentView.vue';
import FlashSaleFilter from '~/components/FlashSaleFilter.vue';
import OfficialStoreProductList from '~/components/OfficialStoreProductList.vue';
import NavbarSecond from '~/components/NavbarSecond.vue';



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
        title: "Today's Deal",
    },
    data() {
        return {
            blog: '',
            blogs: '',
            // this.paramSlug = this.$route.query.slug;
            // paramSlug: null, // Initialize paramSlug with the value you want to pass
        };
    },
    methods: {
        jqueryScripts() {
            $(".btn_sidebar").click(() => {
                $(".blog_sidebar").addClass('active');
            });

            $(".bt_close").click(() => {
                $(".blog_sidebar").removeClass('active');
            });
        },

        details(slug) {
            console.log(slug);
            this.$router.push({
                path: '/blog-details',
                query: {
                    slug: slug
                }
            })
            this.getBlogDetsils();
        },
        getBlogs() {
            this.$axios.get("/unauthenticate/blogs")
                .then(response => {
                    // console.log(response.data);
                    this.blogs = response.data;
                })
        },
        getBlogDetsils() {
            const paramSlug = this.$route.query.slug;
            // console.log(paramSlug);

            this.$axios.get("/unauthenticate/blogdetails", {
                params: {
                    slug: paramSlug
                }
            }).then(response => {
                // console.log(response.data);
                this.blog = response.data;
            })
        }
    },
    mounted() {
        this.jqueryScripts();
        this.getBlogDetsils();
        this.getBlogs();
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