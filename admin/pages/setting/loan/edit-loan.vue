<template>
    <title>Edit Reward Center</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Edit Reward Center</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/loan/loan-list">Back to List</LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <!-- Start -->
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="border p-4 rounded">
                            <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="card card-primary card-outline card-tabs">
                                    <div class="card-header p-0 pt-1 border-bottom-0">
                                        <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="custom-tabs-three-home-tab"
                                                    data-toggle="pill" href="#custom-tabs-three-home" role="tab"
                                                    aria-controls="custom-tabs-three-home"
                                                    aria-selected="true">General</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content" id="custom-tabs-three-tabContent">
                                            <div class="tab-pane fade active show" id="custom-tabs-three-home"
                                                role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                                                <!-- General  -->


                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-2 col-form-label required-label">Name</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" name="name" placeholder="Name"
                                                            v-model="insertdata.name" class="form-control" />
                                                        <span class="text-danger" v-if="errors.name">{{ errors.name[0]
                                                            }}</span>
                                                    </div>
                                                </div>



                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-2 col-form-label required-label">Value</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" placeholder="0.00" v-model="insertdata.value"
                                                            class="form-control" @keypress="isNumber($event)" />
                                                        <span class="text-danger" v-if="errors.value">{{ errors.value[0]
                                                            }}</span>
                                                    </div>
                                                </div>




                                                <hr />

                                                <div class="alert alert-info" bis_skin_checked="1">
                                                    <i class="fas fa-info-circle"></i>Thumbnail
                                                </div>
                                                <div class="row mb-3">
                                                    <label for="input-meta-description-1"
                                                        class="col-sm-2 col-form-label">Icon</label>
                                                    <div class="col-sm-10">
                                                        <input type="file" value class="form-control" id="fileInput"
                                                            accept="image/png,image/jpeg" ref="files"
                                                            @change="onFileSelected" />
                                                        <span class="text-danger" v-if="errors.files">{{
                                                            errors.files[0] }}</span>
                                                        <img v-if="previewUrl" :src="previewUrl" alt="Preview"
                                                            class="img-fluids" />
                                                    </div>
                                                </div>



                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-2 col-form-label required-label">Status</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-control"
                                                            aria-label=".form-select-sm example"
                                                            v-model="insertdata.status">
                                                            <option selected>Select</option>
                                                            <option value="1">Active</option>
                                                            <option value="0">Inactive</option>
                                                        </select>
                                                        <span class="text-danger" v-if="errors.status">{{
                                                            errors.status[0] }}</span>
                                                    </div>
                                                </div>

                                                <button type="submit" class="btn btn-success px-5 w-100">
                                                    <i class="bx bx-check-circle mr-1"></i> Save
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- END -->
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import swal from 'sweetalert2';
import { useRouter } from 'vue-router';
const router = useRouter();
///import $ from 'jquery';
if (process.client) {
    window.Swal = swal;

}

definePageMeta({
    middleware: 'is-logged-out',
})

const insertdata = reactive({
    id: '',
    name: '',
    value: '',
});
// Define a ref to store the HTML content of the editor

const previewUrlBanner = ref(null);
const previewUrl = ref(null);
const images = ref([]);
const file = ref(null);
const files = ref(null);
const errors = ref({});



const previewImage = (event) => {
    const file = event.target.files[0];
    previewUrl.value = URL.createObjectURL(file);

};

const onFileSelected = (event) => {
    previewImage(event)
    file.value = event.target.files[0];
};



const saveData = () => {
    const formData = new FormData();
    formData.append('files', file.value);
    formData.append('id', insertdata.id);
    formData.append('name', insertdata.name);
    formData.append('value', insertdata.value);
    formData.append('status', insertdata.status);

    console.log(formData);

    axios.post('/loan/insertloanSetting', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        $('#formrest')[0].reset();
        success_noti();
        router.push({
            path: '/setting/loan/loan-list',
        });

    }).catch(error => {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors;
        } else {
            // Handle other types of errors here
            console.error("An error occurred:", error);
        }
    });
};


const success_noti = () => {
    //alert("Your data has been successfully inserted.");
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Your data has been successfully inserted."
    });
};


//Find Product Row
const defaultLoadingrow = () => {
    const id = router.currentRoute.value.query.parameter;
    axios.get(`/loan/loanSettingrows/${id}`).then(response => {
        insertdata.id = response.data.id;
        insertdata.name = response.data.name;
        insertdata.value = response.data.value;
        insertdata.status = response.data.status
        previewUrl.value = response.data.thumnail_img;


    });
};
const productdata = ref([]);
const fetchCategoryData = async () => {
    try {
        const response = await axios.get(`/trading/alltraCatList`);
        productdata.value = response.data.data;

    } catch (error) {
        // Handle error
    }
};
const isNumber = ($event) => {
    let keyCode = $event.keyCode ? $event.keyCode : $event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
    }
};

// Call the loadeditor function when the component is mounted
onMounted(async () => {
    fetchCategoryData();
    defaultLoadingrow();
});
// 
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

.autocomplete-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 100%;
}

.autocomplete-item {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.autocomplete-item:hover {
    background-color: #f2f2f2;
}

.checkbox-wrapper {
    display: flex;

}
</style>