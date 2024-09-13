<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <NavbarSecond/>
    <!-- Main section start here  -->
    <center>
        <div class="loading-indicator" v-if="loading">
            <div class="loader-container">
                <center class="loader-text">Loading...</center>
                <img src="/loader/loader.gif" alt="Loader" />
            </div>
        </div>
    </center>
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
                            <button class="nav-link active" id="pills-here-tab" data-bs-toggle="pill" data-bs-target="#seller_account" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Change Photos</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login Information</button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-ads-tab" data-bs-toggle="pill" data-bs-target="#pills-ads" type="button" role="tab" aria-controls="pills-ads" aria-selected="false">Business Pages Banner Setting</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                            <div class="main_profile">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h4>Profile image and Logo </h4>
                                </div>
                                <form @submit.prevent="updateLogo()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div>
                                                <h6>Preview Image</h6>
                                                <div>
                                                    <img :src="profileLogo" alt="Profile Logo" class="img-thumbnail custom-image-effect" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div>
                                                <div>
                                                    <label for="">Upload Profile Image</label>
                                                    <input id="uploadFile" type="file" ref="file" @change="onFileSelected" class="img form-control uploadFile " accept="image/gif, image/jpeg, image/png" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                </form>
                                <hr />
                                <form @submit.prevent="updateLogo()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div>
                                                <h6>Business Preview Image</h6>
                                                <div>
                                                    <img :src="businessLogo" alt="Business Logo" class="img-thumbnail custom-image-effect" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div>
                                                <div>
                                                    <label for="">Upload Business Image</label>
                                                    <input id="uploadFile1" type="file" ref="business_logo" @change="onFileSelectedbusiness" class="img form-control uploadFile1" accept="image/gif, image/jpeg, image/png" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                </form>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Login Information </h4>
                                        <button type="button" class="btn_edit" @click="popupOpen"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Login Information </p>
                                                    <button type="button" class="btn-close btn_address_close" @click="popupOpenClose"></button>
                                                </div>
                                                <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                                    <div>
                                                        <label for="name" class="d-flex">Email <p class="text-danger d-block">*</p></label>
                                                        <input type="text" v-model="userdata.email" class="form-control">
                                                        <span class="text-danger" v-if="errors.email"><small>{{ errors.email[0] }}</small></span>
                                                    </div>
                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" class="form-control mobile_code" v-model="userdata.phone_number">
                                                        <span class="text-danger" v-if="errors.phone_number"><small>{{ errors.phone_number[0] }}</small></span>
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
                                        <h5>Email</h5>
                                        <p>{{ userdata.email }}</p>
                                    </div>

                                    <div class="user_info">
                                        <h5>Phone number </h5>
                                        <p>{{ userdata.phone_number }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Password <nuxt-link to="/seller/change-password" class="btn_edit"><i class="fa-solid fa-pen"></i></nuxt-link>
                                        </h5>
                                        <p>***********</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-ads" role="tabpanel" aria-labelledby="pills-ads-tab">
                            <div class="main_profile">
                                <form @submit.prevent="topBannerUpload()" ref="topBannerFrm" class="forms-sample" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div>
                                                <h6>Top Banner</h6>
                                                <div>
                                                    <center><span class="text-danger" v-if="errors.top_banner_img"><small>{{ errors.top_banner_img[0] }}</small></span></center>
                                                    <div v-if="topbannerimg">
                                                        <img :src="topbannerimg" alt="Top Banner Images" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                    <div v-else>
                                                        <img src="/images/Slider_fold.jpg" alt="Top Banner Images" class="img-thumbnail custom-image-effect" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-10">
                                            <div>
                                                <div>
                                                    <label for="" style="color:red; font-size: 10px;"><small>Top Banner (Must upload size W:1168px H:384px)</small></label>
                                                    <input id="top_banner_img" type="file" ref="top_banner_img" @change="onFileSelecteTopBanner" class="img form-control top_banner_img" accept="image/gif, image/jpeg, image/png" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                </form>
                                <hr />

                                <div class="row">
                                    <div class="col-md-4">
                                        <form @submit.prevent="banner1Upload()" ref="banner1Frm" class="forms-sample" enctype="multipart/form-data">
                                            <div>
                                                <h6>Banner-1</h6>
                                                <div>
                                                    <center><span class="text-danger" v-if="errors.banner1"><small>{{ errors.banner1[0] }}</small></span></center>
                                                    <div v-if="banner1">
                                                        <img :src="banner1" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                    <div v-else>
                                                        <img src="/images/images_global.jpg" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>

                                                </div>
                                                <label for="" style="color:red; font-size: 10px;"><small>Must upload images size (W:572px H:250px)</small></label>
                                                <input id="uploadFile1" type="file" ref="banner1" @change="onFileSelectebanner1" class="img form-control uploadFile1" accept="image/gif, image/jpeg, image/png" />
                                                <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="col-md-4">
                                        <form @submit.prevent="banner2Upload()" ref="banner2Frm" class="forms-sample" enctype="multipart/form-data">
                                            <div>
                                                <h6>Banner-2</h6>
                                                <div>
                                                    <center><span class="text-danger" v-if="errors.banner2"><small>{{ errors.banner2[0] }}</small></span></center>
                                                    <div v-if="banner2">
                                                        <img :src="banner2" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                    <div v-else>
                                                        <img src="/images/images_global.jpg" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                </div>
                                                <label for="" style="color:red; font-size: 10px;"><small>Must upload images size (W:572px H:250px)</small></label>
                                                <input id="uploadFile2" type="file" ref="banner2" @change="onFileSelectebanner2" class="img form-control uploadFile2" accept="image/gif, image/jpeg, image/png" />
                                                <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="col-md-4">
                                        <form @submit.prevent="banner3Upload()" ref="banner3Frm" class="forms-sample" enctype="multipart/form-data">
                                            <div>
                                                <h6>Banner-3</h6>
                                                <div>
                                                    <center><span class="text-danger" v-if="errors.banner3"><small>{{ errors.banner3[0] }}</small></span></center>
                                                    <div v-if="banner3">
                                                        <img :src="banner3" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                    <div v-else>
                                                        <img src="/images/images_global.jpg" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                </div>
                                                <label for="" style="color:red; font-size: 10px;"><small>Must upload images size (W:572px H:250px)</small></label>
                                                <input id="uploadFile2" type="file" ref="banner3" @change="onFileSelectebanner3" class="img form-control uploadFile2" accept="image/gif, image/jpeg, image/png" />
                                                <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <hr />

                                <div class="row">
                                    <div class="col-md-6">
                                        <form @submit.prevent="banner4Upload()" ref="banner4Frm" class="forms-sample" enctype="multipart/form-data">
                                            <div>
                                                <h6>Banner-4</h6>
                                                <div>
                                                    <center><span class="text-danger" v-if="errors.banner4"><small>{{ errors.banner4[0] }}</small></span></center>
                                                    <div v-if="banner4">
                                                        <img :src="banner4" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                    <div v-else>
                                                        <img src="/images/images_global.jpg" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                </div>
                                                <label for="" style="color:red; font-size: 10px;"><small>Must upload images size (W:572px H:250px)</small></label>
                                                <input id="uploadFile2" type="file" ref="banner4" @change="onFileSelectebanner4" class="img form-control uploadFile2" accept="image/gif, image/jpeg, image/png" />
                                                <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="col-md-6">
                                        <form @submit.prevent="banner5Upload()" ref="banner5Frm" class="forms-sample" enctype="multipart/form-data">
                                            <div>
                                                <h6>Banner5</h6>
                                                <div>
                                                    <center><span class="text-danger" v-if="errors.banner5"><small>{{ errors.banner5[0] }}</small></span></center>
                                                    <div v-if="banner5">
                                                        <img :src="banner5" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                    <div v-else>
                                                        <img src="/images/images_global.jpg" alt="Upload Banner Image" class="img-thumbnail custom-image-effect" />
                                                    </div>
                                                </div>
                                                <label for="" style="color:red; font-size: 10px;"><small>Must upload images size (W:572px H:250px)</small></label>
                                                <input id="uploadFile2" type="file" ref="banne5" @change="onFileSelectebanner5" class="img form-control uploadFile2" accept="image/gif, image/jpeg, image/png" />
                                                <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <hr />

                                <form @submit.prevent="updateYoutubeAds()" id="videofrm" ref="videofrm" class="forms-sample" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div>
                                                <h6>Video </h6>
                                                <div class="video_ads">
                                                    <div v-if="file_name">
                                                        <iframe :src="`https://www.youtube.com/embed/${file_name}`" frameborder="0"></iframe>
                                                    </div>
                                                    <div v-else>
                                                        <iframe src="https://www.youtube.com/embed/0pTqynKiki4" frameborder="0"></iframe>
                                                    </div>
                                                </div>
                                                <input type="text" class="form-control w-100" placeholder="Youtube link" v-model="file_name" />
                                                <center><span class="text-danger" v-if="errors.file_name"><small>{{ errors.file_name[0] }}</small></span></center>
                                                <button type="submit" class="btn_cart w-100" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                            </div>
                                        </div>

                                    </div>

                                </form>

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
        title: 'Account Setting',
    },

    data() {
        return {
            loading: false,
            top_banner_img: null,
            banner1: '',
            banner2: '',
            banner3: '',
            banner4: '',
            banner5: '',
            file_name: '',
            youtube_videos: '',
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
            topbannerimg: '',
            profileLogo: '',
            businessLogo: '',
            message: '',
            orders: [],
            errors: {},

        }
    },
    mounted() {
        this.defaultLoading();
        this.defalutLoadingSellerAds();
    },
    methods: {

        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },

        onFileSelectedbusiness() {
            this.business_logo = this.$refs.business_logo.files[0];
        },

        onFileSelecteTopBanner(event) {
            const file = event.target.files[0];
            this.top_banner_img = file;
        },

        onFileSelectebanner1(event) {
            const file = event.target.files[0];
            this.banner1 = file;
        },

        onFileSelectebanner2(event) {
            const file = event.target.files[0];
            this.banner2 = file;
        },

        onFileSelectebanner3(event) {
            const file = event.target.files[0];
            this.banner3 = file;
        },

        onFileSelectebanner4(event) {
            const file = event.target.files[0];
            this.banner4 = file;
        },

        onFileSelectebanner5(event) {
            const file = event.target.files[0];
            this.banner5 = file;
        },

        updateYoutubeAds() {

            const formData = new FormData();
            formData.append('file_name', this.file_name);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updateYAds',
                formData, {
                    headers
                }).then((res) => {

                this.file_name = res.data.file_name;
                // Reset the form
                // this.$refs.videofrm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Video has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        banner5Upload() {
            const formData = new FormData();
            formData.append('banner5', this.banner5);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updatebannerFive',
                formData, {
                    headers
                }).then((res) => {

                this.banner5 = res.data.banner5;
                // Reset the form
                this.$refs.banner5Frm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Banner-5 has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        banner4Upload() {
            const formData = new FormData();
            formData.append('banner4', this.banner4);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updatebannerFour',
                formData, {
                    headers
                }).then((res) => {

                this.banner4 = res.data.banner4;
                // Reset the form
                this.$refs.banner4Frm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Banner-4 has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        banner3Upload() {
            const formData = new FormData();
            formData.append('banner3', this.banner3);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updatebannerThree',
                formData, {
                    headers
                }).then((res) => {

                this.banner3 = res.data.banner3;
                // Reset the form
                this.$refs.banner3Frm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Banner -3 has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        banner2Upload() {
            const formData = new FormData();
            formData.append('banner2', this.banner2);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updatebannerTwo',
                formData, {
                    headers
                }).then((res) => {

                this.banner2 = res.data.banner2;
                // Reset the form
                this.$refs.banner2Frm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Banner -2 has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        banner1Upload() {
            const formData = new FormData();
            formData.append('banner1', this.banner1);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updatebannerOne',
                formData, {
                    headers
                }).then((res) => {

                this.banner1 = res.data.banner1;
                // Reset the form
                this.$refs.banner1Frm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Banner -1 has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        topBannerUpload() {
            const formData = new FormData();
            formData.append('top_banner_img', this.top_banner_img);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/user/updateTopbanner',
                formData, {
                    headers
                }).then((res) => {

                this.topbannerimg = res.data.top_banner_img;
                // Reset the form
                this.$refs.topBannerFrm.reset();

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "Top Banner has been successfully updated",
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        updateLogo() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('business_logo', this.business_logo);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateLogo',
                formData, {
                    headers
                }).then((res) => {

                this.profileLogo = res.data.profileLogo;
                this.businessLogo = res.data.businessLogo;
                this.message = res.data.message;

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logo has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        profileupdate() {
            const formData = new FormData();
            formData.append('phone_number', this.userdata.phone_number);
            formData.append('email', this.userdata.email);

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
                this.popupOpenClose();
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
                    this.userdata.email = response.data.email;
                    this.userdata.phone_number = response.data.phone_number;
                    this.profileLogo = response.data.profileLogo;
                    this.businessLogo = response.data.businessLogo;
                    this.message = response.data.message;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });
        },

        async defalutLoadingSellerAds() {
            this.loading = true;
            await this.$axios.post(`/user/getSellerAds`).then(response => {
                    console.log("-default loading: --" + response.data.file_name);
                    this.topbannerimg = response.data.top_banner_img;
                    this.banner1 = response.data.banner1;
                    this.banner2 = response.data.banner2;
                    this.banner3 = response.data.banner3;
                    this.banner4 = response.data.banner4;
                    this.banner5 = response.data.banner5;
                    this.file_name = response.data.file_name;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    //  this.loading = false; // Hide loader after response
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
        popupOpen() {
            $(".modal_address_here").fadeIn();
        },

        popupOpenClose() {
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

.custom-image-effect {
    transition: box-shadow 0.3s ease-in-out;
}

.custom-image-effect:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
