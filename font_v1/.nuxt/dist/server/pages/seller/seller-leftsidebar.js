exports.ids = [105];
exports.modules = {

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("3ac1dc78", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_5a3c924d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_5a3c924d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_5a3c924d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_5a3c924d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_5a3c924d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-5a3c924d]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-5a3c924d],.loading-indicator[data-v-5a3c924d]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-5a3c924d]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-5a3c924d]{margin:0}.loader-top[data-v-5a3c924d]{top:0}.loader-bottom[data-v-5a3c924d]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-leftsidebar.vue?vue&type=template&id=5a3c924d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"user_sidebar\" data-v-5a3c924d>", "</div>", [_vm._ssrNode("<div class=\"user_page_list\" data-v-5a3c924d>", "</div>", [_vm._ssrNode("<ul data-v-5a3c924d>", "</ul>", [_vm._ssrNode("<li data-v-5a3c924d>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": '/business/' + _vm.business_name_slug,
      "exact": ""
    }
  }, [_vm._v("My Shop")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-dashboard'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-dashboard",
      "exact": ""
    }
  }, [_vm._v("Dashboard ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-products'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products",
      "exact": ""
    }
  }, [_vm._v("Products ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-products-post'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products-post",
      "exact": ""
    }
  }, [_vm._v("Add Products ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-orders'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-orders",
      "exact": ""
    }
  }, [_vm._v("Orders ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-wishlist'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-wishlist",
      "exact": ""
    }
  }, [_vm._v("Wishlist ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-wallet'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-wallet",
      "exact": ""
    }
  }, [_vm._v("Wallet")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-profile'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-profile",
      "exact": ""
    }
  }, [_vm._v("Profile information")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-comission-history'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-comission-history",
      "exact": ""
    }
  }, [_vm._v("Comission History")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-payment-history'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-payment-history",
      "exact": ""
    }
  }, [_vm._v("Payment History")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-account-setting'
  }) + " data-v-5a3c924d>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-account-setting",
      "exact": ""
    }
  }, [_vm._v("Account Settings")])], 1), _vm._ssrNode(" <li data-v-5a3c924d><a href=\"#\" data-v-5a3c924d>LogOut </a></li>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/seller/seller-leftsidebar.vue?vue&type=template&id=5a3c924d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-leftsidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var seller_leftsidebarvue_type_script_lang_js_ = ({
  middleware: 'IsSeller',
  data() {
    return {
      loading: false,
      business_name_slug: '',
      notifmsg: '',
      orders: [],
      errors: {}
    };
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    async defaultLoading() {
      this.loading = true;
      await this.$axios.post(`/auth/me`).then(response => {
        // Seller Account Info
        this.business_name_slug = response.data.business_name_slug;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    logout() {
      this.$auth.logout();
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./pages/seller/seller-leftsidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_seller_leftsidebarvue_type_script_lang_js_ = (seller_leftsidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/seller-leftsidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_seller_leftsidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a3c924d",
  "f7c7bb32"
  
)

/* harmony default export */ var seller_leftsidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=seller-leftsidebar.js.map