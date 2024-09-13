<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <NavbarSecond/>
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0">

                        <div class="main_profile">
                            <div class="row">
                                <div class="col-md-12 d-flex justify-content-between align-items-center">
                                    <div class="tabel_filter">
                                        <button class="btn_primary">1D</button>
                                        <button class="btn_primary">7D</button>
                                        <button class="btn_primary">1M</button>
                                        <button class="btn_primary">3M</button>
                                        <button class="btn_primary">1Y</button>

                                    </div>
                                    <form action="">
                                        <div class="d-flex">
                                            <input type="text" placeholder="Search" class="form-control rounded-0">
                                            <button class="btn_primary">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="dataTable earning_table w-100 mt-3" style="overflow: auto;">
                                <table class="table wtable">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th class="text-center">Date/time</th>
                                            <th>Description</th>
                                            <th class="text-center">Remark</th>
                                            <th class="text-center">Amount</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1</td>
                                            <td class="text-center">2024-02-18 12:00:00</td>
                                            <td>Short description here</td>
                                            <td class="text-center">Remark</td>
                                            <td class="text-center"><span class="text_success fw-bold">$600</span></td>
                                            <td class="text-center">Pending</td>
                                            <td class="text-center" style="min-width: 170px;"><a href="#" class="btn_edit"><i
                                                        class="fa-regular fa-file-lines"></i> View Details</a></td>
                                        </tr>
                                        <tr>
                                            <td>#2</td>
                                            <td class="text-center">2024-02-18 12:00:00</td>
                                            <td>Short description here</td>
                                            <td class="text-center">Remark</td>
                                            <td class="text-center"><span class="text_success fw-bold">$600</span></td>
                                            <td class="text-center">Pending</td>
                                            <td class="text-center" style="min-width: 170px;"><a href="#" class="btn_edit"><i
                                                        class="fa-regular fa-file-lines"></i> View Details</a></td>
                                        </tr>
                                        <tr>
                                            <td>#3</td>
                                            <td class="text-center">2024-02-18 12:00:00</td>
                                            <td>Short description here</td>
                                            <td class="text-center">Remark</td>
                                            <td class="text-center"><span class="text_success fw-bold">$600</span></td>
                                            <td class="text-center">Pending</td>
                                            <td class="text-center" style="min-width: 170px;"><a href="#" class="btn_edit"><i
                                                        class="fa-regular fa-file-lines"></i> View Details</a></td>
                                        </tr>
                                        <tr>
                                            <td>#4</td>
                                            <td class="text-center">2024-02-18 12:00:00</td>
                                            <td>Short description here</td>
                                            <td class="text-center">Remark</td>
                                            <td class="text-center"><span class="text_success fw-bold">$600</span></td>
                                            <td class="text-center">Pending</td>
                                            <td class="text-center" style="min-width: 170px;"><a href="#" class="btn_edit"><i
                                                        class="fa-regular fa-file-lines"></i> View Details</a></td>
                                        </tr>
                                        <tr>
                                            <td>#5</td>
                                            <td class="text-center">2024-02-18 12:00:00</td>
                                            <td>Short description here</td>
                                            <td class="text-center">Remark</td>
                                            <td class="text-center"><span class="text_success fw-bold">$600</span></td>
                                            <td class="text-center">Pending</td>
                                            <td class="text-center" style="min-width: 170px;"><a href="#" class="btn_edit"><i
                                                        class="fa-regular fa-file-lines"></i> View Details</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="pagination">
                                        <ul>
                                            <li>
                                                <a href="#"> prv </a>
                                            </li>
                                            <li>
                                                <a href="#" class="active"> 1 </a>
                                            </li>
                                            <li>
                                                <a href="#"> 2 </a>
                                            </li>
                                            <li>
                                                <a href="#"> 3 </a>
                                            </li>
                                            <li>
                                                <a href="#"> next </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- END Main Section here -->
        <!-- back to top button  -->
        <div class="back_top">
            <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
        </div>
        <Footer />
    </div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import userSidebar from '~/components/userSidebar.vue';
