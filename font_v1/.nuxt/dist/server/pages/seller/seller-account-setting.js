exports.ids = [101,17,18,19,21,25,28,29,33,105];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1821d38c", content, true, context)
};

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_account_setting_vue_vue_type_style_index_0_id_5d28b200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_account_setting_vue_vue_type_style_index_0_id_5d28b200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_account_setting_vue_vue_type_style_index_0_id_5d28b200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_account_setting_vue_vue_type_style_index_0_id_5d28b200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_account_setting_vue_vue_type_style_index_0_id_5d28b200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-5d28b200]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-5d28b200],.loading-indicator[data-v-5d28b200]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-5d28b200]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-5d28b200]{margin:0}.loader-top[data-v-5d28b200]{top:0}.loader-bottom[data-v-5d28b200]{bottom:0}.custom-image-effect[data-v-5d28b200]{transition:box-shadow .3s ease-in-out}.custom-image-effect[data-v-5d28b200]:hover{box-shadow:0 0 10px rgba(0,0,0,.5)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-account-setting.vue?vue&type=template&id=5d28b200&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('LogoAndPayment'), _vm._ssrNode(" "), _c('NavbarSecond'), _vm._ssrNode(" "), _c('center', [_vm.loading ? _c('div', {
    staticClass: "loading-indicator"
  }, [_c('div', {
    staticClass: "loader-container"
  }, [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/loader/loader.gif",
      "alt": "Loader"
    }
  })], 1)]) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_content\" data-v-5d28b200>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"col-md-4\" data-v-5d28b200>", "</div>", [_c('SellerLeftsidebar')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-8\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<ul id=\"pills-tab\" role=\"tablist\" class=\"tab_btns nav-pills mb-3 mt-3\" data-v-5d28b200><li role=\"presentation\" class=\"nav-item\" data-v-5d28b200><button id=\"pills-here-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#seller_account\" type=\"button\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\" class=\"nav-link active\" data-v-5d28b200>Change Photos</button></li> <li role=\"presentation\" class=\"nav-item\" data-v-5d28b200><button id=\"pills-profile-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#pills-business\" type=\"button\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\" class=\"nav-link\" data-v-5d28b200>Login Information</button></li> <li role=\"presentation\" class=\"nav-item\" data-v-5d28b200><button id=\"pills-ads-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#pills-ads\" type=\"button\" role=\"tab\" aria-controls=\"pills-ads\" aria-selected=\"false\" class=\"nav-link\" data-v-5d28b200>Business Pages Banner Setting</button></li></ul> "), _vm._ssrNode("<div id=\"pills-tabContent\" class=\"tab-content\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div id=\"seller_account\" role=\"tabpanel\" aria-labelledby=\"pills-here-tab\" class=\"tab-pane fade show active\" data-v-5d28b200><div class=\"main_profile\" data-v-5d28b200><div class=\"d-flex align-items-center justify-content-between mb-3\" data-v-5d28b200><h4 data-v-5d28b200>Profile image and Logo </h4></div> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200><div class=\"row\" data-v-5d28b200><div class=\"col-md-4\" data-v-5d28b200><div data-v-5d28b200><h6 data-v-5d28b200>Preview Image</h6> <div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.profileLogo) + " alt=\"Profile Logo\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div></div></div> <div class=\"col-md-6\" data-v-5d28b200><div data-v-5d28b200><div data-v-5d28b200><label for data-v-5d28b200>Upload Profile Image</label> <input id=\"uploadFile\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile\" data-v-5d28b200></div></div></div></div> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button></form> <hr data-v-5d28b200> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200><div class=\"row\" data-v-5d28b200><div class=\"col-md-4\" data-v-5d28b200><div data-v-5d28b200><h6 data-v-5d28b200>Business Preview Image</h6> <div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.businessLogo) + " alt=\"Business Logo\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div></div></div> <div class=\"col-md-6\" data-v-5d28b200><div data-v-5d28b200><div data-v-5d28b200><label for data-v-5d28b200>Upload Business Image</label> <input id=\"uploadFile1\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile1\" data-v-5d28b200></div></div></div></div> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button></form></div></div> "), _vm._ssrNode("<div id=\"pills-business\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\" class=\"tab-pane fade\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"main_profile\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"user_details\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-between\" data-v-5d28b200><h4 data-v-5d28b200>Login Information </h4> <button type=\"button\" class=\"btn_edit\" data-v-5d28b200><i class=\"fa-solid fa-pen\" data-v-5d28b200></i></button> <div class=\"modal_address_here edit_div\" data-v-5d28b200><div class=\"address_form_modal\" data-v-5d28b200><div class=\"d-flex justify-content-between\" data-v-5d28b200><p data-v-5d28b200>Login Information </p> <button type=\"button\" class=\"btn-close btn_address_close\" data-v-5d28b200></button></div> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200><div data-v-5d28b200><label for=\"name\" class=\"d-flex\" data-v-5d28b200>Email <p class=\"text-danger d-block\" data-v-5d28b200>*</p></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.email) + " class=\"form-control\" data-v-5d28b200> " + (_vm.errors.email ? "<span class=\"text-danger\" data-v-5d28b200><small data-v-5d28b200>" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</small></span>" : "<!---->") + "</div> <div data-v-5d28b200><label for data-v-5d28b200>Phone </label> <br data-v-5d28b200> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.phone_number) + " class=\"form-control mobile_code\" data-v-5d28b200> " + (_vm.errors.phone_number ? "<span class=\"text-danger\" data-v-5d28b200><small data-v-5d28b200>" + _vm._ssrEscape(_vm._s(_vm.errors.phone_number[0])) + "</small></span>" : "<!---->") + "</div> <div class=\"mt-3\" data-v-5d28b200><button type=\"submit\" class=\"btn_cart mt-2\" style=\"visibility: unset;\" data-v-5d28b200>Save</button></div></form></div></div></div> <div class=\"user_info\" data-v-5d28b200><h5 data-v-5d28b200>Email</h5> <p data-v-5d28b200>" + _vm._ssrEscape(_vm._s(_vm.userdata.email)) + "</p></div> <div class=\"user_info\" data-v-5d28b200><h5 data-v-5d28b200>Phone number </h5> <p data-v-5d28b200>" + _vm._ssrEscape(_vm._s(_vm.userdata.phone_number)) + "</p></div> "), _vm._ssrNode("<div class=\"user_info\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<h5 data-v-5d28b200>", "</h5>", [_vm._ssrNode("Password "), _c('nuxt-link', {
    staticClass: "btn_edit",
    attrs: {
      "to": "/seller/change-password"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-pen"
  })])], 2), _vm._ssrNode(" <p data-v-5d28b200>***********</p>")], 2)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"pills-ads\" role=\"tabpanel\" aria-labelledby=\"pills-ads-tab\" class=\"tab-pane fade\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"main_profile\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<form enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Top Banner</h6> "), _vm._ssrNode("<div data-v-5d28b200>", "</div>", [_c('center', [_vm.errors.top_banner_img ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.top_banner_img[0]))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.topbannerimg ? "<div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.topbannerimg) + " alt=\"Top Banner Images\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>" : "<div data-v-5d28b200><img src=\"/images/Slider_fold.jpg\" alt=\"Top Banner Images\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>"))], 2)], 2)]), _vm._ssrNode(" <div class=\"col-md-10\" data-v-5d28b200><div data-v-5d28b200><div data-v-5d28b200><label for style=\"color:red; font-size: 10px;\" data-v-5d28b200><small data-v-5d28b200>Top Banner (Must upload size W:1168px H:384px)</small></label> <input id=\"top_banner_img\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control top_banner_img\" data-v-5d28b200></div></div></div>")], 2), _vm._ssrNode(" <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2), _vm._ssrNode(" <hr data-v-5d28b200> "), _vm._ssrNode("<div class=\"row d-none\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"col-md-4\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<form enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Banner-1</h6> "), _vm._ssrNode("<div data-v-5d28b200>", "</div>", [_c('center', [_vm.errors.banner1 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.banner1[0]))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.banner1 ? "<div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.banner1) + " alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>" : "<div data-v-5d28b200><img src=\"/images/images_global.jpg\" alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>"))], 2), _vm._ssrNode(" <label for style=\"color:red; font-size: 10px;\" data-v-5d28b200><small data-v-5d28b200>Must upload images size (W:572px H:250px)</small></label> <input id=\"uploadFile1\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile1\" data-v-5d28b200> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-4\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<form enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Banner-2</h6> "), _vm._ssrNode("<div data-v-5d28b200>", "</div>", [_c('center', [_vm.errors.banner2 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.banner2[0]))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.banner2 ? "<div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.banner2) + " alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>" : "<div data-v-5d28b200><img src=\"/images/images_global.jpg\" alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>"))], 2), _vm._ssrNode(" <label for style=\"color:red; font-size: 10px;\" data-v-5d28b200><small data-v-5d28b200>Must upload images size (W:572px H:250px)</small></label> <input id=\"uploadFile2\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile2\" data-v-5d28b200> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-4\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<form enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Banner-3</h6> "), _vm._ssrNode("<div data-v-5d28b200>", "</div>", [_c('center', [_vm.errors.banner3 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.banner3[0]))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.banner3 ? "<div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.banner3) + " alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>" : "<div data-v-5d28b200><img src=\"/images/images_global.jpg\" alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>"))], 2), _vm._ssrNode(" <label for style=\"color:red; font-size: 10px;\" data-v-5d28b200><small data-v-5d28b200>Must upload images size (W:572px H:250px)</small></label> <input id=\"uploadFile2\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile2\" data-v-5d28b200> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2)])])], 2), _vm._ssrNode(" <hr data-v-5d28b200> "), _vm._ssrNode("<div class=\"row\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"col-md-6\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<form enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Banner-4</h6> "), _vm._ssrNode("<div data-v-5d28b200>", "</div>", [_c('center', [_vm.errors.banner4 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.banner4[0]))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.banner4 ? "<div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.banner4) + " alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>" : "<div data-v-5d28b200><img src=\"/images/images_global.jpg\" alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>"))], 2), _vm._ssrNode(" <label for style=\"color:red; font-size: 10px;\" data-v-5d28b200><small data-v-5d28b200>Must upload images size (W:572px H:250px)</small></label> <input id=\"uploadFile2\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile2\" data-v-5d28b200> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-6\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<form enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Banner5</h6> "), _vm._ssrNode("<div data-v-5d28b200>", "</div>", [_c('center', [_vm.errors.banner5 ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.banner5[0]))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.banner5 ? "<div data-v-5d28b200><img" + _vm._ssrAttr("src", _vm.banner5) + " alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>" : "<div data-v-5d28b200><img src=\"/images/images_global.jpg\" alt=\"Upload Banner Image\" class=\"img-thumbnail custom-image-effect\" data-v-5d28b200></div>"))], 2), _vm._ssrNode(" <label for style=\"color:red; font-size: 10px;\" data-v-5d28b200><small data-v-5d28b200>Must upload images size (W:572px H:250px)</small></label> <input id=\"uploadFile2\" type=\"file\" accept=\"image/gif, image/jpeg, image/png\" class=\"img form-control uploadFile2\" data-v-5d28b200> <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2)])])], 2), _vm._ssrNode(" <hr data-v-5d28b200> "), _vm._ssrNode("<form id=\"videofrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-5d28b200>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-5d28b200>", "</div>", [_vm._ssrNode("<div data-v-5d28b200>", "</div>", [_vm._ssrNode("<h6 data-v-5d28b200>Video </h6> <div class=\"video_ads\" data-v-5d28b200>" + (_vm.file_name ? "<div data-v-5d28b200><iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.file_name}`) + " frameborder=\"0\" data-v-5d28b200></iframe></div>" : "<div data-v-5d28b200><iframe src=\"https://www.youtube.com/embed/0pTqynKiki4\" frameborder=\"0\" data-v-5d28b200></iframe></div>") + "</div> <input type=\"text\" placeholder=\"Youtube link\"" + _vm._ssrAttr("value", _vm.file_name) + " class=\"form-control w-100\" data-v-5d28b200> "), _c('center', [_vm.errors.file_name ? _c('span', {
    staticClass: "text-danger"
  }, [_c('small', [_vm._v(_vm._s(_vm.errors.file_name[0]))])]) : _vm._e()]), _vm._ssrNode(" <button type=\"submit\" class=\"btn_cart w-100\" style=\"visibility: unset; width: fit-content; margin-top: 10px;\" data-v-5d28b200>Upload</button>")], 2)])])])], 2)])], 2)], 2)], 2)])]), _vm._ssrNode(" <div class=\"back_top\" data-v-5d28b200><a href=\"#top\" data-v-5d28b200><i class=\"fa-solid fa-angle-up\" data-v-5d28b200></i></a></div> "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/seller/seller-account-setting.vue?vue&type=template&id=5d28b200&scoped=true&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: ./components/Common_MobileSidebar.vue + 4 modules
var Common_MobileSidebar = __webpack_require__(54);

// EXTERNAL MODULE: ./components/Common_MiniTabNavbar.vue + 4 modules
var Common_MiniTabNavbar = __webpack_require__(55);

// EXTERNAL MODULE: ./components/Common_MobileSearchProduct.vue + 2 modules
var Common_MobileSearchProduct = __webpack_require__(67);

// EXTERNAL MODULE: ./pages/seller/seller-leftsidebar.vue + 4 modules
var seller_leftsidebar = __webpack_require__(72);

// EXTERNAL MODULE: ./components/NavbarSecond.vue + 4 modules
var NavbarSecond = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-account-setting.vue?vue&type=script&lang=js&






/* harmony default export */ var seller_account_settingvue_type_script_lang_js_ = ({
  middleware: 'IsSeller',
  components: {
    NavbarSecond: NavbarSecond["a" /* default */],
    Common_MobileSidebar: Common_MobileSidebar["default"],
    Common_MiniTabNavbar: Common_MiniTabNavbar["default"],
    Common_MobileSearchProduct: Common_MobileSearchProduct["default"],
    SellerLeftsidebar: seller_leftsidebar["default"]
  },
  head: {
    title: 'Account Setting'
  },
  data() {
    return {
      loading: false,
      top_banner_img: null,
      banner1: '',
      banner2: '',
      banner3: '',
      banner4: '',
      banner5: '',
      file_name: '',
      youtube_videos: '',
      userdata: {
        id: '',
        email: '',
        phone_number: ''
      },
      passdata: {
        password: '',
        password_confirmation: ''
      },
      notifmsg: '',
      topbannerimg: '',
      profileLogo: '',
      businessLogo: '',
      message: '',
      orders: [],
      errors: {}
    };
  },
  mounted() {
    this.loadCKEditor();
    CKEDITOR.replace('editor');
    this.defaultLoading();
    this.defalutLoadingSellerAds();
  },
  methods: {
    onFileSelected() {
      this.file = this.$refs.file.files[0];
    },
    onFileSelectedbusiness() {
      this.business_logo = this.$refs.business_logo.files[0];
    },
    onFileSelecteTopBanner(event) {
      const file = event.target.files[0];
      this.top_banner_img = file;
    },
    onFileSelectebanner1(event) {
      const file = event.target.files[0];
      this.banner1 = file;
    },
    onFileSelectebanner2(event) {
      const file = event.target.files[0];
      this.banner2 = file;
    },
    onFileSelectebanner3(event) {
      const file = event.target.files[0];
      this.banner3 = file;
    },
    onFileSelectebanner4(event) {
      const file = event.target.files[0];
      this.banner4 = file;
    },
    onFileSelectebanner5(event) {
      const file = event.target.files[0];
      this.banner5 = file;
    },
    updateYoutubeAds() {
      const formData = new FormData();
      formData.append('file_name', this.file_name);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updateYAds', formData, {
        headers
      }).then(res => {
        this.file_name = res.data.file_name;
        // Reset the form
        // this.$refs.videofrm.reset();

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Video has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    banner5Upload() {
      const formData = new FormData();
      formData.append('banner5', this.banner5);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updatebannerFive', formData, {
        headers
      }).then(res => {
        this.banner5 = res.data.banner5;
        // Reset the form
        this.$refs.banner5Frm.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Banner-5 has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    banner4Upload() {
      const formData = new FormData();
      formData.append('banner4', this.banner4);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updatebannerFour', formData, {
        headers
      }).then(res => {
        this.banner4 = res.data.banner4;
        // Reset the form
        this.$refs.banner4Frm.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Banner-4 has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    banner3Upload() {
      const formData = new FormData();
      formData.append('banner3', this.banner3);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updatebannerThree', formData, {
        headers
      }).then(res => {
        this.banner3 = res.data.banner3;
        // Reset the form
        this.$refs.banner3Frm.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Banner -3 has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    banner2Upload() {
      const formData = new FormData();
      formData.append('banner2', this.banner2);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updatebannerTwo', formData, {
        headers
      }).then(res => {
        this.banner2 = res.data.banner2;
        // Reset the form
        this.$refs.banner2Frm.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Banner -2 has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    banner1Upload() {
      const formData = new FormData();
      formData.append('banner1', this.banner1);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updatebannerOne', formData, {
        headers
      }).then(res => {
        this.banner1 = res.data.banner1;
        // Reset the form
        this.$refs.banner1Frm.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Banner -1 has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    topBannerUpload() {
      const formData = new FormData();
      formData.append('top_banner_img', this.top_banner_img);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/user/updateTopbanner', formData, {
        headers
      }).then(res => {
        this.topbannerimg = res.data.top_banner_img;
        // Reset the form
        this.$refs.topBannerFrm.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Top Banner has been successfully updated"
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    updateLogo() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('business_logo', this.business_logo);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/updateLogo', formData, {
        headers
      }).then(res => {
        this.profileLogo = res.data.profileLogo;
        this.businessLogo = res.data.businessLogo;
        this.message = res.data.message;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logo has been successfully updated",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    profileupdate() {
      const formData = new FormData();
      formData.append('phone_number', this.userdata.phone_number);
      formData.append('email', this.userdata.email);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/updateprofile', formData, {
        headers
      }).then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your profile has been successfully updated",
          showConfirmButton: false,
          timer: 1500
        });
        this.popupOpenClose();
        this.defaultLoading();
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    async defaultLoading() {
      this.loading = true;
      await this.$axios.post(`/auth/me`).then(response => {
        // Seller Account Info
        this.userdata.id = response.data.id;
        this.userdata.email = response.data.email;
        this.userdata.phone_number = response.data.phone_number;
        this.profileLogo = response.data.profileLogo;
        this.businessLogo = response.data.businessLogo;
        this.message = response.data.message;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    async defalutLoadingSellerAds() {
      this.loading = true;
      await this.$axios.post(`/user/getSellerAds`).then(response => {
        console.log("-default loading: --" + response.data.file_name);
        this.topbannerimg = response.data.top_banner_img;
        this.banner1 = response.data.banner1;
        this.banner2 = response.data.banner2;
        this.banner3 = response.data.banner3;
        this.banner4 = response.data.banner4;
        this.banner5 = response.data.banner5;
        this.file_name = response.data.file_name;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        //  this.loading = false; // Hide loader after response
      });
    },
    async loadingOrders() {
      const response = await this.$axios.get(`/order/getOrder`);
      this.orders = response.data.orderdata;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    },
    logout() {
      this.$auth.logout();
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    },
    popupOpen() {
      external_jquery_default()(".modal_address_here").fadeIn();
    },
    popupOpenClose() {
      external_jquery_default()(".modal_address_here").fadeOut();
    },
    loadCKEditor() {
      return new Promise(resolve => {
        if (typeof CKEDITOR === 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
          script.async = true;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          resolve();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/seller/seller-account-setting.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_seller_account_settingvue_type_script_lang_js_ = (seller_account_settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/seller-account-setting.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_seller_account_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d28b200",
  "20fa6922"
  
)

/* harmony default export */ var seller_account_setting = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LogoAndPayment: __webpack_require__(64).default,NavbarSecond: __webpack_require__(65).default,Footer: __webpack_require__(58).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DesktopViewOption.vue?vue&type=template&id=033a27c1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-3 col-md-2 col-2 desktop_view"
  }, [_vm._ssrNode("<div class=\"menus\">", "</div>", [_vm._ssrNode("<div class=\"dropdown\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle btn_account b_link\"><i class=\"fas fa-user\"></i> Account\r\n            </button> "), _vm._ssrNode("<ul class=\"dropdown-menu\">", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn\">Sign Out</button>")], 2) : _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn\">Sign In</button> "), _c('nuxt-link', {
    staticClass: "drop_btn text-white",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("Signup")])], 2), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": _vm.getProfileLink()
    }
  }, [_vm._v("MY Account")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-wishlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e()], 2)], 2), _vm._ssrNode(" <div class=\"dropdown\"><button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle\"><i class=\"fas fa-circle-question\"></i> Help\r\n            </button> <ul class=\"dropdown-menu\"><li><a href=\"#\" class=\"dropdown-item\">Help Center </a></li> <li><a href=\"#\" class=\"dropdown-item\">Place An Order</a></li> <li><a href=\"#\" class=\"dropdown-item\">Payment Option </a></li> <li><a href=\"#\" class=\"dropdown-item\">Truck an order </a></li> <li><a href=\"#\" class=\"dropdown-item\">Cancel an order </a></li> <li><a href=\"#\" class=\"dropdown-item\">Return &amp; Refund </a></li> <button type=\"button\" class=\"drop_btn\">live Chart </button></ul></div> "), _c('Nuxt-link', {
    staticClass: "cart_count",
    attrs: {
      "to": "/cart"
    }
  }, [_c('i', {
    staticClass: "fas fa-cart-shopping"
  }), _c('span', {
    staticStyle: {
      "top": "-16px"
    }
  }, [_vm._v(_vm._s(_vm.itemCount))]), _vm._v("Cart")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"login_popup\">", "</div>", [_vm._ssrNode("<div class=\"popup_box_modal\">", "</div>", [_vm._ssrNode("<div><div class=\"row\"><div class=\"col-6 ms-auto text-end\"><button class=\"btn_edit close_login\"><i class=\"fa-solid fa-x\"></i></button></div></div></div> <div class=\"popup_title\"><h1>Login</h1> <p>Login and get access to all the features</p></div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('center', [_c('span', {
    staticClass: "show_error text-danger"
  })]), _vm._ssrNode(" "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample d-block\">", "</form>", [_vm._ssrNode("<div class=\"input_group\">" + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.login.email) + "> <i class=\"fa-solid fa-user\"></i></div> <div class=\"input_group mb-1\">" + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.login.password) + "> <i class=\"toggle-password fa-solid fa-eye\"></i></div> "), _vm._ssrNode("<div class=\"d-flex justify-content-end align-items-center mb-2\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center d-none\"><input type=\"checkbox\" id=\"remeber\"><label for=\"remeber\">Remember me</label></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 2), _vm._ssrNode(" <div><button type=\"submit\" class=\"btn_logins\">Login</button></div> "), _vm._ssrNode("<div class=\"d-flex\">", "</div>", [_vm._ssrNode("<p class=\"text-center w-100 mt-2\" style=\"font-size: 12px !important;\">", "</p>", [_vm._ssrNode("Don't have Account? "), _c('nuxt-link', {
    staticClass: "btn_signup",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("SignUp")])], 2)])], 2)], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DesktopViewOption.vue?vue&type=template&id=033a27c1&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/LoginPopup.vue + 4 modules
var LoginPopup = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DesktopViewOption.vue?vue&type=script&lang=js&


/* harmony default export */ var DesktopViewOptionvue_type_script_lang_js_ = ({
  components: {
    LoginPopup: LoginPopup["default"]
  },
  // middleware: "auth",
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      cart: [],
      itemCount: 0,
      limit: 12,
      id: '',
      categories: [],
      errors: []
    };
  },
  async mounted() {
    this.$eventBus.$on('cartItemCountUpdated', this.handleCartItemCountUpdated);
    this.loadCart();
    await this.fetchData();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    userRole() {
      return this.$auth.loggedIn ? this.$auth.user.role_id : null;
    }
  },
  methods: {
    async customerLogin() {
      try {
        $(".show_error").html("");
        const postData = {
          email: this.login.email,
          password: this.login.password
        };
        let {
          data
        } = await this.$axios.post('/auth/login', postData);
        await this.$auth.setUserToken(data.access_token);
        if (data.role_id === 3) {
          return this.$router.push('/seller/seller-dashboard');
        } else if (data.role_id === 2) {
          return this.$router.push('/user/user-profile');
        } else {
          console.warn('Unsupported role_id:', data.role_id);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Has been successfully login...",
          showConfirmButton: false,
          timer: 1500
        });

        //this.loginForm.reset();
      } catch (err) {
        console.log(err);
        console.error('Login error:', err);
        if (err.response && err.response.status === 401) {
          $(".show_error").html("Invalid credentials. Please try again.");
        } else {
          $(".show_error").html('An error occurred. Please try again later.');
        }
      }
    },
    getProfileLink() {
      // Generate the profile link based on the user's role_id
      return this.userRole === 3 ? '/seller/seller-profile' : '/user/user-profile';
    },
    openLoginModal() {
      $(".login_popup").fadeIn();
    },
    closePopup() {
      $(".login_popup").fadeOut();
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += parseInt(item.quantity);
      });
      this.itemCount = itemCount;
    },
    handleCartItemCountUpdated(itemCount) {
      // This method will be called when the event is emitted from ComponentA
      console.log('Received  DesktopViewOptions Com.:', itemCount);
      // Update the local data property with the received itemCount
      this.itemCount = itemCount;
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    },
    getUser() {
      let user = this.$store.state.auth.user;
      console.log("Users data: " + user);
    },
    async logout() {
      await this.$auth.logout();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Logout!"
      });
    }
  }
});
// CONCATENATED MODULE: ./components/DesktopViewOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DesktopViewOptionvue_type_script_lang_js_ = (DesktopViewOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DesktopViewOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DesktopViewOptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9d9cf2f6"
  
)

