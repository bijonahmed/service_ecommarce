<template>
    <title>Order Messages</title>
    <div>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <p>Order Messages</p>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <LazyNuxtLink to="/admin/dashboard">Dashboard</LazyNuxtLink>
                                </li>
                                <li class="breadcrumb-item active">
                                    <LazyNuxtLink to="/usermanagement/bulk-order-status">Back Order Status List</LazyNuxtLink>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <h4><center>Bulk Order Successfully Update.. </center><br/>
                            <center><LazyNuxtLink to="/usermanagement/bulk-order-status"><button class="btn btn-primary btn-lg" type="button">Back Order List</button></LazyNuxtLink> </center>
                       </h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
