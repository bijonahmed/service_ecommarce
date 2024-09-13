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
                            <br/><br/>
   <div class="row">
      <!-- Purple Table -->
        <div class="col-md-4" v-for="data in salaryall" :key="data.id">
            <div class="pricing-table purple">
    <h2>{{ data.name }}</h2>
    <div class="pricing-features">
        <div class="feature">Number of Referrals<span>{{ data.number_of_referell }}</span></div>
        <div class="feature">Number of Sales<span>{{ data.number_of_sales }}</span></div>
        <div class="feature">Number of Blogs<span>{{ data.number_of_blogs }}</span></div>
    </div>
    <!-- Price -->
    <div class="price-tag">
        <span class="symbol">$</span>
        <span class="amount">{{ data.salary_amount }}</span>
        <span class="after">/Salary</span>
    </div>
</div>

        </div>
      <!-- Turquoise Table -->
      
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
.pricing-table {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: #fff;
    border-radius: 12px;
    padding: 30px;
    max-width: 300px;
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.pricing-table:hover {
    transform: translateY(-10px);
}

.pricing-table h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #fff;
    font-weight: bold;
}

.pricing-features {
    margin-bottom: 20px;
}

.feature {
    font-size: 1.1rem;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
}

.feature span {
    font-weight: bold;
}

.price-tag {
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 2.5rem;
    margin-top: 20px;
}

.symbol {
    font-size: 1.5rem;
    margin-right: 5px;
}

.amount {
    font-size: 3rem;
    font-weight: bold;
}

.after {
    font-size: 1rem;
    color: #ddd;
    margin-left: 5px;
}

.purple {
    background: linear-gradient(135deg, #7b1fa2 0%, #ab47bc 100%);
}

</style>
