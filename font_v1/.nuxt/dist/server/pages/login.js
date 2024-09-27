exports.ids = [79];
exports.modules = {

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=2c11201b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((_vm.currentView === 'signup' ? "<div><div class=\"row\"><div class=\"col-md-6\"><div class=\"row\"><div class=\"col-md-8 ms-auto\"><div class=\"login_option_box\"><div class=\"logTitle\"><h2>Sign Up</h2> <p>SignUp to register a new Account.</p></div> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"form-group\"><label>Name</label> <div class=\"input_group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"input\" style=\"--i:0;\"> <i class=\"fa-solid fa-user\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group\"><label>Email </label> <div class=\"input_group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"input\" style=\"--i:0;\"> <i class=\"fa-solid fa-envelope\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group\"><label>Invite Code</label> <div class=\"input_group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.invite_code) + " class=\"input\"> <i class=\"fa-solid fa-link\"></i></div> <span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.invidecodeError)) + "</span></div> <div class=\"form-group\"><label>Password</label> <div class=\"input_group\">" + (_vm.inputType === 'checkbox' ? "<input id=\"pass\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.password) ? _vm._i(_vm.insertdata.password, null) > -1 : _vm.insertdata.password) + " class=\"input\" style=\"--i:1;\">" : _vm.inputType === 'radio' ? "<input id=\"pass\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.insertdata.password, null)) + " class=\"input\" style=\"--i:1;\">" : "<input id=\"pass\"" + _vm._ssrAttr("type", _vm.inputType) + _vm._ssrAttr("value", _vm.insertdata.password) + " class=\"input\" style=\"--i:1;\">") + " <i" + _vm._ssrClass("toggle-password fa-regular fa-eye-slash", _vm.iconClass) + " style=\"cursor: pointer;\"></i></div></div> <div class=\"form-group\"><label>Retype Password</label> <div class=\"input_group\">" + (_vm.inputType2 === 'checkbox' ? "<input id=\"repass\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.password_confirmation) ? _vm._i(_vm.insertdata.password_confirmation, null) > -1 : _vm.insertdata.password_confirmation) + " class=\"input\" style=\"--i:1;\">" : _vm.inputType2 === 'radio' ? "<input id=\"repass\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.insertdata.password_confirmation, null)) + " class=\"input\" style=\"--i:1;\">" : "<input id=\"repass\"" + _vm._ssrAttr("type", _vm.inputType2) + _vm._ssrAttr("value", _vm.insertdata.password_confirmation) + " class=\"input\" style=\"--i:1;\">") + " <i" + _vm._ssrClass("toggle-password fa-regular fa-eye-slash", _vm.iconClass2) + " style=\"cursor: pointer;\"></i></div> " + (_vm.errors.name ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + "</div> <br> <button type=\"submit\" class=\"btn_login submit mt-2\" style=\"opacity: .8;\">Sign\n                                        Up\n                                    </button> <div class=\"social_login\"><div><h6 class=\"text-center\">Allready have Account?<a type=\"button\" class=\"signIn\" style=\"cursor: pointer;\">Login</a></h6></div></div></form></div></div></div></div> <div class=\"col-md-6\"><div class=\"loginpageImage\"><img src=\"/images/loginseller.png\" alt class=\"img-fluid\"></div></div></div></div>" : "<!---->") + " "), _vm.currentView === 'login' ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6\"><div class=\"loginpageImage\"><img src=\"/images/login_page_image.png\" alt class=\"img-fluid\"></div></div> "), _vm._ssrNode("<div class=\"col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8 me-auto\">", "</div>", [_vm._ssrNode("<div class=\"login_option_box\">", "</div>", [_vm._ssrNode("<div class=\"logTitle\"><h2>Welcome back</h2> <p> Login to your Account</p></div> "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"form-group\"><label>Email</label> <div class=\"input_group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.login.email) + " class=\"input\" style=\"--i:0;\"> <i class=\"fa-solid fa-user\"></i></div> " + (_vm.errors.email ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group\"><label>Password</label> <div class=\"input_group\">" + (_vm.inputType === 'checkbox' ? "<input id=\"pass\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.login.password) ? _vm._i(_vm.login.password, null) > -1 : _vm.login.password) + " class=\"input password-input\" style=\"--i:1;\">" : _vm.inputType === 'radio' ? "<input id=\"pass\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.login.password, null)) + " class=\"input password-input\" style=\"--i:1;\">" : "<input id=\"pass\"" + _vm._ssrAttr("type", _vm.inputType) + _vm._ssrAttr("value", _vm.login.password) + " class=\"input password-input\" style=\"--i:1;\">") + " <i" + _vm._ssrClass("toggle-password fa-regular fa-eye-slash", _vm.iconClass) + " style=\"cursor: pointer;\"></i></div> " + (_vm.errors.password ? "<span class=\"text-danger d-flex\" style=\"font-size: 12px;\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"text-end\">", "</div>", [_c('nuxt-link', {
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget\n                                            Password")])], 1), _vm._ssrNode(" <button type=\"submit\" class=\"btn_login\">Login</button> <div class=\"social_login\"><span class=\"signup_link d-flex justify-content-center\">Don't Have\n                                            Account?<a type=\"button\" class=\"sign_up\" style=\"cursor: pointer;\">SignUp</a></span></div>")], 2)], 2)])])])], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=2c11201b&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  head: {
    title: 'Login'
  },
  data() {
    return {
      inputType: 'password',
      inputType2: 'password',
      showPassword: false,
      showPassword2: false,
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
      errors: {},
      currentView: 'login'
    };
  },
  computed: {
    iconClass() {
      return this.showPassword ? 'fa-eye' : 'fa-eye-slash';
    },
    iconClass2() {
      return this.showPassword2 ? 'fa-eye' : 'fa-eye-slash';
    }
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    showLogin() {
      this.currentView = 'login';
    },
    showSignUp() {
      this.currentView = 'signup';
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.inputType = this.showPassword ? 'text' : 'password';
    },
    togglePasswordVisibility2() {
      this.showPassword2 = !this.showPassword2;
      this.inputType2 = this.showPassword2 ? 'text' : 'password';
    },
    defaultLoading() {
      const fullUrl = this.$route.fullPath;
      console.log(fullUrl);
      if (fullUrl == '/login') {
        this.currentView = 'login';
      } else if (fullUrl == '/login/signup') {
        this.currentView = 'login';
      }
      this.$nextTick(() => {
        external_jquery_default()(".toggle-password").click(function () {
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
        console.log("code error: " + error.response.data.errors);
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
          // Convert errors object to string
          const errorString = Object.values(this.errors).join(', ');
          // Display error string in Toast notification
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
            title: errorString
          });
        }
      });
    },
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
        // await this.$auth.setUserToken(data.access_token);

        if (data.role_id === 3) {
          throw new Error("Sellers cannot log in from here."); // Throw an error
          // seller/seller-dashboard
        } else {
          // Proceed with login for other roles
          await this.$auth.setUserToken(data.access_token);
          if (data.role_id === 2) {
            return this.$router.push('/user/user-dashborad');
          } else {
            console.warn('Unsupported role_id:', data.role_id);
          }
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
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bd79f2c"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map