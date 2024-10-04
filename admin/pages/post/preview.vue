<template>
    <title>Product List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Product List</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/post/list">Back to List</LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">

                    <div class="col-xl-12 mx-auto">
                        <div class="card border-top border-0 border-4 border-info">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="card">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <table class="table table-bordered w-100">
                                                    <!-- <tr>
                                                        <td width="40%">Name</td>
                                                        <td width="1%"><strong>:</strong></td>
                                                        <td width="50%">{{ productData.name }}</td>
                                                    </tr> -->
                                                    <tr>
                                                        <td>Description</td>
                                                        <td><strong>:</strong></td>
                                                        <td class="description_full"></td>
                                                    </tr>

                                                    <tr class="d-none">
                                                        <td>Category</td>
                                                        <td><strong>:</strong></td>
                                                        <td>{{ productData.category_name }}</td>
                                                    </tr>
                                                     

                                                    
                                                </table>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">

                                        <div class="col-md-3">
                                            <div class="alert alert-primary" role="alert">
                                                <center><small>Thumbnail Images</small></center>
                                                <hr />
                                                <img :src="productImg" alt="N/A"
                                                    class="img-fluid max-width-100 img-thumbnail" />
                                            </div>
                                        </div>

                                         

                                    </div>

                                    <!-- END -->
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
const router = useRouter();
import axios from 'axios';
import swal from 'sweetalert2';
window.Swal = swal;

definePageMeta({
    middleware: 'is-logged-out',
})
const productData = ref({
  name: '',
  categoryId: '',
  question: '',
  answer: '',
  images: '',
  status: 1,
});


const productImg = ref('');
const productDetails = () => {
    const product_id = router.currentRoute.value.query.parameter;
    axios.get(`/post/postrow/${product_id}`).then(response => {
        //console.log("====" + response.data.data.name);
        productData.value.name = response.data.data.name;
        //productData.value.category_name = response.data.data.category_name;
        productData.value.categoryId = response.data.data.categoryId;
        productImg.value = response.data.images;
        $(".description_full").html(response.data.data.description_full);
    });
};

onMounted(() => {
    productDetails();
   
});
</script>

<style scoped>
.scrollable-container {
    max-height: 400px;
    /* Adjust the maximum height as needed */
    overflow-y: auto;
    border: 1px solid #dddddd;
    /* Optional: Add a border for styling */
    padding: 8px;
    /* Optional: Add padding for better appearance */
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1px;
}

th {
    background-color: #f2f2f2;
}

.marleft {
    margin-left: -7px;
}

.output-container {
    white-space: pre-line;
    margin-left: -7px;
}
</style>
