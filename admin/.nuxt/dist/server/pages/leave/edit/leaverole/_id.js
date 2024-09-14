exports.ids = [67];
exports.modules = {

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/leave/edit/leaverole/_id.vue?vue&type=template&id=0fd07110
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
      "to": "/leave/leave-role-list"
    }
  }, [_vm._v("Leave Role List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Leave Role</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Employee Type</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.employee_type_id,
      expression: "insertdata.employee_type_id"
    }],
    staticClass: "form-select employee_type_id",
    attrs: {
      "name": "employee_type_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "employee_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.empType, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name) + "\r\n                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.employee_type_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.employee_type_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Leave Type</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.leaveType, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.leave_type_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.leave_type_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Maximum No. (Annual)</label> <div class=\"col-sm-9\"><input type=\"hidden\" id=\"id\"" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control id\"> <input type=\"text\" id=\"maximum_no_annual\"" + _vm._ssrAttr("value", _vm.insertdata.maximum_no_annual) + " class=\"form-control maximum_no_annual\"> " + (_vm.errors.maximum_no_annual ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.maximum_no_annual[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Effective From</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"effective_from\"" + _vm._ssrAttr("value", _vm.insertdata.effective_from) + " class=\"form-control effective_from\"> " + (_vm.errors.effective_from ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.effective_from[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Effective To</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"code\"" + _vm._ssrAttr("value", _vm.insertdata.effective_to) + " class=\"form-control effective_to\"> " + (_vm.errors.effective_to ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.effective_to[0])) + "</span>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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

// CONCATENATED MODULE: ./pages/leave/edit/leaverole/_id.vue?vue&type=template&id=0fd07110

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/leave/edit/leaverole/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Leave Rule Edit'
  },
  data() {
    return {
      insertdata: {
        id: '',
        employee_type_id: '',
        leave_type_id: '',
        maximum_no_annual: '',
        effective_from: '',
        effective_to: '',
        status: ''
      },
      empType: [],
      leaveType: [],
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
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('employee_type_id', this.insertdata.employee_type_id);
      formData.append('leave_type_id', this.insertdata.leave_type_id);
      formData.append('maximum_no_annual', this.insertdata.maximum_no_annual);
      formData.append('effective_from', this.insertdata.effective_from);
      formData.append('effective_to', this.insertdata.effective_to);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/leave/createEditLeaveRule', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/leave/leave-role-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/leave/leaveRulerow/${id}`).then(response => {
        // console.log(response.data.data.name)
        this.insertdata.id = response.data.data.id;
        this.insertdata.employee_type_id = response.data.data.employee_type_id;
        this.insertdata.leave_type_id = response.data.data.leave_type_id;
        this.insertdata.maximum_no_annual = response.data.data.maximum_no_annual;
        this.insertdata.effective_from = response.data.data.effective_from;
        this.insertdata.effective_to = response.data.data.effective_to;
        this.insertdata.status = response.data.data.status;
      });
    },
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
// CONCATENATED MODULE: ./pages/leave/edit/leaverole/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var leaverole_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/leave/edit/leaverole/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  leaverole_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74b6f69c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map