exports.ids = [22];
exports.modules = {

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/profile.vue?vue&type=template&id=6335512a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card"
  }, [_vm._ssrNode("<div class=\"card-header\">\n        My Profile\n    </div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form action>", "</form>", [_vm._ssrNode("<div class=\"form-group mb-3\">", "</div>", [_vm._ssrNode("<label for>Your name </label> <input type=\"text\" name=\"name\" placeholder=\"Enter name\"" + _vm._ssrAttr("value", _vm.userForm.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.userForm.errors.has('name')
  }) + "> "), _c('has-error', {
    attrs: {
      "form": _vm.userForm,
      "field": "name"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group mb-3\">", "</div>", [_vm._ssrNode("<label for>Your email </label> <input type=\"text\" name=\"email\" placeholder=\"Enter email\"" + _vm._ssrAttr("value", _vm.userForm.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.userForm.errors.has('email')
  }) + "> "), _c('has-error', {
    attrs: {
      "form": _vm.userForm,
      "field": "email"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group mb-3\">", "</div>", [_vm._ssrNode("<label for>Your Password</label> <input type=\"password\" name=\"password\" placeholder=\"Enter password\"" + _vm._ssrAttr("value", _vm.userForm.password) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.userForm.errors.has('password')
  }) + "> "), _c('has-error', {
    attrs: {
      "form": _vm.userForm,
      "field": "password"
    }
  })], 2), _vm._ssrNode(" <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.userForm.busy) + " class=\"btn btn-success\">\n                Update profile\n            </button>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard/profile.vue?vue&type=template&id=6335512a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/profile.vue?vue&type=script&lang=js
/* harmony default export */ var profilevue_type_script_lang_js = ({
  data() {
    return {
      userForm: this.$vform({
        name: '',
        email: '',
        password: ''
      })
    };
  },
  methods: {
    async updateProfile() {
      try {
        let {
          data
        } = await this.userForm.post('/auth/profile');
        this.userForm.password = '';
        await this.$auth.fetchUser();
        this.$toast.success({
          title: 'Success!',
          message: 'Profile updated successfully'
        });
      } catch (err) {
        console.log(err);
      }
    },
    getUser() {
      let user = this.$store.state.auth.user;
      this.userForm.name = user.name;
      this.userForm.email = user.email;
    }
  },
  mounted() {
    this.getUser();
  }
});
// CONCATENATED MODULE: ./pages/dashboard/profile.vue?vue&type=script&lang=js
 /* harmony default export */ var dashboard_profilevue_type_script_lang_js = (profilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/dashboard/profile.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_profilevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2b8b3e33"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile.js.map