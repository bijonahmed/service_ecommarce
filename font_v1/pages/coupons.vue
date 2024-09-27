<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond/>
        <!-- Main section start here  -->

        <section class="main_content  mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="couponsList">
                            <div v-for="(coupon, index) in paginatedCoupons" :key="index" class="coupon">
                                <div class="ctop">
                                    <h3 class="fw-bold">ECOMMERCE</h3>
                                    <p
                                        v-if="coupon.d_percent !== null && coupon.d_percent !== undefined && coupon.d_percent !== 0">
                                        ${{ coupon.d_percent }}.00 OFF
                                    </p>
                                    <p
                                        v-if="coupon.d_fvalue !== null && coupon.d_fvalue !== undefined && coupon.d_fvalue !== 0">
                                        {{ coupon.d_fvalue }}% OFF
                                    </p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <p>Min Spend <strong>${{ coupon.min_shopping }}</strong> to get
                                        <span
                                            v-if="coupon.d_percent !== null && coupon.d_percent !== undefined && coupon.d_percent !== 0">
                                            ${{ coupon.d_percent }}.00
                                        </span>
                                        <span
                                            v-if="coupon.d_fvalue !== null && coupon.d_fvalue !== undefined && coupon.d_fvalue !== 0">
                                            {{ coupon.d_fvalue }}%
                                        </span>
                                        OFF on total orders

                                    </p>
                                    <div class="copyCode">
                                        <p>Code: <strong>{{ coupon.promocode }}</strong></p>
                                        <button @click="copyCode(coupon.promocode)" class="btn_copy"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination">
                            <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
                            <button v-if="currentPage > 2" @click="changePage(1)">First</button>
                            <button v-for="page in visiblePages" :key="page" @click="changePage(page)"
                                :class="{ active: currentPage === page }">{{ page }}</button>
                            <span v-if="visiblePages.length < totalPages">...</span>
                            <button @click="changePage(totalPages)" v-if="currentPage !== totalPages">Last</button>
                            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <!-- Success message -->
        <div v-if="showSuccessMessage" class="success-message">
            Code copied successfully!
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
import NavbarSecond from '../components/NavbarSecond.vue';

export default {
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView,
        FlashSaleFilter,
        OfficialStoreProductList,

    },
    head: {
        title: 'Coupns',
    },
    data() {
        return {
            coupons: [],              // Array to store coupons data
            currentPage: 1,           // Current page number
            itemsPerPage: 18,         // Number of items per page
            paginationSize: 3,        // Number of pages to show in pagination
            coupcode: "",
            showSuccessMessage: false,
        };
    },
    computed: {
        paginatedCoupons() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.coupons.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.coupons.length / this.itemsPerPage);
        },
        // visiblePages() {
        //     const startPage = Math.max(1, this.currentPage - Math.floor(this.paginationSize / 2));
        //     const endPage = Math.min(this.totalPages, startPage + this.paginationSize - 1);

        //     let pages = [];
        //     for (let i = startPage; i <= endPage; i++) {
        //         pages.push(i);
        //     }
        //     return pages;
        // }
        visiblePages() {
            const startPage = Math.max(1, this.currentPage - Math.floor(this.paginationSize / 2));
            const endPage = Math.min(this.totalPages, startPage + this.paginationSize - 1);

            let pages = [];
            if (startPage > 1) {
                pages.push(1); // Add "First" page button
            }
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            return pages;
        }

    },
    mounted() {
        this.getData();
    },
    methods: {
        copyCode(code) {
            const tempInput = document.createElement('input');
            tempInput.value = code;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            this.showSuccessMessage = true;
            setTimeout(() => {
                this.showSuccessMessage = false;
            }, 3000); // Hide success message after 3 seconds

        },
        getData() {
            this.$axios.get(`/unauthenticate/readcoupons`).then(response => {
                this.coupons = response.data.reverse();
            });
        },
        changePage(page) {
            this.currentPage = page;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    }
}
</script>

<style>
.pagination {
    margin-top: 20px;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #900c3f;
    background-color: #f8f8f8;
    cursor: pointer;
}

.pagination button.active {
    background-color: #900c3f;
    color: #fff;
    border-color: #900c3f;
}

.pagination button:disabled {
    background-color: #ffaecd;
    color: #fff;
    border-color: #d69cb2;
}

/* Style the success message */
.success-message {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 99999999;
}
</style>
