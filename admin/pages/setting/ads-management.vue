<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!-- top slider part start here  -->
                <div class="row">
                    <div class="col-md-8 m-auto">

                        <div class="form-group mb-2">
                            <label for="" class="text-dark fs-6">Home page To sliders</label>
                            <span class="text-gray d-block mb-2">For better experience user .gif file</span>
                            <div class="row px-2">
                                <div class="col-md-2 col-sm-3 col-4 px-1" v-for="(item, index) in sliders"
                                    :key="item.id">
                                    <div class="slider_img_box">
                                        <img :src="item.images" alt="" class="img-fluid">
                                        <button @click="removeSlider(item.id)"
                                            class="btn btn-danger w-100 mt-1 py-1">Remove</button>
                                        <!-- <nuxt-link :to="`/remove/${item.id}`" class="btn btn-danger w-100 mt-1 py-1">Remove</nuxt-link> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form_container bg-white p-3">
                            <form @submit.prevent="saveSliders" id="formrest" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <input type="file" class="form-control" @change="sliderFileUpload" name="image">
                                    <p class="text-gray">Size: 600x400</p>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="status" class="text-dark fs-6">Status</label>
                                    <select v-model="sliderdata.status" id="status" class="form-control">
                                        <option value="0">Draft</option>
                                        <option value="1" selected>Published</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- top slider part end here  -->

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Home page Top banner Ads</label>
                                    <span class="text-gray d-block mb-2">For better experience user .gif file</span>
                                    <div>
                                        <img id="bannerImage" :src="previewURL" alt="File Preview"
                                            class="preview-image">
                                    </div>
                                    <input type="file" class="form-control" @change="handleFileChange($event)"
                                        name="image">
                                    <p class="text-gray">Size: 640x33</p>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="status" class="text-dark fs-6">Status</label>
                                    <select v-model="insertdata.status" id="status" class="form-control">
                                        <option value="draft">Draft</option>
                                        <option value="review">Review</option>
                                        <option value="published" selected>Published</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--top header banner row-->
                <!--slider side banner start-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <form @submit.prevent="updateads" id="ads" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-3">Slider side ads banner</label>
                                    <span class="text-gray d-block">For better experience use .gif file</span>

                                    <div class="row dealsBanner">
                                        <div class="col-md-6">
                                            <img id="adsBanner" :src="adsOne" alt="File Preview" class="img-fluid">
                                        </div>
                                        <div class="col-md-6">
                                            <img id="adsBanner" :src="adsTwo" alt="File Preview" class="img-fluid">
                                        </div>
                                    </div>
                                    <!-- input part  -->
                                    <input type="file" class="form-control mb-2" @change="ads1" ref="adsOne">

                                    <input type="file" class="form-control" @change="ads2" ref="adsTwo">
                                    <p class="text-warning">Size: 600x370</p>

                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--slider side banner end-->

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <form @submit.prevent="updateDeals()" id="dealsforyou" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-3">Deals for you ads banner</label>
                                    <span class="text-gray d-block ">For better experience user .gif file</span>

                                    <div class="row dealsBanner">
                                        <div class="col-md-6">
                                            <img id="dealsBanner" :src="dealsImageOne" alt="File Preview"
                                                class="img-fluid">
                                        </div>
                                        <div class="col-md-6">
                                            <img id="dealsBanner" :src="dealsImageTwo" alt="File Preview"
                                                class="img-fluid">
                                        </div>
                                    </div>
                                    <!-- input part  -->
                                    <input type="file" class="form-control mb-2" @change="dealsImage1" ref="imageOne">

                                    <input type="file" class="form-control" @change="dealsImage2" ref="imageTwo">
                                    <p class="text-gray">Size: 572x250</p>
                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--top header banner row-->
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>


