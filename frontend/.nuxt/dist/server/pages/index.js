exports.ids = [78,9,13,20,25,28,29,31,32,34,45,47];
exports.modules = {

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("4f4dab34", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBannarDesktopView.vue?vue&type=template&id=40b72d50&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"top_bannar desktop_view\"><div class=\"container\"><div class=\"col-12\"><img" + _vm._ssrAttr("src", _vm.bannerData) + " loading=\"lazy\" alt class=\"img-fluid\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue?vue&type=template&id=40b72d50&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBannarDesktopView.vue?vue&type=script&lang=js&
/* harmony default export */ var TopBannarDesktopViewvue_type_script_lang_js_ = ({
  data() {
    return {
      errors: {},
      bannerData: ''
    };
  },
  mounted() {
    this.fetchBannerData();
  },
  methods: {
    fetchBannerData() {
      this.$axios.get('/unauthenticate/headerbanner').then(response => {
        this.bannerData = response.data.image;
        // console.log(response.data);
      }).catch(error => {
        this.error = error.message;
        console.error('Error fetching Top header banner data:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBannarDesktopViewvue_type_script_lang_js_ = (TopBannarDesktopViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopBannarDesktopViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a01e6386"
  
)

/* harmony default export */ var TopBannarDesktopView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=0967b14a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "search_bar"
  }, [_vm._ssrNode("<div class=\"container\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-8\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"logo nav_tab\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\" class=\"btn_menu mobile_view\" data-v-0967b14a><i class=\"fa-solid fa-bars-staggered\" data-v-0967b14a></i></button> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"offcanvasExample\" aria-labelledby=\"offcanvasExampleLabel\" class=\"offcanvas offcanvas-start\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\" data-v-0967b14a><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\" data-v-0967b14a></button> <h5 id=\"offcanvasExampleLabel\" class=\"offcanvas-title\" data-v-0967b14a>Ecommerce</h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"side_nav\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\" data-v-0967b14a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('h6', [_vm._v("My Ecommerce Account")]), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul data-v-0967b14a>", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-box"
  }), _vm._v("Order")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/my-reviews"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-comment-dots"
  }), _vm._v("Pending\n                                                    Reviews")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ticket-simple"
  }), _vm._v("Voucher\n                                                ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v("Save items ")])], 1) : _vm._e()], 2)], 2)]), _vm._ssrNode(" "), _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<div class=\"row\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\" data-v-0967b14a>", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": "/category/all-categorys"
      }
    }, [_c('h6', [_vm._v(_vm._s(category.name))]), _vm._v(" "), _c('p', [_vm._v("See all")])])], 1), _vm._ssrNode(" <ul data-v-0967b14a>" + _vm._ssrList(category.children, function (childCategory) {
      return "<li data-v-0967b14a><a href=\"#\" data-v-0967b14a><i class=\"fa-solid fa-list\" style=\"font-size: 10px;\" data-v-0967b14a></i>" + _vm._ssrEscape(_vm._s(childCategory.name)) + "</a></li>";
    }) + "</ul>")], 2)]);
  }), _vm._ssrNode(" <div class=\"row\" data-v-0967b14a><div class=\"col-12\" data-v-0967b14a><ul data-v-0967b14a><li data-v-0967b14a><a href=\"#\" data-v-0967b14a>Contact Us</a></li> <li data-v-0967b14a><a href=\"#\" data-v-0967b14a>Terms and condition</a></li></ul></div></div>")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"nav_bar tab_show\" style=\"@media(max-width: 768px){display: none;}\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"btn_menu\" data-v-0967b14a><i class=\"fa-solid fa-bars-staggered\" data-v-0967b14a></i></button> "), _vm._ssrNode("<div class=\"nav_menu nav_op\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<nav data-v-0967b14a>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul data-v-0967b14a>" + (index < _vm.limit ? "<li data-v-0967b14a><a href=\"#\" class=\"d-flex justify-content-between align-items-center\" data-v-0967b14a><div class=\"d-flex align-items-center\" data-v-0967b14a><i class=\"fa-solid fa-list\" data-v-0967b14a></i>" + _vm._ssrEscape("\n                                                " + _vm._s(category.name) + "\n                                            ") + "</div> <i class=\"fa-solid fa-angle-right\" data-v-0967b14a></i></a> <div class=\"sub_menu\" data-v-0967b14a>" + (category.children && category.children.length > 0 ? "<div class=\"row\" data-v-0967b14a>" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\" data-v-0967b14a><h6 data-v-0967b14a><a href=\"#\" data-v-0967b14a>" + _vm._ssrEscape("\n                                                            " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul data-v-0967b14a>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li data-v-0967b14a><a href=\"#\" data-v-0967b14a>" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul data-v-0967b14a>", "</ul>", [_vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("Other Categories\n                                            ")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2)])], 2), _vm._ssrNode(" "), _c('Nuxt-link', {
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
  })])], 2)]), _vm._ssrNode(" <div class=\"col-6 desktop_view mini_tab_hide\" data-v-0967b14a><form action data-v-0967b14a><i class=\"fa-solid fa-magnifying-glass\" data-v-0967b14a></i> <input type=\"text\" id=\"autocomplete-input\" placeholder=\"Search products...\" class=\"form-control ui-menu-item\" data-v-0967b14a> <button type=\"button\" data-v-0967b14a>Search</button></form></div> "), _vm._ssrNode("<div class=\"col-lg-3 col-md-2 col-2 desktop_view\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"menus\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"dropdown\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle btn_account b_link\" data-v-0967b14a><i class=\"fas fa-user\" data-v-0967b14a></i> Account\n                        </button> "), _vm._ssrNode("<ul class=\"dropdown-menu\" data-v-0967b14a>", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<span data-v-0967b14a>", "</span>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn\" data-v-0967b14a>Sign Out</button>")], 2) : _vm._ssrNode("<span data-v-0967b14a>", "</span>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn\" data-v-0967b14a>Sign In</button> "), _c('nuxt-link', {
    staticClass: "drop_btn text-white",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("Signup")])], 2), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": _vm.getProfileLink()
    }
  }, [_vm._v("MY Account")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li data-v-0967b14a>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-wishlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e()], 2)], 2), _vm._ssrNode(" <div class=\"dropdown\" data-v-0967b14a><button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle\" data-v-0967b14a><i class=\"fas fa-circle-question\" data-v-0967b14a></i> Help\n                        </button> <ul class=\"dropdown-menu\" data-v-0967b14a><li data-v-0967b14a><a href=\"#\" class=\"dropdown-item\" data-v-0967b14a>Help Center </a></li> <li data-v-0967b14a><a href=\"#\" class=\"dropdown-item\" data-v-0967b14a>Place An Order</a></li> <li data-v-0967b14a><a href=\"#\" class=\"dropdown-item\" data-v-0967b14a>Payment Option </a></li> <li data-v-0967b14a><a href=\"#\" class=\"dropdown-item\" data-v-0967b14a>Truck an order </a></li> <li data-v-0967b14a><a href=\"#\" class=\"dropdown-item\" data-v-0967b14a>Cancel an order </a></li> <li data-v-0967b14a><a href=\"#\" class=\"dropdown-item\" data-v-0967b14a>Return &amp; Refund </a></li> <button type=\"button\" class=\"drop_btn\" data-v-0967b14a>live Chart </button></ul></div> "), _c('Nuxt-link', {
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
  }, [_vm._v(_vm._s(_vm.itemCount))]), _vm._v("Cart")])], 2)]), _vm._ssrNode(" <div class=\"col-4 ms-auto mobile_view\" data-v-0967b14a><div class=\"mobile_nav_option\" data-v-0967b14a><a class=\"search_form\" data-v-0967b14a><i class=\"fa-solid fa-magnifying-glass\" data-v-0967b14a></i></a></div></div> "), _vm._ssrNode("<div class=\"search_form_modal\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"search_box_main\" data-v-0967b14a>", "</div>", [_vm._ssrNode("<div class=\"bar_search\" data-v-0967b14a><div data-v-0967b14a><a class=\"close_search_modal\" data-v-0967b14a><i class=\"fa-solid fa-arrow-left\" data-v-0967b14a></i></a></div> <div data-v-0967b14a><input type=\"text\" id=\"autocomplete-input_mobile\" name placeholder=\"Search Product, Categories\" data-v-0967b14a></div> <div data-v-0967b14a><button type=\"submit\" data-v-0967b14a><i class=\"fa-solid fa-magnifying-glass\" data-v-0967b14a></i></button></div></div> "), _vm._ssrNode("<ul data-v-0967b14a>", "</ul>", _vm._l(_vm.searchloop, function (item, key) {
    return _vm._ssrNode("<li data-v-0967b14a>", "</li>", [item.type == 'category' ? _c('nuxt-link', {
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

// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=0967b14a&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      cart: [],
      id: '',
      categories: [],
      itemCount: 0,
      //loggedIn: false,
      searchloop: []
    };
  },
  async mounted() {
    if (false) {}
    // this.fetchUserData();
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
    logout() {
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    },
    async fetchUserData() {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        this.$router.push('/');
        console.error('JWT token not found in local storage');
        return;
      }
      try {
        this.$axios.setToken(token, 'Bearer');
        const response = await this.$axios.post('/auth/me');
        //  console.log('User data:', response.data);
        this.id = response.data.id;
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.$axios.setToken(false);
      }
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
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0967b14a",
  "0d9d865e"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=template&id=124438cf&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "top_bannerOne"
  }, [_vm._ssrNode("<div class=\"row my-2\" data-v-124438cf>", "</div>", [_vm._ssrNode("<div class=\"col-xl-3 col-lg-3 col-md-12 col-sm-12 mini_tab_hide sec_One\" data-v-124438cf>", "</div>", [_vm._ssrNode("<div class=\"nav_menu\" data-v-124438cf>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\" data-v-124438cf>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-124438cf>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-124438cf>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.categories.length > 0 ? _vm._ssrNode("<nav data-v-124438cf>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul data-v-124438cf>" + (index < _vm.limit ? "<li data-v-124438cf><a href=\"#\" class=\"d-flex justify-content-between align-items-center\" data-v-124438cf><div class=\"d-flex align-items-center\" data-v-124438cf><i class=\"fa-solid fa-list\" style=\"font-size: 10px;\" data-v-124438cf></i>" + _vm._ssrEscape("\n\n                                    " + _vm._s(category.name) + "\n                                ") + "</div> <i class=\"fa-solid fa-angle-right\" data-v-124438cf></i></a> <div class=\"sub_menu\" data-v-124438cf>" + (category.children && category.children.length > 0 ? "<div class=\"row\" data-v-124438cf>" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\" data-v-124438cf><h6 data-v-124438cf><a href=\"#\" data-v-124438cf>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul data-v-124438cf>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li data-v-124438cf><a href=\"#\" data-v-124438cf>" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul data-v-124438cf>", "</ul>", [_vm._ssrNode("<li data-v-124438cf>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("All Categories")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2) : _vm._e()], 2)]), _vm._ssrNode(" " + (_vm.sliders.length > 0 ? "<div class=\"col-xl-6 col-lg-9 col-md-12 col-sm-12 sec_One\" data-v-124438cf><div id=\"carouselExample\" data-bs-ride=\"carousel\" data-bs-interval=\"3000\" class=\"carousel_nav carousel w-100 height_100\" data-v-124438cf><div class=\"carousel-indicators\" data-v-124438cf>" + _vm._ssrList(_vm.sliders, function (item, index) {
    return "<button type=\"button\" data-bs-target=\"#carouselExample\"" + _vm._ssrAttr("data-bs-slide-to", index) + _vm._ssrClass(null, {
      'active': index === _vm.currentIndex
    }) + " data-v-124438cf></button>";
  }) + "</div> " + (_vm.sliders.length > 0 ? "<div class=\"carousel-inner height_100\" data-v-124438cf>" + _vm._ssrList(_vm.sliders, function (item, index) {
    return "<div" + _vm._ssrClass("carousel-item height_100", {
      active: index === 0
    }) + " data-v-124438cf><img" + _vm._ssrAttr("src", item.images) + _vm._ssrAttr("alt", 'Slide ' + (index + 1)) + " class=\"d-block w-100 height_100\" data-v-124438cf></div>";
  }) + "</div>" : "<!---->") + " <button data-bs-target=\"#carouselExample\" type=\"button\" data-bs-slide=\"prev\" class=\"carousel-control-prev\" data-v-124438cf><span aria-hidden=\"true\" class=\"carousel-control-prev-icon\" data-v-124438cf></span> <span class=\"visually-hidden\" data-v-124438cf>Previous</span></button> <button data-bs-target=\"#carouselExample\" type=\"button\" data-bs-slide=\"next\" class=\"carousel-control-next\" data-v-124438cf><span aria-hidden=\"true\" class=\"carousel-control-next-icon\" data-v-124438cf></span> <span class=\"visually-hidden\" data-v-124438cf>Next</span></button></div></div>" : "<!---->") + " <div class=\"col-lg-3 col-12 d-xl-block d-none\" data-v-124438cf><div class=\"row\" style=\"height: 49%; object-fit: cover;\" data-v-124438cf><div class=\"col-12\" data-v-124438cf><img" + _vm._ssrAttr("src", _vm.adsData1) + " alt class=\"img-fluid h-100\" data-v-124438cf></div></div> <div class=\"row mt-2\" style=\"height: 49%; object-fit: cover;\" data-v-124438cf><div class=\"col-12\" data-v-124438cf><img" + _vm._ssrAttr("src", _vm.adsData2) + " alt class=\"img-fluid h-100\" data-v-124438cf></div></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=template&id=124438cf&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=script&lang=js&

/* harmony default export */ var NavSlidervue_type_script_lang_js_ = ({
  data() {
    return {
      loading: true,
      limit: 12,
      categories: [],
      sliders: [],
      currentIndex: 0,
      adsData1: '',
      adsData2: ''
    };
    // Set the initial index
  },

  mounted() {
    this.slidersImg();
    this.fetchData();
    this.fetchAdsData();
  },
  methods: {
    handleCarouselSlide(event) {
      const carousel = event.target;
      if (carousel.classList.contains('carousel_nav')) {
        if (carousel.querySelector('.carousel-inner .carousel-item:last-child').classList.contains('active')) {
          carousel.querySelector('.carousel-control-next').click();
        }
      }
    },
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-grid',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      setTimeout(() => {
        this.loading = false;
        this.categories = response.data;
      }, 2000); // Adjust the time as needed
    },

    async slidersImg() {
      console.log("slider images...");
      const response = await this.$axios.get(`/unauthenticate/slidersImages`);
      this.sliders = response.data;
    },
    async fetchAdsData() {
      this.$axios.get('/unauthenticate/getAdsbanner').then(response => {
        this.adsData1 = response.data.image1;
        this.adsData2 = response.data.image2;
        // console.log(response.data.image1);
      }).catch(error => {
        this.error = error.message;
        console.error('Error fetching Top ads header banner data:', error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavSlidervue_type_script_lang_js_ = (NavSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "124438cf",
  "3bd975b3"
  
)

/* harmony default export */ var NavSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryPart.vue?vue&type=template&id=bcad928a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\">", "</div>", [_vm._ssrNode("<div class=\"loader-container\">", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" loading=\"lazy\" alt=\"Loader\">")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-4\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": `/category/category-grid?slug=${item.slug}`
      }
    }, [_c('div', {
      staticClass: "cat_div"
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.image,
        "loading": "lazy"
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))])])])], 1);
  })], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryPart.vue?vue&type=template&id=bcad928a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryPart.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryPartvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      prouducts: []
    };
  },
  async mounted() {
    await this.fetchDefaultProduct();
  },
  methods: {
    async fetchDefaultProduct() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/speacialCategory`).then(response => {
        this.prouducts = response.data.data;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/CategoryPart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryPartvue_type_script_lang_js_ = (CategoryPartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryPart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryPartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e7c1b92"
  
)

/* harmony default export */ var CategoryPart = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DelasForYour.vue?vue&type=template&id=54415b52&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"deal_foryou\"><div class=\"row mb-2\"><div class=\"col-12 m-auto\"><div class=\"sell_title justify-content-center\"><h5>Deals For You</h5></div></div></div> " + _vm._ssrList(_vm.banner, function (item, index) {
    return "<div class=\"row\"><div class=\"col-6\"><a><img" + _vm._ssrAttr("src", item.imageOne) + " alt class=\"img-fluid\"></a></div> <div class=\"col-6\"><a><img" + _vm._ssrAttr("src", item.imageTwo) + " alt class=\"img-fluid\"></a></div></div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DelasForYour.vue?vue&type=template&id=54415b52&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DelasForYour.vue?vue&type=script&lang=js&
/* harmony default export */ var DelasForYourvue_type_script_lang_js_ = ({
  data() {
    return {
      banner: []
    };
  },
  mounted() {
    this.alldealsads();
  },
  methods: {
    async alldealsads() {
      this.loading = true;
      try {
        const response = await this.$axios.get(`/unauthenticate/alldealsads`);
        this.banner = response.data;
        // console.log(response.data);
      } catch (error) {
        // Handle error
      } finally {
        this.loading = false; // Hide loader after response
      }
    }
  }
});
// CONCATENATED MODULE: ./components/DelasForYour.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DelasForYourvue_type_script_lang_js_ = (DelasForYourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DelasForYour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DelasForYourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9005aa40"
  
)

/* harmony default export */ var DelasForYour = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategorySliders.vue?vue&type=template&id=1c433d9e&
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
    })])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container text-center my-3\">", "</div>", [_vm._ssrNode("<div class=\"swiper mySwiper pro_slider\">", "</div>", [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(category.products, function (item) {
      return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<div class=\"product_grid text-start\">", "</div>", [_vm._ssrNode((_vm.loading ? "<div class=\"loading-indicator\" style=\"text-align: center;position: absolute; z-index: 2; left: 0; top: 0; background: #ffffff5c; height: 100%; width: 100%; object-fit: contain;\"><div class=\"loader-container\"><img src=\"/loader/loader.gif\" alt=\"Loader\"></div></div>" : "<!---->") + " "), _c('nuxt-link', {
        attrs: {
          "to": `/product-details/${item.slug}`
        }
      }, [_c('img', {
        staticClass: "img-fluid",
        attrs: {
          "src": item.thumnail,
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
      }, [_c('strike', [_vm._v("$" + _vm._s(item.price.toFixed(2)))]), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(item.discount.toFixed(2)))])], 1) : _vm._e()]) : _c('div', [_c('p', [_vm._v("$" + _vm._s(item.last_price.toFixed(2)))])])]), _vm._ssrNode(" <div class=\"d-flex align-items-center\"><div class=\"rating\"><i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star checked\"></i> <i class=\"fa fa-star\"></i></div> <h6>(200)</h6></div> <button type=\"button\" class=\"btn_cart\">Add to cart\n                                    </button>")], 2)]);
    }), 0), _vm._ssrNode(" <div class=\"swiper-button-next\"></div> <div class=\"swiper-button-prev\"></div>")], 2)])], 2);
  }), 0)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategorySliders.vue?vue&type=template&id=1c433d9e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategorySliders.vue?vue&type=script&lang=js&
/* harmony default export */ var CategorySlidersvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      categoryname: '',
      currentSlide: 0,
      category_slug: '',
      categories: [],
      // slider: [],
      cart: [],
      loading: false,
      products_details: [],
      products: [],
      loading: false,
      categories: [],
      pro_count: 0,
      categoryname: ''
    };
  },
  async mounted() {
    this.calculateSubtotal();
    this.loadCart();
    this.cartItemCount();
    await this.fetchDefaultProduct();
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

    addToCart(product) {
      console.log("Adding product to cart:", product);
      const existingCartItemIndex = this.cart.findIndex(item => item.product.id === product.id);
      if (existingCartItemIndex !== -1) {
        console.log("Product already exists in cart, increasing quantity.");
        this.cart[existingCartItemIndex].quantity++;
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
        console.log("Product does not exist in cart, adding it.");
        this.cart.push({
          product: product,
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
      console.log("Updated cart:", this.cart);
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
      const category_id = 25;
      await this.$axios.get('/unauthenticate/searchProductCategory', {
        params: {
          category_id: category_id
          // Add more parameters as needed
        }
      }).then(response => {
        // console.log("======" + response.data.result);
        this.products_details = response.data.result;
        this.products = response.data.products;
        this.categories = response.data.result;
        // console.log(this.products);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/CategorySliders.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategorySlidersvue_type_script_lang_js_ = (CategorySlidersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategorySliders.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategorySlidersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c579563"
  
)

/* harmony default export */ var CategorySliders = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OfficalStore.vue?vue&type=template&id=f15d95b2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row mt-2\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>" + _vm._ssrEscape("Top " + _vm._s(_vm.count) + " Offical Store") + "</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", _vm._l(_vm.sellers, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": `/business/${item.slug}`
      }
    }, [_c('div', {
      staticClass: "cat_div"
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail,
        "loading": "lazy"
      }
    })])])], 1);
  }), 0)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OfficalStore.vue?vue&type=template&id=f15d95b2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OfficalStore.vue?vue&type=script&lang=js&
/* harmony default export */ var OfficalStorevue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      sellers: [],
      count: ''
    };
  },
  async mounted() {
    await this.fetchDefaultProduct();
  },
  methods: {
    async fetchDefaultProduct() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/allsellers`).then(response => {
        this.sellers = response.data.data;
        this.count = response.data.data_count;
        // console.log(response.data);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/OfficalStore.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OfficalStorevue_type_script_lang_js_ = (OfficalStorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OfficalStore.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OfficalStorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42cb580e"
  
)

/* harmony default export */ var OfficalStore = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61d55242_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61d55242_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61d55242_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61d55242_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_61d55242_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bgBackground{background-color:#b077d8!important}.mainContent{background-position:top;background-repeat:no-repeat;background-size:contain}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=61d55242&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "_top"
    }
  }, [_vm._ssrNode("<body class=\"bgBackground mainContent\">", "</body>", [_c('TopBannarDesktopView'), _vm._ssrNode(" "), _c('LogoAndPayment'), _vm._ssrNode(" "), _c('Navbar'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_content pt-2\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('NavSlider'), _vm._ssrNode(" "), _c('CategoryPart'), _vm._ssrNode(" "), _c('TopSellingItem'), _vm._ssrNode(" "), _c('DelasForYour'), _vm._ssrNode(" "), _c('CategorySliders'), _vm._ssrNode(" "), _c('OfficalStore')], 2)]), _vm._ssrNode(" <div class=\"back_top\"><a href=\"#top\"><i class=\"fa-solid fa-angle-up\"></i></a></div> "), _c('Footer'), _vm._ssrNode(" "), _c('LoginPopup')], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=61d55242&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initCarousel();
    });
  },
  methods: {
    initCarousel() {
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ['', ''],
        autoplayTimeout: 3000
        // Add more options as needed
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "422ffc15"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TopBannarDesktopView: __webpack_require__(145).default,LogoAndPayment: __webpack_require__(64).default,Navbar: __webpack_require__(146).default,NavSlider: __webpack_require__(147).default,CategoryPart: __webpack_require__(148).default,TopSellingItem: __webpack_require__(149).default,DelasForYour: __webpack_require__(150).default,CategorySliders: __webpack_require__(151).default,OfficalStore: __webpack_require__(152).default,Footer: __webpack_require__(58).default,LoginPopup: __webpack_require__(59).default})


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
  add("77554746", content, true, context)
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_5b820f5d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_5b820f5d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_5b820f5d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_5b820f5d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_5b820f5d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoAndPayment.vue?vue&type=template&id=5b820f5d&
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
  }, [_vm._v("Blog")])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogoAndPayment.vue?vue&type=template&id=5b820f5d&

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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("478c7064", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("49662953", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("547c5543", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_0967b14a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_0967b14a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_0967b14a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_0967b14a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_0967b14a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ui-menu-item>a.ui-corner-all[data-v-0967b14a]{clear:both;color:#555;display:block;font-weight:400;line-height:18px;padding:3px 15px;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.ui-state-active[data-v-0967b14a],.ui-state-hover[data-v-0967b14a]{background-color:#08c;background-image:none;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;color:#fff;-webkit-text-decoration:none;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSlider_vue_vue_type_style_index_0_id_124438cf_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".top_bannerOne .sec_One[data-v-124438cf]{max-height:380px}.hi-50[data-v-124438cf]{height:49%!important;-o-object-fit:cover;object-fit:cover}.height_100[data-v-124438cf]{height:100%!important;-o-object-fit:cover;object-fit:cover;width:100%!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySliders_vue_vue_type_style_index_0_id_1c433d9e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySliders_vue_vue_type_style_index_0_id_1c433d9e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySliders_vue_vue_type_style_index_0_id_1c433d9e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySliders_vue_vue_type_style_index_0_id_1c433d9e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySliders_vue_vue_type_style_index_0_id_1c433d9e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".catLink{font-size:14px}.catLink i{margin-left:5px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map