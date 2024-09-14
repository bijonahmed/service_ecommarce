exports.ids = [112];
exports.modules = {

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/payroll-payitem-add.vue?vue&type=template&id=cdccac4e
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
      "to": "/setting/payroll-payitem-list"
    }
  }, [_vm._v("Payroll Payitem List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">New Payroll Payitem </li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Head</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"name\" placeholder=\"Code\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control name\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">In Preset</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"in_percent\" placeholder=\"Percentage of Deduction\"" + _vm._ssrAttr("value", _vm.insertdata.in_percent) + " class=\"form-control in_percent\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">In Rupees</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"in_rupees\" placeholder=\"Tax Reference\"" + _vm._ssrAttr("value", _vm.insertdata.in_rupees) + " class=\"form-control in_rupees\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Min Value</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"min_value\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.min_value) + " class=\"form-control min_value\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Max Value</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"max_value\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.max_value) + " class=\"form-control max_value\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Effective From</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"effective_frm\" placeholder=\"Effective From\"" + _vm._ssrAttr("value", _vm.insertdata.effective_frm) + " class=\"form-control effective_frm\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Effective To</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"effective_to\" placeholder=\"Effective To\"" + _vm._ssrAttr("value", _vm.insertdata.effective_to) + " class=\"form-control effective_to\"></div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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

// CONCATENATED MODULE: ./pages/setting/payroll-payitem-add.vue?vue&type=template&id=cdccac4e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/payroll-payitem-add.vue?vue&type=script&lang=js
/* harmony default export */ var payroll_payitem_addvue_type_script_lang_js = ({
  head: {
    title: 'Tax Master Add'
  },
  data() {
    return {
      insertdata: {
        id: '',
        name: '',
        in_percent: '',
        in_rupees: '',
        min_value: '',
        max_value: '',
        effective_frm: '',
        effective_to: '',
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
      formData.append('in_percent', this.insertdata.in_percent);
      formData.append('in_rupees', this.insertdata.in_rupees);
      formData.append('min_value', this.insertdata.min_value);
      formData.append('max_value', this.insertdata.max_value);
      formData.append('effective_frm', this.insertdata.effective_frm);
      formData.append('effective_to', this.insertdata.effective_to);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/setting/insertPayItem', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/setting/payroll-payitem-list');
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
// CONCATENATED MODULE: ./pages/setting/payroll-payitem-add.vue?vue&type=script&lang=js
 /* harmony default export */ var setting_payroll_payitem_addvue_type_script_lang_js = (payroll_payitem_addvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/setting/payroll-payitem-add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  setting_payroll_payitem_addvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51acafad"
  
)

/* harmony default export */ var payroll_payitem_add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=payroll-payitem-add.js.map