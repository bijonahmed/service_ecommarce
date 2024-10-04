<template>
    <title>Order Management List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Order Management</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Main content -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <!-- table section start here  -->
                    <div class="card">
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <form @submit.prevent="saveData()" id="formrest"  enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label>New Agency Store
                                                <span class="text-primary">Please input the time in minutes(Ex: 10 Hours
                                                    = 600
                                                    minutes)</span></label>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="nags_receive" @input="filterNonNumeric_1" class="form-control" />
                                                    <span class="text-danger" v-if="errors.nags_receive">{{ errors.nags_receive[0] }}</span>
                                                    <p for="">Goods to be receive</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes"
                                                        class="form-control" v-model="nags_process" @input="filterNonNumeric_2"/>
                                                        <span class="text-danger" v-if="errors.nags_process">{{ errors.nags_process[0] }}</span>
                                                    <p for="">Platform process</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes"
                                                        class="form-control" v-model="nags_shipped" @input="filterNonNumeric_3" />
                                                        <span class="text-danger" v-if="errors.nags_shipped">{{ errors.nags_shipped[0] }}</span>
                                                    <p for="">To be shipped</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes"
                                                        class="form-control"  v-model="nags_complete" @input="filterNonNumeric_4"/>
                                                        <span class="text-danger" v-if="errors.nags_complete">{{ errors.nags_complete[0] }}</span>
                                                    <p for="">Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>General Agency Store
                                                <span class="text-primary">Please input the time in minutes(Ex: 10 Hours
                                                    = 600
                                                    minutes)</span></label>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="gas_receive" @input="filterNonNumeric_5"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.gas_receive">{{ errors.gas_receive[0] }}</span>
                                                    <p for="">Goods to be receive</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="gas_process" @input="filterNonNumeric_6"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.gas_process">{{ errors.gas_process[0] }}</span>
                                                    <p for="">Platform process</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="gas_shipped" @input="filterNonNumeric_7"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.gas_shipped">{{ errors.gas_shipped[0] }}</span>
                                                    <p for="">To be shipped</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="gas_complete" @input="filterNonNumeric_8"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.gas_complete">{{ errors.gas_complete[0] }}</span>
                                                    <p for="">Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Super Agency Store
                                                <span class="text-primary">Please input the time in minutes(Ex: 10 Hours
                                                    = 600
                                                    minutes)</span></label>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="sag_receive" @input="filterNonNumeric_9"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.sag_receive">{{ errors.sag_receive[0] }}</span>
                                                    <p for="">Goods to be receive</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="sag_process" @input="filterNonNumeric_10"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.sag_process">{{ errors.sag_process[0] }}</span>
                                                    <p for="">Platform process</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="sag_shipped" @input="filterNonNumeric_11"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.sag_shipped">{{ errors.sag_shipped[0] }}</span>
                                                    <p for="">To be shipped</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="sag_complete" @input="filterNonNumeric_12"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.sag_complete">{{ errors.sag_complete[0] }}</span>
                                                    <p for="">Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Mega Agency Store
                                                <span class="text-primary">Please input the time in minutes(Ex: 10 Hours
                                                    = 600
                                                    minutes)</span></label>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="mas_receive" @input="filterNonNumeric_13"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.mas_receive">{{ errors.mas_receive[0] }}</span>
                                                    <p for="">Goods to be receive</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="mas_process" @input="filterNonNumeric_14"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.mas_process">{{ errors.mas_process[0] }}</span>
                                                    <p for="">Platform process</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="mas_shipped" @input="filterNonNumeric_15"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.mas_shipped">{{ errors.mas_shipped[0] }}</span>
                                                    <p for="">To be shipped</p>
                                                </div>
                                                <div class="col-md-3">
                                                    <input type="text" placeholder="input minutes" v-model="mas_cmplete" @input="filterNonNumeric_16"
                                                        class="form-control" />
                                                        <span class="text-danger" v-if="errors.mas_cmplete">{{ errors.mas_cmplete[0] }}</span>
                                                    <p for="">Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-success">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
                </div>
            </section>
            <!-- /.content -->
            <!-- /.content -->
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
definePageMeta({
    middleware: "is-logged-out",
});

const router = useRouter();
const errors = ref({});
const notifmsg = ref("");

const allStatus = ref([]);
const loading = ref(false);

const nags_receive = ref('');
const nags_process = ref('');
const nags_shipped = ref('');
const nags_complete = ref('');

const gas_receive = ref('');
const gas_process = ref('');
const gas_shipped = ref('');
const gas_complete = ref('');

const sag_receive = ref('');
const sag_process = ref('');
const sag_shipped = ref('');
const sag_complete = ref('');

const mas_receive = ref('');
const mas_process = ref('');
const mas_shipped = ref('');
const mas_cmplete = ref('');


