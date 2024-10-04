<template>
  <title>Fitler</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <p>API</p>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <center>
        <div class="loading-indicator" v-if="loading" style="text-align: center">
          <Loader />
        </div>
      </center>

      <section class="content">
        <div class="container-fluid">
          <!-- Start  -->
          <div class="row">
            <div class="col-12 col-sm-12">
              <div class="card card-primary card-tabs">
                <div class="card-header p-0 pt-1">
                  <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill"
                        href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home"
                        aria-selected="true">Eporner API v2 ({{ total_records }})</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill"
                        href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile"
                        aria-selected="false">Chaturbate Users Online Room v1 API <b>({{ totalRecords }}) </b></a>
                    </li>

                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content" id="custom-tabs-one-tabContent">
                    <div class="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel"
                      aria-labelledby="custom-tabs-one-home-tab">
                      <b><u> Eporner API v2 ({{ total_records }}</u></b>)
                      <hr>
                      <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                          <label>Category</label>
                          <select id="category" name="category" class="form-control" v-model="selectedCategory">
                            <option v-for="category in categoryList" :key="category" :value="category.name">
                              {{ category.name }}
                            </option>
                          </select>
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                          <label>Page number</label>
                          <select id="page" v-model="page" class="form-control">
                            <option v-for="page in pages" :key="page" :value="page">
                              {{ page }}
                            </option>
                          </select>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                          <label>Thumbsize</label>
                          <select id="thumbsize" v-model="selectedThumbSize" class="form-control">
                            <option value="small">Thumbnail Small size 190x152</option>
                            <option value="medium">
                              Thumbnail Medium size 427x240
                            </option>
                            <option value="big">Thumbnail Big size 640x360</option>
                          </select>
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                          <label>Order by:</label>
                          <select id="order" class="form-control" v-model="selectedOrder">
                            <option value="latest">Latest</option>
                            <option value="longest">Longest</option>
                            <option value="shortest">Shortest</option>
                            <option value="top-rated">Top Rated</option>
                            <option value="most-popular">Most Popular</option>
                            <option value="top-weekly">
                              Most popular this week videos first
                            </option>
                            <option value="top-monthly">
                              Most popular this month videos first
                            </option>
                          </select>
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-6" style="margin-top: 8px">
                          <br />
                          <button @click="filterData()" class="btn btn-primary w-100">
                            Filter
                          </button>
                        </div>
                      </div>
                      <hr />

                      <center class="text-center">
                        <h2>
                          Total <b>{{ total_records }}</b> data collected from
                          eporner.com/api/v2/ API
                          <br />

                          The last page number has been done up to
                          {{ latestVideo.page }}
                        </h2>
                      </center>
                      <br />


                      <div class="table-responsive">
                        <table class="table w-100 table-wrapper">
                          <thead>
                            <tr>
                              <th class="text-center">SL</th>
                              <th class="text-center">ID</th>
                              <th class="text-center">Category</th>
                              <th class="text-center">Thumbnail</th>
                              <th class="text-center">Page Num.</th>
                              <th class="text-center">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in starList" :key="item.id">
                              <!-- SL Number: Display index + 1 for 1-based numbering -->
                              <td class="text-center">{{ index + 1 }}</td>
                              <td class="text-center">{{ item.id }}</td>
                              <td class="text-center">{{ item.category }}</td>
                              <!-- Display Thumbnail as an image -->
                              <td class="text-center">
                                <template v-if="item.thumb_src">
                                  <img :src="item.thumb_src" alt="Loading...." class="rounded mx-auto d-block" />
                                </template>
                                <template v-else>
                                  <img src="/images/avatar-10.png" alt="No Thumbnail" width="100" height="75" />
                                </template>
                              </td>
                              <td class="text-center">{{ item.page }}</td>

                              <!-- Status Display: Active / Inactive -->
                              <td class="text-center">
                                <span v-if="item.status == 1"> Active </span>
                                <span v-else> Inactive </span>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th class="text-center">SL</th>
                              <th class="text-center">ID</th>
                              <th class="text-center">Category</th>
                              <th class="text-center">Thumbnail</th>
                              <th class="text-center">Page Num.</th>
                              <th class="text-center">Status</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel"
                      aria-labelledby="custom-tabs-one-profile-tab">
                      <b><u>Chaturbate Users Online v1 & V2 API </u></b>
                      <hr />

                      <div align="right">
                        <div class="row">
                          <div class="col-md-1">
                            <button type="button" class="btn btn-primary btn-block" @click="pullApiV1">
                              <i class="fa fa-download" aria-hidden="true"></i> Online v1</button>
                          </div>
                          <div class="col-md-11">
                           

                            <div class="table-responsive">
                        <table class="table w-100 table-wrapper">
                          <thead style="font-size: 13px;">
                            <tr>
                              <th class="text-center">SL</th>
                              <th class="text-left">Display Name</th>
                              <th class="text-left">Location</th>
                              <th class="text-left">CurrentShow</th>
                              <th class="text-left">Room Subject</th>
                              <th class="text-left">Language</th>
                              <th class="text-left">Thumbnail</th>
                              <th class="text-center">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in onlineRoomData" :key="item.id">
                              <!-- SL Number: Display index + 1 for 1-based numbering -->
                              <td class="text-left">{{ index + 1 }}</td>
                              <td class="text-left">{{ item.display_name }}</td>
                              <td class="text-left">{{ item.location }}</td>
                              <td class="text-left">{{ item.current_show }}</td>
                              <td class="text-left">{{ item.room_subject }}</td>
                              <td class="text-left">{{ item.spoken_languages }}</td>
                              <!-- Display Thumbnail as an image -->
                              <td class="text-left">
                                <template v-if="item.image_url">
                                  <img :src="item.image_url" alt="Loading...." class="rounded mx-auto d-block" />
                                </template>
                                <template v-else>
                                  <img src="/images/avatar-10.png" alt="No Thumbnail" width="100" height="75" />
                                </template>
                              </td>
                              

                              <!-- Status Display: Active / Inactive -->
                              <td class="text-center">
                                <span> {{ item.status }} </span>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr style="font-size: 13px;">
                              <th class="text-center">SL</th>
                              <th class="text-center">Display Name</th>
                              <th class="text-center">Location</th>
                              <th class="text-center">CurrentShow</th>
                              <th class="text-center">Room Subject</th>
                              <th class="text-center">Language</th>
                              <th class="text-center">Thumbnail</th>
                              <th class="text-center">Status</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>

                                        <center>
                                            <div class="pagination" style="text-align: center">
                                                <button :disabled="currentPage === 1" @click="fetchDataOnlineRoom(currentPage - 1)">
                                                    Previous
                                                </button>
                                                <template v-for="pageNumber in displayedPages" :key="pageNumber">
                                                    <button @click="fetchDataOnlineRoom(pageNumber)">
                                                        {{ pageNumber }}
                                                    </button>
                                                </template>
                                                <button :disabled="currentPage === totalPages"
                                                    @click="fetchDataOnlineRoom(currentPage + 1)">
                                                    Next
                                                </button>
                                            </div>
                                        </center>


                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- END -->


        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
