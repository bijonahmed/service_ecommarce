exports.ids = [93];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sell-on-filter.vue?vue&type=template&id=7fee3c5a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"product_section\">", "</div>", [_vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-md-4 desktop_view\"><div class=\"left_side_product\" style=\"margin-top: 10px;\"><div class=\"category_list\"><h6>Category</h6> <ul>" + _vm._ssrList(_vm.categories, function (category) {
    return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(category.name)) + "</a></li>";
  }) + "</ul></div></div></div> "), _vm._ssrNode("<div class=\"col-md-8\">", "</div>", [_vm._ssrNode("<div class=\"product_list p-0\" style=\"margin-top: 10px;\">", "</div>", [_vm._ssrNode("<div class=\"title_product top_title_here\"><div><h6>Sell On Ecommerce </h6></div> <div class=\"d-none\"><label for>Short By:</label> <select name id style=\"color: #110f0f;\"><option value>Popularity</option> <option value>New arrival</option> <option value>Low to High</option> <option value>high to low</option></select></div></div> "), _vm._ssrNode("<div class=\"grid_list p-3\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<p>" + _vm._ssrEscape(_vm._s(_vm.prouducts.length) + " product found") + "</p> "), _vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\">", "</div>", [_vm._ssrNode("<div class=\"loader-container\">", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" loading=\"lazy\" alt=\"Loader\">")], 2)]) : _vm._e()], 2), _vm._ssrNode(" <div class=\"d-flex\"><a type=\"button\" class=\"filter_btn mobile_view\"><i class=\"fa-solid fa-sliders\"></i></a></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row p-4\">", "</div>", _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6\">", "</div>", [_vm._ssrNode("<div class=\"product_grid\">", "</div>", [_vm.prouducts.length > 0 ? _c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v("Free Delivery")]), _vm._v(" "), _c('strong', [_vm._v("Official Store ")]), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.product_name))]), _vm._v(" "), _c('p', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.discount))]), _vm._v(" "), _c('span', [_vm._v("-5%")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('div', {
      staticClass: "rating d-none"
    }, [_c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star"
    })]), _vm._v(" "), _c('h6', [_vm._v("(200)")])]), _vm._v(" "), _c('p', {
      staticClass: "left_item d-none"
    }, [_vm._v("50 items left")]), _vm._v(" "), _c('div', {
      staticClass: "progress d-none"
    }, [_c('div', {
      staticClass: "progress-bar",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "role": "progressbar",
        "aria-valuenow": "70",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    })])]) : _vm._e(), _vm._ssrNode(" <button type=\"button\" class=\"btn_cart\">Add to cart\r\n                                        </button>")], 2)]);
  }), 0), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12 text-center\"><button" + _vm._ssrAttr("disabled", _vm.loadings) + " class=\"btn_cart my-2 mx-auto\" style=\"visibility: visible; width: fit-content;\">" + _vm._ssrEscape("\r\n                                        " + _vm._s(_vm.loadings ? 'Loading...' : 'Load more...') + "\r\n                                    ") + "</button></div></div>")], 2)])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sell-on-filter.vue?vue&type=template&id=7fee3c5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sell-on-filter.vue?vue&type=script&lang=js&
/* harmony default export */ var sell_on_filtervue_type_script_lang_js_ = ({
  props: {
    receivedSlug: String
  },
  data() {
    return {
      loadings: false,
      currentPage: 1,
      loading: false,
      cart: [],
      loading: false,
      prouducts: [],
      categories: [],
      pro_count: 0,
      categoryname: ''
    };
  },
  async mounted() {
    this.calculateSubtotal();
    this.loadCart();
    this.cartItemCount();
    await this.fetchDataCategory();
    await this.defalutLoading();
  },
  methods: {
    async loadMore() {
      this.loadings = true;
      this.currentPage++;
      await this.$axios.get(`/unauthenticate/pagniatedProducts?page=${this.currentPage}`).then(response => {
        this.prouducts = [...this.prouducts, ...response.data.result];
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loadings = false;
      });
    },
    async defalutLoading() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/pagniatedProducts`).then(response => {
        // this.categories = response.data;
        this.prouducts = response.data.result;
        this.pro_count = response.data.pro_count;
        // this.categoryname = response.data.categoryname;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
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
      const productToAdd = this.prouducts.find(product => product.id === productId);
      const existingItem = this.cart.find(item => item.product.id === productId);
      if (existingItem) {
        //existingItem.quantity += 1;
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
      let subtotal = 0;
      this.cart.forEach(item => {
        const product = item.product;
        console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
        const priceAsNumber = parseFloat(product.price.replace(/[^\d.]/g, '')); //510;//product.price;
        if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
          subtotal += item.quantity * priceAsNumber;
        } else {
          console.error('Invalid quantity or price:', item.quantity, product.price);
        }
        // console.log(`Intermediate Subtotal: ${subtotal}`);
      });
      //console.log(`Final Subtotal: ${subtotal}`);
      return this.subtotal = subtotal;
      //return subtotal;
    },

    categoryGrid() {
      const slug = this.$route.query.slug;
      //alert(paramSlug);
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
    async fetchData(slug) {
      this.loading = true;
      const response = await this.$axios.get(`/unauthenticate/findCategorys/${slug}`).then(response => {
        this.prouducts = response.data.result;
        this.pro_count = response.data.pro_count;
        this.categoryname = response.data.categoryname;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
      ;
    },
    async fetchDataCategory() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/filterCategorys`).then(response => {
        this.categories = response.data;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./pages/sell-on-filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sell_on_filtervue_type_script_lang_js_ = (sell_on_filtervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/sell-on-filter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sell_on_filtervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0dada390"
  
)

/* harmony default export */ var sell_on_filter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sell-on-filter.js.map