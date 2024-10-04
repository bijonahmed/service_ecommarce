<template>
    <title>Site Setting</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Site Setting</p>
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
                    <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header p-1">
                  Basic Configuration
                </div>
                <div class="card-body">
                  <form action="">
                    <div class="form-group">
                      <label for="">Site Name </label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                      <img src="/images/1703119583884976.jpg" alt="" class="img-fluid form_images">
                      <label for="">Logo </label>
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile">
                        <label class="custom-file-label" for="customFile">Login-Kushiara.png</label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">Time zone</label>
                      <select name="" id="" class="form-control">
                        <option value="America/New_York">(UTC-05:00) Eastern</option>
                        <option value="America/Chicago">(UTC-06:00) Central</option>
                        <option value="America/Denver">(UTC-07:00) Mountain</option>
                        <option value="America/Phoenix">(UTC-07:00) Mountain - AZ</option>
                        <option value="America/Los_Angeles">(UTC-08:00) Pacific</option>
                        <option value="America/Anchorage">(UTC-09:00) Alaskan</option>
                        <option value="Pacific/Honolulu">(UTC-10:00) Hawaiian</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  Site status
                </div>
                <div class="card-body">
                  <div class="form-group mb-2">
                    <label for="">Site status</label>
                    <select name="" id="" class="form-control">
                      <option value="">On</option>
                      <option value="">Off</option>
                    </select>
                  </div>
                  <div class="form-group mb-2">
                    <label for="">PC access status</label>
                    <select name="" id="" class="form-control">
                      <option value="">On</option>
                      <option value="">Off</option>
                    </select>
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Home page access status</label>
                    <select name="" id="" class="form-control">
                      <option value="">On</option>
                      <option value="">Off</option>
                    </select>
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Website close reson</label>
                    <textarea name="" id="" cols="30" rows="4" class="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  Site domain name address
                </div>
                <div class="card-body">

                  <div class="bg-warning p-2 mt-2 message mb-3">
                    <p>1. If the site domain name is not set, the current site domain name address will be used [
                      https://hello-test8.net/ ]</p>

                    <p>2. If the attachment and static address are not set, the static domain name address of the
                      current site will be used [ https://hello-test8.net/public/ ]</p>

                    <p>3. If the server is not set with public as the root directory, then configure [attachment cdn
                      domain name, css/js static file cdn domain name] here and add public later, such as:
                      https://hello-test8.net/public/ public/</p>

                    <p>When running the project in command line mode, this area address must be configured, otherwise
                      some addresses in the project will be missing domain name information.</p>

                    <p>Please do not configure it randomly. Wrong address will cause the website to be inaccessible (the
                      address configuration starts with http). If your website is configured with https, it will start
                      with https.</p>
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Primay domain name <span class="text-sm"
                        style="font-size: 12px; color: gainsboro;">Website address </span></label>
                    <input type="text" placeholder="Primary domain" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for=""> Attachment cdn domain name<span class="text-sm"
                        style="font-size: 12px; color: gainsboro;"> pictures/videos/files</span></label>
                    <input type="text" placeholder=" pictures/videos/files" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for=""> css/js static files cdn domain name <span class="text-default"
                        style="font-size: 12px; color: gainsboro;"> css/js static files</span></label>
                    <input type="text" placeholder="css/js static files " class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Uploading images to the target server api interface<span class="text-default"
                        style="font-size: 12px; color: gainsboro;"> is not set, which means that the server will store
                        the address and change the address to the corresponding domain name
                        http://localhost/api.php?s=user/uploadimage.html</span></label>
                    <input type="text" placeholder="
                    If not set, it means to store this server and change the address to the corresponding domain name http://localhost/api.php?s=user/uploadimage.html
                    " class="form-control">
                  </div>

                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  Backend website settings
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="">Backend site name</label>
                    <input type="text" placeholder="Backend site name" class="form-control">
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  Record Information
                </div>
                <div class="card-body">
                  <div class="form-group mb-2">
                    <label for="">ICP certificate number <span style="font-size: 12px;color: gray;">such as: Shanghai
                        ICP No. xxx</span></label>
                    <input type="text" placeholder="Copyright Attribution （website name）@ 2020" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Copyright information at the bottom of the web end </label>
                    <input type="text" placeholder="Powered by Shopify" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Public security registration number <span style="font-size: 12px;color: gray;">such
                        as: Beijing Public Security Network Security No. xxx</span></label>
                    <input type="text" placeholder="website name Agent LLC" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">The url address of the public security registration address registration display
                      page</label>
                    <input type="text" placeholder="The url address of the registration display page"
                      class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Value-added telecommunications business license <span
                        style="font-size: 12px;color: gray;">such as: Shanghai B2-xxx</span></label>
                    <input type="text" placeholder="License number: ********" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">Electronic business license illuminated<span style="font-size: 12px;color: gray;">
                        license page display address and application address:
                        https://zzlz.gsxt.gov.cn/businessShow</span></label>
                    <input type="text"
                      placeholder="License page display address and application address: https://zzlz.gsxt.gov.cn/businessShow"
                      class="form-control">
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  other
                </div>
                <div class="card-body">
                  <div class="form-group mb-2">
                    <label for="">css/js version tag <span style="font-size: 12px; color: gray;">is used to identify
                        css/js browser cache version</span></label>
                    <input type="text" placeholder="123454678" class="form-control">
                  </div>
                  <div class="form-group mb-2">
                    <label for="">The bottom code <span style="font-size: 12px; color: gray;">supports HTML and can be
                        used to add traffic statistics code</span></label>
                    <textarea name="" id="" cols="30" rows="4" class="form-control">bottom code</textarea>
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
})

const router = useRouter();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = 10;
const totalRecords = ref(0);
const totalPages = ref(0);
const productdata = ref([]);
const searchQuery = ref(""); // Add a ref for the search query
const selectedFilter = ref(1); // Add a ref for the search query

const fetchData = async (page) => {
    try {
        loading.value = true;
        const response = await axios.get(`/product/getProductList`, {
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

// Define a method to handle editing
const edit = (id) => {

    router.push({
        path: '/products/edit',
        query: {
            parameter: id
        }
    });

    // Your logic for editing goes here
    console.log('Editing item with id:', id);
};

// Define a method to handle deleting
const deleteProduct = (id) => {
    // Your logic for deleting goes here
    console.log('Deleting item with id:', id);
};

// Define a method to handle previewing
const preview = (id) => {
    router.push({
        path: '/products/preview',
        query: {
            parameter: id
        }
    });
    console.log('Previewing item with id:', id);
};

// Compute the range of displayed pages
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
    background-color:#2f2f2f;
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
