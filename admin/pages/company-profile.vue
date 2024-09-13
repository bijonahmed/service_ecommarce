<template lang="en">
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item">
                                    <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                                </li>
                                <!-- <li class="breadcrumb-item" aria-current="page">
                                    <router-link to="/ecommarce/product-list">Product List </router-link>
                                </li> -->
                                <li class="breadcrumb-item active" aria-current="page">Charge settings</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!--end breadcrumb-->

                <!-- body section start here  -->
                <h5 class="mt-4 mb-2">Company Profile Settings</h5>
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="saveData()" enctype="multipart/form-data">
                            <input type="text" value="1" hidden v-model="insertdata.id">
                            <div class="mb-3 mx-auto">
                                <div class="form-group">
                                    <label for="logo" class="d-flex justify-content-center align-items-center mx-auto"
                                        style="width: fit-content;flex-direction: column;">
                                        <div class="avatar"><img :src="logoPreview" id="logo-preview" alt="LOGO">
                                        </div>
                                        <p class="btn bg-success-light">Change</p>
                                    </label>
                                    <input type="file" hidden id="logo" ref="logo" name="logo"
                                        class="form-control mb-3">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="company_name" class="form-label">Company Name:</label>
                                        <input type="text" v-model="insertdata.company_name" id="company_name"
                                            name="company_name" class="form-control" required>
                                    </div>

                                    <div class="mb-3">
                                        <label for="address" class="form-label">Address:</label>
                                        <textarea id="address" v-model="insertdata.address" name="address"
                                            class="form-control" rows="3"></textarea>
                                    </div>

                                    <!-- Add other fields as necessary -->

                                    <div class="mb-3">
                                        <label for="setup_charge" class="form-label">Setup Charge:</label>
                                        <input type="text" v-model="insertdata.setup_charge" id="setup_charge"
                                            name="setup_charge" class="form-control">
                                    </div>

                                    <div class="mb-3">
                                        <label for="transaction_fee" class="form-label">Cash On delivery fee:</label>
                                        <input type="text" v-model="insertdata.transaction_fee" id="transaction_fee"
                                            name="transaction_fee" class="form-control">
                                    </div>

                                    <div class="mb-3">
                                        <label for="other_charges" class="form-label">Other Charges:</label>
                                        <input type="text" id="other_charges" v-model="insertdata.other_charges"
                                            name="other_charges" class="form-control" rows="3">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="text" v-model="insertdata.phone" id="phone" name="phone"
                                            class="form-control" required>
                                    </div>

                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email:</label>
                                        <input type="text" v-model="insertdata.email" class="form-control" name="email"
                                            id="email">
                                    </div>

                                    <!-- Add other fields as necessary -->

                                    <div class="mb-3 d-none">
                                        <label for="Found_year" class="form-label">Found year</label>
                                        <input type="text" v-model="insertdata.found_year" id="Found_year"
                                            name="Found year" class="form-control">
                                    </div>

                                    <div class="mb-3">
                                        <label for="industry " class="form-label">industry </label>
                                        <input type="text" v-model="insertdata.industry" id="industry " name="industry "
                                            class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label for="about" class="form-label">About us</label>
                                        <textarea id="about" v-model="insertdata.about" name="about"
                                            class="form-control" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-success bg-success-light">Save Settings</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- body section end here  -->
        </div>
    </div>
    <!--end page wrapper -->
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        head: {
            title: 'Charge settings',
        },

        data() {
            return {
                logo: null,
                logoPreview: '',
                insertdata: {
                    id: '1',
                    company_name: '',
                    address: '',
                    setup_charge: '',
                    transaction_fee: '',
                    other_charges: '',
                    phone: '',
                    email: '',
                    found_year: '',
                    industry: '',
                    about: ''
                },
                getData: [],
            }
        },
        async mounted() {
            this.profileLivePreview();
            this.fetchData();
        },
        methods: {
            profileLivePreview() {
                document.getElementById('logo').addEventListener('change', function (event) {
                    var logoPreview = document.getElementById('logo-preview');
                    var file = event.target.files[0];
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        logoPreview.src = e.target.result;
                        logoPreview.style.display = 'block';
                    };

                    reader.readAsDataURL(file);
                });
            },
            saveData() {
                const formData = new FormData();
                formData.append('logo', this.$refs.logo.files[0]); // Append logo file
                formData.append('id', this.insertdata.id);
                formData.append('company_name', this.insertdata.company_name);
                formData.append('address', this.insertdata.address);
                formData.append('subscription_charge', this.insertdata.subscription_charge);
                formData.append('setup_charge', this.insertdata.setup_charge);
                formData.append('transaction_fee', this.insertdata.transaction_fee);
                formData.append('other_charges', this.insertdata.other_charges);
                formData.append('phone', this.insertdata.phone);
                formData.append('email', this.insertdata.email);
                formData.append('found_year', this.insertdata.found_year);
                formData.append('industry', this.insertdata.industry);
                formData.append('about', this.insertdata.about);

                // console.log('Form submitted!', formData);

                this.$axios.post('/setting/companyProfile', formData)
                    .then(response => {
                        // console.log(response.data);
                        this.fetchData();
                        this.success_noti();

                    })
                    .catch(error => {
                        console.error(error);
                        if (error.response && error.response.data && error.response.data.errors) {
                            const errorObject = error.response.data.errors;
                            // Convert error object to a string
                            const errorMessage = Object.values(errorObject).join(', ');
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-check-circle',
                                msg: errorMessage
                            });
                        } else {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-check-circle',
                                msg: 'An error occurred while processing your request.'
                            });
                        }
                    });
            },
            fetchData() {
                this.$axios.get('/setting/getCompanyData')
                    .then(response => {
                        this.getData = response.data;
                        this.insertdata.id = response.data.id;
                        this.insertdata.company_name = response.data.company_name;
                        this.insertdata.address = response.data.address;
                        this.insertdata.setup_charge = response.data.setup_charge;
                        this.insertdata.transaction_fee = response.data.transaction_fee;
                        this.insertdata.other_charges = response.data.other_charges;
                        this.insertdata.phone = response.data.phone;
                        this.insertdata.email = response.data.email;
                        this.insertdata.found_year = response.data.founded_year;
                        this.insertdata.industry = response.data.industry;
                        this.insertdata.about = response.data.about;
                        this.logoPreview = response.data.logo;
                    });
            },
            success_noti() {
                Lobibox.notify('success', {
                    pauseDelayOnHover: true,
                    continueDelayOnInactiveTab: false,
                    position: 'top right',
                    icon: 'bx bx-check-circle',
                    msg: 'Your data has been successfully inserted.'
                });
            },
        }

    }
