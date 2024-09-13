<template>
    <!--sidebar wrapper -->
    <div class="sidebar-wrapper" data-simplebar="true" style="background-color: black;">
        <div class="sidebar-header">
            <div>
                <Nuxt-link to="/" href="javascript:;">
                    <h4 class="logo-text"><img src="/images/futuregenit-logo.png" style="height: 40px; width:100px;"
                            alt="logo icon"> </h4>
                </Nuxt-link>
            </div>
            <div class="toggle-icon ms-auto" @click="toggleMenu"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <!--navigation-->
        <ul class="metismenu" id="menu-collapse" is-nav>
            <li>
                <Nuxt-link to="/" href="javascript:;">
                    <i class='bx bx-home-circle'></i>
                    <div class="menu-title">Dashboard</div>
                </Nuxt-link>
            </li>
            <span v-if="user.role_id === 1">
                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        My Products
                    </a>
                    <div class="collapse" id="dashboard-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/ecommarce/product-list">
                                    <i class="bx bx-right-arrow-alt"></i>Product
                                </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/ecommarce/product-list">
                                    <i class="bx bx-right-arrow-alt"></i>Product
                                </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Product Review</Nuxt-link>
                            </li>

                            <li>
                                <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Seller Product</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/ecommarce/category-percentage-history"><i
                                        class="bx bx-right-arrow-alt"></i>Category Percentage History</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#Sales-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Sales
                    </a>
                    <div class="collapse" id="Sales-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/orders/order-list"><i class="bx bx-right-arrow-alt"></i>All
                                    Orders</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Inhouse orders</Nuxt-link>
                            </li>

                            <li>
                                <Nuxt-link to="/orders/order-list"><i class="bx bx-right-arrow-alt"></i>Seller
                                    Orders</Nuxt-link>
                            </li>

                            <li>
                                <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Pickup- Point Order</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#customer-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Customers
                    </a>
                    <div class="collapse" id="customer-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/customer/customerList"><i class="bx bx-right-arrow-alt"></i>All
                                    Customer</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#seller-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Sellers
                    </a>
                    <div class="collapse" id="seller-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/seller/allseller"><i class="bx bx-right-arrow-alt"></i>All
                                    Sellers</Nuxt-link>
                            </li>
                       
                        </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#Coupons-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Coupons
                    </a>
                    <div class="collapse" id="Coupons-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/coupons/all-coupons"><i class="bx bx-right-arrow-alt"></i>All
                                    Coupons</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/coupons/new-coupons"><i class="bx bx-right-arrow-alt"></i>Add New
                                    Coupons</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#mlm-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Affliate & MLM
                    </a>
                    <div class="collapse" id="mlm-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Affliate</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/mlm/report"><i class="bx bx-right-arrow-alt"></i>MLM</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#ecommerce-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Ecommarce Setting
                    </a>
                    <div class="collapse" id="ecommerce-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/ecommarce/category-list"><i
                                        class="bx bx-right-arrow-alt"></i>Category</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/ecommarce/attributes-list"><i
                                        class="bx bx-right-arrow-alt"></i>Attributes</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/manufacturer/manufacturers-list"><i
                                        class="bx bx-right-arrow-alt"></i>Manufacturers</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/brands/brands-list"><i
                                        class="bx bx-right-arrow-alt"></i>Brands</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/orders/status-list"><i class="bx bx-right-arrow-alt"></i>Order
                                    Status</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#HRM-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        HRM
                    </a>
                    <div class="collapse" id="HRM-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/setting/dashboard"><i class="bx bx-right-arrow-alt"></i>Setting
                                    Master</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/employee/dashboard"><i
                                        class="bx bx-right-arrow-alt"></i>Employee</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/holiday/dashboard"><i
                                        class="bx bx-right-arrow-alt"></i>Holiday</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/leave/dashboard"><i class="bx bx-right-arrow-alt"></i>Leave
                                    Management</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/task/dashboard"><i class="bx bx-right-arrow-alt"></i>Task</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/leave/leave-request-list"><i class="bx bx-right-arrow-alt"></i>Leave
                                    Request
                                </Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#User-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        User Management
                    </a>
                    <div class="collapse" id="User-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/role/role_list"><i class="bx bx-right-arrow-alt"></i>Role
                                    List</Nuxt-link>
                            </li>

                            <li>
                                <Nuxt-link to="/user/user_list"><i class="bx bx-right-arrow-alt"></i>User
                                    List</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>
                
                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#blog-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Blog
                    </a>
                    <div class="collapse" id="blog-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/blog/blog-list"><i class="bx bx-right-arrow-alt"></i>Blog list</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/blog/new-blog"><i class="bx bx-right-arrow-alt"></i>Add new blog</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/blog/blog-cat"><i class="bx bx-right-arrow-alt"></i>Blog Categories</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <Nuxt-link to="/company-profile" class="btn  align-items-center rounded ">
                        <i class="bx bx-category"></i>
                        Company Profile
                    </Nuxt-link>
                </li>

                <li class="mb-1">
                    <a class="btn has-arrow align-items-center rounded collapsed  dropdown-toggle"
                        data-bs-toggle="collapse" data-bs-target="#Settings-collapse" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        Settings
                    </a>
                    <div class="collapse" id="Settings-collapse" bis_skin_checked="1" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Nuxt-link to="/setting/ads-management"><i class="bx bx-right-arrow-alt"></i>Ads
                                    Management</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/allseller"><i class="bx bx-right-arrow-alt"></i>Top {{ count }}
                                    Store
                                    List</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/setting/salary-list"><i
                                        class="bx bx-right-arrow-alt"></i>Salary</Nuxt-link>
                            </li>

                            <li>
                                <Nuxt-link to="/setting/packages-list"><i
                                        class="bx bx-right-arrow-alt"></i>Packages</Nuxt-link>
                            </li>
                            <!-- <li>
                                <Nuxt-link to="/ecommarce/category-list#productsliders"><i class="bx bx-right-arrow-alt"></i>Company Profile</Nuxt-link>
                            </li> -->
                        </ul>
                    </div>
                </li>
            </span>
            <span v-else-if="user.role_id == 2">
                <li>
                    <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_35" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bx bx-category"></i>
                        <div class="menu-title">Employee Access Value</div>
                    </a>
                    <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_35" style="width:100%;">
                        <li>
                            <Nuxt-link to="/profile"><i class="bx bx-right-arrow-alt"></i>View Profile</Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="/employee/leave-approval-list"><i class="bx bx-right-arrow-alt"></i>Leave
                                Approval List</Nuxt-link>
                        </li>

                    </ul>
                </li>
            </span>
        </ul>

        <!--end navigation-->

    </div>
    <!--end sidebar wrapper -->
</template>

<script>
export default {
    data() {
        return {
            user: {
                role_id: '',
            },
            count: '',
        }
    },
    mounted() {
        this.defaultLoadingData();
    },
    methods: {
        toggleMenu() {
            const wrapper = document.querySelector('.wrapper');
            if (wrapper.classList.contains('toggled')) {
                wrapper.classList.remove('toggled');
            } else {
                wrapper.classList.add('toggled');
            }
        },
        defaultLoadingData() {
            this.$axios.get('/auth/showProfileData').then(response => {
                console.log(response.data.data.role_id)
                this.user.role_id = response.data.data.role_id;
            });
        },
        async fetchData() {
            try {
                const response = await this.$axios.get(`/unauthenticate/allsellerListadmin`);
                // this.data = response.data.data;
                this.count = response.data.active_data;
                // console.log(response.data.active_data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
