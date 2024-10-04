<template>
    <title>Edit Boost Mining </title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Edit Boost Mining</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/boost/boostBotList">Back to List</LazyNuxtLink>
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
                        <div class="card-body">
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
                                                   
                                                    <div class="row mb-3 required">
                                                        <label for="input-name-1"
                                                            class="col-sm-3 col-form-label required-label">Mining
                                                            Category </label>
                                                        <div class="col-sm-9">
                                                            <select v-model="insertdata.mining_categogy_id"
                                                                class="form-control">
                                                                <option value="" selected>Select a category</option>
                                                                <option v-for="category in catData" :key="category.id"
                                                                    :value="category.id"> {{ category.name }} </option>
                                                            </select>
                                                            <span class="text-danger"
                                                                v-if="errors.mining_categogy_id">{{
                                                                errors.mining_categogy_id[0] }}</span>
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
                                                            class="col-sm-3 col-form-label required-label">Level
                                                            Cost</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="insertdata.level_cost"
                                                                class="form-control" @keypress="isNumber($event)" />
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3 required">
                                                        <label for="input-name-1"
                                                            class="col-sm-3 col-form-label required-label">Total
                                                            Seconds</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="insertdata.total_seconds"
                                                                class="form-control" @keypress="isNumber($event)" />
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3 required">
                                                        <label for="input-name-1"
                                                            class="col-sm-3 col-form-label required-label">Hours</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" v-model="insertdata.hours"
                                                                class="form-control" @keypress="isNumber($event)" />
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

if (process.client) {
    window.Swal = swal;

}

definePageMeta({
    middleware: 'is-logged-out',
    title: 'Community' // Set your desired page title here

})
const file = ref(null);

const insertdata = reactive({
    id: "",
    name: "",
    mining_categogy_id: "",
    level_cost: "",
    total_seconds: "",
    hours: "",
    status: 1,
});
const errors = ref({});
const catData = ref([])

//Find Product Row
const defaultCallingRow = () => {
    const id = router.currentRoute.value.query.parameter;
    //console.log("----" + category_id);
    axios.get(`/mining/boostbotrow/${id}`).then(response => {
        console.log("product row:" + response.data.data.id);
        insertdata.id = response.data.data.id;
        insertdata.name = response.data.data.name;
        insertdata.mining_categogy_id = response.data.data.mining_categogy_id;
        insertdata.level_cost = response.data.data.level_cost;
        insertdata.total_seconds = response.data.data.total_seconds;
        insertdata.hours = response.data.data.hours;
        insertdata.status = response.data.data.status;

    });
};

const isNumber = ($event) => {
    let keyCode = $event.keyCode ? $event.keyCode : $event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
    }
};

const saveData = () => {
    const formData = new FormData();
    formData.append("id", insertdata.id);
    formData.append("name", insertdata.name);
    formData.append("mining_categogy_id", insertdata.mining_categogy_id);
    formData.append("level_cost", insertdata.level_cost);
    formData.append("total_seconds", insertdata.total_seconds);
    formData.append("hours", insertdata.hours);
    formData.append("status", insertdata.status);
    axios.post("/mining/updateBot", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((res) => {
            $("#formrest")[0].reset();
            success_noti();
            router.push({ path: "/setting/boost/boostBotList" });
        })
        .catch((error) => {
            if (error.response && error.response.status === 422) {
                // Check if general validation errors are present
                if (error.response.data.errors) {
                    errors.value = Object.values(error.response.data.errors).flat();
                }
                // Check if specific errors_name is present
                
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

// Call the loadeditor function when the component is mounted
onMounted(async () => {
    defaultCallingRow();
    fetchData();

});

</script>