exports.ids = [51];
exports.modules = {

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/leavel-rquest-add.vue?vue&type=template&id=86494f18
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\">", "</div>", [_vm._ssrNode("<div class=\"ps-3\">", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\">", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\">", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\">", "</li>", [_c('router-link', {
    attrs: {
      "to": "/hrm/dashboard",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li aria-current=\"page\" class=\"breadcrumb-item\">", "</li>", [_c('router-link', {
    attrs: {
      "to": "/employee/leave-approval-list"
    }
  }, [_vm._v("Leave Approval Request List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Leave Approval Request </li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputpassword_confirmation2\" class=\"col-sm-3 col-form-label\">Leave Type</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.leave_type_id,
      expression: "insertdata.leave_type_id"
    }],
    staticClass: "form-select leave_type_id",
    attrs: {
      "name": "leave_type_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "leave_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.ltype, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.leave_type_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.leave_type_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">From Date</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"frm_date\"" + _vm._ssrAttr("value", _vm.insertdata.frm_date) + " class=\"form-control frm_date\"> " + (_vm.errors.frm_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.frm_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">To Date</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"frm_date\"" + _vm._ssrAttr("value", _vm.insertdata.to_date) + " class=\"form-control to_date\"> " + (_vm.errors.to_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.to_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">No. of Leave</label> <div class=\"col-sm-9\"><input type=\"number\" id=\"no_days_allow\"" + _vm._ssrAttr("value", _vm.insertdata.no_of_leave) + " class=\"form-control no_of_leave\"> " + (_vm.errors.no_of_leave ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.no_of_leave[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Remarks</label> <div class=\"col-sm-9\"><textarea id=\"remarks\" class=\"form-control remarks\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.remarks)) + "</textarea></div></div> <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div>")], 2)])])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/employee/leavel-rquest-add.vue?vue&type=template&id=86494f18

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/leavel-rquest-add.vue?vue&type=script&lang=js
/* harmony default export */ var leavel_rquest_addvue_type_script_lang_js = ({
  head: {
    title: 'Leave Approval Request  '
  },
  data() {
    return {
      insertdata: {
        id: '',
        leave_type_id: '',
        frm_date: '',
        to_date: '',
        no_of_leave: '',
        remarks: '',
        status: 0
      },
      errors: {},
      ltype: []
    };
  },
  created() {
    this.leaveType();
  },
  methods: {
    calculateDays() {
      if (this.insertdata.frm_date && this.insertdata.to_date) {
        const from = new Date(this.insertdata.frm_date);
        const to = new Date(this.insertdata.to_date);
        const timeDifference = to.getTime() - from.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        this.insertdata.no_of_leave = daysDifference;
      } else {
        this.insertdata.no_of_leave = null;
      }
    },
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('leave_type_id', this.insertdata.leave_type_id);
      formData.append('frm_date', this.insertdata.frm_date);
      formData.append('to_date', this.insertdata.to_date);
      formData.append('no_of_leave', this.insertdata.no_of_leave);
      formData.append('remarks', this.insertdata.remarks);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/leave/createEditLeaveRequest', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/employee/leave-approval-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    leaveType() {
      this.$axios.get('/leave/getLeaveTypeList').then(response => {
        this.ltype = response.data.data;
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
// CONCATENATED MODULE: ./pages/employee/leavel-rquest-add.vue?vue&type=script&lang=js
 /* harmony default export */ var employee_leavel_rquest_addvue_type_script_lang_js = (leavel_rquest_addvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/employee/leavel-rquest-add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_leavel_rquest_addvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2d524cac"
  
)

/* harmony default export */ var leavel_rquest_add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=leavel-rquest-add.js.map