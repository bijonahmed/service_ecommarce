<template>
  <title>Add Post</title>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <p>Add Post</p>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <LazyNuxtLink to="/admin/dashboard">Home</LazyNuxtLink>
                </li>
                <li class="breadcrumb-item active">
                  <LazyNuxtLink to="/post/list">Back to List</LazyNuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- <button @click="pageRedirect()">Pages</button> -->
      <section class="content">
        <div class="container-fluid">
          <!-- Start -->
          <div class="card border-top border-0 border-4 border-info">
            <div class="border p-4 rounded">
              <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                <div class="card card-primary card-outline card-tabs">
                  <div class="card-header p-0 pt-1 border-bottom-0">
                    <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill"
                          href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home"
                          aria-selected="true">General</a>
                      </li>

                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="tab-content" id="custom-tabs-three-tabContent">
                      <div class="tab-pane fade active show" id="custom-tabs-three-home" role="tabpanel"
                        aria-labelledby="custom-tabs-three-home-tab">
                        <!-- General  -->
                        <div class="row mb-3 required">
                          <label for="input-name-1" class="col-sm-2 col-form-label required-label">Title</label>
                          <div class="col-sm-10">
                            <input type="text" name="name" placeholder="Name" v-model="insertdata.name"
                              class="form-control" />
                            <input type="hidden" name="id" id="id" class="form-control" />
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                          </div>
                        </div>

                        <div class="row mb-3 d-none">
                          <label for="input-description-1" class="col-sm-2 col-form-label">Short. Description</label>
                          <div class="col-sm-10">
                            <div ref="summernoteEditorShort" style="height: 100%;"></div>
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label for="input-meta-description-1" class="col-sm-2 col-form-label required-label">Post
                            Categories</label>
                          <div class="col-sm-10">
                            <div>
                              <select id="category" class="form-control" v-model="insertdata.categoryId">
                                <option value="">Select</option>
                                <option value="1">Privacy & Policy</option>
                                <option value="2">Terms of Service</option>
                                <option value="3">About Isumax</option>
                                <option value="4">Trust & Safety</option>
                                <option value="5">Selling on isumax</option>
                                <option value="6">Trust & Safety</option>
                                <option value="7">Buying on isumax</option>
                                <option value="8">Help & Support</option>
                                <option value="9">Affiliate</option>

                              </select>

                              <span class="text-danger" v-if="errors.categoryId">{{ errors.categoryId[0] }}</span>

                            </div>
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label for="input-description-1" class="col-sm-2 col-form-label">Description</label>
                          <div class="col-sm-10">
                            <div ref="summernoteEditorFull" style="height: 100%;"></div>
                          </div>
                        </div>
                        <hr />

                        <div v-if="insertdata.categoryId === 3">
                          <div class="row mb-3 required">
                            <label for="input-meta-title-1" class="col-sm-4 col-form-label">Question</label>
                            <div class="col-sm-8">
                              <input type="text" placeholder="" v-model="insertdata.question" class="form-control" />
                            </div>
                          </div>
                          <div class="row mb-3 required">
                            <label for="input-meta-title-1" class="col-sm-4 col-form-label">Answer</label>
                            <div class="col-sm-8">
                              <input type="text" placeholder="" v-model="insertdata.answer" class="form-control" />

                            </div>

                          </div>
                        </div>
                        <hr />

                        <!-- <div class="alert alert-info" bis_skin_checked="1">
                          <i class="fas fa-info-circle"></i>Thumbnail
                        </div>
                        <div class="row mb-3">
                          <label for="input-meta-description-1" class="col-sm-2 col-form-label">Thumbnail
                            Image</label>
                          <div class="col-sm-10">
                            <input type="file" value class="form-control" id="fileInput" accept="image/png,image/jpeg"
                              ref="files" @change="onFileSelected" />
                            <span class="text-danger" v-if="errors.files">{{
                              errors.files[0]
                              }}</span>
                            <img v-if="previewUrl" :src="previewUrl" alt="Preview" class="img-fluids" />
                          </div>
                        </div> -->
                        <div class="row mb-3 d-none">
                          <label for="input-meta-description-1" class="col-sm-2 col-form-label">Additional Image</label>
                          <div class="col-sm-10">
                            <input type="file" multiple class="form-control" accept="image/png,image/jpeg"
                              @change="handleImageUpload" id="fileInput" />
                            <div class="row mt-3">
                              <div class="col-md-3" v-for="(image, index) in images" :key="index">
                                <div class="card">
                                  <img :src="image.url" class="card-img-top img-fluid" alt="Preview" />
                                  <div class="card-body">
                                    <button type="button" class="btn btn-danger btn-sm" @click="removeImage(index)">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-success px-5 w-100">
                          <i class="bx bx-check-circle mr-1"></i> Save
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- END -->
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import swal from 'sweetalert2';
import 'summernote/dist/summernote-bs4.js';
import 'summernote/dist/summernote-bs4.css';
const router = useRouter()
window.Swal = swal;
const insertdata = reactive({
  name: '',
  categoryId: '',
  question: '',
  answer: '',
  images: '',
  status: 1,
});
// Define a ref to store the HTML content of the editor
const categoryId = ref(null);
const descriptionShort = ref('');
const descriptionFull = ref('');
const previewUrl = ref(null);
const images = ref([]);
const postCat = ref([]);