/* harmony default export */ var DesktopViewOption = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MobileSidebar.vue?vue&type=template&id=c4ebd79a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "side_nav"
  }, [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('h6', [_vm._v("My Ecommerce Account")]), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul>", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-box"
  }), _vm._v("Order")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/my-reviews"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-comment-dots"
  }), _vm._v("Pending Reviews")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ticket-simple"
  }), _vm._v("Voucher ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v("Save items ")])], 1) : _vm._e()], 2)], 2)]), _vm._ssrNode(" "), _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": "/category/all-categorys"
      }
    }, [_c('h6', [_vm._v(_vm._s(category.name))]), _vm._v(" "), _c('p', [_vm._v("See all")])])], 1), _vm._ssrNode(" <ul>" + _vm._ssrList(category.children, function (childCategory) {
      return "<li><a href=\"#\"><i class=\"fa-solid fa-mobile-screen-button\"></i>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></li>";
    }) + "</ul>")], 2)]);
  }), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><ul><li><a href=\"#\">Contact Us</a></li> <li><a href=\"#\">Terms and condition</a></li></ul></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common_MobileSidebar.vue?vue&type=template&id=c4ebd79a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MobileSidebar.vue?vue&type=script&lang=js&

/* harmony default export */ var Common_MobileSidebarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      categories: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/Common_MobileSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Common_MobileSidebarvue_type_script_lang_js_ = (Common_MobileSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Common_MobileSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Common_MobileSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67ca9232"
  
)

