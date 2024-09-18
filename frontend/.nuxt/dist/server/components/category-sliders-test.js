exports.ids = [14];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("2a616928", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySlidersTest_vue_vue_type_style_index_0_id_7e7870d3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySlidersTest_vue_vue_type_style_index_0_id_7e7870d3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySlidersTest_vue_vue_type_style_index_0_id_7e7870d3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySlidersTest_vue_vue_type_style_index_0_id_7e7870d3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySlidersTest_vue_vue_type_style_index_0_id_7e7870d3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".catLink{font-size:14px}.catLink i{margin-left:5px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategorySlidersTest.vue?vue&type=template&id=7e7870d3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", _vm._l(_vm.categories, function (category, index) {
    return _vm._ssrNode("<div class=\"top_selling\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\">", "</div>", [_vm._ssrNode("<div class=\"sell_title stock_deals\">", "</div>", [_vm._ssrNode("<div><h5>" + _vm._ssrEscape(_vm._s(category.name)) + "</h5></div> "), _vm._ssrNode("<div>", "</div>", [_c('nuxt-link', {
      staticClass: "catLink",
      attrs: {
        "to": 'category/category-grid?slug=' + category.slug
      }
    }, [_vm._v("See\n                                All"), _c('i', {
      staticClass: "fas fa-arrow-right"
    })])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container text-center my-3\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\">", "</div>", [_vm._ssrNode("<div class=\"loader-container\">", "</div>", [_c('center', {
      staticClass: "loader-text"
    }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\">")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper mySwiper pro_slider\">", "</div>", [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", [_vm._l(category.products, function (item) {
      return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_c('nuxt-link', {
        attrs: {
          "to": `/product-details/${item.slug}`
        }
      }, [_c('img', {
        staticClass: "img-fluid",
        attrs: {
          "src": item.thumnail,
          "loading": "lazy"
        }
      }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), item.discount_status == 1 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.price * item.discount / 100))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1) : _vm._e()]) : item.discount_status == 2 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.discount))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount))])], 1) : _vm._e()]) : _c('div', [_c('p', [_vm._v("$" + _vm._s(item.price))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div>")], 2)]);
    }), _vm._ssrNode(" "), _vm._l(category.products, function (item) {
      return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_c('nuxt-link', {
        attrs: {
          "to": `/product-details/${item.slug}`
        }
      }, [_c('img', {
        staticClass: "img-fluid",
        attrs: {
          "src": item.thumnail,
          "loading": "lazy"
        }
      }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), item.discount_status == 1 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.price * item.discount / 100))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1) : _vm._e()]) : item.discount_status == 2 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.discount))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount))])], 1) : _vm._e()]) : _c('div', [_c('p', [_vm._v("$" + _vm._s(item.price))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div>")], 2)]);
    }), _vm._ssrNode(" "), _vm._l(category.products, function (item) {
      return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_c('nuxt-link', {
        attrs: {
          "to": `/product-details/${item.slug}`
        }
      }, [_c('img', {
        staticClass: "img-fluid",
        attrs: {
          "src": item.thumnail,
          "loading": "lazy"
        }
      }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), item.discount_status == 1 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.price * item.discount / 100))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1) : _vm._e()]) : item.discount_status == 2 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.discount))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount))])], 1) : _vm._e()]) : _c('div', [_c('p', [_vm._v("$" + _vm._s(item.price))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div>")], 2)]);
    }), _vm._ssrNode(" "), _vm._l(category.products, function (item) {
      return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_c('nuxt-link', {
        attrs: {
          "to": `/product-details/${item.slug}`
        }
      }, [_c('img', {
        staticClass: "img-fluid",
        attrs: {
          "src": item.thumnail,
          "loading": "lazy"
        }
      }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), item.discount_status == 1 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.price * item.discount / 100))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1) : _vm._e()]) : item.discount_status == 2 ? _c('div', [item.discount !== 0 ? _c('p', [_vm._v("$" + _vm._s(item.price - item.discount))]) : _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount))])], 1) : _vm._e()]) : _c('div', [_c('p', [_vm._v("$" + _vm._s(item.price))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div>")], 2)]);
    })], 2), _vm._ssrNode(" <div class=\"swiper-button-next\"></div> <div class=\"swiper-button-prev\"></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"slider-container\">", "</div>", [_vm._ssrNode("<div class=\"slider\">", "</div>", [_vm._l(category.products, function (item) {
      return _vm._ssrNode("<div class=\"slide\">", "</div>", [_c('nuxt-link', {
        attrs: {
          "to": `/product-details/${item.slug}`
        }
      }, [_c('div', {
        staticClass: "sell_itm text-start",
        attrs: {
          "bis_skin_checked": "1"
        }
      }, [_c('img', {
        staticClass: "img-fluid",
        attrs: {
          "src": item.thumnail_img,
          "alt": "product-image"
        }
      }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('h6', [_vm._v(" " + _vm._s(item.price - item.price * item.discount / 100) + " USD")]), _vm._v(" "), _c('h6', [_c('strike', [_vm._v(" " + _vm._s(item.price) + " USD")])], 1)])])], 1);
    }), _vm._ssrNode(" <div class=\"prev-slide\">‹</div> <div class=\"next-slide\">›</div>")], 2)])], 2)], 2);
  }), 0)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategorySlidersTest.vue?vue&type=template&id=7e7870d3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategorySlidersTest.vue?vue&type=script&lang=js&
