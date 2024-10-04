<template>
    <title>Model List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Model List ({{ totalRecords }})</p>
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

            <section class="content">
                <div class="container-fluid">


                    <div class="page_top">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-10">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0 p-0" style="padding-right: 5px !important">
                                                    <input type="text" class="form-control" v-model="searchQuery"
                                                        placeholder="Search by ID " />
                                                </th>
                                                <th class="border-0 p-0" style="padding-right: 5px !important">
                                                    <select id="category" name="category" class="form-control"
                                                        v-model="selectedCategory">
                                                        <option value="">All Categories</option>
                                                        <option v-for="category in categoryList" :key="category"
                                                            :value="category.name">
                                                            {{ category.name }}
                                                        </option>
                                                    </select>
                                                </th>

                                                <th class="border-0 p-0 me-1" style="padding-right: 5px !important">
                                                    <select name="" id="" class="form-control" v-model="selectedFilter"
                                                        @change="filterData">
                                                        <option value="" selected disabled>
                                                            Select status
                                                        </option>
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
                                                    </select>
                                                </th>
                                                <th class="border-0 p-0 h-100">
                                                    <button type="button" style="min-width: 100%" @click="filterData()"
                                                        class="btn btn-primary btn-fla">
                                                        <i class="fas fa-search"></i>Search
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </form>
                            </div>

                        </div>
                    </div>

                    <!-- table section start here  -->
                    <div class="card">
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">
                                <div class="loading-indicator" v-if="loading" style="text-align: center">
                                    <Loader />
                                </div>
                            </div>

                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>ID</th>
                                        <th class="text-start">Category</th>
                                        <th class="text-left">Title</th>
                                        <th>Thumbnail</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in productdata" :key="item.id">
                                        <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
                                        <td>{{ item.apiId }}</td>
                                        <td>{{ item.category }}</td>
                                        <td class="text-left"><small>{{ item.title }}</small></td>
                                        <td><img :src="item.thumb_src" alt="Loading..." style="width: 50%;"
                                                class="custom-image-border img-thumbnail"></td>
                                        <td><small>{{ item.status }}</small></td>

                                        <td>
                                            <div class="">
                                                <button class="btn w-100 d-block btn-default btn-sm btn-flat"
                                                    @click="getDetails(item)">
                                                    <i class="far fa-eye"></i>Gallery
                                                </button>
                                                <!-- <button class="btn w-100 btn-warning btn-sm btn-flat"
                                                    @click="edit(item.id)">
                                                    <i class="fas fa-pen"></i>Edit
                                                </button> -->
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                         
      
                            <!--a -->
                            <center>
                                <div class="pagination" style="text-align: center">
                                    <button :disabled="currentPage === 1" @click="fetchData(currentPage - 1)">
                                        Previous
                                    </button>
                                    <template v-for="pageNumber in displayedPages" :key="pageNumber">
                                        <button @click="fetchData(pageNumber)">
                                            {{ pageNumber }}
                                        </button>
                                    </template>
                                    <button :disabled="currentPage === totalPages" @click="fetchData(currentPage + 1)">
                                        Next
                                    </button>
                                </div>
                            </center>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
                </div>
            </section>
            <!-- /.content -->
            <!-- /.content -->
        </div>

        <!-- Start Modal  -->
        <!-- details modal  -->
        <div class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="detailsTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header py-1">
                        <h5 class="modal-title" id="detailsTitle">Details [ID:{{ apiId }}]</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           

                        <div class="row">
                            <!-- <iframe :src="hosterEmbed" frameborder="0" allowfullscreen class="embed-responsive"></iframe>   -->

                            <div class="col-md-4 mb-3" v-for="video in videosData" :key="video.id">
                                <div class="video-card border">
                                    <img :src="video.thumb_src" class="img-fluid video-thumbnail img-thumbnail" alt="Video Thumbnail">
                                </div>

                            </div>
                        </div>
                        <center><button type="button" class="btn btn-primary">Next Model</button></center>
                    </div>
                </div>
            </div>
        </div>
        <!-- start operation modal start here  -->


        <!-- team show modal  -->

        <!-- delete modal  -->

        <!-- END Modal  -->
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "~~/stores/user";
import swal from "sweetalert2";
definePageMeta({
    middleware: "is-logged-out",
    title: "User List", // Set your desired page title here
});

