exports.ids = [31];
exports.modules = {

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=template&id=124438cf&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "top_bannerOne"
  }, [_vm._ssrNode("<div class=\"row my-2\" data-v-124438cf>", "</div>", [_vm._ssrNode("<div class=\"col-xl-3 col-lg-3 col-md-12 col-sm-12 mini_tab_hide sec_One\" data-v-124438cf>", "</div>", [_vm._ssrNode("<div class=\"nav_menu\" data-v-124438cf>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\" data-v-124438cf>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-124438cf>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-124438cf>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.categories.length > 0 ? _vm._ssrNode("<nav data-v-124438cf>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul data-v-124438cf>" + (index < _vm.limit ? "<li data-v-124438cf><a href=\"#\" class=\"d-flex justify-content-between align-items-center\" data-v-124438cf><div class=\"d-flex align-items-center\" data-v-124438cf><i class=\"fa-solid fa-list\" style=\"font-size: 10px;\" data-v-124438cf></i>" + _vm._ssrEscape("\n\n                                    " + _vm._s(category.name) + "\n                                ") + "</div> <i class=\"fa-solid fa-angle-right\" data-v-124438cf></i></a> <div class=\"sub_menu\" data-v-124438cf>" + (category.children && category.children.length > 0 ? "<div class=\"row\" data-v-124438cf>" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\" data-v-124438cf><h6 data-v-124438cf><a href=\"#\" data-v-124438cf>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul data-v-124438cf>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li data-v-124438cf><a href=\"#\" data-v-124438cf>" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul data-v-124438cf>", "</ul>", [_vm._ssrNode("<li data-v-124438cf>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("All Categories")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2) : _vm._e()], 2)]), _vm._ssrNode(" " + (_vm.sliders.length > 0 ? "<div class=\"col-xl-6 col-lg-9 col-md-12 col-sm-12 sec_One\" data-v-124438cf><div id=\"carouselExample\" data-bs-ride=\"carousel\" data-bs-interval=\"3000\" class=\"carousel_nav carousel w-100 height_100\" data-v-124438cf><div class=\"carousel-indicators\" data-v-124438cf>" + _vm._ssrList(_vm.sliders, function (item, index) {
    return "<button type=\"button\" data-bs-target=\"#carouselExample\"" + _vm._ssrAttr("data-bs-slide-to", index) + _vm._ssrClass(null, {
      'active': index === _vm.currentIndex
    }) + " data-v-124438cf></button>";
  }) + "</div> " + (_vm.sliders.length > 0 ? "<div class=\"carousel-inner height_100\" data-v-124438cf>" + _vm._ssrList(_vm.sliders, function (item, index) {
    return "<div" + _vm._ssrClass("carousel-item height_100", {
      active: index === 0
    }) + " data-v-124438cf><img" + _vm._ssrAttr("src", item.images) + _vm._ssrAttr("alt", 'Slide ' + (index + 1)) + " class=\"d-block w-100 height_100\" data-v-124438cf></div>";
  }) + "</div>" : "<!---->") + " <button data-bs-target=\"#carouselExample\" type=\"button\" data-bs-slide=\"prev\" class=\"carousel-control-prev\" data-v-124438cf><span aria-hidden=\"true\" class=\"carousel-control-prev-icon\" data-v-124438cf></span> <span class=\"visually-hidden\" data-v-124438cf>Previous</span></button> <button data-bs-target=\"#carouselExample\" type=\"button\" data-bs-slide=\"next\" class=\"carousel-control-next\" data-v-124438cf><span aria-hidden=\"true\" class=\"carousel-control-next-icon\" data-v-124438cf></span> <span class=\"visually-hidden\" data-v-124438cf>Next</span></button></div></div>" : "<!---->") + " <div class=\"col-lg-3 col-12 d-xl-block d-none\" data-v-124438cf><div class=\"row\" style=\"height: 49%; object-fit: cover;\" data-v-124438cf><div class=\"col-12\" data-v-124438cf><img" + _vm._ssrAttr("src", _vm.adsData1) + " alt class=\"img-fluid h-100\" data-v-124438cf></div></div> <div class=\"row mt-2\" style=\"height: 49%; object-fit: cover;\" data-v-124438cf><div class=\"col-12\" data-v-124438cf><img" + _vm._ssrAttr("src", _vm.adsData2) + " alt class=\"img-fluid h-100\" data-v-124438cf></div></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=template&id=124438cf&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=script&lang=js&

/* harmony default export */ var NavSlidervue_type_script_lang_js_ = ({
  data() {
    return {
      loading: true,
      limit: 12,
      categories: [],
      sliders: [],
      currentIndex: 0,
      adsData1: '',
      adsData2: ''
    };
    // Set the initial index
  },

  mounted() {
    this.slidersImg();
    this.fetchData();
    this.fetchAdsData();
  },
  methods: {
    handleCarouselSlide(event) {
      const carousel = event.target;
      if (carousel.classList.contains('carousel_nav')) {
        if (carousel.querySelector('.carousel-inner .carousel-item:last-child').classList.contains('active')) {
          carousel.querySelector('.carousel-control-next').click();
        }
      }
    },
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-grid',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      setTimeout(() => {
        this.loading = false;
        this.categories = response.data;
      }, 2000); // Adjust the time as needed
    },

    async slidersImg() {
      console.log("slider images...");
      const response = await this.$axios.get(`/unauthenticate/slidersImages`);
      this.sliders = response.data;
    },
    async fetchAdsData() {
      this.$axios.get('/unauthenticate/getAdsbanner').then(response => {
        this.adsData1 = response.data.image1;
        this.adsData2 = response.data.image2;
        // console.log(response.data.image1);
      }).catch(error => {
        this.error = error.message;
        console.error('Error fetching Top ads header banner data:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavSlidervue_type_script_lang_js_ = (NavSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "124438cf",
  "3bd975b3"
  
)

/* harmony default export */ var NavSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("49662953", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".top_bannerOne .sec_One[data-v-124438cf]{max-height:380px}.hi-50[data-v-124438cf]{height:49%!important;-o-object-fit:cover;object-fit:cover}.height_100[data-v-124438cf]{height:100%!important;-o-object-fit:cover;object-fit:cover;width:100%!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=nav-slider.js.map