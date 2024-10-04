<template>
  <title>Manual Adjustment Report</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Manual Adjustment Report</p>
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
          <div class="page_top my-2">
            <div class="row justify-content-between align-items-center my-2">
              <div class="col-md-11">
                <div class="row">
                  <div class="col-lg-6 col-md-8 col-sm-12 mb-2">
                    <input
                      type="text"
                      v-model="searchQuery"
                      class="form-control"
                      placeholder="Search by email..."
                    />
                  </div>

                  <div class="col-lg-2 col-md-3 col-sm-6 mb-2">
                    <select
                      v-model="selectedFilter"
                      class="form-control"
                      @change="filterData"
                    >
                      <option value="5">All</option>
                      <option value="1">Loan</option>
                      <option value="2">Reward</option>
                    </select>
                  </div>

                  <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                    <button @click="filterData()" class="btn btn-primary w-100">
                      Filter
                    </button>
                  </div>

                  <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                    <LazyNuxtLink
                      to="/walletmanagement/manual-adjustment"
                      class="btn btn-primary w-100"
                    >
                      <i class="fas fa-plus"></i>Add
                    </LazyNuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- table section start here  -->
          <div class="card">
            <!-- /.card-header -->
            <div class="card-body table-responsive p-0">
              <div class="filter_options">
                <div
                  class="loading-indicator"
                  v-if="loading"
                  style="text-align: center"
                >
                  <Loader />
                </div>
              </div>
              <table class="table w-100 table-wrapper">
                <thead>
                  <tr>
                    <th class="text-left">SL</th>
                    <th class="text-left">User Info</th>
                    <th class="text-center">Adjustment Amount($)</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Date</th>
                    <th class="text-left">Remarks</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(pro, index) in productdata" :key="index">
                    <td class="text-left">{{ index + 1 }}</td>
                    <td class="text-left">
                      <small>UserID: {{ pro.id }}</small
                      ><br />
                      <small>Name: {{ pro.name }}</small
                      ><br />
                      <small>Email: {{ pro.email }}</small
                      ><br />
                    </td>
                    <td class="text-center">{{ pro.adjustment_amount }}</td>
                    <span v-if="pro.adjustment_type == 1">
                      <div class="badge rounded-pill" style="font-size: 15px;">Loan</div>
                    </span>

                    <span v-if="pro.adjustment_type == 2">
                      <div class="badge rounded-pill" style="font-size: 15px;"> Reward </div>
                    </span>
                    <td class="text-center">{{ pro.created_at }}</td>
                    <td class="text-left">{{ pro.detailed_remarks }}</td>
                    <td class="text-left">
                     
                        <!-- <span @click="edit(pro.id)"
                          ><button type="button">
                            <i class="fas fa-edit btnSize"></i></button
                        ></span> -->

                        <span @click="deleteRow(pro.id)"><button type="button" class="w-100">
                            <i class="fa fa-trash" aria-hidden="true" ></i></button></span>
                   
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th class="text-left">SL</th>
                    <th class="text-left">User Info</th>
                    <th class="text-center">Adjustment Amount($)</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Date</th>
                    <th class="text-left">Remarks</th>
                    <th class="text-left">Action</th>
                  </tr>
                </tfoot>
              </table>
              <center>
                <div class="pagination" style="text-align: center">
                  <button
                    :disabled="currentPage === 1"
                    @click="fetchData(currentPage - 1)"
                  >
                    Previous
                  </button>
                  <template
                    v-for="pageNumber in displayedPages"
                    :key="pageNumber"
                  >
                    <button @click="fetchData(pageNumber)">
                      {{ pageNumber }}
                    </button>
                  </template>
                  <button
                    :disabled="currentPage === totalPages"
                    @click="fetchData(currentPage + 1)"
                  >
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
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";

import Swal from "sweetalert2";

definePageMeta({
  middleware: "is-logged-out",
});

const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(5); // Add a ref for the search query
// Define a method to handle editing

const deleteRow = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        const response = axios.get(`/user/deleteManualAdjusment`, {
          params: {
            id: id,
          },
        });
        console.log(response.data);
        //productdata.value = response.data.data;
        filterData();
        Swal.fire({
          title: "Deleted!",
          text: "Your record has been deleted.",
          icon: "success",
        });
      } catch (error) {
        // Handle error
      }
    }
  });
};

const edit = (id) => {
  router.push({
    path: "/walletmanagement/editmanual-adjustment",
    query: {
      parameter: id,
    },
  });
  console.log("Editing item with id:", id);
};
const fetchData = async (page) => {
  try {
    loading.value = true;
    const response = await axios.get(`/trading/getManualAdjustmentReport`, {
      params: {
        page: page,
        pageSize: pageSize,
        searchQuery: searchQuery.value, // Pass the search query parameter
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

onMounted(() => {
  fetchData(currentPage.value);
});

// Watch for changes in current page and fetch data accordingly
watch(currentPage, (newPage) => {
  fetchData(newPage);
});

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
</style>
