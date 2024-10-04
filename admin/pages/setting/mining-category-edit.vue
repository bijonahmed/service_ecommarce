<template>
    <title>Edit Mining Category</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Mining Category</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/mining-category-list">Back to List</LazyNuxtLink>
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
                                                        class="col-sm-3 col-form-label required-label">Name</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.name"
                                                            class="form-control" />
                                                            <input type="hidden" v-model="insertdata.id" class="form-control" />
                                                        <span class="text-danger" v-if="errors.name">{{
                                                            errors.name[0]
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Duration in
                                                        hour</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.duration_in_hour"
                                                            class="form-control" @keypress="isNumber($event)"
                                                            @keyup="getMinite" />

                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Duration in Minute</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.minute" disabled
                                                            class="form-control" @keypress="isNumber($event)" />

                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Duration in Second</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.second" disabled
                                                            class="form-control" @keypress="isNumber($event)" />

                                                    </div>
                                                </div>


                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Daily mining amount</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.daily_mining_amount" @keyup="calcuated"
                                                            class="form-control" @keypress="isNumber($event)" />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Minining Value per second</label>
                                                    <div class="col-sm-9">
                                                        <input type="text"
                                                            v-model="insertdata.minining_amount_per_secnd"
                                                            class="form-control" @keypress="isNumber($event)" disabled />

                                                    </div>
                                                </div>



                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Mining value mention at Hour</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" v-model="insertdata.mining_value_mention_at_hour" class="form-control" @keypress="isNumber($event)" disabled />
                                                    </div>
                                                </div>


                                                <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Description</label>
                                                    <div class="col-sm-9">
                                                        <textarea
                                                            v-model="insertdata.offer_description"
                                                            class="form-control"></textarea>
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
    id: "",
    name: "",
    minining_amount_per_secnd: "",
    daily_mining_amount: "",
    mining_value_mention_at_hour: "",
    second: "",
    minute: "",
    duration_in_hour: "",
    offer_description: "",
    status: 1,
});

const seconds = ref("86400"); //  86400 seconds = 24 hours. 

const calcuated = () => {
    const result   =  insertdata.daily_mining_amount / seconds.value;
    console.log("results: ",result.toFixed(8));
    insertdata.minining_amount_per_secnd = result.toFixed(8);


    const result_1 = insertdata.second * result;
    insertdata.mining_value_mention_at_hour = result_1.toFixed(8);
    //mining_value_mention_at_hour


}

const getMinite = () => {
    const duration_hour = insertdata.duration_in_hour;
    const miniut_total = duration_hour * 60;
    const second_total = miniut_total * 60;

    insertdata.minute = miniut_total;
    insertdata.second = second_total;
};

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
    formData.append("id", insertdata.id);
    formData.append("name", insertdata.name);
    formData.append(
        "minining_amount_per_secnd",
        insertdata.minining_amount_per_secnd
    );
    formData.append("second", insertdata.second);
    formData.append("minute", insertdata.minute);
    formData.append("duration_in_hour", insertdata.duration_in_hour);
    formData.append("offer_description", insertdata.offer_description);
    formData.append("daily_mining_amount", insertdata.daily_mining_amount);
    formData.append("mining_value_mention_at_hour", insertdata.mining_value_mention_at_hour);

    formData.append("status", insertdata.status);

    axios
        .post("/category/editMiningCategory", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            $("#formrest")[0].reset();
            success_noti();
            router.push({ path: "/setting/mining-category-list" });
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

const checkRow = () => {
        const id = router.currentRoute.value.query.parameter;
        insertdata.id = id;
  axios.get(`/category/minningCategoryrow/${id}`).then(response => {
        insertdata.id = response.data.data.id;
        insertdata.name = response.data.data.name;
        insertdata.minining_amount_per_secnd = response.data.data.minining_amount_per_secnd;
        insertdata.second = response.data.data.second;
        insertdata.offer_description = response.data.data.offer_description;
        insertdata.minute = response.data.data.minute;
        insertdata.duration_in_hour = response.data.data.duration_in_hour;
        insertdata.daily_mining_amount = response.data.data.daily_mining_amount;
        insertdata.mining_value_mention_at_hour = response.data.data.mining_value_mention_at_hour;
  });

}

onMounted(async () => {
    checkRow();
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