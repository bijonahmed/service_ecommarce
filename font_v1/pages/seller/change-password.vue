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
                    <br>
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <center>Change Password</center>
                            <form @submit.prevent="changePassword()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                <div class="row mb-3">
                                    <label for="inputEnterYourName" class="col-sm-3 col-form-label">Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" class="form-control password" v-model="passdata.password" id="password" placeholder="Password">
                                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Confirm Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" class="form-control password_confirmation" v-model="passdata.password_confirmation" id="password_confirmation" placeholder="Confirm Password">
                                        <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <label class="col-sm-3 col-form-label"></label>
                                    <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Submit</button>

                                </div>
                            </form>

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
        title: 'Change Password',
    },

    data() {
        return {
            loading: false,
            userdata: {
                id: '',
                email: '',
                phone_number: '',

            },
            passdata: {
                password: '',
                password_confirmation: '',
            },
            notifmsg: '',
            orders: [],
            errors: {},
        }
    },
    mounted() {

    },
    methods: {
        changePassword() {
            const formData = new FormData();
            formData.append('password', this.passdata.password);
            formData.append('password_confirmation', this.passdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updatePassword',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Password has been successfully updated",
                    showConfirmButton: false,
                    timer: 1000
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

    }
}
</script>

<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>
