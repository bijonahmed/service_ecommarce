exports.ids = [91];
exports.modules = {

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=c0067c54
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row justify-content-center mt-5"
  }, [_vm._ssrNode("<div class=\"col-6\">", "</div>", [_vm._ssrNode("<div class=\"card\">", "</div>", [_vm._ssrNode("<div class=\"card-header\">\n                Create an account\n            </div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group mb-3\">", "</div>", [_vm._ssrNode("<label for>Your name </label> <input type=\"text\" name=\"name\" placeholder=\"Enter email\"" + _vm._ssrAttr("value", _vm.registerForm.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.registerForm.errors.has('name')
  }) + "> "), _c('has-error', {
    attrs: {
      "form": _vm.registerForm,
      "field": "name"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group mb-3\">", "</div>", [_vm._ssrNode("<label for>Your email </label> <input type=\"text\" name=\"email\" placeholder=\"Enter email\"" + _vm._ssrAttr("value", _vm.registerForm.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.registerForm.errors.has('email')
  }) + "> "), _c('has-error', {
    attrs: {
      "form": _vm.registerForm,
      "field": "email"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group mb-3\">", "</div>", [_vm._ssrNode("<label for>Your Password</label> <input type=\"password\" name=\"password\" placeholder=\"Enter password\"" + _vm._ssrAttr("value", _vm.registerForm.password) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.registerForm.errors.has('password')
  }) + "> "), _c('has-error', {
    attrs: {
      "form": _vm.registerForm,
      "field": "password"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group d-flex justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<button type=\"submit\" class=\"btn btn-success\">Create an account</button> "), _c('nuxt-link', {
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("Account Login")])], 2)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=c0067c54

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js
/* harmony default export */ var registervue_type_script_lang_js = ({
  auth: 'guest',
  data() {
    return {
      registerForm: this.$vform({
        name: '',
        email: '',
        password: ''
      })
    };
  },
  methods: {
    async registerUser() {
      try {
        let data = await this.registerForm.post('/auth/register');
        await this.$auth.setUserToken(data.access_token);
        this.$toast.success({
          title: 'Success!',
          message: 'Registration Successful'
        });
        this.registerForm.reset();
      } catch (err) {
        console.log(err);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_registervue_type_script_lang_js = (registervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6922fac1"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map