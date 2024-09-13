<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->

    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="programme_form">
                    <form action="">
                        <h3>Register to Earn Commissions</h3>
                        <p>Sign up to Ecommerce Affiliate Program by enter your details below.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="group ">
                                    <input required="" type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>First Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="group">
                                    <input required="" type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required="" type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required="" type="password" id="password" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password </label>
                                <i class="fa-solid toggle-password fa-eye-slash"></i>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required="" type="password" id="password" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Confirm Password </label>
                                <i class="fa-solid toggle-password fa-eye-slash"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="group ">
                                    <select name="" id="" class="input">
                                        <option value="" disabled selected> Select Your Country</option>
                                        <option value="">Bangladesh</option>
                                        <option value="">Afganistan</option>
                                    </select>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="group">
                                    <input required="" type="text" class="input">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Phone Number </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h5>Select your Account Type:</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="ac_type">
                                    <input type="radio" hidden checked name="exampleCheck" id="exampleCheck1">
                                    <label for="exampleCheck1">
                                        <h6>Creator/Micro-Influencer</h6>
                                        <p>Starting 5K followers</p>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="ac_type">
                                    <input type="radio" hidden name="exampleCheck" id="exampleCheck2">
                                    <label for="exampleCheck2">
                                        <h6>Creator/Mega-Influencer</h6>
                                        <p>Starting 10K followers</p>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="ac_type">
                                    <input type="radio" hidden name="exampleCheck" id="exampleCheck3">
                                    <label for="exampleCheck3">
                                        <h6>Affiliate</h6>
                                        <p>individual & Business</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input required="" type="text" class="input">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Website/Social Media </label>
                            </div>
                        </div>
                        <div class="d-flex c_label">
                            <input type="checkbox" id="checkbox"><label class="" style="pointer-events: all; position: unset; color: #000;" for="checkbox">Agree with <a href="../pdf/sample-terms-conditions-agreement.pdf">terms & condition</a> </label>
                        </div>
                        <button class="btn_cart" style="visibility: unset;">Register</button>
                    </form>
                </div>

                <div class="row">
                    <div class="col-md-6 m-auto text-center">
                        <p class="sign_link">Allready Have account? <Nuxt-link to="/login">Login</Nuxt-link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- END Main Section here -->
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
</div>
</template>

    
<script>
import NavbarSecond from '../../components/NavbarSecond.vue';

export default {
    comments:{
        NavbarSecond,
    },
    head: {
        title: 'Affliliate Programe',
    },
}
</script>
