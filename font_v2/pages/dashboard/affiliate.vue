<template>
    <div class="dashboard show">
        <title>Affiliate</title>

        <DashboardSidebar />
        <div class="dashboard_main_content">
            <div class="dashboard__content">

                <DashboardHeader />

                <center>
                    <div class="loading-indicator" v-if="loading" style="text-align: center">
                        <Loader />
                    </div>
                </center>

                <div class="dashboard__main">
                    <div class="affiliate_section">
                        <div class="top_affi_balance">
                            <h1><img src="assets/images/usdt.png" alt="" class="img-fluid">1,249.03</h1>
                            <p>Total Referal Earnings</p>
                            <span>This month 18.98% </span>

                        </div>
                        <!-- refer link section start here  -->
                        <div class="refer_link">
                            <div class="link_header">
                                <div>
                                    <h4>Refer Fiends & Earn</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div class="refer_bonus">
                                    <h6>20.00 USDT</h6>
                                    <p>Bonus</p>
                                </div>
                            </div>
                            <div class="refer_body">
                                <label for="">Refer link</label>
                                <div class="input_bt_group">
                                    <input type="text" v-model="intielink" disabled class="form-control">

                                    <div style="display: none;">
                                        <strong id="invite_link" class="textToCopy"> {{ intielink }}</strong>
                                    </div>
                                    <button class="btn_copy" @click="copyAddressToClipboard()"><i
                                            class="far fa-copy"></i></button>
                                </div>

                                <label for="">Refer Code</label>
                                <div class="input_bt_group">
                                    <input type="text" class="form-control" disabled v-model="inviteCode">
                                    <div style="display: none;">
                                        <strong id="invite_code" class="textToCopy"> {{ inviteCode }}</strong>
                                    </div>
                                    <button class="btn_copy" @click="copyinviteCodeToClipboard()"><i
                                            class="far fa-copy"></i></button>
                                </div>
                            </div>
                        </div>
                        <!-- team members  -->
                        <div class="team_container">
                            <nuxt-link to="/dashboard/associate/affiliateAllhistory">
                                <div class="team_box">
                                    <h4>Total Members: </h4>
                                    <h4>{{ numberOfperson }}</h4>
                                    <p>0.00 USDT</p>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/dashboard/associate/affiliate-level-history-one">
                                <div class="team_box">
                                    <h4>Level 1:</h4>
                                    <h4>{{ level_1 }}</h4>
                                    <p>0.00 USDT</p>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/dashboard/associate/affiliate-level-history-two">
                                <div class="team_box">
                                    <h4>Level 2:</h4>
                                    <h4>{{ level_2 }}</h4>
                                    <p>0.00 USDT</p>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/dashboard/associate/affiliate-level-history-three">
                                <div class="team_box">
                                    <h4>Level 3:</h4>
                                    <h4>{{ level_3 }}</h4>
                                    <p>0.00 USDT</p>
                                </div>
                            </nuxt-link>
                        </div>
                        <!--refere members list  -->
                        <div class="refer_members">
                            <h4>Reffered members list</h4>
                            <ul>
                                <li v-for="(level, index) in levels" :key="level.id">
                                    <div class="member_left">
                                        <p>{{ index + 1 }}</p>
                                        <div class="member_desc">
                                            <img src="assets/images/avt/team-01.jpg" alt="" class="img-fluid">
                                            <div>
                                                <p>{{ level.email }}</p>
                                                <span>{{ level.ocn_id }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <strong><span class="text-success">+0</span>USDT</strong>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DashboardSidebar from "~/layouts/DashboardSidebar.vue";
import DashboardHeader from "~/layouts/DashboardHeader.vue";

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
const router = useRouter();
const loading = ref(false);
definePageMeta({
    middleware: 'is-logged-out',
})

const inviteCode = ref('');
const intielink = ref('');
const level_1 = ref('');
const level_2 = ref('');
const level_3 = ref('');
const numberOfperson = ref('');
const total_referal_warnings = ref(0);
const levelBonus = ref('');
const levels = ref([]);

const getInviteCode = async () => {

    try {
        const response = await axios.get(`/user/getInviteCode`);
        const setIntielink = window.location.origin + '/invite-code/?code=' + response.data.inviteCode;
        console.log("link : " + setIntielink);
        console.log("code : " + response.data.inviteCode);
        inviteCode.value = response.data.inviteCode;
        intielink.value = setIntielink;

    } catch (error) {
        console.error(error);
    }
};

const copyinviteCodeToClipboard = () => {
    // Get the text to copy
    const walletAddress = document.getElementById('invite_code').innerText;
    // Create a textarea element to temporarily hold the text
    const textarea = document.createElement('textarea');
    textarea.value = walletAddress;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px'; // Move the textarea off-screen
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "success",
        title: "Successfully copy"
    });
}

const copyAddressToClipboard = () => {
    // Get the text to copy
    const walletAddress = document.getElementById('invite_link').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = walletAddress;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px'; // Move the textarea off-screen
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: "success",
        title: "Successfully copy"
    });
}

const fetchLevelData = async () => {
    try {
        loading.value = true;
        const response = await axios.get("/user/getLevelDetails");
        console.log("Response data:", response.data.level_1);
        // Assuming maximum_supply and total_supply are DOM elements or component state
        level_1.value = response.data.level_1;
        level_2.value = response.data.level_2;
        level_3.value = response.data.level_3;
        numberOfperson.value = response.data.numberOfperson;
        levels.value = response.data.levels;
        levelBonus.value = response.data.levelBonus;
        total_referal_warnings.value = response.data.total_referal_warnings;
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(async () => {
    getInviteCode();
    fetchLevelData();

});

</script>