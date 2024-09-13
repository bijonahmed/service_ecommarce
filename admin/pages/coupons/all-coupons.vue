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
                                    <router-link to="/"><a href="javascript:;"><i
                                                class="bx bx-home-alt"></i></a></router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Coupon List</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="ms-auto">
                        <div class="btn-group">
                            <Nuxt-link to="/coupons/new-coupons"><button type="button" class="btn btn-primary"><i
                                        class="bx bx-plus"></i>New</button></Nuxt-link>
                        </div>
                    </div>
                </div>
                <!--end breadcrumb-->
                <!-- <span class="loader"></span> -->
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control name" placeholder="Coupon Name"
                                        v-model="searchQuery.name" @input="handleSearch">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="input-group mb-3">
                                    <select class="form-select form-select-solid status" v-model="searchQuery.status"
                                        @change="handleSearch">
                                        <option value="">All Status</option>
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="input-group mb-3">
                                    <button class="btn btn-primary w-100" type="button"
                                        @click="fetchData">Search</button>
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
                                        <th>Coupon Name </th>
                                        <th>Promo Code </th>
                                        <th>Min. Shopping amount</th>
                                        <th>Coupon Type </th>
                                        <th>Discount</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in paginatedData" :key="item.id">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.promocode }}</td>
                                        <td><span class="fw-bold">$</span>{{ item.min_shopping }}</td>
                                        <td>
                                            <!-- {{ item.code_type }} -->
                                            <p class="badge bg-primary" v-if="item.code_type === 'percentage'">In
                                                Percentage</p>
                                            <p class="badge bg-dark" v-else>Fixed Amount</p>

                                        </td>
                                        <td>
                                            <strong v-if="item.d_percent !== undefined && item.d_percent !== null"
                                                style="color: #f37623;">{{
                                            item.d_percent }}%</strong>
                                            <strong v-else-if="item.d_fvalue !== undefined && item.d_fvalue !== null"
                                                style="color: darkblue;">${{
                                            item.d_fvalue }}</strong>
                                        </td>
                                        <td class="text-center">
                                            <span v-if="(item.status == 1)" class="badge bg-success-light"> Active </span>
                                            <span v-else class="badge bg-danger-light"> Inactive </span>
                                        </td>
                                        <td>
                                            <nuxt-link :to="`/coupons/edit/${item.id}`" class="btn btn-warning bg-history-light"  variant="warning" size="sm"><i
                                                    class="bx bx-edit"></i>EDIT
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
        <!--end page wrapper -->
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Coupons List',
    },
    data() {
        return {
            // percentage: "percentage",
            data: [],
            searchQuery: {
                name: '',
                phone: '',
                status: ''
            },
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 10, // Number of items per page
        };
    },
    async mounted() {
        await this.fetchData();
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

            return result;
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            return _.slice(this.filteredData, startIndex, startIndex + this.perPage);
        },
    },
    methods: {
        async fetchData() {
            // $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/setting/couponsList`);
                this.data = response.data.reverse();
                console.log(response.data.code_type);
                // $(".customerSpinner").hide();
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

        editCustomer(id) {
            this.$router.push({ path: `/edit/${id}` });
        }
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

thead tr th,
tbody tr td {
    text-align: center !important;
}
</style>