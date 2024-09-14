exports.ids = [122];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("473b91fe", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_list_vue_vue_type_style_index_0_id_ef42f0a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_list_vue_vue_type_style_index_0_id_ef42f0a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_list_vue_vue_type_style_index_0_id_ef42f0a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_list_vue_vue_type_style_index_0_id_ef42f0a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_task_list_vue_vue_type_style_index_0_id_ef42f0a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagenation[data-v-ef42f0a4]{margin-top:10px}.pagination[data-v-ef42f0a4]{list-style:none;\r\n    /*! display: flex; */padding-left:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/task/task-list.vue?vue&type=template&id=ef42f0a4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"page-content\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"ps-3\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\" data-v-ef42f0a4>", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\" data-v-ef42f0a4>", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-ef42f0a4>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/hrm/dashboard"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-ef42f0a4>Task List</li>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ms-auto\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"btn-group\" data-v-ef42f0a4>", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/task/add-task"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "bx bx-plus"
  }), _vm._v("New")])])], 1)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"col-md-3\" data-v-ef42f0a4><div class=\"input-group mb-3\" data-v-ef42f0a4><input type=\"text\" placeholder=\"Title\"" + _vm._ssrAttr("value", _vm.searchQuery.name) + " class=\"form-control name\" data-v-ef42f0a4></div></div> "), _vm._ssrNode("<div class=\"col-md-2\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"input-group mb-3\" data-v-ef42f0a4>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery.status,
      expression: "searchQuery.status"
    }],
    staticClass: "form-select form-select-solid status",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.searchQuery, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleSearch]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-2\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"input-group mb-3\" data-v-ef42f0a4>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery.project_id,
      expression: "searchQuery.project_id"
    }],
    staticClass: "form-select",
    attrs: {
      "name": "department_id"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.searchQuery, "project_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleSearch]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-2\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div class=\"input-group mb-3\" data-v-ef42f0a4>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery.emp_id,
      expression: "searchQuery.emp_id"
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
        _vm.$set(_vm.searchQuery, "emp_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")])])])]), _vm._ssrNode(" <div class=\"col-md-2\" data-v-ef42f0a4><div class=\"input-group mb-3\" data-v-ef42f0a4><button type=\"button\" class=\"btn btn-primary w-100\" data-v-ef42f0a4>Search</button></div></div>")], 2), _vm._ssrNode(" <div class=\"customerSpinner\" style=\"display: none;\" data-v-ef42f0a4><div class=\"d-flex justify-content-center\" data-v-ef42f0a4><div role=\"status\" class=\"spinner-border\" data-v-ef42f0a4><span class=\"visually-hidden\" data-v-ef42f0a4>Loading...</span></div></div></div> "), _vm._ssrNode("<div class=\"table-responsive\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<table class=\"table table-hover table-sm\" data-v-ef42f0a4>", "</table>", [_vm._ssrNode("<thead data-v-ef42f0a4><tr data-v-ef42f0a4><th data-v-ef42f0a4>Title</th> <th data-v-ef42f0a4>Employee</th> <th data-v-ef42f0a4>Project</th> <th data-v-ef42f0a4>Assign Start Date</th> <th data-v-ef42f0a4>Assign End Date</th> <th data-v-ef42f0a4>Created By</th> <th class=\"text-center\" data-v-ef42f0a4>Status</th> <th class=\"text-center\" data-v-ef42f0a4>Action</th></tr></thead> "), _vm._ssrNode("<tbody data-v-ef42f0a4>", "</tbody>", _vm._l(_vm.paginatedData, function (item) {
    return _vm._ssrNode("<tr data-v-ef42f0a4>", "</tr>", [_vm._ssrNode("<td data-v-ef42f0a4>" + _vm._ssrEscape(_vm._s(item.title)) + "</td> <td data-v-ef42f0a4>" + _vm._ssrEscape(_vm._s(item.employeeName)) + "</td> <td data-v-ef42f0a4>" + _vm._ssrEscape(_vm._s(item.projectName)) + "</td> <td data-v-ef42f0a4>" + _vm._ssrEscape(_vm._s(item.start_date)) + "</td> <td data-v-ef42f0a4>" + _vm._ssrEscape(_vm._s(item.end_date)) + "</td> <td data-v-ef42f0a4>" + _vm._ssrEscape(_vm._s(item.createdBy)) + "</td> <td class=\"text-center\" data-v-ef42f0a4>" + (item.status == 1 ? "<span data-v-ef42f0a4> Pending </span>" : item.status == 2 ? "<span data-v-ef42f0a4> Processing </span>" : item.status == 3 ? "<span data-v-ef42f0a4> Done </span>" : "<span data-v-ef42f0a4> Nothing </span>") + "</td> "), _vm._ssrNode("<td data-v-ef42f0a4>", "</td>", [_c('center', [_c('nuxt-link', {
      attrs: {
        "to": {
          name: 'task-edit-id',
          params: {
            id: item.id
          }
        },
        "variant": "warning",
        "size": "sm"
      }
    }, [_c('i', {
      staticClass: "bx bx-edit"
    }), _vm._v("EDIT\r\n                                            ")])], 1)], 1)], 2);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagenation\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<div style=\"text-align: right;\" data-v-ef42f0a4>", "</div>", [_vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-primary btn-sm\" data-v-ef42f0a4>", "</button>", [_c('center', [_c('i', {
    staticClass: "lni lni-angle-double-left"
  })])], 1), _vm._ssrNode(" <span data-v-ef42f0a4>" + _vm._ssrEscape("Page " + _vm._s(_vm.currentPage) + " of " + _vm._s(_vm.totalPages)) + "</span> "), _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-primary btn-sm\" data-v-ef42f0a4>", "</button>", [_c('center', [_c('i', {
    staticClass: "lni lni-angle-double-right"
  })])], 1)], 2)])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/task/task-list.vue?vue&type=template&id=ef42f0a4&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(33);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/task/task-list.vue?vue&type=script&lang=js