</script>
<style scoped>
    .required-label::after {
        content: "\2605";
        color: red;
        margin-right: 4px;
    }

    /* CSS */
    ol,
    ul {
        padding-left: 0rem;
    }

    ul {
        list-style: none;
    }

    .bgColor {
        background-color: #c8c8c8;
        padding: 1px;
        border-radius: 2px;
    }

    .img-fluid {
        width: 300px;
        height: 150px;
    }

    .img-fluids {
        margin-top: 10px;
        width: 300px;
        height: 300px;
    }

    /* for checkbox */
    .multiselect {
        position: relative;
        font-family: Arial, sans-serif;
        width: 100%;
    }

    .select-box {
        border: 1px solid #ccc;
        padding: 8px;
        cursor: pointer;
        background-color: #fff;
    }

    .dropdown {
        border: 1px solid #ccc;
        border-top: none;
        max-height: 400px;
        overflow-y: auto;
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: #fff;
        z-index: 1;
    }

    label {
        display: block;
        padding: 5px;
    }

    input[type="checkbox"] {
        margin-right: 8px;
    }

    .widthtxtbox {
        width: 50px;
    }

    .avatar {
        width: 80px;
        height: 80px;
        outline: 5px solid #ecf1ff;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    .avatar>img {
        outline: 5px #ecf1ff;
        border-radius: 50%;
        width: inherit;
        aspect-ratio: 1/1;
        object-fit: contain;
    }
    .form-label{
        color: #000;
    }
</style>