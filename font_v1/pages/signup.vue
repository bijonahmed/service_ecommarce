<template>
    <div>
        <div class="container ">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-8 me-auto">

                            <div class="login_option_box">
                                <div class="logTitle">
                                    <h2>Sign Up</h2>
                                    <p>SignUp to register a new Account.</p>
                                </div>
                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                    enctype="multipart/form-data">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <div class="input_group">
                                            <input style="--i:0;" type="text" class="input" v-model="insertdata.name">
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <span class="text-danger d-flex" style="font-size: 12px;" v-if="errors.name">{{
                                            errors.name[0] }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Name</label>
                                        <div class="input_group">
                                            <input style="--i:0;" type="email" class="input" v-model="insertdata.email">
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <span style="font-size: 12px;" class="text-danger d-flex" v-if="errors.name">{{
                                            errors.email[0] }}</span>
                                    </div>


                                    <div class="form-group">
                                        <label>Invite Code</label>
                                        <div class="input_group">
                                            <input type="text" class="input" v-model="insertdata.invite_code">
                                            <i class="fa-solid fa-link"></i>
                                        </div>
                                        <span style="font-size: 12px;" class="text-danger d-flex">{{
                                            invidecodeError }}</span>
                                    </div>

                                    <div class="form-group">
                                        <label>Password</label>
                                        <div class="input_group">
                                            <input style="--i:1;" id="pass" type="password" class="input"
                                                v-model="insertdata.password">
                                            <i toggole="#pass" style="cursor: pointer;"
                                                class="fa-regular fa-eye-slash toggle-password"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Retype Password</label>
                                        <div class="input_group">
                                            <input style="--i:1;" id="repass" type="password" class="input"
                                                v-model="insertdata.password_confirmation">
                                            <i toggole="#repass" style="cursor: pointer;"
                                                class="fa-regular fa-eye-slash toggle-password"></i>
                                        </div>
                                        <span class="text-danger d-flex" style="font-size: 12px;" v-if="errors.name">{{
                                            errors.password[0] }}</span>
                                    </div>
                                    <!-- captcha  -->
                                    <br>

                                    <button type="submit" style="opacity: .8;" class="btn_login submit mt-2 ">Sign Up
                                    </button>
                                    <div class="social_login">
                                        <div>
                                            <h6 class="text-center">Allready have Account?<button type="button"
                                                    class="signIn">LogIn</button>
                                            </h6>
                                        </div>
                                        <!-- <div class="">
                                    <h5>Or SignUp with:</h5>
                                </div>
                                <div>
                                    <a href="#facebook"><img src="images/social/icons8-facebook.svg" alt=""></a>
                                    <a href="#google"><img src="images/social/icons8-google.svg" alt=""></a>
                                    <a href="#twitter"><img src="images/social/icons8-twitter.svg" alt=""></a>
                                </div> -->
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="loginpageImage">
                        <img src="/images/loginseller.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    head: {
        title: 'Create a new account',
    },
    data() {
        return {
            insertdata: {
                name: '',
                email: '',
                password: '',
                invite_code: '',
                password_confirmation: '',
            },

            login: {
                email: '',
                password: '',
            },
            notifmsg: '',
            invidecodeError: '',
            errors: {},
        }
    },
    mounted() {
        this.defaultLoading();
    },

    methods: {
        defaultLoading() {
            this.$nextTick(() => {
                $(".toggle-password").click(function () {
                    console.log("working");
                    $(this).toggleClass("fa-eye-slash fa-eye");
                    let input = $(this).parent().find("input"); // Declare the 'input' variable with 'let'
                    if (input.attr("type") == "password") {
                        input.attr("type", "text");
                    } else {
                        input.attr("type", "password");
                    }
                });
                $(".signIn").on("click", function () {
                    $(".log_sec").css({
                        transform: "translateX(-100%)",
                        "transition-duration": "1s",
                        opacity: "1",
                        filter: "blur(0px)",
                    });
                    $(".log_sec").addClass("inactive");

                    $(".sign_sec").css({
                        transform: "translateX(-100%)",
                        "transition-duration": "1s",
                        opacity: "0",
                        filter: "none",
                    });
                    $(".sign_sec").removeClass("inactive");
                    $(".sign_sec").addClass("active");
                });

                $(".sign_up").on("click", function () {
                    $(".log_sec").css({
                        transform: "translateX(0%)",
                        "transition-duration": "1s",
                        opacity: "0",
                        filter: "blur(3px)",
                    });
                    $(".log_sec").removeClass("inactive");
                    $(".log_sec").addClass("active");

                    $(".sign_sec").css({
                        transform: "translateX(0%)",
                        "transition-duration": "1s",
                        opacity: "1",
                    });
                    $(".sign_sec").addClass("inactive");
                });
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('name', this.insertdata.name);
            formData.append('email', this.insertdata.email);
            formData.append('password', this.insertdata.password);
            formData.append('invite_code', this.insertdata.invite_code);
            formData.append('password_confirmation', this.insertdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/register',
                formData, {
                headers
            }).then((response) => {

                const token = response.data.access_token;
                this.$auth.setUserToken(token);
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
                    title: "Signed in successfully"
                });
                this.$router.push('/');
                /*
                if (process.client) {
                    this.$router.push({
                        path: '/user/user-profile'
                    });
                 }
                */
            }).catch(error => {
                this.invidecodeError = error.response.data.error;
                console.log("code error: " + error.response.data.error);
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        //customerLogin
        async customerLogin() {
            try {

                const postData = {
                    email: this.login.email,
                    password: this.login.password,
                    // Add other parameters as needed
                };
                //console.log("==========login email:" +  this.login.email);
                //console.log("==========login password:" +  this.login.password);
                //return false; 
                let {
                    data
                } = await this.$axios.post('/auth/login', postData); //await this.login.post('/auth/login');
                await this.$auth.setUserToken(data.access_token);


                if (data.role_id === 3) {
                    return this.$router.push('/seller/seller-dashboard');
                } else if (data.role_id === 2) {
                    return this.$router.push('/user/user-profile');
                } else {
                    console.warn('Unsupported role_id:', data.role_id);
                }

            } catch (err) {
                console.log(err)
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
                    icon: "error",
                    title: "Creadentials dosen't match"
                });
            }
        },

    },

}
</script>