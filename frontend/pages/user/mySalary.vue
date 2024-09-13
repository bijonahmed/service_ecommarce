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

                        <!-- start -->

                        <div class="container">
   <div class="row">
      <!-- Purple Table -->
      <div class="col-md-4">
         <div class="pricing-table purple">
            <!-- Table Head -->
            <h2>BasicPack 2020</h2>
            <h5>Made for starters</h5>
            <!-- Features -->
            <div class="pricing-features">
               <div class="feature">Bandwith<span>50 GB</span></div>
               <div class="feature">Add-On Domains<span>10</span></div>
               <div class="feature">SSD Storage<span>250 GB</span></div>
               <div class="feature">Mail Adresses<span>25</span></div>
               <div class="feature">Support<span>Only Mail</span></div>
            </div>
            <!-- Price -->
            <div class="price-tag">
               <span class="symbol">$</span>
               <span class="amount">7.99</span>
               <span class="after">/month</span>
            </div>
            <!-- Button -->
            <a class="price-button" href="#">Get Started</a>
         </div>
      </div>
      <!-- Turquoise Table -->
      <div class="col-md-4">
         <div class="pricing-table turquoise">
            <!-- Table Head -->
            <h2>ExtendedPack 2020</h2>
            <h5>Made for experienced users</h5>
            <!-- Features -->
            <div class="pricing-features">
               <div class="feature">Bandwith<span>150 GB</span></div>
               <div class="feature">Add-On Domains<span>25</span></div>
               <div class="feature">SSD Storage<span>500 GB</span></div>
               <div class="feature">Mail Adresses<span>50</span></div>
               <div class="feature">Support<span>Mail/Phone</span></div>
            </div>
            <!-- Price -->
            <div class="price-tag">
               <span class="symbol">$</span>
               <span class="amount">9.99</span>
               <span class="after">/month</span>
            </div>
            <!-- Button -->
            <a class="price-button" href="#">Get Started</a>
         </div>
      </div>
      <!-- Red Table -->
      <div class="col-md-4">
         <div class="pricing-table red">
            <!-- Table Head -->
            <h2>ProsPack 2020</h2>
            <h5>Made for professionals/agencies</h5>
            <!-- Features -->
            <div class="pricing-features">
               <div class="feature">Bandwith<span>250 GB</span></div>
               <div class="feature">Add-On Domains<span>50</span></div>
               <div class="feature">SSD Storage<span>1 TB</span></div>
               <div class="feature">Mail Adresses<span>75</span></div>
               <div class="feature">Support<span>7/24</span></div>
            </div>
            <!-- Price -->
            <div class="price-tag">
               <span class="symbol">$</span>
               <span class="amount">12.99</span>
               <span class="after">/month</span>
            </div>
            <!-- Button -->
            <a class="price-button" href="#">Get Started</a>
         </div>
      </div>
   </div>
</div>

                        <!-- END -->
                        
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
        }
    },
    mounted() {
        this.setupEventHandlers();
        this.loadingWishList();
        this.getDefaultData();
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

body {
	background: #e6e6e6;
	font-family: Rubik;
}

.main-head {
	background: #0D1440;
	box-shadow: 0px 1px 10px -6px rgba(0, 0, 0, .15);
	padding: 1rem;
	margin-bottom: 0;
	margin-top: 5rem;
	color: #fff;
	font-weight: 500;
	text-transform: uppercase;
	border-radius: 4px;
	font-size: 16px;
}

.pricing-table {
	background: #fff;
	box-shadow: 0px 1px 10px -6px rgba(0, 0, 0, .15);
	padding: 2rem;
	border-radius: 4px;
	transition: .3s;
}

.pricing-table:hover {
	box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, .15);
}

.pricing-table .pricing-label {
	border-radius: 2px;
	padding: .25rem .5rem;
	margin-bottom: 1rem;
	display: inline-block;
	font-size: 12px;
	font-weight: 500;
}

.pricing-table h2 {
	color: #3b3b3b;
	font-size: 24px;
	font-weight: 500;
}

.pricing-table h5 {
	color: #B3B3B3;
	font-size: 14px;
	font-weight: 400;
}

.pricing-table .pricing-features {
	margin-top: 2rem;
}

.pricing-table .pricing-features .feature {
	font-size: 14px;
	margin: .5rem 0;
	color: #B3B3B3;
}

.pricing-table .pricing-features .feature span {
	display: inline-block;
	float: right;
	color: #3b3b3b;
	font-weight: 500;
}

.pricing-table 	.price-tag {
	margin-top: 2rem;
	text-align: center;
	font-weight: 500;
}

.pricing-table .price-tag .symbol {
	font-size: 24px;
}

.pricing-table .price-tag .amount {
	letter-spacing: -2px;
	font-size: 64px;
}

.pricing-table .price-tag .after {
	color: #3b3b3b;
	font-weight: 500;
}

.pricing-table .price-button {
	display: block;
	color: #fff;
	margin-top: 2rem;
	padding: .75rem;
	border-radius: 2px;
	text-align: center;
	font-weight: 500;
	transition: .3s;
}

.pricing-table .price-button:hover {
	text-decoration: none;
}

.purple .pricing-label {
	background: #cad2ff;
	color: #627afe;
}

.purple .price-tag {
	color: #627afe;
}

.purple .price-button {
	background: #627afe;
}

.purple .price-button:hover {
	background: #546dfe;
}

.turquoise .pricing-label {
	background: #b9edee;
	color: #44cdd2;
}

.turquoise .price-tag {
	color: #44cdd2;
}

.turquoise .price-button {
	background: #44cdd2;
}

.turquoise .price-button:hover {
	background: #2dbcc4;
}

.red .pricing-label {
	background: #ffc4c4;
	color: #ff5e5e;
}

.red .price-tag {
	color: #ff5e5e;
}

.red .price-button {
	background: #ff5e5e;
}

.red .price-button:hover {
	background: #f23c3c;
}
</style>
