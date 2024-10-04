<template>
    <title>Store Management List</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Store Management List</p>
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

            <!-- Main content -->


            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Total Active Members ({{ activeMembersCount }})</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Total Active Stores ({{ activeStoreCount }})</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page_top  my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-6">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" class="form-control" v-model="searchQuery"
                                                        placeholder="Search by email ">
                                                </th>
                                                <th class="border-0 p-0 me-1"
                                                    style="padding-right: 5px !important; display: none;">
                                                    <select name="" id="" class="form-control" v-model="selectedFilter">
                                                        <option value="" selected disabled>Select status</option>
                                                        <option value="1">Active Store</option>
                                                        <option value="0">Inactive Store</option>
                                                    </select>
                                                </th>
                                                <th class="border-0  p-0 h-100">

                                                    <button type="button" style="min-width: 90px;"
                                                        @click="filterDataNew()"
                                                        class="btn btn-primary btn-fla"><i class="fas fa-search"></i>new
                                                        Search</button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </form>
                            </div>
                            <div class="col-md-6 ">

                            </div>
                        </div>
                    </div>

                    <!-- table section start here  -->
                    <div class="card">
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">
                                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                                    <BulkLoader />
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="accordion">
                                        <div class="card">

                                            <!-- Level-1 -->
                                            <div class="" id="headingOne">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link p-0 " data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <div class="col">
                                                            <div class="card p-0 mb-0">
                                                                <div class="card-body" v-if="downline_deposit_sum_1">
                                                                    <h5 class="card-title">Level-1 [{{ partner_count_1 }}], [Comm:${{commission_1 }}], [Deposit:${{downline_deposit_sum_1 }}]
                                                                    
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                                data-parent="#accordion">
                                                <div class="card-body" v-if="level_one_partners && level_one_partners.length > 0">
                                                    <table
                                                        class="table table-striped table-bordered table-responsiv w-100">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Partner </th>
                                                                <th scope="col">New store</th>
                                                                <th scope="col">General store</th>
                                                                <th scope="col">Super store</th>
                                                                <th scope="col">Mega store</th>
                                                                <th scope="col">Commission</th>
                                                                <th scope="col">Deposite</th>
                                                                <th scope="col">Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(user, index) in flattenUsers(level_one_partners)" :key="user.id">
                                                            <th>{{ index + 1 }}</th>
                                                            <td>
                                                            <p>Username: {{ user.name }} ({{ user.id }})</p>
                                                            <p>Email: {{ user.email }}</p>
                                                            <p>Reg: {{ formatDate(user.created_at) }}</p>
                                                            </td>

                                                            <!-- Display Reg date -->
                                                            <!-- Display New Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'New Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'New Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'New Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display General Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'General Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'General Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'General Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Super Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Super Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Mega Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Mega Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>
                                                            <!-- Additional financial data -->
                                                        <td>${{ user.commission }}</td>
                                                        <td>${{ user.depositAmt }}</td>
                                                        <td>${{ user.currentBalance }}</td>
                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                            </div>
                                            <!-- Level-2 -->
                           
                                            <div class="" id="headingTwo">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link p-0 " data-toggle="collapse"
                                                        data-target="#collapseTwo" aria-expanded="true"
                                                        aria-controls="collapseTwo">
                                                        <div class="col">
                                                            <div class="card p-0 mb-0">
                                                                <div class="card-body" v-if="downline_deposit_sum_2">
                                                                    <h5 class="card-title">
                                                                        
                                                                        Level-2 [{{ partner_count_2 }}], [Comm:${{commission_2 }}], [Deposit:${{downline_deposit_sum_2 }}]
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo"
                                                data-parent="#accordion">
                                                <div class="card-body" v-if="level_two_partners && level_two_partners.length > 0">
                                                    <table
                                                        class="table table-striped table-bordered table-responsiv w-100">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Partner </th>
                                                                <th scope="col">New store</th>
                                                                <th scope="col">General store</th>
                                                                <th scope="col">Super store</th>
                                                                <th scope="col">Mega store</th>
                                                                <th scope="col">Commission</th>
                                                                <th scope="col">Deposite</th>
                                                                <th scope="col">Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(user, index) in flattenUsers(level_two_partners)" :key="user.id">
                                                            <th>{{ index + 1 }}</th>
                                                            <td>
                                                            <p>Username: {{ user.name }} ({{ user.id }})</p>
                                                            <p>Email: {{ user.email }}</p>
                                                            <p>Reg: {{ formatDate(user.created_at) }}</p>
                                                            </td>

                                                            <!-- Display Reg date -->
                                                            <!-- Display New Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'New Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'New Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'New Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display General Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'General Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'General Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'General Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Super Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Super Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Mega Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Mega Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>
                                                            <!-- Additional financial data -->
                                                        <td>${{ user.commission }}</td>
                                                        <td>${{ user.depositAmt }}</td>
                                                        <td>${{ user.currentBalance }}</td>
                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                            </div>

                                             <!-- END -->
                                             <!-- Level 3 -->
                                             <div class="" id="headingThree">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link p-0 " data-toggle="collapse"
                                                        data-target="#collapseThree" aria-expanded="true"
                                                        aria-controls="collapseThree">
                                                        <div class="col">
                                                            <div class="card p-0 mb-0">
                                                                <div class="card-body" v-if="downline_deposit_sum_3">
                                                                    <h5 class="card-title">
                                                                        Level-3 [{{ partner_count_3 }}], [Comm:${{commission_3 }}], [Deposit:${{downline_deposit_sum_3 }}] </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree"
                                                data-parent="#accordion">
                                                <div class="card-body" v-if="level_three_partners && level_two_partners.length > 0">
                                                    <table
                                                        class="table table-striped table-bordered table-responsiv w-100">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Partner </th>
                                                                <th scope="col">New store</th>
                                                                <th scope="col">General store</th>
                                                                <th scope="col">Super store</th>
                                                                <th scope="col">Mega store</th>
                                                                <th scope="col">Commission</th>
                                                                <th scope="col">Deposite</th>
                                                                <th scope="col">Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(user, index) in flattenUsers(level_three_partners)" :key="user.id">
                                                            <th>{{ index + 1 }}</th>
                                                            <td>
                                                            <p>Username: {{ user.name }} ({{ user.id }})</p>
                                                            <p>Email: {{ user.email }}</p>
                                                            <p>Reg: {{ formatDate(user.created_at) }}</p>
                                                            </td>

                                                            <!-- Display Reg date -->
                                                            <!-- Display New Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'New Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'New Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'New Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display General Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'General Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'General Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'General Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Super Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Super Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Mega Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Mega Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>
                                                            <!-- Additional financial data -->
                                                        <td>${{ user.commission }}</td>
                                                        <td>${{ user.depositAmt }}</td>
                                                        <td>${{ user.currentBalance }}</td>
                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                            </div>

                                             <!-- END -->


                                             <!-- Level 4 -->
                                             <div class="" id="headingFour">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link p-0 " data-toggle="collapse"
                                                        data-target="#collapseFour" aria-expanded="true"
                                                        aria-controls="collapseFour">
                                                        <div class="col">
                                                            <div class="card p-0 mb-0">
                                                                <div class="card-body" v-if="downline_deposit_sum_4">
                                                                    <h5 class="card-title">
                                                                        Level-4 [{{ partner_count_4 }}], [Comm:${{commission_4 }}], [Deposit:${{downline_deposit_sum_4 }}]</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseFour" class="collapse show" aria-labelledby="headingFour"
                                                data-parent="#accordion">
                                                <div class="card-body" v-if="level_four_partners && level_two_partners.length > 0">
                                                    <table
                                                        class="table table-striped table-bordered table-responsiv w-100">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Partner </th>
                                                                <th scope="col">New store</th>
                                                                <th scope="col">General store</th>
                                                                <th scope="col">Super store</th>
                                                                <th scope="col">Mega store</th>
                                                                <th scope="col">Commission</th>
                                                                <th scope="col">Deposite</th>
                                                                <th scope="col">Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(user, index) in flattenUsers(level_four_partners)" :key="user.id">
                                                            <th>{{ index + 1 }}</th>
                                                            <td>
                                                            <p>Username: {{ user.name }} ({{ user.id }})</p>
                                                            <p>Email: {{ user.email }}</p>
                                                            <p>Reg: {{ formatDate(user.created_at) }}</p>
                                                            </td>

                                                            <!-- Display Reg date -->
                                                            <!-- Display New Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'New Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'New Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'New Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display General Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'General Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'General Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'General Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Super Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Super Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Mega Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Mega Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>
                                                            <!-- Additional financial data -->
                                                        <td>${{ user.commission }}</td>
                                                        <td>${{ user.depositAmt }}</td>
                                                        <td>${{ user.currentBalance }}</td>
                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                 </div>
                                            </div>

                                             <!-- END -->


                                             <!-- Level 5 -->
                                             <div class="" id="headingFive">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link p-0 " data-toggle="collapse"
                                                        data-target="#collapseFive" aria-expanded="true"
                                                        aria-controls="collapseFive">
                                                        <div class="col">
                                                            <div class="card p-0 mb-0">
                                                                <div class="card-body" v-if="downline_deposit_sum_5">
                                                                    <h5 class="card-title">
                                                                        Level-5 [{{ partner_count_5 }}], [Comm:${{commission_5 }}], [Deposit:${{downline_deposit_sum_5 }}]
                                                                        </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseFive" class="collapse show" aria-labelledby="headingFive"
                                                data-parent="#accordion">
                                                <div class="card-body" v-if="level_five_partners && level_two_partners.length > 0">
                                                    <table
                                                        class="table table-striped table-bordered table-responsiv w-100">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Partner </th>
                                                                <th scope="col">New store</th>
                                                                <th scope="col">General store</th>
                                                                <th scope="col">Super store</th>
                                                                <th scope="col">Mega store</th>
                                                                <th scope="col">Commission</th>
                                                                <th scope="col">Deposite</th>
                                                                <th scope="col">Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(user, index) in flattenUsers(level_five_partners)" :key="user.id">
                                                            <th>{{ index + 1 }}</th>
                                                            <td>
                                                            <p>Username: {{ user.name }} ({{ user.id }})</p>
                                                            <p>Email: {{ user.email }}</p>
                                                            <p>Reg: {{ formatDate(user.created_at) }}</p>
                                                            </td>

                                                            <!-- Display Reg date -->
                                                            <!-- Display New Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'New Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'New Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'New Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display General Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'General Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'General Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'General Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Super Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Super Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Super Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>

                                                            <!-- Display Mega Store information -->
                                                            <td v-if="hasStoreType(user.storeInfo, 'Mega Agency Store')">
                                                            <p class="text-success text-center">Active: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').start_date }}</p>
                                                            <p class="text-danger text-center">Expire: {{ getStoreDetails(user.storeInfo, 'Mega Agency Store').end_date }}</p>
                                                            </td>
                                                            <td v-else>
                                                            <p class="text-danger text-center">Inactive</p>
                                                            </td>
                                                            <!-- Additional financial data -->
                                                        <td>${{ user.commission }}</td>
                                                        <td>${{ user.depositAmt }}</td>
                                                        <td>${{ user.currentBalance }}</td>
                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                 </div>
                                            </div>
                                             <!-- END -->
		 
                                        </div>




                                    </div>
                                </div>
                            </div>

                            

                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
                </div>
            </section>
            <!-- /.content -->
            <!-- /.content -->
        </div>



        <!-- END Modal  -->

    </div>

