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
                            <li class="breadcrumb-item active" aria-current="page">MLM Report</li>
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

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(1)">Level-1</button>
                                Team : {{ lev1Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(2)">Level-2</button>
                                Team : {{ lev2Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(3)">Level-3</button>
                                Team : {{ lev3Count }}<br />
                                Profit : 00
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(4)">Level-4</button>
                                Team : {{ lev4Count }}<br />
                                Profit : 00
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(5)">Level-5</button>
                                Team : {{ lev5Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(6)">Level-6</button>
                                Team : {{ lev6Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(7)">Level-7</button>
                                Team : {{ lev7Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(8)">Level-8</button>
                                Team : {{ lev8Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(9)">Level-9</button>
                                Team : {{ lev8Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="alert alert-primary alertbgColor" role="alert">
                                <button class="btn btn-primary btn-sm w-100 mb-1 customBtnColor" @click="getLevelCalculation(7)">Level-10</button>
                                Team : {{ lev10Count }}<br />
                                Profit : 00
                            </div>
                        </div>

                        <!-- Start table  -->
                        <div class="table-responsive" v-if="level">

                            <div class="loading-indicator" v-if="loading">
                                <div class="loader-container">
                                    <!-- <img src="/loader/loader.gif" alt="Loader" /> -->
                                </div>
                            </div>

                            <center>
                                <p><small>Total Users: {{ teamCount }},Total Profit: {{ teamProfit }}</small></p>
                            </center>
                            <table width="100%" border="1" class="table table-striped table-hover">
                                <tr>
                                    <td width="5%"><span class="style4">#</span></td>
                                    <td width="25%"><span class="style4">Name</span></td>
                                    <td width="25%"><span class="style4">Upline</span></td>
                                    <td width="25%"><span class="style4">Reg. Date</span></td>
                                    <td width="20%"><span class="style4">Profit</span></td>
                                </tr>
                                <tr v-for="(lev, index) in level" :key="index">
                                    <td><span class="style6">{{ index + 1 }}</span></td>
                                    <td><span class="style6">{{ lev.name }}</span></td>
                                    <td><span class="style6">{{ lev.upline }}</span></td>
                                    <td><span class="style6">{{ lev.regDate }}</span></td>
                                    <td><span class="style6">{{ lev.profit }}</span></td>
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
        title: 'MLM Report',
    },
    data() {
        return {
            lev1Count: 0,
            lev2Count: 0,
            lev3Count: 0,
            lev4Count: 0,
            lev5Count: 0,
            lev6Count: 0,
            lev7Count: 0,
            lev8Count: 0,
            lev9Count: 0,
            lev10Count: 0,

            level: '',
            teamCount: 0,
            teamProfit: 0,
            inviteCode: '',
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
        handleInput() {
            this.searchQuery.customer_id = this.searchQuery.customer_id.replace(/[^0-9]/g, "");
        },
        async fetchData() {
            console.log("=-====" + this.searchQuery.frm_date);
            console.log("=-====" + this.searchQuery.to_date);
            console.log("=customer ID==" + this.searchQuery.customer_id);

            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/customer/getmlmReport`, {
                    params: {
                        frm_date: this.searchQuery.frm_date,
                        to_date: this.searchQuery.to_date,
                        customer_id: this.searchQuery.customer_id,
                    },
                });
                this.lev1Count = response.data.lev1Count;
                this.lev2Count = response.data.lev2Count;
                this.lev3Count = response.data.lev3Count;
                this.lev4Count = response.data.lev4Count;
                this.lev5Count = response.data.lev5Count;
                this.lev6Count = response.data.lev6Count;
                this.lev7Count = response.data.lev7Count;
                this.lev8Count = response.data.lev8Count;
                this.lev9Count = response.data.lev9Count;
                this.lev10Count = response.data.lev10Count;

                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

        async getLevelCalculation(params) {
            this.loading = true;
            try {
                const response = await this.$axios.post('/customer/getCustomerCalculateLevAd', {
                    params: params,
                    customer_id: this.searchQuery.customer_id
                });

                this.level = response.data.level;
                this.teamCount = response.data.teamCount;
                this.teamProfit = response.data.teamProfit;
            } catch (error) {
                // Handle error
            } finally {
                this.loading = false; // Hide loader after response
            }
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
