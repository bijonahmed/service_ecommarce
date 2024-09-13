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
                            <cennter>
                                <h4>{{ succmsg }}</h4>
                            </cennter>
                            <div>
                                <h2>Forget Password</h2>

                                <p>Enter Your Email Address</p>
                            </div>
                            <form @submit.prevent="forgetPassword()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                <div class="group">
                                    <input style="--i:0;" type="email" class="input" v-model="forgetPass.email">
                                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email Address</label>
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
export default {
    head: {
        title: 'Forget Password',
    },

    data() {
        return {
            forgetPass: {
                email: '',
            },
            notifmsg: '',
            invidecodeError: '',
            errors: {},
            hostname: '',
        }
    },
    notifmsg: '',
    invidecodeError: '',
    succmsg: '',
    errors: {},
    methods: {

        async forgetPassword() {
            //this.hostname = window.location.hostname;
            const hostname = window.location.hostname;
            // console.log(hostname);

            try {
                const postData = {
                    email: this.forgetPass.email,
                    hostname: hostname
                };
                let response = await this.$axios.post('/unauthenticate/forgetpassword', postData);
                let data = response.data; // Assuming the data you need is in the response
                console.log(response);
                this.succmsg = "We received a request to reset your password. Click the link below to reset it. If you didn't request this, you can safely ignore this email";
                // Handle the response data as needed

            } catch (error) {
                console.error(error);

                if (error.response) {
                    console.error("Server responded with error status:", error.response.status);

                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }

                    this.invidecodeError = error.response.data.error;
                    console.error("Code error:", error.response.data.error);
                } else if (error.request) {
                    console.error("No response received from the server");
                } else {
                    console.error("Error setting up the request:", error.message);
                }
            }

        },

    },

}
</script>

<style scoped>
.logSec {
    width: 100%;
    /* transition: .8s all ease-in-out; */
    min-width: 100%;
    animation: .4s fadeShow linear;
}
</style>
