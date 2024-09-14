exports.ids = [88];
exports.modules = {

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=template&id=6717b9df
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\">", "</div>", [_vm._ssrNode("<div class=\"ps-3\">", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\">", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\">", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\">", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">User Profilep</li>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ms-auto\">", "</div>", [_vm._ssrNode("<div class=\"btn-group\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/changePassword"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Change Password")])])], 1)])], 2), _vm._ssrNode(" <div class=\"container\"><div class=\"main-body\"><div class=\"row\"><div class=\"col-lg-4\"><div class=\"card\"><div class=\"card-body\"><div class=\"d-flex flex-column align-items-center text-center\">" + (_vm.insertdata.image === null ? "<div><img" + _vm._ssrAttr("src", `/backend_theme/assets/images/avatar-2.png`) + " alt=\"Image\" width=\"110\" class=\"rounded-circle p-1 bg-primary\"></div>" : "<div><div id=\"dataimages\"></div></div>") + " <div class=\"mt-3\"><h4>" + _vm._ssrEscape(_vm._s(_vm.user.name)) + "</h4> <p class=\"text-secondary mb-1\">" + _vm._ssrEscape(_vm._s(_vm.user.email)) + "</p> <p class=\"text-muted font-size-sm\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.address)) + "</p></div></div> <hr class=\"my-4\"> <ul class=\"list-group list-group-flush\"><li class=\"list-group-item d-flex justify-content-between align-items-center flex-wrap\"><span class=\"mb-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-globe me-2 icon-inline\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line> <path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path></svg>Website</span> <span class=\"text-secondary\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.website)) + "</span></li> <li class=\"list-group-item d-flex justify-content-between align-items-center flex-wrap\"><span class=\"mb-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-github me-2 icon-inline\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg>Github</span> <span class=\"text-secondary\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.github)) + "</span></li> <li class=\"list-group-item d-flex justify-content-between align-items-center flex-wrap\"><span class=\"mb-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-twitter me-2 icon-inline text-info\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path></svg>Twitter</span> <span class=\"text-secondary\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.twitter)) + "</span></li> <li class=\"list-group-item d-flex justify-content-between align-items-center flex-wrap\"><span class=\"mb-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-instagram me-2 icon-inline text-danger\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect> <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path> <line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line></svg>Instagram</span> <span class=\"text-secondary\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.instagram)) + "</span></li> <li class=\"list-group-item d-flex justify-content-between align-items-center flex-wrap\"><span class=\"mb-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-facebook me-2 icon-inline text-primary\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg>Facebook</span> <span class=\"text-secondary\">" + _vm._ssrEscape(_vm._s(_vm.insertdata.facebook)) + "</span></li></ul></div></div></div> <div class=\"col-lg-8\"><form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"card\"><div class=\"card-body\"><div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Full Name</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Email</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"form-control\"> " + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Phone</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.phone_number) + " class=\"form-control\"> " + (_vm.errors.phone_number ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.phone_number[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Address</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.address) + " class=\"form-control\"> " + (_vm.errors.address ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.address[0])) + "</span>" : "<!---->") + "</div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Website</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.website) + " class=\"form-control\"></div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Github</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.github) + " class=\"form-control\"></div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Twitter</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.twitter) + " class=\"form-control\"></div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Instagram</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.instagram) + " class=\"form-control\"></div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Facebook</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.facebook) + " class=\"form-control\"></div></div> <div class=\"row mb-3\"><div class=\"col-sm-3\"><span class=\"mb-0\">Profile Picture</span></div> <div class=\"col-sm-9 text-secondary\"><input type=\"file\" id=\"file\" name=\"file\" class=\"form-control\"></div></div> <div class=\"row\"><div class=\"col-sm-3\"></div> <div class=\"col-sm-9 text-secondary\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div></div></div></form></div></div></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile.vue?vue&type=template&id=6717b9df

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(21);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=script&lang=js


/* harmony default export */ var profilevue_type_script_lang_js = ({
  head: {
    title: 'Profile'
  },
  data() {
    return {
      insertdata: {
        name: '',
        email: '',
        phone_number: '',
        address: '',
        website: '',
        github: '',
        twitter: '',
        instagram: '',
        facebook: '',
        image: ''
      },
      user: this.$store.state.auth.user,
      errors: {}
    };
  },
  mounted() {
    this.defaultLoadingData();
  },
  methods: {
    onFileSelected() {
      this.file = this.$refs.file.files[0];
    },
    updateprofile() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('name', this.insertdata.name);
      formData.append('email', this.insertdata.email);
      formData.append('phone_number', this.insertdata.phone_number);
      formData.append('website', this.insertdata.website);
      formData.append('github', this.insertdata.github);
      formData.append('twitter', this.insertdata.twitter);
      formData.append('instagram', this.insertdata.instagram);
      formData.append('facebook', this.insertdata.facebook);
      formData.append('address', this.insertdata.address);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/updateprofile', formData, {
        headers
      }).then(res => {
        Lobibox.notify('success', {
          pauseDelayOnHover: true,
          continueDelayOnInactiveTab: false,
          position: 'top right',
          icon: 'bx bx-check-circle',
          msg: 'Your profile has been successfully updated.'
        });
        external_jquery_default()('#dataimages').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + res.data.imagelink + '" />');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    defaultLoadingData() {
      this.$axios.get('/auth/showProfileData').then(response => {
        console.log(response.data.data.name);
        this.insertdata.name = response.data.data.name;
        this.insertdata.email = response.data.data.email;
        this.insertdata.phone_number = response.data.data.phone_number;
        this.insertdata.address = response.data.data.address;
        this.insertdata.website = response.data.data.website;
        this.insertdata.github = response.data.data.github;
        this.insertdata.twitter = response.data.data.twitter;
        this.insertdata.instagram = response.data.data.instagram;
        this.insertdata.facebook = response.data.data.facebook;
        external_jquery_default()('#dataimages').append('<img class="rounded-circle p-1 bg-primary" width="110" src="' + response.data.dataImg + '" />');
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/profile.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_profilevue_type_script_lang_js = (profilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d556b80a"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile.js.map