/* harmony default export */ var Common_MobileSidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MiniTabNavbar.vue?vue&type=template&id=485eb692&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"nav_bar desktop_view\">", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"btn_menu\"><i class=\"fa-solid fa-bars-staggered\"></i></button> "), _vm._ssrNode("<div class=\"nav_menu nav_op\">", "</div>", [_vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul>" + (index < _vm.limit ? "<li><a href=\"#\" class=\"d-flex justify-content-between align-items-center\"><div class=\"d-flex align-items-center\"><i class=\"fa-solid fa-list\"></i>" + _vm._ssrEscape("\r\n                                " + _vm._s(category.name)) + "</div> <i class=\"fa-solid fa-angle-right\"></i></a> <div class=\"sub_menu\">" + (category.children && category.children.length > 0 ? "<div class=\"row\">" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\"><h6><a href=\"#\">" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("Other Categories")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common_MiniTabNavbar.vue?vue&type=template&id=485eb692&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MiniTabNavbar.vue?vue&type=script&lang=js&

/* harmony default export */ var Common_MiniTabNavbarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      categories: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/Common_MiniTabNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Common_MiniTabNavbarvue_type_script_lang_js_ = (Common_MiniTabNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Common_MiniTabNavbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Common_MiniTabNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5cb785fb"
  
)

/* harmony default export */ var Common_MiniTabNavbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("29d8b919", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("080b9e33", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=37de4a72&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', [_vm._ssrNode("<div class=\"mobile_view\">", "</div>", [_vm._ssrNode("<div class=\"f_posi\">", "</div>", [_vm._ssrNode("<div style=\"height: 20px;\"></div> "), _vm._ssrNode("<div class=\"m_footer\">", "</div>", [_vm._ssrNode("<div class=\"f_option\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-table-cells-large"
  }), _vm._v(" "), _c('p', [_vm._v("Category")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v(" "), _c('p', [_vm._v("Wishlist")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"active\">", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-house"
  }), _vm._v(" "), _c('p', [_vm._v("Home")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-cart-shopping"
  }), _vm._v(" "), _c('p', [_vm._v("Cart")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-user"
  }), _vm._v(" "), _c('p', [_vm._v("User")])])], 1)], 2)])])], 2)]), _vm._ssrNode(" <div class=\"footer_top desktop_view\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-4 col-md-4 col-sm-12 m-auto\"><div class=\"logo\"><a href=\"#\" class=\"text-white\">Ecommerce <i class=\"fa-regular fa-star\"></i></a></div></div> <div class=\"ccol-lg-4 col-md-4 col-sm-12 m-auto\"><div class=\"newsletter\"><h3>New to Ecommerce</h3> <p>Subscribe to our newsletter to get updates on our latest offers!</p> <div class=\"d-flex\" style=\"position: relative;\"><i class=\"fas fa-envelope\"></i> <input type=\"text\" placeholder=\"Enter email address\" name id class=\"form-control\"> <button type=\"button\">Send</button></div></div></div> <div class=\"col-lg-4 col-md-12 m-auto\"><div class=\"store_app\"><div class=\"d-flex\"><div><i class=\"fa-regular fa-star\"></i></div> <div><h5>DOWNLOAD ECOMMERCE FREE APP</h5> <p>Get access to exclusive offers!</p></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\" target=\"_blank\" role=\"button\" class=\"market-btn a\"><div class=\"d-flex justify-content-between\"><div><img src=\"/images/apple-logo.svg\" alt></div> <div><span class=\"market-button-subtitle\">Download on the</span> <span class=\"market-button-title\">Google Play</span></div></div></a> <a href=\"#\" target=\"_blank\" role=\"button\" class=\"market-btn\"><div class=\"d-flex justify-content-between\"><div><img src=\"/images/google-play-store.svg\" alt></div> <div><span class=\"market-button-subtitle\">Download on the</span> <span class=\"market-button-title\">Google Play</span></div></div></a></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"footer_links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Pages</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_vm._v("All Category")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_vm._v("Category List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_vm._v("Product List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("Cart")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("CheckOut")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/payment"
    }
  }, [_vm._v("Payment")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Login and service </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login & Signup ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_vm._v("Sellon")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller-form"
    }
  }, [_vm._v("Seller Register ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/allshop"
    }
  }, [_vm._v("All Stores")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>User Profile </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_vm._v("User Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("User Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("User Wishlist")])], 1)], 2), _vm._ssrNode(" <h6>Policy </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/refund"
    }
  }, [_vm._v("Refund")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/return-and-replacement"
    }
  }, [_vm._v("Return and Replacement")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Seller Dashboard</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products"
    }
  }, [_vm._v("Seller Products")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products-post"
    }
  }, [_vm._v("Add Products")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/Seller/seller-orders"
    }
  }, [_vm._v("Seller Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-customer-returns"
    }
  }, [_vm._v("Customer Returns")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-profile"
    }
  }, [_vm._v("Seller Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-account-setting"
    }
  }, [_vm._v("Account Settings")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-wallet"
    }
  }, [_vm._v("Wallet")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-message"
    }
  }, [_vm._v("Seller Massage")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Make Money With Us </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_vm._v("Sell On Ecommerce")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-programe"
    }
  }, [_vm._v("Affiliate Programme")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-programe-register"
    }
  }, [_vm._v("Affiliate Programme Register")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-dashboard"
    }
  }, [_vm._v("Affiliate Dashboard")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-transfer"
    }
  }, [_vm._v("Transfer Affiliate Money")])], 1)], 2)], 2)], 2), _vm._ssrNode(" <div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-3 col-12\"><div class=\"social_links\"><h6>Join us on </h6> <ul><li><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-youtube\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-instagram\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a></li></ul></div></div> <div class=\"col-lg-3 col-md-3 col-sm-3 col-12\"><div class=\"social_links\"><h6>Payment Method &amp; Delivery partners </h6> <ul><li><a href=\"#\"><i class=\"fa-brands fa-cc-mastercard\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-cc-visa\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-stripe\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-dhl\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-cc-discover\"></i></a></li></ul></div></div></div>")], 2), _vm._ssrNode(" <div class=\"container\"><div class=\"btm_links bg-transparent\"><div class=\"row\"><div class=\"col-9 m-auto text-center\"><div class=\"payment_part\"><a href=\"#\" class=\"a_link active\">Ecommerce</a> <a href=\"#\" class=\"a_link\">PaymentOption</a> <a href=\"#\" class=\"a_link\">PaymentOption</a> <a href=\"#\" class=\"a_link\">PaymentOption</a></div></div></div></div></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=37de4a72&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5a7f18dc"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(58).default})


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginPopup.vue?vue&type=template&id=2c676489&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"login_popup\">", "</div>", [_vm._ssrNode("<div class=\"popup_box_modal\">", "</div>", [_vm._ssrNode("<div><div class=\"row\"><div class=\"col-6 ms-auto text-end\"><button class=\"btn_edit close_login\"><i class=\"fa-solid fa-x\"></i></button></div></div></div> <div class=\"popup_title\"><h1>Login</h1> <p>Login and get access to all the features</p></div> "), _vm._ssrNode("<div>", "</div>", [_c('center', [_c('span', {
    staticClass: "show_error text-danger"
  })]), _vm._ssrNode(" "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"input_group\">" + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.login.email) + "> <i class=\"fa-solid fa-user\"></i></div> <div class=\"input_group\">" + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.login.password) + "> <i class=\"toggle-password fa-solid fa-eye\"></i></div> "), _vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center d-none\"><input type=\"checkbox\" id=\"remeber\"><label for=\"remeber\">Remember me</label></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 2), _vm._ssrNode(" <div><button type=\"submit\" class=\"btn_logins\">Login</button></div> "), _vm._ssrNode("<div class=\"d-flex\">", "</div>", [_vm._ssrNode("<p style=\"font-size: 12px !important;\">", "</p>", [_vm._ssrNode("Don't have Account? "), _c('nuxt-link', {
    staticClass: "btn_signup",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("SignUp")])], 2)])], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoginPopup.vue?vue&type=template&id=2c676489&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var LoginPopupvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      login: {
        email: '',
        password: ''
      },
      notifmsg: '',
      errors: {}
      // loggedIn: false,
    };
  },

  mounted() {},
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    closePopup() {
      external_jquery_default()(".login_popup").fadeOut();
    },
    gotoCheckOut() {
      this.$router.push('/checkout');
    },
    async customerLogin() {
      try {
        external_jquery_default()(".show_error").html("");
        const postData = {
          email: this.login.email,
          password: this.login.password
        };
        let {
          data
        } = await this.$axios.post('/auth/login', postData);
        await this.$auth.setUserToken(data.access_token);
        if (data.role_id === 3) {
          return this.$router.push('/seller/seller-dashboard');
        } else if (data.role_id === 2) {
          return this.$router.push('/user/user-dashborad');
        } else {
          console.warn('Unsupported role_id:', data.role_id);
        }
        this.closePopup();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Has been successfully login...",
          showConfirmButton: false,
          timer: 1500
        });

        //this.loginForm.reset();
      } catch (err) {
        console.log(err);
        console.error('Login error:', err);
        if (err.response && err.response.status === 401) {
          external_jquery_default()(".show_error").html("Invalid credentials. Please try again.");
        } else {
          external_jquery_default()(".show_error").html('An error occurred. Please try again later.');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/LoginPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginPopupvue_type_script_lang_js_ = (LoginPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoginPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoginPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12181d84"
  
)

/* harmony default export */ var LoginPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopViewOption_vue_vue_type_style_index_0_id_033a27c1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopViewOption_vue_vue_type_style_index_0_id_033a27c1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopViewOption_vue_vue_type_style_index_0_id_033a27c1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopViewOption_vue_vue_type_style_index_0_id_033a27c1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopViewOption_vue_vue_type_style_index_0_id_033a27c1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input_group i{left:auto!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_7a2739bc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".payment_part a{color:#000;font-size:12px;font-weight:400;margin-right:10px;text-transform:capitalize;transition:all .4s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoAndPayment.vue?vue&type=template&id=7a2739bc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-3\">", "</div>", [_vm._ssrNode("<div class=\"web_part\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-star"
  }), _vm._v("Sell On Ecommerce")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-9\">", "</div>", [_vm._ssrNode("<div class=\"payment_part\">", "</div>", [_c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/allbrands'
    },
    attrs: {
      "to": "/allbrands"
    }
  }, [_vm._v("All Brands")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/allshop'
    },
    attrs: {
      "to": "/allshop"
    }
  }, [_vm._v("All Shops")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/coupons'
    },
    attrs: {
      "to": "/coupons"
    }
  }, [_vm._v("Coupons")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/required'
    },
    attrs: {
      "to": "/required"
    }
  }, [_vm._v("Required")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/blog'
    },
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    attrs: {
      "to": "/affiliate/affiliate-programe"
    }
  }, [_vm._v("Affiliate Program")])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogoAndPayment.vue?vue&type=template&id=7a2739bc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LogoAndPayment.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "72136afb"
  
)

