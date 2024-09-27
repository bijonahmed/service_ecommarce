<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">

            <OfficialStoreProductList />
            <ProductListFilterList />
            <RecentView />
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
import CategoryProductFilter from '~/components/CategoryProductFilter.vue';
import ExtraDiscount from '~/components/ExtraDiscount.vue';
import CategoryMultipleProduct from '~/components/CategoryMultipleProduct.vue';
import RecentView from '~/components/RecentView.vue';
import OfficialStoreProductList from '~/components/OfficialStoreProductList.vue';
import ProductListFilterList from '~/components/ProductListFilterList.vue';
import NavbarSecond from '../components/NavbarSecond.vue';
export default {
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        CategoryProductFilter,
        ExtraDiscount,
        CategoryMultipleProduct,
        RecentView,
        OfficialStoreProductList,
        ProductListFilterList
    },
    head: {
        title: 'Product List',
    },
    mounted() {
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
