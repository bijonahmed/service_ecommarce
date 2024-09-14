exports.ids = [30];
exports.modules = {

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_add_vue_vue_type_style_index_0_id_4a25a082_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_add_vue_vue_type_style_index_0_id_4a25a082_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_add_vue_vue_type_style_index_0_id_4a25a082_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_add_vue_vue_type_style_index_0_id_4a25a082_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_add_vue_vue_type_style_index_0_id_4a25a082_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".required-label[data-v-4a25a082]:after{color:red;content:\"\\2605\";margin-right:4px}.vat_[data-v-4a25a082]{display:none}ol[data-v-4a25a082],ul[data-v-4a25a082]{padding-left:0}ul[data-v-4a25a082]{list-style:none}.bgColor[data-v-4a25a082]{background-color:#c8c8c8;border-radius:2px;padding:1px}.img-fluid[data-v-4a25a082]{height:150px;width:300px}.img-fluids[data-v-4a25a082]{height:300px;margin-top:10px;width:300px}.multiselect[data-v-4a25a082]{font-family:Arial,sans-serif;position:relative;width:100%}.select-box[data-v-4a25a082]{cursor:pointer;padding:8px}.dropdown[data-v-4a25a082],.select-box[data-v-4a25a082]{background-color:#fff;border:1px solid #ccc}.dropdown[data-v-4a25a082]{border-top:none;max-height:400px;overflow-y:auto;position:absolute;top:100%;width:100%;z-index:1}label[data-v-4a25a082]{display:block;padding:5px}input[type=checkbox][data-v-4a25a082]{margin-right:8px}.widthtxtbox[data-v-4a25a082]{width:50px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Create a new file 'click-outside.js' in your 'directives' folder (or create one if it doesn't exist).

// directives/click-outside.js
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ecommarce/product-add.vue?vue&type=template&id=4a25a082&scoped=true&lang=en
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"page-content\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"ps-3\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\" data-v-4a25a082>", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\" data-v-4a25a082>", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-4a25a082>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li aria-current=\"page\" class=\"breadcrumb-item\" data-v-4a25a082>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/ecommarce/product-list"
    }
  }, [_vm._v("Product List ")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-4a25a082>New Product</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-4a25a082>", "</form>", [_vm._ssrNode("<div class=\"card-body\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<ul role=\"tablist\" class=\"nav nav-pills mb-3\" data-v-4a25a082><li role=\"presentation\" class=\"nav-item\" data-v-4a25a082><a data-bs-toggle=\"pill\" href=\"#primary-pills-home\" role=\"tab\" aria-selected=\"true\" class=\"nav-link active\" data-v-4a25a082><div class=\"d-flex align-items-center\" data-v-4a25a082><div class=\"tab-icon\" data-v-4a25a082><i class=\"bx bx-home font-18 me-1\" data-v-4a25a082></i></div> <div class=\"tab-title\" data-v-4a25a082>General</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-4a25a082><a data-bs-toggle=\"pill\" href=\"#primary-pills-profile\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-4a25a082><div class=\"d-flex align-items-center\" data-v-4a25a082><div class=\"tab-icon\" data-v-4a25a082><i class=\"bx bx-user-pin font-18 me-1\" data-v-4a25a082></i></div> <div class=\"tab-title\" data-v-4a25a082>Data</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-4a25a082><a data-bs-toggle=\"pill\" href=\"#primary-pills-contact\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-4a25a082><div class=\"d-flex align-items-center\" data-v-4a25a082><div class=\"tab-icon\" data-v-4a25a082><i class=\"bx bx-link font-18 me-1\" data-v-4a25a082></i></div> <div class=\"tab-title\" data-v-4a25a082>Categories</div></div></a></li> <li role=\"presentation\" class=\"nav-item\" data-v-4a25a082><a data-bs-toggle=\"pill\" href=\"#image\" role=\"tab\" aria-selected=\"false\" class=\"nav-link\" data-v-4a25a082><div class=\"d-flex align-items-center\" data-v-4a25a082><div class=\"tab-icon\" data-v-4a25a082><i class=\"fadeIn animated bx bx-images font-18 me-1\" data-v-4a25a082></i></div> <div class=\"tab-title\" data-v-4a25a082>Images</div></div></a></li></ul> "), _vm._ssrNode("<div id=\"pills-tabContent\" class=\"tab-content\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div id=\"primary-pills-home\" role=\"tabpanel\" class=\"tab-pane fade show active\" data-v-4a25a082><div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-name-1\" class=\"col-sm-2 col-form-label required-label\" data-v-4a25a082>Product Name</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"text\" name=\"name\" placeholder=\"Product Name\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control\" data-v-4a25a082> <input type=\"hidden\" name=\"id\" id=\"id\" class=\"form-control\" data-v-4a25a082> " + (_vm.errors.name ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Meta Tag Title</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"text\" name=\"meta_title\" value placeholder=\"Meta Tag Title\" class=\"form-control\" data-v-4a25a082></div></div> <div class=\"row mb-3\" data-v-4a25a082><label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Meta Tag Description</label> <div class=\"col-sm-10\" data-v-4a25a082><textarea name=\"meta_description\" rows=\"5\" placeholder=\"Meta Tag Description\" id=\"meta_description\" class=\"form-control\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.insertdata.meta_description)) + "</textarea></div></div> <div class=\"row mb-3\" data-v-4a25a082><label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Meta Tag Keywords</label> <div class=\"col-sm-10\" data-v-4a25a082><textarea name=\"meta_keyword\" rows=\"5\" placeholder=\"Meta Tag Keywords\" class=\"form-control\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.insertdata.meta_keyword)) + "</textarea></div></div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Product Tags</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"text\" placeholder=\"Product Tags\"" + _vm._ssrAttr("value", _vm.insertdata.ptag) + " class=\"form-control\" data-v-4a25a082> <input type=\"hidden\" placeholder=\"Product Tags\"" + _vm._ssrAttr("value", _vm.insertdata.product_tag) + " class=\"form-control\" data-v-4a25a082>" + _vm._ssrEscape("\n                                                            " + _vm._s(_vm.product_tag_msg) + "\n                                                            ") + "<small data-v-4a25a082>Comma separated</small></div></div></div> "), _vm._ssrNode("<div id=\"primary-pills-profile\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"row mb-3 required\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-meta-title-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Brands</label> "), _vm._ssrNode("<div class=\"col-sm-10\" data-v-4a25a082>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.brand,
      expression: "insertdata.brand"
    }],
    staticClass: "form-select model",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "brand", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": ""
    }
  }, [_vm._v("Select Brand")]), _vm._v(" "), _vm._l(_vm.modelresults, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2)])], 2), _vm._ssrNode(" <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-2 col-form-label required-label\" data-v-4a25a082>SKU</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"text\" placeholder=\"SKU\"" + _vm._ssrAttr("value", _vm.insertdata.sku) + " class=\"form-control\" data-v-4a25a082> " + (_vm.errors.sku ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.sku[0])) + "</span>" : "<!---->") + " <small data-v-4a25a082>Stock Keeping Unit</small></div></div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>External Link</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"text\" placeholder=\"External Link\"" + _vm._ssrAttr("value", _vm.insertdata.external_link) + " class=\"form-control\" data-v-4a25a082></div></div> <hr data-v-4a25a082> "), _vm._ssrNode("<div class=\"row mb-3\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Short Description</label> "), _vm._ssrNode("<div class=\"col-sm-10\" data-v-4a25a082>", "</div>", [_c('client-only', {
    attrs: {
      "placeholder": "loading..."
    }
  }, [_c('ckeditor-nuxt', {
    staticClass: "form-control",
    attrs: {
      "config": _vm.editorConfig
    },
    model: {
      value: _vm.insertdata.short_description,
      callback: function ($$v) {
        _vm.$set(_vm.insertdata, "short_description", $$v);
      },
      expression: "insertdata.short_description"
    }
  })], 1)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mb-3\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Description</label> "), _vm._ssrNode("<div class=\"col-sm-10\" data-v-4a25a082>", "</div>", [_c('client-only', {
    attrs: {
      "placeholder": "loading..."
    }
  }, [_c('ckeditor-nuxt', {
    staticClass: "form-control",
    attrs: {
      "config": _vm.editorConfig
    },
    model: {
      value: _vm.insertdata.description,
      callback: function ($$v) {
        _vm.$set(_vm.insertdata, "description", $$v);
      },
      expression: "insertdata.description"
    }
  })], 1)], 1)], 2), _vm._ssrNode(" <hr data-v-4a25a082> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label required-label\" data-v-4a25a082>Price</label> <div class=\"col-sm-8\" data-v-4a25a082><input type=\"text\" placeholder=\"Price\"" + _vm._ssrAttr("value", _vm.insertdata.price) + " class=\"form-control\" data-v-4a25a082> " + (_vm.errors.price ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.price[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>Unit</label> <div class=\"col-sm-8\" data-v-4a25a082><input type=\"text\" placeholder=\"Unit (e.g. KG, Pc etc)\"" + _vm._ssrAttr("value", _vm.insertdata.unit) + " class=\"form-control\" data-v-4a25a082></div></div> "), _vm._ssrNode("<div class=\"row mb-3 required\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>Discount</label> <div class=\"col-sm-4\" data-v-4a25a082><input type=\"text\" placeholder=\"0\"" + _vm._ssrAttr("value", _vm.insertdata.discount) + " class=\"form-control\" data-v-4a25a082></div> "), _vm._ssrNode("<div class=\"col-sm-4\" data-v-4a25a082>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.discount_status,
      expression: "insertdata.discount_status"
    }],
    staticClass: "form-select form-select-sm",
    attrs: {
      "aria-label": ".form-select-sm example"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "discount_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Percent")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Flat")])])])], 2), _vm._ssrNode(" <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label required-label\" data-v-4a25a082>Quantity</label> <div class=\"col-sm-8\" data-v-4a25a082><input type=\"text\" placeholder=\"1\"" + _vm._ssrAttr("value", _vm.insertdata.stock_qty) + " class=\"form-control\" data-v-4a25a082></div></div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label required-label\" data-v-4a25a082>Minimum Quantity</label> <div class=\"col-sm-8\" data-v-4a25a082><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.stock_mini_qty) + " class=\"form-control\" data-v-4a25a082></div></div> "), _vm._ssrNode("<div class=\"row mb-3 required\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>Out Of Stock Status</label> "), _vm._ssrNode("<div class=\"col-sm-8\" data-v-4a25a082>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.stock_status,
      expression: "insertdata.stock_status"
    }],
    staticClass: "form-select form-select-sm",
    attrs: {
      "aria-label": ".form-select-sm example"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "stock_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("In Stock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Out Of Stock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Pre-Order")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Others")])])])], 2), _vm._ssrNode(" <hr data-v-4a25a082> "), _vm._ssrNode("<div class=\"row mb-3 required\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>Shipping</label> "), _vm._ssrNode("<div class=\"col-sm-8\" data-v-4a25a082>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.free_shopping,
      expression: "insertdata.free_shopping"
    }],
    staticClass: "form-select form-select-sm",
    attrs: {
      "aria-label": ".form-select-sm example"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "free_shopping", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.shippingHandaller();
      }]
    }
  }, [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Flat rate ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Free shipping")])])])], 2), _vm._ssrNode(" <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label sflatRate\" data-v-4a25a082>Flat Rate</label> <div class=\"col-sm-8 sflatRate\" data-v-4a25a082><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.flat_rate_price) + " class=\"form-control\" data-v-4a25a082></div></div> <hr data-v-4a25a082> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>Shipping Days</label> <div class=\"col-sm-4\" data-v-4a25a082><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.shipping_days) + " class=\"form-control\" data-v-4a25a082> " + (_vm.errors.shipping_days ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.shipping_days[0])) + "</span>" : "<!---->") + "</div> <div class=\"col-sm-4\" data-v-4a25a082>\n                                                                    Days\n                                                                </div></div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>Delivery  Days</label> <div class=\"col-sm-4\" data-v-4a25a082><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.delivery_days) + " class=\"form-control\" data-v-4a25a082> " + (_vm.errors.delivery_days ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.delivery_days[0])) + "</span>" : "<!---->") + "</div> <div class=\"col-sm-4\" data-v-4a25a082>\n                                                                    Days\n                                                                </div></div> <hr data-v-4a25a082> "), _vm._ssrNode("<div class=\"row mb-3 required\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label\" data-v-4a25a082>VAT/Tax </label> "), _vm._ssrNode("<div class=\"col-sm-4\" data-v-4a25a082>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.vat_status,
      expression: "insertdata.vat_status"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": ".form-select-sm example"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "vat_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.vathandaller();
      }]
    }
  }, [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Yes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("No")])])])], 2), _vm._ssrNode(" <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-title-1\" class=\"col-sm-4 col-form-label vat_\" data-v-4a25a082>Amount in percentage</label> <div class=\"col-sm-4\" data-v-4a25a082><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.vat) + " class=\"form-control vat_\" data-v-4a25a082></div> <div class=\"col-sm-4 vat_\" data-v-4a25a082>\n                                                                    %\n                                                                </div></div>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"primary-pills-contact\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<div class=\"row mb-3\" data-v-4a25a082>", "</div>", [_vm._ssrNode("<label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Manufacturer</label> "), _vm._ssrNode("<div class=\"col-sm-10\" data-v-4a25a082>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.manufacturer,
      expression: "insertdata.manufacturer"
    }],
    staticClass: "form-select manufacturer",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "manufacturer", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": ""
    }
  }, [_vm._v("Select")]), _vm._v(" "), _vm._l(_vm.manufrresults, function (data) {
    return _c('option', {
      domProps: {
        "value": data.id
      }
    }, [_vm._v(_vm._s(data.name))]);
  })], 2)])], 2), _vm._ssrNode(" <div class=\"row mb-3\" data-v-4a25a082><label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label required-label\" data-v-4a25a082>Categories</label> <div class=\"col-sm-10\" data-v-4a25a082><div data-v-4a25a082><input placeholder=\"Search...\"" + _vm._ssrAttr("value", _vm.categories) + " class=\"form-control\" data-v-4a25a082> " + (_vm.searchResults.length ? "<ul data-v-4a25a082>" + _vm._ssrList(_vm.searchResults, function (result) {
    return "<li class=\"custom-list\" data-v-4a25a082>" + _vm._ssrEscape("\n                                                                                " + _vm._s(result.category) + " ") + "<a href=\"javascript:void(0);\" data-v-4a25a082><i class=\"fadeIn animated bx bx-plus-circle\" data-v-4a25a082></i></a></li>";
  }) + "</ul>" : "<div data-v-4a25a082></div>") + " " + (_vm.errors.category ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.category[0])) + "</span>" : "<!---->") + " <span class=\"d-none\" data-v-4a25a082><textarea placeholder=\"Selected Value\" class=\"w-100\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.multi_categories)) + "</textarea></span> " + (_vm.selectedItems.length ? "<div class=\"bgColor\" data-v-4a25a082><hr data-v-4a25a082> " + _vm._ssrList(_vm.selectedItems, function (item) {
    return "<div data-v-4a25a082>" + _vm._ssrEscape("\n                                                                                " + _vm._s(item.category) + " ") + "<a href=\"javascript:void(0);\" data-v-4a25a082><i class=\"fadeIn animated bx bx-minus-circle\" data-v-4a25a082></i></a></div>";
  }) + "</div>" : "<!---->") + "</div></div></div> <div class=\"row mb-3\" data-v-4a25a082><label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Download Link</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"text\" name=\"keyword\" value placeholder=\"Download\" class=\"form-control\" data-v-4a25a082></div></div>")], 2)])]), _vm._ssrNode(" <div id=\"image\" role=\"tabpanel\" class=\"tab-pane fade\" data-v-4a25a082><div bis_skin_checked=\"1\" class=\"alert alert-info\" data-v-4a25a082><i class=\"fas fa-info-circle\" data-v-4a25a082></i> Must Upload Products Images 300x300px</div> <div class=\"row mb-3 required\" data-v-4a25a082><label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label required-label\" data-v-4a25a082>Thumbnail Image</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"file\" value accept=\"image/png,image/jpeg\" class=\"form-control\" data-v-4a25a082> " + (_vm.errors.files ? "<span class=\"text-danger\" data-v-4a25a082>" + _vm._ssrEscape(_vm._s(_vm.errors.files[0])) + "</span>" : "<!---->") + " " + (_vm.previewUrl ? "<img" + _vm._ssrAttr("src", _vm.previewUrl) + " alt=\"Preview\" class=\"img-fluids\" data-v-4a25a082>" : "<!---->") + "</div></div> <div class=\"row mb-3\" data-v-4a25a082><label for=\"input-meta-description-1\" class=\"col-sm-2 col-form-label\" data-v-4a25a082>Additional Image</label> <div class=\"col-sm-10\" data-v-4a25a082><input type=\"file\" multiple=\"multiple\" accept=\"image/png,image/jpeg\" class=\"form-control\" data-v-4a25a082> <div class=\"row mt-3\" data-v-4a25a082>" + _vm._ssrList(_vm.images, function (image, index) {
    return "<div class=\"col-md-3\" data-v-4a25a082><div class=\"card\" data-v-4a25a082><img" + _vm._ssrAttr("src", image.url) + " alt=\"Preview\" class=\"card-img-top img-fluid\" data-v-4a25a082> <div class=\"card-body\" data-v-4a25a082><button type=\"button\" class=\"btn btn-danger btn-sm\" data-v-4a25a082>Remove</button></div></div></div>";
  }) + "</div></div></div> <button type=\"submit\" class=\"btn btn-success px-5 w-100\" data-v-4a25a082><i class=\"bx bx-check-circle mr-1\" data-v-4a25a082></i> Save &amp; Next</button></div>")], 2)], 2)])])])])])])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ecommarce/product-add.vue?vue&type=template&id=4a25a082&scoped=true&lang=en

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ecommarce/product-add.vue?vue&type=script&lang=js
var product_addvue_type_script_lang_js = __webpack_require__(40);

