exports.ids = [36];
exports.modules = {

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/change-of-circumstances-add.vue?vue&type=template&id=1401c053
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
      "to": "/employee/change-of-circumstances-list"
    }
  }, [_vm._v("Circumstances List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">New Circumstances</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputEmail4\">Employee</label> "), _c('select', {
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
      }, function ($event) {
        return _vm.getEmployee();
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.emplist, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name) + " [" + _vm._s(data.employee_code) + "]\r\n                                            ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.employe_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.employe_id[0])) + "</span>" : "<!---->") + " <input type=\"hidden\" id=\"id\"" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control id\">")], 2)]), _vm._ssrNode(" <div class=\"show_loader\" style=\"display: none;\"><div class=\"d-flex justify-content-center\"><div role=\"status\" class=\"spinner-border\"><span class=\"visually-hidden\">Loading...</span></div></div></div> <hr> "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\">", "</form>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\"><label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Personal Details</span></label> <hr></div> <div class=\"form-group col-md-4\"><label for=\"inputEmail4\">Employee Code</label> <input type=\"text\" readonly=\"readonly\" id=\"employee_code\" placeholder=\"Employee Code\"" + _vm._ssrAttr("value", _vm.insertdata.employee_code) + " class=\"form-control employee_code\"> " + (_vm.errors.employee_code ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.employee_code[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">First Name</label> <input type=\"text\" id=\"first_name\" placeholder=\"First Name\"" + _vm._ssrAttr("value", _vm.insertdata.first_name) + " class=\"form-control first_name\"> " + (_vm.errors.first_name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.first_name[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Middle Name</label> <input type=\"text\" id=\"middle_name\" placeholder=\"Middle Name\"" + _vm._ssrAttr("value", _vm.insertdata.middle_name) + " class=\"form-control middle_name\"> " + (_vm.errors.middle_name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.middle_name[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Last Name</label> <input type=\"text\" id=\"last_name\" placeholder=\"Last Name\"" + _vm._ssrAttr("value", _vm.insertdata.last_name) + " class=\"form-control name\"> " + (_vm.errors.last_name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.last_name[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">NI No.</label> <input type=\"text\" id=\"ni_no\" placeholder=\"NI No\"" + _vm._ssrAttr("value", _vm.insertdata.ni_no) + " class=\"form-control ni_no\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Marital Status</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.marital_status,
      expression: "insertdata.marital_status"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "marital_status"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "marital_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Single"
    }
  }, [_vm._v("Single")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Married"
    }
  }, [_vm._v("Married")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Unmarried"
    }
  }, [_vm._v("Unmarried")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Widow"
    }
  }, [_vm._v("Widow")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Divorce"
    }
  }, [_vm._v("Divorce")])]), _vm._ssrNode(" " + (_vm.errors.marital_status ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.marital_status[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Nationality</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.country_id,
      expression: "insertdata.country_id"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "country_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "country_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.country_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.country_id[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Phone No</label> <input type=\"text\" id=\"phone\" placeholder=\"Phone No\"" + _vm._ssrAttr("value", _vm.insertdata.phone) + " class=\"form-control phone\"> " + (_vm.errors.phone ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.phone[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Email</label> <input type=\"text\" id=\"email\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"form-control email\"> " + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Age</label> <input type=\"text\" id=\"age\" placeholder=\"Age\"" + _vm._ssrAttr("value", _vm.insertdata.age) + " class=\"form-control age\"> " + (_vm.errors.age ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.age[0])) + "</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Gender</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.gender,
      expression: "insertdata.gender"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "gender"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Male")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Female")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Others")])]), _vm._ssrNode(" " + (_vm.errors.gender ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.gender[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Joining Date</label> <input type=\"date\" id=\"joning_date\" placeholder=\"Joining  Date\"" + _vm._ssrAttr("value", _vm.insertdata.joning_date) + " class=\"form-control age\"> " + (_vm.errors.joning_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.joning_date[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Date of Brith</label> <input type=\"date\" id=\"date_of_birth\" placeholder=\"Date of Brith\"" + _vm._ssrAttr("value", _vm.insertdata.date_of_birth) + " class=\"form-control date_of_birth\"> " + (_vm.errors.date_of_birth ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.date_of_birth[0])) + "</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Department</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.department_id,
      expression: "insertdata.department_id"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "department_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "department_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.department, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name) + "\r\n                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.department_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.department_id[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Designation</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.designation_id,
      expression: "insertdata.designation_id"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "department_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "designation_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.designation, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name) + "\r\n                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.designation_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.designation_id[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Salary</label> <input type=\"text\" id=\"salary\" placeholder=\"0.00\"" + _vm._ssrAttr("value", _vm.insertdata.salary) + " class=\"form-control salary\"> " + (_vm.errors.salary ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.salary[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Address</label> <input type=\"text\" id=\"address\" placeholder=\"Address\"" + _vm._ssrAttr("value", _vm.insertdata.address) + " class=\"form-control address\"></div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Picture</label> <input type=\"file\" id=\"file\" name=\"file\" class=\"form-control\"> <div id=\"show_profile_image\"></div></div> "), _vm._ssrNode("<div class=\"form-group col-md-4\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Employment Type</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.employee_type,
      expression: "insertdata.employee_type"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "employee_type"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "employee_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FULL TIME"
    }
  }, [_vm._v("FULL TIME")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CONTRACTUAL"
    }
  }, [_vm._v("CONTRACTUAL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SUSPEND"
    }
  }, [_vm._v("SUSPEND")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PART TIME"
    }
  }, [_vm._v("PART TIME")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LEFT"
    }
  }, [_vm._v("LEFT")])]), _vm._ssrNode(" " + (_vm.errors.employee_type ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.employee_type[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Date of Confirmation</label> <input type=\"date\" id=\"date_of_confirmation\" placeholder=\"Date of Confirmation\"" + _vm._ssrAttr("value", _vm.insertdata.date_of_confirmation) + " class=\"form-control date_of_confirmation\"> " + (_vm.errors.date_of_confirmation ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.date_of_confirmation[0])) + "</span>" : "<!---->") + "</div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Contract Start Date</label> <input type=\"date\" id=\"contact_start_date\" placeholder=\"Contract Start Date\"" + _vm._ssrAttr("value", _vm.insertdata.contact_start_date) + " class=\"form-control contact_start_date\"></div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Contract End Date (If Applicable)</label> <input type=\"date\" id=\"contact_end_date\" placeholder=\"Contract End Date (If Applicable)\"" + _vm._ssrAttr("value", _vm.insertdata.contact_end_date) + " class=\"form-control contact_end_date\"></div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Job Location</label> <input type=\"text\" id=\"job_location\" placeholder=\"Job Location\"" + _vm._ssrAttr("value", _vm.insertdata.job_location) + " class=\"form-control job_location\"> " + (_vm.errors.job_location ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.job_location[0])) + "</span>" : "<!---->") + "</div> <div class=\"col-md-12\"><hr></div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Reporting Authority</label> <input type=\"text\" id=\"reporting_authority\" placeholder=\"Reporting Authority\"" + _vm._ssrAttr("value", _vm.insertdata.reporting_authority) + " class=\"form-control reporting_authority\"></div> <div class=\"form-group col-md-4\"><label for=\"inputPassword4\">Leave Sanction Authority</label> <input type=\"text\" id=\"leave_sanction_auth\"" + _vm._ssrAttr("value", _vm.insertdata.leave_sanction_auth) + " class=\"form-control leave_sanction_auth\"> <br></div> <br> <div class=\"form-group col-md-12\"><label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white;\">Educational\r\n                                                    Details</span></label> <textarea type=\"text\" id=\"education_details\" class=\"form-control education_details mt-2\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.education_details)) + "</textarea></div> <div class=\"form-group col-md-12\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Job\r\n                                                    Details</span></label> <textarea type=\"text\" id=\"job_details\" class=\"form-control job_details mt-2\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.job_details)) + "</textarea></div> <div class=\"form-group col-md-12\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Key\r\n                                                    Responsibilities</span></label> <textarea type=\"text\" id=\"key_respons\" class=\"form-control age mt-2\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.key_respons)) + "</textarea></div> <div class=\"form-group col-md-12\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Training\r\n                                                    Details</span></label> <textarea type=\"text\" id=\"training_details\" class=\"form-control training_details mt-2\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.training_details)) + "</textarea> <hr></div> <div class=\"col-md-12\"><label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Emergency / Next of\r\n                                                    Kin Contact Details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Name</label> <input type=\"text\" id=\"emger_contact_name\"" + _vm._ssrAttr("value", _vm.insertdata.emger_contact_name) + " class=\"form-control emger_contact_name\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Relationship</label> <select name=\"em_relation\" class=\"form-select\"><option value>Select</option> <option value=\"Father\">Father</option> <option value=\"Mother\">Mother </option> <option value=\"Wife\">Wife</option> <option value=\"Relatives\">Relatives</option> <option value=\"Husband\">Husband</option> <option value=\"Partner\">Partner</option> <option value=\"Son\">Son</option> <option value=\"Daughter\">Daughter</option> <option value=\"Friend\">Friend</option> <option value=\"Others\" selected=\"selected\">Others</option></select></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Email</label> <input type=\"text\" id=\"emger_email\"" + _vm._ssrAttr("value", _vm.insertdata.emger_email) + " class=\"form-control emger_email\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Emergency Contact No.</label> <input type=\"text\" id=\"emger_contact_no\"" + _vm._ssrAttr("value", _vm.insertdata.emger_contact_no) + " class=\"form-control emger_contact_no\"></div> <div class=\"form-group col-md-12\"><br> <label for=\"inputPassword4\">Address</label> <input type=\"text\" id=\"emger_address\"" + _vm._ssrAttr("value", _vm.insertdata.emger_address) + " class=\"form-control emger_address\"></div> <div class=\"col-md-12\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Certified Membership</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Title of Certified License</label> <input type=\"text\" id=\"certifi_title\"" + _vm._ssrAttr("value", _vm.insertdata.certifi_title) + " class=\"form-control certifi_title\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">License Number</label> <input type=\"text\" id=\"certifi_license_number\"" + _vm._ssrAttr("value", _vm.insertdata.certifi_license_number) + " class=\"form-control certifi_license_number\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Start Date</label> <input type=\"date\" id=\"certifi_start_date\"" + _vm._ssrAttr("value", _vm.insertdata.certifi_start_date) + " class=\"form-control certifi_start_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">End Date</label> <input type=\"date\" id=\"certifi_end_date\"" + _vm._ssrAttr("value", _vm.insertdata.certifi_end_date) + " class=\"form-control certifi_end_date\"></div> <div class=\"col-sm-12\"><hr></div> <div class=\"col-md-12\"><label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Contact Information (Correspondence Address)</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Post Code</label> <input type=\"text\" id=\"contact_info_post_code\"" + _vm._ssrAttr("value", _vm.insertdata.contact_info_post_code) + " class=\"form-control contact_info_post_code\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Address</label> <input type=\"text\" id=\"contact_info_address\"" + _vm._ssrAttr("value", _vm.insertdata.contact_info_address) + " class=\"form-control contact_info_address\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Address Line 1</label> <input type=\"text\" id=\"contact_info_address_1\"" + _vm._ssrAttr("value", _vm.insertdata.contact_info_address_1) + " class=\"form-control contact_info_address_1\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Address Line 2</label> <input type=\"text\" id=\"contact_info_address_2\"" + _vm._ssrAttr("value", _vm.insertdata.contact_info_address_2) + " class=\"form-control contact_info_address_2\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Address Line 3</label> <input type=\"text\" id=\"contact_info_address_3\"" + _vm._ssrAttr("value", _vm.insertdata.contact_info_address_3) + " class=\"form-control contact_info_address_3\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">City / County</label> <input type=\"date\" id=\"contact_info_city_country\"" + _vm._ssrAttr("value", _vm.insertdata.contact_info_city_country) + " class=\"form-control contact_info_city_country\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\"> County</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.contact_info_country_id,
      expression: "insertdata.contact_info_country_id"
    }],
    staticClass: "form-select contact_info_country_id",
    attrs: {
      "name": "contact_info_country_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "contact_info_country_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"col-md-12 gap-3\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Other Documents</span></label> <hr></div> <div class=\"form-group col-md-12\"><label for=\"inputPassword4\">Type of Document</label> <input type=\"file\" id=\"type_of_doc\" name=\"type_of_doc\" class=\"form-control\"> <small>If there are multiple files, zip all the files together and upload them</small> <div id=\"show_type_of_doc\"></div></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Passport Details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Passport No.</label> <input type=\"text\" id=\"pass_no\"" + _vm._ssrAttr("value", _vm.insertdata.pass_no) + " class=\"form-control pass_no\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Nationality</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.pass_nationality,
      expression: "insertdata.pass_nationality"
    }],
    staticClass: "form-select pass_nationality",
    attrs: {
      "name": "pass_nationality"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "pass_nationality", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Place of Birth</label> <input type=\"date\" id=\"pass_place_birth\"" + _vm._ssrAttr("value", _vm.insertdata.pass_place_birth) + " class=\"form-control pass_place_birth\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued By</label> <input type=\"text\" id=\"pass_issued_by\"" + _vm._ssrAttr("value", _vm.insertdata.pass_issued_by) + " class=\"form-control pass_issued_by\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued Date</label> <input type=\"date\" id=\"pass_date\"" + _vm._ssrAttr("value", _vm.insertdata.pass_date) + " class=\"form-control pass_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Expire Date</label> <input type=\"date\" id=\"pass_expire_date\"" + _vm._ssrAttr("value", _vm.insertdata.pass_expire_date) + " class=\"form-control pass_expire_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Eligible Review Date</label> <input type=\"date\" id=\"pass_review_date\"" + _vm._ssrAttr("value", _vm.insertdata.pass_review_date) + " class=\"form-control pass_review_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Upload Document</label> <input type=\"file\" id=\"passport_upload_docs\" name=\"passport_upload_docs\" class=\"form-control\"> <small>If there are multiple files, zip all the files together and upload them</small> <div id=\"show_passport_upload_docs\"></div></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Visa/BRP Details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Visa/BRP No.</label> <input type=\"text\" id=\"visa_brp_np\"" + _vm._ssrAttr("value", _vm.insertdata.visa_brp_np) + " class=\"form-control visa_brp_np\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Nationality</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.visa_nationality,
      expression: "insertdata.visa_nationality"
    }],
    staticClass: "form-select visa_nationality",
    attrs: {
      "name": "visa_nationality"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "visa_nationality", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Country of Residence</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.visa_country_residence,
      expression: "insertdata.visa_country_residence"
    }],
    staticClass: "form-select visa_country_residence",
    attrs: {
      "name": "visa_country_residence"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "visa_country_residence", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued By</label> <input type=\"text\" id=\"visa_issuedby\"" + _vm._ssrAttr("value", _vm.insertdata.visa_issuedby) + " class=\"form-control visa_issuedby\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued Date</label> <input type=\"date\" id=\"visa_issued_date\"" + _vm._ssrAttr("value", _vm.insertdata.visa_issued_date) + " class=\"form-control visa_issued_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Expire Date</label> <input type=\"date\" id=\"visa_expire_date\"" + _vm._ssrAttr("value", _vm.insertdata.visa_expire_date) + " class=\"form-control visa_expire_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Eligible Review Date</label> <input type=\"date\" id=\"visa_eligbible_review_date\"" + _vm._ssrAttr("value", _vm.insertdata.visa_eligbible_review_date) + " class=\"form-control visa_eligbible_review_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Front/Back Side Document</label> <input type=\"file\" id=\"visa_upload_documents\" name=\"visa_upload_documents\" class=\"form-control\"> <small>If there are multiple files, zip all the files together and upload them</small> <div id=\"show_visa_upload_documents\"></div></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Is this your current visa?</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.visa_current_yesno,
      expression: "insertdata.visa_current_yesno"
    }],
    staticClass: "form-select visa_current_yesno",
    attrs: {
      "name": "visa_current_yesno"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "visa_current_yesno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Yes"
    }
  }, [_vm._v("Yes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "No"
    }
  }, [_vm._v("No")])])], 2), _vm._ssrNode(" <div class=\"form-group col-md-9\"><label for=\"inputPassword4\"> Remarks</label> <input type=\"text\" id=\"visa_remarks\"" + _vm._ssrAttr("value", _vm.insertdata.visa_remarks) + " class=\"form-control visa_remarks\"></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">EUSS/Time limit details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Reference Number.</label> <input type=\"text\" name=\"ess_ref_no\" id=\"ess_ref_no\"" + _vm._ssrAttr("value", _vm.insertdata.ess_ref_no) + " class=\"form-control ess_ref_no\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Nationality</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.ess_nationality,
      expression: "insertdata.ess_nationality"
    }],
    staticClass: "form-select ess_nationality",
    attrs: {
      "name": "ess_nationality"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "ess_nationality", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued By</label> <input type=\"text\" id=\"ess_issued_by\"" + _vm._ssrAttr("value", _vm.insertdata.ess_issued_by) + " class=\"form-control ess_issued_by\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued Date</label> <input type=\"date\" id=\"ess_issued_date\"" + _vm._ssrAttr("value", _vm.insertdata.ess_issued_date) + " class=\"form-control ess_issued_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Expire Date</label> <input type=\"date\" id=\"ess_expire_date\"" + _vm._ssrAttr("value", _vm.insertdata.ess_expire_date) + " class=\"form-control ess_expire_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Eligible Review Date</label> <input type=\"date\" id=\"ess_eligible_review_date\"" + _vm._ssrAttr("value", _vm.insertdata.ess_eligible_review_date) + " class=\"form-control ess_eligible_review_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Upload Document</label> <input type=\"file\" id=\"euss_upload_documents\" name=\"euss_upload_documents\" class=\"form-control\"> <small>If there are multiple files, zip all the files together and upload them</small> <div id=\"show_euss_upload_documents\"></div></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Is this your current visa?</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.ess_current_visa,
      expression: "insertdata.ess_current_visa"
    }],
    staticClass: "form-select ess_current_visa",
    attrs: {
      "name": "ess_current_visa"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "ess_current_visa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Yes"
    }
  }, [_vm._v("Yes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "No"
    }
  }, [_vm._v("No")])])], 2), _vm._ssrNode(" <div class=\"form-group col-md-12\"><label for=\"inputPassword4\"> Remarks</label> <input type=\"text\" id=\"ess_remarks\"" + _vm._ssrAttr("value", _vm.insertdata.ess_remarks) + " class=\"form-control ess_remarks\"></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">National ID details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">National id number.</label> <input type=\"text\" id=\"nid_number\"" + _vm._ssrAttr("value", _vm.insertdata.nid_number) + " class=\"form-control nid_number\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Nationality</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.nid_nationality,
      expression: "insertdata.nid_nationality"
    }],
    staticClass: "form-select nid_nationality",
    attrs: {
      "name": "nid_nationality"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "nid_nationality", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Country of Residence</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.nid_country_residence,
      expression: "insertdata.nid_country_residence"
    }],
    staticClass: "form-select nid_country_residence",
    attrs: {
      "name": "nid_country_residence"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "nid_country_residence", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued Date</label> <input type=\"date\" id=\"nid_issue_date\"" + _vm._ssrAttr("value", _vm.insertdata.nid_issue_date) + " class=\"form-control nid_issue_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Expire Date</label> <input type=\"date\" id=\"nid_expire_date\"" + _vm._ssrAttr("value", _vm.insertdata.nid_expire_date) + " class=\"form-control nid_expire_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Eligible Review Date</label> <input type=\"date\" id=\"nid_eli_review_date\"" + _vm._ssrAttr("value", _vm.insertdata.nid_eli_review_date) + " class=\"form-control nid_eli_review_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Upload Document</label> <input type=\"file\" id=\"nid_upload_documents\" name=\"nid_upload_documents\" class=\"form-control\"> <small>If there are multiple files, zip all the files together and upload them</small> <div id=\"show_nid_upload_documents\"></div></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Is this your current visa?</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.nid_current_visa,
      expression: "insertdata.nid_current_visa"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "country_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "nid_current_visa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Yes"
    }
  }, [_vm._v("Yes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "No"
    }
  }, [_vm._v("No")])])], 2), _vm._ssrNode(" <div class=\"form-group col-md-12\"><label for=\"inputPassword4\"> Remarks</label> <input type=\"text\" id=\"nid_remarks\"" + _vm._ssrAttr("value", _vm.insertdata.nid_remarks) + " class=\"form-control nid_remarks\"></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Other details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Document name.</label> <input type=\"text\" id=\"others_doc_name\"" + _vm._ssrAttr("value", _vm.insertdata.others_doc_name) + " class=\"form-control others_doc_name\"></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Document reference number.</label> <input type=\"text\" id=\"others_ref_name\"" + _vm._ssrAttr("value", _vm.insertdata.others_ref_name) + " class=\"form-control others_ref_name\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Nationality</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.others_nationality,
      expression: "insertdata.others_nationality"
    }],
    staticClass: "form-select others_nationality",
    attrs: {
      "name": "others_nationality"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "others_nationality", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.allcountry, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.countryname) + "\r\n                                                ")]);
  })], 2)], 2), _vm._ssrNode(" <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Issued Date</label> <input type=\"date\" id=\"others_issue_date\"" + _vm._ssrAttr("value", _vm.insertdata.others_issue_date) + " class=\"form-control others_issue_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Expire Date</label> <input type=\"date\" id=\"others_expire_date\"" + _vm._ssrAttr("value", _vm.insertdata.others_expire_date) + " class=\"form-control others_expire_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Eligible Review Date</label> <input type=\"date\" id=\"others_eligb_review_date\"" + _vm._ssrAttr("value", _vm.insertdata.others_eligb_review_date) + " class=\"form-control others_eligb_review_date\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Upload Document</label> <input type=\"file\" id=\"upload_documents_other\" name=\"upload_documents_other\" class=\"form-control\"> <small>If there are multiple files, zip all the files together and upload them</small> <div id=\"show_other_upload_documents\"></div></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Is this your current visa?</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.others_visa_sts,
      expression: "insertdata.others_visa_sts"
    }],
    staticClass: "form-select others_visa_sts",
    attrs: {
      "name": "others_visa_sts"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "others_visa_sts", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Yes"
    }
  }, [_vm._v("Yes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "No"
    }
  }, [_vm._v("No")])])], 2), _vm._ssrNode(" <div class=\"form-group col-md-12\"><label for=\"inputPassword4\"> Remarks</label> <input type=\"text\" id=\"others_remarks\"" + _vm._ssrAttr("value", _vm.insertdata.others_remarks) + " class=\"form-control others_remarks\"></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Pay Details</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Pay Group</label> <input type=\"text\" id=\"pay_group\"" + _vm._ssrAttr("value", _vm.insertdata.pay_group) + " class=\"form-control pay_group\"></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\">Annual Pay</label> <input type=\"text\" id=\"pay_annual_pay\"" + _vm._ssrAttr("value", _vm.insertdata.pay_annual_pay) + " class=\"form-control pay_annual_pay\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Wedges pay mode</label> <input type=\"text\" id=\"pay_wedges_pay_mode\"" + _vm._ssrAttr("value", _vm.insertdata.pay_wedges_pay_mode) + " class=\"form-control pay_wedges_pay_mode\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Payment Type</label> <input type=\"text\" id=\"pay_payment_type\"" + _vm._ssrAttr("value", _vm.insertdata.pay_payment_type) + " class=\"form-control pay_payment_type\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Basic / Daily Wedges</label> <input type=\"text\" id=\"pay_basic_daily_wedges\"" + _vm._ssrAttr("value", _vm.insertdata.pay_basic_daily_wedges) + " class=\"form-control pay_basic_daily_wedges\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Min. Working Hour</label> <input type=\"text\" id=\"pay_min_working_hour\"" + _vm._ssrAttr("value", _vm.insertdata.pay_min_working_hour) + " class=\"form-control pay_min_working_hour\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Rate</label> <input type=\"text\" id=\"middle_name\"" + _vm._ssrAttr("value", _vm.insertdata.middle_name) + " class=\"form-control middle_name\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Tax Code</label> <input type=\"text\" id=\"pay_tax_code\"" + _vm._ssrAttr("value", _vm.insertdata.pay_tax_code) + " class=\"form-control pay_tax_code\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Tax Reference</label> <input type=\"text\" id=\"pay_tax_ref\"" + _vm._ssrAttr("value", _vm.insertdata.pay_tax_ref) + " class=\"form-control pay_tax_ref\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Tax Percentage</label> <input type=\"text\" id=\"pay_percentage\"" + _vm._ssrAttr("value", _vm.insertdata.pay_percentage) + " class=\"form-control pay_percentage\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Payment Mode</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.pay_payment_mode,
      expression: "insertdata.pay_payment_mode"
    }],
    staticClass: "form-select pay_payment_mode",
    attrs: {
      "name": "pay_payment_mode"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "pay_payment_mode", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Bank"
    }
  }, [_vm._v("Bank")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Cash"
    }
  }, [_vm._v("Cash")])])], 2), _vm._ssrNode(" <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Bank Name</label> <input type=\"text\" id=\"pay_bank_name\"" + _vm._ssrAttr("value", _vm.insertdata.pay_bank_name) + " class=\"form-control pay_bank_name\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Branch Name</label> <input type=\"text\" id=\"pay_branch_name\"" + _vm._ssrAttr("value", _vm.insertdata.pay_branch_name) + " class=\"form-control pay_branch_name\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Account No</label> <input type=\"text\" id=\"pay_account_no\"" + _vm._ssrAttr("value", _vm.insertdata.pay_account_no) + " class=\"form-control pay_account_no\"></div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\">Sort Code</label> <input type=\"text\" id=\"pay_sort_code\"" + _vm._ssrAttr("value", _vm.insertdata.pay_sort_code) + " class=\"form-control pay_sort_code\"></div> "), _vm._ssrNode("<div class=\"form-group col-md-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPassword4\">Payment Currency</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.pay_payment_currency,
      expression: "insertdata.pay_payment_currency"
    }],
    staticClass: "form-select pay_payment_currency",
    attrs: {
      "name": "pay_payment_currency"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "pay_payment_currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "DZD"
    }
  }, [_vm._v("DZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USD"
    }
  }, [_vm._v("USD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EUR"
    }
  }, [_vm._v("EUR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AOA"
    }
  }, [_vm._v("AOA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ARS"
    }
  }, [_vm._v("ARS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AMD"
    }
  }, [_vm._v("AMD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AWG"
    }
  }, [_vm._v("AWG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AUD"
    }
  }, [_vm._v("AUD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AZN"
    }
  }, [_vm._v("AZN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BSD"
    }
  }, [_vm._v("BSD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BHD"
    }
  }, [_vm._v("BHD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BDT"
    }
  }, [_vm._v("BDT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BBD"
    }
  }, [_vm._v("BBD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BYN"
    }
  }, [_vm._v("BYN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BZD"
    }
  }, [_vm._v("BZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BMD"
    }
  }, [_vm._v("BMD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BTN"
    }
  }, [_vm._v("BTN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "INR"
    }
  }, [_vm._v("INR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BOB"
    }
  }, [_vm._v("BOB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BOV"
    }
  }, [_vm._v("BOV")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BAM"
    }
  }, [_vm._v("BAM")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BWP"
    }
  }, [_vm._v("BWP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NOK"
    }
  }, [_vm._v("NOK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BRL"
    }
  }, [_vm._v("BRL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BND"
    }
  }, [_vm._v("BND")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BGN"
    }
  }, [_vm._v("BGN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BIF"
    }
  }, [_vm._v("BIF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CVE"
    }
  }, [_vm._v("CVE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KHR"
    }
  }, [_vm._v("KHR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XAF"
    }
  }, [_vm._v("XAF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CAD"
    }
  }, [_vm._v("CAD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KYD"
    }
  }, [_vm._v("KYD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XAF"
    }
  }, [_vm._v("XAF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XAF"
    }
  }, [_vm._v("XAF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CLF"
    }
  }, [_vm._v("CLF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CLP"
    }
  }, [_vm._v("CLP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CNY"
    }
  }, [_vm._v("CNY")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "COP"
    }
  }, [_vm._v("COP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "COU"
    }
  }, [_vm._v("COU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KMF"
    }
  }, [_vm._v("KMF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CDF"
    }
  }, [_vm._v("CDF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XAF"
    }
  }, [_vm._v("XAF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NZD"
    }
  }, [_vm._v("NZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CRC"
    }
  }, [_vm._v("CRC")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HRK"
    }
  }, [_vm._v("HRK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CUC"
    }
  }, [_vm._v("CUC")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CUP"
    }
  }, [_vm._v("CUP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANG"
    }
  }, [_vm._v("ANG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CZK"
    }
  }, [_vm._v("CZK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DKK"
    }
  }, [_vm._v("DKK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DJF"
    }
  }, [_vm._v("DJF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DOP"
    }
  }, [_vm._v("DOP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EGP"
    }
  }, [_vm._v("EGP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SVC"
    }
  }, [_vm._v("SVC")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XAF"
    }
  }, [_vm._v("XAF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ERN"
    }
  }, [_vm._v("ERN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ETB"
    }
  }, [_vm._v("ETB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FKP"
    }
  }, [_vm._v("FKP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DKK"
    }
  }, [_vm._v("DKK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FJD"
    }
  }, [_vm._v("FJD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XPF"
    }
  }, [_vm._v("XPF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XAF"
    }
  }, [_vm._v("XAF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GMD"
    }
  }, [_vm._v("GMD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GEL"
    }
  }, [_vm._v("GEL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GHS"
    }
  }, [_vm._v("GHS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GIP"
    }
  }, [_vm._v("GIP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DKK"
    }
  }, [_vm._v("DKK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GTQ"
    }
  }, [_vm._v("GTQ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GBP",
      "selected": ""
    }
  }, [_vm._v("GBP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GNF"
    }
  }, [_vm._v("GNF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GYD"
    }
  }, [_vm._v("GYD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HTG"
    }
  }, [_vm._v("HTG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HNL"
    }
  }, [_vm._v("HNL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HKD"
    }
  }, [_vm._v("HKD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HUF"
    }
  }, [_vm._v("HUF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ISK"
    }
  }, [_vm._v("ISK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "INR"
    }
  }, [_vm._v("INR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IDR"
    }
  }, [_vm._v("IDR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XDR"
    }
  }, [_vm._v("XDR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IRR"
    }
  }, [_vm._v("IRR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IQD"
    }
  }, [_vm._v("IQD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ILS"
    }
  }, [_vm._v("ILS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "JMD"
    }
  }, [_vm._v("JMD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "JPY"
    }
  }, [_vm._v("JPY")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "JOD"
    }
  }, [_vm._v("JOD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KZT"
    }
  }, [_vm._v("KZT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KES"
    }
  }, [_vm._v("KES")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KPW"
    }
  }, [_vm._v("KPW")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KRW"
    }
  }, [_vm._v("KRW")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KWD"
    }
  }, [_vm._v("KWD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KGS"
    }
  }, [_vm._v("KGS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAK"
    }
  }, [_vm._v("LAK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LBP"
    }
  }, [_vm._v("LBP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LSL"
    }
  }, [_vm._v("LSL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ZAR"
    }
  }, [_vm._v("ZAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LRD"
    }
  }, [_vm._v("LRD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LYD"
    }
  }, [_vm._v("LYD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CHF"
    }
  }, [_vm._v("CHF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MOP"
    }
  }, [_vm._v("MOP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MGA"
    }
  }, [_vm._v("MGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MWK"
    }
  }, [_vm._v("MWK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MYR"
    }
  }, [_vm._v("MYR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MVR"
    }
  }, [_vm._v("MVR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MRU"
    }
  }, [_vm._v("MRU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MUR"
    }
  }, [_vm._v("MUR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XUA"
    }
  }, [_vm._v("XUA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MXN"
    }
  }, [_vm._v("MXN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MXV"
    }
  }, [_vm._v("MXV")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MDL"
    }
  }, [_vm._v("MDL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MNT"
    }
  }, [_vm._v("MNT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MAD"
    }
  }, [_vm._v("MAD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MZN"
    }
  }, [_vm._v("MZN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MMK"
    }
  }, [_vm._v("MMK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NAD"
    }
  }, [_vm._v("NAD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ZAR"
    }
  }, [_vm._v("ZAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NPR"
    }
  }, [_vm._v("NPR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XPF"
    }
  }, [_vm._v("XPF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NZD"
    }
  }, [_vm._v("NZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NIO"
    }
  }, [_vm._v("NIO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NGN"
    }
  }, [_vm._v("NGN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NZD"
    }
  }, [_vm._v("NZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NOK"
    }
  }, [_vm._v("NOK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OMR"
    }
  }, [_vm._v("OMR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PKR"
    }
  }, [_vm._v("PKR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PAB"
    }
  }, [_vm._v("PAB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PGK"
    }
  }, [_vm._v("PGK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PYG"
    }
  }, [_vm._v("PYG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PEN"
    }
  }, [_vm._v("PEN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PHP"
    }
  }, [_vm._v("PHP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NZD"
    }
  }, [_vm._v("NZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PLN"
    }
  }, [_vm._v("PLN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "QAR"
    }
  }, [_vm._v("QAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MKD"
    }
  }, [_vm._v("MKD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "RON"
    }
  }, [_vm._v("RON")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "RUB"
    }
  }, [_vm._v("RUB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "RWF"
    }
  }, [_vm._v("RWF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SHP"
    }
  }, [_vm._v("SHP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XCD"
    }
  }, [_vm._v("XCD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "WST"
    }
  }, [_vm._v("WST")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "STN"
    }
  }, [_vm._v("STN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SAR"
    }
  }, [_vm._v("SAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "RSD"
    }
  }, [_vm._v("RSD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SCR"
    }
  }, [_vm._v("SCR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SLL"
    }
  }, [_vm._v("SLL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SGD"
    }
  }, [_vm._v("SGD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANG"
    }
  }, [_vm._v("ANG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XSU"
    }
  }, [_vm._v("XSU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SBD"
    }
  }, [_vm._v("SBD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SOS"
    }
  }, [_vm._v("SOS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ZAR"
    }
  }, [_vm._v("ZAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SSP"
    }
  }, [_vm._v("SSP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LKR"
    }
  }, [_vm._v("LKR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SDG"
    }
  }, [_vm._v("SDG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SRD"
    }
  }, [_vm._v("SRD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NOK"
    }
  }, [_vm._v("NOK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SZL"
    }
  }, [_vm._v("SZL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SEK"
    }
  }, [_vm._v("SEK")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CHE"
    }
  }, [_vm._v("CHE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CHF"
    }
  }, [_vm._v("CHF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CHW"
    }
  }, [_vm._v("CHW")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SYP"
    }
  }, [_vm._v("SYP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TWD"
    }
  }, [_vm._v("TWD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TJS"
    }
  }, [_vm._v("TJS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TZS"
    }
  }, [_vm._v("TZS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "THB"
    }
  }, [_vm._v("THB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XOF"
    }
  }, [_vm._v("XOF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NZD"
    }
  }, [_vm._v("NZD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TOP"
    }
  }, [_vm._v("TOP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TTD"
    }
  }, [_vm._v("TTD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TND"
    }
  }, [_vm._v("TND")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TRY"
    }
  }, [_vm._v("TRY")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TMT"
    }
  }, [_vm._v("TMT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UGX"
    }
  }, [_vm._v("UGX")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UAH"
    }
  }, [_vm._v("UAH")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AED"
    }
  }, [_vm._v("AED")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "USN"
    }
  }, [_vm._v("USN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UYI"
    }
  }, [_vm._v("UYI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UYU"
    }
  }, [_vm._v("UYU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UZS"
    }
  }, [_vm._v("UZS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VUV"
    }
  }, [_vm._v("VUV")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VEF"
    }
  }, [_vm._v("VEF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VND"
    }
  }, [_vm._v("VND")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "XPF"
    }
  }, [_vm._v("XPF")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MAD"
    }
  }, [_vm._v("MAD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "YER"
    }
  }, [_vm._v("YER")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ZMW"
    }
  }, [_vm._v("ZMW")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ZWL"
    }
  }, [_vm._v("ZWL")])])], 2), _vm._ssrNode(" <div class=\"form-group col-md-12\"><label for=\"inputPassword4\"> Remarks</label> <input type=\"text\" id=\"pay_remarks\"" + _vm._ssrAttr("value", _vm.insertdata.pay_remarks) + " class=\"form-control pay_remarks\"></div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Payment (Taxable)</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\"><input type=\"checkbox\" name=\"payment_da\" value=\"1\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.payment_da) ? _vm._i(_vm.insertdata.payment_da, "1") > -1 : _vm.insertdata.payment_da) + "></label>\r\n                                            Dearness Allowance\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\"><input type=\"checkbox\" name=\"hra\" value=\"2\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.payment_hra) ? _vm._i(_vm.insertdata.payment_hra, "2") > -1 : _vm.insertdata.payment_hra) + "></label>\r\n                                            House Rent Allowance\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\"><input type=\"checkbox\" name=\"conven_ta\" value=\"3\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.payment_conven_ta) ? _vm._i(_vm.insertdata.payment_conven_ta, "3") > -1 : _vm.insertdata.payment_conven_ta) + "></label>\r\n                                            Conveyance Allowance\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\"><input type=\"checkbox\" name=\"perfomance\" value=\"4\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.payment_perfomance) ? _vm._i(_vm.insertdata.payment_perfomance, "4") > -1 : _vm.insertdata.payment_perfomance) + "></label>\r\n                                            Performance Allowance\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\"><input type=\"checkbox\" name=\"monthly_al\" value=\"5\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.payment_monthly_al) ? _vm._i(_vm.insertdata.payment_monthly_al, "5") > -1 : _vm.insertdata.payment_monthly_al) + "></label>\r\n                                            Monthly Fixed Allowance\r\n                                        </div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Deduction</span></label> <hr></div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\"><input type=\"checkbox\" name=\"da\" value=\"1\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.ni_dedu_da) ? _vm._i(_vm.insertdata.ni_dedu_da, "1") > -1 : _vm.insertdata.ni_dedu_da) + "></label>NI Deduction\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputEmail4\"><input type=\"checkbox\" name=\"ni_dedu_hra\" value=\"2\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.ni_dedu_hra) ? _vm._i(_vm.insertdata.ni_dedu_hra, "2") > -1 : _vm.insertdata.ni_dedu_hra) + "></label>\r\n                                            I. Tax Deduction\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\"><input type=\"checkbox\" name=\"ni_dedu_conven_ta\" value=\"3\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.ni_dedu_conven_ta) ? _vm._i(_vm.insertdata.ni_dedu_conven_ta, "3") > -1 : _vm.insertdata.ni_dedu_conven_ta) + "></label>\r\n                                            I. Tax Cess\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\"><input type=\"checkbox\" name=\"ni_dedu_perfomance\" value=\"4\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.ni_dedu_perfomance) ? _vm._i(_vm.insertdata.ni_dedu_perfomance, "4") > -1 : _vm.insertdata.ni_dedu_perfomance) + "></label>ESI\r\n                                        </div> <div class=\"form-group col-md-3\"><label for=\"inputPassword4\"><input type=\"checkbox\" name=\"ni_dedu_monthly_al\" value=\"5\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.ni_dedu_monthly_al) ? _vm._i(_vm.insertdata.ni_dedu_monthly_al, "5") > -1 : _vm.insertdata.ni_dedu_monthly_al) + "></label>Prof Tax\r\n                                        </div> <div class=\"col-md-12\" style=\"margin-top: 5px;\"><br> <label for=\"inputPassword4\" class=\"bg-dark w-100 text-white\"><span style=\"color: #133f80; color:white\">Verification Status</span></label> <hr></div> "), _c('select', {
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
      "value": "1"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Not Approved")])])], 2), _vm._ssrNode(" <div class=\"col-md-12\"><hr></div> <div class=\"row\"><div class=\"col-sm-12\"><button type=\"submit\" id=\"btn_submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div>")], 2)], 2)])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/employee/change-of-circumstances-add.vue?vue&type=template&id=1401c053

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(21);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/change-of-circumstances-add.vue?vue&type=script&lang=js