definePageMeta({
  middleware: "is-logged-out",
  title: "Profile", // Set your desired page title here
});
const router = useRouter();
const loading = ref(false);
const total_records = ref(0);
const starList = ref([]);
const categoryList = ref([]);
const latestVideo = ref(0); // Add a ref for the search query
const selectedCategory = ref("Anal"); // Add a ref for the search query
//
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const onlineRoomData = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query

const page = ref(1);
const pages = computed(() => Array.from({ length: 800 }, (_, i) => i + 1));

const selectedThumbSize = ref("medium"); // Default value
// If you want to initialize the value from query params (like PHP does)
if (process.client) {
  const urlParams = new URLSearchParams(window.location.search);
  const thumbsize = urlParams.get("thumbsize");
  if (thumbsize) {
    selectedThumbSize.value = thumbsize;
  }
}

const selectedOrder = ref("latest"); // Default to 'latest'
if (process.client) {
  const urlParams = new URLSearchParams(window.location.search);
  const order = urlParams.get("order");
  if (order) {
    selectedOrder.value = order;
  }
}

const filterData = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/filterByeporner`, {
      params: {
        selectedCategory: selectedCategory.value,
        page: page.value,
        selectedThumbSize: selectedThumbSize.value, // Pass the search query parameter
        selectedOrder: selectedOrder.value, // Pass the search query parameter
      },
    });
    total_records.value = response.data.total_records;
    defaultFilterData();
  } catch (error) {
    // Handle error
  } finally {
    loading.value = false;
  }
};

const defaultFilterData = async () => {
  try {
    // loading.value = true;
    const response = await axios.get(`/countByeporner`, {
      params: {
        page: page.value,
      },
    });
    total_records.value = response.data.total_records;
    latestVideo.value = response.data.latestVideo;
    starList.value = response.data.starList;
  } catch (error) {
    // Handle error
  }
};

const fetchDataOnlineRoom = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/user/getAllchaturbateApiV1Data`, {
            params: {
                page: page,
                pageSize: pageSize,
                searchQuery: searchQuery.value, // Pass the search query parameter
                selectedFilter: selectedFilter.value, // Pass the search query parameter
            },
        });
        onlineRoomData.value = response.data.data;
        totalRecords.value = response.data.total_records;
        totalPages.value = response.data.total_pages;
        currentPage.value = response.data.current_page;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

 
const pullApiV1 = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`/chaturbateApiV1`);
    //categoryList.value = response.data;
  } catch (error) {
    // Handle error
  } finally {

    loading.value = false;
  }
};


const displayedPages = computed(() => {
    const maxDisplayedPages = 10; // Maximum number of displayed pages
    const startPage = Math.max(
        1,
        currentPage.value - Math.floor(maxDisplayedPages / 2)
    );
    const endPage = Math.min(
        totalPages.value,
        startPage + maxDisplayedPages - 1
    );
    return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );
});

const defaultFilterCategory = async () => {
  try {
    const response = await axios.get(`/getPornCategory`);
    categoryList.value = response.data;
  } catch (error) {
    // Handle error
  }
};
watch(currentPage, (newPage) => {
  fetchDataOnlineRoom(newPage);
});

onMounted(() => {
  defaultFilterCategory();
  defaultFilterData();
  fetchDataOnlineRoom(currentPage.value);
});
</script>

<style>.pagination {
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
}</style>
