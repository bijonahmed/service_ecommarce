<template>
    <title>Add Global Wallet Address</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Global Wallet Address</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/wallet/globalwalletAddressList">Back to List</LazyNuxtLink>
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
                                                        class="col-sm-3 col-form-label required-label">Wallet Address</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="name" v-model="insertdata.name"
                                                            class="form-control" />
                                                        <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                                    </div>
                                                </div>



                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Lock/Unlock</label>
                                                    <div class="col-sm-9">
                                                        <select class="form-control ms-2 w-100" v-model="insertdata.lock_unlock" >
                                                            <option value="0">Unlock</option>
                                                            <option value="1">Lock</option>
                                                            
                                                        </select>
                                                        <span class="text-danger" v-if="errors.lock_unlock">{{ errors.lock_unlock[0]}}</span>

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
import swal from "sweetalert2";
const router = useRouter();
window.Swal = swal;
const errors = ref([]);
const errorsName = ref("");

const insertdata = reactive({
    name: "",
    lock_unlock: 0,
    status: 1,
});


const saveData = () => {
    errors.value = [];
    errorsName.value = "";
    const formData = new FormData();
    formData.append("name", insertdata.name);
    formData.append("lock_unlock", insertdata.lock_unlock);
    formData.append("status", insertdata.status);

    axios
        .post("/category/addglobalwalletAddress", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            $("#formrest")[0].reset();
            success_noti();
            router.push({ path: "/setting/wallet/globalwalletAddressList" });
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