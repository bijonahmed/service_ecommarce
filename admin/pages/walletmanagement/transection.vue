<template>
  <title>Transaction Report</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Transaction Report</p>
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
                  <div class="col-lg-10 col-md-10 col-sm-12 mb-2">
                    <input
                      type="text"
                      v-model="searchQuery"
                      class="form-control"
                      placeholder="Search by email..."
                    />
                  </div>

                  <div class="col-lg-2 col-md-3 col-sm-6 mb-2 d-none">
                    <select
                      v-model="selectedFilter"
                      class="form-control"
                      @change="filterData"
                    >
                      <option>All</option>
                      <option value="1">
                        The effective amount is manually increased (+)
                      </option>
                      <option value="2">
                        The effective amount is manually reduced (-)
                      </option>
                    </select>
                  </div>

                  <div class="col-lg-2 col-md-2 col-sm-6 mb-2">
                    <button @click="filterData()" class="btn btn-primary w-100">
                      Filter
                    </button>
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
                    <th class="text-center">Operation Amount ($)</th>
                    <th class="text-center">Operation Type</th>
                    <th class="text-center">Date</th>
                    <th class="text-left">Description</th>
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
                    <td class="text-center">{{ pro.operation_amount }}</td>
                    <td class="text-center">{{ pro.operation_type }}</td>
                    <td class="text-center">{{ pro.operation_date }}</td>
                    <td class="text-left">{{ pro.charge_description }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th class="text-left">SL</th>
                    <th class="text-left">User Info</th>
                    <th class="text-center">Operation Type</th>
                    <th class="text-center">Operation Amount</th>
                    <th class="text-center">Date</th>
                    <th class="text-left">Description</th>
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
const selectedFilter = ref(null); // Add a ref for the search query

const fetchData = async (page) => {
  try {
    loading.value = true;
    const response = await axios.get(`/dropUser/getTransactionReport`, {
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
    
    router.push('/unauthenticated-user');
    //console.log("--------------------" + error);
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
