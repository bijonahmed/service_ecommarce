<template>
    <title>MLM</title>

    <body class="bgc-thm1">
        <div class="wrapper ovh">
            <Header />
            <MobileMenu />
            <div class="body_content">
                <section class="categories_list_section overflow-hidden">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="listings_category_nav_list_menu">
                                    <ul class="mb0 d-flex ps-0">
                                        <li v-for="data in categoryData" :key="data.id">
                                            <nuxt-link :to="`/category/${data.slug}`">
                                                {{ data.name }}
                                            </nuxt-link>
                                        </li>
                                        <!-- {{categoryData}} -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Breadcumb Sections -->

                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <Loader />
                </div>
                <section class="breadcumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <div class="breadcumb-style1 mb10-xs">
                                    <div class="breadcumb-list">
                                        <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                                        <a href="#">MLM</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                    <div class="share-save-widget d-flex align-items-center">
                                        <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Start Profile -->
                <div class="container">

                    <ReferralLink />
                    <UserLevels />

                </div>
            </div>
        </div>
        <!-- Modal Template -->

        <Footer />
    </body>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();

definePageMeta({
    middleware: "is-logged-out",
});

const profileModal = ref(null);
const errors = ref({});
const id = ref('');
const name = ref('');
const email = ref('');
const phone_number = ref("");
const github = ref("");
const website = ref("");
const gender = ref(1);
const twitter = ref("");
const country_1 = ref('');
const introduce_yourself = ref('');
const profession_name = ref('');
const professionData = ref([]);
const CountryData = ref([]);
const imageFile = ref(null);
const imagePreview = ref(null);
const uploadStatus = ref(null);
const skillsdata = ref([]);
const euddata = ref([]);
const expdata = ref([]);
const certificatedata = ref([]);

const skillInput = ref(''); // Reactive variable for input
const skills = ref([]); // Reactive array for skills
const skillsError = ref(''); // Reactive variable for error message
const skillInputRef = ref(null); // Reference for the input element

//Add education 
const education = ref({
    year: '',
    subject: '',
    college: '',
    description: ''
});
//Add experience 
const experience = ref({
    year: '',
    role: '',
    company: '',
    description: ''
});

//Certificate
const certificate = ref({
    year: '',
    course_name: '',
    institute_name: '',
    description: ''
});

const errorMessage = ref('');

const submitCertifiate = async () => {
    try {
        const response = await axios.post('/user/add-certificate', certificate.value);
        console.log('Certificate added successfully:', response.data);
        certificate.value = {
            year: '',
            course_name: '',
            institute_name: '',
            description: ''
        };
        errorMessage.value = ''; // Clear any previous error messages
        $('#addCertificationeModal').modal('hide');
        getCertificates();
    } catch (error) {
        // Check if there's a response from the server
        if (error.response) {
            if (error.response.status === 422) {
                // Validation errors
                errors.value = error.response.data.errors; // Assuming `errors` is defined as a reactive variable
                console.error("Validation errors:", errors.value);
            } else {
                console.error("Server error:", error.response.data.message || error.response.data);
                errorMessage.value = 'An error occurred while adding education. Please try again.';
            }
        } else {
            console.error("An error occurred:", error);
            errorMessage.value = 'Failed to add education. Please check your connection and try again.';
        }
    }
};

const submitExperience = async () => {
    try {
        const response = await axios.post('/user/add-experience', experience.value);
        console.log('Education added successfully:', response.data);
        experience.value = {
            year: '',
            role: '',
            company: '',
            description: ''
        };
        errorMessage.value = ''; // Clear any previous error messages
        $('#addExperienceModal').modal('hide');
        getExperience();
    } catch (error) {
        // Check if there's a response from the server
        if (error.response) {
            if (error.response.status === 422) {
                // Validation errors
                errors.value = error.response.data.errors; // Assuming `errors` is defined as a reactive variable
                console.error("Validation errors:", errors.value);
            } else {
                console.error("Server error:", error.response.data.message || error.response.data);
                errorMessage.value = 'An error occurred while adding education. Please try again.';
            }
        } else {
            console.error("An error occurred:", error);
            errorMessage.value = 'Failed to add education. Please check your connection and try again.';
        }
    }
};