/* harmony default export */ var LogoAndPayment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbarSecond.vue?vue&type=template&id=591eae8c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "search_bar"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-4\">", "</div>", [_vm._ssrNode("<div class=\"logo nav_tab\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\" class=\"btn_menu mobile_view\"><i class=\"fa-solid fa-bars-staggered\"></i></button> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"offcanvasExample\" aria-labelledby=\"offcanvasExampleLabel\" class=\"offcanvas offcanvas-start\">", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button> <h5 id=\"offcanvasExampleLabel\" class=\"offcanvas-title\">Ecommerce</h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body\">", "</div>", [_c('Common_MobileSidebar')], 1)], 2), _vm._ssrNode(" "), _c('Common_MiniTabNavbar'), _vm._ssrNode(" "), _c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid navLogo",
    attrs: {
      "src": "/images/logo.png",
      "alt": "",
      "width": "200px"
    }
  })])], 2)]), _vm._ssrNode(" <div class=\"col-6 desktop_view mini_tab_hide\"><form action><i class=\"fa-solid fa-magnifying-glass\"></i> <input type=\"text\" id=\"autocomplete-input\" placeholder=\"Search products...\" class=\"form-control ui-menu-item\"> <button type=\"button\">Search</button></form></div> "), _c('DesktopViewOption'), _vm._ssrNode(" <div class=\"col-4 ms-auto mobile_view\"><div class=\"mobile_nav_option\"><a class=\"search_form\"><i class=\"fa-solid fa-magnifying-glass\"></i></a></div></div> "), _vm._ssrNode("<div class=\"search_form_modal\">", "</div>", [_vm._ssrNode("<div class=\"search_box_main\">", "</div>", [_vm._ssrNode("<div class=\"bar_search\"><div><a class=\"close_search_modal\"><i class=\"fa-solid fa-arrow-left\"></i></a></div> <div><input type=\"text\" name placeholder=\"Search Product, Brands, Categories\" id=\"autocomplete-input_mobile\"></div> <div><button type=\"submit\"><i class=\"fa-solid fa-magnifying-glass\"></i></button></div></div> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.searchloop, function (item, key) {
    return _vm._ssrNode("<li>", "</li>", [item.type == 'category' ? _c('nuxt-link', {
      attrs: {
        "to": `/category/category-grid?slug=${item.catslug}`
      }
    }, [_vm._v(_vm._s(item.label))]) : _vm._e(), _vm._ssrNode(" "), item.type == 'product' ? _c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_vm._v(_vm._s(item.label))]) : _vm._e()], 2);
  }), 0)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/navbarSecond.vue?vue&type=template&id=591eae8c&

