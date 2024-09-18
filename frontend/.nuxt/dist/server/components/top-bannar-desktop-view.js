exports.ids = [45];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBannarDesktopView.vue?vue&type=template&id=40b72d50&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"top_bannar desktop_view\"><div class=\"container\"><div class=\"col-12\"><img" + _vm._ssrAttr("src", _vm.bannerData) + " loading=\"lazy\" alt class=\"img-fluid\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue?vue&type=template&id=40b72d50&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBannarDesktopView.vue?vue&type=script&lang=js&
/* harmony default export */ var TopBannarDesktopViewvue_type_script_lang_js_ = ({
  data() {
    return {
      errors: {},
      bannerData: ''
    };
  },
  mounted() {
    this.fetchBannerData();
  },
  methods: {
    fetchBannerData() {
      this.$axios.get('/unauthenticate/headerbanner').then(response => {
        this.bannerData = response.data.image;
        // console.log(response.data);
      }).catch(error => {
        this.error = error.message;
        console.error('Error fetching Top header banner data:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBannarDesktopViewvue_type_script_lang_js_ = (TopBannarDesktopViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopBannarDesktopViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a01e6386"
  
)

/* harmony default export */ var TopBannarDesktopView = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=top-bannar-desktop-view.js.map