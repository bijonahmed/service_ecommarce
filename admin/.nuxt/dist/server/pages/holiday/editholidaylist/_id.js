exports.ids = [55];
exports.modules = {

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/holiday/editholidaylist/_id.vue?vue&type=template&id=9077573c
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
      "to": "/holiday/holiday-list"
    }
  }, [_vm._v("Holiday List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Edit Holiday</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">From Date </label> <div class=\"col-sm-9\"><input type=\"hidden\" id=\"id\"" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control id\"> <input type=\"date\" id=\"frm_date\"" + _vm._ssrAttr("value", _vm.insertdata.frm_date) + " class=\"form-control frm_date\"> " + (_vm.errors.frm_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.frm_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">To Date</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"to_date\"" + _vm._ssrAttr("value", _vm.insertdata.to_date) + " class=\"form-control to_date\"> " + (_vm.errors.to_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.to_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">No. of Days</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"no_of_days\"" + _vm._ssrAttr("value", _vm.insertdata.no_of_days) + " class=\"form-control no_of_days\"> " + (_vm.errors.no_of_days ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.no_of_days[0])) + "</span>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Day</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.day,
      expression: "insertdata.day"
    }],
    staticClass: "form-select day",
    attrs: {
      "name": "day"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "day", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Selec")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Sunday"
    }
  }, [_vm._v("Sunday")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Monday"
    }
  }, [_vm._v("Monday")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Tuesday"
    }
  }, [_vm._v("Tuesday")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Wednesday"
    }
  }, [_vm._v("Wednesday")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Thrusday"
    }
  }, [_vm._v("Thursday")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Friday"
    }
  }, [_vm._v("Friday")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Saturday"
    }
  }, [_vm._v("Saturday")])]), _vm._ssrNode(" " + (_vm.errors.day ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.day[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEmailAddress2\" class=\"col-sm-3 col-form-label\">Holiday Type</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.holiday_type_id,
      expression: "insertdata.holiday_type_id"
    }],
    staticClass: "form-select holiday_type_id",
    attrs: {
      "name": "holiday_type_id"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "holiday_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.holidaytype, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.holiday_type_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.holiday_type_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Holiday Description</label> <div class=\"col-sm-9\"><textarea type=\"text\" id=\"holiday_description\" placeholder=\"Holiday Description\" class=\"form-control holiday_description\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.holiday_description)) + "</textarea></div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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

// CONCATENATED MODULE: ./pages/holiday/editholidaylist/_id.vue?vue&type=template&id=9077573c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/holiday/editholidaylist/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Holiday List Edit'
  },
  data() {
    return {
      insertdata: {
        id: '',
        frm_date: '',
        to_date: '',
        no_of_days: '',
        day: '',
        holiday_type_id: '',
        holiday_description: '',
        status: 1
      },
      holidaytype: [],
      notifmsg: '',
      errors: {}
    };
  },
  created() {
    this.getData();
    this.getholidaylist();
  },
  methods: {
    calculateDateRange() {
      if (this.insertdata.frm_date && this.insertdata.to_date) {
        const start = new Date(this.insertdata.frm_date);
        const end = new Date(this.insertdata.to_date);
        const timeDiff = Math.abs(end - start);
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        console.log(days);
        this.insertdata.no_of_days = days;
      } else {
        this.insertdata.no_of_days = null;
      }
    },
    saveData() {
      const formData = new FormData();
      formData.append('id', this.insertdata.id);
      formData.append('frm_date', this.insertdata.frm_date);
      formData.append('to_date', this.insertdata.to_date);
      formData.append('no_of_days', this.insertdata.no_of_days);
      formData.append('day', this.insertdata.day);
      formData.append('holiday_type_id', this.insertdata.holiday_type_id);
      formData.append('holiday_description', this.insertdata.holiday_description);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/holiday/createEditHolidayList', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/holiday/holiday-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    getholidaylist() {
      this.$axios.get(`/holiday/getholidaylist`).then(response => {
        this.holidaytype = response.data.data;
      });
    },
    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/holiday/chkleadlistId/${id}`).then(response => {
        console.log(response.data.data.name);
        this.insertdata.id = response.data.data.id;
        this.insertdata.frm_date = response.data.data.frm_date;
        this.insertdata.to_date = response.data.data.to_date;
        this.insertdata.no_of_days = response.data.data.no_of_days;
        this.insertdata.day = response.data.data.day;
        this.insertdata.holiday_type_id = response.data.data.holiday_type_id;
        this.insertdata.holiday_description = response.data.data.holiday_description;
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
// CONCATENATED MODULE: ./pages/holiday/editholidaylist/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var editholidaylist_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/holiday/editholidaylist/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  editholidaylist_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f069bd8"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map