// EXTERNAL MODULE: ./components/Common_MobileSidebar.vue + 4 modules
var Common_MobileSidebar = __webpack_require__(54);

// EXTERNAL MODULE: ./components/Common_MiniTabNavbar.vue + 4 modules
var Common_MiniTabNavbar = __webpack_require__(55);

// EXTERNAL MODULE: ./components/DesktopViewOption.vue + 4 modules
var DesktopViewOption = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbarSecond.vue?vue&type=script&lang=js&
// import axios from 'axios';



/* harmony default export */ var navbarSecondvue_type_script_lang_js_ = ({
  components: {
    Common_MobileSidebar: Common_MobileSidebar["default"],
    Common_MiniTabNavbar: Common_MiniTabNavbar["default"],
    DesktopViewOption: DesktopViewOption["default"]
  },
  data() {
    return {
      searchloop: []
    };
  },
  async mounted() {
    if (false) {}
    ;
    this.openModal();
  },
  methods: {
    openModal() {
      $(".search_form").click(function () {
        $(".search_form_modal").fadeIn();
      });
      $(".close_search_modal").click(function () {
        $(".search_form_modal").fadeOut();
      });
    }
  }
});
// CONCATENATED MODULE: ./components/navbarSecond.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_navbarSecondvue_type_script_lang_js_ = (navbarSecondvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/navbarSecond.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_navbarSecondvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39e31ef6"
  
)

