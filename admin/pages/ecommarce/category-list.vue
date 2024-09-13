<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center">
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item">
                                    <router-link to="/"><a href="javascript:;"><i
                                                class="bx bx-home-alt"></i></a></router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Category List</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="ms-auto">
                        <div class="btn-group mb-3">

                            <Nuxt-link to="/ecommarce/category-add"><button type="button" class="btn btn-primary"
                                    style="margin-right: 10px;"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                            <button type="button" class="btn btn-primary" @click="fetchData"><i
                                    class="lni lni-search"></i></button>
                        </div>
                    </div>
                </div>
                <!--end breadcrumb-->
                <!-- <span class="loader"></span> -->
                <div class="card">
                    <div class="card-body">

                        <div style="display: none;" class="customerSpinner">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <ul class="nav nav-tabs nav-primary" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                            aria-selected="true">
                                            <div class="d-flex align-items-center">
                                                <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                                </div>
                                                <div class="tab-title">Active List</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab"
                                            aria-selected="false">
                                            <div class="d-flex align-items-center">
                                                <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                                </div>
                                                <div class="tab-title">Inactive List</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" data-bs-toggle="tab" href="#commissionlist" role="tab"
                                            aria-selected="false">
                                            <div class="d-flex align-items-center">
                                                <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                                </div>
                                                <div class="tab-title">Commission List</div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" data-bs-toggle="tab" href="#productsliders" role="tab"
                                            aria-selected="false">
                                            <div class="d-flex align-items-center">
                                                <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                                </div>
                                                <div class="tab-title">Products Slider(For Home Page)</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" data-bs-toggle="tab" href="#SpeacilCat" role="tab"
                                            aria-selected="false">
                                            <div class="d-flex align-items-center">
                                                <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                                </div>
                                                <div class="tab-title">Speacial Category(For Home)</div>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                                        <ul>
                                            <li v-for="category in categories" :key="category.id">
                                                <span class="badge bg-dark">{{ category.name }} <span
                                                        @click="editCategory(category.id)"><i
                                                            class="bx bx-edit"></i></span></span>

                                                <span style="font-size: 20px;font-weight: bold; color:#db0f0f;"
                                                    v-if="category.commission !== null">[{{ category.commission
                                                    }}%]</span>

                                                <TreeView :categories="category.children"
                                                    v-if="category.children && category.children.length > 0" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                        <ul>
                                            <li v-for="category in Inacategories" :key="category.id">
                                                <span class="badge bg-danger">{{ category.name }} <span
                                                        @click="editCategory(category.id)"><i
                                                            class="bx bx-edit"></i></span></span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade" id="commissionlist" role="tabpanel">
                                        <ul v-for="category in categories" :key="category.id">
                                            <li v-if="category.commission !== null">
                                                <span style="font-size: 15px;">{{ category.name }} [{{
                                category.commission }}%]</span> <span
                                                    @click="editCategory(category.id)"><i class="bx bx-edit"></i></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade" id="productsliders" role="tabpanel">
                                        <div class="card">
                                            <div class="card-body">
                                                <center>This configration only for home pages category sliders</center>
                                                <p class="text-center" style="color: gray;">You can select maximum 4
                                                    category slider</p>
                                                <hr />
                                                <div class="row">

                                                    <div class="col-md-8">
                                                        <table class="table table-responsive table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="productCats in productCat"
                                                                    :key="productCats.id">
                                                                    <td>{{ productCats.name }}</td> 
                                                                    <td> 
                                                                        <span v-if="productCats.status==1" class="badge bg-success-light">Active</span> 
                                                                        <span v-else class="btn bg-danger-light" >Inactive</span>
                                                                    </td>
                                                                    <td><button
                                                                            @click="removeProSliderCat(productCats.id)" class="btn bg-danger-light btn">DEL</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <form @submit.prevent="insertCategoryProSlider()" id="formrest"
                                                            class="forms-sample" enctype="multipart/form-data">
                                                            <div class="mb-3">
                                                                <label for="category" class="form-label">Select
                                                                    Category</label>
                                                                <select class="form-select"
                                                                    v-model="sliderInsert.select_category_id">
                                                                    <option selected="selected">Select a category
                                                                    </option>
                                                                    <option v-for="category in subcategories"
                                                                        :key="category.id" :value="category.id">
                                                                        {{ category.name }}
                                                                    </option>
                                                                </select>
                                                                <span class="text-danger" v-if="errors.category_id">{{ errors.category_id[0] }}</span>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="product" class="form-label">Status</label>
                                                                <select class="form-select"
                                                                    v-model="sliderInsert.status">
                                                                    <option value="1">Active</option>
                                                                    <option value="0">Inactive</option>
                                                                </select>
                                                                <span class="text-danger" v-if="errors.status">{{ errors.status[0] }}</span>
                                                            </div>
                                                            <button type="submit" :disabled="productCat.length == 4"
                                                                class="btn btn-primary w-100">Submit</button>
                                                            <p class="text-danger" style="font-size: 12px;"
                                                                :class="{ 'd-block': productCat.length === 4, 'd-none': productCat.length !== 4 }">
                                                                You reach maximum number of slider</p>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade  " id="SpeacilCat" role="tabpanel">
                                        <div class="card">
                                            <div class="card-body">
                                                <center>This is Speacial Category For Home Page </center>
                                                <p class="text-center" style="color: gray;">You can select maximum 12
                                                    categories</p>
                                                <hr />
                                                <div class="row">

                                                    <div class="col-md-8">
                                                        <table class="table table-responsive table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>image</th>
                                                                    <th>Status</th>
                                                                    <!-- <th>Action</th> -->

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr  v-for="productCats in speacialCat"
                                                                    :key="productCats.id">
                                                                    <td>{{ productCats.name }}</td>
                                                                    <td>
                                                                        <img :src="productCats.image" alt="cat img"
                                                                            style="height: 40px;" class="img-fluid">
                                                                    </td>
                                                                    <td>
                                                                        <span v-if="productCats.speacial_status === 1"
                                                                            class='badge bg-success-light'>Speacial</span>
                                                                        <span v-else
                                                                            class='badge bg-danger'>Normal</span>
                                                                    </td>
                                                                    <td><button
                                                                            @click="editSPCat(productCats)"  class="btn btn-warning bg-history-light">Edit</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div class="col-md-4">                                                        
                                                        <form ref="myForm" @submit.prevent="insertSpeacialCat()" id="formrest"
                                                            class="forms-sample submitForm" enctype="multipart/form-data">
                                                            <div class="mb-3">
                                                                <label for="category" class="form-label">Select
                                                                    Category</label>
                                                                <select class="form-select"
                                                                    v-model="speacilCatInsert.speacialCat_id">
                                                                    <option selected="selected">Select a category
                                                                    </option>
                                                                    <option v-for="category in speacialCat"
                                                                        :key="category.id" :value="category.id">
                                                                        {{ category.name }}
                                                                    </option>
                                                                </select>
                                                                <span class="text-danger" v-if="errors.category_id">{{ errors.category_id[0] }}</span>
                                                            </div>
                                                            <div class="mb-3">
                                                                <img :src="images_ ? images_ : '/images/cat(1).jpg'"
                                                                    height="80px" class="shadow rounded-2 mb-1"
                                                                    alt="cat image" accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"> <br>
                                                                <label for="product" class="form-label">Category
                                                                    Image <span class="text-danger">(300x240)*</span>
                                                                </label>
                                                                <input type="file" ref="file" @change="onFileSelected"
                                                                    class="form-control">
                                                                <span class="text-danger" v-if="errors.status">{{ errors.file[0] }}</span>
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="product" class="form-label">Speacial
                                                                    Status</label>
                                                                <select class="form-select"
                                                                    v-model="speacilCatInsert.speacial_status">
                                                                    <option value="" selected>Select status</option>
                                                                    <option value="1"  :disabled="count == 12">Active</option>
                                                                    <option value="0">Inactive</option>
                                                                </select>
                                                                <span class="text-danger" v-if="errors.status">{{
                                                                    errors.speacial_status[0] }}</span>
                                                            </div>
                                                            <button type="submit"
                                                                class="btn btn-primary w-100" >Submit</button>
                                                                <p class="text-danger" style="font-size: 12px;"
                                                                :class="{ 'd-block': count === 12, 'd-none': count !== 12 }">
                                                                You reach maximum number of Speacial Categories</p>

                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="cmdal" :class="{ 'show': showConfirmation }">
            <div class="cmdal-dialog">
                <div class="cmdal-content">
                    <!-- Cmdal Header -->
                    <div class="cmdal-header">
                        <h4 class="cmdal-title">Confirmation</h4>
                        <button type="button" class="btn-close" @click="cancelDelete"></button>
                    </div>

                    <!-- Cmdal Body -->
                    <div class="cmdal-body">
                        Are you sure you want to remove this slider?
                    </div>

                    <!-- Cmdal Footer -->
                    <div class="cmdal-footer">
                        <button type="button" class="btn btn-secondary" @click="cancelDelete">Cancel</button>
                        <button type="button" class="btn btn-danger" @click="confirmDelete">Remove</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Modal -->
        <!--end page wrapper -->
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Category List',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                status: '',
            },

            sliderInsert: {
                id: '',
                select_category_id: '',
                status: "",
            },
            speacilCatInsert: {
                speacialCat_id: '',
                speacial_status: '0',
                file: '',
            },

            notifmsg: '',
            errors: {},
            data: [],
            categories: [],
            Inacategories: [],
            productCat: [],
            subcategories: [],
            showConfirmation: false,
            categoryIdToDelete: null,
            speacialCat: [],
            images_: '',
            catImg: [],
            count: '',

        };
    },
    async mounted() {
        await this.fetchData();
        await this.fetchInacCatData();
        await this.fetchProducsCategoryData();
        await this.fetchSpeacialCat();
    },
    computed: {

    },
    methods: {
        editSPCat(productCats){
            this.speacilCatInsert.speacialCat_id = productCats.id;
            this.speacilCatInsert.file = productCats.image;
            this.speacilCatInsert.speacial_status = productCats.speacial_status;
            // console.log(id);
            // this.$axios.post('/category/speacialCatEdit', { id: id })
            //     .then(response => {
            //         console.log(response.data);
            //     })
        },
        onFileSelected() {
            this.file = this.$refs.file.files[0];
            this.images_ = URL.createObjectURL(this.file);
        },
        insertSpeacialCat() {
            const formData = new FormData();
            formData.append('category_id', this.speacilCatInsert.speacialCat_id);
            formData.append('image', this.file);
            formData.append('speacial_status', this.speacilCatInsert.speacial_status);
            // console.log(formData);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/speacialCatSave',
                formData, {
                headers
            }).then(response => {
                this.images_ = response.data.images;     
                this.fetchSpeacialCat();                
                this.success_noti();           
                this.speacilCatInsert.speacial_status= '';
            }).catch(error => {
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors;

                    Lobibox.notify('error', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: error.response.data.errors
                    });
                }
            });
        },

        removeProSliderCat(id) {
            // Set the category ID to delete and show the confirmation cmdal
            this.categoryIdToDelete = id;
            this.showConfirmation = true;
            $(".cmdal").fadeIn();
        },
        confirmDelete() {
            this.$axios.get(`/category/removeProctCategory`, {
                params: {
                    id: this.categoryIdToDelete
                }
            }).then(response => {
                this.fetchProducsCategoryData();
                this.showConfirmation = false;
            });
            $(".cmdal").fadeOut();

        },
        cancelDelete() {
            // Cancel deletion and hide the confirmation cmdal
            this.showConfirmation = false;
            $(".cmdal").fadeOut();
        },

        insertCategoryProSlider() {
            const formData = new FormData();
            formData.append('category_id', this.sliderInsert.select_category_id);
            formData.append('status', this.sliderInsert.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/categoryProSlidersave',
                formData, {
                headers
            }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.fetchProducsCategoryData();
                //    this.$router.push('/ecommarce/category-list');
            }).catch(error => {
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors;

                    Lobibox.notify('error', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: error.response.data.errors
                    });
                }
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
        editCategory(id) {
            this.$router.push({
                path: '/ecommarce/category-edit', // Specify the path to the target page
                query: {
                    id
                } // Pass the parameter as a query parameter
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getCategoryList`);
                this.categories = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },
        async fetchSpeacialCat() {
            try {
                const response = await this.$axios.get(`/category/getSpeacialCategoryList`);
                this.speacialCat = response.data.data;
                this.count = response.data.count;
            } catch (error) {
                console.error(error);
            }
        },

        async fetchInacCatData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getInacCategoryList`);
                this.Inacategories = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

        async fetchProducsCategoryData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getProductCategoryList`);
                this.productCat = response.data.category;
                this.subcategories = response.data.subcategories;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
/* Add CSS styles for the hover effect */
ul li:hover {
    background-color: #f0f0f0;
    /* Change the background color on hover */
    cursor: pointer;
    /* Change the cursor to a pointer on hover */
}

ul li:hover .bx-edit {
    color: #007bff;
    /* Change the color of the edit icon on hover */
}

button:disabled {
    background-color: lightgray;
    border-color: lightgray;
}

.cmdal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.cmdal.showConfirmation {
    display: block;
}

.cmdal-dialog {
    margin: auto;
    width: 60%;
}

.cmdal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 300px;
}

.cmdal-header {
    padding: 10px 16px;
    border-bottom: 1px solid #dee2e6;
    /* background-color: #f5f5f5; */
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
}

.cmdal-header h4 {
    font-size: 20px;
    margin: 0;
}

.cmdal-body {
    padding: 10px 16px;
    text-align: center;
}

.cmdal-footer {
    padding: 10px 16px;
    border-top: 1px solid #dee2e6;
    background-color: #f5f5f5;
    border-radius: 0 0 5px 5px;
    text-align: center;
}
</style>
