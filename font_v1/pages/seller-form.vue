<template>
    <div class="" style="
    background: #b077d8;
    background-image: url(../images/ECOMMERCE-cover-you-bg.jpg);
    background-position: top;
    margin-top: -25px;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 100vh;
  ">
    <div class="container my-4">
        <div class="row">
            <div class="col-md-6 m-auto ">
                <div class="logo">
                    <Nuxt-Link to="/" class="m-auto" style="font-size: 30px;">Ecommerce <i class="fa-regular fa-star"></i></Nuxt-Link>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="programme_form">
                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                        <h3>Register to Sale Your Product</h3>
                        <p>Sign up As A seller account.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="group ">
                                    <input type="text" class="input" v-model="insertdata.first_name" />
                                    <span class="text-danger" v-if="errors.first_name"><small>{{ errors.first_name[0] }}</small></span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>First Name</label>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="group">
                                    <input type="text" class="input" v-model="insertdata.last_name">
                                    <span class="text-danger" v-if="errors.last_name"><small>{{ errors.last_name[0] }}</small></span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.email">
                                <span class="text-danger" v-if="errors.email"><small>{{ errors.email[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="password" id="password" class="input" v-model="insertdata.password">
                                <span class="text-danger" v-if="errors.password"><small>{{ errors.password[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password </label>
                                <i class="fa-solid toggle-password fa-eye-slash"></i>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="password" id="repassword" class="input" v-model="insertdata.password_confirmation">
                                <span class="text-danger" v-if="errors.password_confirmation"><small>{{ errors.password_confirmation[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Confirm Password </label>
                                <i class="fa-solid toggle-password fa-eye-slash"></i>
                            </div>
                        </div>
                        <div class="row">
                            <!-- <div class="col-md-6">
                                <div class="group ">
                                    <select name="" id="" class="input">
                                        <option value="" disabled selected> Select Your Country</option>
                                        <option value="">Bangladesh</option>
                                        <option value="">Afganistan</option>
                                    </select>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                </div>
                            </div> -->
                            <div class="col-md-12">
                                <div class="group">
                                    <input type="text" class="input" v-model="insertdata.phone_number">
                                    <span class="text-danger" v-if="errors.phone_number"><small>{{ errors.phone_number[0] }}</small></span>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Phone Number </label>
                                </div>
                            </div>
                        </div>

                        <h6>Business Information</h6>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_owner_name">
                                <span class="text-danger" v-if="errors.business_owner_name"><small>{{ errors.business_owner_name[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Owner Name</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_name">
                                <span class="text-danger" v-if="errors.business_name"><small>{{ errors.business_name[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Name </label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_register_num">
                                <span class="text-danger" v-if="errors.business_register_num"><small>{{ errors.business_register_num[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Registration number</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_address">
                                <span class="text-danger" v-if="errors.business_address"><small>{{ errors.business_address[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Address</label>
                            </div>
                        </div>
                        <h6>WareHouse Address</h6>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_warehouse_address">
                                <span class="text-danger" v-if="errors.business_warehouse_address"><small>{{ errors.business_warehouse_address[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Address</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_email">
                                <span class="text-danger" v-if="errors.business_email"><small>{{ errors.business_email[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_phone">
                                <span class="text-danger" v-if="errors.business_phone"><small>{{ errors.business_phone[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Phone</label>
                            </div>
                        </div>
                        <h6>Return Address
                            <div class="d-flex c_label">
                                <input type="checkbox" id="checkbox" v-model="copyValues" @change="handleCheckboxChange"><label class="" style="pointer-events: all; position: unset; color: #000;" for="checkbox">Same As WareHouse Address </label>

                            </div>
                        </h6>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_return_name">
                                <span class="text-danger" v-if="errors.business_return_name"><small>{{ errors.business_return_name[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Business Owner Name</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_return_address">
                                <span class="text-danger" v-if="errors.business_return_address"><small>{{ errors.business_return_address[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Address</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_return_email">
                                <span class="text-danger" v-if="errors.business_return_email"><small>{{ errors.business_return_email[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div>
                            <div class="group">
                                <input type="text" class="input" v-model="insertdata.business_return_phone">
                                <span class="text-danger" v-if="errors.business_return_phone"><small>{{ errors.business_return_phone[0] }}</small></span>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Phone</label>
                            </div>
                        </div>

                        <div class="d-flex c_label">
                            <span class="text-danger" v-if="errors.agree_with_terms"><small>{{ errors.agree_with_terms[0] }}</small></span>
                            <input type="checkbox" id="checkbox" v-model="insertdata.agree_with_terms"><label class="" style="pointer-events: all; position: unset; color: #000;" for="checkbox">Agree with <a href="../pdf/sample-terms-conditions-agreement.pdf">terms & condition</a> </label>

                        </div>
                        <button class="btn_cart" style="visibility: unset;">Register</button>
                    </form>
                </div>

                <div class="row">
                    <div class="col-md-6 m-auto text-center">
                        <p class="sign_link">Allready Have account? <Nuxt-link to="/login">Login</Nuxt-link>
                        </p>
                    </div>
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
        title: 'Register for Seller',
    },
    data() {
        return {
            copyValues: false,
            insertdata: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                phone_number: '',
                business_owner_name: '',
                business_name: '',
                business_register_num: '',
                business_address: '',
                business_warehouse_address: '',
                business_email: '',
                business_phone: '',
                business_return_name: '',
                business_return_address: '',
                business_return_phone: '',
                business_return_email: '',
                agree_with_terms: ''
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
        handleCheckboxChange() {
            console.log('Copy Values:', this.copyValues);

            if (this.copyValues) {
                // Copy values from the first pair to the second pair
                console.log('Copying values...');
                this.insertdata.business_return_address = this.insertdata.business_warehouse_address;
                this.insertdata.business_return_phone = this.insertdata.business_phone;
                this.insertdata.business_return_email = this.insertdata.business_email;
            } else {
                // Clear values in the second pair if checkbox is unchecked
                console.log('Clearing values...');
                this.insertdata.business_return_address = '';
                this.insertdata.business_return_phone = '';
                this.insertdata.business_return_email = '';
            }
        },

        defaultLoading() {
            this.$nextTick(() => {
                $(".toggle-password").click(function () {
                    $(this).toggleClass("fa-eye-slash fa-eye");
                    let input = $(this).parent().find("input"); // Declare the 'input' variable with 'let'
                    if (input.attr("type") == "password") {
                        input.attr("type", "text");
                    } else {
                        input.attr("type", "password");
                    }
                });

            });
        },
        saveData() {

            const formData = new FormData();
            formData.append('first_name', this.insertdata.first_name);
            formData.append('last_name', this.insertdata.last_name);
            formData.append('email', this.insertdata.email);
            formData.append('password', this.insertdata.password);
            formData.append('password_confirmation', this.insertdata.password_confirmation);
            formData.append('phone_number', this.insertdata.phone_number);
            formData.append('business_owner_name', this.insertdata.business_owner_name);
            formData.append('business_name', this.insertdata.business_name);
            formData.append('business_register_num', this.insertdata.business_register_num);
            formData.append('business_address', this.insertdata.business_address);
            formData.append('business_warehouse_address', this.insertdata.business_warehouse_address);
            formData.append('business_email', this.insertdata.business_email);
            formData.append('business_phone', this.insertdata.business_phone);
            formData.append('business_return_name', this.insertdata.business_return_name);
            formData.append('business_return_address', this.insertdata.business_return_address);
            formData.append('business_return_phone', this.insertdata.business_return_phone);
            formData.append('agree_with_terms', this.insertdata.agree_with_terms);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/registerSeller',
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
                    title: "Successfully Register !"
                });
                this.$router.push('/');

            }).catch(error => {
                this.invidecodeError = error.response.data.error;
                console.log("code error: " + error.response.data.error);
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

    },

}
</script>
