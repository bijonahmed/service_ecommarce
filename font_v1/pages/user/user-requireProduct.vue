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
                    <div class="main_profile mt-3">
                        <h3>Require Products</h3>
                        <div class="row">
                            <div class="col-md-6 m-auto">
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form_group mb-2">
                                                <p><span class="text-danger">*</span>Product Name</p>
                                                <input type="text" class="form-control rounded-1" placeholder="Title">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form_group mb-2">
                                                <p><span class="text-danger">*</span>Product Category</p>
                                                <input type="text" class="form-control rounded-1" placeholder="Category">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form_group mb-2">
                                                <p>Product Link <strong style="font-size: 12px;">(If have any)</strong></p>
                                                <input type="text" class="form-control rounded-1" placeholder="link">
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-12">
                                            <div class="form_group mb-2">
                                                <p>Image <strong style="font-size: 12px;">(If have any)</strong></p>
                                                <input type="file" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form_group mb-2">
                                                <input type="submit" class="form-control mt-3 btn_confirm py-2" value="Require Product">
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
import userSidebar from '~/components/userSidebar.vue';
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
        title: 'New Blog',
    },
    data() {
        return {
        }
    },
    mounted() {
        this.setupEventHandlers();
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
