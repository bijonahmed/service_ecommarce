exports.ids = [122,17,18,19,21,25,28,29,33,51];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("0dd798e0", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myPackages_vue_vue_type_style_index_0_id_51bd4524_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myPackages_vue_vue_type_style_index_0_id_51bd4524_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myPackages_vue_vue_type_style_index_0_id_51bd4524_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myPackages_vue_vue_type_style_index_0_id_51bd4524_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myPackages_vue_vue_type_style_index_0_id_51bd4524_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-51bd4524]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-51bd4524],.loading-indicator[data-v-51bd4524]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-51bd4524]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-51bd4524]{margin:0}.loader-top[data-v-51bd4524]{top:0}.loader-bottom[data-v-51bd4524]{bottom:0}.pricing-table[data-v-51bd4524]{background:linear-gradient(135deg,#6a11cb,#2575fc);border-radius:12px;box-shadow:0 8px 20px rgba(0,0,0,.15);color:#fff;margin:20px auto;max-width:300px;padding:30px;text-align:center;transition:transform .3s ease}.pricing-table[data-v-51bd4524]:hover{transform:translateY(-10px)}.pricing-table h2[data-v-51bd4524]{color:#fff;font-size:1.8rem;font-weight:700}.pricing-features[data-v-51bd4524],.pricing-table h2[data-v-51bd4524]{margin-bottom:20px}.feature[data-v-51bd4524]{background-color:hsla(0,0%,100%,.2);border-radius:8px;display:flex;font-size:1.1rem;justify-content:space-between;margin:10px 0;padding:10px 15px}.feature span[data-v-51bd4524]{font-weight:700}.price-tag[data-v-51bd4524]{align-items:baseline;display:flex;font-size:2.5rem;justify-content:center;margin-top:20px}.symbol[data-v-51bd4524]{font-size:1.5rem;margin-right:5px}.amount[data-v-51bd4524]{font-size:3rem;font-weight:700}.after[data-v-51bd4524]{color:#ddd;font-size:1rem;margin-left:5px}.purple[data-v-51bd4524]{background:linear-gradient(135deg,#7b1fa2,#ab47bc)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/myPackages.vue?vue&type=template&id=51bd4524&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('LogoAndPayment'), _vm._ssrNode(" "), _c('NavbarSecond'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_content\" data-v-51bd4524>", "</section>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-51bd4524>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-51bd4524>", "</div>", [_vm._ssrNode("<div class=\"col-md-3\" data-v-51bd4524>", "</div>", [_c('userSidebar')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-9 ps-md-0 col-12\" data-v-51bd4524>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" data-v-51bd4524>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-51bd4524>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-51bd4524>")], 2)]) : _vm._e(), _vm._ssrNode(" <div class=\"container\" data-v-51bd4524><br data-v-51bd4524><br data-v-51bd4524> <div class=\"row\" data-v-51bd4524>" + _vm._ssrList(_vm.salaryall, function (data) {
    return "<div class=\"col-md-4\" data-v-51bd4524><div class=\"pricing-table purple\" data-v-51bd4524><h2 data-v-51bd4524>" + _vm._ssrEscape(_vm._s(data.name)) + "</h2> <div class=\"pricing-features\" data-v-51bd4524><div class=\"feature\" data-v-51bd4524>Number of Referrals<span data-v-51bd4524>" + _vm._ssrEscape(_vm._s(data.number_of_referell)) + "</span></div> <div class=\"feature\" data-v-51bd4524>Number of Sales<span data-v-51bd4524>" + _vm._ssrEscape(_vm._s(data.number_of_sales)) + "</span></div> <div class=\"feature\" data-v-51bd4524>Number of Blogs<span data-v-51bd4524>" + _vm._ssrEscape(_vm._s(data.number_of_blogs)) + "</span></div></div> <div class=\"price-tag\" data-v-51bd4524><span class=\"symbol\" data-v-51bd4524>$</span> <span class=\"amount\" data-v-51bd4524>" + _vm._ssrEscape(_vm._s(data.salary_amount)) + "</span> <span class=\"after\" data-v-51bd4524>/Salary</span></div></div></div>";
  }) + "</div></div>")], 2)], 2)])]), _vm._ssrNode(" <div class=\"back_top\" data-v-51bd4524><a href=\"#top\" data-v-51bd4524><i class=\"fa-solid fa-angle-up\" data-v-51bd4524></i></a></div> "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/myPackages.vue?vue&type=template&id=51bd4524&scoped=true&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: ./components/Common_MobileSidebar.vue + 4 modules
var Common_MobileSidebar = __webpack_require__(54);

// EXTERNAL MODULE: ./components/Common_MiniTabNavbar.vue + 4 modules
var Common_MiniTabNavbar = __webpack_require__(55);

// EXTERNAL MODULE: ./components/Common_MobileSearchProduct.vue + 2 modules
var Common_MobileSearchProduct = __webpack_require__(67);

// EXTERNAL MODULE: ./components/userSidebar.vue + 4 modules
var userSidebar = __webpack_require__(73);

// EXTERNAL MODULE: ./components/NavbarSecond.vue + 4 modules
var NavbarSecond = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/myPackages.vue?vue&type=script&lang=js&






/* harmony default export */ var myPackagesvue_type_script_lang_js_ = ({
  middleware: 'IsUser',
  components: {
    NavbarSecond: NavbarSecond["a" /* default */],
    Common_MobileSidebar: Common_MobileSidebar["default"],
    Common_MiniTabNavbar: Common_MiniTabNavbar["default"],
    Common_MobileSearchProduct: Common_MobileSearchProduct["default"],
    userSidebar: userSidebar["default"]
  },
  head: {
    title: 'My Sallary'
  },
  data() {
    return {
      product: [],
      cart: [],
      loading: false,
      products: [],
      errors: {},
      salaryall: []
    };
  },
  mounted() {
    this.setupEventHandlers();
    this.loadingWishList();
    this.getDefaultData();
  },
  methods: {
    setupEventHandlers() {
      // Ensure DOM elements exist before executing jQuery functions
      external_jquery_default()(".post_mdal_open").click(function () {
        external_jquery_default()(".post_mdal_").fadeIn();
        external_jquery_default()(".search_bar").css("z-index", "0");
      });
      external_jquery_default()(".post_mdal_open").click(function () {
        external_jquery_default()(".search_bar").css("z-index", "0");
      });
      external_jquery_default()(".bt_close").click(function () {
        external_jquery_default()(".post_mdal_").fadeOut();
        external_jquery_default()(".search_bar").css("z-index", "4");
      });
    },
    getDefaultData() {
      this.$axios.get('/unauthenticate/getsPackUser').then(response => {
        console.log("========" + response.data);
        this.salaryall = response.data;
      });
    },
    async remove(productid) {
      this.loading = true;
      await this.$axios.get(`/order/removeWishList/${productid}`).then(response => {
        this.loadingWishList();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "WishList item deleted successfully",
          showConfirmButton: false,
          timer: 1000
        });
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    },
    async loadingWishList() {
      this.loading = true;
      await this.$axios.get(`/order/allWishList`).then(response => {
        this.products = response.data;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    },
    logout() {
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./pages/user/myPackages.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_myPackagesvue_type_script_lang_js_ = (myPackagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/myPackages.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_myPackagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51bd4524",
  "0fa7dced"
  
)

/* harmony default export */ var myPackages = __webpack_exports__["default"] = (component.exports);

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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userSidebar.vue?vue&type=template&id=7a311a32&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "user_sidebar"
  }, [_vm._ssrNode("<div class=\"user_page_list\" data-v-7a311a32>", "</div>", [_vm._ssrNode("<ul data-v-7a311a32>", "</ul>", [_vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-dashborad'
  }) + " data-v-7a311a32>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-dashborad",
      "exact-active-class": "active"
    }
  }, [_vm._v("Dashboard")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-7a311a32>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("ChatBox")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-profile'
  }) + " data-v-7a311a32>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile",
      "exact-active-class": "active"
    }
  }, [_vm._v("My account ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-orders'
  }) + " data-v-7a311a32>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-orders",
      "exact-active-class": "active"
    }
  }, [_vm._v("My Orders ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-whichlist'
  }) + " data-v-7a311a32>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist",
      "exact-active-class": "active"
    }
  }, [_vm._v("Wishlist ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-affiliate'
  }) + " data-v-7a311a32>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-affiliate",
      "exact-active-class": "active"
    }
  }, [_vm._v("Affiliate Program ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-bloglist'
  }) + " data-v-7a311a32>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-bloglist",
      "exact-active-class": "active"
    }
  }, [_vm._v("My Blog post")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/mySalary'
  }) + " data-v-7a311a32>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/mySalary",
      "exact-active-class": "active"
    }
  }, [_vm._v("My Salary")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/myPackages'
  }) + " data-v-7a311a32>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/myPackages",
      "exact-active-class": "active"
    }
  }, [_vm._v("My Packages")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-withdrawal'
  }) + " data-v-7a311a32>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-withdrawal",
      "exact-active-class": "active"
    }
  }, [_vm._v("Withdrawal")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/user-security'
  }) + " data-v-7a311a32>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-security",
      "exact-active-class": "active"
    }
  }, [_vm._v("Security ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/user/my-reviews'
  }) + " data-v-7a311a32>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/my-reviews",
      "exact-active-class": "active"
    }
  }, [_vm._v("My Reviews")])], 1), _vm._ssrNode(" <li data-v-7a311a32><a type=\"button\" data-v-7a311a32>Logout </a></li>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post_mdal_ mdal_\" data-v-7a311a32>", "</div>", [_vm._ssrNode("<div class=\"mdal_content\" data-v-7a311a32>", "</div>", [_vm._ssrNode("<div class=\"mdal_head\" data-v-7a311a32><div class=\"w-50\" data-v-7a311a32></div> <button class=\"bt_close\" data-v-7a311a32><i class=\"fa-solid fa-x\" data-v-7a311a32></i></button></div> "), _vm._ssrNode("<div class=\"mdal_body\" data-v-7a311a32>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-blogPost"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-blog"
  }), _vm._v("Blog Post")])], 1)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/userSidebar.vue?vue&type=template&id=7a311a32&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userSidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var userSidebarvue_type_script_lang_js_ = ({
  middleware: 'auth',
  components: {},
  head: {},
  data() {
    return {
      product: [],
      cart: [],
      loading: false,
      products: [],
      errors: {}
    };
  },
  mounted() {},
  methods: {
    async setChatBox() {
      await this.$axios.post(`/auth/me`).then(response => {
        // Seller Account Info
        let userId = response.data.id;
        let name = response.data.name;
        let email = response.data.email;
        return this.$router.push({
          path: '/chatbox/messages',
          query: {
            slug: name,
            username: email,
            seller_id: userId,
            name: email
          }
        });
      });
    },
    async logout() {
      localStorage.removeItem('jwtToken');
      await this.$auth.logout();
    }
  }
});
// CONCATENATED MODULE: ./components/userSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_userSidebarvue_type_script_lang_js_ = (userSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/userSidebar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_userSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a311a32",
  "59c51a80"
  
)

/* harmony default export */ var userSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=myPackages.js.map