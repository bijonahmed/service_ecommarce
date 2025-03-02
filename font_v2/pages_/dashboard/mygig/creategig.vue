<template>
  <title>Create GIG</title>

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

        <!-- <div class="loading-indicator" v-if="loading" style="text-align: center;">
          <Loader />
        </div> -->
        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard/welcome">Dashboard</nuxt-link>
                    <nuxt-link to="/dashboard/mygig/giglist">Gig List</nuxt-link>
                    <a href="#">Create</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <div class="share-save-widget d-flex align-items-center">
                    <div class="h6 mb-0"><nuxt-link to="/dashboard/mygig/giglist">Back</nuxt-link></div>
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
                  <form class="form-style1" @submit.prevent="submitForm" enctype="multipart/form-data">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="">
                          <p>{{ remainingChars }} characters left</p>
                          <p v-if="remainingChars === 0" style="color: red;">You have reached the character limit!</p>
                          <label class="heading-color ff-heading fw500 mb10">Title</label>
                          <input type="text" class="form-control" placeholder="i will" v-model="name" maxlength="80">
                          <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="">

                          <label class="heading-color ff-heading fw500 mb10">Category</label>
                          <select class="form-control" v-model="category_id" @change="getSubCategory">
                            <option value="">Select Category</option>
                            <option v-for="cat in catData" :key="cat.id" :value="cat.id">
                              {{ cat.name }}
                            </option>
                          </select>
                          <span class="text-danger" v-if="errors.category_id">{{ errors.category_id[0] }}</span>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="">
                          <label class="heading-color ff-heading fw500 mb10">SubCategory</label>
                          <select class="form-control" v-model="subcategory_id" @change="getinSubCategory">
                            <option value="">Select Sub Category</option>
                            <option v-for="cat in subcatData" :key="cat.id" :value="cat.id">
                              {{ cat.name }}
                            </option>
                          </select>

                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="">
                          <label class="heading-color ff-heading fw500 mb10">InSubCategory</label>
                          <select class="form-control" v-model="insubcategory_Id">
                            <option value="">Select Sub Category</option>
                            <option v-for="cat in inSubcatData" :key="cat.id" :value="cat.id">
                              {{ cat.name }}
                            </option>
                          </select>

                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="">
                          <div class="form-style1">
                            <label class="heading-color ff-heading fw500 mb10">Types</label>
                            <select class="form-control" @change="showType" v-model="type">
                              <option value="">Select</option>
                              <option value="1">Single Packages </option>
                              <option value="2">Basic/Standard/Premium Packages</option>
                            </select>
                            <span class="text-danger" v-if="errors.type">{{ errors.type[0] }}</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-4 single_pack">
                        <div class="">
                          <label class="heading-color ff-heading fw500 mb10">Regular Price</label>
                          <input type="text" class="form-control" placeholder="$00.00" v-model="price"
                            @input="validateInput" min="0">
                          <span class="text-danger" v-if="priceError">{{ priceError }}</span>
                          <span class="text-danger" v-if="errors.price">{{ errors.price[0] }}</span>
                        </div>
                      </div>
                      <div class="col-sm-4 single_pack">
                        <div class="">
                          <label class="heading-color ff-heading fw500 mb10">Delivery Days</label>
                          <input type="text" class="form-control" placeholder="0" v-model="delivery_day"
                            @input="validateInput" min="0">
                          <span class="text-danger" v-if="errors.delivery_day">{{ errors.delivery_day[0] }}</span>
                        </div>
                      </div>
                      

                    <div class="row multiple_pack">
                      <div class="col-4" style="background-color: #f7f7f7; margin-left: 10px; border-radius: 10px;">
                        <b><u>Basic</u></b><br>
                        <label for="basic_price">Price:</label>
                        <input type="text" id="basic_price" class="form-control" placeholder="Enter price"
                          v-model="basic_price" @input="validateInput" min="0">
                        <span class="text-danger" v-if="errors.basic_price">{{ errors.basic_price[0] }}</span>

                        <label for="basic_description">Short Description:</label>


                        <textarea class="form-control" @input="checkCharLimit('basic_description')" maxlength="200"
                          v-model="basic_description" placeholder="Basic Description (max 200 characters)"></textarea>
                        <small>Characters: {{ basicCharCount }}/200</small>

                        <label for="basic_delivery_days">Delivery Days:</label>
                        <input type="text" id="basic_delivery_days" class="form-control"
                          placeholder="Enter delivery days" v-model="basic_delivery_days" @input="validateInput"
                          min="0">

                        <label for="source_file_basic">Source File:</label>
                        <select id="source_file_basic" class="form-control" v-model="source_file">
                          <option value="Yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>

                      <div class="col-3" style="background-color: #f7f7f7; margin-left: 10px; border-radius: 10px;">
                        <b><u>Standard</u></b><br>
                        <label for="standard_price">Price:</label>
                        <input type="text" id="standard_price" class="form-control" placeholder="Enter price"
                          v-model="standard_price" @input="validateInput" min="0">
                        <span class="text-danger" v-if="errors.standard_price">{{ errors.standard_price[0] }}</span>

                        <label for="standard_description">Short Description:</label>
                        <textarea class="form-control" v-model="stn_descrition"
                          @input="checkCharLimit('stn_description')" maxlength="200"
                          placeholder="STN Description (max 200 characters)"></textarea>

                        <small>Characters: {{ stnCharCount }}/200</small>

                        <label for="standard_delivery_days">Delivery Days:</label>
                        <input type="text" id="standard_delivery_days" class="form-control"
                          placeholder="Enter delivery days" v-model="stn_delivery_days" @input="validateInput" min="0">

                        <label for="source_file_standard">Source File:</label>
                        <select id="source_file_standard" class="form-control" v-model="stn_source_file">
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div class="col-4" style="background-color: #f7f7f7; margin-left: 10px; border-radius: 10px;">
                        <b><u>Premium</u></b><br>
                        <label for="premium_price">Price:</label>
                        <input type="text" id="premium_price" class="form-control" placeholder="Enter price"
                          v-model="premium_price" @input="validateInput" min="0">
                        <span class="text-danger" v-if="errors.premium_price">{{ errors.premium_price[0] }}</span>

                        <label for="premium_description">Short Description:</label>
                        <textarea class="form-control" @input="checkCharLimit('premium_description')" maxlength="200"
                          placeholder="Premium Description (max 200 characters)"
                          v-model="premium_description"></textarea>
                        <small>Characters: {{ premiumCharCount }}/200</small>

                        <label for="premium_delivery_days">Delivery Days:</label>
                        <input type="text" id="premium_delivery_days" class="form-control"
                          placeholder="Enter delivery days" v-model="premium_delivery_days" @input="validateInput"
                          min="0">

                        <label for="source_file_premium">Source File:</label>
                        <select id="source_file_premium" class="form-control" v-model="premium_source_file">
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>



                      <div class="col-md-12">
                        <div class="mb10">
                          <label class="heading-color ff-heading fw500 mb10">Gig Description</label>
                          <RichTextEditor />
                          <span class="text-danger" v-if="errors.gig_description">{{ errors.gig_description[0] }}</span>
                        </div>
                      </div>


                      <div class="col-md-12">
                        <div class="mb10">
                          <label class="heading-color ff-heading fw500 mb10">Order Rules</label>
                          <textarea class="form-control" rows="15" v-model="order_rules"
                            style="height: 200px;"></textarea>
                          <span class="text-danger" v-if="errors.order_rules">{{ errors.order_rules[0] }}</span>
                        </div>
                      </div>


                    </div>

                    <div class="row d-flex">
                      
                      <!-- Thumbnail Image Upload -->
                      <div class="col-sm-6">
                        <label class="heading-color ff-heading fw500 mb10">Thumbnail Image</label>
                        <input type="file" class="form-control" accept="image/*" @change="previewThumbnail"
                          ref="thumbnailInput" />


                        <button type="button" class="d-none" @click="clearThumbnail">Clear Thumbnail</button>

                        <div v-if="thumbnail_images" class="thumbnail-preview mt-2">
                          <img :src="thumbnail_images" alt="Thumbnail Preview" class="thumbnail-image" />
                          <button @click="removeThumbnail" type="button" class="btn btn-danger remove-btn">Remove
                            Thumbnail</button>

                        </div>
                        <span class="text-danger" v-if="errors.thumbnail_images">{{ errors.thumbnail_images[0] }}</span>
                      </div>
                      <!-- Multiple Images Upload -->
                      <div class="col-sm-6">
                        <label class="heading-color ff-heading fw500 mb10">Upload Multiple Images</label>
                        <input type="file" class="form-control" accept="image/*" multiple @change="previewImages" />
                        <div class="image-previews mt-2">
                          <div v-for="(image, index) in images" :key="index" class="image-preview">
                            <img :src="image.url" alt="Image Preview" class="preview-image" />
                            <button @click="removeImage(index)" type="button"
                              class="btn btn-danger btn-sm remove-btn">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <label class="">Status</label>
                        <select class="form-control" v-model="status">
                          <option>Select</option>
                          <option value="0">Draft</option>
                          <option value="1">Publish </option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3 text-white" id="submit-button"> Submit
                    </button>

                  </form>
                </div>
              </div>
              <br />

            </div>
          </div>
        </div>
        <!-- END Profile -->
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
            <center>Update Your Profile Images.<br>
              <small>Image must be exactly 200x200 pixels</small>
            </center>
            <br />
            <div class="image-upload">
              <input type="file" class="form-control" @change="handleFileUpload" accept="image/*" />
              <div v-if="imagePreview">
                <img :src="imagePreview" alt="Image Preview" class="preview-image" />
              </div>
              <div v-if="uploadStatus">
                <p>{{ uploadStatus }}</p>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-primary text-white" @click="uploadImage">Save Changes</button>
          </div>
        </div>
      </div>
    </div>


    <!-- country Modal -->
    <div class="modal fade" id="myModalCountry" tabindex="-1" aria-labelledby="myModalCountryLabel" aria-hidden="true"
      data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalCountryLabel">Message</h5>
          </div>
          <div class="modal-body">
            <center style="text-align:justify">Your country is not selected in your profile. Please go to your profile
              page to update it.</center><br />
            <center><Nuxt-Link to="/dashboard/myprofile"><button class="btn btn-primary text-white"
                  @click="goToProfile">Profile</button></Nuxt-Link></center>
          </div>
        </div>
      </div>
    </div>

    <!-- introduce yourself Modal -->
    <div class="modal fade" id="myModalintroduceYourSelf" tabindex="-1" aria-labelledby="myModalintroduceYourSelfLabel"
      aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalintroduceYourSelfLabel">Message</h5>
          </div>
          <div class="modal-body">
            <center style="text-align:justify">Please introduce yourself in your profile. Please go to your profile page
              to update it.</center><br />
            <center><button class="btn btn-primary text-white" @click="goToProfile">
                Profile
              </button>
            </center>
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

