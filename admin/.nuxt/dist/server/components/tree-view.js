exports.ids = [3];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=tree-view.js.map