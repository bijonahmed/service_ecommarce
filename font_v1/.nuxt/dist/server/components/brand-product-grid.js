exports.ids = [3];
exports.modules = {

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/brandProductGrid.vue?vue&type=template&id=93684b8a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"product_section\">", "</div>", [_vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-md-4 desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"left_side_product\">", "</div>", [_vm._ssrNode("<div class=\"category_list\">", "</div>", [_vm._ssrNode("<h6>Category</h6> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": `/category/category-grid?slug=${category.slug}`
      }
    }, [_vm._v(_vm._s(category.name))])], 1);
  }), 0)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-8\">", "</div>", [_vm._ssrNode("<div class=\"product_list\">", "</div>", [_vm._ssrNode("<div class=\"title_product\"><div><h6>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h6></div> <div><label for>Short By:</label> <select name id><option value>Popularity</option> <option value>New arrival</option> <option value>Low to High</option> <option value>high to low</option></select></div></div> "), _vm._ssrNode("<div class=\"grid_list\">", "</div>", [_vm._ssrNode("<div><p>" + _vm._ssrEscape(_vm._s(_vm.pro_count) + " product found") + "</p></div> "), _vm._ssrNode("<div class=\"d-flex\">", "</div>", [_vm._ssrNode("<a type=\"button\" class=\"filter_btn mobile_view\"><i class=\"fa-solid fa-sliders\"></i></a> <a href=\"#\"><i class=\"fa-solid fa-list\"></i></a> "), _c('Nuxt-Link', {
    staticClass: "active",
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-grip"
  })])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"filter_modal\">", "</div>", [_vm._ssrNode("<div class=\"row px-4\"><div class=\"col-6\"></div> <div class=\"col-6 text-end\"><i class=\"fa-solid fa-x filter_close\" style=\"cursor: pointer;\"></i></div></div> "), _vm._ssrNode("<div class=\"modal_fdiv\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"left_side_product\">", "</div>", [_vm._ssrNode("<div class=\"category_list\">", "</div>", [_vm._ssrNode("<h6>Category</h6> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": `category/category-grid?slug=${category.slug}`
      }
    }, [_vm._v(_vm._s(category.name))])], 1);
  }), 0)], 2), _vm._ssrNode(" <div class=\"delivery_list\"><h6>Express delivery</h6> <ul><li><input type=\"checkbox\"><label for>DHL </label></li></ul></div> <div class=\"delivery_list\"><h6>Shipped from </h6> <ul><li><input type=\"checkbox\"><label for>From Bangladesh\n                                                                </label></li> <li><input type=\"checkbox\"><label for>From Bangladesh\n                                                                </label></li></ul></div> <div class=\"brands_list\"><h6>Brand</h6> <div class=\"search_side\"><i class=\"fa-solid fa-magnifying-glass\"></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\"></div> <ul class=\"brand_scroll\"><li><input type=\"checkbox\"><label for>Addidas\n                                                                </label></li> <li><input type=\"checkbox\"><label for>AGM </label></li></ul></div> <div class=\"price_range\"><div class=\"sidebr_title\"><h6>Price Range </h6> <button type=\"button\" class=\"btn_apply\">Apply</button></div> <div class=\"row\"><div class=\"col-md-12\"><div id=\"slider-range\" name=\"rangeInput\" class=\"price-filter-range\"></div> <div class=\"d-flex\" style=\"margin:10px auto\"><input type=\"number\" min=\"0\" max=\"9900\" oninput=\"validity.valid||(value='0');\" id=\"min_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px;\"> <input type=\"number\" min=\"0\" max=\"10000\" oninput=\"validity.valid||(value='10000');\" id=\"max_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px\"></div></div></div></div> <div class=\"brands_list\"><h6>size</h6> <div class=\"search_side\"><i class=\"fa-solid fa-magnifying-glass\"></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\"></div> <ul class=\"brand_scroll\"><li><input type=\"checkbox\"><label for>XS</label></li> <li><input type=\"checkbox\"><label for>S</label></li></ul></div> <div class=\"brands_list\"><h6>Gender</h6> <ul class=\"brand_scroll\"><li><input type=\"checkbox\"><label for>Boys</label></li> <li><input type=\"checkbox\"><label for>Girls</label></li></ul></div>")], 2)])])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.products, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6\">", "</div>", [_vm._ssrNode("<div class=\"product_grid\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.image,
        "alt": item.name
      }
    }), _vm._v(" "), item.free_shopping == 1 ? _c('span', [_vm._v("Free Delivery")]) : _vm._e(), _vm._v(" "), item.seller_name ? _c('strong', [_vm._v(_vm._s(item.seller_name) + " ")]) : _c('strong', [_vm._v("Admin Seller")]), _vm._v(" "), _c('h1', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', [item.discount_status == 1 ? _c('div', {
      staticClass: "d-flex align-items-center"
    }, [item.discount !== 0 ? _c('p', {
      staticClass: "me-1"
    }, [_vm._v("$" + _vm._s(item.percent_discount.toFixed(2)))]) : _c('p', {
      staticClass: "me-1"
    }, [_vm._v("$" + _vm._s(item.price.toFixed(2)))]), _vm._v(" "), item.discount !== 0 && item.discount !== '' ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.discount) + "%")])], 1) : _vm._e()]) : item.discount_status == 2 ? _c('div', {
      staticClass: "d-flex align-items-center"
    }, [item.discount !== 0 ? _c('p', {
      staticClass: "me-1"
    }, [_vm._v("$" + _vm._s(item.fixed_discount.toFixed(2)))]) : _c('p', {
      staticClass: "me-1"
    }, [_vm._v("$" + _vm._s(item.price.toFixed(2)))]), _vm._v(" "), item.discount !== 0 && item.discount !== '' ? _c('p', [_c('strike', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount))])], 1) : _vm._e()]) : _c('p', [_vm._v("$" + _vm._s(item.price.toFixed(2)))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div> <button type=\"button\" class=\"btn_cart\">Add to\n                                            cart</button>")], 2)]);
  }), 0), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"></div></div>")], 2)])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/brandProductGrid.vue?vue&type=template&id=93684b8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/brandProductGrid.vue?vue&type=script&lang=js&
/* harmony default export */ var brandProductGridvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      cart: [],
      products: [],
      product: [],
      categories: [],
      pro_count: 0,
      categoryname: ''
    };
  },
  mounted() {
    this.calculateSubtotal();
    this.loadCart();
    this.cartItemCount();
    this.fetchData();
    this.fetchDataCategory();
  },
  methods: {
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
    async fetchData() {
      this.loading = true;
      const slug = this.$route.query.slug;
      try {
        const response = await this.$axios.get(`/unauthenticate/brandproductList/${slug}`).then(response => {
          // console.log("=-===" + response.data.products);
          this.products = response.data.products;
          this.product = response.data.products;
          // console.log(response.data.products);
        });
      } catch (error) {
        // Handle error
      } finally {
        this.loading = false; // Hide loader after response
      }
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
// CONCATENATED MODULE: ./components/brandProductGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_brandProductGridvue_type_script_lang_js_ = (brandProductGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/brandProductGrid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_brandProductGridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a0ced2f"
  
)

/* harmony default export */ var brandProductGrid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=brand-product-grid.js.map