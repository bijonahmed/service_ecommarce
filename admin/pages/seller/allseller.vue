<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item">
                                    <router-link to="/hrm/dashboard"><a href="javascript:;"><i
                                                class="bx bx-home-alt"></i></a></router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Store List</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="ms-auto d-none">
                        <div class="btn-group">
                            <Nuxt-link to="/employee/employee-add"><button type="button" class="btn btn-primary"><i
                                        class="bx bx-plus"></i>New</button></Nuxt-link>
                        </div>
                    </div>
                </div>
                <!--end breadcrumb-->
                <!-- <span class="loader"></span> -->
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <input v-model="searchQuery.name" type="text" class="form-control name"
                                        placeholder="Business Name">

                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="input-group mb-3">
                                    <select v-model="searchQuery.status" class="form-select form-select-solid status">
                                        <option value="" selected>All Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>

                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="input-group mb-3">
                                    <select v-model="searchQuery.home_status" class="form-select form-select-solid status">
                                        <option value="" selected>Top Store Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>

                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="input-group mb-3">
                                    <button class="btn btn-primary w-100" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div style="display: none;" class="customerSpinner">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th class="text-center">SL.</th>
                                        <!-- <th>Role </th> -->
                                        <th class="text-center">Store Name</th>
                                        <th class="text-center">Logo</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Top {{ count  }} Store status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in paginatedData" :key="item.id">
                                        <!-- <td>{{ item.id }}</td> -->
                                        <td class="text-center">{{ index + 1 }}</td>
                                        <!-- <td v-if="item.role == 3">Seller</td> -->
                                        <td class="text-center">{{ item.name }}</td>
                                        <td class="text-center"><img :src="item.businessLogo" class="img-fluid rounded"
                                                style="object-fit: cover;" height="60px" width="60px" alt=""></td>
                                        <td class="text-center">
                                            <span v-if="(item.status == 1)"> <span
                                                    class="badge bg-success">Active</span> </span>
                                            <span v-else> <span class="badge bg-danger">Inactive</span> </span>
                                        </td>
                                        <td class="text-center">
                                            <span v-if="(item.home_status == 1)"> <span
                                                    class="badge bg-success-light">Active</span> </span>
                                            <span v-else> <span class="badge bg-danger-light">Inactive</span> </span>
                                        </td>
                                        <td class="text-center">
                                            <nuxt-link :to="`/seller/edit/${item.id}`" class="btn btn-warning bg-history-light" variant="warning" size="sm">
                                                <i class="bx bx-edit"></i> EDIT
                                            </nuxt-link>

                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="pagenation">
                            <div style="text-align: right;">
                                <button @click="previousPage" :disabled="currentPage === 1"
                                    class="btn btn-primary btn-sm">
                                    <center><i class="lni lni-angle-double-left"></i></center>
                                </button>
                                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                                <button @click="nextPage" :disabled="currentPage === totalPages"
                                    class="btn btn-primary btn-sm">
                                    <center><i class="lni lni-angle-double-right"></i></center>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Modal -->
        <!--end page wrapper -->
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Seller List',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                status: '',
            },
            notifmsg: '',
            errors: {},
            data: [],
            count: '',
            searchQuery: {
                name: '',
                status: '', // Default status is set to 1
                home_status: '',
            },
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 10, // Number of items per page
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredData.length / this.perPage);
        },
        filteredData() {
            let result = this.data;
            if (this.searchQuery.name) {
                result = result.filter(item =>
                    item.name.toLowerCase().includes(this.searchQuery.name.toLowerCase())
                );
            }
            if (this.searchQuery.status) {
                result = result.filter(item =>
                    item.status == this.searchQuery.status
                );
            }
            if (this.searchQuery.home_status) {
                result = result.filter(item =>
                    item.home_status == this.searchQuery.home_status
                );
            }
            return result;
        },

        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            return _.slice(this.filteredData, startIndex, startIndex + this.perPage);
        },
    },
    methods: {
        async fetchData() {
            try {
                const response = await this.$axios.get(`/unauthenticate/allsellerListadmin`);
                this.data = response.data.data;
                this.count = response.data.active_data;
                // console.log(response.data.active_data);
            } catch (error) {
                console.error(error);
            }
        },
        handleSearch() {
            this.currentPage = 1;
        },
        previousPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },

        success_noti() {
            // Lobibox.notify('success', {
            //     pauseDelayOnHover: true,
            //     continueDelayOnInactiveTab: false,
            //     position: 'top right',
            //     icon: 'bx bx-check-circle',
            //     msg: 'Your data has been successfully inserted.'
            // });
        },
    },
};
</script>

<style scoped>
.pagenation {
    margin-top: 10px;
}

.pagination {
    /*! display: flex; */
    padding-left: 0;
    list-style: none
}
</style>