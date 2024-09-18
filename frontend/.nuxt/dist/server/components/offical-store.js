exports.ids = [34];
exports.modules = {

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OfficalStore.vue?vue&type=template&id=f15d95b2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row mt-2\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>" + _vm._ssrEscape("Top " + _vm._s(_vm.count) + " Offical Store") + "</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", _vm._l(_vm.sellers, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": `/business/${item.slug}`
      }
    }, [_c('div', {
      staticClass: "cat_div"
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail,
        "loading": "lazy"
      }
    })])])], 1);
  }), 0)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OfficalStore.vue?vue&type=template&id=f15d95b2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OfficalStore.vue?vue&type=script&lang=js&
/* harmony default export */ var OfficalStorevue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      sellers: [],
      count: ''
    };
  },
  async mounted() {
    await this.fetchDefaultProduct();
  },
  methods: {
    async fetchDefaultProduct() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/allsellers`).then(response => {
        this.sellers = response.data.data;
        this.count = response.data.data_count;
        // console.log(response.data);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/OfficalStore.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OfficalStorevue_type_script_lang_js_ = (OfficalStorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OfficalStore.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OfficalStorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42cb580e"
  
)

/* harmony default export */ var OfficalStore = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=offical-store.js.map