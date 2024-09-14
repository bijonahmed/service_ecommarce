exports.ids = [95];
exports.modules = {

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/edit/_id.vue?vue&type=template&id=4798bbe3
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8 m-auto\">", "</div>", [_vm._ssrNode("<div class=\"form_container bg-white p-3\">", "</div>", [_vm._ssrNode("<h5>Update Seller</h5> "), _vm._ssrNode("<form id=\"couponform\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Business Name <span class=\"text-danger\">*</span></label> <input type=\"text\" name=\"name\" id" + _vm._ssrAttr("value", _vm.insertdata.business_name) + " class=\"form-control\"> <input type=\"text\" name=\"id\" id" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control d-none\"></div> "), _vm._ssrNode("<div class=\"form-group mb-2\">", "</div>", [_vm._ssrNode("<label for class=\"text-dark fs-6\">Status <span class=\"text-danger\">*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.status,
      expression: "insertdata.status"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "status",
      "id": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group mb-2\">", "</div>", [_vm._ssrNode("<label for class=\"text-dark fs-6\">Top Stores Status <span class=\"text-danger\">*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.home_status,
      expression: "insertdata.home_status"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "status",
      "id": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "home_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Inactive")])])], 2), _vm._ssrNode(" <div class=\"form-group mb-2\"><button type=\"submit\" class=\"btn-success w-100 py-1 border-0\"><i class=\"bx bx-check-circle mr-1\"></i>Submit\n                                </button></div>")], 2)], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/seller/edit/_id.vue?vue&type=template&id=4798bbe3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/edit/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Update Seller'
  },
  data() {
    return {
      insertdata: {
        id: '',
        business_name: '',
        status: '',
        home_status: ''
      },
      errors: {},
      cid: ''
    };
  },
  created() {
    this.getData();
  },
  methods: {
    updatecoupon() {
      // const formData = new FormData();

      const formData = new FormData();
      const id = this.insertdata.id;
      formData.append('id', this.insertdata.id);
      formData.append('business_name', this.insertdata.business_name);
      formData.append('status', this.insertdata.status);
      formData.append('home_status', this.insertdata.home_status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/setting/updateSeller?id=${id}', formData, {
        headers
      }).then(res => {
        // $('#formrest')[0].reset();
        // this.success_noti();
        Lobibox.notify('success', {
          pauseDelayOnHover: true,
          continueDelayOnInactiveTab: false,
          position: 'top right',
          icon: 'bx bx-check-circle',
          msg: 'Your Coupon has been successfully Updated.'
        });
        this.$router.push('/seller/allseller');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
          // this.errors = error.response.data.id;
        }
      });
      // console.log(formData);
    },

    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/setting/editseller/${id}`).then(response => {
        // console.log(response.data.data.business_name)
        this.insertdata.id = response.data.data.id;
        this.insertdata.business_name = response.data.data.business_name;
        this.insertdata.status = response.data.data.status;
        this.insertdata.home_status = response.data.data.home_status;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/seller/edit/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/edit/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "541092f7"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map