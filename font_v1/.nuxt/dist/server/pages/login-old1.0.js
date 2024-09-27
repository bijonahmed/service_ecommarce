exports.ids = [80];
exports.modules = {

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login-old1.0.vue?vue&type=template&id=fa16c5c2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<span style=\"background-image: url('/images/login_bg.jpg');\\nbackground-position: center;\\nbackground-repeat: no-repeat;\\nbackground-size: cover;\\nmin-height: 100vh;\\noverflow: hidden;\">", "</span>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row d-flex align-item-center\" style=\"height: 100vh;\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-4 col-md-6 m-auto in_row\">", "</div>", [_vm._ssrNode("<div class=\"login_section\">", "</div>", [_vm._ssrNode("<div class=\"sign_sec\"><div><h1>Sign Up</h1> <p>SignUp to register a new Account.</p></div> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"input\" style=\"--i:0;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Name</label> <i class=\"fa-solid fa-user\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + " <div class=\"group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"input\" style=\"--i:0;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email Address</label> <i class=\"fa-solid fa-envelope\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.invite_code) + " class=\"input\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Invite Code</label> <i class=\"fa-solid fa-link\"></i></div> <span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.invidecodeError)) + "</span> <div class=\"group\"><input type=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password) + " class=\"input\" style=\"--i:1;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <div class=\"group\"><input type=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password_confirmation) + " class=\"input\" style=\"--i:1;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Retype Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <br> <button type=\"submit\" class=\"btn_login submit mt-2\" style=\"opacity: .8;\">Sign Up\n                                  </button></form> <div class=\"social_login\"><div><h6>Allready have Account?<button type=\"button\" class=\"signIn\">LogIn</button></h6></div></div></div> "), _vm._ssrNode("<div class=\"log_sec\">", "</div>", [_vm._ssrNode("<h2>Welcome back</h2> <p> Sign in to continue your Account</p> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.login.email) + " class=\"input\" style=\"--i:0;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email</label> <i class=\"fa-solid fa-user\"></i></div> " + (_vm.errors.email ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <div class=\"group\"><input type=\"password\"" + _vm._ssrAttr("value", _vm.login.password) + " class=\"input\" style=\"--i:1;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> " + (_vm.errors.password ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <button type=\"submit\" class=\"btn_login\">Login</button></form> "), _vm._ssrNode("<div class=\"text-end\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 1), _vm._ssrNode(" <div class=\"social_login\"><span class=\"signup_link\">Don't Have Account?<button class=\"sign_up\">SignUp</button></span></div>")], 2)], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login-old1.0.vue?vue&type=template&id=fa16c5c2&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login-old1.0.vue?vue&type=script&lang=js&

/* harmony default export */ var login_old1_0vue_type_script_lang_js_ = ({
  head: {
    title: 'Login'
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
      external_jquery_default()(".toggle-password").click(function () {
        external_jquery_default()(this).toggleClass("fa-eye-slash fa-eye");
        let input = external_jquery_default()(this).parent().find("input"); // Declare the 'input' variable with 'let'
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
      this.$nextTick(() => {
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
// CONCATENATED MODULE: ./pages/login-old1.0.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_login_old1_0vue_type_script_lang_js_ = (login_old1_0vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login-old1.0.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_login_old1_0vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ec1290c6"
  
)

/* harmony default export */ var login_old1_0 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login-old1.0.js.map