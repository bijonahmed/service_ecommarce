exports.ids = [77];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("f96b19fe", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_password_vue_vue_type_style_index_0_id_16a5779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_password_vue_vue_type_style_index_0_id_16a5779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_password_vue_vue_type_style_index_0_id_16a5779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_password_vue_vue_type_style_index_0_id_16a5779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_password_vue_vue_type_style_index_0_id_16a5779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logSec[data-v-16a5779a]{animation:fadeShow .4s linear;min-width:100%;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forget-password.vue?vue&type=template&id=16a5779a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<span style=\"background-image: url('/images/login_bg.jpg');\\r\\n      background-position: center;\\r\\n      background-repeat: no-repeat;\\r\\n      background-size: cover;\\r\\n      min-height: 100vh;\\r\\n      overflow: hidden;\" data-v-16a5779a>", "</span>", [_vm._ssrNode("<div class=\"container\" data-v-16a5779a>", "</div>", [_vm._ssrNode("<div class=\"row d-flex align-item-center\" style=\"height: 100vh;\" data-v-16a5779a>", "</div>", [_vm._ssrNode("<div class=\"col-lg-4 col-md-6 m-auto in_row\" data-v-16a5779a>", "</div>", [_vm._ssrNode("<div class=\"login_section\" data-v-16a5779a>", "</div>", [_vm._ssrNode("<div class=\"row py-4\" style=\"position: absolute; top: 20px;left: 20px;z-index: 99;\" data-v-16a5779a>", "</div>", [_vm._ssrNode("<div class=\"col-12 text-start align-item-start\" data-v-16a5779a>", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-chevron-left"
  })])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"logSec\" data-v-16a5779a>", "</div>", [_c('cennter', [_c('h4', [_vm._v(_vm._s(_vm.succmsg))])]), _vm._ssrNode(" <div data-v-16a5779a><h2 data-v-16a5779a>Forget Password</h2> <p data-v-16a5779a>Enter Your Email Address</p></div> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-16a5779a><div class=\"group\" data-v-16a5779a><input type=\"email\"" + _vm._ssrAttr("value", _vm.forgetPass.email) + " class=\"input\" style=\"--i:0;\" data-v-16a5779a> " + (_vm.errors.email ? "<span class=\"text-danger\" data-v-16a5779a>" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <span class=\"highlight\" data-v-16a5779a></span> <span class=\"bar\" data-v-16a5779a></span> <label data-v-16a5779a>Email Address</label> <i class=\"fa-solid fa-envelope\" data-v-16a5779a></i></div> <button type=\"submit\" class=\"btn_login submit mt-2\" style=\"opacity: .8;\" data-v-16a5779a>Send</button></form>")], 2)], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forget-password.vue?vue&type=template&id=16a5779a&scoped=true&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forget-password.vue?vue&type=script&lang=js&

/* harmony default export */ var forget_passwordvue_type_script_lang_js_ = ({
  head: {
    title: 'Forget Password'
  },
  data() {
    return {
      forgetPass: {
        email: ''
      },
      notifmsg: '',
      invidecodeError: '',
      errors: {},
      hostname: ''
    };
  },
  notifmsg: '',
  invidecodeError: '',
  succmsg: '',
  errors: {},
  methods: {
    async forgetPassword() {
      //this.hostname = window.location.hostname;
      const hostname = window.location.hostname;
      // console.log(hostname);

      try {
        const postData = {
          email: this.forgetPass.email,
          hostname: hostname
        };
        let response = await this.$axios.post('/unauthenticate/forgetpassword', postData);
        let data = response.data; // Assuming the data you need is in the response
        console.log(response);
        this.succmsg = "We received a request to reset your password. Click the link below to reset it. If you didn't request this, you can safely ignore this email";
        // Handle the response data as needed
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error("Server responded with error status:", error.response.status);
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          this.invidecodeError = error.response.data.error;
          console.error("Code error:", error.response.data.error);
        } else if (error.request) {
          console.error("No response received from the server");
        } else {
          console.error("Error setting up the request:", error.message);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/forget-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_forget_passwordvue_type_script_lang_js_ = (forget_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/forget-password.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_forget_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "16a5779a",
  "6578337e"
  
)

/* harmony default export */ var forget_password = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=forget-password.js.map