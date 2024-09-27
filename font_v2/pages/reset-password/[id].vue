<template>
    <title>Reset Password</title>
    <!-- MAGIC CURSOR -->
    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>
    <!-- /MAGIC CURSOR -->

    <section class="sign-in">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="sign-in__top center">
                        <a href="index.html">
                            <img id="site-logo" src="/assets/images/logo/logo-main.png" alt="Monteno" width="165"
                                height="40" data-retina="assets/images/logo/logo-main@x2.png" data-width="165"
                                data-height="40">
                        </a>
                    </div>
                    <div class="sign-in__main">
                        <div class="top center">
                            <h3 class="title">Reset password</h3>
                        </div>

                        <form @submit.prevent="changesPassword()" id="formrest">
                          {{ insertdata.chkToekn }}
                            <div class="form-group">
                                <label for="exampleInputPassword1">New Password<span>*</span></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="insertdata.password">
                                <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Retype Password<span>*</span></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="insertdata.password_confirmation">
                                <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                            </div>

                            <button type="submit" class="btn-action style-1"><span>Update</span> </button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, watch, onMounted } from "vue";
 import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from 'vue-router';
const route = useRoute();
const errors = ref({});

const insertdata = reactive({
  chkToekn: "",
  password: "",
  password_confirmation: "",
});


const changesPassword = () => {
  const formData = new FormData();
  formData.append("token", insertdata.chkToekn);
  formData.append("password", insertdata.password);
  formData.append("password_confirmation", insertdata.password_confirmation);

  const headers = {
    "Content-Type": "multipart/form-data",
  };
  axios
    .post("/auth/password/reset", formData, { headers }).then((res) => {
      document.getElementById("formrest").reset();
      router.push("/sign-in");
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

 
let queryParams = {};
if (process.client) {
  const token = route.params.id || '';
  console.log("----" + token);
  insertdata.chkToekn = token;
}
</script>


<style></style>