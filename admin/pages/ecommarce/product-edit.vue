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
                                <li class="breadcrumb-item" aria-current="page">
                                    <router-link to="/ecommarce/product-list">Product List </router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">New Product</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!--end breadcrumb-->
                <!-- Basic information part start here  -->
                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="card">
                                <div class="card-header">
                                    <h5>Basic information</h5>
                                </div>
                                <div class="card-body">
                                    <div class="form-group mb-2">
                                        <label for="input-name-1" class="col-sm-2 col-form-label required-label">Product
                                            Name</label>
                                        <input type="text" name="name" placeholder="Product Name"
                                            v-model="insertdata.name" class="form-control" />
                                        <input type="hidden" name="id" id="id" class="form-control" />
                                        <span class="text-danger" v-if="errors.name">{{
                                            errors.name[0] }}</span>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class=" form-label">Brands</label>
                                        <select v-model="insertdata.brand" class="form-select model">
                                            <option value="0" selected>No Brand</option>
                                            <option v-for='data in modelresults' :value='data.id'>{{data.name}}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group mb-2">
                                        <label for="input-meta-description-1"
                                            class="col-sm-2 col-form-label required-label">Categories</label>
                                        <div>
                                            <input v-model="categories" @input="search" class="form-control"
                                                placeholder="Search..." />
                                            <ul v-if="searchResults.length">
                                                <li v-for="result in searchResults" :key="result.name"
                                                    class="custom-list">
                                                    {{ result.category }} <a href="javascript:void(0);"
                                                        @click="addToSelected(result)"><i
                                                            class="fadeIn animated bx bx-plus-circle"></i></a>
                                                </li>
                                            </ul>
                                            <div v-else>
                                                <!-- <small>No results found.</small> -->
                                            </div>
                                            <ul>
                                                <li v-for="(item, index) in showProCategories" :key="index">
                                                    <span v-html="item">{{ item }}</span> <button type="button" class="btn bg-danger-light " style="background-color: transparent !important; " @click="removeCategory(item)"><i class="lni lni-circle-minus " style="font-size: 12px;"></i></button>
                                                </li>
                                            </ul>

                                            <span class="text-danger" v-if="errors.category">{{ errors.category[0] }}</span>
                                            <span class="d-none">
                                                <textarea v-model="multi_categories" placeholder="Selected Value" class="w-100"></textarea>
                                            </span>
                                            <div v-if="selectedItems.length" class="bgColo">
                                                <hr />
                                                <div v-for="item in selectedItems" :key="item.id">
                                                    {{ item.category }} <a href="javascript:void(0);" class="text-danger" @click="removeFromSelected(item)"><i class="fadeIn animated bx bx-minus-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-description-1" class="">Short
                                            Description</label>
                                        <client-only placeholder="loading...">
                                            <ckeditor-nuxt v-model="insertdata.short_description" :config="editorConfig"
                                                class="form-control" />
                                        </client-only>
                                    </div>
                                    <div class="form-group mb-2 " style="min-height: 100px;">
                                        <label for="input-description-1" class="">Description</label>
                                        <client-only placeholder="loading...">
                                            <ckeditor-nuxt v-model="insertdata.description" :config="editorConfig"
                                                class="form-control" />
                                        </client-only>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5>Basic information</h5>
                                </div>
                                <div class="card-body">
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label">Product Tags</label>
                                        <input type="text" placeholder="Product Tags" v-model="insertdata.ptag"
                                            class="form-control" @input="addCommas" />
                                        <input type="hidden" placeholder="Product Tags" v-model="insertdata.product_tag"
                                            class="form-control" />
                                        {{product_tag_msg}}
                                        <small>Comma separated</small>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="">Meta Tag Title</label>
                                        <input type="text" name="meta_title" value placeholder="Meta Tag Title"
                                            v-model="insertdata.meta_title" class="form-control" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-description-1" class="form-label">Meta Tag
                                            Description</label>
                                        <textarea name="meta_description" rows="3" placeholder="Meta Tag Description"
                                            v-model="insertdata.meta_description" id="meta_description"
                                            class="form-control"></textarea>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-description-1" class="form-label">Meta Tag
                                            Keywords</label>
                                        <textarea name="meta_keyword" rows="3" placeholder="Meta Tag Keywords"
                                            class="form-control" v-model="insertdata.meta_keyword"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h6>Product Details </h6>
                                </div>
                                <div class="card-body">
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label required-label">SKU</label>
                                        <input type="text" required placeholder="SKU" v-model="insertdata.sku"
                                            class="form-control" />
                                        <span class="text-danger" v-if="errors.sku">{{
                                            errors.sku[0] }}</span>
                                        <small>Stock Keeping Unit</small>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="col-sm-4 col-form-label">Unit</label>
                                        <input type="text" required placeholder="Unit (e.g. KG, Pc etc)"
                                            v-model="insertdata.unit" class="form-control" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label">Shipping</label>
                                        <select class="form-select form-select-sm" @change="shippingHandaller()"
                                            aria-label=".form-select-sm example" v-model="insertdata.free_shopping">
                                            <option selected>Select</option>
                                            <option value="0">Flat rate </option>
                                            <option value="1">Free shipping</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label sflatRate">Flat
                                            Rate</label>
                                        <input type="text" v-model="insertdata.flat_rate_price"
                                            class="form-control sflatRate" @input="validateInput" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1"
                                            class="form-label required-label">Quantity</label>
                                        <input type="text" placeholder="1" v-model="insertdata.stock_qty"
                                            class="form-control" @input="validateInput" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label required-label">Minimum
                                            Quantity</label>
                                        <input type="text" v-model="insertdata.stock_mini_qty" class="form-control"
                                            @input="validateInput" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label">Out Of Stock
                                            Status</label>
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                                            v-model="insertdata.stock_status">
                                            <option selected>Select</option>
                                            <!-- <option value="1">2-3 Days</option> -->
                                            <option value="2">In Stock</option>
                                            <option value="3">Out Of Stock</option>
                                            <option value="4">Pre-Order</option>
                                            <option value="5">Others</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="card">
                                <div class="card-header">
                                    <h6>Price Details</h6>
                                </div>
                                <div class="card-body">
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label required-label">Price</label>
                                        <input type="text" placeholder="00.00" v-model="insertdata.price"
                                            class="form-control" @input="validateInput" />
                                        <span class="text-danger" v-if="errors.price">{{
                                            errors.price[0] }}</span>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label">Discount</label>
                                        <input type="text" placeholder="0" v-model="insertdata.discount"
                                            class="form-control" @input="validateInput" />
                                        <select class="form-select form-select-sm mt-2"
                                            aria-label=".form-select-sm example" v-model="insertdata.discount_status">
                                            <option selected>Select</option>
                                            <option value="1">Percent</option>
                                            <option value="2">Flat</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label">Shipping
                                            Days</label>
                                        <input type="text" v-model="insertdata.shipping_days" class="form-control"
                                            @input="validateInput" />
                                        <span>Days</span> <br>
                                        <span class="text-danger" v-if="errors.shipping_days">{{
                                            errors.shipping_days[0] }}</span>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class="form-label">VAT/Tax </label>
                                        <select class="form-select" @change="vathandaller()"
                                            aria-label=".form-select-sm example" v-model="insertdata.vat_status">
                                            <option selected>Select</option>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-title-1" class=" form-label vat_">Amount in
                                            percentage(%)</label>
                                        <input type="text" v-model="insertdata.vat" class="form-control vat_"
                                            @input="validateInput" />
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h6>Product images </h6>
                                </div>
                                <div class="card-body">
                                    <img v-if="previewUrl" :src="previewUrl" alt="Preview"
                                        style="height: 100px; width: 100px;" class="img-fluids border" />
                                    <img :src="productImg" style="height: 100px; width: 100px;" alt="N/A"
                                        class="img-fluids border max-width-100 img-thumbnail" />
                                    <div class="form-group mb-2 ">
                                        <label for="input-meta-description-1"
                                            class="form-label required-label">Thumbnail
                                            Image <span class="text-danger">*(300x300)</span> </label>
                                        <input type="file" value class="form-control" accept="image/png,image/jpeg"
                                            ref="files" @change="previewImage" />
                                        <span class="text-danger" v-if="errors.files">{{
                                            errors.files[0] }}</span>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="input-meta-description-1" class="form-label">Additional
                                            Image<span class="text-danger">*(300x300)</span></label>
                                        <input type="file" multiple class="form-control" accept="image/png,image/jpeg"
                                            @change="handleImageUpload" ref="images" />


                                        <div class="row mt-3">
                                            <div class="col-md-3" v-for="(data, index) in productAddImgs" :key="index">
                                                <img :src="data.images" alt="N/A" class=" img-thumbnail" />
                                                <button type="button" style="font-size: 10px;"
                                                    class="btn w-100 btn-danger mt-1" @click="removeImages(data.id)"><i
                                                        class="fadeIn  animated bx bx-trash-alt"></i></button>
                                            </div>
                                            <div class="col-md-3" v-for="(image, index) in images" :key="index">
                                                <img :src="image.url" class="img-thumbnail  w-100 " alt="Preview" />
                                                    <button type="button" style="font-size: 10px;"
                                                        class="btn w-100 btn-danger mt-1 btn-sm"
                                                        @click="removeImage(index)"><i
                                                            class="fadeIn  animated bx bx-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-outline-success px-5 w-100"><i
                                            class="bx bx-check-circle mr-1"></i> Save & Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- basic information part end here  -->
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>

