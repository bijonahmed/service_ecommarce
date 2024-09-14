exports.ids = [16];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_coupons_vue_vue_type_style_index_0_id_5dc61228_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_coupons_vue_vue_type_style_index_0_id_5dc61228_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_coupons_vue_vue_type_style_index_0_id_5dc61228_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_coupons_vue_vue_type_style_index_0_id_5dc61228_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_coupons_vue_vue_type_style_index_0_id_5dc61228_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".subBTN:disabled{background-color:#d3d3d3}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coupons/new-coupons.vue?vue&type=template&id=5dc61228
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\"><div class=\"page-content\"><div class=\"row\"><div class=\"col-md-8 m-auto\"><div class=\"form_container bg-white p-3\"><h5>Add New Coupons</h5> <form id=\"couponform\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Promo Name <span class=\"text-danger\">*</span></label> <input type=\"text\" name=\"name\" autocomplete=\"off\" id class=\"form-control\"></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Promo Code <span class=\"text-danger\">*</span></label> <input type=\"text\" name=\"promocode\" autocomplete=\"off\" id class=\"form-control\"></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Coupon type <span class=\"text-danger\">*</span></label> <select name=\"code_type\" id class=\"form-control\"><option value=\"percentage\">In percentage</option> <option value=\"fixed\">Fixed Amount</option></select></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Min. Shopping Amount <span class=\"text-danger\">*</span></label> <input name=\"min_shopping\" type=\"number\" autocomplete=\"off\" id=\"amountInput\"" + _vm._ssrAttr("value", _vm.amount) + " class=\"form-control\"></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Discount in percentage(%) <span class=\"text-secondary\" style=\"font-size: 12px;\">(If coupon type\n                                        &quot;Percentage&quot;)</span></label> <input type=\"text\" name=\"d_percent\" autocomplete=\"off\" id=\"numericInput\"" + _vm._ssrAttr("value", _vm.enteredNumber) + " class=\"form-control\"> " + (_vm.verrors ? "<p class=\"text-danger mt-1\">" + _vm._ssrEscape(_vm._s(_vm.verrors)) + "</p>" : "<!---->") + "</div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Discount in Fixed amount($) <span class=\"text-secondary\" style=\"font-size: 12px;\">(If coupon type &quot;Fiexed\n                                        Amount&quot;)</span></label> <input type=\"number\" id=\"discountInput\" autocomplete=\"off\" name=\"d_fvalue\"" + _vm._ssrAttr("value", _vm.discount) + " class=\"form-control\"> " + (_vm.discountError ? "<p class=\"text-danger mt-1\">" + _vm._ssrEscape(_vm._s(_vm.discountError)) + "</p>" : "<!---->") + "</div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Status <span class=\"text-danger\">*</span></label> <select name=\"status\" id class=\"form-control\"><option value=\"1\">Active</option> <option value=\"2\">Inactive</option></select></div> <div class=\"form-group mb-2\"><button type=\"submit\"" + _vm._ssrAttr("disabled", !!_vm.discountError || !!_vm.error) + " class=\"btn-success subBTN w-100 py-1 border-0\"><i class=\"bx bx-check-circle mr-1\"></i>Submit\n                                </button></div></form></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/coupons/new-coupons.vue?vue&type=template&id=5dc61228

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coupons/new-coupons.vue?vue&type=script&lang=js
/* harmony default export */ var new_couponsvue_type_script_lang_js = ({
  head: {
    title: 'Ads Management'
  },
  data() {
    return {
      promocode: null,
      status: "1",
      errors: {},
      insertData: {
        percentage: ''
      },
      enteredNumber: '',
      amount: null,
      discount: null,
      discountError: '',
      error: ''
    };
  },
  mounted() {},
  methods: {
    validateDiscount() {
      if (this.discount > this.amount) {
        this.discountError = 'Discount amount cannot be greater than the total amount.';
      } else {
        this.discountError = '';
      }
    },
    validateNumber() {
      const numericValue = parseFloat(this.enteredNumber);
      if (isNaN(numericValue)) {
        this.error = 'Please enter a valid number.';
      } else {
        // this.error = '';
        // If you need to further validate against a maximum value, you can do it here
        const maxValue = 100; // Example: Maximum allowed value
        if (this.enteredNumber > maxValue) {
          this.error = 'Maximum Discount 99%.';
        } else {
          this.error = '';
        }
      }
    },
    savecoupon() {
      const formData = new FormData();
      formData.append('name', this.$refs.name.value);
      formData.append('promocode', this.$refs.promocode.value);
      formData.append('code_type', this.$refs.code_type.value);
      formData.append('min_shopping', this.$refs.min_shopping.value);
      formData.append('d_percent', this.$refs.d_percent.value);
      formData.append('d_fvalue', this.$refs.d_fvalue.value);
      formData.append('status', this.$refs.status.value);

      // Make a POST request to your API endpoint
      this.$axios.post('/setting/addcoupons', formData).then(response => {
        // Handle successful response
        Lobibox.notify('success', {
          pauseDelayOnHover: true,
          continueDelayOnInactiveTab: false,
          position: 'top right',
          icon: 'bx bx-check-circle',
          msg: 'Your Coupon has been successfully Created.'
        });
        $('#couponform')[0].reset();
        this.$router.push('/coupons/all-coupons');
      }).catch(error => {
        // Handle error
        // Check if error.response exists
        Lobibox.notify('error', {
          pauseDelayOnHover: true,
          continueDelayOnInactiveTab: false,
          position: 'top right',
          icon: 'bx bx-error-circle',
          msg: 'An error occurred while saving data.'
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/coupons/new-coupons.vue?vue&type=script&lang=js
 /* harmony default export */ var coupons_new_couponsvue_type_script_lang_js = (new_couponsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/coupons/new-coupons.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  coupons_new_couponsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6623e8e3"
  
)

/* harmony default export */ var new_coupons = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("5d95bad1", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=new-coupons.js.map