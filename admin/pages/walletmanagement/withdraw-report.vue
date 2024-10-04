<template>
    <title>User List</title>
    <div>
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Withdrawal report</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active">Withdrawal report</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">

                    <div class="page_top  my-2">
                        <div class="row justify-content-between align-items-center my-2">
                            <div class="col-md-9">
                                <form action="">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" placeholder="Search TRX ID" class="form-control">
                                                </th>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" placeholder="Search User ID" class="form-control">
                                                </th>
                                                <th class="border-0  p-0 " style="padding-right: 5px !important;">
                                                    <input type="text" onfocus="(this.type='date')"
                                                        placeholder="Start date" class="form-control">
                                                </th>
                                                <th class="border-0 p-0 me-1" style="padding-right: 5px !important;">
                                                    <input type="text" onfocus="(this.type='date')"
                                                        placeholder="End date" class="form-control">
                                                </th>
                                                <th class="border-0 p-0 me-1" style="padding-right: 5px !important;">
                                                    <select name="" id="" class="form-control">
                                                        <option value="">Unpaid</option>
                                                        <option value="">Success</option>
                                                    </select>
                                                </th>
                                                <th class="border-0  p-0 h-100">
                                                    <button type="button" style="min-width: 90px;"
                                                        class="btn btn-primary btn-fla"><i
                                                            class="fas fa-search"></i>Search</button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- table section start here  -->
                    <div class="card">
                        <div class="card-body table-responsive p-0">
                            <div class="filter_options">

                            </div>
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Transection ID</th>
                                        <th>User info</th>
                                        <th>Currency</th>
                                        <th>Wallet address</th>
                                        <th>Amount</th>
                                        <th>Fee</th>
                                        <th>payable amount </th>
                                        <th>Status</th>
                                        <th>Remarks</th>
                                        <th>Date time</th>
                                        <th>action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>214346</td>                                        
                                        <td>
                                            <p>Id: 3243234</p>
                                            <p>Name: test305</p>
                                            <p>Cell phone: None</p>
                                            <p>Email: None</p>
                                        </td>
                                        <td>USDT</td>
                                        <td width="100px">lkjjsfasdfasldk3453jl42342jhh234</td>
                                        <td>$100.00</td>
                                        <td>$1.00</td>
                                        <td>$99.00</td>
                                        <td>Unpaid</td>
                                        <td>Payment not received</td>
                                        <td>2024-06-12 12:12:00</td>
                                        <td>
                                            <button class="btn w-100 d-block btn-danger btn-sm btn-flat"
                                                data-toggle="modal" data-target="#details"><i
                                                    class="far fa-edit"></i>Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- table section end here  -->
                </div>
            </section>
            <!-- /.content -->
        </div>

        <!-- Start Modal  -->
        <!-- details modal  -->
        <!-- details modal  -->
        <div class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="detailsTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header py-1">
                        <h5 class="modal-title" id="detailsTitle">Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <table class="table">
                                <tr>
                                    <td>Transection ID</td>
                                    <td>123454564</td>
                                </tr>
                                <tr>
                                    <td>User info</td>                                    
                                    <td>
                                        <p>Id: 3243234</p>
                                        <p>Name: test305</p>
                                        <p>Cell phone: None</p>
                                        <p>Email: None</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Currency</td>
                                    <td>
                                        <select name="" id="" class="form-control">
                                            <option value="">USDT</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wallet address</td>
                                    <td>
                                        <input type="text" placeholder="hkj345h3k453h4k5kh3k4jl34j34"
                                            class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>
                                        <input type="text" placeholder="00.00" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fee</td>
                                    <td>
                                        <input type="text" placeholder="00.00" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Receiveable amount</td>
                                    <td>
                                        <input type="text" placeholder="00.00" class="form-control">
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>
                                        <select name="" id="" class="form-control">
                                            <option value="">Unpaid</option>
                                            <option value="">Success</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Remarks</td>
                                    <td>
                                        <textarea name="" id="" cols="30" rows="3"
                                            class="form-control">Payment not received</textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date time</td>
                                    <td>
                                        <input type="datetime-local" value="2024-06-12T19:30" min="2024-01-07T00:00"
                                            max="2080-06-14T00:00" class="form-control">
                                    </td>
                                </tr>
                            </table>
                            <button type="submit" class="btn btn-success w-100">Save and Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