const router = useRouter();
const categoryData = ref([]);
const loading = ref(false);
const route = useRoute();
const { proxy } = getCurrentInstance(); // Get the current component instance

definePageMeta({
  middleware: "is-logged-out",
});
const errors = ref({});

const editorContent = ref('');
const name = ref('');
const category_id = ref('');
const subcategory_id = ref('');
const insubcategory_Id = ref('');
const type = ref('1');
const language_name = ref('');
const language_type = ref('');
const price = ref('');
const delivery_day = ref('');
const thumbnailInput = ref('')
const uploadStatus = ref(null);
//
const basic_price = ref('');
const basic_description = ref('');
const basic_delivery_days = ref('');
const source_file = ref('Yes');
//
const standard_price = ref('');
const stn_descrition = ref('');
const stn_delivery_days = ref('');
const stn_source_file = ref('Yes');
//
const premium_price = ref('');
const premium_description = ref('');
const premium_delivery_days = ref('');
const premium_source_file = ref('Yes');
//
const order_rules = ref('');
const status = ref(1);
const priceError = ref('');
const subcatData = ref([]);
const catData = ref([]);
const inSubcatData = ref([]);
const profileLogo = ref('');
const showType = () => {
  const gigtype = type.value;
  $(".multiple_pack").toggle(gigtype == 2);
  $(".single_pack").toggle(gigtype != 2);
};
const thumbnail_images = ref(null); // to store the thumbnail image
const images = ref([]); // to store multiple images
const imageFile = ref(null);
const imagePreview = ref(null);
const stn_description = ref('');


