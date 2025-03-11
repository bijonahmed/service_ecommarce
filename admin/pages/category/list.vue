<template>
    <title>Category List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Category</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/category/addcategory">New</LazyNuxtLink>
                                </li>



                            </ol>
                        </div>
                    </div>
                </div>
            </section>


            <section class="content">
                <div class="container-fluid">
                    <div style="text-align: right;"><button @click="fetchData()"><i class="fas fa-filter"></i>
                            Filter</button> </div>
                    <!-- Start -->
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="border p-4 rounded">

                            <div class="card card-primary card-outline card-tabs">
                                <div class="card-header p-0 pt-1 border-bottom-0">


                                    <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="custom-tabs-three-home-tab"
                                                data-toggle="pill" href="#custom-tabs-three-home" role="tab"
                                                aria-controls="custom-tabs-three-home" aria-selected="true">Active
                                                List</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill"
                                                href="#custom-tabs-two-profile" role="tab"
                                                aria-controls="custom-tabs-three-profile" aria-selected="false">Inactive
                                                List</a>
                                        </li>


                                    </ul>
                                </div>
                                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <Loader />
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-three-tabContent">
                                        <div class="tab-pane fade active show" id="custom-tabs-three-home"
                                            role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                                            <!-- General  -->
                                            <ul>
                                                <!-- Top-Level Categories -->
                                                <li v-for="category in filterUniqueCategories(categories)"
                                                    :key="category.id">
                                                    <span class="badge bg-dark">
                                                        {{ category.name }}
                                                        <span v-if="category.percentage_amt"
                                                            style="background-color: red; color:white;">
                                                            [{{ category.percentage_amt }}%]
                                                        </span>
                                                        <span @click="editCategory(category.id)">
                                                            <i class="fas fa-edit"></i>
                                                        </span>
                                                    </span>

                                                    <!-- Render Subcategories Recursively -->
                                                    <ul v-if="category.children && category.children.length">
                                                        <li v-for="child in filterUniqueCategories(category.children)"
                                                            :key="child.id">
                                                            <span class="badge bg-secondary">
                                                                {{ child.name }}
                                                                <span v-if="child.percentage_amt"
                                                                    style="background-color: red; color:white;">
                                                                    [{{ child.percentage_amt }}%]
                                                                </span>
                                                                <span @click="editCategory(child.id)">
                                                                    <i class="fas fa-edit"></i>
                                                                </span>
                                                            </span>

                                                            <!-- Insub-categories -->
                                                            <ul v-if="child.children && child.children.length">
                                                                <li v-for="subChild in filterUniqueCategories(child.children)"
                                                                    :key="subChild.id">
                                                                    <span>
                                                                        {{ subChild.name }}
                                                                        <span @click="editCategory(subChild.id)">
                                                                            <i class="fas fa-edit"></i>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>



                                        </div>

                                        <div class="tab-pane fade" id="custom-tabs-two-profile" role="tabpanel"
                                            aria-labelledby="custom-tabs-three-home-tab">
                                            <!-- General  -->
                                            <ul>
                                                <li v-for="category in Inacategories" :key="category.id">
                                                    <span class="badge bg-danger" @click="editCategory(category.id)">{{ category.name }} <span
                                                            ><i
                                                                class="bx bx-edit"></i></span></span>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        <!-- END -->

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

definePageMeta({
    middleware: 'is-logged-out',
    title: 'Profile' // Set your desired page title here

})


const loading = ref(false);
const categories = ref([]);
const Inacategories = ref([]);

const router = useRouter();

const editCategory = (id) => {
    router.push({
        path: '/category/edit',
        query: { id }
    });
};



const filterUniqueCategories = (items) => {
    const seenIds = new Set();
    return items.filter(item => {
        if (seenIds.has(item.id)) {
            return false;
        }
        seenIds.add(item.id);
        return true;
    });
}

const fetchData = async () => {
    try {
        loading.value = true;
        const response = await axios.get('/category/allCategoryforAdmin');
        //console.log(response.data); // Print the data received from the server
        categories.value = response.data; // Set the categories value to the data received
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

const fetchInacCatData = async () => {
    try {
        const response = await axios.get('/category/getInacCategoryList'); // Add 'await' here
        console.log("=====", response); // Logs the full response object
        Inacategories.value = response.data; // Access response data properly
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


onMounted(async () => {
    await fetchData();
    await fetchInacCatData();
});
</script>
<style scoped>
.badge {
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding-left: 20px;
}

/* Add CSS styles for the hover effect */
ul li:hover {
    background-color: #f0f0f0;
    /* Change the background color on hover */
    cursor: pointer;
    /* Change the cursor to a pointer on hover */
}

ul li:hover .bx-edit {
    color: #007bff;
    /* Change the color of the edit icon on hover */
}
</style>
