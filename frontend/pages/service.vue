<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <section class="main_content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="service_title">
                        <h2>Discover Our new service </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="service_ads">
                        <img src="/images/Slider_fold.jpg" class="img-fluid" alt="">
                        <div class="service_info_box">
                            <h3>Amar Jobs</h3>
                            <h5>Find your desire Job</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus dignissimos adipisci optio dolore fugit aut minus, ipsam, quia ipsum necessitatibus esse, ut perspiciatis officia nobis natus quae nesciunt iure.</p>
                            <a href="#jobs">Find Now</a>
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
import $ from 'jquery';
import NavbarSecond from '../components/NavbarSecond.vue';
export default {
    components: {        
        NavbarSecond,
    },
    head: {
        title: 'Service',
    },

}
</script>