const country_1 = ref('');
const introduce_yourself = ref('');
// const premium_description = ref('');

const basicCharCount = ref(0);
const stnCharCount = ref(0);
const premiumCharCount = ref(0);

// Function to check character limit
function checkCharLimit(descriptionKey) {
  const description = {
    basic_description,
    stn_description,
    premium_description
  }[descriptionKey];

  // Update character count
  if (description.value.length <= 200) {
    if (descriptionKey === 'basic_description') {
      basicCharCount.value = description.value.length;
    } else if (descriptionKey === 'stn_description') {
      stnCharCount.value = description.value.length;
    } else if (descriptionKey === 'premium_description') {
      premiumCharCount.value = description.value.length;
    }
  } else {
    // Trim value to 200 characters if exceeded
    description.value = description.value.slice(0, 200);
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


const maxChars = 80;
const remainingChars = computed(() => maxChars - name.value.length);


const goToProfile = () => {
  // Check if running in the browser
  if (process.client) {
    window.location.href = '/dashboard/myprofile';
  }
}
// Method to preview thumbnail

const previewThumbnail = (event) => {
  const file = event.target.files[0];
  if (file) {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      // Check the dimensions
      if (img.width === 330 && img.height === 220) {
        thumbnail_images.value = url; // Set the thumbnail image if dimensions are valid
      } else {
        //alert('Invalid image dimensions. Please upload an image of 330x220 pixels.'); // Show an error message
        Swal.fire({
          icon: 'error',
          title: 'Invalid image dimensions',
          text: 'Invalid image dimensions. Please upload an image of 330x220 pixels.',
        });
        clearThumbnail(); // Clear the thumbnail image path
      }
      URL.revokeObjectURL(url); // Release the object URL
    };

    img.onerror = () => {
      //alert('Error loading the image. Please select a valid image file.'); // Error loading the image
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error loading the image. Please select a valid image file.',
      });
      clearThumbnail(); // Clear the thumbnail image path
    };

    img.src = url; // Set the source of the image to trigger the onload event
  } else {
    clearThumbnail(); // Clear the thumbnail if no file is selected
  }
};

