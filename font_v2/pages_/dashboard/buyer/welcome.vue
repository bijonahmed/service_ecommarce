<template>
    <title>Welcome to Dashboard</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">
                <!-- Breadcumb Sections -->
                <DashboardMainConentTabsBuyer />
                <div />
            </div>
        </div>
    
        <!-- Modal Template -->
        <div class="modal fade" id="profileUpdateModal" tabindex="-1" aria-labelledby="profileUpdateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="profileUpdateModalLabel">Profile Update Required</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <form id="updateProfileForm">
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" v-model="name">
                                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="email">
                                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="country" class="form-label">Profession</label>

                                    <select id="profession" class="form-select" v-model="selectedProfession" required>
                                        <option value="" disabled>Select a profession</option>
                                        <option v-for="profession in professinListData" :key="profession.id"
                                            :value="profession.id">
                                            {{ profession.name }}
                                        </option>
                                    </select>
                                    <span class="text-danger" v-if="errors.profession_name">{{ errors.profession_name[0]
                                        }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="address" class="form-label">Country</label>
                                    <select class="form-control" v-model="country_1">
                                        <option value="" disabled>Select your country</option>
                                        <option v-for="country in countryData" :key="country.id" :value="country.id">
                                            {{ country.countryname }}
                                        </option>
                                    </select>
                                    <span class="text-danger" v-if="errors.country_1">{{ errors.country_1[0] }}</span>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="phone" class="form-label">Phone Number</label>
                                    <input type="text" class="form-control" id="phone" v-model="phone" required>
                                    <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0]
                                        }}</span>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <label for="phone" class="form-label">Introduce Yourself</label>
                                    <textarea cols="30" rows="6" placeholder="Description"
                                        v-model="introduce_yourself"></textarea>
                                    <span class="text-danger" v-if="errors.introduce_yourself">{{
                                        errors.introduce_yourself[0]
                                        }}</span>
                                </div>

                            </div>
                           
                        </form>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                        <button type="button" class="btn btn-primary text-white" @click="submitProfileUpdate">Save
                            Changes</button>
                    </div>
                </div>
            </div>
        </div>



        <Footer />
    </body>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";
import ProgressbarLoader from '~/components/ProgressbarLoader.vue';

const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();

definePageMeta({
    middleware: "is-logged-out",
});

const profileModal = ref(null);
const errors = ref({});
const profilePicture = ref(null);
const imagePreview = ref(null);
const name = ref('');
const email = ref('');
const selectedProfession = ref('');
const phone = ref('');
const skillInput = ref('');
const country_1 = ref('');
const introduce_yourself = ref('');
const skills = ref([]);
const skillsError = ref('');
const professinListData = ref([]);

const profileLogo = ref('');
let countryData = ref('');



const myprofile = () => {
    console.log("working....");
    router.push('/dashboard/myprofile')
}
const getCountrys = async () => {
    try {
        const response = await axios.get('/unauthenticate/getAllcountrys');
        countryData.value = response.data.data;

    } catch (error) {

    }
};
// Updated function to preview the uploaded image
const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result; // Set the image preview URL
        };
        reader.readAsDataURL(file); // Convert the file to base64
    } else {
        imagePreview.value = null; // Reset the preview if no file is selected
    }
};

const addSkill = () => {
    const trimmedSkill = skillInput.value.trim();
    if (trimmedSkill && !skills.value.includes(trimmedSkill)) {
        skills.value.push(trimmedSkill);
        skillInput.value = '';
        skillsError.value = '';
    } else if (!trimmedSkill) {
        skillsError.value = 'Please enter a skill.';
    } else {
        skillsError.value = 'Skill already added.';
    }
};

const removeSkill = (index) => {
    skills.value.splice(index, 1);
};


const submitProfileUpdate = async () => {
    try {
        const formData = new FormData();
        formData.append('profession_name', selectedProfession.value);
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('country_1', country_1.value);
        formData.append('phone_number', phone.value);
        formData.append('introduce_yourself', introduce_yourself.value);
        //formData.append('skills', skills.value.join(',')); // Join skills with a comma
        const response = await axios.post('/auth/updateprofileFrontend', formData);
        // Handle success response
        // console.log(response.data.message);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account has been successfully update.",
            showConfirmButton: false,
            timer: 3000
        });
        $('#profileUpdateModal').modal('hide'); // Use jQuery to hide the modal

    } catch (error) {
        errors.value = error.response.data.errors
        console.error('Error updating profile:', error);
    } finally {
        // Cleanup actions or reset fields
        skillInput.value = '';
        skills.value = [];
        imagePreview.value = null; // Reset image preview
    }
};


// Function to fetch user data
const chkUserrow = async () => {
    try {
        const response = await axios.post(`/auth/me`);
        //console.log("Profile Status: ", response.data.profile_status);
        name.value = response.data.name;
        email.value = response.data.email;
        phone.value = response.data.phone_number
        country_1.value = response.data.country_1
        selectedProfession.value = response.data.profession_name
        introduce_yourself.value = response.data.introduce_yourself
        profileLogo.value = response.data.profileLogo;
        if (response.data.profile_status == 0) {
            // Trigger the modal
            const modal = new bootstrap.Modal(document.getElementById('profileUpdateModal'), {
                backdrop: 'static',
                keyboard: false // Disable closing with Esc key
            });
            modal.show();
        }

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};


const professionlist = async () => {
    try {
        const response = await axios.get(`/user/allprofession`);
        professinListData.value = response.data.data;
    } catch (error) {
        // Handle error
    }
};
 

onMounted(() => {
    getCountrys();
    professionlist();
    chkUserrow();
   // getCatList();
});

</script>

<style scoped>
.body_content {
    padding: 100px;
}

@media (max-width: 991.98px) {
    .body_content {
        padding: 20px 20px 150px;
    }
}

@media (max-width: 575.98px) {
    .body_content {
        padding: 20px 10px;
    }
}

.categories_list_section {
    border-bottom: 1px solid #E9E9E9;
    padding: 7px 0 3px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>