const file = ref(null);
const files = ref(null);
const errors = ref({});
const summernoteEditorShort = ref({});
const summernoteEditorFull = ref({});

// Initialize Summernote editor

definePageMeta({
  middleware: 'is-logged-out',
})

onMounted(() => {
  allPostCategory();
  $(summernoteEditorShort.value).summernote({
    callbacks: {
      onChange: (contents) => {
        descriptionShort.value = contents;
      }
    }
  });

  $(summernoteEditorFull.value).summernote({
    callbacks: {
      onChange: (contents) => {
        descriptionFull.value = contents;
      }
    }
  });
});

// Define your methods
const allPostCategory = async () => {
  try {
    const response = await axios.get(`/category/postCategorysearch`);
    // console.log(response.data);
    postCat.value = response.data;

  } catch (error) {
    console.error(error);
  }
};


const checkImageDimensions = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      if (img.width === 300 && img.height === 300) {
        const url = e.target.result;

        // Ensure images.value is initialized as an array
        images.value = Array.isArray(images.value) ? images.value : [];

        images.value.push({
          url,
          file
        });
      } else {
        alert('Image dimensions must be 300x300 pixels.');
        // Reset file input
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
          fileInput.value = '';
        }
      }
    };
  };
  reader.readAsDataURL(file);
};

const removeImage = (index) => {
  images.value.splice(index, 1);
};

const checkImageDimensionsThunbnail = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      // if (img.width === 300 && img.height === 300) {
      previewUrl.value = e.target.result;
      //  } else {
      //    alert('Image dimensions must be 300x300 pixels.');
      // }
    };
  };
  reader.readAsDataURL(file);
  //resetInput();
};


const previewImage = (event) => {
  const file = event.target.files[0];
  previewUrl.value = URL.createObjectURL(file);
  checkImageDimensionsThunbnail(file);
};

const onFileSelected = (event) => {
  previewImage(event)
  file.value = event.target.files[0];
};

const handleImageUpload = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    //readImage(file);
    checkImageDimensions(file);
  }
};

const saveData = () => {
  const formData = new FormData();
  images.value.forEach((image, index) => {
    formData.append('images[]', image.file);
  });

  formData.append('files', file.value);
  formData.append('name', insertdata.name);
  formData.append('categoryId', insertdata.categoryId);
  formData.append('description_short', descriptionShort.value);
  formData.append('description_full', descriptionFull.value);
  formData.append('question', insertdata.question);
  formData.append('answer', insertdata.answer);
  console.log(formData);

  axios.post('/post/save', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    $('#formrest')[0].reset();
    success_noti();
    const product_id = res.data.product_id;
    // Redirect to product variant page
    router.push({
      path: '/post/list',
    });

  }).catch(error => {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      // Handle other types of errors here
      console.error("An error occurred:", error);
    }
  });
};

const success_noti = () => {
  //alert("Your data has been successfully inserted.");
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
    title: "Your data has been successfully inserted."
  });
};

</script>

<style scoped>
.required-label::after {
  content: "\2605";
  color: red;
  margin-right: 4px;
}

/* CSS */
ol,
ul {
  padding-left: 0rem;
}

ul {
  list-style: none;
}

.bgColor {
  background-color: #c8c8c8;
  padding: 1px;
  border-radius: 2px;
}

.img-fluid {
  width: 300px;
  height: 150px;
}

.img-fluids {
  margin-top: 10px;
  width: 300px;
  height: 300px;
}

/* for checkbox */
.multiselect {
  position: relative;
  font-family: Arial, sans-serif;
  width: 100%;
}

.select-box {
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
}

.dropdown {
  border: 1px solid #ccc;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}

label {
  display: block;
  padding: 5px;
}

input[type="checkbox"] {
  margin-right: 8px;
}

.widthtxtbox {
  width: 50px;
}
</style>
