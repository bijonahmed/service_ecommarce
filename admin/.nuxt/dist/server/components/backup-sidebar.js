exports.ids = [1];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("294f8bd0", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackupSidebar_vue_vue_type_style_index_0_id_7af82a80_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackupSidebar_vue_vue_type_style_index_0_id_7af82a80_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackupSidebar_vue_vue_type_style_index_0_id_7af82a80_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackupSidebar_vue_vue_type_style_index_0_id_7af82a80_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackupSidebar_vue_vue_type_style_index_0_id_7af82a80_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sidebar-wrapper .metismenu a{align-items:center;border:1px solid hsla(0,0%,100%,0);color:#5f5f5f;display:flex;font-size:15px;justify-content:left;letter-spacing:.5px;outline-width:0;overflow:hidden;padding:1px;position:relative;text-overflow:ellipsis;transition:all .3s ease-out;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BackupSidebar.vue?vue&type=template&id=7af82a80
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sidebar-wrapper",
    attrs: {
      "data-simplebar": "true"
    }
  }, [_vm._ssrNode("<div class=\"sidebar-header\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('h4', {
    staticClass: "logo-text"
  }, [_c('img', {
    attrs: {
      "src": "/images/logo-img.png",
      "alt": "logo icon"
    }
  })])])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<ul id=\"menu\" class=\"metismenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-circle"
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-title"
  }, [_vm._v("Dashboard")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/task/add-task",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-title"
  }, [_vm._v("Assign Task")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_1\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">Customer</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_1\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/lead/leadList"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Lead List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/lead/lead-add"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Lead")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/customer/customerList"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Customer List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/customer/newCustomer"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Customer")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_2\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">Appointment</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_2\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/appointment/appointment-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Appointment List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/appointment/appointment-add"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Appointment")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_3\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">Employee</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_3\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/department-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Department List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/department-add"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Department")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/designation-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Designation List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/designation-add"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Designation")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/employee-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Employee List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/employee-add"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Employee")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_4\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">User</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_4\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/role/role_list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Role List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/role/newrole"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Role")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user_list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("User List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/newUser"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add User")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_5\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">Task</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_5\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/project/project-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Project List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/project/new-project"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Project")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/task/task-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Task List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/task/add-task"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Task")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_6\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">Upload Documents</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_6\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/documents/documents-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Documents List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/documents/new-documents"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add Documents")])], 1)], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BackupSidebar.vue?vue&type=template&id=7af82a80

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BackupSidebar.vue?vue&type=script&lang=js
/* harmony default export */ var BackupSidebarvue_type_script_lang_js = ({
  methods: {
    toggleMenu() {
      this.$root.$emit("bv::toggle::collapse", "menu-collapse");
    }
  }
});
// CONCATENATED MODULE: ./components/BackupSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_BackupSidebarvue_type_script_lang_js = (BackupSidebarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BackupSidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BackupSidebarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38c8a44c"
  
)

/* harmony default export */ var BackupSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=backup-sidebar.js.map