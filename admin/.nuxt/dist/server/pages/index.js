exports.ids = [60];
exports.modules = {

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1b572f0f
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.$auth.loggedIn ? _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm.userData.role_id === 1 ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<div class=\"row row-cols-1 row-cols-md-2 row-cols-xl-5\">", "</div>", [_vm._ssrNode("<div class=\"col\">", "</div>", [_vm._ssrNode("<div class=\"card radius-10 bg-gradient-deepblue\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/hrm/dashboard"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('div', {
    staticClass: "d-flex align-items-center text-white"
  }, [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("HRM")])]), _vm._v(" "), _c('div', {
    staticClass: "ms-auto"
  }, [_c('i', {
    staticClass: "bx bx-envelope fs-3 text-white"
  })])])])])], 1)])])]) : _vm.userData.role_id == 2 ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<div class=\"row row-cols-1 row-cols-md-2 row-cols-xl-5\">", "</div>", [_vm._ssrNode("<div class=\"col\">", "</div>", [_vm._ssrNode("<div class=\"card radius-10 bg-gradient-deepblue\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/profile"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('div', {
    staticClass: "d-flex align-items-center text-white"
  }, [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("View Profile")])]), _vm._v(" "), _c('div', {
    staticClass: "ms-auto"
  }, [_c('i', {
    staticClass: "bx bx-envelope fs-3 text-white"
  })])])])])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col\">", "</div>", [_vm._ssrNode("<div class=\"card radius-10 bg-gradient-deepblue\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/leave-approval-list"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('div', {
    staticClass: "d-flex align-items-center text-white"
  }, [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("Leave Approval")])]), _vm._v(" "), _c('div', {
    staticClass: "ms-auto"
  }, [_c('i', {
    staticClass: "bx bx-envelope fs-3 text-white"
  })])])])])], 1)])], 2)]) : _vm._e(), _vm._ssrNode(" <div class=\"overlay toggle-icon\"></div> <a href=\"javaScript:;\" class=\"back-to-top\"><i class=\"bx bxs-up-arrow-alt\"></i></a>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1b572f0f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  head: {
    title: 'Dashboard'
  },
  data() {
    return {
      userData: {
        role_id: ''
      }
    };
  },
  mounted() {
    this.defaultLoadingData();
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    defaultLoadingData() {
      this.$axios.get('/auth/showProfileData').then(response => {
        console.log(response.data.data.role_id);
        this.userData.role_id = response.data.data.role_id;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0d7b4d24"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map