<script>
    export default {
        directives: {
            'click-outside': require('@/directives/click-outside').default
        },
        components: {
            'ckeditor-nuxt': () => {
                if (process.client) {
                    return import('@blowstack/ckeditor-nuxt')
                }
            },
        },
        head: {
            title: 'Product Edit',
        },
        data() {
            return {
                editorConfig: {
                    removePlugins: ['Title'],
                    simpleUpload: {
                        uploadUrl: 'path_to_image_controller',
                        headers: {
                            'Authorization': 'optional_token'
                        }
                    }
                },
                insertdata: {
                    id: '',
                    name: '',
                    description: '',
                    meta_title: '',
                    meta_description: '',
                    meta_keyword: '',
                    description: '',
                    parent_id: 0,
                    mobile_view_class: '',
                    flat_rate_price: '',
                    cash_dev_status: '',
                    product_tag: '',
                    discount: '',
                    discount_status: '1',
                    sku: '',
                    model: '',
                    external_link: '',
                    price: '',
                    unit: '',
                    stock_qty: '1',
                    stock_mini_qty: '1',
                    stock_status: '2',
                    free_shopping: '1',
                    flat_rate_status: '',
                    shipping_days: '1',
                    ptag: '',
                    vat: '',
                    vat_status: '',
                    tax: '',
                    tax_status: '',
                    status: '1',
                    manufacturer: '',
                    download_link: '',
                    brand: '0',

                },
                product_cat: [],
                arr_his_val: [],
                selectedItem: [],
                historVarient: [{
                    varient_id: '',
                    sku: '',
                    qty: '',
                    price: '',
                    file: ''
                }],
                arr_val: [],
                attributeslist: [],
                attrValList: [],
                pro_arr_val_history: [],
                productImg: "",
                productAddImgs: [],
                notifmsg: '',
                errors: {},
                //from product-add
                inputValue: '',
                previewUrl: null,
                // addPreviewUrls: [],
                images: [],
                selectedCategory: null,
                multi_categories: '',
                results: [],
                selectedItems: [],
                categories: '',
                searchResults: [],
                parentAttributes: [],
                showProCategories: [],
                attrVals: [],
                modelresults: [],
                manufrresults: [],
                product_tag_msg: '',
                //end 
                file: '',
                files: '',
            }
        },
        async mounted() {
            this.productDetails();
            this.varientHistory();
            this.searchModels();
            this.searchmanuf();
            await this.loadCKEditor();

            CKEDITOR.replace('editor');
        },
        methods: {
            shippingHandaller() {
                if (this.insertdata.free_shopping === "1") {
                    $(".sflatRate").fadeOut();
                } else {
                    $(".sflatRate").fadeIn();
                }
            },
            vathandaller() {
                if (this.insertdata.vat_status === "1") {
                    $(".vat_").fadeIn();
                } else {
                    $(".vat_").fadeOut();
                }

            },
            async searchModels() {
                try {
                    const response = await this.$axios.get(`/brands/allbrandlist`);
                    this.modelresults = response.data.data;
                    $(".customerSpinner").hide();
                } catch (error) {
                    console.error(error);
                }

            },
            async searchmanuf() {
                try {
                    const response = await this.$axios.get(`/manufacturers/allmanufacturers`);
                    this.manufrresults = response.data.data;
                    $(".customerSpinner").hide();
                } catch (error) {
                    console.error(error);
                }

            },
            removeCategory(item) {
                let product_id = this.$route.query.parameter;
                this.$axios.get(`/product/deleteCategory`, {
                    params: {
                        item: item,
                        product_id: product_id,
                    }
                }).then(response => {
                    //console.log(`Varient History: ${response.data}`);
                    this.productDetails();
                });

            },
            removeImages(id) {
                this.$axios.get(`/product/additionaIMagesDelete`, {
                    params: {
                        images_id: id
                    }
                }).then(response => {
                    //console.log(`Varient History: ${response.data}`);
                    this.productDetails();
                });
            },
            saveData() {
                const formData = new FormData();
                const input = this.$refs.images;
                for (let i = 0; i < input.files.length; i++) {
                    formData.append('images[]', input.files[i]);
                }
                formData.append('id', this.insertdata.id);
                formData.append('files', this.files);
                // formData.append('images', this.images); //multiple
                formData.append('category', this.multi_categories);
                formData.append('name', this.insertdata.name);
                formData.append('description', this.insertdata.description);
                formData.append('short_description', this.insertdata.short_description);
                formData.append('meta_title', this.insertdata.meta_title);
                formData.append('meta_description', this.insertdata.meta_description);
                formData.append('meta_keyword', this.insertdata.meta_keyword);
                formData.append('product_tag', this.insertdata.product_tag);
                formData.append('brand', this.insertdata.brand);
                formData.append('sku', this.insertdata.sku);
                formData.append('external_link', this.insertdata.external_link);
                formData.append('price', this.insertdata.price);
                formData.append('stock_qty', this.insertdata.stock_qty);
                formData.append('stock_mini_qty', this.insertdata.stock_mini_qty);
                formData.append('stock_status', this.insertdata.stock_status);
                formData.append('manufacturer', this.insertdata.manufacturer);
                formData.append('download_link', this.insertdata.download_link);
                formData.append('status', this.insertdata.status);
                formData.append('keyword', this.insertdata.keyword);
                //new
                formData.append('unit', this.insertdata.unit);
                formData.append('discount', this.insertdata.discount);
                formData.append('discount_status', this.insertdata.discount_status);
                formData.append('free_shopping', this.insertdata.free_shopping);
                formData.append('flat_rate_status', this.insertdata.flat_rate_status);
                formData.append('flat_rate_price', this.insertdata.flat_rate_price);
                formData.append('vat', this.insertdata.vat);
                formData.append('vat_status', this.insertdata.vat_status);
                formData.append('tax', this.insertdata.tax);
                formData.append('tax_status', this.insertdata.tax_status);
                formData.append('cash_dev_status', this.insertdata.cash_dev_status);
                formData.append('shipping_days', this.insertdata.shipping_days);
                // formData.append('status', this.insertdata.status);
                const headers = {
                    'Content-Type': 'multipart/form-data'
                };
                this.$axios.post('/product/product-update',
                    formData, {
                    headers
                }).then((res) => {
                    $('#formrest')[0].reset();
                    this.success_noti();
                    const product_id = res.data.product_id;
                    //alert(product_id);
                    // return false; 
                    this.$router.push({
                        path: '/ecommarce/product-varient',
                        query: {
                            parameter: product_id
                        }
                    })
                    return false;
                    //this.$router.push('/ecommarce/product-list');
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
            validateInput() {
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.price)) {
                    this.insertdata.price = this.insertdata.price.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.discount)) {
                    this.insertdata.discount = this.insertdata.discount.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.stock_qty)) {
                    this.insertdata.stock_qty = this.insertdata.stock_qty.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.stock_mini_qty)) {
                    this.insertdata.stock_mini_qty = this.insertdata.stock_mini_qty.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.flat_rate_price)) {
                    this.insertdata.flat_rate_price = this.insertdata.flat_rate_price.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.shipping_days)) {
                    this.insertdata.shipping_days = this.insertdata.shipping_days.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.vat)) {
                    this.insertdata.vat = this.insertdata.vat.slice(0, -1);
                }
                if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.tax)) {
                    this.insertdata.tax = this.insertdata.tax.slice(0, -1);
                }
            },

            addCommas() {
                this.product_tag_msg = this.insertdata.ptag.replace(/\s+/g, ', ');
                this.insertdata.product_tag = this.product_tag_msg;
            },
            handleImageUpload(event) {
                const files = event.target.files;
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    this.checkImageDimensions(file);
                }
            },
            checkImageDimensions(file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        if (img.width === 300 && img.height === 300) {
                            const url = e.target.result;
                            this.images.push({
                                url,
                                file
                            });
                        } else {
                            alert('Image dimensions must be 300x300 pixels.');
                            this.$refs.images.value = ''; // Reset file input
                            //this.$refs.files = '';
                        }
                    };
                };
                reader.readAsDataURL(file);
            },
            removeImage(index) {
                this.images.splice(index, 1);
            },
            previewImage(event) {
                this.onFileSelected();
                const file = event.target.files[0];
                this.previewUrl = URL.createObjectURL(file);
                this.checkImageDimensionsThunbnail(file);
            },
            checkImageDimensionsThunbnail(file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = () => {
                        if (img.width === 300 && img.height === 300) {
                            this.previewUrl = e.target.result;
                        } else {
                            alert('Image dimensions must be 300x300 pixels.');
                        }
                    };
                };
                reader.readAsDataURL(file);
                this.resetInput();
            },
            resetInput() {
                this.previewUrl = null;
                this.$refs.files.value = '';
            },
            addToSelected(result) {
                //console.log(result);
                this.selectedItems.push(result);
                this.multi_categories = this.selectedItems.map(result => result.id).join(',');
                //this.selectedItemIds = this.selectedItems.map(item => item.id).join(', ');
            },
            removeFromSelected(item) {
                const index = this.selectedItems.indexOf(item);
                if (index !== -1) {
                    this.selectedItems.splice(index, 1);
                    this.updatemulti_categories();
                }
            },
            updatemulti_categories() {
                this.multi_categories = this.selectedItems.map(item => item.id).join(',');
            },
            search() {
                if (this.categories.length > 2) {
                    this.$axios.$get(`/category/search?term=${this.categories}`)
                        .then(response => {
                            this.searchResults = response;
                        })
                        .catch(error => {
                            console.error(error);
                        });
                } else {
                    this.searchResults = [];
                }
            },
            onFileSelected() {
                //this.file = this.$refs.file.files[0];
                this.files = this.$refs.files.files[0];
            },
            loadCKEditor() {
                return new Promise((resolve) => {
                    if (typeof CKEDITOR === 'undefined') {
                        const script = document.createElement('script');
                        script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
                        script.async = true;
                        script.onload = resolve;
                        document.head.appendChild(script);
                    } else {
                        resolve();
                    }
                });
            },
            varientHistory() {
                let product_id = this.$route.query.parameter;
                this.$axios.get(`/product/getVarientHistory`, {
                    params: {
                        product_id: product_id
                    }
                }).then(response => {
                    //console.log(`Varient History: ${response.data}`);
                    this.historVarient = response.data;
                });
            },

            async productDetails() {
                let product_id = this.$route.query.parameter;
                //  alert(product_id);
                this.$axios.get(`/product/productrow/${product_id}`).then(response => {
                    //console.log("product row:" + response.data);
                    this.insertdata.id = response.data.product.id;
                    this.insertdata.name = response.data.product.name;
                    this.insertdata.description = response.data.product.description;
                    this.insertdata.meta_title = response.data.product.meta_title;
                    this.insertdata.meta_description = response.data.product.meta_description;
                    this.insertdata.meta_keyword = response.data.product.meta_keyword;
                    this.insertdata.product_tag = response.data.product.product_tag;
                    this.insertdata.ptag = response.data.product.product_tag;
                    this.insertdata.keyword = response.data.product.keyword;
                    this.insertdata.model = response.data.product.model;
                    this.insertdata.sku = response.data.product.sku;
                    this.insertdata.external_link = response.data.product.external_link;
                    $(".pro_description").html(response.data.product.description);
                    this.insertdata.price = response.data.product.price;
                    this.insertdata.unit = response.data.product.unit;
                    this.insertdata.stock_qty = response.data.product.stock_qty;
                    this.insertdata.stock_mini_qty = response.data.product.stock_mini_qty;
                    this.insertdata.discount = response.data.product.discount;
                    this.insertdata.stock_status = response.data.product.stock_status;
                    this.insertdata.free_shopping = response.data.product.free_shopping;
                    this.insertdata.flat_rate_price = response.data.product.flat_rate_price;
                    this.insertdata.flat_rate_status = response.data.product.flat_rate_status;
                    this.insertdata.shipping_days = response.data.product.shipping_days;
                    this.insertdata.vat = response.data.product.vat;
                    this.insertdata.vat_status = response.data.product.vat_status;
                    this.insertdata.tax = response.data.product.tax;
                    this.insertdata.tax_status = response.data.product.tax_status;
                    this.insertdata.cash_dev_status = response.data.product.cash_dev_status;
                    this.insertdata.status = response.data.product.status;
                    this.insertdata.manufacturer = response.data.product.manufacturer;
                    this.insertdata.download_link = response.data.product.download_link;
                    this.insertdata.brand = response.data.product.brand;

                    this.productImg = response.data.productImg;
                    this.productAddImgs = response.data.product_imgs;
                    this.showProCategories = response.data.product_edit_cat;
                    // = response.data.product_cat;

                });
            },

        },
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
</style>