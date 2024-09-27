exports.ids = [20];
exports.modules = {

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DelasForYour.vue?vue&type=template&id=54415b52&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"deal_foryou\"><div class=\"row mb-2\"><div class=\"col-12 m-auto\"><div class=\"sell_title justify-content-center\"><h5>Deals For You</h5></div></div></div> " + _vm._ssrList(_vm.banner, function (item, index) {
    return "<div class=\"row\"><div class=\"col-6\"><a><img" + _vm._ssrAttr("src", item.imageOne) + " alt class=\"img-fluid\"></a></div> <div class=\"col-6\"><a><img" + _vm._ssrAttr("src", item.imageTwo) + " alt class=\"img-fluid\"></a></div></div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DelasForYour.vue?vue&type=template&id=54415b52&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DelasForYour.vue?vue&type=script&lang=js&
/* harmony default export */ var DelasForYourvue_type_script_lang_js_ = ({
  data() {
    return {
      banner: []
    };
  },
  mounted() {
    this.alldealsads();
  },
  methods: {
    async alldealsads() {
      this.loading = true;
      try {
        const response = await this.$axios.get(`/unauthenticate/alldealsads`);
        this.banner = response.data;
        // console.log(response.data);
      } catch (error) {
        // Handle error
      } finally {
        this.loading = false; // Hide loader after response
      }
    }
  }
});
// CONCATENATED MODULE: ./components/DelasForYour.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DelasForYourvue_type_script_lang_js_ = (DelasForYourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DelasForYour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DelasForYourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9005aa40"
  
)

/* harmony default export */ var DelasForYour = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=delas-for-your.js.map