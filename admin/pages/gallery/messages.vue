<template>
    <title>Post List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="container mt-4">
                            <div class="container-fluid text-center">
                                <div class="row">
                                    <div class="col-12 w-100">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title"><strong>Success!</strong> Bulk Delete
                                                    Successfully</h4>
                                            </div>
                                            <div class="card-body">
                                                <button type="button" class="btn btn-info btn-block btn-flat" @click="backtoList"><i
                                                        class="fa fa-backward"></i>Back</button>
                                            </div>

                                        </div>
                                    </div>

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
import { ref, watch, onMounted } from "vue";
import axios from "axios";
definePageMeta({
    middleware: 'is-logged-out',
    title: 'Messages' // Set your desired page title here

})
const router = useRouter();
 
const backtoList =() => {
    router.push({ path: '/gallery/porn-star-gallery'});
}

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

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0.5rem;
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
    padding: .2rem;
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
</style>