const filterNonNumeric_1 = (event) => {
    nags_receive.value = event.target.value.replace(/\D/g, '');  
}; 
 
const filterNonNumeric_2 = (event) => {
     nags_process.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_3 = (event) => {
    nags_shipped.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_4 = (event) => {
    nags_complete.value = event.target.value.replace(/\D/g, ''); 
}; 

const filterNonNumeric_5 = (event) => {
    gas_receive.value = event.target.value.replace(/\D/g, '');  
}; 

const filterNonNumeric_6 = (event) => {
    gas_process.value = event.target.value.replace(/\D/g, '');  
}; 

const filterNonNumeric_7 = (event) => {
    gas_shipped.value = event.target.value.replace(/\D/g, ''); 
}; 

const filterNonNumeric_8 = (event) => {
    gas_complete.value = event.target.value.replace(/\D/g, ''); 
};

const filterNonNumeric_9 = (event) => {
    sag_receive.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_10 = (event) => {
    sag_process.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_11 = (event) => {
    sag_shipped.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_12 = (event) => {
    sag_complete.value = event.target.value.replace(/\D/g, '');  
}; 

const filterNonNumeric_13 = (event) => {
    mas_receive.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_14 = (event) => {
    mas_process.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_15 = (event) => {
    mas_shipped.value = event.target.value.replace(/\D/g, '');  
}; 
const filterNonNumeric_16 = (event) => {
    mas_cmplete.value = event.target.value.replace(/\D/g, '');  
}; 
// Submit
const saveData = () => {
    const formData = new FormData();
    formData.append("nags_receive", nags_receive.value);
    formData.append("nags_process", nags_process.value);
    formData.append("nags_shipped", nags_shipped.value);
    formData.append("nags_complete",nags_complete.value);

    formData.append("gas_receive", gas_receive.value);
    formData.append("gas_process", gas_process.value);
    formData.append("gas_shipped", gas_shipped.value);
    formData.append("gas_complete", gas_complete.value);

    formData.append("sag_receive", sag_receive.value);
    formData.append("sag_process", sag_process.value);
    formData.append("sag_shipped", sag_shipped.value);
    formData.append("sag_complete", sag_complete.value);

    formData.append("mas_receive", mas_receive.value);
    formData.append("mas_process", mas_process.value);
    formData.append("mas_shipped", mas_shipped.value);
    formData.append("mas_cmplete", mas_cmplete.value);

    const headers = {
        "Content-Type": "multipart/form-data",
    };
    axios
        .post("/order/updatOrderSchedularStatus", formData, { headers })
        .then((res) => {
            document.getElementById("formrest").reset();
            success_noti();
           
            router.push("/usermanagement/order-schedular-messages");
        })
        .catch((error) => {
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
        },
    });
    Toast.fire({
        icon: "success",
        title: "Successfully update.",
    });
}; 

 
const getOrderStatusList = () => {
    axios.get(`/order/getOrderStatusSchedular`).then((response) => {
        //console.log("=======" + response.data.nags_receive);
        nags_receive.value = response.data.nags_receive;
        nags_process.value =  response.data.nags_process;
        nags_shipped.value =  response.data.nags_shipped;
        nags_complete.value =  response.data.nags_complete;

        gas_receive.value = response.data.gas_receive;
        gas_process.value =  response.data.gas_process;
        gas_shipped.value =  response.data.gas_shipped;
        gas_complete.value =  response.data.gas_complete;

        sag_receive.value = response.data.sag_receive;
        sag_process.value =  response.data.sag_process;
        sag_shipped.value =  response.data.sag_shipped;
        sag_complete.value =  response.data.sag_complete;

        mas_receive.value = response.data.mas_receive;
        mas_process.value =  response.data.mas_process;
        mas_shipped.value =  response.data.mas_shipped;
        mas_cmplete.value =  response.data.mas_cmplete;




    });
};

 
 
onMounted(() => {
    getOrderStatusList();
});
//orderProcess
</script>

<style>
.pagination {
    display: inline-block;
    text-align: center;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #2f2f2f;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #0056b3;
}

.pagination button[disabled] {
    background-color: #6c757d;
    cursor: not-allowed;
}

.proListh {
    height: 180px;
    overflow: auto;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    /* padding: 0.5rem; */
}

.btnSize {
    font-size: 12px;
    padding: 3px;
}

/* Table */
.table-wrapper {
    width: 100%;
    /* max-width: 500px; */
    overflow-x: auto;
}

.table td,
.table th {
    padding: 0.2rem;
    vertical-align: top;
    border-top: 1px solid #dae2ea;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 1px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: rgb(221, 221, 221);
}

.custompadd {
    padding-right: 5px !important;
}
</style>
