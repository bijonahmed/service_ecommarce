<template>
    <div>
        <LogoAndPayment />
        <!-- navbar section start here  -->
        <navbarSecond />
        <!-- Main section start here  -->

        <section class="main_content ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <userSidebar />
                    </div>
                    <div class="col-md-9 ps-md-0">

                        <div class="main_profile">
                            <h5 class="mb-3">MLM Info</h5>
                            <div class="form_group">
                                <p>Invite URL</p>
                                <div class="d-flex align-item-center" id="passwordHelpInline">
                                    <input type="text" v-model="dynamicInputValue" class="form-control">

                                    <button @click="removeUserSegment" class="btn_cart mt-2 d-none"
                                        style="visibility: unset;">Remove User Segment</button>
                                    <p v-if="modifiedURL" class="d-none">
                                        Modified URL: {{ modifiedURL }}
                                    </p>
                                    <button class="btn_confirm ms-2 " @click="copyToClipboard"
                                        style="font-size: 14px; min-width: 100px;"><i
                                            class="fa-regular fa-copy me-1"></i>Copy url</button>
                                </div>
                            </div>
                            <!-- <h5 class="my-3 mx-0 px-0">MLM Info</h5> -->
                            <div class="mlm_de_container">
                                <div class="mlm_box">
                                    <h3>MLM</h3>
                                    <p>Total user : {{ totalmemberCount }}</p>
                                    <p>Total Profit : 0</p>
                                    <button class="btn_confirm w-100" @click="getLevelCalculationAll()">All Level Users</button>
                                </div>
                                <div class="mlm_box d-none">
                                    <h3>Level-1</h3>
                                    <p>Team : {{ lev1Count }}</p>
                                    <p>Profit : 0</p>
                                    <button class="btn_confirm w-100" @click="getLevelCalculation(1)">See
                                        Progress</button>
                                </div>
                                <div class="mlm_box d-none">
                                    <h3>Level-2</h3>
                                    <p>Team : {{ lev2Count }}</p>
                                    <p>Profit : 0</p>
                                    <button class="btn_confirm w-100" @click="getLevelCalculation(2)">See
                                        Progress</button>
                                </div>
                                <div class="mlm_box d-none">
                                    <h3>Level-3</h3>
                                    <p>Team : {{ lev3Count }}</p>
                                    <p>Profit : 0</p>
                                    <button class="btn_confirm w-100" @click="getLevelCalculation(3)">See
                                        Progress</button>
                                </div>
                                <div class="mlm_box d-none">
                                    <h3>Level-4</h3>
                                    <p>Team : {{ lev4Count }}</p>
                                    <p>Profit : 0</p>
                                    <button class="btn_confirm w-100" @click="getLevelCalculation(4)">See
                                        Progress</button>
                                </div>
                                <div class="mlm_box d-none">
                                    <h3>Level-5</h3>
                                    <p>Team : {{ lev5Count }}</p>
                                    <p>Profit : 0</p>
                                    <button class="btn_confirm w-100" @click="getLevelCalculation(5)">See
                                        Progress</button>
                                </div>
                            </div>

                            <div class="recent_orders">
                                <div class="loading-indicator" v-if="loading">
                                    <div class="loader-container">
                                        <img src="/loader/loader.gif" alt="Loader" />
                                    </div>
                                </div>
                                <h5>Recent registerd</h5>
                                <p>Total Users: {{ totalmemberCount }}</p>
                                <!-- <p>Total Profit: {{ teamProfit }}</p> -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Name</th>
                                            <th>Upline </th>
                                            <th>Reg. date</th>
                                            <th>Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(lev, index) in level" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ lev.name }}</td>
                                            <td>{{ lev.upline }}</td>
                                            <td>{{ lev.regDate }}</td>
                                            <td>{{ lev.profit }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
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
import navbarSecond from '../../components/navbarSecond.vue';

export default {
    middleware: 'IsUser',
    components: {
        navbarSecond,
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        userSidebar,

    },
    head: {
        title: 'MLM',
    },
    data() {
        return {
            totalmlm: 0,
            totalmemberCount: '',
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
        this.getLevelCalculationAll();
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
                this.totalmlm = response.data.total;
                this.totalmemberCount = response.data.totalmemberCount;
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

        async getLevelCalculationAll(){
            this.loading = true;
            try {
                const response = await this.$axios.post('/customer/getCustomerAllLevel');
                this.level = response.data.level;
                this.totalmemberCount = response.data.teamCount;
                // this.teamProfit = response.data.teamProfit;
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
}
</style>