<script>
export default {
    head: {
        title: 'Ads Management',
    },
    data() {
        return {
            sliderdata: {
                image: '',
                status: '1',

            },
            sliders: [],
            bannerImage: '',
            dealsImageOne: null,
            dealsImageTwo: null,
            previewURL: null,
            adsOne: null,
            adsTwo: null,

            insertdata: {
                image: null, // To store the selected file
                status: 'published', // To store the selected status   
            },
            updateData: {
                imageOne: null,
                imageTwo: null,
            },
            dealsData: [],
            errors: {},
            bannerData: null,
        };
    },
    mounted() {
        this.fetchBannerData();
        this.slidersImg();
    },
    methods: {
        removeSlider(id) {
            this.$axios.post('/setting/deleteSlider', { id: id })
                .then(response => {
                    this.slidersImg();
                    console.log(response.data);
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your slider image successfully Remove.'
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        },
        sliderFileUpload(event) {
            this.sliderdata.image = event.target.files[0];
        },
        saveSliders() {
            const formData = new FormData();
            formData.append('image', this.sliderdata.image);
            formData.append('status', this.sliderdata.status);
            this.$axios.post('/setting/addslidersImages', formData)
                .then(response => {
                    this.slidersImg();
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your data has been successfully updated.'
                    });
                });

        },
        async slidersImg() {
            console.log("slider images...");
            const response = await this.$axios.get(`/unauthenticate/slidersImages`);
            this.sliders = response.data;
        },
        handleFileChange(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.insertdata.image = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.previewURL = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.previewURL = null; // Clear preview if no file selected
            }
        },
        dealsImage1(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.updateData.imageOne = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.dealsImageOne = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.dealsImageOne = null; // Clear preview if no file selected
            }
        },
        dealsImage2(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.updateData.dealsImageTwo = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.dealsImageTwo = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.dealsImageTwo = null; // Clear preview if no file selected
            }
        },
        ads1(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.updateData.imageOne = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.adsOne = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.adsOne = null; // Clear preview if no file selected
            }
        },
        ads2(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.updateData.dealsImageTwo = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.adsTwo = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.adsTwo = null; // Clear preview if no file selected
            }
        },
        fetchBannerData() {
            this.$axios.get('/setting/bannerTopget').then(response => {
                this.previewURL = response.data.images;
            })
                .catch(error => {
                    this.error = error.message;
                    console.error('Error fetching Top header banner data:', error);
                });

            this.$axios.get('/setting/getdealsbanner').then(response => {
                this.dealsImageOne = response.data.imageone;
                this.dealsImageTwo = response.data.imagetwo;
            })
                .catch(error => {
                    this.error = error.message;
                    console.error('Error fetching Deals banner data:', error);
                });
            // slider side ads banner 
            this.$axios.get('/setting/getadsbannerreq').then(response => {
                this.adsOne = response.data.adsOne;
                this.adsTwo = response.data.adsTwo;
                // console.log(response.data.adsOne);
            })
                .catch(error => {
                    this.error = error.message;
                    console.error('Error fetching Deals banner data:', error);
                });
        },
        saveData() {
            const formData = new FormData();
            formData.append('image', this.insertdata.image);
            formData.append('status', this.insertdata.status);

            this.$axios.post('/setting/bannerTop', formData)
                .then(response => {

                    this.previewURL = response.data.images;
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your data has been successfully updated.'
                    });
                })
                .catch(error => {
                    console.error('Error saving data:', error);
                    if (error.response) {
                        if (error.response.data && error.response.data.errors.image) {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: error.response.data.errors.image
                            });
                        } else {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: 'An error occurred while saving data.'
                            });
                        }
                    } else {
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-error-circle',
                            msg: 'An error occurred while saving data.'
                        });
                    }
                });
        },
        updateDeals() {
            const formData = new FormData();
            formData.append('imageOne', this.$refs.imageOne.files[0]);
            formData.append('imageTwo', this.$refs.imageTwo.files[0]);
            // console.log(formData);

            // Make a POST request to your API endpoint
            this.$axios.post('/setting/dealsbannner', formData)
                .then(response => {
                    // Handle successful response
                    // console.log('Data saved successfully:', response.data.imageOne);
                    this.dealsImageOne = response.data.imageOne;
                    this.dealsImageTwo = response.data.imageTwo;
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your data has been successfully updated.'
                    });
                    // Optionally, you can redirect the user or perform any other action
                })
                .catch(error => {
                    // Handle error
                    console.error('Error saving data:', error);
                    // Check if error.response exists
                    if (error.response) {
                        // If error.response.data exists, it contains error message from server
                        if (error.response.data && error.response.data.errors.image) {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: error.response.data.errors.image
                            });
                        } else {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: 'An error occurred while saving data.'
                            });
                        }
                    } else {
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-error-circle',
                            msg: 'An error occurred while saving data.'
                        });
                    }
                });

        },
        updateads() {
            const formData = new FormData();
            // formdata.append('ads1', this.adsOne);
            // formdata.append('ads2', this.adsTwo);
            formData.append('ads1', this.$refs.adsOne.files[0]);
            formData.append('ads2', this.$refs.adsTwo.files[0]);
            // console.log(formData);
            this.$axios.post('/setting/sliderLeftads', formData)
                .then(response => {
                    // Handle successful response
                    console.log('Data saved successfully:', response.data);
                    // this.previewURL = response.data;
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your data has been successfully updated.'
                    });
                    // Optionally, you can redirect the user or perform any other action
                })
                .catch(error => {
                    // Handle error
                    console.error('Error saving data:', error);
                    // Check if error.response exists
                    if (error.response) {
                        // If error.response.data exists, it contains error message from server
                        if (error.response.data && error.response.data.errors) {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: error.response.data.errors.ads1,
                                msg: error.response.data.errors.ads2
                            });
                        } else {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: 'An error occurred while saving data.'
                            });
                        }
                    } else {
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-error-circle',
                            msg: 'An error occurred while saving data.'
                        });
                    }
                });
        },
    }
};
</script>

<style>
.slider_img_box {
    margin-bottom: 10px;
}

.slider_img_box img {
    width: 100%;
}

input,
select,
textarea {
    outline: 0 !important;
    box-shadow: none !important;
}

.preview-image {
    max-width: 100%;
    max-height: 60px;
    margin-bottom: 10px;
    background: #f2f1f1;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}

.dealsBanner img {
    width: 100%;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px 3px #bbb;
    width: 100%;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 2px 3px 5px 3px #bbb;
    height: 166px;
    width: 100%;
    object-fit: contain;
}

#adsBanner {
    box-shadow: 2px 3px 5px 3px #bbb;
    object-fit: contain;
    background: whitesmoke;
    border-radius: 0px;
    color: #040404;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    width: 100%;
    height: 235px;
}
</style>