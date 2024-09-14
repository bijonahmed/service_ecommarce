exports.ids = [127];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("83b72d02", content, true, context)
};

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_e20b4b6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_e20b4b6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_e20b4b6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_e20b4b6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_e20b4b6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagenation[data-v-e20b4b6e]{margin-top:10px}.pagination[data-v-e20b4b6e]{list-style:none;\r\n    /*! display: flex; */padding-left:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/user_list.vue?vue&type=template&id=e20b4b6e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"page-content\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"ps-3\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\" data-v-e20b4b6e>", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\" data-v-e20b4b6e>", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-e20b4b6e>", "</li>", [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-e20b4b6e>User List</li>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ms-auto\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"btn-group\" data-v-e20b4b6e>", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/newUser"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "bx bx-plus"
  }), _vm._v("New")])])], 1)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"card-body\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"col-md-3\" data-v-e20b4b6e><div class=\"input-group mb-3\" data-v-e20b4b6e><input type=\"text\" placeholder=\"Name\"" + _vm._ssrAttr("value", _vm.searchQuery.name) + " class=\"form-control name\" data-v-e20b4b6e></div></div> <div class=\"col-md-2\" data-v-e20b4b6e><div class=\"input-group mb-3\" data-v-e20b4b6e><input type=\"text\" placeholder=\"Phone Number\"" + _vm._ssrAttr("value", _vm.searchQuery.phone_number) + " class=\"form-control phone_number\" data-v-e20b4b6e></div></div> <div class=\"col-md-3\" data-v-e20b4b6e><div class=\"input-group mb-3\" data-v-e20b4b6e><input type=\"text\" placeholder=\"email\"" + _vm._ssrAttr("value", _vm.searchQuery.email) + " class=\"form-control email\" data-v-e20b4b6e></div></div> "), _vm._ssrNode("<div class=\"col-md-2\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div class=\"input-group mb-3\" data-v-e20b4b6e>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery.status,
      expression: "searchQuery.status"
    }],
    staticClass: "form-select form-select-solid status",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.searchQuery, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleSearch]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])])])]), _vm._ssrNode(" <div class=\"col-md-2\" data-v-e20b4b6e><div class=\"input-group mb-3\" data-v-e20b4b6e><button type=\"button\" class=\"btn btn-primary w-100\" data-v-e20b4b6e>Search</button></div></div>")], 2), _vm._ssrNode(" <div class=\"customerSpinner\" style=\"display: none;\" data-v-e20b4b6e><div class=\"d-flex justify-content-center\" data-v-e20b4b6e><div role=\"status\" class=\"spinner-border\" data-v-e20b4b6e><span class=\"visually-hidden\" data-v-e20b4b6e>Loading...</span></div></div></div> "), _vm._ssrNode("<div class=\"table-responsive\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<table class=\"table table-hover table-sm\" data-v-e20b4b6e>", "</table>", [_vm._ssrNode("<thead data-v-e20b4b6e><tr data-v-e20b4b6e><th data-v-e20b4b6e>Role</th> <th data-v-e20b4b6e>UserID</th> <th data-v-e20b4b6e>Name</th> <th data-v-e20b4b6e>Email</th> <th data-v-e20b4b6e>Phone</th> <th data-v-e20b4b6e>Password</th> <th class=\"text-center\" data-v-e20b4b6e>Status</th> <th class=\"text-center\" data-v-e20b4b6e>Action</th></tr></thead> "), _vm._ssrNode("<tbody data-v-e20b4b6e>", "</tbody>", _vm._l(_vm.paginatedData, function (item) {
    return _vm._ssrNode("<tr data-v-e20b4b6e>", "</tr>", [_vm._ssrNode("<td data-v-e20b4b6e>" + _vm._ssrEscape(_vm._s(item.rulename)) + "</td> <td data-v-e20b4b6e>" + _vm._ssrEscape(_vm._s(item.id)) + "</td> <td data-v-e20b4b6e>" + _vm._ssrEscape(_vm._s(item.name)) + "</td> <td data-v-e20b4b6e>" + _vm._ssrEscape(_vm._s(item.email)) + "</td> <td data-v-e20b4b6e>" + _vm._ssrEscape(_vm._s(item.phone_number)) + "</td> <td data-v-e20b4b6e>" + _vm._ssrEscape(_vm._s(item.show_password)) + "</td> <td class=\"text-center\" data-v-e20b4b6e>" + (item.status == 1 ? "<span data-v-e20b4b6e> Active </span>" : "<span data-v-e20b4b6e> Inactive </span>") + "</td> "), _vm._ssrNode("<td data-v-e20b4b6e>", "</td>", [_c('center', [_c('nuxt-link', {
      attrs: {
        "to": {
          name: 'user-edit-id',
          params: {
            id: item.id
          }
        },
        "variant": "warning",
        "size": "sm"
      }
    }, [_c('i', {
      staticClass: "bx bx-edit"
    }), _vm._v("EDIT\r\n                                            ")]), _vm._v(" "), _c('nuxt-link', {
      attrs: {
        "to": {
          name: 'user-changesPass-id',
          params: {
            id: item.id
          }
        },
        "variant": "warning",
        "size": "sm"
      }
    }, [_c('i', {
      staticClass: "bx bx-key"
    }), _vm._v("Change Password\r\n                                            ")])], 1)], 1)], 2);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagenation\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<div style=\"text-align: right;\" data-v-e20b4b6e>", "</div>", [_vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " class=\"btn btn-primary btn-sm\" data-v-e20b4b6e>", "</button>", [_c('center', [_c('i', {
    staticClass: "lni lni-angle-double-left"
  })])], 1), _vm._ssrNode(" <span data-v-e20b4b6e>" + _vm._ssrEscape("Page " + _vm._s(_vm.currentPage) + " of " + _vm._s(_vm.totalPages)) + "</span> "), _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " class=\"btn btn-primary btn-sm\" data-v-e20b4b6e>", "</button>", [_c('center', [_c('i', {
    staticClass: "lni lni-angle-double-right"
  })])], 1)], 2)])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/user_list.vue?vue&type=template&id=e20b4b6e&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(33);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/user_list.vue?vue&type=script&lang=js

