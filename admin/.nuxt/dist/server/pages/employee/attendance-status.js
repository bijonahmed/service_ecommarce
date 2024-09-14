exports.ids = [35];
exports.modules = {

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/attendance-status.vue?vue&type=template&id=722f8332
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
  })])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Attendance Status </li>")], 2)])])]), _vm._ssrNode(" <div class=\"row\"><div class=\"col-xl-12 mx-auto\"><div class=\"card border-top border-0 border-4 border-info\"><div class=\"card-body\"><div class=\"border p-4 rounded\"><form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">From Date</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"from_date\"" + _vm._ssrAttr("value", _vm.insertdata.from_date) + " class=\"form-control from_date\"> " + (_vm.errors.from_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.from_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">To Date</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"to_date\"" + _vm._ssrAttr("value", _vm.insertdata.to_date) + " class=\"form-control to_date\"> " + (_vm.errors.to_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.to_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Find</button></div></div></form> <hr> <div class=\"table-responsive\"><table id=\"basic-datatables\" class=\"display table table-striped table-hover\"><thead><tr><th>Sl No.</th> <th>Date</th> <th>Clock In</th> <th>Clock In Location</th> <th>Clock Out</th> <th>Clock Out Location</th> <th>Duty Hours</th></tr></thead> <tbody></tbody></table></div></div></div></div></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/employee/attendance-status.vue?vue&type=template&id=722f8332

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/attendance-status.vue?vue&type=script&lang=js
/* harmony default export */ var attendance_statusvue_type_script_lang_js = ({
  head: {
    title: 'Add New  Duty Roster '
  },
  data() {
    return {
      insertdata: {
        id: '',
        department_id: '',
        designation_id: '',
        shift_id: '',
        from_date: '',
        to_date: '',
        status: 1
      },
      errors: {},
      dept: [],
      sCode: [],
      desig: []
    };
  },
  created() {
    this.department();
    this.designation();
    this.shiftcode();
  },
  methods: {
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('department_id', this.insertdata.department_id);
      formData.append('designation_id', this.insertdata.designation_id);
      formData.append('shift_id', this.insertdata.shift_id);
      formData.append('from_date', this.insertdata.from_date);
      formData.append('to_date', this.insertdata.to_date);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/rota/createEditDutyRoster', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/rota/duty-roster-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    department() {
      this.$axios.get('/user/getDepartmentList').then(response => {
        this.dept = response.data.data;
      });
    },
    designation() {
      this.$axios.get('/user/getDesignationList').then(response => {
        this.desig = response.data.data;
      });
    },
    shiftcode() {
      this.$axios.get('/rota/allShiftInfo').then(response => {
        this.sCode = response.data.data;
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
// CONCATENATED MODULE: ./pages/employee/attendance-status.vue?vue&type=script&lang=js
 /* harmony default export */ var employee_attendance_statusvue_type_script_lang_js = (attendance_statusvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/employee/attendance-status.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_attendance_statusvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bdb5474"
  
)

/* harmony default export */ var attendance_status = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=attendance-status.js.map