/* harmony default export */ var change_of_circumstances_addvue_type_script_lang_js = ({
  head: {
    title: 'Circumstances Add'
  },
  data() {
    return {
      insertdata: {
        employe_id: '',
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        department_id: '',
        designation_id: '',
        salary: '',
        age: '',
        joning_date: '',
        date_of_birth: '',
        employee_code: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        ni_no: '',
        marital_status: '',
        country_id: '',
        employee_type: '',
        date_of_confirmation: '',
        contact_start_date: '',
        contact_end_date: '',
        job_location: '',
        reporting_authority: '',
        leave_sanction_auth: '',
        education_details: '',
        job_details: '',
        key_respons: '',
        gender: '',
        status: '',
        //Docs
        type_of_doc: '',
        passport_upload_docs: '',
        visa_upload_documents: '',
        onUploadDocumentEuss: '',
        nid_upload_documents: '',
        upload_documents_other: null,
        //second
        training_details: '',
        emger_contact_name: '',
        emger_email: '',
        emger_contact_no: '',
        emger_address: '',
        //Certificate
        certifi_title: '',
        certifi_license_number: '',
        certifi_start_date: '',
        certifi_end_date: '',
        //Contact 
        contact_info_post_code: '',
        contact_info_address: '',
        contact_info_address_1: '',
        contact_info_address_2: '',
        contact_info_address_3: '',
        contact_info_city_country: '',
        contact_info_country_id: '',
        //Passport 
        pass_no: '',
        pass_nationality: '',
        pass_place_birth: '',
        pass_issued_by: '',
        pass_date: '',
        pass_expire_date: '',
        pass_review_date: '',
        //Visa
        visa_brp_np: '',
        visa_nationality: '',
        visa_country_residence: '',
        visa_issuedby: '',
        visa_issued_date: '',
        visa_expire_date: '',
        visa_eligbible_review_date: '',
        visa_current_yesno: '',
        visa_remarks: '',
        //ESS
        ess_ref_no: '',
        ess_nationality: '',
        ess_issued_by: '',
        ess_issued_date: '',
        ess_expire_date: '',
        ess_eligible_review_date: '',
        ess_current_visa: '',
        ess_remarks: '',
        //NID 
        nid_number: '',
        nid_nationality: '',
        nid_country_residence: '',
        nid_issue_date: '',
        nid_expire_date: '',
        nid_eli_review_date: '',
        nid_current_visa: '',
        nid_remarks: '',
        //Others
        others_doc_name: '',
        others_ref_name: '',
        others_nationality: '',
        others_issue_date: '',
        others_expire_date: '',
        others_eligb_review_date: '',
        others_visa_sts: '',
        others_remarks: '',
        //Pay
        pay_group: '',
        pay_annual_pay: '',
        pay_wedges_pay_mode: '',
        pay_payment_type: '',
        pay_basic_daily_wedges: '',
        pay_min_working_hour: '',
        pay_tax_code: '',
        pay_tax_ref: '',
        pay_percentage: '',
        pay_payment_mode: '',
        pay_tax_ref: '',
        pay_bank_name: '',
        pay_branch_name: '',
        pay_sort_code: '',
        pay_remarks: '',
        //Payment 
        payment_da: '',
        payment_hra: '',
        payment_conven_ta: '',
        payment_perfomance: '',
        payment_monthly_al: '',
        //NI
        ni_dedu_da: '',
        ni_dedu_hra: '',
        ni_dedu_conven_ta: '',
        ni_dedu_perfomance: '',
        ni_dedu_monthly_al: ''
      },
      notifmsg: '',
      department: [],
      designation: [],
      allcountry: [],
      emplist: [],
      errors: {}
    };
  },
  created() {
    this.getDepartment();
    this.getDesignation();
    this.getCountrys();
    this.getEmployeList();
  },
  methods: {
    onFileSelected() {
      this.file = this.$refs.file.files[0];
    },
    onFiletypeOfDocument() {
      this.type_of_doc = this.$refs.file.files[0];
    },
    onUploadDocument() {
      this.upload_documents = this.$refs.file.files[0];
    },
    onUploadDocumentVisa() {
      this.visa_upload_documents = this.$refs.file.files[0];
    },
    onUploadDocumentEuss() {
      this.euss_upload_documents = this.$refs.file.files[0];
    },
    onUploadDocumentnid() {
      this.passport_upload_docs = this.$refs.file.files[0];
    },
    handleFileChange(event) {
      this.other_upload_documents = event.target.files[0];
    },
    saveData() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('type_of_doc', this.type_of_doc);
      formData.append('passport_upload_docs', this.passport_upload_docs);
      formData.append('visa_upload_documents', this.visa_upload_documents);
      formData.append('euss_upload_documents', this.euss_upload_documents);
      formData.append('nid_upload_documents', this.nid_upload_documents);
      formData.append('other_upload_documents', this.other_upload_documents);
      formData.append('id', this.insertdata.id);
      formData.append('employe_id', this.insertdata.employe_id);
      formData.append('name', this.insertdata.name);
      formData.append('email', this.insertdata.email);
      formData.append('phone', this.insertdata.phone);
      formData.append('address', this.insertdata.address);
      formData.append('department_id', this.insertdata.department_id);
      formData.append('designation_id', this.insertdata.designation_id);
      formData.append('salary', this.insertdata.salary);
      formData.append('age', this.insertdata.age);
      formData.append('joning_date', this.insertdata.joning_date);
      formData.append('date_of_birth', this.insertdata.date_of_birth);
      formData.append('gender', this.insertdata.gender);
      formData.append('status', this.insertdata.status);
      formData.append('employee_code', this.insertdata.employee_code);
      formData.append('first_name', this.insertdata.first_name);
      formData.append('middle_name', this.insertdata.middle_name);
      formData.append('last_name', this.insertdata.last_name);
      formData.append('ni_no', this.insertdata.ni_no);
      formData.append('marital_status', this.insertdata.marital_status);
      formData.append('country_id', this.insertdata.country_id);
      formData.append('employee_type', this.insertdata.employee_type);
      formData.append('date_of_confirmation', this.insertdata.date_of_confirmation);
      formData.append('contact_start_date', this.insertdata.contact_start_date);
      formData.append('contact_end_date', this.insertdata.contact_end_date);
      formData.append('job_location', this.insertdata.job_location);
      formData.append('reporting_authority', this.insertdata.reporting_authority);
      formData.append('leave_sanction_auth', this.insertdata.leave_sanction_auth);
      formData.append('education_details', this.insertdata.education_details);
      formData.append('job_details', this.insertdata.job_details);
      formData.append('key_respons', this.insertdata.key_respons);
      formData.append('training_details', this.insertdata.training_details);
      //Emgergency
      formData.append('emger_contact_name', this.insertdata.emger_contact_name);
      formData.append('emger_email', this.insertdata.emger_email);
      formData.append('emger_contact_no', this.insertdata.emger_contact_no);
      formData.append('emger_address', this.insertdata.emger_address);
      //Certificate
      formData.append('certifi_title', this.insertdata.certifi_title);
      formData.append('certifi_license_number', this.insertdata.certifi_license_number);
      formData.append('certifi_start_date', this.insertdata.certifi_start_date);
      formData.append('certifi_end_date', this.insertdata.certifi_end_date);
      //Contact
      formData.append('contact_info_post_code', this.insertdata.contact_info_post_code);
      formData.append('contact_info_address', this.insertdata.contact_info_address);
      formData.append('contact_info_address_1', this.insertdata.contact_info_address_1);
      formData.append('contact_info_address_2', this.insertdata.contact_info_address_2);
      formData.append('contact_info_address_3', this.insertdata.contact_info_address_3);
      formData.append('contact_info_city_country', this.insertdata.contact_info_city_country);
      formData.append('contact_info_country_id', this.insertdata.contact_info_country_id);
      //Pass
      formData.append('pass_no', this.insertdata.pass_no);
      formData.append('pass_nationality', this.insertdata.pass_nationality);
      formData.append('pass_place_birth', this.insertdata.pass_place_birth);
      formData.append('pass_issued_by', this.insertdata.pass_issued_by);
      formData.append('pass_date', this.insertdata.pass_date);
      formData.append('pass_expire_date', this.insertdata.pass_expire_date);
      formData.append('pass_review_date', this.insertdata.pass_review_date);
      //VISA
      formData.append('visa_brp_np', this.insertdata.visa_brp_np);
      formData.append('visa_nationality', this.insertdata.visa_nationality);
      formData.append('visa_country_residence', this.insertdata.visa_country_residence);
      formData.append('visa_issuedby', this.insertdata.visa_issuedby);
      formData.append('visa_issued_date', this.insertdata.visa_issued_date);
      formData.append('visa_expire_date', this.insertdata.visa_expire_date);
      formData.append('visa_eligbible_review_date', this.insertdata.visa_eligbible_review_date);
      formData.append('visa_current_yesno', this.insertdata.visa_current_yesno);
      formData.append('visa_remarks', this.insertdata.visa_remarks);
      //ESS
      formData.append('ess_ref_no', this.insertdata.ess_ref_no);
      formData.append('ess_nationality', this.insertdata.ess_nationality);
      formData.append('ess_issued_by', this.insertdata.ess_issued_by);
      formData.append('ess_issued_date', this.insertdata.ess_issued_date);
      formData.append('ess_expire_date', this.insertdata.ess_expire_date);
      formData.append('ess_eligible_review_date', this.insertdata.ess_eligible_review_date);
      formData.append('ess_current_visa', this.insertdata.ess_current_visa);
      formData.append('ess_remarks', this.insertdata.ess_remarks);
      //NID
      formData.append('nid_number', this.insertdata.nid_number);
      formData.append('nid_nationality', this.insertdata.nid_nationality);
      formData.append('nid_country_residence', this.insertdata.nid_country_residence);
      formData.append('nid_issue_date', this.insertdata.nid_issue_date);
      formData.append('nid_expire_date', this.insertdata.nid_expire_date);
      formData.append('nid_eli_review_date', this.insertdata.nid_eli_review_date);
      formData.append('nid_current_visa', this.insertdata.nid_current_visa);
      formData.append('nid_remarks', this.insertdata.nid_remarks);
      //Othres
      formData.append('others_doc_name', this.insertdata.others_doc_name);
      formData.append('others_ref_name', this.insertdata.others_ref_name);
      formData.append('others_nationality', this.insertdata.others_nationality);
      formData.append('others_issue_date', this.insertdata.others_issue_date);
      formData.append('others_expire_date', this.insertdata.others_expire_date);
      formData.append('others_eligb_review_date', this.insertdata.others_eligb_review_date);
      formData.append('others_visa_sts', this.insertdata.others_visa_sts);
      formData.append('others_remarks', this.insertdata.others_remarks);
      //Pay
      formData.append('pay_group', this.insertdata.pay_group);
      formData.append('pay_annual_pay', this.insertdata.pay_annual_pay);
      formData.append('pay_wedges_pay_mode', this.insertdata.pay_wedges_pay_mode);
      formData.append('pay_payment_type', this.insertdata.pay_payment_type);
      formData.append('pay_basic_daily_wedges', this.insertdata.pay_basic_daily_wedges);
      formData.append('pay_min_working_hour', this.insertdata.pay_min_working_hour);
      formData.append('pay_tax_code', this.insertdata.pay_tax_code);
      formData.append('pay_tax_ref', this.insertdata.pay_tax_ref);
      formData.append('pay_percentage', this.insertdata.pay_percentage);
      formData.append('pay_payment_mode', this.insertdata.pay_payment_mode);
      formData.append('pay_bank_name', this.insertdata.pay_bank_name);
      formData.append('pay_branch_name', this.insertdata.pay_branch_name);
      formData.append('pay_account_no', this.insertdata.pay_account_no);
      formData.append('pay_sort_code', this.insertdata.pay_sort_code);
      formData.append('pay_remarks', this.insertdata.pay_remarks);
      //Payment
      formData.append('payment_da', this.insertdata.payment_da);
      formData.append('payment_hra', this.insertdata.payment_hra);
      formData.append('payment_conven_ta', this.insertdata.payment_conven_ta);
      formData.append('payment_perfomance', this.insertdata.payment_perfomance);
      formData.append('payment_monthly_al', this.insertdata.payment_monthly_al);
      //NI
      formData.append('ni_dedu_da', this.insertdata.ni_dedu_da);
      formData.append('ni_dedu_hra', this.insertdata.ni_dedu_hra);
      formData.append('ni_dedu_conven_ta', this.insertdata.ni_dedu_conven_ta);
      formData.append('ni_dedu_perfomance', this.insertdata.ni_dedu_perfomance);
      formData.append('ni_dedu_monthly_al', this.insertdata.ni_dedu_monthly_al);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/saveCircumstances', formData, {
        headers
      }).then(res => {
        external_jquery_default()('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/employee/change-of-circumstances-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    getCountrys() {
      this.$axios.get(`/user/getCountry`).then(response => {
        this.allcountry = response.data.data;
      });
    },
    getDepartment() {
      this.$axios.get(`/user/getDepartmentList`).then(response => {
        this.department = response.data.data;
      });
    },
    getDesignation() {
      this.$axios.get(`/user/getDesignationList`).then(response => {
        this.designation = response.data.data;
      });
    },
    getEmployeList() {
      this.$axios.get(`/user/getEmployeeList`).then(response => {
        this.emplist = response.data.data;
      });
    },
    getEmployee() {
      external_jquery_default()(".show_loader").show();
      let id = this.insertdata.employe_id;
      this.$axios.get(`/user/employeeRow/${id}`).then(response => {
        external_jquery_default()(".show_loader").hide();
        //  this.insertdata.id = response.data.data.id;
        this.insertdata.name = response.data.data.name;
        this.insertdata.email = response.data.data.email;
        this.insertdata.phone = response.data.data.phone;
        this.insertdata.address = response.data.data.address;
        this.insertdata.department_id = response.data.data.department_id;
        this.insertdata.designation_id = response.data.data.designation_id;
        this.insertdata.salary = response.data.data.salary;
        this.insertdata.age = response.data.data.age;
        this.insertdata.joning_date = response.data.data.joning_date;
        this.insertdata.date_of_birth = response.data.data.date_of_birth;
        this.insertdata.gender = response.data.data.gender;
        this.insertdata.status = response.data.data.status;
        this.insertdata.employee_code = response.data.data.employee_code;
        this.insertdata.first_name = response.data.data.first_name;
        this.insertdata.middle_name = response.data.data.middle_name;
        this.insertdata.last_name = response.data.data.last_name;
        this.insertdata.ni_no = response.data.data.ni_no;
        this.insertdata.marital_status = response.data.data.marital_status;
        this.insertdata.country_id = response.data.data.country_id;
        this.insertdata.employee_type = response.data.data.employee_type;
        this.insertdata.date_of_confirmation = response.data.data.date_of_confirmation;
        this.insertdata.contact_start_date = response.data.data.contact_start_date;
        this.insertdata.contact_end_date = response.data.data.contact_end_date;
        this.insertdata.job_location = response.data.data.job_location;
        this.insertdata.reporting_authority = response.data.data.reporting_authority;
        this.insertdata.leave_sanction_auth = response.data.data.leave_sanction_auth;
        this.insertdata.education_details = response.data.data.education_details;
        this.insertdata.job_details = response.data.data.job_details;
        this.insertdata.key_respons = response.data.data.key_respons;
        this.insertdata.status = response.data.data.status;
        //===================================================== start  =====================================================
        //second
        this.insertdata.training_details = response.data.data.training_details;
        //Emgergency
        this.insertdata.emger_contact_name = response.data.data.emger_contact_name;
        this.insertdata.emger_email = response.data.data.emger_email;
        this.insertdata.emger_contact_no = response.data.data.emger_contact_no;
        this.insertdata.emger_address = response.data.data.emger_address;
        //Certificate
        this.insertdata.certifi_title = response.data.data.certifi_title;
        this.insertdata.certifi_license_number = response.data.data.certifi_license_number;
        this.insertdata.certifi_start_date = response.data.data.certifi_start_date;
        this.insertdata.certifi_end_date = response.data.data.certifi_end_date;
        //Contact
        this.insertdata.contact_info_post_code = response.data.data.contact_info_post_code;
        this.insertdata.contact_info_address = response.data.data.contact_info_address;
        this.insertdata.contact_info_address_1 = response.data.data.contact_info_address_1;
        this.insertdata.contact_info_address_2 = response.data.data.contact_info_address_2;
        this.insertdata.contact_info_address_3 = response.data.data.contact_info_address_3;
        this.insertdata.contact_info_city_country = response.data.data.contact_info_city_country;
        this.insertdata.contact_info_country_id = response.data.data.contact_info_country_id;
        //Pass
        this.insertdata.pass_no = response.data.data.pass_no;
        this.insertdata.pass_nationality = response.data.data.pass_nationality;
        this.insertdata.pass_place_birth = response.data.data.pass_place_birth;
        this.insertdata.pass_issued_by = response.data.data.pass_issued_by;
        this.insertdata.pass_date = response.data.data.pass_date;
        this.insertdata.pass_expire_date = response.data.data.pass_expire_date;
        this.insertdata.pass_review_date = response.data.data.pass_review_date;
        //VISA
        this.insertdata.visa_brp_np = response.data.data.visa_brp_np;
        this.insertdata.visa_nationality = response.data.data.visa_nationality;
        this.insertdata.visa_country_residence = response.data.data.visa_country_residence;
        this.insertdata.visa_issuedby = response.data.data.visa_issuedby;
        this.insertdata.visa_issued_date = response.data.data.visa_issued_date;
        this.insertdata.visa_expire_date = response.data.data.visa_expire_date;
        this.insertdata.visa_eligbible_review_date = response.data.data.visa_eligbible_review_date;
        this.insertdata.visa_current_yesno = response.data.data.visa_current_yesno;
        this.insertdata.visa_remarks = response.data.data.visa_remarks;
        //ESS
        this.insertdata.ess_ref_no = response.data.data.ess_ref_no;
        this.insertdata.ess_nationality = response.data.data.ess_nationality;
        this.insertdata.ess_issued_by = response.data.data.ess_issued_by;
        this.insertdata.ess_issued_date = response.data.data.ess_issued_date;
        this.insertdata.ess_expire_date = response.data.data.ess_expire_date;
        this.insertdata.ess_eligible_review_date = response.data.data.ess_eligible_review_date;
        this.insertdata.ess_current_visa = response.data.data.ess_current_visa;
        this.insertdata.ess_remarks = response.data.data.ess_remarks;
        //NID
        this.insertdata.nid_number = response.data.data.nid_number;
        this.insertdata.nid_nationality = response.data.data.nid_nationality;
        this.insertdata.nid_country_residence = response.data.data.nid_country_residence;
        this.insertdata.nid_issue_date = response.data.data.nid_issue_date;
        this.insertdata.nid_expire_date = response.data.data.nid_expire_date;
        this.insertdata.nid_eli_review_date = response.data.data.nid_eli_review_date;
        this.insertdata.nid_current_visa = response.data.data.nid_current_visa;
        this.insertdata.nid_remarks = response.data.data.nid_remarks;
        //Othres
        this.insertdata.others_doc_name = response.data.data.others_doc_name;
        this.insertdata.others_ref_name = response.data.data.others_ref_name;
        this.insertdata.others_nationality = response.data.data.others_nationality;
        this.insertdata.others_issue_date = response.data.data.others_issue_date;
        this.insertdata.others_expire_date = response.data.data.others_expire_date;
        this.insertdata.others_eligb_review_date = response.data.data.others_eligb_review_date;
        this.insertdata.others_visa_sts = response.data.data.others_visa_sts;
        this.insertdata.others_remarks = response.data.data.others_remarks;
        //Pay
        this.insertdata.pay_group = response.data.data.pay_group;
        this.insertdata.pay_annual_pay = response.data.data.pay_annual_pay;
        this.insertdata.pay_wedges_pay_mode = response.data.data.pay_wedges_pay_mode;
        this.insertdata.pay_payment_type = response.data.data.pay_payment_type;
        this.insertdata.pay_basic_daily_wedges = response.data.data.pay_basic_daily_wedges;
        this.insertdata.pay_min_working_hour = response.data.data.pay_min_working_hour;
        this.insertdata.pay_tax_code = response.data.data.pay_tax_code;
        this.insertdata.pay_tax_ref = response.data.data.pay_tax_ref;
        this.insertdata.pay_percentage = response.data.data.pay_percentage;
        this.insertdata.pay_payment_mode = response.data.data.pay_payment_mode;
        this.insertdata.pay_bank_name = response.data.data.pay_bank_name;
        this.insertdata.pay_branch_name = response.data.data.pay_branch_name;
        this.insertdata.pay_account_no = response.data.data.pay_account_no;
        this.insertdata.pay_sort_code = response.data.data.pay_sort_code;
        this.insertdata.pay_remarks = response.data.data.pay_remarks;
        //Payment
        this.insertdata.payment_da = response.data.data.payment_da === 'true' ? response.data.data.payment_da : "";
        this.insertdata.payment_hra = response.data.data.payment_hra === 'true' ? response.data.data.payment_hra : "";
        this.insertdata.payment_conven_ta = response.data.data.payment_conven_ta === 'true' ? response.data.data.payment_conven_ta : "";
        this.insertdata.payment_perfomance = response.data.data.payment_perfomance === 'true' ? response.data.data.payment_perfomance : "";
        this.insertdata.payment_monthly_al = response.data.data.payment_monthly_al === 'true' ? response.data.data.payment_monthly_al : "";
        //NI
        this.insertdata.ni_dedu_da = response.data.data.ni_dedu_da === 'true' ? response.data.data.ni_dedu_da : "";
        this.insertdata.ni_dedu_perfomance = response.data.data.ni_dedu_perfomance === 'true' ? response.data.data.ni_dedu_perfomance : "";
        this.insertdata.ni_dedu_conven_ta = response.data.data.ni_dedu_conven_ta === 'true' ? response.data.data.ni_dedu_conven_ta : "";
        this.insertdata.ni_dedu_hra = response.data.data.ni_dedu_hra === 'true' ? response.data.data.ni_dedu_hra : "";
        this.insertdata.ni_dedu_monthly_al = response.data.data.ni_dedu_monthly_al === 'true' ? response.data.data.ni_dedu_monthly_al : "";
        //END
        console.log("type_of_doc:" + response.data.other_upload_documents);
        // $('#show_profile_image').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + response.data.image + '" />');
        if (response.data.image !== "") {
          external_jquery_default()('#show_profile_image').append(`<a target='_blank' href='${response.data.image}'>Show Picture</a>`);
        }
        if (response.data.type_of_doc !== "") {
          external_jquery_default()('#show_type_of_doc').append(`<a target='_blank' href='${response.data.type_of_doc}'>Show docs</a>`);
        }
        if (response.data.passport_upload_docs !== "") {
          external_jquery_default()('#show_passport_upload_docs').append(`<a target='_blank' href='${response.data.passport_upload_docs}'>Show docs</a>`);
        }
        if (response.data.visa_upload_documents !== "") {
          external_jquery_default()('#show_visa_upload_documents').append(`<a target='_blank' href='${response.data.visa_upload_documents}'>Show docs</a>`);
        }
        if (response.data.euss_upload_documents !== "") {
          external_jquery_default()('#show_euss_upload_documents').append(`<a target='_blank' href='${response.data.euss_upload_documents}'>Show docs</a>`);
        }
        if (response.data.nid_upload_documents !== "") {
          external_jquery_default()('#show_nid_upload_documents').append(`<a target='_blank' href='${response.data.nid_upload_documents}'>Show docs</a>`);
        }
        if (response.data.other_upload_documents !== "") {
          external_jquery_default()('#show_other_upload_documents').append(`<a target='_blank' href='${response.data.other_upload_documents}'>Show docs</a>`);
        }
        //END
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
// CONCATENATED MODULE: ./pages/employee/change-of-circumstances-add.vue?vue&type=script&lang=js
 /* harmony default export */ var employee_change_of_circumstances_addvue_type_script_lang_js = (change_of_circumstances_addvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/employee/change-of-circumstances-add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_change_of_circumstances_addvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "49fc453f"
  
)

/* harmony default export */ var change_of_circumstances_add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=change-of-circumstances-add.js.map