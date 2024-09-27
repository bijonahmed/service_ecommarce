exports.ids = [73,17,18,19,21,25,28,29,33,42];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("317ab57e", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_6f7735f6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_6f7735f6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_6f7735f6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_6f7735f6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_6f7735f6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{background-color:rgba(147,60,94,.231)}.checkItem{border-bottom:1px solid #e1e1e1;padding-top:15px}.checkItem:last-child{border:none}#discount{display:none}.paymentMethod_tabs .btn-check:checked,.paymentMethod_tabs h3,.paymentMethod_tabs h6,.paymentMethod_tabs p,.paymentMethod_tabs span{color:#000}.addNewCard{display:none}.checkIProtem{width:310px}#discount_msg,#errorDiscount{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=6f7735f6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('LogoAndPayment'), _vm._ssrNode(" "), _c('NavbarSecond'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_content\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8\">", "</div>", [_vm._ssrNode("<div class=\"delivery_addreess\">", "</div>", [_vm._ssrNode("<h6>" + _vm._ssrEscape("Delivery To : " + _vm._s(_vm.insertdata.name)) + "</h6> "), _vm._ssrNode("<div class=\"address\">", "</div>", [_vm._ssrNode("<div>" + (_vm.address !== null ? "<p>" + _vm._ssrEscape(_vm._s(_vm.shipp_address)) + "</p>" : "<p>Please add your address</p>") + "</div> "), _vm._ssrNode("<div>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipp_address,
      expression: "shipp_address"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.shipp_address = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.address, function (address, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": address,
        "selected": index === 0
      }
    }, [_vm._v("\n                      Address " + _vm._s(index + 1))]);
  }), 0), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "add_address",
    attrs: {
      "to": "/user/user-profile",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-plus"
  }), _vm._v("Add New")])], 2)], 2), _vm._ssrNode(" <div class=\"pickUp_address d-none\"></div> <p> Bill to same address : <a class=\"billing_address btn_edit\" style=\"cursor: pointer;\">Edit</a></p>"), _vm._ssrNode("<div class=\"modal_checkoutpage bill_address\">", "</div>", [_vm._ssrNode("<div class=\"modal_box\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-8 text-end\"><h6 class=\"m-0\">Select billing address</h6></div> <div class=\"col-4 ms-auto text-end\"><a class=\"btn_edit modal_close\"><i class=\"fa-solid fa-x\"></i></a></div></div> "), _vm._ssrNode("<form action>", "</form>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipp_address,
      expression: "shipp_address"
    }],
    staticClass: "form-control mb-2",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.shipp_address = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.address, function (address, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": address,
        "selected": index === 0
      }
    }, [_vm._v("Address " + _vm._s(index + 1))]);
  }), 0), _vm._ssrNode(" <a class=\"btn_confirm modal_close mt-2\" style=\"cursor: pointer;\">Submit</a>")], 2)], 2)]), _vm._ssrNode(" <p></p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"items_details\">", "</div>", [_vm._ssrNode("<h5>Items</h5> "), _vm._l(_vm.cart, function (item) {
    return _vm._ssrNode("<div class=\"checkItem\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8\">", "</div>", [_vm._ssrNode("<div class=\"item\">", "</div>", [_c('nuxt-link', {
      staticClass: "d-flex align-items-center text-dark checkIProtem",
      attrs: {
        "to": `/product-details/${item.product.pro_slug}`
      }
    }, [_c('div', [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.product.thumnail_img,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticStyle: {
        "width": "45%"
      }
    }, [_c('h5', [_c('b', [_vm._v(_vm._s(item.product.product_name) + " ")])]), _vm._v(" "), _c('p', {
      staticClass: "mb-0"
    }, [item.product.brand_name ? _c('span', {
      staticClass: "p-0 m-0"
    }, [_vm._v(_vm._s(item.product.brand_name))]) : _c('span', {
      staticClass: "p-0 m-0"
    }, [_vm._v("No Brand")]), _vm._v(" "), item.product.color !== null && item.product.color !== '' && item.product.color !== undefined ? _c('span', {
      staticClass: "p-0 m-0"
    }, [_vm._v(", Color: "), _c('b', [_vm._v(_vm._s(item.product.color))])]) : _vm._e(), _vm._v(" "), item.product.size !== null && item.product.size !== '' && item.product.size !== undefined ? _c('span', {
      staticClass: "p-0 m-0"
    }, [_vm._v(", Size:"), _c('b', [_vm._v(_vm._s(item.product.size))])]) : _vm._e()]), _vm._v(" "), item.product.warranty_id ? _c('span', {
      staticClass: "p-0 m-0"
    }, [_vm._v("Warranty:\n                            " + _vm._s(item.product.warranty_name) + " $" + _vm._s(item.product.warrantyamt))]) : _vm._e()])]), _vm._ssrNode(" <div><span class=\"d-flex align-items-center\" style=\"min-width: 80px\">" + _vm._ssrEscape("QTY: " + _vm._s(item.quantity)) + "</span></div> <div><button type=\"button\"><i class=\"fa-solid fa-trash-can\"></i></button></div>")], 2)]), _vm._ssrNode(" <div class=\"col-md-4\"><div class=\"d-flex justify-content-end align-items-center\">" + (item.product.discount_status == 1 && item.product.discount !== 0 ? "<span class=\"badges px-1\">" + _vm._ssrEscape(_vm._s(item.product.discount) + "%") + "</span>" : "<!---->") + " " + (item.product.discount_status == 2 && item.product.discount !== 0 ? "<span class=\"badges px-1\">" + _vm._ssrEscape("$" + _vm._s(item.product.discount.toFixed(2))) + "</span>" : "<!---->") + " <p>" + (item.product.discount !== 0 ? "<del class=\"me-1\">" + _vm._ssrEscape("$" + _vm._s(item.product.price.toFixed(2))) + "</del>" : "<!---->") + _vm._ssrEscape("$" + _vm._s(item.product.last_price.toFixed(2)) + "\n                      ") + "</p></div></div>")], 2), _vm._ssrNode(" <div class=\"sub_total\"><div class=\"row\"><div class=\"col-8\"><div class=\"delivery_section\"><h5>\n                          Standard delivery |\n                          " + (item.product.flat_rate_price ? "<span>" + _vm._ssrEscape("$" + _vm._s(item.product.flat_rate_price.toFixed(2))) + "</span>" : "<span>Free Delivery</span>") + "</h5> <p>" + _vm._ssrEscape("\n                          Receive by\n                          " + _vm._s(_vm.calculateShippingDate(item.product.shipping_days)) + "\n                        ") + "</p></div></div> <div class=\"col-4\"><div class=\"s_item_sub\"><p>" + _vm._ssrEscape("\n                          " + _vm._s(item.quantity) + " item(s). Subtotal: $" + _vm._s(_vm.getPrice(item).toFixed(2)) + "\n                        ") + "</p> <span class=\"text-success\">" + _vm._ssrEscape("Save: $" + _vm._s(_vm.getSave(item).toFixed(2))) + "</span></div></div></div></div>")], 2);
  })], 2), _vm._ssrNode(" <div class=\"delivery_addreess paymentMethod_tabs\"><ul id=\"myTab\" role=\"tablist\" class=\"nav nav-tabs\"><li role=\"presentation\" class=\"nav-item\"><button id=\"Card-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#Card-tab-pane\" type=\"button\" role=\"tab\" aria-controls=\"Card-tab-pane\" aria-selected=\"true\" class=\"nav-link\">\n                    Card\n                  </button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"profile-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#profile-tab-pane\" type=\"button\" role=\"tab\" aria-controls=\"profile-tab-pane\" aria-selected=\"false\" class=\"nav-link active\">\n                    Cash On Delivery\n                  </button></li></ul> <div id=\"myTabContent\" class=\"tab-content\"><div id=\"Card-tab-pane\" role=\"tabpanel\" aria-labelledby=\"Card-tab\" tabindex=\"0\" class=\"tab-pane fade py-1\"><div class=\"d-flex flex-column mb-3\"><div role=\"group\" aria-label=\"Vertical button group\" class=\"btn-group-vertical\"><div class=\"cardPay w-100\">" + _vm._ssrList(_vm.cardList.paymentCard, function (card, index) {
    return _vm.cardList !== '' ? "<div class=\"mb-2 w-100\"><input type=\"radio\" name=\"paymentMethod\"" + _vm._ssrAttr("id", 'option' + index) + " autocomplete=\"off\"" + _vm._ssrAttr("value", card.id) + _vm._ssrAttr("checked", _vm._q(_vm.selectedPayment, card.id)) + " class=\"btn-check\"> <label" + _vm._ssrAttr("for", 'option' + index) + " class=\"btn btn-outline-primary border-0 px-2 py-1 w-100 btn-lg\" style=\"max-width: 350px\"><div class=\"mt-0 d-flex justify-content-between align-items-center\"><div class=\"d-flex flex-row align-items-center\"><img src=\"/images/qHX7vY1.webp\" width=\"50px\" class=\"rounded\"> <div class=\"d-flex flex-column ms-3\"><span class=\"h5 mb-1 text-start\" style=\"font-size: 14px\">" + _vm._ssrEscape(_vm._s(card.holder_name)) + "</span> <span class=\"small text-muted\" style=\"font-size: 12px\">" + _vm._ssrEscape(" **** " + _vm._s(card.card_number)) + "</span></div></div> <div><input type=\"text\" placeholder=\"CVV\" class=\"form-control\" style=\"width: 70px; font-size: 12px\"></div></div></label></div>" : "<!---->";
  }) + " <a type=\"button\" class=\"btn addNewCardBT p-0\" style=\"width: fit-content; color: #900c3f\">Add\n                          new card</a></div> <div class=\"addNewCard w-100\"><a type=\"button\" class=\"btn backBT btn-edit p-0\"><i class=\"fa-solid fa-arrow-left\"></i></a> <form action id=\"cardInput\"><div class=\"row mb-4\"><div class=\"col-md-12\"><input type=\"text\" hidden=\"hidden\"" + _vm._ssrAttr("value", _vm.user_id) + " class=\"form-control\"> <div class=\"form-group mb-2\"><label for>Card holder name</label> <input type=\"text\" placeholder=\"Jhon Due\" autocomplete=\"off\"" + _vm._ssrAttr("value", _vm.cardData.holder_name) + " class=\"form-control\"></div></div> <div class=\"col-8\"><div class=\"form-group mb-2\"><label for>Card Number</label> <input type=\"text\" placeholder=\"**** **** ****\" autocomplete=\"off\"" + _vm._ssrAttr("value", _vm.cardData.card_number) + " class=\"form-control\"></div></div> <div class=\"col-4\"><div class=\"form-group mb-2\"><label for>Expire</label> <input type=\"text\" placeholder=\"MM/YY\" autocomplete=\"off\"" + _vm._ssrAttr("value", _vm.cardData.expiry_date) + " class=\"form-control\"></div></div> <div class=\"col-12\"><button type=\"submit\" class=\"btn btn_edit\" style=\"border: 1px solid; width: fit-content\">Add\n                                Card</button></div></div></form></div></div></div></div> <div id=\"profile-tab-pane\" role=\"tabpanel\" aria-labelledby=\"profile-tab\" tabindex=\"0\" class=\"tab-pane fade show active py-1\"><div class=\"my-2 w-100\"><input type=\"radio\" name=\"paymentMethod\" id=\"COD\" value=\"COD\" autocomplete=\"off\"" + _vm._ssrAttr("checked", _vm._q(_vm.selectedPayment, "COD")) + " class=\"btn-check\"> <label for=\"COD\" class=\"btn btn-outline-primary border-0 w-100 px-2 py-1 btn-lg\" style=\"max-width: 350px\"><div class=\"d-flex align-items-center justify-content-between w-100\"><div><h6 class=\"mb-0\">Cash on delivery</h6> <p>" + _vm._ssrEscape("Extra charge: $" + _vm._s(_vm.companyData.transaction_fee)) + "</p></div> <div><p class=\"badge bg-success\" style=\"color: #fff !important\">\n                            Cash\n                          </p></div></div></label></div></div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-4\">", "</div>", [_vm._ssrNode("<div class=\"cart_sidebar\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-between\"><p>Ecommerce Voucher</p></div> <form id=\"coupon\" action><div class=\"d-flex align-items-center\"><input type=\"text\" hidden=\"hidden\"" + _vm._ssrAttr("value", _vm.insertdata.id) + "> <input type=\"text\" hidden=\"hidden\"" + _vm._ssrAttr("value", _vm.coupons.price) + "> <input type=\"text\" placeholder=\"Enter Your Promo Code \"" + _vm._ssrAttr("value", _vm.coupons.couponCode) + " class=\"form-control me-2 rounded-0\" style=\"\\n                      font-size: 12px;\\n                      border: none !important;\\n                      border-bottom: 1px solid #900c3f !important;\\n                    \"> <button class=\"btn_confirm h-100 rounded-0\" style=\"border: 1px solid\">\n                    Submit\n                  </button></div></form> "), _vm._ssrNode("<div class=\"price_summery\">", "</div>", [_vm._ssrNode("<a class=\"btn_edit w-100 badge bg-success-light mt-2 text-start\">\n                  view available offers\n                </a> "), _vm._ssrNode("<div class=\"modal_checkoutpage couponModal\">", "</div>", [_vm._ssrNode("<div class=\"modal_box\">", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center\"><h6 class=\"mb-0\">Coupon discounts </h6> <a class=\"btn_edit modal_close pe-0\"><i class=\"fa-solid fa-x\"></i></a></div> <hr> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode(_vm._ssrList(_vm.Dcouponlist, function (couponItem) {
    return "<div class=\"discountList\"><div class=\"coupon\"><div class=\"cbottom\"><p>\n                                Min Spend <strong>" + _vm._ssrEscape("$" + _vm._s(couponItem.min_shopping)) + "</strong> to get\n                                " + (couponItem.d_percent !== null && couponItem.d_percent !== undefined && couponItem.d_percent !== 0 ? "<span>" + _vm._ssrEscape("\n                                  $" + _vm._s(couponItem.d_percent) + ".00\n                                ") + "</span>" : "<!---->") + " " + (couponItem.d_fvalue !== null && couponItem.d_fvalue !== undefined && couponItem.d_fvalue !== 0 ? "<span>" + _vm._ssrEscape("\n                                  " + _vm._s(couponItem.d_fvalue) + "%\n                                ") + "</span>" : "<!---->") + "\n                                OFF on total orders\n                              </p> <div class=\"copyCode\"><p>Code: <strong>" + _vm._ssrEscape(_vm._s(couponItem.promocode)) + "</strong></p> <a class=\"btn_copy text-dark\" style=\"cursor: pointer;\"><i class=\"fa-regular fa-copy\"></i></a></div></div></div></div>";
  }) + " "), _c('nuxt-link', {
    staticClass: "btn_edit d-flex justify-content-end",
    attrs: {
      "to": "/coupons"
    }
  }, [_vm._v("See all ")])], 2)])], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pirce_summary\">", "</div>", [_vm._ssrNode("<table class=\"table\"><tbody><tr><td><strong>Order Summary</strong></td> <td></td></tr> <tr><td><strong>Items Total</strong></td> <td class=\"text-end\">" + _vm._ssrEscape("$" + _vm._s(_vm.sumOfLastPrices.toFixed(2))) + "</td></tr> " + (_vm.COD_fee !== 0 && _vm.selectedPayment == 'COD' ? "<tr><td><strong>Cash on delivery Fee </strong></td> <td class=\"text-end\">" + _vm._ssrEscape("$" + _vm._s(_vm.COD_fee)) + "</td></tr>" : "<!---->") + " <tr><td><strong>Delivery Fee </strong></td> <td class=\"text-end\">" + _vm._ssrEscape("$" + _vm._s(_vm.sumOfFlatRatePrices.toFixed(2))) + "</td></tr> <tr id=\"discount\"><td><strong class=\"text-success\">Coupon Discount</strong></td> <td class=\"text-end text-success\">" + _vm._ssrEscape("-$" + _vm._s(typeof _vm.discount === 'number' ? _vm.discount.toFixed(2) : '')) + "</td></tr> <tr><td><strong>Total Payment</strong></td> <td class=\"text-end\">" + _vm._ssrEscape("$" + _vm._s(_vm.totalSum.toFixed(2))) + "</td></tr> " + (this.selectedPayment == 'COD' ? "<tr id=\"#Paymethod\" class=\"border-0\"><td class=\"border-0\"><strong>Payment method</strong></td> <td class=\"text-end border-0\"><p class=\"badge bg-success text-white\">COD</p></td></tr>" : "<!---->") + " " + (this.selectedPayment !== '' && this.selectedPayment !== 'COD' ? "<tr id=\"#Paymethod\" class=\"border-0\"><td class=\"border-0\"><strong>Payment method</strong></td> <td class=\"text-end border-0\"><p class=\"badge bg-success-light\">CARD</p></td></tr>" : "<!---->") + "</tbody></table> <div><p id=\"errorDiscount\" class=\"text-start badge bg-danger-light\" style=\"width: fit-content;\">Wrong\n                    coupon code </p> <p id=\"discount_msg\" class=\"text-start badge bg-success-light\" style=\"width: fit-content;\">Checkout\n                    with Coupon Cashback</p> <p class=\"text-end\">VAT included, Where applicable </p></div> "), _vm.cart.length > 0 ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<button type=\"submit\" class=\"btn_cart text-center\" style=\"\\n                      visibility: unset;\\n                      background-color: #900c3f;\\n                      color: #fff;\\n                      margin-top: 10px;\\n                    \">\n                    Place Order\n                  </button>")], 2) : _vm._ssrNode("<span>", "</span>", [_c('center', [_vm._v("Please add to cart.")])], 1)], 2)], 2)])], 2), _vm._ssrNode(" <input type=\"text\" hidden=\"hidden\"" + _vm._ssrAttr("value", _vm.selectedPayment) + ">")], 2)])]), _vm._ssrNode(" <div class=\"back_top\"><a href=\"#top\"><i class=\"fa-solid fa-angle-up\"></i></a></div> "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=6f7735f6&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Common_MobileSidebar.vue + 4 modules
var Common_MobileSidebar = __webpack_require__(54);

// EXTERNAL MODULE: ./components/Common_MiniTabNavbar.vue + 4 modules
var Common_MiniTabNavbar = __webpack_require__(55);

// EXTERNAL MODULE: ./components/Common_MobileSearchProduct.vue + 2 modules
var Common_MobileSearchProduct = __webpack_require__(67);

// EXTERNAL MODULE: ./components/RecentView.vue + 2 modules
var RecentView = __webpack_require__(69);

// EXTERNAL MODULE: ./components/NavbarSecond.vue + 4 modules
var NavbarSecond = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js&







/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  middleware: "auth",
  components: {
    NavbarSecond: NavbarSecond["a" /* default */],
    Common_MobileSidebar: Common_MobileSidebar["default"],
    Common_MiniTabNavbar: Common_MiniTabNavbar["default"],
    Common_MobileSearchProduct: Common_MobileSearchProduct["default"],
    RecentView: RecentView["default"]
  },
  head: {
    title: "Checkout"
  },
  data() {
    return {
      cardList: [],
      cardData: {
        holder_name: '',
        card_number: '',
        expiry_date: ''
      },
      billAddress: "",
      shipp_address: "",
      user_id: 0,
      userdata: {
        name: "",
        email: "",
        phone_number: "",
        gender: "",
        birthdate: "",
        address: "",
        address_1: "",
        country_1: "",
        landmark_1: "",
        city_1: "",
        phone_1: "",
        address_2: "",
        country_2: "",
        landmark_2: "",
        city_2: "",
        phone_2: "",
        created_at: null
      },
      getDatas: [],
      insertdata: {
        id: "",
        name: "",
        address: "",
        email: "",
        phone_number: "",
        country: "",
        city: "",
        //ship
        shipper_name: "",
        shipper_email: "",
        shipper_phone_number: "",
        shipper_address: "",
        shipper_country: "",
        shipper_city: "",
        address_1: "",
        country_1: "",
        city_1: "",
        landmark_1: "",
        address_2: "",
        country_2: "",
        city_2: "",
        landmark_2: "",
        addresses: []
      },
      coupons: {
        couponCode: "",
        price: this.sumOfLastPrices
      },
      loading: false,
      email: "",
      showDifferentAddress: false,
      differentAddressField: "",
      // Initialize different address field if needed
      cart: [],
      notifmsg: "",
      invidecodeError: "",
      errors: {},
      itemCount: 0,
      subtotal: 0,
      updatedQuantity: 0,
      customer_id: "",
      coupon: "",
      dataArray: [],
      sumOfLastPrices: 0,
      sumOfFlatRatePrices: 0,
      totalSum: 0,
      discount: "",
      selectedPayment: '',
      companyData: [],
      COD_fee: 0,
      Dcouponlist: '',
      couponModal: '',
      address: []
    };
  },
  computed: {
    loggedIn() {
      if (!$auth.loggedIn) {
        this.$router.push("/checkout");
      } else {
        this.$router.push("/");
      }
      return this.$auth.loggedIn;
    }
  },
  mounted() {
    this.openPromo();
    this.cart.forEach(item => {
      item.shippingDate = this.calculateShippingDate(item.product.shipping_days);
    });
    if (false) {}

    this.getcompanyData();
    this.openModal();
    this.getQuponList();
    this.calculateSumOfLastPrices();
  },
  methods: {
    opendiscount() {
      external_jquery_default()(".couponModal").fadeIn();
    },
    closediscount() {
      external_jquery_default()(".couponModal").fadeOut();
    },
    copyCode(code) {
      const tempInput = document.createElement('input');
      tempInput.value = code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
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
        title: "Code Copied successfully!"
      });
    },
    handlePaymentSelection() {
      if (this.selectedPayment === 'COD') {
        this.calculateSumOfLastPrices();
      } else {
        this.calculateSumOfLastPrices();
      }
    },
    openModal() {
      external_jquery_default()('.billing_address').click(function () {
        external_jquery_default()(".bill_address").fadeIn();
      });
      external_jquery_default()('.modal_close').click(function () {
        external_jquery_default()(".bill_address").fadeOut();
      });
    },
    saveCard() {
      const formData = new FormData();
      formData.append('user_id', this.user_id);
      formData.append('holder_name', this.cardData.holder_name);
      formData.append('card_number', this.cardData.card_number);
      formData.append('expiry_date', this.cardData.expiry_date);
      // console.log(formData);
      this.$axios.post('/user/saveCard', formData).then(response => {
        // console.log(response.data);
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
          title: "Order submitted successfully!"
        });
        external_jquery_default()("#cardInput")[0].reset();
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
          const errorMessages = Object.values(this.errors).flat();

          // Concatenate error messages into a single string
          const errorMessage = errorMessages.join("<br>");
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
            icon: "error",
            title: errorMessage
          });
        }
      });
    },
    addCard() {
      external_jquery_default()(".addNewCardBT").click(function () {
        external_jquery_default()(".addNewCard").fadeIn();
      });
      external_jquery_default()(".backBT").click(function () {
        external_jquery_default()(".addNewCard").fadeOut();
      });
    },
    calculateSumOfLastPrices() {
      let selectedPayment = this.selectedPayment ? this.selectedPayment : '0';
      let COD_fee = this.COD_fee;
      // console.log(COD_fee);
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        const cart = JSON.parse(cartData);
        let sumOfLastPrices = 0;
        let sumOfFlatRatePrices = 0;
        let totalPrice = 0;
        cart.forEach(item => {
          if (item.product.warrantyamt) {
            totalPrice += parseFloat(item.product.last_price) * item.quantity;
            sumOfFlatRatePrices += parseFloat(item.product.flat_rate_price ? item.product.flat_rate_price : '0') * item.quantity;
            sumOfLastPrices = totalPrice + item.product.warrantyamt * item.quantity;
            console.log(sumOfLastPrices);
          } else {
            sumOfLastPrices += parseFloat(item.product.last_price) * item.quantity;
            sumOfFlatRatePrices += parseFloat(item.product.flat_rate_price ? item.product.flat_rate_price : '0') * item.quantity;
          }
        });
        let allsum;
        let allsum_warranty = 0;
        let subsum = sumOfLastPrices + sumOfFlatRatePrices;

        // console.log(subsum);

        if (selectedPayment == "COD") {
          allsum = parseFloat(subsum) + parseFloat(COD_fee);
          // console.log(allsum);
        } else {
          allsum = subsum;
        }
        this.coupons.price = allsum;
        this.sumOfLastPrices = sumOfLastPrices;
        this.sumOfFlatRatePrices = sumOfFlatRatePrices;
        this.totalSum = allsum;
      }
    },
    updateSelectedData() {
      // console.log("Selected data:", this.shipp_address, "BilTo:", this.billAddress);
    },
    getPrice(item) {
      let final_price = 0;
      const price = item.quantity * item.product.last_price;
      // console.log(item.product.warrantyamt);

      if (item.product.warrantyamt) {
        final_price = price + item.quantity * item.product.warrantyamt;
      } else {
        final_price = price;
      }
      return final_price;
    },
    getSave(item) {
      const save = item.quantity * item.product.price - item.quantity * item.product.last_price;
      // console.log(save);
      return save;
    },
    calculateShippingDate(shippingDays) {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const nextDay = currentHour >= 17 ? 1 : 0;
      const shippingDate = new Date();
      shippingDate.setDate(currentDate.getDate() + (shippingDays ? shippingDays : nextDay));
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      };
      const formattedDate = shippingDate.toLocaleDateString("en-US", options);
      return formattedDate;
    },
    async getCouponData() {
      const formData = {
        couponCode: this.coupons.couponCode,
        price: this.coupons.price,
        user_id: this.insertdata.id
      };
      // console.log(formData);
      this.$axios.post(`/unauthenticate/couponDiscount`, formData).then(response => {
        this.coupon = response.data.coupon_data;
        this.totalSum = response.data.coupon_data.last_discount_price;
        this.discount = this.coupon.discount;
        this.coupon_id = response.data.coupon_data.id;
        external_jquery_default()("#discount").fadeIn();
        external_jquery_default()("#discount_msg").fadeIn();
        external_jquery_default()("#errorDiscount").fadeOut();
        // console.log(response.data.coupon_data.last_discount_price);
      }).catch(error => {
        // console.error("Error fetching coupon data:", error);
        external_jquery_default()("#errorDiscount").fadeIn();
        this.errors = error.response.data.errors;
        const errorMessages = Object.values(this.errors).flat();
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
          icon: "error",
          title: errorMessages
        });
      });
    },
    openPromo() {
      external_jquery_default()(".btn_promo").on("click", function () {
        external_jquery_default()(".promo").fadeIn();
      });
      external_jquery_default()(".modal_close").on("click", function () {
        external_jquery_default()(".promo").fadeOut();
      });
    },
    copybillingAddress() {
      this.insertdata.shipper_name = this.insertdata.name;
      this.insertdata.shipper_email = this.insertdata.email;
      this.insertdata.shipper_phone_number = this.insertdata.phone_number;
      this.insertdata.shipper_address = this.insertdata.address;
      this.insertdata.shipper_country = this.insertdata.country;
      this.insertdata.shipper_city = this.insertdata.city;
    },
    defaultLoadingData() {
      this.$axios.get("/auth/showProfileData").then(response => {
        // console.log("Data=======" + response.data.address);
        this.insertdata.id = response.data.data.id;
        // this.user_id = response.data.data.id;
        this.insertdata.name = response.data.data.name;
        this.getDatas = response.data.data;
        this.insertdata.email = response.data.data.email;
        this.insertdata.phone_number = response.data.data.phone_number;
        this.address = response.data.address;
        if (this.address.length > 0) {
          this.shipp_address = this.address[0];
          this.billAddress = this.address[0];
        }
        this.user_id = response.data.data.id;
        this.defaultLoading();
        this.getQuponList();
      });
    },
    getcompanyData() {
      this.$axios.get('/setting/getCompanyData').then(response => {
        this.companyData = response.data;
        this.COD_fee = response.data.transaction_fee;
      });
    },
    defaultLoading() {
      // console.log(this.insertdata.id);
      const id = this.insertdata.id;
      this.$axios.get(`/user/cardlist/${id}`).then(response => {
        this.cardList = response.data;
        // console.log(response.data);
      }).catch(error => {
        // console.error('Error fetching card list:', error);
      });
    },
    clearCart() {
      this.loading = true;
      localStorage.removeItem("cart");
      this.cart = [];
      this.cartItemCount();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    placeOrder() {
      const formData = new FormData();
      formData.append("cart", JSON.stringify(this.cart));
      formData.append("subTotal", this.totalSum);
      formData.append("item_total", this.sumOfLastPrices);
      formData.append("shipp_address", this.shipp_address);
      formData.append("billAddress", this.billAddress);
      formData.append("Cutomer_name", this.insertdata.name);
      formData.append("Cutomer_email", this.insertdata.email);
      formData.append("Cutomer_phone_number", this.insertdata.phone_number);
      formData.append("coupon_id", this.coupon_id ? this.coupon_id : '');
      formData.append("user_id", this.insertdata.id);
      formData.append("payment_staus", this.selectedPayment);
      // console.log(formData);
      // return false;
      const headers = {
        "Content-Type": "multipart/form-data"
      };
      this.$axios.post("/order/submitOrder", formData, {
        headers
      }).then(response => {
        // const token = response.data.access_token;
        // this.$auth.setUserToken(token);
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
          title: "Order submitted successfully!"
        });
        this.clearCart();
        this.$router.push("/");
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
          const errorMessages = Object.values(this.errors).flat();

          // Concatenate error messages into a single string
          const errorMessage = errorMessages.join("<br>");
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
            icon: "error",
            title: errorMessage
          });
        }
      });
    },
    clearCart() {
      this.loading = true;
      localStorage.removeItem("cart");
      this.cart = [];
      this.cartItemCount();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    updateQuantity(productId, newQuantity) {
      this.loading = true;
      const index = this.cart.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        this.cart[index].quantity = newQuantity;
        this.saveCart();
        this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    },
    loadCart() {
      this.loading = true;
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
      let itemCount = 0;
      this.cart.forEach(item => {
        if (item.product) {
          // Add a check to ensure item.product is defined
          itemCount += parseInt(item.quantity);
        }
      });
      this.itemCount = itemCount;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    handleCartItemCountUpdated(itemCount) {
      // This method will be called when the event is emitted from ComponentA
      // console.log('Received  DesktopViewOptions Com.:', itemCount);
      // Update the local data property with the received itemCount
      this.itemCount = itemCount;
    },
    removeFromCart(product) {
      this.loading = true;
      const index = this.cart.findIndex(item => item.product.id === product.id);
      if (index !== -1) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
        this.saveCart();
        this.calculateSubtotal();
        this.cartItemCount();
        this.calculateSumOfLastPrices();
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addToCart(productId) {
      const productToAdd = this.prouducts.find(product => product.id === productId);
      const existingItem = this.cart.find(item => item.product.id === productId);
      if (existingItem) {
        // existingItem.quantity += 1;
      } else {
        this.cart.push({
          product: productToAdd,
          quantity: 1
        });
      }
      this.saveCart();
      this.cartItemCount();
      this.calculateSubtotal();
    },
    cartItemCount() {
      //  this.loading = true;
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += parseInt(item.quantity);
      });
      this.itemCount = itemCount;
      // console.log("Emitting cartItemCountUpdated event with itemCount:", this.itemCount);
      this.$eventBus.$emit("cartItemCountUpdated", this.itemCount);
    },
    calculateSubtotal() {
      //  this.loading = true;
      let subtotal = 0;
      this.cart.forEach(item => {
        const product = item.product;
        // console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
        // const priceWithoutCommas = product.price.replace(/,/g, '');
        const priceWithoutCommas = product.price;
        const priceAsNumber = parseFloat(priceWithoutCommas);
        if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
          subtotal += item.quantity * priceAsNumber;
        } else {
          console.error("Invalid quantity or price:", item.quantity, product.price);
        }
        // console.log(`Intermediate Subtotal: ${subtotal}`);
      });

      //console.log(`Final Subtotal: ${subtotal}`);
      return this.subtotal = subtotal;
      //return subtotal;
    },

    async getQuponList() {
      const minShop = this.totalSum;
      const user_id = this.user_id;
      console.log(user_id);
      const queryParams = {
        minShop: minShop,
        user_id: user_id
      };
      this.$axios.get('/setting/getcoupons', {
        params: queryParams
      }).then(response => {
        this.Dcouponlist = response.data.couponList;
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d723a15a"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecentView.vue?vue&type=template&id=6b34ef93&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"col-6\"><div class=\"sell_title\"><h5>Recent Views</h5></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RecentView.vue?vue&type=template&id=6b34ef93&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/RecentView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d82283e"
  
)

/* harmony default export */ var RecentView = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout.js.map