// Function to clear the thumbnail image path and reset state
const clearThumbnail = () => {
  thumbnail_images.value = null; // Clear the thumbnail image path
  const fileInput = document.querySelector('input[type="file"]'); // Get the file input element
  if (fileInput) {
    fileInput.value = ''; // Clear the file input value
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
          $("#profileUpdateModal").modal("hide");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Has been successfully update your profile.",
            showConfirmButton: false,
            timer: 3000,
          });
          //profileUpdateModal

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




// Method to remove thumbnail
const removeThumbnail = () => {
  thumbnail_images.value = null;
  thumbnailInput.value = '' // Reset the file input
};

const submitForm = async () => {
  try {
    // Get the content of the editor
    editorContent.value = document.querySelector('.editor').innerHTML;
    console.log("editor value: " + editorContent.value);

    // Create a new FormData object
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('category_id', category_id.value);
    formData.append('subcategory_id', subcategory_id.value);
    formData.append('type', type.value);
    formData.append('language_name', language_name.value);
    formData.append('language_type', language_type.value);
    formData.append('price', price.value);
    formData.append('delivery_day', delivery_day.value);
    formData.append('basic_price', basic_price.value);
    formData.append('basic_description', basic_description.value);
    formData.append('basic_delivery_days', basic_delivery_days.value);
    formData.append('source_file', source_file.value);
    formData.append('standard_price', standard_price.value);
    formData.append('stn_descrition', stn_descrition.value);
    formData.append('stn_delivery_days', stn_delivery_days.value);
    formData.append('stn_source_file', stn_source_file.value);
    formData.append('premium_price', premium_price.value);
    formData.append('premium_description', premium_description.value);
    formData.append('premium_delivery_days', premium_delivery_days.value);
    formData.append('premium_source_file', premium_source_file.value);
    formData.append('gig_description', editorContent.value);
    formData.append('order_rules', order_rules.value);
    formData.append('status', status.value);

    // Append thumbnail image if it exists
    const inputElement = proxy.$refs.thumbnailInput; // Access the input through proxy
    if (inputElement && inputElement.files.length > 0) {
      formData.append('thumbnail_images', inputElement.files[0]);
    }

    // Append multiple images
    images.value.forEach((image, index) => {
      formData.append(`images[${index}]`, image.file);
    });

    // Make the Axios request
    const response = await axios.post('/gig/createGig', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle success response
    router.push('/dashboard/mygig/giglist').then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your gig has been successfully created.",
        showConfirmButton: false,
        timer: 3000,
      });
      console.log('Data inserted successfully', response.data);
    });
  } catch (error) {
    // Handle error response
    if (error.response) {
      if (error.response.status === 422) {
        // Capture validation errors from the server
        errors.value = error.response.data.errors; // Assuming errors is a reactive variable
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    } else {
      // Handle any other type of error (e.g., network issues)
      console.error('An unexpected error occurred:', error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Please check your internet connection.',
      });
    }
  }
};

