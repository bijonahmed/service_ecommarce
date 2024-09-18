exports.ids = [49];
exports.modules = {

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopSellingItem_copy.vue?vue&type=template&id=5e3adeca&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"top_selling\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-6\"><div class=\"sell_title\"><h5>Top Selling items</h5></div></div></div> "), _vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\">", "</div>", [_vm._ssrNode("<div class=\"loader-container\">", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\">")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper mySwiper pro_slider\">", "</div>", [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.toproducts, function (item) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img,
        "loading": "lazy"
      }
    }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v("$" + _vm._s(item.price - item.price * item.discount / 100))]), _vm._v(" "), _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1)]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div> <button type=\"button\" class=\"btn_cart\">Add to cart\n                                </button>")], 2)]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-button-next\"></div> <div class=\"swiper-button-prev\"></div>")], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopSellingItem_copy.vue?vue&type=template&id=5e3adeca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopSellingItem_copy.vue?vue&type=script&lang=js&
/* harmony default export */ var TopSellingItem_copyvue_type_script_lang_js_ = ({
  data() {
    return {
      currentSlide: 0,
      // Add this property to keep track of the current slide
      autoplayInterval: null,
      loading: false,
      toproducts: [],
      products: [],
      product: [],
      cart: []
    };
  },
  async mounted() {
    await this.initOwlCarousel();
    await this.fetchDefaultProduct();

    // this.calculateSubtotal();
    // this.loadCart();
    // this.cartItemCount();
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
            slidesPerView: 3
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
    scrollLeft() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.scrollToCurrentSlide();
      }
    },
    scrollRight() {
      if (this.currentSlide < this.toproducts.length - 1) {
        this.currentSlide++;
        this.scrollToCurrentSlide();
      }
    },
    scrollToCurrentSlide() {
      const slidesContainer = this.$refs.slider;
      slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
    },

    scrollToCurrentSlide() {
      const slidesContainer = this.$el.querySelector('.slider');
      slidesContainer.scrollLeft = this.currentSlide * slidesContainer.offsetWidth;
    },
    async fetchDefaultProduct() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/topSellingProducts`).then(response => {
        this.toproducts = response.data;
        this.products = response.data;
        this.product = response.data;
        // console.log(response.data);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    },
    async initOwlCarousel() {
      const slider = this.$el.querySelector('.slider');
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
// CONCATENATED MODULE: ./components/TopSellingItem_copy.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopSellingItem_copyvue_type_script_lang_js_ = (TopSellingItem_copyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopSellingItem_copy.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopSellingItem_copyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "01670b35"
  
)

/* harmony default export */ var TopSellingItem_copy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=top-selling-item-copy.js.map