/* harmony default export */ var navbarSecond = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DesktopViewOption: __webpack_require__(53).default})


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavbarSecond.vue?vue&type=template&id=2eab9aa8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "search_bar"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-4\">", "</div>", [_vm._ssrNode("<div class=\"logo nav_tab\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\" class=\"btn_menu mobile_view\"><i class=\"fa-solid fa-bars-staggered\"></i></button> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"offcanvasExample\" aria-labelledby=\"offcanvasExampleLabel\" class=\"offcanvas offcanvas-start\">", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button> <h5 id=\"offcanvasExampleLabel\" class=\"offcanvas-title\">Ecommerce</h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body\">", "</div>", [_c('Common_MobileSidebar')], 1)], 2), _vm._ssrNode(" "), _c('Common_MiniTabNavbar'), _vm._ssrNode(" "), _c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid navLogo",
    attrs: {
      "src": "/images/logo.png",
      "alt": "",
      "width": "200px"
    }
  })])], 2)]), _vm._ssrNode(" <div class=\"col-6 desktop_view mini_tab_hide\"><form action><i class=\"fa-solid fa-magnifying-glass\"></i> <input type=\"text\" id=\"autocomplete-input\" placeholder=\"Search products...\" class=\"form-control ui-menu-item\"> <button type=\"button\">Search</button></form></div> "), _c('DesktopViewOption'), _vm._ssrNode(" <div class=\"col-4 ms-auto mobile_view\"><div class=\"mobile_nav_option\"><a class=\"search_form\"><i class=\"fa-solid fa-magnifying-glass\"></i></a></div></div> "), _vm._ssrNode("<div class=\"search_form_modal\">", "</div>", [_vm._ssrNode("<div class=\"search_box_main\">", "</div>", [_vm._ssrNode("<div class=\"bar_search\"><div><a class=\"close_search_modal\"><i class=\"fa-solid fa-arrow-left\"></i></a></div> <div><input type=\"text\" name placeholder=\"Search Product, Brands, Categories\" id=\"autocomplete-input_mobile\"></div> <div><button type=\"submit\"><i class=\"fa-solid fa-magnifying-glass\"></i></button></div></div> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.searchloop, function (item, key) {
    return _vm._ssrNode("<li>", "</li>", [item.type == 'category' ? _c('nuxt-link', {
      attrs: {
        "to": `/category/category-grid?slug=${item.catslug}`
      }
    }, [_vm._v(_vm._s(item.label))]) : _vm._e(), _vm._ssrNode(" "), item.type == 'product' ? _c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_vm._v(_vm._s(item.label))]) : _vm._e()], 2);
  }), 0)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavbarSecond.vue?vue&type=template&id=2eab9aa8&

