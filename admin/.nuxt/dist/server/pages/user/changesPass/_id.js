exports.ids = [123];
exports.modules = {

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/changesPass/_id.vue?vue&type=template&id=66754910
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
      "to": "/user/user_list"
    }
  }, [_vm._v("User List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Change Password</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_c('center', _vm._l(_vm.notifmsg, function (errorArray, idx) {
    return _c('div', {
      key: idx
    }, _vm._l(errorArray, function (allErrors, idx) {
      return _c('div', {
        key: idx
      }, [_c('span', {
        staticClass: "text-danger"
      }, [_vm._v(_vm._s(allErrors) + " ")])]);
    }), 0);
  }), 0), _vm._ssrNode(" <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Password</label> <div class=\"col-sm-9\"><input type=\"hidden\" id=\"id\"" + _vm._ssrAttr("value", _vm.passdata.id) + " class=\"form-control id\"> <input type=\"password\" id=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.passdata.password) + " class=\"form-control password\"> " + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Confirm Password</label> <div class=\"col-sm-9\"><input type=\"password\" id=\"password_confirmation\" placeholder=\"Confirm Password\"" + _vm._ssrAttr("value", _vm.passdata.password_confirmation) + " class=\"form-control password_confirmation\"> " + (_vm.errors.password_confirmation ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password_confirmation[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div></form>")], 2)])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/changesPass/_id.vue?vue&type=template&id=66754910

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/changesPass/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Edit User'
  },
  data() {
    return {
      passdata: {
        id: '',
        password: '',
        password_confirmation: ''
      },
      notifmsg: '',
      errors: {},
      allrole: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    saveData() {
      const formData = new FormData();
      formData.append('id', this.passdata.id);
      formData.append('password', this.passdata.password);
      formData.append('password_confirmation', this.passdata.password_confirmation);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/changePassword', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/user/user_list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/user/getUserRow/${id}`).then(response => {
        console.log(response.data.data.name);
        this.passdata.id = response.data.data.id;
      });
    },
    success_noti() {
      Lobibox.notify('success', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bx bx-check-circle',
        msg: 'Password successfully update.'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/user/changesPass/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var changesPass_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/changesPass/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  changesPass_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53d9315f"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map