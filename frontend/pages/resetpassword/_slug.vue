<template>
<div>
    <span style="background-image: url('/images/login_bg.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 100vh;
          overflow: hidden;">
        <div class="container">
            <div class="row d-flex align-item-center " style="height: 100vh;">
                <div class="col-lg-4 col-md-6 m-auto in_row ">
                    <div class="login_section">
                        <div class="row py-4" style="position: absolute; top: 20px;left: 20px;z-index: 99;">
                            <div class="col-12 text-start align-item-start">
                                <Nuxt-link to="/"><i class="fa-solid fa-chevron-left"></i></Nuxt-link>
                            </div>
                        </div>
                        <div class="logSec">
                            <div>
                                <h2>Reset Password</h2>
                                <p>Enter Your Email Address</p>
                            </div>
                            <form @submit.prevent="updatePassword()" class="forms-sample" enctype="multipart/form-data">
                                <center>
                                    <h4>{{ success }}</h4>
                                </center>
                                <input type="hidden" v-model="encryptext" />
                                <div class="group">
                                    <input style="--i:0;" type="password" class="input" v-model="forgetPass.password">
                                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Password</label>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>

                                <div class="group">
                                    <input style="--i:0;" type="password" class="input" v-model="forgetPass.password_confirmation">
                                    <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Confirm Password</label>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <button type="submit" style="opacity: .8;" class="btn_login submit mt-2 ">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },

    head: {
        title: 'Reset Password',
    },

    data() {
        return {
            forgetPass: {
                password: '',
                password_confirmation: '',
            },

            notifmsg: '',
            encryptext: '',
            invidecodeError: '',
            success: '',
            errors: {},
            hostname: '',
        }
    },

    mounted() {
        this.fetchData();
    },

    methods: {

        async updatePassword() {
            try {
                const postData = {
                    password: this.forgetPass.password,
                    password_confirmation: this.forgetPass.password_confirmation,
                    reset_token: this.encryptext,
                    // Add other parameters as needed
                };

                let {
                    data
                } = await this.$axios.post('/unauthenticate/updatePassword', postData);
                console.log("response:" + data);
                this.success = data;

            } catch (error) {
                this.invidecodeError = error.response.data.error;
                console.log("code error: " + error.response.data.error);

                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            }

        },

        async fetchData() {
            this.encryptext = this.$route.params.slug; //this.$route.query.slug;

            // const postData = {
            //     email: this.$route.params.slug,
            // };
            // let response = await this.$axios.post('/unauthenticate/getresetPasswords', postData);
            // let data = response.data; // Assuming the data you need is in the response
            // console.log("success");
            // Handle the response data as needed
        }

    }

}
</script>

<style scoped>
.logSec {
    width: 100%;
    /* transition: .8s all ease-in-out; */
    min-width: 100%;
    animation: .4s fadeShow linear;
}

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
