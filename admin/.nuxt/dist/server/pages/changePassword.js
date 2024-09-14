exports.ids = [12];
exports.modules = {

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/changePassword.vue?vue&type=template&id=385afaed
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\">", "</div>", [_vm._ssrNode("<div class=\"ps-3\">", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\">", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\">", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\">", "</li>", [_c('router-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li aria-current=\"page\" class=\"breadcrumb-item\">", "</li>", [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Change Password")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Password </li>")], 2)])])]), _vm._ssrNode(" <div class=\"row\"><div class=\"col-xl-12 mx-auto\"><div class=\"card border-top border-0 border-4 border-info\"><div class=\"card-body\"><div class=\"border p-4 rounded\"><form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Password</label> <div class=\"col-sm-9\"><input type=\"password\" id=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.passdata.password) + " class=\"form-control password\"> " + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Confirm Password</label> <div class=\"col-sm-9\"><input type=\"password\" id=\"password_confirmation\" placeholder=\"Confirm Password\"" + _vm._ssrAttr("value", _vm.passdata.password_confirmation) + " class=\"form-control password_confirmation\"> " + (_vm.errors.password_confirmation ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password_confirmation[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div></form></div></div></div></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/changePassword.vue?vue&type=template&id=385afaed

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/changePassword.vue?vue&type=script&lang=js

/* harmony default export */ var changePasswordvue_type_script_lang_js = ({
  head: {
    title: 'Change Password'
  },
  data() {
    return {
      passdata: {
        password: '',
        password_confirmation: ''
      },
      notifmsg: '',
      errors: {}
    };
  },
  created() {},
  methods: {
    saveData() {
      const formData = new FormData();
      formData.append('password', this.passdata.password);
      formData.append('password_confirmation', this.passdata.password_confirmation);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/updatePassword', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    success_noti() {
      Lobibox.notify('success', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bx bx-check-circle',
        msg: 'Your password successfully update.'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/changePassword.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_changePasswordvue_type_script_lang_js = (changePasswordvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/changePassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_changePasswordvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "592963ee"
  
)

/* harmony default export */ var changePassword = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=changePassword.js.map