<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->
    <section class="main_content">
        <div class="container">
            <!-- <PhoneTables />
                <LimitedStokDetails />
                <PhoneDeals /> -->
            <!-- <TopDeals /> -->
            <!-- <CategoryMultipleProduct />
            <ExtraDiscount /> -->
            <CategoryProductFilter :receivedSlug="paramSlug" />
            <!-- <CategoryRecentView /> -->
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
import CategoryProductFilter from '~/components/CategoryProductFilterGrid.vue';
import ExtraDiscount from '~/components/ExtraDiscount.vue';
import CategoryMultipleProduct from '~/components/CategoryMultipleProduct.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';

export default {
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        CategoryProductFilter,
        ExtraDiscount,
        CategoryMultipleProduct
    },
    head: {
        title: 'Category Grid View',
    },
    data() {
        return {
            paramSlug: null, // Initialize paramSlug with the value you want to pass
        };
    },
    mounted() {
        this.paramSlug = this.$route.query.slug;
        // alert("Grid" + paramSlug);

        if (process.client) {
            $(document).ready(function () {
                $(".filter_btn").on('click', function () {
                    $(".filter_modal").show();
                });
                $(".filter_close").on('click', function () {
                    $(".filter_modal").hide();
                });
            })
            // Now you can work with myElement
        }
    }
}
</script>
