<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <section class="main_content ">
        <div class="container">
            <div class="row mt-2">
                <div class="col-md-6 m-auto text-center">
                    <div class="alert alert-warning" role="alert" style="
                padding: 5px;
                font-size: 12px;
            ">
                        <i class="fa-solid fa-circle-exclamation"></i> Collect payment voucher & get extra savings on your purchase!
                    </div>
                </div>
            </div>

            <!-- payment methods  -->
            <div class="row">
                <div class="col-lg-8">
                    <div class="payment_medthods">
                        <div class="row">
                            <div class="col-12">
                                <h3>Select Payment Method</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cards btn_high">
                                        <i class="fa-brands fa-cc-visa"></i>
                                        <h6>Pay with Card</h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup card_popups">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <input type="text" class="form-control" placeholder="Card Number">
                                                <input type="text" class="form-control" placeholder="Name On Card">
                                                <div class="row">
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="Expiry Date "></div>
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="CVV"></div>
                                                </div>
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Pay Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cashs btn_high">
                                        <i class="fa-solid fa-money-bill"></i>
                                        <h6>Cash On Delivery </h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup cashs_pop">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Confirm Order</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cards btn_high">
                                        <i class="fa-brands fa-cc-visa"></i>
                                        <h6>Pay with Card</h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup card_popups">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <input type="text" class="form-control" placeholder="Card Number">
                                                <input type="text" class="form-control" placeholder="Name On Card">
                                                <div class="row">
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="Expiry Date "></div>
                                                    <div class="col-6"><input type="text" class="form-control" placeholder="CVV"></div>
                                                </div>
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Pay Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div class="method">
                                    <button type="button" class="cashs btn_high">
                                        <i class="fa-solid fa-money-bill"></i>
                                        <h6>Cash On Delivery </h6>
                                    </button>
                                    <!-- popup -->
                                    <div class="card_popup cashs_pop">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-6 ms-auto text-end"><button type="button" class="btn_edit card_close " style="border: none;"><i class="fa-solid fa-x" style="font-size: 12px;"></i></button></div>
                                            </div>
                                            <form action="">
                                                <button type="submit" class="btn_cart" style="visibility: unset; background-color: #900c3f;">Confirm Order</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="order_summary">
                        <h1>Order Summary</h1>
                        <div class="d-flex justify-content-between align-items-center">
                            <p>Subtotal (1 Items and shipping fee included)</p>
                            <p>110 TK</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h6>Toatal Ammount</h6>
                            <h6>110 TK</h6>
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
    comments:{
        NavbarSecond,
    },

    head: {
        title: 'Payment',
    },

}
</script>