const hasError = ref(false);
const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);
const videosData = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query
const selectedCategory = ref(''); // Add a ref for the search query
const apiId=ref('');
const hosterEmbed=ref('');

const categoryList = ref([]);
//END userDetails Information
const defaultFilterCategory = async () => {
    try {
        // loading.value = true;
        const response = await axios.get(`/getPornCategory`);
        categoryList.value = response.data;

    } catch (error) {
        // Handle error
    }
};

const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/allModels`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchQuery: searchQuery.value, // Pass the search query parameter
                selectedCategory: selectedCategory.value, // Pass the search query parameter
                selectedFilter: selectedFilter.value, // Pass the search query parameter
            },
        });
        productdata.value = response.data.data;
        totalRecords.value = response.data.total_records;
        totalPages.value = response.data.total_pages;
        currentPage.value = response.data.current_page;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

// Function to load the YouTube API script
 const loadYouTubeAPI = () => {
  return new Promise((resolve) => {
    if (window.YT) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

// Function to initialize the YouTube player
 const initializePlayer = () => {
  window.onYouTubeIframeAPIReady = () => {
    new YT.Player('youtube-player', {
      height: '528',
      width: '850',
      videoId: 'YOUR_VIDEO_ID', // Replace with your video ID
      events: {
        'onReady': (event) => {
          event.target.playVideo();
        },
      },
    });
  };
}


onMounted(() => {

  loadYouTubeAPI();
  initializePlayer();


    fetchData(currentPage.value);
    defaultFilterCategory();
});

// Watch for changes in current page and fetch data accordingly
watch(currentPage, (newPage) => {
    fetchData(newPage);
});

const success_noti = () => {
    const Toast = swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = swal.stopTimer;
            toast.onmouseleave = swal.resumeTimer;
        },
    });
    Toast.fire({
        icon: "success",
        title: "Successfull Logout All Users Status.",
    });
};

const getDetails = (item) => {
    console.log("==" + item);
    loading.value = true;
    apiId.value = item.apiId
    hosterEmbed.value = item.embed
    $("#details").modal("show");
    axios
        .get(`/user/findUserDetails`, {
            params: {
                id: item.id,
            },
        })
        .then((response) => {
            // Handle successful response here
            videosData.value = response.data;

        })
        .catch((error) => {
            // Handle errors here
            console.error("Error:", error);
        })
        .finally(() => {
            // This block will always execute, regardless of whether the request was successful or not
            loading.value = false;
            console.log("Request finished");
        });

    //u_details_user_id.value = response.id;
    // alert(id);
};
const handleIframeError = () => {
  hasError.value = true;
};
const edit = (id) => {
    router.push({
        path: "/usermanagement/useredit",
        query: {
            parameter: id,
        },
    });
    // Your logic for editing goes here
    console.log("Editing item with id:", id);
};
// Define a method to handle editing
const changePass = (id) => {
    router.push({
        path: "/user/changePassword",
        query: {
            parameter: id,
        },
    });
    // Your logic for editing goes here
    console.log("Change Password id:", id);
};

// Compute the range of displayed pages
const displayedPages = computed(() => {
    const maxDisplayedPages = 10; // Maximum number of displayed pages
    const startPage = Math.max(
        1,
        currentPage.value - Math.floor(maxDisplayedPages / 2)
    );
    const endPage = Math.min(totalPages.value, startPage + maxDisplayedPages - 1);
    return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );
});

const filterData = () => {
    fetchData(1); // Reset to first page when search query changes
};
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

.custom-image-border {
    border: 2px solid #141414c4;
    /* Blue border */
    border-radius: 5px;
    /* Rounded corners */
    padding: 5px;
    /* Padding around the image */
    max-width: 100px;
    /* Limit the size */
}

.embed-responsive {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Maintain aspect ratio */
  height: 0;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fallback-message {
  text-align: center;
  padding: 20px;
  color: red;
  font-size: 18px;
}
</style>