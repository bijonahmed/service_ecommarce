<template lang="en">
 
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