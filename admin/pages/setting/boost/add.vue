<template>
    <title>Add Boost Mining</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Boost Mining</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/boost/boostMiningSetupList">Back to List</LazyNuxtLink>
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
                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Mining Category </label>
                                                    <div class="col-sm-9">
                                                        <select v-model="insertdata.mining_categogy_id" class="form-control">
                                                            <option value="" selected>Select a category</option>
                                                            <option v-for="category in catData" :key="category.id" :value="category.id"> {{ category.name }} </option>
                                                        </select>
                                                            <span class="text-danger" v-if="errors.mining_categogy_id">{{ errors.mining_categogy_id[0] }}</span>
                                                    </div>
                                                </div>

                                                <!-- <span class="text-danger" v-if="errors_name">{{errors_name}}</span> -->
                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Name</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="name" v-model="insertdata.name"
                                                            class="form-control" />
                                                        <span class="text-danger" v-if="errors.name">{{
                                                            errors.name[0]
                                                            }}</span>
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Level Cost</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.level_cost"
                                                            class="form-control" @keypress="isNumber($event)" />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Mining Per Seconds</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.mining_per_seconds"
                                                            class="form-control" @keypress="isNumber($event)" />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Sort</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.sort"
                                                            class="form-control" @keypress="isNumber($event)"/>
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
import swal from "sweetalert2";
const router = useRouter();
window.Swal = swal;
const errors = ref([]);
const catData = ref([])
const errorsName = ref("");

const insertdata = reactive({
    name: "",
    mining_categogy_id: "",
    level_cost: "",
    mining_per_seconds: "",
    sort: "",
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
    formData.append("name", insertdata.name);
    formData.append("mining_categogy_id",insertdata.mining_categogy_id);
    formData.append("level_cost", insertdata.level_cost);
    formData.append("mining_per_seconds", insertdata.mining_per_seconds);
    formData.append("sort", insertdata.sort);
    formData.append("status", insertdata.status);
    axios.post("/mining/insertBotMining", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            $("#formrest")[0].reset();
            success_noti();
            router.push({ path: "/setting/boost/boostMiningSetupList" });
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
    const Toast = swal.mixin({
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
        const response = await axios.get(`/mining/allMniningCategorys`);
        catData.value = response.data.categories;
    } catch (error) {
        // Handle error
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