/* harmony default export */ var task_listvue_type_script_lang_js = ({
  head: {
    title: 'Task List'
  },
  data() {
    return {
      notifmsg: '',
      errors: {},
      data: [],
      searchQuery: {
        title: '',
        project_id: '',
        emp_id: '',
        status: 1
      },
      emp: [],
      pro: [],
      searchQueryPhone: '',
      currentPage: 1,
      perPage: 10 // Number of items per page
    };
  },

  async mounted() {
    this.employee();
    this.projects();
    await this.fetchData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredData.length / this.perPage);
    },
    filteredData() {
      let result = this.data;
      if (this.searchQuery.title) {
        result = result.filter(item => item.title.toLowerCase().includes(this.searchQuery.title.toLowerCase()));
      }
      if (this.searchQuery.project_id) {
        result = result.filter(item => item.project_id == this.searchQuery.project_id);
      }
      if (this.searchQuery.emp_id) {
        result = result.filter(item => item.emp_id == this.searchQuery.emp_id);
      }
      if (this.searchQuery.status) {
        result = result.filter(item => item.status == this.searchQuery.status);
      }
      return result;
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      return external_lodash_default.a.slice(this.filteredData, startIndex, startIndex + this.perPage);
    }
  },
  methods: {
    async fetchData() {
      $(".customerSpinner").show();
      try {
        // let name = $(".name").val();
        // let status = $(".status").val();
        //const response = await this.$axios.get('/customer/allCustomers?name=' + name + '&status=' + status);  
        const response = await this.$axios.get(`/project/geTaskList`);
        this.data = response.data.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    },
    handleSearch() {
      this.currentPage = 1;
    },
    previousPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
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
        msg: 'Your data has been successfully inserted.'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/task/task-list.vue?vue&type=script&lang=js
 /* harmony default export */ var task_task_listvue_type_script_lang_js = (task_listvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/task/task-list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  task_task_listvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ef42f0a4",
  "46a40826"
  
)

/* harmony default export */ var task_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=task-list.js.map