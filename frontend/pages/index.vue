<template>
<div id="_top">

    <body class="bgBackground mainContent">
        <TopBannarDesktopView />
        <LogoAndPayment />
        <Navbar />
        <!-- Main section start here  -->
        <section class="main_content  pt-2">
            <div class="container">
                <NavSlider />
                <CategoryPart />
                <TopSellingItem />
                <!-- <FlashSelling /> -->
                <DelasForYour />
                <CategorySliders />
                <OfficalStore/>
                

            </div>
        </section>
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <!-- footer part start here  -->
        <Footer />
        <!-- login popup  -->
        <LoginPopup />
    </body>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initCarousel();
        });
    },
    methods: {
        initCarousel() {
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                nav: true,
                dots: true,
                autoplay: true,
                navText: ['', ''],
                autoplayTimeout: 3000
                // Add more options as needed
            });
        },
        
    }
}
</script>

<style>
.bgBackground {
    background-color: #b077d8 !important;
}

.mainContent {
    /* background-image: url('/images/ECOMMERCE-cover-you-bg.jpeg'); */
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
}
</style>