// Method to preview multiple images
const previewImages = (event) => {
  const files = event.target.files;
  images.value = []; // Reset the images array

  for (let i = 0; i < files.length; i++) {
    const img = new Image(); // Create a new Image object
    img.src = URL.createObjectURL(files[i]); // Create a URL for the image file

    img.onload = () => {
      // Validate dimensions
      if (img.width === 330 && img.height === 220) {
        images.value.push({
          url: img.src,
          file: files[i], // Store the file for further use if needed
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid image dimensions',
          text: 'Invalid image dimensions. Please upload an image of 330x220 pixels.',
        });
        // Clear the input if the dimensions are invalid
        event.target.value = ""; // Clear the input path
      }
    };

    img.onerror = () => {
      // alert("Invalid image file."); // Alert for invalid image file
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error loading the image. Please select a valid image file.',
      });
      event.target.value = ""; // Clear the input path
    };
  }
};


// Method to remove a specific image
const removeImage = (index) => {
  images.value.splice(index, 1); // remove the image at the given index
};

const validateInput = () => {
  // Create an array of your price fields
  const priceFields = [price, basic_price, standard_price, premium_price, delivery_day, basic_delivery_days, stn_delivery_days, premium_delivery_days];
  priceFields.forEach((field) => {
    field.value = field.value.replace(/[^0-9]/g, ''); // Allow only numbers
    if (field.value === '') {
      field.error = 'String not allowed'; // Set the error message
    } else {
      field.error = ''; // Clear the error message
    }
  });
};

const getCatList = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/unauthenticate/getFindCategorys`);
    categoryData.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const getCategoryAll = async () => {
  try {
    const response = await axios.get(`/unauthenticate/getCategoryList`);
    catData.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const getSubCategory = async () => {
  try {
    const categoryId = category_id.value; // Assuming you have category_id defined somewhere
    const response = await axios.get('/unauthenticate/getSubCategoryList', {
      params: {
        categoryId,  // First parameter
      }
    });

    subcatData.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getinSubCategory = async () => {
  try {
    const categoryId = subcategory_id.value; // Assuming you have category_id defined somewhere
    const response = await axios.get('/unauthenticate/getSubCategoryList', {
      params: {
        categoryId,  // First parameter
      }
    });

    inSubcatData.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const chkUserrow = async () => {
  try {
    const response = await axios.post(`/auth/me`);
    profileLogo.value = response.data.profileLogo;
    country_1.value = response.data.country_1;
    introduce_yourself.value = response.data.introduce_yourself;

    if (response.data.country_1 === null) {
      $('#myModalCountry').modal('show');
    }

    if (response.data.introduce_yourself === '') {
      $('#myModalintroduceYourSelf').modal('show');
    }

    if (!response.data.profileLogo) {
      // Initialize the modal
      const modal = new bootstrap.Modal(document.getElementById('profileUpdateModal'), {
        backdrop: 'static', // Prevent closing by clicking outside
        keyboard: false     // Prevent closing with the Esc key
      });
      // Show the modal
      modal.show();
    }

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
onMounted(() => {
  getCatList();
  chkUserrow();
  getCategoryAll();
  $(".multiple_pack").hide();


});

</script>

<style scoped>
.text-danger {
  color: red;
}

.thumbnail-preview,
.image-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-preview,
.thumbnail-preview {
  position: relative;
  width: 330px;
  /* Updated to 330px */
  height: 220px;
  /* Updated to 220px */
  overflow: hidden;
  /* Optional: This ensures any overflow is hidden */
}

.thumbnail-image,
.preview-image {
  width: 330px;
  /* Updated to 330px */
  height: 220px;
  /* Updated to 220px */
  border-radius: 10px;
}

.remove-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #dc3545;
  color: #fff;
  font-size: 12px;
  padding: 5px 0;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  border: none;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-4,
.col-3 {
  flex: 1;
  min-width: 300px;
  max-width: 33.33%;
  box-sizing: border-box;
  margin: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
}

b {
  color: #333;
}

label {
  font-weight: bold;
  margin-top: 10px;
  display: block;
  color: #555;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

input::placeholder {
  color: #aaa;
}

select {
  cursor: pointer;
}

select option {
  padding: 10px;
}

input[type="text"]:disabled,
select:disabled {
  background-color: #f8f9fa;
  border-color: #ddd;
  cursor: not-allowed;
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

.textarea-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.textarea-box {
  position: relative;
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

small {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #888;
}
</style>