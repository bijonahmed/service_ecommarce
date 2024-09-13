<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SellerLeftsidebar />

                </div>
                <div class="col-md-8">
                    <ul class="tab_btns nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-here-tab" data-bs-toggle="pill" data-bs-target="#seller_account" type="button" role="tab" aria-controls="pills-home" aria-selected="true">In Progress</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Close </button>
                        </li>
                    </ul>
                    <div class="returns_alert">
                        <div class="alert alert-primary"> <i class="fa-solid fa-exclamation"></i>Ecommerce Seller Center is unable to generate a report for returns that happened prior to 20 June 2022.</div>
                    </div>
                    <div class="days_filter">
                        <div class="row">
                            <div class="col-12">
                                <div class="only_days">
                                    <button type="button">Today</button>
                                    <button type="button">Yesterday</button>
                                    <button type="button">7 Days</button>
                                    <button type="button">30 Days</button>
                                    <div class="d-flex">
                                        <input type="text" class="" onfocus="(this.type='date')" placeholder="Start Date">
                                        <input type="text" class="" onfocus="(this.type='date')" placeholder="End Date">
                                        <button type="button">OK</button>
                                    </div>
                                </div>
                                <div class="return_filter">
                                    <form action="">
                                        <div style="width: 100%;">
                                            <select name="" id="">
                                                <option value="" selected disabled>Return status </option>
                                                <option value="">Return Initiated to seller</option>
                                                <option value="">Buyer initiated returns </option>
                                                <option value="">Pickup by courier</option>
                                                <option value="">Pending Ecommerce Inspection</option>
                                            </select>
                                        </div>
                                        <div class="ms-2 d-flex align-items-center" style="width: 100%;">
                                            <input type="text" placeholder="Order Id">
                                            <button type="button"><i class="fa-solid fa-magnifying-glass"></i> search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex">
                                    <button type="button" class="tb2xl_btn btn_download">Export</button>
                                    <button type="button" class="btn_download">View History</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <!-- tab 1  -->
                        <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">

                            <div class="key_summary">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <div class="count_box">
                                            <h5>Order Under Review <i class="fa-solid fa-circle-exclamation"></i></h5>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <div class="count_box">
                                            <h5>Ammount Under Review <i class="fa-solid fa-circle-exclamation"></i></h5>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main_profile">
                                <div class="user_details">

                                    <table class="table" id="MyTableID">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Ammount</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                                <th>Comment</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>#99343</td>
                                                <td>230 TK</td>
                                                <td class="text-success ">Success</td>
                                                <td> Defective</td>
                                                <td>Please change my product </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <!-- pagination  -->
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <ul>
                                                    <li>
                                                        <a href="#"> prv </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="active"> 1 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> 2 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> 3 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> next </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- tab 2  -->
                        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="key_summary">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <div class="count_box">
                                            <h5>Product Return to seller <i class="fa-solid fa-circle-exclamation"></i></h5>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <div class="count_box">
                                            <h5>Product Returned to Warehouse <i class="fa-solid fa-circle-exclamation"></i></h5>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                        <div class="count_box">
                                            <h5>Lost & Damaged by Courier <i class="fa-solid fa-circle-exclamation"></i></h5>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between mb-3">

                                        <table class="table" id="MyTableID">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Ammount</th>
                                                    <th>Status</th>
                                                    <th>Reason</th>
                                                    <th>Comment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#99343</td>
                                                    <td>230 TK</td>
                                                    <td class=" text-warning">Process</td>
                                                    <td> Defective</td>
                                                    <td>Please change my product </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>
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
import SellerLeftsidebar from '~/pages/seller/seller-leftsidebar.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';

export default {
    middleware: 'IsSeller',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        SellerLeftsidebar,
    },
    head: {
        title: 'Return Product',
    },

}
</script>
