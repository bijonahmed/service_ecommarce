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
                    <div class="col-md-9 ps-md-0">
                        <div class="review_items rounded-0">
                            <div class="row">
                                <div class="col-12">
                                    <div class="to_review rounded-0">
                                        <div class="review_title">
                                            <h3>To Reviews</h3>
                                        </div>
                                        <div class="revies_list">
                                            <ul>
                                                <li>
                                                    <div class="d-flex align-item-center">
                                                        <div>
                                                            <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                        </div>
                                                        <div>
                                                            <h1>
                                                                <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                            </h1>
                                                            <p>Color: Multiple color </p>
                                                        </div>
                                                    </div>
                                                    <div class="text-center">
                                                        <button class="btn_cart add_review"
                                                            style="visibility: unset; width: fit-content;">Add Review
                                                        </button>
                                                    </div>

                                                    <!-- modal -->
                                                    <div class="add_review_modal add_r">
                                                        <div class="review_box">
                                                            <div class="d-flex justify-content-between align-item-center">
                                                                <h6>Add review</h6>
                                                                <button type="button" class="btn_close_modal"><i
                                                                        class="fa-solid fa-x"></i></button>
                                                            </div>
                                                            <div>
                                                                <form action="">
                                                                    <div class="mb-2">
                                                                        <select name="" class="form-control" id="">
                                                                            <option value="">1 Star</option>
                                                                            <option value="">2 Star</option>
                                                                            <option value="">3 Star</option>
                                                                            <option value="">4 Star</option>
                                                                            <option value="">5 Star</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>

                                                                        <textarea name="" class="form-control" cols="30"
                                                                            rows="4"></textarea>
                                                                    </div>
                                                                    <button type="button"
                                                                        class="btn_confirm">Submit</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- modal end  -->
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="to_review  rounded-0">
                                        <div class="review_title">
                                            <h3>History</h3>
                                        </div>
                                        <div class="revies_list rounded-0">
                                            <ul>
                                                <li>
                                                    <div class="d-flex align-item-center">
                                                        <div>
                                                            <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                        </div>
                                                        <div>
                                                            <h1>
                                                                <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                            </h1>
                                                            <p>Color: Multiple color </p>
                                                        </div>
                                                    </div>
                                                    <div class="review_text">
                                                        <div>
                                                            <div class="rating" bis_skin_checked="1">
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star "></i>
                                                            </div>
                                                            <p>good quality</p>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="update_review">Update
                                                                Review</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-item-center">
                                                        <div>
                                                            <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                        </div>
                                                        <div>
                                                            <h1>
                                                                <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                            </h1>
                                                            <p>Color: Multiple color </p>
                                                        </div>
                                                    </div>
                                                    <div class="review_text">
                                                        <div>
                                                            <div class="rating" bis_skin_checked="1">
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star "></i>
                                                            </div>
                                                            <p>good quality</p>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="update_review">Update
                                                                Review</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-item-center">
                                                        <div>
                                                            <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                        </div>
                                                        <div>
                                                            <h1>
                                                                <Nuxt-link to="/product-details">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Vero, eum.</Nuxt-link>
                                                            </h1>
                                                            <p>Color: Multiple color </p>
                                                        </div>
                                                    </div>
                                                    <div class="review_text">
                                                        <div>
                                                            <div class="rating" bis_skin_checked="1">
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star checked"></i>
                                                                <i class="fa fa-star "></i>
                                                            </div>
                                                            <p>good quality</p>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="update_review">Update
                                                                Review</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- modal -->
        <div class="add_review_modal up_r">
            <div class="review_box">
                <div class="d-flex justify-content-between align-item-center">
                    <h6>Add review</h6>
                    <button type="button" class="btn_close_modal"><i class="fa-solid fa-x"></i></button>
                </div>
                <div>
                    <form action="">
                        <div class="mb-2">
                            <select name="" class="form-control" id="">
                                <option value="">1 Star</option>
                                <option value="">2 Star</option>
                                <option value="">3 Star</option>
                                <option value="">4 Star</option>
                                <option value="">5 Star</option>
                            </select>
                        </div>
                        <div>
                            <textarea name="" id="" class="form-control" cols="30" rows="4">good quality</textarea>
                        </div>
                        <button type="button" class="btn_confirm"
                            style="background-color: #C70039; color: #fff;">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- modal end  -->

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
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import userSidebar from '~/components/userSidebar.vue'
import navbarSecond from '../../components/navbarSecond.vue';

export default {
    middleware: 'IsUser',
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'My Reviews',
    },
    mounted() {
        this.addReview();
    },
    methods: {
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
        addReview() {
            $(".add_review").on("click", function () {
                $(".add_r").fadeIn();
            });
            $(".btn_close_modal").on("click", function () {
                $(".add_r").fadeOut();
            });

            $(".update_review").on("click", function () {
                $(".up_r").fadeIn();
            });
            $(".btn_close_modal").on("click", function () {
                $(".up_r").fadeOut();
            });
        }
    }
}
</script>
