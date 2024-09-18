exports.ids = [47];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopSellingItem.vue?vue&type=template&id=4abc16c4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"top_selling\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-6\"><div class=\"sell_title\"><h5>Top Selling items</h5></div></div></div> "), _vm._ssrNode("<div class=\"swiper mySwiper pro_slider\">", "</div>", [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.toproducts, function (item) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_vm._ssrNode((_vm.loading ? "<div class=\"loading-indicator\" style=\"text-align: center;position: absolute; z-index: 2; left: 0; top: 0; background: #ffffff5c; height: 100%; width: 100%; object-fit: contain;\"><div class=\"loader-container\"><img src=\"/loader/loader.gif\" alt=\"Loader\"></div></div>" : "<!---->") + " "), _c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img,
        "loading": "lazy"
      }
    }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), item.discount_status == 1 ? _c('div', {
      staticClass: "d-flex aligh-items-center"
    }, [_c('p', [_vm._v("$" + _vm._s(item.last_price.toFixed(2)))]), _vm._v(" "), item.discount !== 0 ? _c('p', {
      staticClass: "ms-1"
    }, [_c('strike', [_vm._v("$" + _vm._s(item.price.toFixed(2)))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1) : _vm._e()]) : item.discount_status == 2 ? _c('div', {
      staticClass: "d-flex aligh-items-center"
    }, [_c('p', [_vm._v("$" + _vm._s(item.last_price.toFixed(2)))]), _vm._v(" "), item.discount !== 0 ? _c('p', {
      staticClass: "ms-1"
    }, [_c('strike', [_vm._v("$" + _vm._s(item.price.toFixed(2)))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount.toFixed(2)))])], 1) : _vm._e()]) : _c('div', [_c('p', [_vm._v("$" + _vm._s(item.last_price.toFixed(2)))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div> <button type=\"button\" class=\"btn_cart\">Add to\n                                    cart</button>")], 2)]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-button-next\"></div> <div class=\"swiper-button-prev\"></div>")], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopSellingItem.vue?vue&type=template&id=4abc16c4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopSellingItem.vue?vue&type=script&lang=js&
/* harmony default export */ var TopSellingItemvue_type_script_lang_js_ = ({
  data() {
    return {
      // currentSlide: 0, // Add this property to keep track of the current slide
      autoplayInterval: null,
      loading: false,
      toproducts: [],
      products: [],
      product: [],
      cart: []
    };
  },
  async mounted() {
    // await this.initOwlCarousel();
    await this.fetchDefaultProduct();
    await this.ssliderTest();
    this.calculateSubtotal();
    this.loadCart();
    this.cartItemCount();
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
      const existingItem = this.cart.find(item => item.product.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
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
          title: "Product successfully Added to cart"
        });
      } else {
        this.cart.push({
          product: productToAdd,
          quantity: 1
        });
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
          title: "Product successfully Added to cart"
        });
      }
      this.saveCart();
      this.cartItemCount();
      this.calculateSubtotal();
    },
    removeFromCart(product) {
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
      }
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
    calculateSubtotal() {
      return 0;
    },
    async fetchDefaultProduct() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/topSellingProducts`).then(response => {
        this.toproducts = response.data;
        this.products = response.data;
        this.product = response.data;
        console.log(response.data);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/TopSellingItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopSellingItemvue_type_script_lang_js_ = (TopSellingItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopSellingItem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopSellingItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "705f22a2"
  
)

/* harmony default export */ var TopSellingItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=top-selling-item.js.map