const submitEducation = async () => {
    try {
        const response = await axios.post('/user/add-education', education.value);
        console.log('Education added successfully:', response.data);
        education.value = {
            year: '',
            subject: '',
            college: '',
            description: ''
        };
        errorMessage.value = ''; // Clear any previous error messages
        $('#addEducationModal').modal('hide');
        getEducations();
    } catch (error) {
        // Check if there's a response from the server
        if (error.response) {
            if (error.response.status === 422) {
                // Validation errors
                errors.value = error.response.data.errors; // Assuming `errors` is defined as a reactive variable
                console.error("Validation errors:", errors.value);
            } else {
                console.error("Server error:", error.response.data.message || error.response.data);
                errorMessage.value = 'An error occurred while adding education. Please try again.';
            }
        } else {
            console.error("An error occurred:", error);
            errorMessage.value = 'Failed to add education. Please check your connection and try again.';
        }
    }
};

const removeCertificate = async (id) => {
    // Show SweetAlert confirmation dialog
    const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (!isConfirmed) return; // Exit if the user cancels

    try {
        const response = await axios.get(`/user/delete-certificate/${id}`);
        console.log('Certificate deleted successfully:', response.data);
        getCertificates();
        Swal.fire({
            title: 'Deleted!',
            text: 'Your Certificate record has been deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } catch (error) {
        console.error('Error deleting Certificate:', error);
        // Show error message
        Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting your Certificate record.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};

const removeExperience = async (id) => {
    // Show SweetAlert confirmation dialog
    const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (!isConfirmed) return; // Exit if the user cancels

    try {
        const response = await axios.get(`/user/delete-experience/${id}`);
        console.log('Education deleted successfully:', response.data);
        getExperience();
        Swal.fire({
            title: 'Deleted!',
            text: 'Your exprience record has been deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } catch (error) {
        console.error('Error deleting exprience:', error);
        // Show error message
        Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting your exprience record.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};

const removeEducation = async (id) => {
    // Show SweetAlert confirmation dialog
    const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (!isConfirmed) return; // Exit if the user cancels

    try {
        const response = await axios.get(`/user/delete-education/${id}`);
        console.log('Education deleted successfully:', response.data);
        getEducations();
        Swal.fire({
            title: 'Deleted!',
            text: 'Your education record has been deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } catch (error) {
        console.error('Error deleting education:', error);
        // Show error message
        Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting your education record.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};

const addSkill = () => {
    const trimmedSkill = skillInput.value.trim(); // Trim input

    if (trimmedSkill) {
        if (!skills.value.includes(trimmedSkill)) {
            skills.value.push(trimmedSkill); // Add skill to the list
            skillInput.value = ''; // Clear input field
            skillsError.value = ''; // Clear any error messages
            skillInputRef.value.focus(); // Focus back on the input field
        } else {
            skillsError.value = 'Skill already added.'; // Handle duplicate skill
            skillInputRef.value.focus(); // Focus back on the input field even with an error
        }
    } else {
        skillsError.value = 'Please enter a skill.'; // Handle empty input
        skillInputRef.value.focus(); // Focus back on the input field even with an error
    }
};
const removeSkill = (index) => {
    skills.value.splice(index, 1);
};

const removeListfrmSkills = async (id) => {
    try {
        const response = await axios.get('/user/removeSkill', {
            params: {
                id: id,
            }
        });
        console.log('Response:', response.data.message);
        getSkills();
        //  console.log('Response:', response.data);
    } catch (error) {
        console.error('Error fetching countries:', error);
    }

}
const submitskills = async () => {
    if (skills.value.length === 0) {
        skillsError.value = 'Please add at least one skill before submitting.'; // Ensure there are skills to submit
        return;
    }
    try {
        const response = await axios.post('/user/addskills', {
            skills: skills.value, // Send the entire array of skills
        });

        skillsdata.value = response.data.skillsdata;
        skills.value = []; // Clear skills after successful submission
        skillsError.value = ''; // Clear any error messages
        skillInputRef.value.focus(); // Focus back on the input field
    } catch (error) {
        skillsError.value = 'Failed to submit skills. Please try again.'; // Handle error
        console.error("Error submitting skills:", error);
    }

}

// Handle file upload event
const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file && file.type.startsWith('image/')) {
        imageFile.value = file;
        imagePreview.value = URL.createObjectURL(file);
    } else {
        imageFile.value = null;
        imagePreview.value = null;
    }
};

// Function to upload the image to Laravel API
const uploadImage = async () => {
    if (!imageFile.value) return;

    const formData = new FormData();
    formData.append('image', imageFile.value); // Add image to FormData
    try {
        const response = await axios.post('/auth/updateProfileImages', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        uploadStatus.value = 'Image uploaded successfully!'; // Success message
        console.log(response.data); // Handle server response (e.g., URL of uploaded image)
        imagePreview.value = response.data.profileLogo;
        location.reload();
        router.push("/dashboard/buyer/myprofile");
    } catch (error) {
        uploadStatus.value = 'Error uploading the image.'; // Error message
        console.error('Error uploading image:', error);
    }
};

const submitFrm = () => {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone_number", phone_number.value);
    formData.append("github", github.value);
    formData.append("website", website.value);
    formData.append("gender", gender.value);
    formData.append("twitter", twitter.value);
    formData.append("country_1", country_1.value);
    formData.append("introduce_yourself", introduce_yourself.value);
    formData.append("profession_name", profession_name.value);

    const headers = {
        "Content-Type": "multipart/form-data",
    };
    axios.post("/auth/updateprofileFrontendSeller", formData, { headers })
        .then((res) => {
            document.getElementById("formrest").reset();
            router.push("/dashboard/buyer/welcome");
        })
        .catch((error) => {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                // Handle other types of errors here
                console.error("An error occurred:", error);
            }
        });
};

const getUserRow = async () => {
    try {
        const response = await axios.post("/auth/me");
        console.log("Response data:", response.data.name); // Log the response data
        name.value = response.data.name;
        email.value = response.data.email;
        phone_number.value = response.data.phone_number !== null && response.data.phone_number !== undefined ? response.data.phone_number : ""; //response.data.phone_number;
        website.value = response.data.website !== null && response.data.website !== undefined ? response.data.website : ""; // response.data.website;
        github.value = response.data.github !== null && response.data.github !== undefined ? response.data.github : "";  //response.data.github;
        twitter.value = response.data.twitter !== null && response.data.twitter !== undefined ? response.data.twitter : "";
        id.value = response.data.id;
        gender.value = response.data.gender;
        profession_name.value = response.data.profession_name;
        country_1.value = response.data.country_1;
        introduce_yourself.value = response.data.introduce_yourself;
        imagePreview.value = response.data.profileLogo;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getCountry = async () => {
    try {
        const response = await axios.get(`/user/getCountry`);
        CountryData.value = response.data.data;
    } catch (error) {
        console.log(error);
    }
};

const getProfession = async () => {
    try {
        const response = await axios.get(`/user/allprofession`);
        professionData.value = response.data.data;
    } catch (error) {
        console.log(error);
    }
};

const getExperience = async () => {
    try {
        const response = await axios.get(`/user/getExperience`);
        expdata.value = response.data.expdata;
    } catch (error) {
        console.log(error);
    }
};

const getCertificates = async () => {
    try {
        const response = await axios.get(`/user/getCertificate`);
        certificatedata.value = response.data.certificatedata;
    } catch (error) {
        console.log(error);
    }
};

const getEducations = async () => {
    try {
        const response = await axios.get(`/user/geteducation`);
        euddata.value = response.data.euddata;
    } catch (error) {
        console.log(error);
    }
};

const getSkills = async () => {
    try {
        const response = await axios.get(`/user/skillsData`);
        skillsdata.value = response.data.skillsdata;
    } catch (error) {
        console.log(error);
    }
};

const getCatList = async () => {
    try {
        loading.value = true;
        const response = await axios.get(`/unauthenticate/getFindCategorys`);
        categoryData.value = response.data;
    } catch (error) {
        // Handle error
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    getCertificates();
    getExperience();
    getEducations();
    getSkills();
    getCountry();
    getProfession();
    getUserRow();
    getCatList();

});

</script>

<style scoped>
.preview-image {
    max-width: 300px;
    max-height: 300px;
    margin-top: 10px;
    border: 2px solid #ddd;
}

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