/* harmony default export */ var user_listvue_type_script_lang_js = ({
  head: {
    title: 'Users List'
  },
  data() {
    return {
      data: [],
      searchQuery: {
        name: '',
        email: '',
        phone_number: '',
        status: 1
      },
      searchQueryPhone: '',
      currentPage: 1,
      perPage: 10 // Number of items per page
    };
  },

  async mounted() {
    await this.fetchData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredData.length / this.perPage);
    },
    filteredData() {
      let result = this.data;
      if (this.searchQuery.name) {
        result = result.filter(item => item.name.toLowerCase().includes(this.searchQuery.name.toLowerCase()));
      }
      if (this.searchQuery.email) {
        result = result.filter(item => item.email.toLowerCase().includes(this.searchQuery.email.toLowerCase()));
      }
      if (this.searchQuery.phone_number) {
        result = result.filter(item => item.phone_number.toLowerCase().includes(this.searchQuery.phone_number.toLowerCase()));
      }
      if (this.searchQuery.status) {
        result = result.filter(item => item.status == this.searchQuery.status);
      }
      return result;
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      return external_lodash_default.a.slice(this.filteredData, startIndex, startIndex + this.perPage);
    }
  },
  methods: {
    async fetchData() {
      $(".customerSpinner").show();
      try {
        let name = $(".name").val();
        let email = $(".email").val();
        let phone_number = $(".phone_number").val();
        //const response = await this.$axios.get('/user/allUsers?name=' + name + '&email=' + email);  
        const response = await this.$axios.get(`/user/allUsers`);
        this.data = response.data.data;
        $(".customerSpinner").hide();
      } catch (error) {
        console.error(error);
      }
    },
    handleSearch() {
      this.currentPage = 1;
    },
    previousPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
    },
    editCustomer(id) {
      this.$router.push({
        path: `/edit/${id}`
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/user/user_list.vue?vue&type=script&lang=js
 /* harmony default export */ var user_user_listvue_type_script_lang_js = (user_listvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/user_list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_user_listvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e20b4b6e",
  "6415e65f"
  
)

/* harmony default export */ var user_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user_list.js.map