</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
definePageMeta({
    middleware: 'is-logged-out',
    title: 'User List' // Set your desired page title here

})
const router = useRouter();
const loading = ref(false);
const inviteUser = ref([]);
const storeData = ref([]);
const level_one_partners = ref([]);
const level_two_partners = ref([]);
const level_three_partners = ref([]);
const level_four_partners = ref([]);
const level_five_partners = ref([]);
const searchQuery = ref();
const allactiveStore = ref(0);
const allinactiveStore = ref(0);
const downlineDepositSum = ref(0);
const levels = ref([]);
const userData = ref([]);
const partner_count_1 = ref(0);
const partner_count_2 = ref(0);
const partner_count_3 = ref(0);
const partner_count_4 = ref(0);
const partner_count_5 = ref(0);
const commission_1 = ref(0);
const commission_2 = ref(0);
const commission_3 = ref(0);
const commission_4= ref(0);
const commission_5= ref(0);
const downline_deposit_sum_1 = ref(0);
const downline_deposit_sum_2 = ref(0);
const downline_deposit_sum_3 = ref(0);
const downline_deposit_sum_4 = ref(0);
const downline_deposit_sum_5 = ref(0);
const activeStoreCount = ref(0);
const activeMembersCount = ref(0);

//END userDetails Information 
const flattenUsers = (data) => {
    const users = [];
    data.forEach((level) => {
        users.push(...level.users);
    });
    return users;
};

