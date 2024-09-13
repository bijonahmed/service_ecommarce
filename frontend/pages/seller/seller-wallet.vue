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
                    <div class="key_summary mt-3">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="count_box">
                                    <h5>Withdrawal Ammount <i class="fa-solid fa-circle-exclamation"></i></h5>
                                    <h4>0 <span style="font-size: 12px;">TK</span></h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="count_box">
                                    <h5>Ammount Under Review <i class="fa-solid fa-circle-exclamation"></i></h5>
                                    <h4>$0 <span style="font-size: 12px;"></span></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Search date" onfocus="(this.type='date')">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Transsection Number">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Order Number">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="submit" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="main_profile">
                        <div class="user_details">
                            <div class="d-flex align-items-center justify-content-between">
                                <h4>Transection History</h4>
                                <!-- <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button> -->
                            </div>
                            <table class="table" id="MyTableID">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Transection type</th>
                                        <th>Transection Number</th>
                                        <th>Order Number</th>
                                        <th>Details comment</th>
                                        <th>Ammount</th>
                                        <th>VAT</th>
                                        <th>WHT</th>
                                        <th>Statement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> $100.00 </td>
                                        <td> $100.00 </td>
                                        <td> None</td>
                                        <td>None </td>
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
        title: 'Wallet',
    },

}
</script>
