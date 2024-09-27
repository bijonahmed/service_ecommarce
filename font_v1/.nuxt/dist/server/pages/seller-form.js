exports.ids = [94];
exports.modules = {

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller-form.vue?vue&type=template&id=6e5eacfd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "background": "#b077d8",
      "background-image": "url(../images/ECOMMERCE-cover-you-bg.jpg)",
      "background-position": "top",
      "margin-top": "-25px",
      "background-repeat": "no-repeat",
      "background-size": "contain",
      "min-height": "100vh"
    }
  }, [_vm._ssrNode("<div class=\"container my-4\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 m-auto\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('Nuxt-Link', {
    staticClass: "m-auto",
    staticStyle: {
      "font-size": "30px"
    },
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Ecommerce "), _c('i', {
    staticClass: "fa-regular fa-star"
  })])], 1)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8 m-auto\">", "</div>", [_vm._ssrNode("<div class=\"programme_form\"><form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><h3>Register to Sale Your Product</h3> <p>Sign up As A seller account.</p> <div class=\"row\"><div class=\"col-md-6\"><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.first_name) + " class=\"input\"> " + (_vm.errors.first_name ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.first_name[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>First Name</label></div></div> <div class=\"col-md-6\"><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.last_name) + " class=\"input\"> " + (_vm.errors.last_name ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.last_name[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Last Name</label></div></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"input\"> " + (_vm.errors.email ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email</label></div></div> <div><div class=\"group\"><input type=\"password\" id=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password) + " class=\"input\"> " + (_vm.errors.password ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password </label> <i class=\"fa-solid toggle-password fa-eye-slash\"></i></div></div> <div><div class=\"group\"><input type=\"password\" id=\"repassword\"" + _vm._ssrAttr("value", _vm.insertdata.password_confirmation) + " class=\"input\"> " + (_vm.errors.password_confirmation ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.password_confirmation[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Confirm Password </label> <i class=\"fa-solid toggle-password fa-eye-slash\"></i></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.phone_number) + " class=\"input\"> " + (_vm.errors.phone_number ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.phone_number[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Phone Number </label></div></div></div> <h6>Business Information</h6> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_owner_name) + " class=\"input\"> " + (_vm.errors.business_owner_name ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_owner_name[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Business Owner Name</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_name) + " class=\"input\"> " + (_vm.errors.business_name ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_name[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Business Name </label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_register_num) + " class=\"input\"> " + (_vm.errors.business_register_num ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_register_num[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Business Registration number</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_address) + " class=\"input\"> " + (_vm.errors.business_address ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_address[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Address</label></div></div> <h6>WareHouse Address</h6> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_warehouse_address) + " class=\"input\"> " + (_vm.errors.business_warehouse_address ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_warehouse_address[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Address</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_email) + " class=\"input\"> " + (_vm.errors.business_email ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_email[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_phone) + " class=\"input\"> " + (_vm.errors.business_phone ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_phone[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Phone</label></div></div> <h6>Return Address\n                            <div class=\"d-flex c_label\"><input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.copyValues) ? _vm._i(_vm.copyValues, null) > -1 : _vm.copyValues) + "><label for=\"checkbox\" style=\"pointer-events: all; position: unset; color: #000;\">Same As WareHouse Address </label></div></h6> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_return_name) + " class=\"input\"> " + (_vm.errors.business_return_name ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_return_name[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Business Owner Name</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_return_address) + " class=\"input\"> " + (_vm.errors.business_return_address ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_return_address[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Address</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_return_email) + " class=\"input\"> " + (_vm.errors.business_return_email ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_return_email[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email</label></div></div> <div><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.business_return_phone) + " class=\"input\"> " + (_vm.errors.business_return_phone ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.business_return_phone[0])) + "</small></span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Phone</label></div></div> <div class=\"d-flex c_label\">" + (_vm.errors.agree_with_terms ? "<span class=\"text-danger\"><small>" + _vm._ssrEscape(_vm._s(_vm.errors.agree_with_terms[0])) + "</small></span>" : "<!---->") + " <input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.insertdata.agree_with_terms) ? _vm._i(_vm.insertdata.agree_with_terms, null) > -1 : _vm.insertdata.agree_with_terms) + "><label for=\"checkbox\" style=\"pointer-events: all; position: unset; color: #000;\">Agree with <a href=\"../pdf/sample-terms-conditions-agreement.pdf\">terms &amp; condition</a></label></div> <button class=\"btn_cart\" style=\"visibility: unset;\">Register</button></form></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 m-auto text-center\">", "</div>", [_vm._ssrNode("<p class=\"sign_link\">", "</p>", [_vm._ssrNode("Allready Have account? "), _c('Nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login")])], 2)])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/seller-form.vue?vue&type=template&id=6e5eacfd&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(34);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller-form.vue?vue&type=script&lang=js&

/* harmony default export */ var seller_formvue_type_script_lang_js_ = ({
  head: {
    title: 'Register for Seller'
  },
  data() {
    return {
      copyValues: false,
      insertdata: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        business_owner_name: '',
        business_name: '',
        business_register_num: '',
        business_address: '',
        business_warehouse_address: '',
        business_email: '',
        business_phone: '',
        business_return_name: '',
        business_return_address: '',
        business_return_phone: '',
        business_return_email: '',
        agree_with_terms: ''
      },
      login: {
        email: '',
        password: ''
      },
      notifmsg: '',
      invidecodeError: '',
      errors: {}
    };
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    handleCheckboxChange() {
      console.log('Copy Values:', this.copyValues);
      if (this.copyValues) {
        // Copy values from the first pair to the second pair
        console.log('Copying values...');
        this.insertdata.business_return_address = this.insertdata.business_warehouse_address;
        this.insertdata.business_return_phone = this.insertdata.business_phone;
        this.insertdata.business_return_email = this.insertdata.business_email;
      } else {
        // Clear values in the second pair if checkbox is unchecked
        console.log('Clearing values...');
        this.insertdata.business_return_address = '';
        this.insertdata.business_return_phone = '';
        this.insertdata.business_return_email = '';
      }
    },
    defaultLoading() {
      this.$nextTick(() => {
        external_jquery_default()(".toggle-password").click(function () {
          external_jquery_default()(this).toggleClass("fa-eye-slash fa-eye");
          let input = external_jquery_default()(this).parent().find("input"); // Declare the 'input' variable with 'let'
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
      });
    },
    saveData() {
      const formData = new FormData();
      formData.append('first_name', this.insertdata.first_name);
      formData.append('last_name', this.insertdata.last_name);
      formData.append('email', this.insertdata.email);
      formData.append('password', this.insertdata.password);
      formData.append('password_confirmation', this.insertdata.password_confirmation);
      formData.append('phone_number', this.insertdata.phone_number);
      formData.append('business_owner_name', this.insertdata.business_owner_name);
      formData.append('business_name', this.insertdata.business_name);
      formData.append('business_register_num', this.insertdata.business_register_num);
      formData.append('business_address', this.insertdata.business_address);
      formData.append('business_warehouse_address', this.insertdata.business_warehouse_address);
      formData.append('business_email', this.insertdata.business_email);
      formData.append('business_phone', this.insertdata.business_phone);
      formData.append('business_return_name', this.insertdata.business_return_name);
      formData.append('business_return_address', this.insertdata.business_return_address);
      formData.append('business_return_phone', this.insertdata.business_return_phone);
      formData.append('agree_with_terms', this.insertdata.agree_with_terms);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/registerSeller', formData, {
        headers
      }).then(response => {
        const token = response.data.access_token;
        this.$auth.setUserToken(token);
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
          title: "Successfully Register !"
        });
        this.$router.push('/');
      }).catch(error => {
        this.invidecodeError = error.response.data.error;
        console.log("code error: " + error.response.data.error);
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/seller-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_seller_formvue_type_script_lang_js_ = (seller_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller-form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_seller_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a509d55"
  
)

/* harmony default export */ var seller_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=seller-form.js.map