<template>
    <title>Add Mining Duration</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Mining Duration</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/duration/mining-duration-list">Back to List</LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <!-- <button @click="pageRedirect()">Pages</button> -->
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
                                                <div v-if="errors.length" class="text-danger text-center">
                                                    <div v-for="(error, index) in errors" :key="index"
                                                        class="error-message">
                                                        * {{ error }}
                                                    </div>
                                                </div>

                                                <!-- Specific errors_name message -->
                                                <div v-if="errorsName" class="text-danger text-center error-message">
                                                    * {{ errorsName }}
                                                </div>
                                                <!-- <span class="text-danger" v-if="errors_name">{{errors_name}}</span> -->
                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Select Categoryes</label>
                                                    <div class="col-sm-9">
                                                        <select class="form-control ms-2 w-100" v-model="insertdata.mining_category_id" >
                                                            <option v-for="cat in categories" :key="cat.id" :value="cat.id"> {{ cat.name }}</option>
                                                        </select>
                                                        <span class="text-danger" v-if="errors.name">{{ errors.name[0]}}</span>
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Packages Name</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.packages_name" class="form-control"/>
                                                        <span class="text-danger" v-if="errors.packages_name">{{ errors.packages_name[0]}}</span>
                                                    </div>
                                                </div>

 
                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Duration in days</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.duration" class="form-control" @keypress="isNumber($event)" />
                                                            <span class="text-danger" v-if="errors.duration">{{ errors.duration[0]}}</span>
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Prices</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.prices" class="form-control" @keypress="isNumber($event)" />
                                                        <span class="text-danger" v-if="errors.prices">{{ errors.prices[0]}}</span>

                                                    </div>
                                                </div>


                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Status</label>
                                                    <div class="col-sm-9">
                                                        <select class="form-control ms-2 w-100" v-model="insertdata.status" >
                                                            <option value="1">Active</option>
                                                            <option value="0">Inactive</option>
                                                        </select>
                                                        <span class="text-danger" v-if="errors.status">{{ errors.status[0]}}</span>

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
definePageMeta({
    middleware: "is-logged-out",
});
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
const router = useRouter();
 
const errors = ref([]);
const errorsName = ref("");
const categories = ref([]);
const insertdata = reactive({
    mining_category_id: "",
    packages_name: "",
    duration: "",
    prices: "",
    status: 1,
});

 
const isNumber = ($event) => {
    let keyCode = $event.keyCode ? $event.keyCode : $event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
    }
};

const saveData = () => {
    errors.value = [];
    errorsName.value = "";
    const formData = new FormData();
    formData.append("mining_category_id", insertdata.mining_category_id);
    formData.append("packages_name", insertdata.packages_name);
    formData.append("duration", insertdata.duration);
    formData.append("prices", insertdata.prices);
    formData.append("status", insertdata.status);

    axios.post("/mining/inserMiningDuration", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            $("#formrest")[0].reset();
            success_noti();
            router.push({ path: "/setting/duration/mining-duration-list" });
        })
        .catch((error) => {
            if (error.response && error.response.status === 422) {
                // Check if general validation errors are present
                if (error.response.data.errors) {
                    errors.value = Object.values(error.response.data.errors).flat();
                }
                // Check if specific errors_name is present
                if (error.response.data.errors_name) {
                    errorsName.value = error.response.data.errors_name;
                }
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
        },
    });
    Toast.fire({
        icon: "success",
        title: "Your data has been successfully inserted.",
    });
};
const fetchData = async () => {
    try {
        const response = await axios.get("/mining/getMiningCategory");
        categories.value = response.data;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
onMounted(() => {
    fetchData();
});
</script>

<style scoped>
.required-label::after {
    content: "\2605";
    color: red;
    margin-right: 4px;
}

.text-danger {
    color: red;
}

.text-center {
    text-align: center;
}

.error-message {
    margin: 0.5em 0;
}
</style>