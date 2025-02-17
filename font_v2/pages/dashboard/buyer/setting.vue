<template>
  <title>Change Password</title>

  <body class="bgc-thm1">
    <div class="wrapper ovh">
      <Header />
      <MobileMenu />
      <div class="body_content">

        
        <!-- Breadcumb Sections -->



        <section class="breadcumb-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-lg-10">
                <div class="breadcumb-style1 mb10-xs">
                  <div class="breadcumb-list">
                    <nuxt-link to="/dashboard/buyer/welcome">Dashboard</nuxt-link>
                    <a href="#">Setting</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-2">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <nuxt-link to="/dashboard/buyer/welcome">Back</nuxt-link>

                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container">
          <center>
            <div class="loading-indicator" v-if="loading" style="text-align: center;">
              <ProgressbarLoader />
            </div>
          </center>
        </div>
        <!-- Start Profile -->
        <div class="container">
          <div class="card border-top border-0 border-4 border-info">
            <div class="card-body">


              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="change-password-tab" data-bs-toggle="tab" href="#change-password"
                    role="tab" aria-controls="change-password" aria-selected="false">Change Password</a>
                </li>
              </ul>

              <!-- Tab content -->
              <div class="tab-content" id="myTabContent">

                <div class="tab-pane fade active show" id="change-password" role="tabpanel"
                  aria-labelledby="change-password-tab">
                  <div class="border p-4 rounded">
                    <center>
                      <div v-for="(errorArray, idx) in notifmsg" :key="idx">
                        <div v-for="(allErrors, idx) in errorArray" :key="idx">
                          <span class="text-danger">{{ allErrors }} </span>
                        </div>
                      </div>
                    </center>
                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                      <div class="row mb-3">
                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-9">

                          <input type="password" class="form-control password" v-model="insertdata.password"
                            id="password" placeholder="Password">
                          <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Confirm
                          Password</label>
                        <div class="col-sm-9">
                          <input type="password" class="form-control password_confirmation"
                            v-model="insertdata.password_confirmation" id="password_confirmation"
                            placeholder="Confirm Password">
                          <span class="text-danger" v-if="errors.password_confirmation">{{
                            errors.password_confirmation[0] }}</span>
                        </div>
                      </div>

                      <div class="row">
                        <label class="col-sm-3 col-form-label"></label>
                        <div class="col-sm-9">
                          <button type="submit" class="btn btn-success px-5 w-100 text-white"><i
                              class="bx bx-check-circle mr-1 text-white"></i>
                            Submit</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Modal Template -->

      </div>
    </div>

    <Footer />
  </body>
</template>



<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
const router = useRouter();

if (process.client) {
  window.Swal = Swal;

}

definePageMeta({
  middleware: 'is-logged-out',

})
const file = ref(null);
const insertdata = reactive({
  password: '',
  password_confirmation: '',
});

const insertdatawithdrwal = reactive({
  name: '',
  account_number: '',
});
const withDrawaldata = ref([]);
const categoryData = ref([]);
const previewUrl = ref(null);
const errors = ref({});
const allrole = ref({});
const notifmsg = ref('');
const loading = ref(false)
//Find Product Row


const submitWithdrawalAdd = () => {

  const formData = new FormData();
  formData.append('name', insertdatawithdrwal.name);
  formData.append('account_number', insertdatawithdrwal.account_number);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/user/addWalletAddress', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();

      Swal.fire({
        title: 'Added you wallet address!',
        text: 'Thank you.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      router.push('/dashboard/buyer/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });


}

const saveData = () => {
  const formData = new FormData();
  formData.append('id', insertdata.id);
  formData.append('password', insertdata.password);
  formData.append('password_confirmation', insertdata.password_confirmation)

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  axios.post('/user/changePassword', formData, { headers })
    .then((res) => {
      document.getElementById('formrest').reset();
      success_noti();
      router.push('/dashboard/buyer/welcome');
    }).catch(error => {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', error);
      }
    });
};

const success_noti = () => {
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
    title: "Your password has been successfully update."
  });
};


</script>

<style scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
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