import NavbarSecond from '../../components/NavbarSecond.vue';

export default {
    middleware: 'IsUser',
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'Account statement',
    },
    data() {
        return {
            lev1Count: 0,
            lev2Count: 0,
            lev3Count: 0,
            lev4Count: 0,
            lev5Count: 0,
            level: '',
            teamCount: 0,
            teamProfit: 0,
            inviteCode: '',
            loading: false,
            currentURL: null,
            segmentToRemove: "/user/user-mlm",
        };
    },
    computed: {
        modifiedURL: {
            get() {
                if (process.client) {
                    return this.currentURL + '/user/invite-user/' + this.inviteCode; //this.inviteCode;
                } else {
                    return null; // Handle server-side logic or set a default value
                }
            },
            set(value) {
                // Handle setting modifiedURL if needed
                // For example, you might want to extract relevant information
                // and update other properties accordingly.
            },
        },
        dynamicInputValue: {
            get() {
                return this.modifiedURL; // Getter returns the dynamic value
            },
            set(value) {
                this.updateModifiedURL(value);
            },
        },
    },
    mounted() {
        this.getInviteCode();
        this.getLevel();
        if (process.client) {
            // Check if running on the client side
            this.currentURL = window.location.href;
            this.removeUserSegment();
        }
        this.setupEventHandlers();
    },
    methods: {
        setupEventHandlers() {
            // Ensure DOM elements exist before executing jQuery functions
            $(".post_mdal_open").click(function () {
                $(".post_mdal_").fadeIn();
                $(".product_slider").css("z-index", "0");
            })
            $(".post_mdal_open").click(function () {
                $(".search_bar").css("z-index", "0");
                $(".product_slider").css("z-index", "0");
            })
            $(".bt_close").click(function () {
                $(".post_mdal_").fadeOut();
                $(".search_bar").css("z-index", "4");
                $(".product_slider").css("z-index", "1");
            })
        },
        async getInviteCode() {
            this.loading = true; // Hide loader after response
            await this.$axios.post('/auth/me').then(response => {
                //  console.log("---------------" + response.data.invite_code);
                this.inviteCode = response.data.invite_code;
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

        async getLevel() {
            await this.$axios.get('/customer/getCustomerLevel').then(response => {
                this.lev1Count = response.data.lev1Count;
                this.lev2Count = response.data.lev2Count;
                this.lev3Count = response.data.lev3Count;
                this.lev4Count = response.data.lev4Count;
                this.lev5Count = response.data.lev5Count;
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    //this.loading = false; // Hide loader after response
                });;

        },

        async getLevelCalculation(params) {
            this.loading = true;
            try {
                const response = await this.$axios.post('/customer/getCustomerCalculateLev', {
                    params: params // Include the parameters here
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

        copyToClipboard() {
            const textField = document.createElement('textarea');
            textField.innerText = this.dynamicInputValue;
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            textField.remove();

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Copy successfull"
            });
        },
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
        removeUserSegment() {
            if (process.client) {
                // Check if running on the client side
                // Remove the segment from the URL
                const indexOfSegment = this.currentURL.indexOf(this.segmentToRemove);
                if (indexOfSegment !== -1) {
                    this.currentURL =
                        this.currentURL.slice(0, indexOfSegment) +
                        this.currentURL.slice(indexOfSegment + this.segmentToRemove.length);
                }
            }
        },
        updateModifiedURL(value) {
            if (process.client) {
                // Check if running on the client side
                // Handle setting modifiedURL if needed based on the input value
                this.modifiedURL = value;
            }
        },
    },
};
</script>

<style>
.customBtnColor {
    background-color: #900c3f;
    border-color: #900c3f;
}

.alertbgColor {
    background-color: #eee;
}

.style4 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 12px;
}

.style6 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
}</style>
