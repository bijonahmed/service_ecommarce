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
                                <router-link to="/"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Category Percentage History Report</li>
                        </ol>
                    </nav>
                </div>

            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <input type="date" class="form-control name" placeholder="Frm Date" v-model="searchQuery.frm_date">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <input type="date" class="form-control name" placeholder="To Date" v-model="searchQuery.to_date">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control name" placeholder="Customer ID" v-model="searchQuery.customer_id" @input="handleInput">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="input-group mb-3">
                                <button class="btn btn-primary w-100" type="button" @click="fetchData">Search</button>
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

                    <!-- start -->
                    <div class="row">
                        <!-- Start table  -->
                        <div class="table-responsive" v-if="report">

                            <div class="loading-indicator" v-if="loading">
                               
                            </div>

                            <center>
                                <p><small>Total Admin Get Amount: {{ calculateTotalAdminAmount() }} </small></p>
                            </center>
                            <table width="100%" border="1" class="table table-hover" style="font-size: 12px;">
                                <tr>
                                    <td width="5%"><span>#</span></td>
                                    <td width="25%"><span>Product Name</span></td>
                                    <td width="25%"><span>Parent Category</span></td>
                                    <td width="25%"><span>Qty</span></td>
                                    <td width="20%"><span>Price</span></td>
                                    <td width="20%"><span>Category %</span></td>
                                    <td width="20%"><span>Create Date</span></td>
                                    <td width="20%"><span>Admin Get Amount</span></td>

                                </tr>
                                <tr v-for="(lev, index) in report" :key="index">
                                    <td><span>{{ index + 1 }}</span></td>
                                    <td><span>{{ truncateString(lev.product_name, 40) }}</span></td>
                                    <td><span>{{ lev.category_name }}</span></td>
                                    <td><span>{{ lev.product_qty }}</span></td>
                                    <td><span>{{ lev.product_price }}</span></td>
                                    <td class="text-center"><span style="text-align: center; color:red;">{{ lev.category_percetage }}</span></td>
                                    <td><span>{{ lev.created_date }}</span></td>
                                    <td class="text-center"><span style="text-align: center;">{{ lev.admin_get_amount }}</span></td>
                                </tr>
                            </table>
                        </div>

                        <!-- END Table  -->

                    </div>

                    <!-- end  -->

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
        title: 'Category Comission Report',
    },
    data() {
        return {
            report: [],
            loading: '',
            searchQuery: {
                frm_date: '',
                to_date: '',
                customer_id: '',
            },
        };
    },
    async mounted() {
        // await this.fetchData();
    },

    methods: {
        calculateTotalAdminAmount() {
            // Calculate the total admin_get_amount
            let total = 0;
            for (let i = 0; i < this.report.length; i++) {
                total += parseFloat(this.report[i].admin_get_amount) || 0;
            }
            return total.toFixed(2); // Adjust to the desired number of decimal places
        },
        truncateString(str, maxLength) {
            if (str.length > maxLength) {
                return str.substring(0, maxLength) + '...';
            } else {
                return str;
            }
        },
        handleInput() {
            this.searchQuery.customer_id = this.searchQuery.customer_id.replace(/[^0-9]/g, "");
        },
        async fetchData() {
            console.log("=-====" + this.searchQuery.frm_date);
            console.log("=-====" + this.searchQuery.to_date);
            console.log("=customer ID==" + this.searchQuery.customer_id);

            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/customer/cateCommissionHistReport`, {
                    params: {
                        frm_date: this.searchQuery.frm_date,
                        to_date: this.searchQuery.to_date,
                        customer_id: this.searchQuery.customer_id,
                    },
                });

                //console.log("---" + response.data.data);
                // return false; 
                this.report = response.data.data;

                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

    },
};
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: coral;
}
</style>
