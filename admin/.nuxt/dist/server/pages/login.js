exports.ids = [75];
exports.modules = {

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=d457c566
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('body', {
    staticClass: "bg-login"
  }, [_vm._ssrNode("<div class=\"wrapper\"><div class=\"section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0\"><div class=\"container-fluid\"><div class=\"row row-cols-1 row-cols-lg-2 row-cols-xl-3\"><div class=\"col mx-auto\"><div class=\"text-center\"><img src=\"/images/futuregenit-logo.png\" width=\"180\" alt></div> <div class=\"card\"><div class=\"card-body\"><div class=\"border rounded\"><div class=\"form-body\">" + (_vm.loginForm.errors.errors.account ? "<div class=\"alert alert-danger\">" + _vm._ssrEscape("\r\n                                            " + _vm._s(_vm.loginForm.errors.errors.account[0]) + "\r\n                                        ") + "</div>" : "<!---->") + " <form class=\"row g-3\"><div class=\"col-12\"><label for=\"inputEmailAddress\" class=\"form-label\">Email Address</label> <input type=\"text\" name=\"email\" placeholder=\"Enter email\"" + _vm._ssrAttr("value", _vm.loginForm.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.loginForm.errors.has('email')
  }) + "></div> <div class=\"col-12\"><label for=\"inputChoosePassword\" class=\"form-label\">Enter Password</label> <div id=\"show_hide_password\" class=\"input-group\"><input type=\"password\" name=\"passwrd\" placeholder=\"Enter password\"" + _vm._ssrAttr("value", _vm.loginForm.password) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.loginForm.errors.has('password')
  }) + "></div></div> <div class=\"col-md-6 d-none\"><div class=\"form-check form-switch\"><input type=\"checkbox\" id=\"flexSwitchCheckChecked\" checked=\"checked\" class=\"form-check-input\"> <label for=\"flexSwitchCheckChecked\" class=\"form-check-label\">Remember Me</label></div></div> <div class=\"col-md-6 text-end d-none\"><a href=\"authentication-forgot-password.html\">Forgot Password ?</a></div> <div class=\"col-12\"><div class=\"d-grid\"><button" + _vm._ssrAttr("disabled", _vm.loginForm.busy) + " type=\"submit\" class=\"btn btn-success\"><i class=\"bx bxs-lock-open\"></i>Sign in</button></div></div></form></div></div></div></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=d457c566

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js
/* harmony default export */ var loginvue_type_script_lang_js = ({
  auth: 'guest',
  data() {
    return {
      loginForm: this.$vform({
        email: '',
        password: ''
      })
    };
  },
  methods: {
    async userLogin() {
      try {
        let {
          data
        } = await this.loginForm.post('/auth/login');
        await this.$auth.setUserToken(data.access_token);
        // this.$toast.success({
        //     title: 'Success!',
        //     message: 'Welcome to our app',
        // })

        this.loginForm.reset();
      } catch (err) {
        console.log(err);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51ba1f8a"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map