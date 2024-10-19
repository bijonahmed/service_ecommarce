<template>
  <title>Profile</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">
      
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
                    <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                    <a href="#">Profile</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <!-- <span class="icon flaticon-share dark-color fz12 mr10"></span> -->
                    <span class="fa-solid fa-chevron-left me-1"></span>
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/welcome">Back</nuxt-link></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Start Profile -->
        <div class="container">

          <div class="row">
            <div class="col-xl-12">
              <div class="ps-widget bgc-white bdrs4 overflow-hidden position-relative">

                <div class="col-lg-12">

                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">Particular
                        Information</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">Picture</button>
                    </li>

                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                      <!-- Start -->
                      <form class="form-style1" @submit.prevent="submitFrm()" id="formrest">
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Name</label>
                              <input type="text" class="form-control" v-model="name">
                              <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Email Address</label>
                              <input type="email" class="form-control" v-model="email">
                              <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Phone Number</label>
                              <input type="text" class="form-control" v-model="phone_number">
                              <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0] }}</span>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Website</label>
                              <input type="text" class="form-control" v-model="website">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Github</label>
                              <input type="text" class="form-control" v-model="github">
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Twitter</label>
                              <input type="text" class="form-control" v-model="twitter">
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="mb20">
                              <div class="form-style1">
                                <label class="heading-color ff-heading fw500 mb10">Profession</label>
                                <select class="form-control" tabindex="null" v-model="profession_name">
                                  <option value="">Select</option>
                                  <option v-for="profession in professionData" :key="profession.id"
                                    :value="profession.id">
                                    {{ profession.name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.profession_name">{{ errors.profession_name[0]
                                  }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <div class="form-style1">
                                <label class="heading-color ff-heading fw500 mb10">Gender</label>
                                <select class="form-control" tabindex="null" v-model="gender">
                                  <option value="">Select Gender</option>
                                  <option value="1">Male</option>
                                  <option value="2">Female</option>
                                  <option value="3">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="mb20">
                              <div class="form-style1">
                                <label class="heading-color ff-heading fw500 mb10">Country</label>
                                <select class="form-control" tabindex="null" v-model="country_1">
                                  <option value="">Select</option>
                                  <option v-for="country in CountryData" :key="country.id" :value="country.id">{{
                                    country.countryname }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.country_1">{{ errors.country_1[0] }}</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-12">
                            <div class="mb10">
                              <label class="heading-color ff-heading fw500 mb10">Introduce Yourself</label>
                              <textarea cols="30" rows="6" placeholder="Description"
                                v-model="introduce_yourself"></textarea>
                              <span class="text-danger" v-if="errors.introduce_yourself">{{ errors.introduce_yourself[0]
                                }}</span>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="text-start">
                              <button type="submit" class="ud-btn btn-thm">Save<i
                                  class="fal fa-arrow-right-long"></i></button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <!-- END -->
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <br />
                      <div class="image-upload">
                        <input type="file" @change="handleFileUpload" accept="image/*" />
                        <button @click="uploadImage">Upload Image</button>
                        <div v-if="imagePreview">
                          <p>Image Preview:</p>
                          <img :src="imagePreview" alt="Image Preview" class="preview-image" />
                        </div>
                        <div v-if="uploadStatus">
                          <p>{{ uploadStatus }}</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
              <br />
              <br />
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb25">
                  <h5 class="list-title">Skills</h5>
                </div>
                <div class="col-lg-12">
                  <div class="row">

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="mb20">
                          <div class="form-style1">
                            <div class="col-md-12 mb-3">
                              <div class="d-flex flex-wrap" id="skillsContainer">
                                <div v-for="(skill, index) in skills" :key="index" class="badge bg-primary me-2 mb-2">
                                  {{ skill }}
                                  <button type="button" class="btn-close btn-close-white" @click="removeSkill(index)"
                                    aria-label="Remove"></button>
                                </div>
                              </div>
                              <form @submit.prevent="addSkill"> <!-- Prevent form submission on Enter -->
                                <div class="input-group">
                                  <input ref="skillInputRef" type="text" class="form-control" v-model="skillInput"
                                    placeholder="Add a skill and press Enter" />
                                  <button class="btn btn-outline-secondary" type="submit">Add</button>
                                  <!-- Change button to submit type -->
                                </div>
                                <div v-if="skillsError" class="text-danger">{{ skillsError }}</div>

                                <p>Skills List</p>
                                <ul>
                                  <li v-for="(skill, index) in skillsdata" :key="skill.id">
                                    {{ index + 1 }}. {{ skill.name }}&nbsp;<i class="fa fa-times" aria-hidden="true"
                                      @click="removeListfrmSkills(skill.id)"></i>
                                  </li>
                                </ul>

                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="text-start">
                          <button type="submit" @click="submitskills" class="ud-btn btn-thm">Save<i
                              class="fal fa-arrow-right-long"></i></button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 class="list-title">Education</h5>
                  <a href="#" class="add-more-btn text-thm" data-bs-toggle="modal"
                    data-bs-target="#addEducationModal"><i class="icon far fa-plus mr10"></i>Add Aducation</a>
                </div>
                <div class="position-relative">
                  <div class="educational-quality__">

                    <div v-for="edu in euddata" :key="edu.id" class="wrapper mb40 position-relative">
                      <div class="del-edit">
                        <div class="d-flex">
                          <!-- <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                            data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a> -->
                          <a href="#" class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                            @click.prevent="removeEducation(edu.id)" data-bs-original-title="Delete"
                            aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">{{ edu.year }}</span>
                      <h5 class="mt15">{{ edu.subject }}</h5>
                      <h6 class="text-thm">{{ edu.college }}</h6>
                      <p>{{ edu.description }}</p>
                    </div>

                  </div>

                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 class="list-title">Work &amp; Experience</h5>
                  <a href="javascript:void(0);" class="add-more-btn text-thm" data-bs-toggle="modal"
                    data-bs-target="#addExperienceModal"><i class="icon far fa-plus mr10"></i>Add Experience</a>
                </div>
                <div class="position-relative">
                  <div class="educational-quality__">

                    <div class="wrapper mb40 position-relative" v-for="exdata in expdata" :key="exdata.id">
                      <div class="del-edit">
                        <div class="d-flex">
                          <!-- <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" removeExperience
                            data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a> -->
                          <a href="javascript:void(0);" class="icon" data-bs-toggle="tooltip" data-bs-placement="top"
                            title="" @click.prevent="removeExperience(exdata.id)" data-bs-original-title="Delete"
                            aria-label="Delete"><span class="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span class="tag">{{ exdata.year || "" }}</span>
                      <h5 class="mt15">{{ exdata.role }}</h5>
                      <h6 class="text-thm">{{ exdata.company }}</h6>
                      <p>{{ exdata.description }}</p>
                    </div>

                  </div>

                </div>
              </div>
              <div class="ps-widget bgc-white bdrs4 p1 mb30 overflow-hidden position-relative">
                <div class="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 class="list-title">Certification</h5>
                  <a href="javascript:void(0);" class="add-more-btn text-thm" data-bs-toggle="modal"
                    data-bs-target="#addCertificationeModal"><i class="icon far fa-plus mr10"></i>Add Certification</a>

                </div>
                <div class="position-relative">
                  <div class="educational-quality ps-0">
                    <div class="wrapper mb40 position-relative">

                      <div class="wrapper mb40 position-relative" v-for="cerdata in certificatedata" :key="cerdata.id">
                        <div class="del-edit">
                          <div class="d-flex">
                            <!-- <a href="#" class="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" removeExperience
                            data-bs-original-title="Edit" aria-label="Edit"><span class="flaticon-pencil"></span></a> -->
                            <a href="javascript:void(0);" class="icon" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="" @click.prevent="removeCertificate(cerdata.id)" data-bs-original-title="Delete"
                              aria-label="Delete"><span class="flaticon-delete"></span></a>
                          </div>
                        </div>
                        <span class="tag">{{ cerdata.year || "" }}</span>
                        <h5 class="mt15">{{ cerdata.course_name }}</h5>
                        <h6 class="text-thm">{{ cerdata.institute_name }}</h6>
                        <p>{{ cerdata.description }}</p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- END Profile -->
          <div />
        </div>
      </div>
    </div>
    <!-- Modal Template -->

    <!-- Cetification Modal -->
    <div class="modal fade" id="addCertificationeModal" tabindex="-1" aria-labelledby="addCertificateModalLabel"
      aria-hidden="true">
      <form @submit.prevent="submitCertifiate">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addCertificateModalLabel">Add Certificate</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="mb-3">
                <label for="year" class="form-label">Year</label>
                <input type="text" class="form-control" id="year" placeholder="e.g. 2012 - 2014"
                  v-model="certificate.year">
                <span class="text-danger" v-if="errors.year">{{ errors.year[0] }}</span>

              </div>
              <div class="mb-3">
                <label for="role" class="form-label">Course Name</label>
                <input type="text" class="form-control" id="role" placeholder="e.g. UX Designer"
                  v-model="certificate.course_name">
                <span class="text-danger" v-if="errors.course_name">{{ errors.course_name[0] }}</span>
              </div>
              <div class="mb-3">
                <label for="company" class="form-label">Insititute Name</label>
                <input type="text" class="form-control" id="company" placeholder="e.g. Dropbox"
                  v-model="certificate.institute_name">
                <span class="text-danger" v-if="errors.institute_name">{{ errors.institute_name[0] }}</span>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Describe your role..."
                  v-model="certificate.description"></textarea>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary text-white" id="submitCertificate">Add Certificate</button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Experience Modal -->
    <div class="modal fade" id="addExperienceModal" tabindex="-1" aria-labelledby="addExperienceModalLabel"
      aria-hidden="true">
      <form @submit.prevent="submitExperience">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addExperienceModalLabel">Add Experience</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="mb-3">
                <label for="year" class="form-label">Year</label>
                <input type="text" class="form-control" id="year" placeholder="e.g. 2012 - 2014"
                  v-model="experience.year">
                <span class="text-danger" v-if="errors.year">{{ errors.year[0] }}</span>

              </div>
              <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <input type="text" class="form-control" id="role" placeholder="e.g. UX Designer"
                  v-model="experience.role">
                <span class="text-danger" v-if="errors.role">{{ errors.role[0] }}</span>
              </div>
              <div class="mb-3">
                <label for="company" class="form-label">Company</label>
                <input type="text" class="form-control" id="company" placeholder="e.g. Dropbox"
                  v-model="experience.company">
                <span class="text-danger" v-if="errors.company">{{ errors.company[0] }}</span>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Describe your role..."
                  v-model="experience.description"></textarea>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" id="submitExperience">Add Experience</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Education Modal -->
    <div class="modal fade" id="addEducationModal" tabindex="-1" aria-labelledby="addEducationModalLabel"
      aria-hidden="true">
      <form @submit.prevent="submitEducation">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addEducationModalLabel">Education</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="year" class="form-label">Year:</label>
                <input type="text" id="year" class="form-control" v-model="education.year" />
                <span class="text-danger" v-if="errors.year">{{ errors.year[0] }}</span>
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">Subject:</label>
                <input type="text" id="subject" class="form-control" v-model="education.subject" />
                <span class="text-danger" v-if="errors.subject">{{ errors.subject[0] }}</span>
              </div>

              <div class="mb-3">
                <label for="college" class="form-label">College:</label>
                <input type="text" id="college" class="form-control" v-model="education.college" />
                <span class="text-danger" v-if="errors.college">{{ errors.college[0] }}</span>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description:</label>
                <textarea id="description" class="form-control" v-model="education.description" rows="8"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </form>
    </div>
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
const phone_number = ref('');
const github = ref('');
const website = ref('');
const gender = ref('');
const twitter = ref('');
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
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = async () => {
      const width = img.width;
      const height = img.height;
      if (width === 200 && height === 200) {
        // Proceed with uploading the image
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
        } catch (error) {
          uploadStatus.value = 'Error uploading the image.'; // Error message
          console.error('Error uploading image:', error);
        }
      } else {
        uploadStatus.value = 'Image must be exactly 200x200 pixels.';

        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Image must be exactly 200x200 pixels.",
            showConfirmButton: false,
            timer: 3000
        });


      }
    };
  };

  // Read the image file as a data URL
  reader.readAsDataURL(imageFile.value);
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
      router.push("/dashboard/welcome");
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
    phone_number.value = response.data.phone_number;
    website.value = response.data.website;
    github.value = response.data.github;
    twitter.value = response.data.twitter;
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
  //getCatList();

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