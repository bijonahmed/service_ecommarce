exports.ids = [29];
exports.modules = {

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("080b9e33", content, true, context)
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".payment_part a{color:#000;font-size:12px;font-weight:400;margin-right:10px;text-transform:capitalize;transition:all .4s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoAndPayment.vue?vue&type=template&id=7a2739bc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-3\">", "</div>", [_vm._ssrNode("<div class=\"web_part\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-star"
  }), _vm._v("Sell On Ecommerce")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-9\">", "</div>", [_vm._ssrNode("<div class=\"payment_part\">", "</div>", [_c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/allbrands'
    },
    attrs: {
      "to": "/allbrands"
    }
  }, [_vm._v("All Brands")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/allshop'
    },
    attrs: {
      "to": "/allshop"
    }
  }, [_vm._v("All Shops")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/coupons'
    },
    attrs: {
      "to": "/coupons"
    }
  }, [_vm._v("Coupons")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/required'
    },
    attrs: {
      "to": "/required"
    }
  }, [_vm._v("Required")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/blog'
    },
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    attrs: {
      "to": "/affiliate/affiliate-programe"
    }
  }, [_vm._v("Affiliate Program")])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogoAndPayment.vue?vue&type=template&id=7a2739bc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LogoAndPayment.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "72136afb"
  
)

/* harmony default export */ var LogoAndPayment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=logo-and-payment.js.map