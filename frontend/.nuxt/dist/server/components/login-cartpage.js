exports.ids = [27];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loginCartpage.vue?vue&type=template&id=1bcda341&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"login_popup login_popup_two\">", "</div>", [_vm._ssrNode("<div class=\"popup_box_modal\">", "</div>", [_vm._ssrNode("<div><div class=\"row\"><div class=\"col-6 ms-auto text-end\"><button class=\"btn_edit close_login\"><i class=\"fa-solid fa-x\"></i></button></div></div></div> <div class=\"popup_title\"><h1>Login</h1> <p>Login and get access to all the features</p></div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('center', [_c('span', {
    staticClass: "show_error text-danger"
  })]), _vm._ssrNode(" "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample d-block\">", "</form>", [_vm._ssrNode("<div class=\"input_group\">" + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.login.email) + "> <i class=\"fa-solid fa-user\"></i></div> <div class=\"input_group mb-1\">" + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.login.password) + "> <i class=\"toggle-password fa-solid fa-eye\"></i></div> "), _vm._ssrNode("<div class=\"d-flex justify-content-end align-items-center mb-2\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center d-none\"><input type=\"checkbox\" id=\"remeber\"><label for=\"remeber\">Remember me</label></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 2), _vm._ssrNode(" <div><button type=\"submit\" class=\"btn_logins\">Login</button></div> "), _vm._ssrNode("<div class=\"d-flex\">", "</div>", [_vm._ssrNode("<p class=\"text-center w-100 mt-2\" style=\"font-size: 12px !important;\">", "</p>", [_vm._ssrNode("Don't have\n                                Account? "), _c('nuxt-link', {
    staticClass: "btn_signup",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("SignUp")])], 2)])], 2)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/loginCartpage.vue?vue&type=template&id=1bcda341&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loginCartpage.vue?vue&type=script&lang=js&

/* harmony default export */ var loginCartpagevue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      login: {
        email: '',
        password: ''
      },
      notifmsg: '',
      errors: {}
      // loggedIn: false,
    };
  },

  mounted() {},
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    closePopup() {
      external_jquery_default()(".login_popup_login_popup_two").fadeOut();
    },
    gotoCheckOut() {
      this.$router.push('/checkout');
    },
    async customerLogin() {
      try {
        external_jquery_default()(".show_error").html("");
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
        } = await this.$axios.post('/auth/login', postData);
        await this.$auth.setUserToken(data.access_token);
        this.$router.push('/checkout');
        //this.loginForm.reset();
      } catch (err) {
        // console.log(err)
        // console.error('Login error:', err);
        if (err.response && err.response.status === 401) {
          external_jquery_default()(".show_error").html("Invalid credentials. Please try again.");
        } else {
          external_jquery_default()(".show_error").html('An error occurred. Please try again later.');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/loginCartpage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loginCartpagevue_type_script_lang_js_ = (loginCartpagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/loginCartpage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_loginCartpagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16bb8eb2"
  
)

/* harmony default export */ var loginCartpage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login-cartpage.js.map