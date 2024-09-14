exports.ids = [96];
exports.modules = {

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/add-salary.vue?vue&type=template&id=797d5c6a
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
      "to": "/setting/salary-list"
    }
  }, [_vm._v("Salary List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">New Salary</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Packages Name</label> <div class=\"col-sm-9\"><input type=\"text\" placeholder=\"Packages Name\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control name\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Number of Referell</label> <div class=\"col-sm-9\"><input type=\"text\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.number_of_referell) + " class=\"form-control name\"> " + (_vm.errors.number_of_referell ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.number_of_referell[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Number of Sales</label> <div class=\"col-sm-9\"><input type=\"text\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.number_of_sales) + " class=\"form-control name\"> " + (_vm.errors.number_of_sales ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.number_of_sales[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Number of Blogs</label> <div class=\"col-sm-9\"><input type=\"text\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.number_of_blogs) + " class=\"form-control name\"> " + (_vm.errors.number_of_blogs ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.number_of_blogs[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Salary Amount</label> <div class=\"col-sm-9\"><input type=\"text\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.salary_amount) + " class=\"form-control name\"> " + (_vm.errors.salary_amount ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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

// CONCATENATED MODULE: ./pages/setting/add-salary.vue?vue&type=template&id=797d5c6a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/add-salary.vue?vue&type=script&lang=js
/* harmony default export */ var add_salaryvue_type_script_lang_js = ({
  head: {
    title: 'Add New Salary'
  },
  data() {
    return {
      insertdata: {
        id: '',
        name: '',
        number_of_referell: '',
        number_of_sales: '',
        number_of_blogs: '',
        salary_amount: '',
        status: 1
      },
      notifmsg: '',
      errors: {}
    };
  },
  created() {},
  methods: {
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('name', this.insertdata.name);
      formData.append('number_of_referell', this.insertdata.number_of_referell);
      formData.append('number_of_sales', this.insertdata.number_of_sales);
      formData.append('number_of_blogs', this.insertdata.number_of_blogs);
      formData.append('salary_amount', this.insertdata.salary_amount);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/setting/insertSalary', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/setting/salary-list');
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
        msg: 'Your data has been successfully inserted.'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/setting/add-salary.vue?vue&type=script&lang=js
 /* harmony default export */ var setting_add_salaryvue_type_script_lang_js = (add_salaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/setting/add-salary.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  setting_add_salaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "644672c0"
  
)

/* harmony default export */ var add_salary = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add-salary.js.map