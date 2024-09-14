exports.ids = [66];
exports.modules = {

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/leave/edit/leaveallocation/_id.vue?vue&type=template&id=79e08f2b
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
      "to": "/leave/allocation-list"
    }
  }, [_vm._v("Leave Allocation List ")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Leave Allocation</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<input type=\"hidden\"" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control id\"> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Employee Type</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.employee_type,
      expression: "insertdata.employee_type"
    }],
    staticClass: "form-select employee_type",
    attrs: {
      "name": "employee_type"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "employee_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.getEmployee]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.empType, function (data) {
    return _c('option', {
      domProps: {
        "value": data.name
      }
    }, [_vm._v(_vm._s(data.name) + "\r\n                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.employee_type ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.employee_type[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Employee</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.employe_id,
      expression: "insertdata.employe_id"
    }],
    staticClass: "form-select employe_id",
    attrs: {
      "name": "employe_id"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "employe_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.getLeaveRulesInfo]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All")]), _vm._v(" "), _vm._l(_vm.emp_data, function (data) {
    return _c('option', {
      domProps: {
        "value": data.employe_id
      }
    }, [_vm._v(_vm._s(data.name) + " [" + _vm._s(data.employee_code) + "]\r\n                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.employe_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.employe_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Leave Type</label> <div class=\"col-sm-9\"><input type=\"text\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.insertdata.leave_type) + " class=\"form-control leave_type\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Max No.</label> <div class=\"col-sm-9\"><input type=\"text\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.insertdata.maximum_no_annual) + " class=\"form-control maximum_no_annual\"> <input type=\"hidden\"" + _vm._ssrAttr("value", _vm.insertdata.maximum_no_annual) + "> <input type=\"hidden\"" + _vm._ssrAttr("value", _vm.insertdata.leave_type) + "></div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Choose Year</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.year,
      expression: "insertdata.year"
    }],
    staticClass: "form-select year",
    attrs: {
      "name": "year"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2021"
    }
  }, [_vm._v("2021")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2022"
    }
  }, [_vm._v("2022")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2023"
    }
  }, [_vm._v("2023")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2024"
    }
  }, [_vm._v("2024")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2025"
    }
  }, [_vm._v("2025")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2026"
    }
  }, [_vm._v("2026")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2027"
    }
  }, [_vm._v("2027")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2028"
    }
  }, [_vm._v("2028")])]), _vm._ssrNode(" " + (_vm.errors.year ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.year[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Leave in Hand </label> <div class=\"col-sm-9\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.leave_in_hand) + " class=\"form-control leave_in_hand\"></div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Effective Year </label> <div class=\"col-sm-9\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.effective_year) + " class=\"form-control leave_type\"> " + (_vm.errors.effective_year ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.effective_year[0])) + "</span>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"row mb-3 d-none\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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
  }, [_vm._v("Inactive")])]), _vm._ssrNode(" " + (_vm.errors.status ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.status[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div>")], 2)])])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/leave/edit/leaveallocation/_id.vue?vue&type=template&id=79e08f2b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/leave/edit/leaveallocation/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Leave Allocation Edit'
  },
  data() {
    return {
      insertdata: {
        id: '',
        employee_type: '',
        employe_id: '',
        maximum_no_annual: '',
        leave_type: '',
        leave_in_hand: '',
        effective_year: '',
        year: '',
        status: 1
      },
      empType: [],
      leaveType: [],
      emp_data: [],
      notifmsg: '',
      errors: {}
    };
  },
  created() {
    this.getData();
    this.getEmployeeType();
    this.getLeaveType();
  },
  methods: {
    getEmployeeType() {
      this.$axios.get(`/user/allemployeeType`).then(response => {
        this.empType = response.data.data;
      });
    },
    getLeaveType() {
      this.$axios.get(`/leave/getLeaveTypeList`).then(response => {
        this.leaveType = response.data.data;
      });
    },
    getEmployee() {
      var employee_type = this.insertdata.employee_type;
      this.$axios.get(`/user/getEmpType/${employee_type}`).then(response => {
        this.emp_data = response.data.data;
      });
    },
    getEmployeeSelect(employee_type) {
      // var employee_type = this.insertdata.employee_type;
      this.$axios.get(`/user/getEmpType/${employee_type}`).then(response => {
        this.emp_data = response.data.data;
      });
    },
    getLeaveRulesInfo() {
      const employee_type = $(".employee_type").val();
      const emp_id = $(".employe_id").val();
      const params = {
        employee_type: employee_type,
        emp_id: emp_id
      };
      this.$axios.get(`/leave/getLeaveRulesCheck`, {
        params: params
      }).then(response => {
        console.log(response.data.data.maximum_no_annual);
        this.insertdata.maximum_no_annual = response.data.data.maximum_no_annual;
        this.insertdata.leave_type = response.data.data.leave_type;
        this.insertdata.leave_in_hand = response.data.data.leave_in_hand;
      });
    },
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('maximum_no_annual', this.insertdata.maximum_no_annual);
      formData.append('leave_type', this.insertdata.leave_type);
      formData.append('employee_type', this.insertdata.employee_type);
      formData.append('leave_in_hand', this.insertdata.leave_in_hand);
      formData.append('effective_year', this.insertdata.effective_year);
      formData.append('employe_id', this.insertdata.employe_id);
      formData.append('year', this.insertdata.year);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/leave/createEditLeaveAllocation', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/leave/allocation-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/leave/leaveAllocationRow/${id}`).then(response => {
        // console.log(response.data.data.name)
        this.insertdata.id = response.data.data.id;
        this.insertdata.maximum_no_annual = response.data.data.maximum_no_annual;
        this.insertdata.leave_type = response.data.data.leave_type;
        this.insertdata.employee_type = response.data.data.employee_type;
        this.insertdata.leave_in_hand = response.data.data.leave_in_hand;
        this.insertdata.effective_year = response.data.data.effective_year;
        this.insertdata.employe_id = response.data.data.employe_id;
        this.insertdata.year = response.data.data.year;
        this.insertdata.status = response.data.data.status;
        this.getEmployeeSelect(response.data.data.employee_type);
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
// CONCATENATED MODULE: ./pages/leave/edit/leaveallocation/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var leaveallocation_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/leave/edit/leaveallocation/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  leaveallocation_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db290df4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map