/* harmony default export */ var CategorySlidersTestvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      categoryname: '',
      currentSlide: 0,
      category_slug: '',
      categories: [],
      // slider: [],
      cart: [],
      products: [],
      product: [],
      categories: [],
      pro_count: 0,
      categoryname: ''
    };
  },
  async mounted() {
    this.calculateSubtotal();
    this.loadCart();
    this.cartItemCount();
    await this.initOwlCarousel();
    await this.fetchDefaultProduct();
    // this.$nextTick(() => {
    //     const slider = this.$refs.slider;
    // });
    this.ssliderTest();
  },
  methods: {
    ssliderTest() {
      // Product slider 
      const swiper = new Swiper('.pro_slider', {
        slidesPerView: 6,
        breakpoints: {
          0: {
            slidesPerView: 2
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 2
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 6
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    },
    calculateSubtotal() {
      return 0;
    },
    cartItemCount() {
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += item.quantity;
      });
      this.itemCount = itemCount;
      console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
      this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);
    },
    updateQuantity(productId, newQuantity) {
      const index = this.cart.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        this.cart[index].quantity = newQuantity;
        this.saveCart();
        this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
      }
    },

    addToCart(productId) {
      const productToAdd = this.products.find(product => product.id === productId);
      //const existingItem = this.cart.find((item) => item.product.id === productId);

      if (productToAdd) {
        this.cart.push({
          product: productToAdd,
          quantity: 1
        });
      }
      this.saveCart();
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    },
    saveCart() {
      this.loading = true;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    scrollLeft() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.scrollToCurrentSlide();
      }
    },
    scrollRight() {
      if (this.currentSlide < this.products.length - 1) {
        this.currentSlide++;
        this.scrollToCurrentSlide();
      }
    },
    scrollToCurrentSlide() {
      const slidesContainer = this.$refs.slider;
      slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
    },

    async fetchDefaultProduct() {
      this.loading = true;
      const category_id = 25;
      await this.$axios.get('/unauthenticate/searchProductCategory', {
        params: {
          category_id: category_id
          // Add more parameters as needed
        }
      }).then(response => {
        // console.log("======" + response.data.result);
        this.products = response.data.result;
        this.product = response.data.result;
        this.categories = response.data.result;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    },
    async initOwlCarousel() {
      const slider = this.$el.querySelector('.slider');
      if (!slider) {
        console.error('Slider element not found');
        return;
      }
      let isDown = false;
      let startX;
      let scrollLeft;
      slider.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
      });
      slider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 3; // Adjust this value for smoother scrolling
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }
});
// CONCATENATED MODULE: ./components/CategorySlidersTest.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategorySlidersTestvue_type_script_lang_js_ = (CategorySlidersTestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategorySlidersTest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategorySlidersTestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d0c970d6"
  
)

/* harmony default export */ var CategorySlidersTest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-sliders-test.js.map