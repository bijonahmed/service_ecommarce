<template>
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
                                    <router-link to="/ecommarce/product-list">Product List</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Add Attribue Varient</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!--end breadcrumb-->
                <!--end row-->
                <div class="row">
                    <div class="row">
                        
                    <div class="col-md-6 mx-auto">
                        <div class="card border-top border-0 border-4 border-info">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <!-- <div class="card"> -->

                                        <div class="row">
                                            <div class="col-12">
                                                <select v-model="insertdata.attr_id" class="form-control w-100"
                                                    @change="showAttrVal(insertdata.attr_id)">
                                                    <option disabled value="" selected>Select</option>
                                                    <option v-for="(item, index) in attributeslist" :key="index"
                                                        :value="item.id" :selected="item.selected">
                                                        {{ item.name }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-8">
                                                <br />
                                                <span v-for="(data, index) in attrValList" :key="data.id">
                                                    <input type="checkbox" :value="data.name"
                                                        v-model="insertdata.attr_value"
                                                        @click="handleCheckboxClick($event, data.name)" />
                                                    {{ data.name }} <br />
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                        <hr />
                                        <!-- Generate -->
                                        <div class="attribute-container">
                                            <table class="attribute-table table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Attribute</th>
                                                        <th>Values</th>
                                                        <th>Action</th> <!-- Added delete action column -->
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(data, key) in attributeData" :key="key">
                                                        <td>
                                                            <!-- {{ key == '1' ? 'Size' : 'Color' }} -->
                                                            <!-- Conditional rendering based on the value of key -->
                                                            <span v-if="key == '1'">Size</span>
                                                            <span v-else-if="key == '2'">Color</span>
                                                            <span v-else>''</span>
                                                        </td>
                                                        <td>
                                                            <ul>
                                                                <li v-for="(item, index) in data" :key="index">
                                                                    <!-- Display the item to be deleted -->
                                                                    <span>{{ item }}</span>
                                                                    <!-- Add a delete button -->

                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td><button @click="deleteAttributeValue(key)">Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <button @click="generateCombinations" class="btn btn-success">Generate</button>

                                        <hr />
                                        <form @submit.prevent="insertVarientHistory()" id="formrest"
                                            enctype="multipart/form-data">
                                            <table border="1" class="table table">
                                                <thead>
                                                    <tr>
                                                        <th>Color</th>
                                                        <th>Size</th>
                                                        <th>SKU</th>
                                                        <th>Qty</th>
                                                        <th>Price</th>
                                                        <th>Image Upload</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(combination, index) in varientData" :key="index">
                                                        <td>{{ combination.color }}</td>
                                                        <td>{{ combination.size }}</td>
                                                        <td>
                                                            <input type="hidden" v-model="combination.id" />
                                                            <input type="text" :value="combination.sku"
                                                                @input="updateSKU(index, $event.target.value)"
                                                                placeholder="SKU" style="width: 80px;" />
                                                        </td>
                                                        <td>
                                                            <input type="text" :value="combination.qty"
                                                                @input="updateQty(index, $event.target.value)"
                                                                placeholder="Qty" style="width: 50px;" />
                                                        </td>
                                                        <td>
                                                            <input type="text"
                                                                :value="combination.price ? combination.price : '0.00'"
                                                                @input="updatePrice(index, $event.target.value)"
                                                                placeholder="0.00" style="width: 50px;" />
                                                        </td>
                                                        <td max-width="100px">
                                                            <input value="" class="form-control" type="file"
                                                                @change="onFileChange(index, $event)"
                                                                accept="image/*" />
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn btn-outline-danger"
                                                                @click="deleteVariantRow(combination.id)">DEL</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <button class="btn btn-success btn-sm w-100 btnsize"
                                                type="submit">Submit</button>
                                        </form>
                                        <!-- Start -->

                                    <!-- </div> -->
                                    <!-- <form @submit.prevent="insertVarientHistory()" id="formrest" enctype="multipart/form-data">
                                        <div class="row" v-if="historVarient.length > 0">
                                            <hr />
                                            <div class="alert-dark border-0 bg-dark alert-dismissible fade show">
                                                <div class="text-white">Varient History</div>
                                            </div>
                                            <table class="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col"></th>
                                                        <th scope="col">SKU<span class="required">*</span></th>
                                                        <th scope="col">Qty<span class="required">*</span></th>
                                                        <th scope="col">Price<span class="required">*</span></th>
                                                        <th scope="col">Image Upload<span class="required">*</span></th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(data, index) in historVarient" :key="data.varient_id">
                                                        <th scope="row">{{ index + 1 }}.</th>
                                                        <td>{{ data.path }}</td>
                                                        <td>
                                                            <input type="hidden" v-model="data.varient_id"
                                                                name="varient_id" style="width: 50px;" />
                                                            <input type="text" placeholder="SKU" v-model="data.sku"
                                                                :name="'data[' + index + '][sku]'" style="width: 80px;"
                                                                required />
                                                            <p class="error-message" v-if="errors.name">{{ errors.sku }}
                                                            </p>
                                                        </td>
                                                        <td><input type="text" placeholder="Qty" v-model="data.qty"
                                                                :name="'data[' + index + '][qty]'" style="width: 50px;"
                                                                required /></td>
                                                        <td><input type="text" placeholder="0.00" v-model="data.price"
                                                                :name="'data[' + index + '][price]'"
                                                                style="width: 50px;" required /> </td>
                                                        <td><input type="file" @change="onFileChange(index, $event)"
                                                                accept="image/*" />
                                                        </td>
                                                        <td><button type="button"
                                                                @click="deleteVarrientrow(data.varient_id)">DEL</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button class="btn btn-dark btn-sm w-100 btnsize"
                                                type="submit">Submit</button>
                                        </div>
                                    </form> -->
                                    <!-- END -->
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col-md-6">
                            <form @submit.prevent="addWarranty()" enctype="multipart/form-data">
                                <div class="card  border-top border-0 border-4 border-info">
                                    <div class="card-header">
                                        <h6>Product Warranty</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="card" v-if="getWarrantyData.length >= 0">
                                            <div class="card-body">
                                                <table class="table">
                                                    <tbody>
                                                        <tr class="d-flex align-items-center"
                                                            v-for="(item, index) in getWarrantyData" :key="index">
                                                            <th>#{{ index+1 }}</th>
                                                            <td>
                                                                <p class="m-0 ">{{item.warranty_name}}</p>
                                                            </td>
                                                            <td> <span>Price: ${{item.price}} </span></td>
                                                            <td><a href="javascript:void(0);" class="text-danger"
                                                                    @click="removeW(item.id)"><i
                                                                        class="fadeIn animated bx bx-minus-circle"></i></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="form-group" id="warranty_product">
                                            <div class="card mb-1" v-for="(row, index) in warrantydata" :key="index">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label :for="'Warranty_name_' + index">Warranty</label>
                                                            <input :id="'Warranty_name_' + index" type="text"
                                                                placeholder="6 month, 1 years, 2 years"
                                                                class="form-control" name="warranty"
                                                                v-model="row.warranty">
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label :for="'Warranty_days_' + index">In Days</label>
                                                            <input :id="'Warranty_days_' + index" type="text"
                                                                placeholder="90,180,365" name="days"
                                                                class="form-control" v-model="row.days">
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label :for="'Warranty_price_' + index">Price</label>
                                                            <input :id="'Warranty_price_' + index" type="text"
                                                                placeholder="00.00" name="price" class="form-control"
                                                                v-model="row.price">
                                                        </div>
                                                        <div class="col-md-3"
                                                            v-if="index === 0 || index === warrantydata.length - 1">
                                                            <label style="opacity: 0;">add</label>
                                                            <a href="#" class="btn bg-success-light w-100"
                                                                @click.prevent="addField(index)"
                                                                v-if="index === warrantydata.length - 1">Add
                                                                more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card mb-0">
                                                <div class="card-body">
                                                    <button class="btn bg-success-light w-100">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
</template>

<style>
    .bg-dark {
        background-color: #0d4b88 !important;
    }
</style>

<script>
    export default {
        head: {
            title: 'Attribue Varient',
        },
        data() {
            return {
                getWarrantyData: '',
                warrantydata: [{ warranty: '', days: '', price: '' }],
                formData: [],
                combinationData: [],
                varientData: [],
                attributeData: {},
                insertdata: {
                    attr_id: '',
                    attr_value: []
                },
                data: {
                    sku: '', // Initialize sku property
                    qty: 1, // Initialize qty property
                    price: 120// Initialize price property
                },

                historVarient: [{
                    varient_id: '',
                    sku: '',
                    qty: 1,
                    price: '',
                    file: null
                }],
                arr_val: [],
                attributeslist: [],
                attrValList: [],
                notifmsg: '',
                errors: {},

                selectedAttributeName: '',
                selectedAttributeValues: ''
            }
        },
        async mounted() {
            this.retrieveAttributeData();
            await this.fetchAttributeList();
            await this.fetchVarientDataList();
            this.getWarranty();
        },
        watch: {
            'insertdata.attr_value': function (newValue) {
                // Set selected attribute values
                this.selectedAttributeValues = Array.isArray(newValue) ? newValue.join(', ') : newValue;
            },

        },
        methods: {
            removeW(wid) {
                console.log(wid);
                // const product_id = this.$route.query.parameter;
                this.$axios.get(`/product/deletewarranty/${wid}`)
                    .then(response => {
                        // console.log(response.data);
                        Lobibox.notify('success', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-check-circle',
                            msg: 'Your data has been successfully deleted.'
                        });
                        this.getWarranty();

                    })
                    .catch((error) => {
                        // console.log(error);
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-check-circle',
                            msg: error
                        });

                    })
            },
            addWarranty() {
                const formData = new FormData();
                const product_id = this.$route.query.parameter;
                // console.log(product_id);
                formData.append('product_id', product_id);
                this.warrantydata.forEach((row, index) => {
                    formData.append(`warranty[${index}][warranty]`, row.warranty);
                    formData.append(`warranty[${index}][days]`, row.days);
                    formData.append(`warranty[${index}][price]`, row.price);
                });
                console.log('FormData:', formData);

                this.$axios.post('/product/addWarranty', formData)
                    .then(response => {
                        // console.log(response.data);
                        Lobibox.notify('success', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-check-circle',
                            msg: 'Your data has been successfully inserted.'
                        });
                        this.getWarranty();
                    })
                    .catch((error) => {
                        // console.log(error);
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-check-circle',
                            msg: error
                        });

                    })

            },
            getWarranty() {
                const product_id = this.$route.query.parameter;
                this.$axios.get(`/product/addWarranty/${product_id}`)
                    .then(response => {
                        console.log(response.data);
                        this.getWarrantyData = response.data;
                    })
                    .catch((error) => {
                        console.log(error);

                    })
            },
            addField(index) {
                const newRow = JSON.parse(JSON.stringify(this.warrantydata[index]));
                this.warrantydata.push(newRow);
            },
            updateSKU(index, value) {
                this.varientData[index].sku = value;
            },
            updateQty(index, value) {
                this.varientData[index].qty = value;
            },
            updatePrice(index, value) {
                this.varientData[index].price = value;
            },

            insertVarientHistory() {
                // Prepare data to be sent to the server
                const formData = new FormData();
                this.varientData.forEach(combination => {
                    formData.append('id[]', combination.id);
                    formData.append('color[]', combination.color);
                    formData.append('size[]', combination.size);
                    formData.append('sku[]', combination.sku);
                    formData.append('qty[]', combination.qty);
                    formData.append('price[]', combination.price);
                    if (combination.image) {
                        console.log("combination iamges: ");
                        formData.append('images[]', combination.image);
                    }
                });
                //Remove Local storage 
                localStorage.removeItem('selectedAttribute_1');
                localStorage.removeItem('selectedAttribute_2');
                //END 

                // console.log("=====" + formData);
                this.$axios.post('/product/insertVarient', formData)
                    .then(response => {
                        const product_id = this.$route.query.parameter;
                        this.$router.push({
                            path: '/ecommarce/product-preview',
                            query: {
                                parameter: product_id
                            }
                        });
                        // Handle success response
                        // console.log(response.data);
                    })
                    .catch((error) => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors;
                            const errorMessages = Object.values(this.errors).flat();

                            // Concatenate error messages into a single string
                            const errorMessage = errorMessages.join("<br>");
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.onmouseenter = Swal.stopTimer;
                                    toast.onmouseleave = Swal.resumeTimer;
                                },
                            });
                            Toast.fire({
                                icon: "error",
                                title: errorMessage,
                            });
                        }
                    });
            },

            async deleteVariantRow(id) {
                const product_id = this.$route.query.parameter;
                try {
                    // Ask for confirmation before deleting
                    const confirmDelete = confirm("Are you sure you want to delete this variant?");

                    // If user confirms deletion
                    if (confirmDelete) {
                        const response = await this.$axios.post('/product/deleteVarient', {
                            id: id,
                            product_id: product_id
                        });
                        this.pos4_error_noti();
                        //console.log("Data:", response.data);
                        //console.log("Data:", response.data.varient);
                        this.varientData = response.data.varient;
                        // this.generateCombinations();
                        // console.log('Combinations:', response.data.varient);
                    } else {
                        // If user cancels deletion
                        console.log("Deletion cancelled by user.");
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            },

            handleCheckboxClick(event, checkboxValue) {
                console.log("==event=" + event);
                console.log("=val==" + checkboxValue);
                this.logValues(event, checkboxValue);
                this.retrieveAttributeData();
            },
            deleteAttributeValue(key) {
                //console.log("Key.." + key);
                try {
                    // Remove the specified key from local storage
                    localStorage.removeItem('selectedAttribute_' + key);
                    // Reload data
                    this.retrieveAttributeData();
                } catch (error) {
                    console.error("Error deleting attribute:", error);
                }
            },

            retrieveAttributeData() {
                try {
                    // Clear existing attributeData
                    this.attributeData = {};

                    // Define the prefix for the keys
                    const keyPrefix = 'selectedAttribute_';
                    // Retrieve data for keys matching the prefix
                    const keys = Object.keys(localStorage);
                    keys.forEach(key => {
                        if (key.startsWith(keyPrefix)) {
                            const attributeId = key.replace(keyPrefix, '');
                            const storedData = localStorage.getItem(key);
                            if (storedData !== null) {
                                const parsedData = JSON.parse(storedData);
                                this.$set(this.attributeData, attributeId, parsedData);
                            } else {
                                console.warn("No data found in localStorage for key:", key);
                            }
                        }
                    });

                    console.log("Attribute data retrieved successfully:", this.attributeData);
                } catch (error) {
                    console.error("Error retrieving attribute data:", error);
                }
            },

            async generateCombinations() {
                const product_id = this.$route.query.parameter;
                //selectedAttribute_1
                const size = JSON.parse(localStorage.getItem("selectedAttribute_1")) || [];
                console.log("Size:", JSON.stringify(size));
                //selectedAttribute_2
                const color = JSON.parse(localStorage.getItem("selectedAttribute_2")) || [];
                console.log("Color:", JSON.stringify(color));

                try {
                    // Check if both color and size are selected
                    const response = await this.$axios.post('/product/generate-combinations', {
                        colors: color,
                        sizes: size,
                        product_id: product_id
                    });
                    this.varientData = response.data.varient;
                    //console.log('Combinations:', response.data.varient);
                } catch (error) {
                    console.error('Error:', error);
                }
            },

            showAttrVal(attrId) {
          
                const selectedAttribute = this.attributeslist.find(attr => attr.id === this.insertdata.attr_id);
                this.selectedAttributeName = selectedAttribute ? selectedAttribute.name : '';

                // Reset selected attribute values
                this.selectedAttributeValues = '';
            },
            logValues(event, checkboxValue) {
                if (event.target.checked) {
                    this.insertdata.attr_value.push(checkboxValue); // Add the value to the array
                } else {
                    const index = this.insertdata.attr_value.indexOf(checkboxValue);
                    if (index !== -1) {
                        this.insertdata.attr_value.splice(index, 1); // Remove the value from the array
                    }
                }

                // Define a separate variable to track the previous attribute ID
                if (!this.previousAttributeId) {
                    this.previousAttributeId = null;
                }

                if (event.target.checked) {
                    this.insertdata.attr_value.push(checkboxValue); // Add the value to the array
                } else {
                    const index = this.insertdata.attr_value.indexOf(checkboxValue);
                    if (index !== -1) {
                        this.insertdata.attr_value.splice(index, 1); // Remove the value from the array
                    }
                }
                // Define a separate variable to track the attribute ID and its values
                if (!this.selectedAttributes) {
                    this.selectedAttributes = {};
                }

                // Check if the attribute ID has changed
                if (this.previousAttributeId !== this.insertdata.attr_id) {
                    // Store the previous attribute ID's values in local storage
                    if (this.previousAttributeId && this.selectedAttributes[this.previousAttributeId]) {
                        localStorage.setItem(`selectedAttribute_${this.previousAttributeId}`, JSON.stringify(this.selectedAttributes[this.previousAttributeId]));
                    }
                    // Clear previous attribute values
                    if (this.previousAttributeId) {
                        delete this.selectedAttributes[this.previousAttributeId];
                    }
                    // Initialize the array for the new attribute ID if it doesn't exist
                    if (!this.selectedAttributes[this.insertdata.attr_id]) {
                        this.selectedAttributes[this.insertdata.attr_id] = [];
                    }
                    this.previousAttributeId = this.insertdata.attr_id;
                }

                // Update the values for the current attribute ID
                if (event.target.checked) {
                    this.selectedAttributes[this.insertdata.attr_id].push(checkboxValue); // Add the value to the array
                } else {
                    const index = this.selectedAttributes[this.insertdata.attr_id].indexOf(checkboxValue);
                    if (index !== -1) {
                        this.selectedAttributes[this.insertdata.attr_id].splice(index, 1); // Remove the value from the array
                    }
                }

                // Store the object in local storage
                localStorage.setItem(`selectedAttribute_${this.insertdata.attr_id}`, JSON.stringify(this.selectedAttributes[this.insertdata.attr_id]));
                // Get the selected attribute name based on attr_id
                const selectedAttribute = this.attributeslist.find(attr => attr.id === this.insertdata.attr_id);
                const selectedAttributeName = selectedAttribute ? selectedAttribute.name : '';
                // Log the selected attribute name and values
                const selectedValues = this.selectedAttributes[this.insertdata.attr_id].join(', ');
                console.log('Selected checkbox values:', selectedValues);
                console.log('Selected attribute name:', selectedAttributeName);

            },
            initializeHistorVarient() {
                this.historVarient = this.varientData.map(() => ({}));
            },
            onFileChange(index, event) {
                const files = event.target.files;
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    // Assuming each combination is an object with an image property
                    this.$set(this.varientData[index], 'image', file); // Update the image property
                }
            },


            showAttrVal(attribue_id) {
                this.$axios.get(`/category/attributeValRows/${attribue_id}`).then(response => {
                    this.attrValList = response.data; // this method no need now already tell me mamun bhai 
                });
            },
            /*
          saveData() {
              const formData = new FormData();
              formData.append('file', this.file);
              formData.append('id', this.insertdata.id);
              formData.append('name', this.insertdata.name);
              formData.append('mobile_view_class', this.insertdata.mobile_view_class);
              //formData.append('description', desc);
              formData.append('description', this.insertdata.description);
              formData.append('meta_title', this.insertdata.meta_title);
              formData.append('meta_description', this.insertdata.meta_description);
              formData.append('meta_keyword', this.insertdata.meta_keyword);
              formData.append('parent_id', this.insertdata.parent_id);
              formData.append('status', this.insertdata.status);
              formData.append('keyword', this.insertdata.keyword);
              // formData.append('status', this.insertdata.status);
              const headers = {
                  'Content-Type': 'multipart/form-data'
              };
              this.$axios.post('/category/save',
                  formData, {
                  headers
              }).then((res) => {
                  $('#formrest')[0].reset();
                  this.success_noti();
                  this.$router.push('/ecommarce/category-list');
              }).catch(error => {
                  if (error.response.status === 422) {
                      this.errors = error.response.data.errors;
                  }
              });
          },
          */

            async fetchAttributeList() {
                try {
                    const response = await this.$axios.get(`/category/attributes-list`);
                    this.attributeslist = response.data;
                } catch (error) {
                    console.error(error);
                }
            },

            async fetchVarientDataList() {
                try {
                    const product_id = this.$route.query.parameter;
                    const response = await this.$axios.get(`/product/varient-list/${product_id}`);
                    this.varientData = response.data.varient;
                } catch (error) {
                    console.error("===============");
                }
            },

            pos4_error_noti() {
                Lobibox.notify('error', {
                    pauseDelayOnHover: true,
                    icon: 'bx bx-x-circle',
                    size: 'mini',
                    continueDelayOnInactiveTab: false,
                    position: 'bottom left',
                    msg: 'Successfully Remove Varient.'
                });
            }

        },

    }

</script>
<style scoped>
    /* Scoped styles to apply only to this component */
    .attribute-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .attribute-item {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        flex: 1 1 200px;
        /* Adjust width as needed */
    }

    .attribute-list {
        list-style-type: none;
        padding: 0;
    }

    .attribute-list li {
        margin-bottom: 5px;
    }
</style>