<template>
  <title>Profile</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">

        <section class="categories_list_section overflow-hidden">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="position-relative">

                  <!-- Left navigation button -->
                  <button class="btn btn-default btn_l position-absolute left-0" @click="goToPrevSlide">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>

                  <!-- Swiper container -->
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="data in categoryData" :key="data.id">
                        <nuxt-link :to="`/category/${data.slug}`">
                          {{ data.name }}
                        </nuxt-link>
                      </div>
                    </div>

                  </div>

                  <!-- Right navigation button -->
                  <button class="btn btn-default btn_r position-absolute right-0" @click="goToNextSlide">
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Breadcumb Sections -->

        <div class="loading-indicator" v-if="loading" style="text-align: center;">
          <ProgressbarLoader />
        </div>
        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                    <a href="#">Buyer Profile</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link></div>
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

                  <!-- <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">Particular
                        Information</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">Picture</button>
                    </li>

                  </ul> -->
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                      <div class="image-upload">
                        <input class="form-control" id="_image" style="height: auto; padding-left: 5px;" type="file"
                          hidden @change="handleFileUpload" accept="image/*" />
                        <label class="pro_image position-relative me-2" for="_image">
                          <img :src="imagePreview || '/blank_user.jpg'" alt="Image Preview" class="preview-imag" />
                          <i class="fa-solid fa-camera  position-absolute "
                            style="    left: 50%; transform: translateX(-50%); bottom: 10px;"></i>
                        </label>
                        <div class="p-3">
                          <div class="d-flex align-items-center">
                            <button class="btn  m-1  btn_upload text-white mt-3"
                              style="background-color: #5BBB7B !important;" @click="uploadImage">Upload</button>
                            <button class="btn btn_upload  m-1 text-white mt-3"
                              style="border-color: red; color: red !important;" @click="clearImages">Delete</button>
                          </div>
                          <p style="max-width: 300px;">image must be png, jpg, jpeg formate. Height and weight must be
                            <spna class="text-danger">200x200</spna>.
                          </p>
                        </div>
                      </div>
                      <div v-if="uploadStatus">
                        <p>{{ uploadStatus }}</p>
                      </div>

                      <!-- Start -->
                      <form class="form-style1" @submit.prevent="submitFrm()" id="formrest">
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">First name <span
                                  class="text-danger">*</span> </label>
                              <input type="text" class="form-control" v-model="name">
                              <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Last name<span
                                  class="text-danger">*</span></label>
                              <input type="text" class="form-control" v-model="name">
                              <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="mb20">
                              <div class="form-style1">
                                <label class="heading-color ff-heading fw500 mb10">Country<span
                                    class="text-danger">*</span></label>
                                <select class="form-control" tabindex="null" v-model="country_1">
                                  <option value="">Select</option>
                                  <option v-for="country in CountryData" :key="country.id" :value="country.id">{{
                                    country.countryname }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.country_1">{{ errors.country_1[0] }}</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Email Address<span
                                  class="text-danger">*</span></label>
                              <input type="email" class="form-control" v-model="email">
                              <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <label class="heading-color ff-heading fw500 mb10">Phone Number<span
                                  class="text-danger">*</span></label>
                              <input type="number" class="form-control" v-model="phone_number"
                                placeholder="+1 00 0000000">
                              <span class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0] }}</span>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mb20">
                              <div class="form-style1">
                                <label class="heading-color ff-heading fw500 mb10">Gender<span
                                    class="text-danger">*</span></label>
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
                              <label class="heading-color ff-heading fw500 mb10">LinkedIn</label>
                              <input type="text" class="form-control" v-model="linkdin">
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
                              <label class="heading-color ff-heading fw500 mb10">Whatsapp</label>
                              <input type="text" class="form-control" placeholder="+1 00 0000000" v-model="whatsapp">
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
                              <button type="submit" class="ud-btn btn-thm">Save </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <!-- END -->
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <br />
                      <div class="image-upload">
                        <input type="file" class="form-control" style="height: auto;padding-left: 10px;"
                          @change="handleFileUpload" accept="image/*" />
                        <div v-if="imagePreview">
                          <p>Image Preview:</p>
                          <img :src="imagePreview" alt="Image Preview" class="preview-image" />
                        </div>
                        <div v-if="uploadStatus">
                          <p>{{ uploadStatus }}</p>
                        </div>
                        <button class="btn btn-primary text-white mt-3" @click="uploadImage">Upload Image</button>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
              <br />
              <br />
            
            </div>
          </div>
          <!-- END Profile -->
          <div />
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
const whatsapp = ref("");
const website = ref("");
const gender = ref(1);
const twitter = ref("");
const linkdin = ref("");
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

const clearImages = async () => {
  imageFile.value = null;
  imagePreview.value = null;
}
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
          router.push("/dashboard/buyer/welcome");
       
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

  formData.append("website", website.value);
  formData.append("github", github.value);
  formData.append("linkdin", linkdin.value);
  formData.append("twitter", twitter.value);
  formData.append("whatsapp", whatsapp.value);

  formData.append("gender", gender.value);
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
    linkdin.value = response.data.linkdin !== null && response.data.linkdin !== undefined ? response.data.linkdin : "";
    whatsapp.value = response.data.whatsapp !== null && response.data.whatsapp !== undefined ? response.data.whatsapp : "";
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

const swiper = ref(null);

onMounted(() => {
  //getCertificates();
  //getExperience();
  //getEducations();
  //getSkills();
  getCountry();
  getProfession();
  getUserRow();
  getCatList();

  swiper.value = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.btn_r',
      prevEl: '.btn_l'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  })
  const goToPrevSlide = () => {
    if (swiper.value) {
      swiper.value.slidePrev()  // Go to previous slide
    }
  }

  const goToNextSlide = () => {
    if (swiper.value) {
      swiper.value.slideNext()  // Go to next slide
    }
  }

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
  /* white-space: nowrap; */
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media(min-width: 768px) {
  .categories_list_section {
    white-space: nowrap;
  }
}
</style>