exports.ids = [119];
exports.modules = {

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/task/add-task.vue?vue&type=template&id=751313eb
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
      "to": "/task/task-list"
    }
  }, [_vm._v("Task List")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">New Task</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\"><label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Title</label> <div class=\"col-sm-9\"><input type=\"text\" id=\"title\" placeholder=\"Title\"" + _vm._ssrAttr("value", _vm.insertdata.title) + " class=\"form-control title\"> " + (_vm.errors.title ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.title[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Description</label> <div class=\"col-sm-9\"><textarea id=\"description\" placeholder=\"Description..\" class=\"form-control description\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.description)) + "</textarea> " + (_vm.errors.description ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.description[0])) + "</span>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Project</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.project_id,
      expression: "insertdata.project_id"
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
        _vm.$set(_vm.insertdata, "project_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.pro, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.project_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.project_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">Employee</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.emp_id,
      expression: "insertdata.emp_id"
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
        _vm.$set(_vm.insertdata, "emp_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.emp, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.emp_id ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.emp_id[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row mb-3\"><label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Start Date</label> <div class=\"col-sm-9\"><input type=\"date\" id=\"start_date\" placeholder=\"Start  Date\"" + _vm._ssrAttr("value", _vm.insertdata.start_date) + " class=\"form-control start_date\"> " + (_vm.errors.start_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.start_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputPhoneNo2\" class=\"col-sm-3 col-form-label\">End Date </label> <div class=\"col-sm-9\"><input type=\"date\" id=\"end_date\" placeholder=\"End  Date\"" + _vm._ssrAttr("value", _vm.insertdata.end_date) + " class=\"form-control age\"> " + (_vm.errors.end_date ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.end_date[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><label for=\"inputEmailAddress2\" class=\"col-sm-3 col-form-label\">File</label> <div class=\"col-sm-9\"><input type=\"file\" id=\"file\" name=\"file\" class=\"form-control\"></div></div> "), _vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
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
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Processing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Done")])]), _vm._ssrNode(" " + (_vm.errors.status ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.status[0])) + "</span>" : "<!---->"))], 2)], 2), _vm._ssrNode(" <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Send</button></div></div>")], 2)])])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/task/add-task.vue?vue&type=template&id=751313eb

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/task/add-task.vue?vue&type=script&lang=js
/* harmony default export */ var add_taskvue_type_script_lang_js = ({
  head: {
    title: 'Task Add'
  },
  data() {
    return {
      insertdata: {
        id: '',
        title: '',
        description: '',
        project_id: '',
        emp_id: '',
        start_date: '',
        end_date: '',
        status: ''
      },
      notifmsg: '',
      emp: [],
      pro: [],
      errors: {}
    };
  },
  created() {
    this.employee();
    this.projects();
  },
  methods: {
    onFileSelected() {
      this.file = this.$refs.file.files[0];
    },
    saveData() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('id', this.insertdata.id);
      formData.append('title', this.insertdata.title);
      formData.append('description', this.insertdata.description);
      formData.append('project_id', this.insertdata.project_id);
      formData.append('emp_id', this.insertdata.emp_id);
      formData.append('start_date', this.insertdata.start_date);
      formData.append('end_date', this.insertdata.end_date);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/project/saveTask', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/task/task-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    employee() {
      this.$axios.get(`/user/getEmployeeList`).then(response => {
        this.emp = response.data.data;
      });
    },
    projects() {
      this.$axios.get(`/project/allProject`).then(response => {
        this.pro = response.data.data;
      });
    },
    success_noti() {
      Lobibox.notify('success', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bx bx-check-circle',
        msg: 'Your data has been successfully create task.'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/task/add-task.vue?vue&type=script&lang=js
 /* harmony default export */ var task_add_taskvue_type_script_lang_js = (add_taskvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/task/add-task.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  task_add_taskvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c5e2c20c"
  
)

/* harmony default export */ var add_task = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add-task.js.map