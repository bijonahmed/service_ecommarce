<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->
    <div class="loading-indicator" v-if="loading">
        <div class="loader-container">
            <center class="loader-text">Loading...</center>
            <img src="/loader/loader.gif" alt="Loader" />
        </div>
    </div>
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
                            <button class="nav-link active" id="pills-here-tab" data-bs-toggle="pill" data-bs-target="#seller_account" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Seller Account</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Business Information</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-warehouse" type="button" role="tab" aria-controls="pills-warehouse" aria-selected="false">WareHouse</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-return" type="button" role="tab" aria-controls="pills-return" aria-selected="false">Return Address</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Seller Account </h4>
                                        <button type="button" class="btn_edit" @click="sellerAccModal"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Update Seller Details </p>
                                                    <button type="button" class="btn-close btn_address_close" @click="sellerAccModalCls"></button>
                                                </div>
                                                <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                                    <div>
                                                        <label for="name">First Name</label>
                                                        <input type="text" class="form-control" v-model="userdata.first_name">
                                                        <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                                                    </div>
                                                    <div>
                                                        <label for="name">Last Name</label>
                                                        <input type="text" class="form-control" v-model="userdata.last_name">
                                                        <span class="text-danger" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                                                    </div>
                                                    <div>
                                                        <label for="">Email </label>
                                                        <input type="email" v-model="userdata.email" class="form-control">
                                                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                                    </div>
                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" class="form-control mobile_code" v-model="userdata.phone_number">
                                                        <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0] }}</span>

                                                    </div>
                                                    <div class="mt-3">
                                                        <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Seller ID</h5>
                                        <p>{{ userdata.id }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>First Name </h5>
                                        <p>{{ userdata.first_name }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Last Name </h5>
                                        <p>{{ userdata.last_name }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Email</h5>
                                        <p>{{ userdata.email }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Phone</h5>
                                        <p>{{ userdata.phone_number }}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Business Information </h4>
                                        <button type="button" class="btn_edit"><i class="fa-solid fa-pen" @click="businessInfoModal"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Update Business Information </p>
                                                    <button type="button" class="btn-close btn_address_close" @click="businessInfoModalCls"></button>
                                                </div>
                                                <form @submit.prevent="businessInfoupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                                    <div>
                                                        <label for="name" class="d-flex">Business Owner Name<p class="text-danger d-block">*</p></label>
                                                        <input type="text" class="form-control" v-model="userdata.business_owner_name">
                                                        <span class="text-danger" v-if="errors.business_owner_name"><small>{{ errors.business_owner_name[0] }}</small></span>
                                                    </div>

                                                    <div>
                                                        <label for="name" class="d-flex">Business Name<p class="text-danger d-block">*</p></label>
                                                        <input type="text" class="form-control" v-model="userdata.business_name">
                                                        <span class="text-danger" v-if="errors.business_name"><small>{{ errors.business_name[0] }}</small></span>
                                                    </div>

                                                    <div>
                                                        <label for="" class="d-flex">Business Registration Number <p class="text-danger d-block">*</p></label>
                                                        <input type="text" class="form-control" v-model="userdata.business_register_num">
                                                        <span class="text-danger" v-if="errors.business_register_num"><small>{{ errors.business_register_num[0] }}</small></span>
                                                    </div>

                                                    <div>
                                                        <label for="" class="d-flex">Business Address <p class="text-danger d-block">*</p></label>
                                                        <input type="text" class="form-control" v-model="userdata.business_address">
                                                        <span class="text-danger" v-if="errors.business_address"><small>{{ errors.business_address[0] }}</small></span>
                                                    </div>

                                                    <div class="mt-3">
                                                        <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Business Owner Name</h5>
                                        <p>{{ userdata.business_owner_name }}</p>
                                    </div>

                                    <div class="user_info">
                                        <h5>Business Name </h5>
                                        <p>{{ userdata.business_name }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Business Registration number</h5>
                                        <p>{{ userdata.business_register_num }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Address </h5>
                                        <p>{{ userdata.business_address }}</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-warehouse" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                                <div class="main_profile">
                                    <div class="user_details">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>WareHouse </h4>
                                            <button type="button" class="btn_edit" @click="whareHouseModal"><i class="fa-solid fa-pen"></i></button>
                                            <!-- profile update modal here  -->
                                            <div class="modal_address_here edit_div">
                                                <div class="address_form_modal">
                                                    <div class="d-flex justify-content-between">
                                                        <p>WareHouse Address </p>
                                                        <button type="button" class="btn-close btn_address_close" @click="whareHouseModalCls"></button>
                                                    </div>
                                                    <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                                        <div>
                                                            <label for="name">Address </label>
                                                            <input type="text" class="form-control" v-model="userdata.business_warehouse_address">
                                                        </div>
                                                        <div>
                                                            <label for="">Email </label>
                                                            <input type="email" class="form-control" v-model="userdata.business_email">
                                                        </div>
                                                        <div class="">
                                                            <label for="">Phone </label> <br>
                                                            <input type="text" class="form-control mobile_code" v-model="userdata.business_phone">
                                                        </div>

                                                        <div class="mt-3">
                                                            <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                        </div>

                                                    </form>
                                                </div>

                                            </div>
                                            <!-- modal end  -->
                                        </div>

                                        <div class="user_info">
                                            <h5>Address</h5>
                                            <p>{{ userdata.business_warehouse_address }}</p>

                                        </div>
                                        <div class="user_info">
                                            <h5>Email</h5>
                                            <p>{{ userdata.business_email }}</p>
                                        </div>
                                        <div class="user_info">
                                            <h5>Phone</h5>
                                            <p>{{ userdata.business_phone }}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-return" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Return Address </h4>
                                        <button type="button" class="btn_edit" @click="returnaddresspopup"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Return Address </p>
                                                    <button type="button" class="btn-close btn_address_close" @click="returnaddresspopupClose"></button>
                                                </div>
                                                <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                                    <div>
                                                        <label for="name">Full Name </label>
                                                        <input type="text" class="form-control" v-model="userdata.business_return_name">
                                                    </div>

                                                    <div>
                                                        <label for="">Email </label>
                                                        <input type="text" v-model="userdata.business_return_email" class="form-control">
                                                    </div>

                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" class="form-control" v-model="userdata.business_return_phone">
                                                    </div>
                                                    <div class="">
                                                        <label for="">Address </label> <br>
                                                        <input type="text" class="form-control" v-model="userdata.business_return_address">
                                                    </div>

                                                    <div class="mt-3">
                                                        <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Name</h5>
                                        <p>{{ userdata.business_return_name }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Address</h5>
                                        <p>{{ userdata.business_return_address }}</p>

                                    </div>
                                    <div class="user_info">
                                        <h5>Email</h5>
                                        <p>{{ userdata.business_return_email }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Phone</h5>
                                        <p>{{ userdata.business_return_phone }}</p>
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
        title: 'Seller Profile',
    },

    data() {
        return {
            loading: false,
            userdata: {
                id: '',
                first_name: '',
                last_name: '',
                name: '',
                email: '',
                phone_number: '',
                address: '',
                business_owner_name: '',
                business_name: '',
                business_register_num: '',
                business_address: '',
                //WareHouse Address
                business_warehouse_address: '',
                business_email: '',
                business_phone: '',
                //Return Address
                business_return_name: '',
                business_return_email: '',
                business_return_address: '',
                business_return_phone: '',

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
        this.defaultLoading();
    },
    methods: {
        businessInfoupdate() {
            const formData = new FormData();
            formData.append('business_owner_name', this.userdata.business_owner_name);
            formData.append('business_name', this.userdata.business_name);
            formData.append('business_register_num', this.userdata.business_register_num);
            formData.append('business_address', this.userdata.business_address);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateBusinessprofile',
                formData, {
                    headers
                }).then((res) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Business Info. has been successfully updated",
                    showConfirmButton: false,
                    timer: 1000
                });
                this.sellerAccModalCls();
                this.defaultLoading();

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        profileupdate() {
            const formData = new FormData();
            formData.append('first_name', this.userdata.first_name);
            formData.append('last_name', this.userdata.last_name);
            formData.append('phone_number', this.userdata.phone_number);
            formData.append('email', this.userdata.email);
            formData.append('business_warehouse_address', this.userdata.business_warehouse_address);
            formData.append('business_email', this.userdata.business_email);
            formData.append('business_phone', this.userdata.business_phone);
            formData.append('business_return_name', this.userdata.business_return_name);
            formData.append('business_return_email', this.userdata.business_return_email);
            formData.append('business_return_address', this.userdata.business_return_address);
            formData.append('business_return_phone', this.userdata.business_return_phone);

            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateprofile',
                formData, {
                    headers
                }).then((res) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your profile has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.sellerAccModalCls();
                this.defaultLoading();

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },
        async defaultLoading() {

            this.loading = true;
            await this.$axios.post(`/auth/me`).then(response => {
                    // Seller Account Info
                    this.userdata.id = response.data.id;
                    this.userdata.first_name = response.data.first_name;
                    this.userdata.last_name = response.data.last_name;
                    this.userdata.name = response.data.name;
                    this.userdata.email = response.data.email;
                    this.userdata.phone_number = response.data.phone_number;
                    this.userdata.address = response.data.address;
                    //Business Information 
                    this.userdata.business_owner_name = response.data.business_owner_name;
                    this.userdata.business_name = response.data.business_name;
                    this.userdata.business_register_num = response.data.business_register_num;
                    this.userdata.business_address = response.data.business_address;
                    //WareHouse Address
                    this.userdata.business_warehouse_address = response.data.business_warehouse_address;
                    this.userdata.business_email = response.data.business_email;
                    this.userdata.business_phone = response.data.business_phone;
                    //Return Address
                    this.userdata.business_return_name = response.data.business_return_name;
                    this.userdata.business_return_email = response.data.business_return_email;
                    this.userdata.business_return_address = response.data.business_return_address;
                    this.userdata.business_return_phone = response.data.business_return_phone;

                    console.log(response.data);

                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },

        async loadingOrders() {
            const response = await this.$axios.get(`/order/getOrder`);
            this.orders = response.data.orderdata;

        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            });
        },
        logout() {
            this.$auth.logout();
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
        returnaddresspopup() {
            $(".modal_address_here").fadeIn();
        },

        returnaddresspopupClose() {
            $(".modal_address_here").fadeOut();
        },
        whareHouseModal() {
            $(".modal_address_here").fadeIn();
        },

        whareHouseModalCls() {
            $(".modal_address_here").fadeOut();
        },
        businessInfoModal() {
            $(".modal_address_here").fadeIn();
        },
        businessInfoModalCls() {
            $(".modal_address_here").fadeOut();
        },
        sellerAccModal() {
            $(".modal_address_here").fadeIn();
        },
        sellerAccModalCls() {
            $(".modal_address_here").fadeOut();
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