// CONCATENATED MODULE: ./pages/ecommarce/product-add.vue?vue&type=script&lang=js
 /* harmony default export */ var ecommarce_product_addvue_type_script_lang_js = (product_addvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ecommarce/product-add.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ecommarce_product_addvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a25a082",
  "4bc0537d"
  
)

/* harmony default export */ var product_add = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  directives: {
    'click-outside': __webpack_require__(35).default
  },
  components: {
    'ckeditor-nuxt': () => {
      if (false) {}
    }
  },
  head: {
    title: 'Product Add'
  },
  data() {
    return {
      editorConfig: {
        removePlugins: ['Title'],
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        }
      },
      insertdata: {
        id: '',
        name: '',
        description: '',
        short_description: '',
        meta_title: '',
        meta_description: '',
        meta_keyword: '',
        product_tag: '',
        ptag: '',
        brand: '',
        sku: '',
        external_link: '',
        cash_dev_status: 2,
        delivery_days: '',
        price: '',
        unit: '',
        stock_qty: 1,
        stock_mini_qty: 1,
        stock_status: 2,
        manufacturer: '',
        download_link: '',
        discount: 0,
        discount_status: 1,
        shipping_days: 1,
        free_shopping: 0,
        flat_rate_status: 0,
        flat_rate_price: 0,
        vat: 0,
        vat_status: '0',
        tax: 0,
        tax_status: 0,
        //Attribute 
        // sku: [],
        // qty: [],
        // price: [],
        //END  Attribute
        //files: '',
        images: '',
        status: 1
      },
      inputValue: '',
      previewUrl: null,
      // addPreviewUrls: [],
      images: [],
      selectedCategory: null,
      multi_categories: '',
      results: [],
      selectedItems: [],
      categories: '',
      searchResults: [],
      parentAttributes: [],
      attrVals: [],
      product_tag_msg: '',
      modelresults: [],
      manufrresults: [],
      //this for attribue select
      // options: [],
      // showDropdown: false,
      // selectedOptions: [],
      // selectAll: false,
      // storedValues: [],
      //end
      notifmsg: '',
      file: '',
      files: '',
      errors: {}
    };
  },
  async mounted() {
    await this.loadCKEditor();
    this.searchModels();
    this.searchmanuf();
    CKEDITOR.replace('editor');
  },
  methods: {
    shippingHandaller() {
      if (this.insertdata.free_shopping === "1") {
        $(".sflatRate").fadeOut();
      } else {
        $(".sflatRate").fadeIn();
      }
    },
    vathandaller() {
      if (this.insertdata.vat_status === "1") {
        $(".vat_").fadeIn();
      } else {
        $(".vat_").fadeOut();
      }
    },
    async searchModels() {
      try {
        const response = await this.$axios.get(`/brands/allbrandlist`);
        this.modelresults = response.data.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    },
    async searchmanuf() {
      try {
        const response = await this.$axios.get(`/manufacturers/allmanufacturers`);
        this.manufrresults = response.data.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    },
    validateInput() {
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.delivery_days)) {
        this.insertdata.delivery_days = this.insertdata.delivery_days.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.price)) {
        this.insertdata.price = this.insertdata.price.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.discount)) {
        this.insertdata.discount = this.insertdata.discount.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.stock_qty)) {
        this.insertdata.stock_qty = this.insertdata.stock_qty.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.stock_mini_qty)) {
        this.insertdata.stock_mini_qty = this.insertdata.stock_mini_qty.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.flat_rate_price)) {
        this.insertdata.flat_rate_price = this.insertdata.flat_rate_price.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.shipping_days)) {
        this.insertdata.shipping_days = this.insertdata.shipping_days.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.vat)) {
        this.insertdata.vat = this.insertdata.vat.slice(0, -1);
      }
      if (!/^[+-]?\d*\.?\d*$/.test(this.insertdata.tax)) {
        this.insertdata.tax = this.insertdata.tax.slice(0, -1);
      }
    },
    addCommas() {
      this.product_tag_msg = this.insertdata.ptag.replace(/\s+/g, ', ');
      this.insertdata.product_tag = this.product_tag_msg;
    },
    handleImageUpload(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.checkImageDimensions(file);
      }
    },
    checkImageDimensions(file) {
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          if (img.width === 300 && img.height === 300) {
            const url = e.target.result;
            this.images.push({
              url,
              file
            });
          } else {
            alert('Image dimensions must be 300x300 pixels.');
            this.$refs.images.value = ''; // Reset file input
            //this.$refs.files = '';
          }
        };
      };

      reader.readAsDataURL(file);
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    previewImage(event) {
      this.onFileSelected();
      const file = event.target.files[0];
      this.previewUrl = URL.createObjectURL(file);
      this.checkImageDimensionsThunbnail(file);
    },
    checkImageDimensionsThunbnail(file) {
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          if (img.width === 300 && img.height === 300) {
            this.previewUrl = e.target.result;
          } else {
            alert('Image dimensions must be 300x300 pixels.');
          }
        };
      };
      reader.readAsDataURL(file);
      this.resetInput();
    },
    resetInput() {
      this.previewUrl = null;
      this.$refs.files.value = '';
    },
    addToSelected(result) {
      //console.log(result);
      this.selectedItems.push(result);
      this.multi_categories = this.selectedItems.map(result => result.id).join(',');
      //this.selectedItemIds = this.selectedItems.map(item => item.id).join(', ');
    },

    removeFromSelected(item) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
        this.updatemulti_categories();
      }
    },
    updatemulti_categories() {
      this.multi_categories = this.selectedItems.map(item => item.id).join(',');
    },
    search() {
      if (this.categories.length > 2) {
        this.$axios.$get(`/category/search?term=${this.categories}`).then(response => {
          this.searchResults = response;
        }).catch(error => {
          console.error(error);
        });
      } else {
        this.searchResults = [];
      }
    },
    onFileSelected() {
      //this.file = this.$refs.file.files[0];
      this.files = this.$refs.files.files[0];
    },
    loadCKEditor() {
      return new Promise(resolve => {
        if (typeof CKEDITOR === 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
          script.async = true;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          resolve();
        }
      });
    },
    saveData() {
      //console.log(this.insertdata.manufacturer);
      // return false; 
      const formData = new FormData();
      const input = this.$refs.images;
      for (let i = 0; i < input.files.length; i++) {
        formData.append('images[]', input.files[i]);
      }
      formData.append('id', this.insertdata.id);
      formData.append('files', this.files);
      formData.append('delivery_days', this.insertdata.delivery_days);
      // formData.append('images', this.images); //multiple
      formData.append('category', this.multi_categories);
      formData.append('name', this.insertdata.name);
      formData.append('description', this.insertdata.description);
      formData.append('short_description', this.insertdata.short_description);
      formData.append('meta_title', this.insertdata.meta_title);
      formData.append('meta_description', this.insertdata.meta_description);
      formData.append('meta_keyword', this.insertdata.meta_keyword);
      formData.append('product_tag', this.insertdata.product_tag);
      formData.append('brand', this.insertdata.brand);
      formData.append('sku', this.insertdata.sku);
      formData.append('external_link', this.insertdata.external_link);
      formData.append('price', this.insertdata.price);
      formData.append('stock_qty', this.insertdata.stock_qty);
      formData.append('stock_mini_qty', this.insertdata.stock_mini_qty);
      formData.append('stock_status', this.insertdata.stock_status);
      formData.append('manufacturer', this.insertdata.manufacturer);
      formData.append('download_link', this.insertdata.download_link);
      formData.append('status', this.insertdata.status);
      formData.append('keyword', this.insertdata.keyword);
      //new
      formData.append('unit', this.insertdata.unit);
      formData.append('discount', this.insertdata.discount);
      formData.append('discount_status', this.insertdata.discount_status);
      formData.append('free_shopping', this.insertdata.free_shopping);
      formData.append('flat_rate_status', this.insertdata.flat_rate_status);
      formData.append('flat_rate_price', this.insertdata.flat_rate_price);
      formData.append('vat', this.insertdata.vat);
      formData.append('vat_status', this.insertdata.vat_status);
      formData.append('tax', this.insertdata.tax);
      formData.append('tax_status', this.insertdata.tax_status);
      formData.append('cash_dev_status', this.insertdata.cash_dev_status);
      formData.append('shipping_days', this.insertdata.shipping_days);
      // formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/product/save', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        const product_id = res.data.product_id;
        this.$router.push({
          path: '/ecommarce/product-preview',
          query: {
            parameter: product_id
          }
        });
        return false;
        //this.$router.push('/ecommarce/product-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
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
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)["URL"]))

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("1b782ee3", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=product-add.js.map