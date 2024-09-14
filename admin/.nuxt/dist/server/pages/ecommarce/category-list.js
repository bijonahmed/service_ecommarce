exports.ids = [28,3];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_75f09aba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_75f09aba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_75f09aba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_75f09aba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_75f09aba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul li[data-v-75f09aba]:hover{background-color:#f0f0f0;cursor:pointer}ul li:hover .bx-edit[data-v-75f09aba]{color:#007bff}button[data-v-75f09aba]:disabled{background-color:#d3d3d3;border-color:#d3d3d3}.cmdal[data-v-75f09aba]{background-color:rgba(0,0,0,.4);display:none;height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:999}.cmdal.showConfirmation[data-v-75f09aba]{display:block}.cmdal-dialog[data-v-75f09aba]{margin:auto;width:60%}.cmdal-content[data-v-75f09aba]{background-color:#fefefe;border:1px solid #888;border-radius:10px;margin:15% auto;padding:20px;width:300px}.cmdal-header[data-v-75f09aba]{border-bottom:1px solid #dee2e6;border-radius:5px 5px 0 0;display:flex;justify-content:space-between;padding:10px 16px}.cmdal-header h4[data-v-75f09aba]{font-size:20px;margin:0}.cmdal-body[data-v-75f09aba],.cmdal-footer[data-v-75f09aba]{padding:10px 16px;text-align:center}.cmdal-footer[data-v-75f09aba]{background-color:#f5f5f5;border-radius:0 0 5px 5px;border-top:1px solid #dee2e6}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TreeView.vue?vue&type=template&id=3dc9a480
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li>", "</li>", [_vm._ssrNode(_vm._ssrEscape("\n    " + _vm._s(category.name) + " ") + "<span><i class=\"bx bx-edit\"></i></span> "), category.children && category.children.length > 0 ? _c('TreeView', {
      attrs: {
        "categories": category.children
      }
    }) : _vm._e()], 2);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TreeView.vue?vue&type=template&id=3dc9a480

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TreeView.vue?vue&type=script&lang=js
/* harmony default export */ var TreeViewvue_type_script_lang_js = ({
  props: {
    categories: Array
  },
  methods: {
    editCategory(id) {
      this.$router.push({
        path: '/ecommarce/category-edit',
        // Specify the path to the target page
        query: {
          id
        } // Pass the parameter as a query parameter
      });
    },

    async fetchData() {
      $(".customerSpinner").show();
      try {
        const response = await this.$axios.get(`/category/getCategoryList`);
        this.categories = response.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/TreeView.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TreeViewvue_type_script_lang_js = (TreeViewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TreeView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TreeViewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8ce7631a"
  
)

/* harmony default export */ var TreeView = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TreeView: __webpack_require__(36).default})


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ecommarce/category-list.vue?vue&type=template&id=75f09aba&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"page-content\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"ps-3\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\" data-v-75f09aba>", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\" data-v-75f09aba>", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-75f09aba>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-75f09aba>Category List</li>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ms-auto\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"btn-group mb-3\" data-v-75f09aba>", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/ecommarce/category-add"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary",
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "bx bx-plus"
  }), _vm._v("New")])]), _vm._ssrNode(" <button type=\"button\" class=\"btn btn-primary\" data-v-75f09aba><i class=\"lni lni-search\" data-v-75f09aba></i></button>")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"customerSpinner\" style=\"display: none;\" data-v-75f09aba><div class=\"d-flex justify-content-center\" data-v-75f09aba><div role=\"status\" class=\"spinner-border\" data-v-75f09aba><span class=\"visually-hidden\" data-v-75f09aba>Loading...</span></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<ul role=\"tablist\" class=\"nav nav-tabs nav-primary\" data-v-75f09aba><li role=\"presentation\" class=\"nav-item\" data-v-75f09aba><a data-bs-toggle=\"tab\" href=\"#primaryhome\" role=\"tab\" aria-selected=\"true\" class=\"nav-link active\" data-v-75f09aba><div class=\"d-flex align-items-center\" data-v-75f09aba><div class=\"tab-icon\" data-v-75f09aba><i class=\"bx bx-link font-18 me-1\" data-v-75f09aba></i></div> <div class=\"tab-title\" data-v-75f09aba>Active List</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-75f09aba><a data-bs-toggle=\"tab\" href=\"#primaryprofile\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-75f09aba><div class=\"d-flex align-items-center\" data-v-75f09aba><div class=\"tab-icon\" data-v-75f09aba><i class=\"bx bx-link font-18 me-1\" data-v-75f09aba></i></div> <div class=\"tab-title\" data-v-75f09aba>Inactive List</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-75f09aba><a data-bs-toggle=\"tab\" href=\"#commissionlist\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-75f09aba><div class=\"d-flex align-items-center\" data-v-75f09aba><div class=\"tab-icon\" data-v-75f09aba><i class=\"bx bx-link font-18 me-1\" data-v-75f09aba></i></div> <div class=\"tab-title\" data-v-75f09aba>Commission List</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-75f09aba><a data-bs-toggle=\"tab\" href=\"#productsliders\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-75f09aba><div class=\"d-flex align-items-center\" data-v-75f09aba><div class=\"tab-icon\" data-v-75f09aba><i class=\"bx bx-link font-18 me-1\" data-v-75f09aba></i></div> <div class=\"tab-title\" data-v-75f09aba>Products Slider(For Home Page)</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-75f09aba><a data-bs-toggle=\"tab\" href=\"#SpeacilCat\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-75f09aba><div class=\"d-flex align-items-center\" data-v-75f09aba><div class=\"tab-icon\" data-v-75f09aba><i class=\"bx bx-link font-18 me-1\" data-v-75f09aba></i></div> <div class=\"tab-title\" data-v-75f09aba>Speacial Category(For Home)</div></div></a></li></ul> "), _vm._ssrNode("<div class=\"tab-content\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div id=\"primaryhome\" role=\"tabpanel\" class=\"tab-pane fade show active\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<ul data-v-75f09aba>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li data-v-75f09aba>", "</li>", [_vm._ssrNode("<span class=\"badge bg-dark\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(category.name) + " ") + "<span data-v-75f09aba><i class=\"bx bx-edit\" data-v-75f09aba></i></span></span> " + (category.commission !== null ? "<span style=\"font-size: 20px;font-weight: bold; color:#db0f0f;\" data-v-75f09aba>" + _vm._ssrEscape("[" + _vm._s(category.commission) + "%]") + "</span>" : "<!---->") + " "), category.children && category.children.length > 0 ? _c('TreeView', {
      attrs: {
        "categories": category.children
      }
    }) : _vm._e()], 2);
  }), 0)]), _vm._ssrNode(" <div id=\"primaryprofile\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-75f09aba><ul data-v-75f09aba>" + _vm._ssrList(_vm.Inacategories, function (category) {
    return "<li data-v-75f09aba><span class=\"badge bg-danger\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(category.name) + " ") + "<span data-v-75f09aba><i class=\"bx bx-edit\" data-v-75f09aba></i></span></span></li>";
  }) + "</ul></div> <div id=\"commissionlist\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-75f09aba>" + _vm._ssrList(_vm.categories, function (category) {
    return "<ul data-v-75f09aba>" + (category.commission !== null ? "<li data-v-75f09aba><span style=\"font-size: 15px;\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(category.name) + " [" + _vm._s(category.commission) + "%]") + "</span> <span data-v-75f09aba><i class=\"bx bx-edit\" data-v-75f09aba></i></span></li>" : "<!---->") + "</ul>";
  }) + "</div> "), _vm._ssrNode("<div id=\"productsliders\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"card\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-75f09aba>", "</div>", [_c('center', [_vm._v("This configration only for home pages category sliders")]), _vm._ssrNode(" <p class=\"text-center\" style=\"color: gray;\" data-v-75f09aba>You can select maximum 4\n                                                category slider</p> <hr data-v-75f09aba> "), _vm._ssrNode("<div class=\"row\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"col-md-8\" data-v-75f09aba><table class=\"table table-responsive table-hover\" data-v-75f09aba><thead data-v-75f09aba><tr data-v-75f09aba><th data-v-75f09aba>Name</th> <th data-v-75f09aba>Status</th> <th data-v-75f09aba>Action</th></tr></thead> <tbody data-v-75f09aba>" + _vm._ssrList(_vm.productCat, function (productCats) {
    return "<tr data-v-75f09aba><td data-v-75f09aba>" + _vm._ssrEscape(_vm._s(productCats.name)) + "</td> <td data-v-75f09aba>" + (productCats.status == 1 ? "<span class=\"badge bg-success-light\" data-v-75f09aba>Active</span>" : "<span class=\"btn bg-danger-light\" data-v-75f09aba>Inactive</span>") + "</td> <td data-v-75f09aba><button class=\"btn bg-danger-light btn\" data-v-75f09aba>DEL</button></td></tr>";
  }) + "</tbody></table></div> "), _vm._ssrNode("<div class=\"col-md-4\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-75f09aba>", "</form>", [_vm._ssrNode("<div class=\"mb-3\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<label for=\"category\" class=\"form-label\" data-v-75f09aba>Select\n                                                                Category</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sliderInsert.select_category_id,
      expression: "sliderInsert.select_category_id"
    }],
    staticClass: "form-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.sliderInsert, "select_category_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected"
    }
  }, [_vm._v("Select a category\n                                                                ")]), _vm._v(" "), _vm._l(_vm.subcategories, function (category) {
    return _c('option', {
      key: category.id,
      domProps: {
        "value": category.id
      }
    }, [_vm._v("\n                                                                    " + _vm._s(category.name) + "\n                                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.category_id ? "<span class=\"text-danger\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(_vm.errors.category_id[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<label for=\"product\" class=\"form-label\" data-v-75f09aba>Status</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sliderInsert.status,
      expression: "sliderInsert.status"
    }],
    staticClass: "form-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.sliderInsert, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])]), _vm._ssrNode(" " + (_vm.errors.status ? "<span class=\"text-danger\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(_vm.errors.status[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.productCat.length == 4) + " class=\"btn btn-primary w-100\" data-v-75f09aba>Submit</button> <p" + _vm._ssrClass("text-danger", {
    'd-block': _vm.productCat.length === 4,
    'd-none': _vm.productCat.length !== 4
  }) + " style=\"font-size: 12px;\" data-v-75f09aba>\n                                                            You reach maximum number of slider</p>")], 2)])], 2)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"SpeacilCat\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"card\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-75f09aba>", "</div>", [_c('center', [_vm._v("This is Speacial Category For Home Page ")]), _vm._ssrNode(" <p class=\"text-center\" style=\"color: gray;\" data-v-75f09aba>You can select maximum 12\n                                                categories</p> <hr data-v-75f09aba> "), _vm._ssrNode("<div class=\"row\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<div class=\"col-md-8\" data-v-75f09aba><table class=\"table table-responsive table-hover\" data-v-75f09aba><thead data-v-75f09aba><tr data-v-75f09aba><th data-v-75f09aba>Name</th> <th data-v-75f09aba>image</th> <th data-v-75f09aba>Status</th></tr></thead> <tbody data-v-75f09aba>" + _vm._ssrList(_vm.speacialCat, function (productCats) {
    return "<tr data-v-75f09aba><td data-v-75f09aba>" + _vm._ssrEscape(_vm._s(productCats.name)) + "</td> <td data-v-75f09aba><img" + _vm._ssrAttr("src", productCats.image) + " alt=\"cat img\" class=\"img-fluid\" style=\"height: 40px;\" data-v-75f09aba></td> <td data-v-75f09aba>" + (productCats.speacial_status === 1 ? "<span class=\"badge bg-success-light\" data-v-75f09aba>Speacial</span>" : "<span class=\"badge bg-danger\" data-v-75f09aba>Normal</span>") + "</td> <td data-v-75f09aba><button class=\"btn btn-warning bg-history-light\" data-v-75f09aba>Edit</button></td></tr>";
  }) + "</tbody></table></div> "), _vm._ssrNode("<div class=\"col-md-4\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample submitForm\" data-v-75f09aba>", "</form>", [_vm._ssrNode("<div class=\"mb-3\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<label for=\"category\" class=\"form-label\" data-v-75f09aba>Select\n                                                                Category</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.speacilCatInsert.speacialCat_id,
      expression: "speacilCatInsert.speacialCat_id"
    }],
    staticClass: "form-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.speacilCatInsert, "speacialCat_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected"
    }
  }, [_vm._v("Select a category\n                                                                ")]), _vm._v(" "), _vm._l(_vm.speacialCat, function (category) {
    return _c('option', {
      key: category.id,
      domProps: {
        "value": category.id
      }
    }, [_vm._v("\n                                                                    " + _vm._s(category.name) + "\n                                                                ")]);
  })], 2), _vm._ssrNode(" " + (_vm.errors.category_id ? "<span class=\"text-danger\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(_vm.errors.category_id[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"mb-3\" data-v-75f09aba><img" + _vm._ssrAttr("src", _vm.images_ ? _vm.images_ : '/images/cat(1).jpg') + " height=\"80px\" alt=\"cat image\" accept=\"image/png, image/jpeg, image/jpg, image/webp, image/gif\" class=\"shadow rounded-2 mb-1\" data-v-75f09aba> <br data-v-75f09aba> <label for=\"product\" class=\"form-label\" data-v-75f09aba>Category\n                                                                Image <span class=\"text-danger\" data-v-75f09aba>(300x240)*</span></label> <input type=\"file\" class=\"form-control\" data-v-75f09aba> " + (_vm.errors.status ? "<span class=\"text-danger\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(_vm.errors.file[0])) + "</span>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"mb-3\" data-v-75f09aba>", "</div>", [_vm._ssrNode("<label for=\"product\" class=\"form-label\" data-v-75f09aba>Speacial\n                                                                Status</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.speacilCatInsert.speacial_status,
      expression: "speacilCatInsert.speacial_status"
    }],
    staticClass: "form-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.speacilCatInsert, "speacial_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": ""
    }
  }, [_vm._v("Select status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1",
      "disabled": _vm.count == 12
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])]), _vm._ssrNode(" " + (_vm.errors.status ? "<span class=\"text-danger\" data-v-75f09aba>" + _vm._ssrEscape(_vm._s(_vm.errors.speacial_status[0])) + "</span>" : "<!---->"))], 2), _vm._ssrNode(" <button type=\"submit\" class=\"btn btn-primary w-100\" data-v-75f09aba>Submit</button> <p" + _vm._ssrClass("text-danger", {
    'd-block': _vm.count === 12,
    'd-none': _vm.count !== 12
  }) + " style=\"font-size: 12px;\" data-v-75f09aba>\n                                                            You reach maximum number of Speacial Categories</p>")], 2)])], 2)], 2)])])], 2)], 2)])], 2)])], 2)]), _vm._ssrNode(" <div" + _vm._ssrClass("cmdal", {
    'show': _vm.showConfirmation
  }) + " data-v-75f09aba><div class=\"cmdal-dialog\" data-v-75f09aba><div class=\"cmdal-content\" data-v-75f09aba><div class=\"cmdal-header\" data-v-75f09aba><h4 class=\"cmdal-title\" data-v-75f09aba>Confirmation</h4> <button type=\"button\" class=\"btn-close\" data-v-75f09aba></button></div> <div class=\"cmdal-body\" data-v-75f09aba>\n                    Are you sure you want to remove this slider?\n                </div> <div class=\"cmdal-footer\" data-v-75f09aba><button type=\"button\" class=\"btn btn-secondary\" data-v-75f09aba>Cancel</button> <button type=\"button\" class=\"btn btn-danger\" data-v-75f09aba>Remove</button></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ecommarce/category-list.vue?vue&type=template&id=75f09aba&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ecommarce/category-list.vue?vue&type=script&lang=js
var category_listvue_type_script_lang_js = __webpack_require__(37);

// CONCATENATED MODULE: ./pages/ecommarce/category-list.vue?vue&type=script&lang=js
 /* harmony default export */ var ecommarce_category_listvue_type_script_lang_js = (category_listvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ecommarce/category-list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ecommarce_category_listvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75f09aba",
  "39221747"
  
)

/* harmony default export */ var category_list = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TreeView: __webpack_require__(36).default})


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  head: {
    title: 'Category List'
  },
  data() {
    return {
      insertdata: {
        id: '',
        name: '',
        status: ''
      },
      sliderInsert: {
        id: '',
        select_category_id: '',
        status: ""
      },
      speacilCatInsert: {
        speacialCat_id: '',
        speacial_status: '0',
        file: ''
      },
      notifmsg: '',
      errors: {},
      data: [],
      categories: [],
      Inacategories: [],
      productCat: [],
      subcategories: [],
      showConfirmation: false,
      categoryIdToDelete: null,
      speacialCat: [],
      images_: '',
      catImg: [],
      count: ''
    };
  },
  async mounted() {
    await this.fetchData();
    await this.fetchInacCatData();
    await this.fetchProducsCategoryData();
    await this.fetchSpeacialCat();
  },
  computed: {},
  methods: {
    editSPCat(productCats) {
      this.speacilCatInsert.speacialCat_id = productCats.id;
      this.speacilCatInsert.file = productCats.image;
      this.speacilCatInsert.speacial_status = productCats.speacial_status;
      // console.log(id);
      // this.$axios.post('/category/speacialCatEdit', { id: id })
      //     .then(response => {
      //         console.log(response.data);
      //     })
    },

    onFileSelected() {
      this.file = this.$refs.file.files[0];
      this.images_ = URL.createObjectURL(this.file);
    },
    insertSpeacialCat() {
      const formData = new FormData();
      formData.append('category_id', this.speacilCatInsert.speacialCat_id);
      formData.append('image', this.file);
      formData.append('speacial_status', this.speacilCatInsert.speacial_status);
      // console.log(formData);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/category/speacialCatSave', formData, {
        headers
      }).then(response => {
        this.images_ = response.data.images;
        this.fetchSpeacialCat();
        this.success_noti();
        this.speacilCatInsert.speacial_status = '';
      }).catch(error => {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors;
          Lobibox.notify('error', {
            pauseDelayOnHover: true,
            continueDelayOnInactiveTab: false,
            position: 'top right',
            icon: 'bx bx-check-circle',
            msg: error.response.data.errors
          });
        }
      });
    },
    removeProSliderCat(id) {
      // Set the category ID to delete and show the confirmation cmdal
      this.categoryIdToDelete = id;
      this.showConfirmation = true;
      $(".cmdal").fadeIn();
    },
    confirmDelete() {
      this.$axios.get(`/category/removeProctCategory`, {
        params: {
          id: this.categoryIdToDelete
        }
      }).then(response => {
        this.fetchProducsCategoryData();
        this.showConfirmation = false;
      });
      $(".cmdal").fadeOut();
    },
    cancelDelete() {
      // Cancel deletion and hide the confirmation cmdal
      this.showConfirmation = false;
      $(".cmdal").fadeOut();
    },
    insertCategoryProSlider() {
      const formData = new FormData();
      formData.append('category_id', this.sliderInsert.select_category_id);
      formData.append('status', this.sliderInsert.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/category/categoryProSlidersave', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.fetchProducsCategoryData();
        //    this.$router.push('/ecommarce/category-list');
      }).catch(error => {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors;
          Lobibox.notify('error', {
            pauseDelayOnHover: true,
            continueDelayOnInactiveTab: false,
            position: 'top right',
            icon: 'bx bx-check-circle',
            msg: error.response.data.errors
          });
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
    },
    editCategory(id) {
      this.$router.push({
        path: '/ecommarce/category-edit',
        // Specify the path to the target page
        query: {
          id
        } // Pass the parameter as a query parameter
      });
    },

    async fetchData() {
      $(".customerSpinner").show();
      try {
        const response = await this.$axios.get(`/category/getCategoryList`);
        this.categories = response.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSpeacialCat() {
      try {
        const response = await this.$axios.get(`/category/getSpeacialCategoryList`);
        this.speacialCat = response.data.data;
        this.count = response.data.count;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchInacCatData() {
      $(".customerSpinner").show();
      try {
        const response = await this.$axios.get(`/category/getInacCategoryList`);
        this.Inacategories = response.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProducsCategoryData() {
      $(".customerSpinner").show();
      try {
        const response = await this.$axios.get(`/category/getProductCategoryList`);
        this.productCat = response.data.category;
        this.subcategories = response.data.subcategories;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)["URL"]))

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("3d986c8e", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=category-list.js.map