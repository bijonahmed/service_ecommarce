<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond />
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0">
                        <div class="loading-indicator" v-if="loading">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>

                        <div class="main_profile">
                            <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample"
                                enctype="multipart/form-data">
                                <h5 class="mb-3">Profile Info </h5>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <p>Email</p>
                                            <input type="email" disabled placeholder="email address"
                                                v-model="userdata.email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <p>Full Name</p>
                                            <input type="text" placeholder="Full Name" v-model="userdata.name"
                                                class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <p>Gender</p>
                                            <select class="form-control" v-model="userdata.gender" id="gender">
                                                <option value="" disabled>Select gender</option>
                                                <option value="1" :selected="userdata.gender === 1">Male</option>
                                                <option value="2" :selected="userdata.gender === 2">Female</option>
                                                <option value="3"
                                                    :selected="userdata.gender !== 1 && userdata.gender !== 2">Others
                                                </option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <p>Phone 1 <strong style="font-size: 14px;">(Default)</strong></p>
                                            <input type="tel" placeholder="" v-model="userdata.phone_1"
                                                class="form-control mobile_code">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <p>Phone 2</p>
                                            <input type="tel" placeholder="" v-model="userdata.phone_2"
                                                class="form-control mobile_code">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <p>Birth Date</p>
                                            <input type="date" placeholder="" v-model="userdata.birthdate"
                                                class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <!-- address line 1  -->
                                    <h5>Address line 1</h5>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <label for="area">Country</label>
                                            <select v-model="userdata.country_1" class="form-control">
                                                <option value="" disabled>Select Country</option>
                                                <option v-for="country in countries" :key="country.id"
                                                    :value="country.countryname"
                                                    :selected="country.countryname === userdata.country_1">
                                                    {{ country.countryname }} - {{ country.countrycode }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <label for="area">City</label>
                                            <input type="text" v-model="userdata.city_1" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <label>Land Mark </label>
                                            <input type="text" v-model="userdata.landmark_1" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <!-- address line 2  -->
                                    <h5>Address line 2</h5>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <label for="area">Country</label>
                                            <select v-model="userdata.country_2" class="form-control">
                                                <option value="" disabled>Select Country</option>
                                                <option v-for="country in countries" :key="country.id"
                                                    :value="country.countryname"
                                                    :selected="country.countryname === userdata.country_2">
                                                    {{ country.countryname }} - {{ country.countrycode }}
                                                </option>
                                            </select>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <label for="area">City</label>
                                            <input type="text" v-model="userdata.city_2" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form_group mb-3">
                                            <label>Land Mark </label>
                                            <input type="text" v-model="userdata.landmark_2" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="form_group">
                                    <button type="submit" class="btn_confirm"  >Save & Update</button>
                                </div>
                            </form>
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
import userSidebar from '~/components/userSidebar.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';


export default {
    middleware: 'IsUser',
    components: {
        NavbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'My Profile',
    },

    data() {
        return {
            loading: false,
            userdata: {
                name: "",
                email: "",
                gender: "",
                birthdate: "",
                
                address_1: "",
                country_1: "",
                landmark_1: "",
                city_1: "",
                phone_1: "",

                address_2: "",
                country_2: "",
                city_2: "",
                landmark_2: "",
                phone_2: "",
            },
            passdata: {
                password: "",
                password_confirmation: "",
            },
            notifmsg: "",
            
            errors: {},
            countries: [],
        }
    },
    mounted() {

        this.defaultLoading();
        
        this.setupEventHandlers();
        this.loadingCountry();

    },
    methods: {
        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".search_bar").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
            })
        },

        saveData() {
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
                this.$router.push('/user/user-profile');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        updateProfile() {
            $(".profileupdate").fadeIn();
        },
        closeProfile() {
            $(".profileupdate").fadeOut();
        },

        profileupdate() {

            const formData = new FormData();
            formData.append('name', this.userdata.name);
            formData.append('email', this.userdata.email);
            formData.append('gender', this.userdata.gender);
            formData.append('birthdate', this.userdata.birthdate);

            // formData.append('address_1', this.userdata.address_1);
            formData.append('country_1', this.userdata.country_1);
            formData.append('landmark_1', this.userdata.landmark_1);
            formData.append('city_1', this.userdata.city_1);
            formData.append('phone_1', this.userdata.phone_1);

            // formData.append('address_2', this.userdata.address_2);
            formData.append('country_2', this.userdata.country_2);
            formData.append('city_2', this.userdata.city_2);
            formData.append('landmark_2', this.userdata.landmark_2);
            formData.append('phone_2', this.userdata.phone_2);

            console.log(formData);

            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateprofile',
                formData, {
                headers
            }).then((res) => {
                $(".profileupdate").fadeOut();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your profile has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.defaultLoading();

            });

        },
        async defaultLoading() {
            this.loading = true;
            await this.$axios.post(`/auth/me`).then(response => {
                this.userdata.name = response.data.name;
                this.userdata.email = response.data.email;
                this.userdata.phone_number = response.data.phone_number;
                this.userdata.phone_2 = response.data.phone_number2;
                this.userdata.birthdate = response.data.birthdate; //birthdate
                this.userdata.gender = response.data.gender; // Set gender property userdata.birthdate

                this.userdata.address_1 = response.data.address_1;
                this.userdata.country_1 = response.data.country_1;
                this.userdata.city_1 = response.data.city_1;
                this.userdata.landmark_1 = response.data.landmark_1;
                this.userdata.phone_1 = response.data.phone_1;

                this.userdata.address_2 = response.data.address_2;
                this.userdata.country_2 = response.data.country_2;
                this.userdata.city_2 = response.data.city_2;
                this.userdata.landmark_2 = response.data.landmark_2;
                this.userdata.phone_2 = response.data.phone_2;
                // Assuming response.data.created_at is a date string like "2023-11-18T03:04:53.000000Z"
                const createdAtDate = new Date(response.data.created_at);

                // Format the date as "YYYY-MM-DD"
                const formattedCreatedAt = createdAtDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }).replace(/-/g, '');
                this.userdata.created_at = formattedCreatedAt;
                console.log("Formatted created_at: " + formattedCreatedAt);


            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },

        async loadingCountry() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/countrylist`).then(response => {
                this.countries = response.data.countries;
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

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
