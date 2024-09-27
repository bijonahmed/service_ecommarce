exports.ids = [116];
exports.modules = {

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=template&id=5545e361&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"row\"><div class=\"col-md-8 me-auto\"><div class=\"login_option_box\"><div class=\"logTitle\"><h2>Sign Up</h2> <p>SignUp to register a new Account.</p></div> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"form-group\"><label>Name</label> <div class=\"input_group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"input\" style=\"--i:0;\"> <i class=\"fa-solid fa-user\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group\"><label>Name</label> <div class=\"input_group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"input\" style=\"--i:0;\"> <i class=\"fa-solid fa-envelope\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group\"><label>Invite Code</label> <div class=\"input_group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.invite_code) + " class=\"input\"> <i class=\"fa-solid fa-link\"></i></div> <span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.invidecodeError)) + "</span></div> <div class=\"form-group\"><label>Password</label> <div class=\"input_group\"><input id=\"pass\" type=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password) + " class=\"input\" style=\"--i:1;\"> <i toggole=\"#pass\" class=\"fa-regular fa-eye-slash toggle-password\" style=\"cursor: pointer;\"></i></div></div> <div class=\"form-group\"><label>Retype Password</label> <div class=\"input_group\"><input id=\"repass\" type=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password_confirmation) + " class=\"input\" style=\"--i:1;\"> <i toggole=\"#repass\" class=\"fa-regular fa-eye-slash toggle-password\" style=\"cursor: pointer;\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + "</div> <br> <button type=\"submit\" class=\"btn_login submit mt-2\" style=\"opacity: .8;\">Sign Up\n                                </button> <div class=\"social_login\"><div><h6 class=\"text-center\">Allready have Account?<button type=\"button\" class=\"signIn\">LogIn</button></h6></div></div></form></div></div></div></div> <div class=\"col-md-6\"><div class=\"loginpageImage\"><img src=\"/images/loginseller.png\" alt class=\"img-fluid\"></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/signup.vue?vue&type=template&id=5545e361&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=script&lang=js&

/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  head: {
    title: 'Create a new account'
  },
  data() {
    return {
      insertdata: {
        name: '',
        email: '',
        password: '',
        invite_code: '',
        password_confirmation: ''
      },
      login: {
        email: '',
        password: ''
      },
      notifmsg: '',
      invidecodeError: '',
      errors: {}
    };
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    defaultLoading() {
      this.$nextTick(() => {
        external_jquery_default()(".toggle-password").click(function () {
          console.log("working");
          external_jquery_default()(this).toggleClass("fa-eye-slash fa-eye");
          let input = external_jquery_default()(this).parent().find("input"); // Declare the 'input' variable with 'let'
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
        external_jquery_default()(".signIn").on("click", function () {
          external_jquery_default()(".log_sec").css({
            transform: "translateX(-100%)",
            "transition-duration": "1s",
            opacity: "1",
            filter: "blur(0px)"
          });
          external_jquery_default()(".log_sec").addClass("inactive");
          external_jquery_default()(".sign_sec").css({
            transform: "translateX(-100%)",
            "transition-duration": "1s",
            opacity: "0",
            filter: "none"
          });
          external_jquery_default()(".sign_sec").removeClass("inactive");
          external_jquery_default()(".sign_sec").addClass("active");
        });
        external_jquery_default()(".sign_up").on("click", function () {
          external_jquery_default()(".log_sec").css({
            transform: "translateX(0%)",
            "transition-duration": "1s",
            opacity: "0",
            filter: "blur(3px)"
          });
          external_jquery_default()(".log_sec").removeClass("inactive");
          external_jquery_default()(".log_sec").addClass("active");
          external_jquery_default()(".sign_sec").css({
            transform: "translateX(0%)",
            "transition-duration": "1s",
            opacity: "1"
          });
          external_jquery_default()(".sign_sec").addClass("inactive");
        });
      });
    },
    saveData() {
      const formData = new FormData();
      formData.append('name', this.insertdata.name);
      formData.append('email', this.insertdata.email);
      formData.append('password', this.insertdata.password);
      formData.append('invite_code', this.insertdata.invite_code);
      formData.append('password_confirmation', this.insertdata.password_confirmation);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/register', formData, {
        headers
      }).then(response => {
        const token = response.data.access_token;
        this.$auth.setUserToken(token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        this.$router.push('/');
        /*
        if (process.client) {
            this.$router.push({
                path: '/user/user-profile'
            });
         }
        */
      }).catch(error => {
        this.invidecodeError = error.response.data.error;
        console.log("code error: " + error.response.data.error);
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    //customerLogin
    async customerLogin() {
      try {
        const postData = {
          email: this.login.email,
          password: this.login.password
          // Add other parameters as needed
        };
        //console.log("==========login email:" +  this.login.email);
        //console.log("==========login password:" +  this.login.password);
        //return false; 
        let {
          data
        } = await this.$axios.post('/auth/login', postData); //await this.login.post('/auth/login');
        await this.$auth.setUserToken(data.access_token);
        if (data.role_id === 3) {
          return this.$router.push('/seller/seller-dashboard');
        } else if (data.role_id === 2) {
          return this.$router.push('/user/user-profile');
        } else {
          console.warn('Unsupported role_id:', data.role_id);
        }
      } catch (err) {
        console.log(err);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: "Creadentials dosen't match"
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/signup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89139936"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signup.js.map