// EXTERNAL MODULE: ./components/Common_MobileSidebar.vue + 4 modules
var Common_MobileSidebar = __webpack_require__(54);

// EXTERNAL MODULE: ./components/Common_MiniTabNavbar.vue + 4 modules
var Common_MiniTabNavbar = __webpack_require__(55);

// EXTERNAL MODULE: ./components/DesktopViewOption.vue + 4 modules
var DesktopViewOption = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavbarSecond.vue?vue&type=script&lang=js&
// import axios from 'axios';



/* harmony default export */ var NavbarSecondvue_type_script_lang_js_ = ({
  components: {
    Common_MobileSidebar: Common_MobileSidebar["default"],
    Common_MiniTabNavbar: Common_MiniTabNavbar["default"],
    DesktopViewOption: DesktopViewOption["default"]
  },
  data() {
    return {
      searchloop: []
    };
  },
  async mounted() {
    if (false) {}
    ;
    this.openModal();
  },
  methods: {
    openModal() {
      $(".search_form").click(function () {
        $(".search_form_modal").fadeIn();
      });
      $(".close_search_modal").click(function () {
        $(".search_form_modal").fadeOut();
      });
    }
  }
});
// CONCATENATED MODULE: ./components/NavbarSecond.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavbarSecondvue_type_script_lang_js_ = (NavbarSecondvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavbarSecond.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavbarSecondvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9e5a96b6"
  
)

/* harmony default export */ var NavbarSecond = __webpack_exports__["a"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DesktopViewOption: __webpack_require__(53).default})


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MobileSearchProduct.vue?vue&type=template&id=541f2510&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"search_form_modal\"><div class=\"search_box_main\"><div class=\"bar_search\"><div><a class=\"close_search_modal\"><i class=\"fa-solid fa-arrow-left\"></i></a></div> <div><input type=\"text\" name placeholder=\"Search Product, Brands, Categories\" id></div> <div><button type=\"submit\"><i class=\"fa-solid fa-magnifying-glass\"></i></button></div></div> <ul><li><img src=\"/images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"/images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li></ul></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common_MobileSearchProduct.vue?vue&type=template&id=541f2510&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Common_MobileSearchProduct.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a5dddf2"
  
)

/* harmony default export */ var Common_MobileSearchProduct = __webpack_exports__["default"] = (component.exports);

/***/ }),

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
//# sourceMappingURL=seller-account-setting.js.map