const formatDate = (dateStr) => {
    return new Date(dateStr).toISOString().slice(0, 10);
};

const hasStoreType = (storeInfo, type) => {
  return storeInfo.some((store) => store.store_name === type);
};

const getStoreDetails = (storeInfo, type) => {
  return storeInfo.find((store) => store.store_name === type) || {};
};


const filterDataNew = async () => {
    try {
    // Start loading indication here if needed
    console.log("Starting partnertReportsOne");
    
    await partnertReportsOne(); // Wait for this to complete
    console.log("Completed partnertReportsOne");

    console.log("Starting partnertReportsTwo");
    await partnertReportsTwo(); // Wait for this to complete
    console.log("Completed partnertReportsTwo");

    console.log("Starting partnertReportsThree");
    await partnertReportsThree(); // Wait for this to complete
    console.log("Completed partnertReportsThree");

    console.log("Starting partnertReportsFour");
    await partnertReportsFour(); // Wait for this to complete
    console.log("Completed partnertReportsFour");

    console.log("Starting partnertReportsFive");
    await partnertReportsFive(); // Wait for this to complete
    console.log("Completed partnertReportsFive");

    // End loading indication here if needed
    console.log("All reports completed");
  } catch (error) {
    console.error("Error occurred while running reports:", error);
    // Handle error (display message, stop loading indication, etc.)
  }

}

