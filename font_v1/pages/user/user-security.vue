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
                            <!-- <form action=""> -->
                            <h4 class="mb-3">Security</h4>
                            <div class="row">
                                <div class="col-xl-6">
                                    <form action="#" method="">
                                        <h5>Account password</h5>
                                        <div class="form_group mb-2">
                                            <label for="">Old Password<span
                                                    style="font-size: 12;color: red;">*</span></label>
                                            <div class="inp_group">
                                                <input id="oldPass" type="password" class="form-control">
                                                <i toggle="#oldPass" class="fa-solid fa-eye toggle_password"></i>
                                            </div>
                                        </div>
                                        <div class="form_group mb-2">
                                            <label for="">New Password<span
                                                    style="font-size: 12;color: red;">*</span></label>
                                            <div class="inp_group">
                                                <input id="newpass" type="password" class="form-control">
                                                <i toggle="#newpass" class="fa-solid fa-eye toggle_password"></i>
                                            </div>
                                        </div>
                                        <div class="form_group mb-2">
                                            <label for="">Retype Password<span
                                                    style="font-size: 12;color: red;">*</span></label>
                                            <div class="inp_group">
                                                <input id="repass" type="password" class="form-control">
                                                <i toggle="#repass" class="fa-solid fa-eye toggle_password"></i>
                                            </div>
                                        </div>
                                        <input type="submit" value="Submit" class="btn_confirm s_mdal_open">
                                    </form>
                                </div>
                                <div class="col-xl-6">
                                    <form action="#" method="">
                                        <h5>Withdrawal password</h5>
                                        <div class="form_group mb-2">
                                            <label for="">Old Password<span
                                                    style="font-size: 12;color: red;">*</span></label>
                                            <div class="inp_group">
                                                <input id="wold" type="password" class="form-control">
                                                <i toggle="#wold" class="fa-solid fa-eye toggle_password"></i>
                                            </div>
                                        </div>
                                        <div class="form_group mb-2">
                                            <label for="">New Password<span
                                                    style="font-size: 12;color: red;">*</span></label>
                                            <div class="inp_group">
                                                <input id="wnew" type="password" class="form-control">
                                                <i toggle="#wnew" class="fa-solid fa-eye toggle_password"></i>
                                            </div>
                                        </div>
                                        <div class="form_group mb-2">
                                            <label for="">Retype Password<span
                                                    style="font-size: 12;color: red;">*</span></label>
                                            <div class="inp_group">
                                                <input id="wrepass" type="password" class="form-control">
                                                <i toggle="#wrepass" class="fa-solid fa-eye toggle_password"></i>
                                            </div>
                                        </div>
                                        <input type="submit" value="Submit" class="btn_confirm s_mdal_open">
                                    </form>
                                </div>
                            </div>

                            <!-- </form> -->
                        </div>

                        <!-- submit modal  -->
                        <div class="mdal_ submitMdal">
                            <div class="mdal_content">
                                <div class="mdal_head">
                                    <div class="w-50"></div>
                                    <button class="bt_close close_bt"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <div class="mdal_body">
                                    <div class="mdalBdy_content">
                                        <i class="fa-solid fa-check"></i>
                                        <p>Successfully Password Change</p>
                                        <button class=" btn w-100 mt-3 close_bt btn-success" type="button">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- submit modal end here  -->
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
        title: 'Password Security',
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
            // mdal 
            $(".s_mdal_open").click(function () {
                $(".submitMdal").fadeIn();
            });
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
            });
            $(".close_bt").click(function () {
                $(".submitMdal").fadeOut();
                $(".search_bar").css("z-index", "4");
            });
            //   ....
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
            });
            $(".toggle_password").click(function () {
                $(this).toggleClass("fa-eye fa-eye-slash");
                var input = $($(this).attr("toggle"));
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });
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
