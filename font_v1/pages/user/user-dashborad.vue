<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- navbar section end here  -->


        <!-- Main section start here  -->
        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0">
                        <!-- <div class="main_profile"> -->
                        <div class="dash_count_container">
                            <div class="box_c">
                                <h3>Available balance</h3>
                                <h6>$0</h6>
                            </div>
                            <div class="box_c">
                                <h3>Total Orders</h3>
                                <h6>0</h6>
                            </div>
                            <div class="box_c">
                                <h3>Total Purchase</h3>
                                <h6>$0</h6>
                            </div>
                            <div class="box_c d-none">
                                <h3>Total Team: <span>5325</span></h3>
                                <h3>Total Profit: <span>$254.50</span></h3>
                            </div>
                            <div class="box_c">
                                <h3>My Salary</h3>
                                <h6>$0</h6>
                            </div>
                            <div class="box_c">
                                <h3>Withdrawal Amount</h3>
                                <h6>$0</h6>
                            </div>
                            <div class="box_c" @click="setChatBox()">
                                <h3><a href="#">ChatBox</a></h3>
                            </div>
                        </div>
                        <!-- </div> -->
                        <!-- recent view part start here  -->
                        <!-- max 15 product in slider  -->
                        <div class="row">
                            <div class="col-12">
                                <div class="top_selling">
                                    <div class="row mb-2 bg_appliance "
                                        style="border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                        <div class="col-6">
                                            <div class="sell_title">
                                                <h5>Recent Views</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="owl-carousel product_slider">
                                            <div class="swiper-slide">
                                                <a href="product-details.html">
                                                    <div class="sell_itm">
                                                        <img src="/images/product(2).jpg" class=" img-fluid" alt="">
                                                        <span>-10%</span>
                                                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                            Omnis,
                                                            nam nostrum! Qui ad quos provident doloremque nostrum
                                                            maiores a
                                                            vitae.</h5>
                                                        <h6>Price: 2,000TK</h6>
                                                        <h6><strike>Price: 2,000TK</strike></h6>
                                                    </div>
                                                </a>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- recent view part end here  -->
                        <div class="main_profile mt-3">
                            <p>Total Users: {{ totalmemberCount }}</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Upline </th>
                                        <th>Reg. date</th>
                                        <th>Profit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(lev, index) in level" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ lev.name }}</td>
                                        <td>{{ lev.upline }}</td>
                                        <td>{{ lev.regDate }}</td>
                                        <td>{{ lev.profit }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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
import $ from "jquery";

import NavbarSecond from '~/components/NavbarSecond.vue';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import userSidebar from '~/components/userSidebar.vue';


export default {
    // middleware: 'IsUser',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,
    },
    head: {
        title: 'Dashboard',
    },
    data() {
        return {
            totalmlm: 0,
            totalmemberCount: '',
            lev1Count: 0,
            lev2Count: 0,
            lev3Count: 0,
            lev4Count: 0,
            lev5Count: 0,
            level: '',
            teamCount: 0,
            teamProfit: 0,
            inviteCode: '',
            loading: false,
            currentURL: null,
            segmentToRemove: "/user/user-mlm",
        };
    },
    mounted() {
        this.getLevelCalculationAll();
        this.setupEventHandlers();
    },
    methods: {
        async setChatBox() {
            await this.$axios.post(`/auth/me`).then((response) => {
                // Seller Account Info
                let userId = response.data.id;
                let name = response.data.name;
                let email = response.data.email;
                return this.$router.push({
                    path: '/chatbox/messages',
                    query: {
                        slug: name,
                        username: email,
                        seller_id: userId,
                        name: email
                    }
                });
            });
        },
        async getLevelCalculationAll() {
            this.loading = true;
            try {
                const response = await this.$axios.post('/customer/getCustomerAllLevel');
                this.level = response.data.level;
                this.totalmemberCount = response.data.teamCount;
                // this.teamProfit = response.data.teamProfit;
            } catch (error) {
                // Handle error
            } finally {
                this.loading = false; // Hide loader after response
            }

        },
        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".product_slider").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
                $(".product_slider").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
                $(".product_slider").css("z-index", "1");
            })
        },
    },
}
</script>