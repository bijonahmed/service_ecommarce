<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <div class="transfer_box">
                        <div class="top_amnt">
                            <div class="row">
                                <div class="col-12">
                                    <h5>Found Transfer</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ac_box bg_green">
                                    <label for="" style="text-align: start;">From </label>
                                    <select name="" class="form-control" id="">
                                        <option value="" selected disabled>Select </option>
                                        <option value="">Affiliate </option>
                                        <option value="">MLM </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="ac_box bg_yellow">
                                    <i class="fa-regular fa-circle-down"></i>
                                    <p style="text-align: center; color: #000;font-size: 14px;">To</p>
                                    <h5>Main Wallet</h5>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="ac_box">
                                    <div class="amt_input">
                                        <input type="text" id="inputField" placeholder="Enter transfer Ammount" class="form-control"><button type="button" id="displayButton">All</button>
                                    </div>
                                    <p>Available Balance: $<span id="valueToDisplay">300</span></p>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn_cart confirm_btn" style="visibility: unset; padding: 10px 20px; margin-top: 10px;">Transfer</button>

                        <!-- confirm Modal  -->
                        <div class="confirm_modal">
                            <div class="popup_box_modal">
                                <div class="row">
                                    <div class="col-6">
                                        <h6>Transfer Money</h6>
                                    </div>
                                    <div class="col-6 text-end"><button type="button" class="btn_edit btn_close"><i class="fa-solid fa-x"></i></button></div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p class="py-3 text-center m-auto">Are You sure?</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <button class="btn_logins bg-success" type="button">Yes</button>
                                    <button class="btn_logins btn_close" type="button">Cancel</button>
                                </div>
                            </div>
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
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';
export default {
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
    },
    head: {
        title: 'Affliliate Transfer',
    },
}
</script>
