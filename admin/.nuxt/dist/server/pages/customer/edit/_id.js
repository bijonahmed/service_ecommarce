exports.ids = [18];
exports.modules = {

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/customer/edit/_id.vue?vue&type=template&id=5990be20
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
      "to": "/customer/customerList"
    }
  }, [_vm._v("Customer List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Edit Customer</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_c('center', _vm._l(_vm.notifmsg, function (errorArray, idx) {
    return _c('div', {
      key: idx
    }, _vm._l(errorArray, function (allErrors, idx) {
      return _c('div', {
        key: idx
      }, [_c('span', {
        staticClass: "text-danger"
      }, [_vm._v(_vm._s(allErrors) + " ")])]);
    }), 0);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Customer Name</label> <div class=\"col-sm-9\"><input type=\"hidden\" id=\"id\"" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control id\"> <input type=\"text\" id=\"name\" placeholder=\"Customer Name\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control name\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Email</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"email\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"form-control email\"> " + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEmailAddress2\" class=\"col-sm-3 col-form-label\">Address 1</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"addres\" placeholder=\"Address 1\"" + _vm._ssrAttr("value", _vm.insertdata.address_1) + " class=\"form-control addres\"></div></div> <div class=\"row mb-3\"><label for=\"inputEmailAddress2\" class=\"col-sm-3 col-form-label\">Address 2</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"addres\" placeholder=\"Address 2\"" + _vm._ssrAttr("value", _vm.insertdata.address_2) + " class=\"form-control addres\"></div></div> <div class=\"row mb-3\"><label for=\"inputEmailAddress2\" class=\"col-sm-3 col-form-label\">Address 3</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"addres\" placeholder=\"Address 3\"" + _vm._ssrAttr("value", _vm.insertdata.address_3) + " class=\"form-control addres\"></div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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
  }, [_vm._v("Inactive")])])])], 2), _vm._ssrNode(" <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div>")], 2)], 2)])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/customer/edit/_id.vue?vue&type=template&id=5990be20

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/customer/edit/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Edit Customer'
  },
  data() {
    return {
      insertdata: {
        id: '',
        name: '',
        email: '',
        address_1: '',
        address_2: '',
        address_3: '',
        status: ''
      },
      notifmsg: '',
      errors: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('name', this.insertdata.name);
      formData.append('email', this.insertdata.email);
      formData.append('address_1', this.insertdata.address_1);
      formData.append('address_2', this.insertdata.address_2);
      formData.append('address_3', this.insertdata.address_3);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/customer/saveCustomer', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/customer/customerList');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/customer/getCustomerRow/${id}`).then(response => {
        console.log(response.data.data.name);
        this.insertdata.id = response.data.data.id;
        this.insertdata.name = response.data.data.name;
        this.insertdata.email = response.data.data.email;
        this.insertdata.phone = response.data.data.phone;
        this.insertdata.address_1 = response.data.data.address_1;
        this.insertdata.address_2 = response.data.data.address_2;
        this.insertdata.address_3 = response.data.data.address_3;
        this.insertdata.status = response.data.data.status;
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
// CONCATENATED MODULE: ./pages/customer/edit/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/customer/edit/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b908e78"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map