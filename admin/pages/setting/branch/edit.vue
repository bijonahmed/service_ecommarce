<template>
    <title>Edit Bank</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Edit Bank</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/setting/bank/list">Back to List</LazyNuxtLink>
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
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control name" v-model="insertdata.name"
                                                id="name" placeholder="Name">
                                            <span class="text-danger" v-if="errors.name">{{ errors.name[0]
                                            }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3 required">
                                                    <label for="input-name-1"
                                                        class="col-sm-3 col-form-label required-label">Bank Name
                                                    </label>
                                                    <div class="col-sm-9">
                                                        <select v-model="insertdata.bank_id" class="form-control">
                                                            <option value="">Select Bank</option>
                                                            <option v-for="bank in bankData" :key="bank.id"
                                                                :value="bank.id">
                                                                {{ bank.name }}
                                                            </option>
                                                        </select>
                                                        <span class="text-danger" v-if="errors.name">{{
                                                            errors.name[0]
                                                            }}</span>
                                                    </div>
                                                </div>


                                    
                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-control">
                                                <option value="1" selected>Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i
                                                    class="bx bx-check-circle mr-1"></i> Submit</button>
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
    id: '',
    name: '',
    bank_id: '',
    status: 1,
});


const previewUrl = ref(null);
const errors = ref({});
const bankData = ref({});
const notifmsg = ref('');
const errorsName = ref("");
 

//Find Product Row
const sliderrow = () => {
    const id = router.currentRoute.value.query.id;
    //console.log("----" + category_id);
    axios.get(`/setting/editBranch/${id}`).then(response => {
        console.log("product row:" + response.data.data.id);
        insertdata.id = response.data.data.id;
        insertdata.bank_id = response.data.data.bank_id;
        insertdata.name = response.data.data.name;
        insertdata.status = response.data.data.status;

    });
};
const getbank = () => {

axios.get(`/setting/getallActiveBank`).then(response => {
    console.log("product row:" + response.data.data);
    bankData.value = response.data;

});
};

 
const saveData = () => {
    errors.value = [];
    errorsName.value = "";
    const formData = new FormData();
    formData.append("id", insertdata.id);
    formData.append("status", insertdata.status);
    formData.append("bank_id", insertdata.bank_id);
    formData.append("name", insertdata.name);
    axios
        .post("/setting/addBranch", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            $("#formrest")[0].reset();
            success_noti();
            router.push({ path: "/setting/branch/list" });
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




// Call the loadeditor function when the component is mounted
onMounted(async () => {
    sliderrow();
    getbank();

});

</script>
 
<style scoped>
.img_slide {
    max-height: 500px;
    width: 60%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px #3f51b514;
    margin: 20px 0px;
    /* min-width: 350px; */
    /* margin: 10px 8px; */
    height: 100%;
}

.img_slide a {
    /* height: 100% !important; */
    width: 100%;
    display: block;
    height: 400px;
}

.img_slide a img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    height: 100%;
}
</style>