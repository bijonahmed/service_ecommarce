exports.ids = [126];
exports.modules = {

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/newUser.vue?vue&type=template&id=0d9b03c2
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
  }, [_vm._v("User List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">New User</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputpassword_confirmation2\" class=\"col-sm-3 col-form-label\">Role</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.id,
      expression: "insertdata.id"
    }],
    staticClass: "form-select role_id",
    attrs: {
      "name": "role_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allrole, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.role_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.role_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Name</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"name\" placeholder=\"Name\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control name\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Email</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"email\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"form-control name\"> " + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Phone No</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"phone\" placeholder=\"Phone No\"" + _vm._ssrAttr("value", _vm.insertdata.phone) + " class=\"form-control phone\"> " + (_vm.errors.phone ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.phone[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEmailAddress2\" class=\"col-sm-3 col-form-label\">Address</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"addres\" placeholder=\"Address\"" + _vm._ssrAttr("value", _vm.insertdata.addres) + " class=\"form-control addres\"></div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Password</label> <div class=\"col-sm-9\"><input type=\"password\" id=\"password\" placeholder=\"xxxxxxxxxxxxx\"" + _vm._ssrAttr("value", _vm.insertdata.password) + " class=\"form-control password\"> " + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Confirm Password</label> <div class=\"col-sm-9\"><input type=\"password\" id=\"password_confirmation\" placeholder=\"xxxxxxxxxxxxx\"" + _vm._ssrAttr("value", _vm.insertdata.password_confirmation) + " class=\"form-control password_confirmation\"> " + (_vm.errors.password_confirmation ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password_confirmation[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Profile Picture</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"file\" id=\"file\" name=\"file\" class=\"form-control\"></div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputpassword_confirmation2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.status,
      expression: "insertdata.status"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "status"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1",
      "selected": ""
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])])])], 2), _vm._ssrNode(" <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div>")], 2)])])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/newUser.vue?vue&type=template&id=0d9b03c2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/newUser.vue?vue&type=script&lang=js
/* harmony default export */ var newUservue_type_script_lang_js = ({
  head: {
    title: 'Create User'
  },
  data() {
    return {
      insertdata: {
        id: '',
        name: '',
        phone: '',
        email: '',
        addres: '',
        role_id: '',
        password: '',
        password_confirmation: '',
        status: 1
      },
      notifmsg: '',
      errors: {},
      allrole: []
    };
  },
  created() {
    this.getrole();
  },
  methods: {
    onFileSelected() {
      this.file = this.$refs.file.files[0];
    },
    saveData() {
      const formData = new FormData();
      let role_id = $(".role_id").val();
      formData.append('id', this.insertdata.id);
      formData.append('file', this.file);
      formData.append('role_id', role_id);
      formData.append('name', this.insertdata.name);
      formData.append('email', this.insertdata.email);
      formData.append('phone', this.insertdata.phone);
      formData.append('addres', this.insertdata.addres);
      formData.append('status', this.insertdata.status);
      formData.append('password', this.insertdata.password);
      formData.append('password_confirmation', this.insertdata.password_confirmation);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/saveUser', formData, {
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
    getrole() {
      this.$axios.get('/user/getRoleList').then(response => {
        this.allrole = response.data.data;
      });
    },
    success_noti() {
      Lobibox.notify('success', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bx bx-check-circle',
        msg: 'Your data has been successfully inserted.'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/user/newUser.vue?vue&type=script&lang=js
 /* harmony default export */ var user_newUservue_type_script_lang_js = (newUservue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/newUser.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_newUservue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "572b3fd0"
  
)

/* harmony default export */ var newUser = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=newUser.js.map