const partnertReportsOne = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/report/partnerReportOne`, {
            params: {
                searchQuery: searchQuery.value, // Pass the search query parameter
            },
        });
        if (response.data) {
            partner_count_1.value = response.data.partner_count_1 ?? null;
            level_one_partners.value = response.data.usersData ?? null;
            commission_1.value = response.data.commission_1 ?? null;
            downline_deposit_sum_1.value = response.data.downline_deposit_sum_1 ?? null;
            downline_deposit_sum_2.value = response.data.downline_deposit_sum_2 ?? null;
            downline_deposit_sum_3.value = response.data.downline_deposit_sum_3 ?? null;
            downline_deposit_sum_4.value = response.data.downline_deposit_sum_4 ?? null;
            downline_deposit_sum_5.value = response.data.downline_deposit_sum_5 ?? null;
        }
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
}


const partnertReportsTwo = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/report/partnerReportTwo`, {
            params: {
                searchQuery: searchQuery.value, // Pass the search query parameter
            },
        });
        if (response.data) {
            partner_count_2.value = response.data.partner_count_2 ?? null;
            level_two_partners.value = response.data.usersData ?? null;
            commission_2.value = response.data.commission_2 ?? null;
        }
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
}


const partnertReportsThree = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/report/partnerReportThree`, {
            params: {
                searchQuery: searchQuery.value, // Pass the search query parameter
            },
        });
        if (response.data) {
            partner_count_3.value = response.data.partner_count_3 ?? null;
            level_three_partners.value = response.data.usersData ?? null;
            commission_3.value = response.data.commission_3 ?? null;
        }
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
}


const partnertReportsFour = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/report/partnerReportFour`, {
            params: {
                searchQuery: searchQuery.value, // Pass the search query parameter
            },
        });
        if (response.data) {
            partner_count_4.value = response.data.partner_count_4 ?? null;
            level_four_partners.value = response.data.usersData ?? null;
            commission_4.value = response.data.commission_4 ?? null;
        }
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
}


const partnertReportsFive = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/report/partnerReportFive`, {
            params: {
                searchQuery: searchQuery.value, // Pass the search query parameter
            },
        });
        if (response.data) {
            partner_count_5.value = response.data.partner_count_5 ?? null;
            level_five_partners.value = response.data.usersData ?? null;
            commission_5.value = response.data.commission_5 ?? null;
        }
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
}

const checkingStore = async () => {
    try {
        const response = await axios.get('/store/checkingStoreCounting', {
            params: {
                searchQuery: searchQuery.value, // Pass the search query parameter

            },
        });
        activeStoreCount.value = response.data.activeStoreCount ?? null;
        activeMembersCount.value = response.data.activeMembersCount ?? null;

    } catch (error) {
        console.error('An error occurred:', error);
    }
};

onMounted(() => {
  
    checkingStore();
});

</script>

<style>
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
