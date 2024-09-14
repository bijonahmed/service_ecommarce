exports.ids = [15];
exports.modules = {

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coupons/edit/_id.vue?vue&type=template&id=650cac26
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8 m-auto\">", "</div>", [_vm._ssrNode("<div class=\"form_container bg-white p-3\">", "</div>", [_vm._ssrNode("<h5>Update Coupons</h5> "), _vm._ssrNode("<form id=\"couponform\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Promo Name <span class=\"text-danger\">*</span></label> <input type=\"text\" name=\"name\" id" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"form-control\"> <input type=\"text\" name=\"id\" id" + _vm._ssrAttr("value", _vm.insertdata.id) + " class=\"form-control d-none\"></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Promo Code <span class=\"text-danger\">*</span></label> <input type=\"text\" name=\"promocode\" id" + _vm._ssrAttr("value", _vm.insertdata.promocode) + " class=\"form-control\"></div> "), _vm._ssrNode("<div class=\"form-group mb-2\">", "</div>", [_vm._ssrNode("<label for class=\"text-dark fs-6\">Coupon type <span class=\"text-danger\">*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.code_type,
      expression: "insertdata.code_type"
    }],
    ref: "code_type",
    staticClass: "form-control",
    attrs: {
      "name": "code_type",
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
        _vm.$set(_vm.insertdata, "code_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "percentage"
    }
  }, [_vm._v("In percentage")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fixed"
    }
  }, [_vm._v("Fixed Amount")])])], 2), _vm._ssrNode(" <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Min. Shopping Amount <span class=\"text-danger\">*</span></label> <input type=\"text\" name=\"min_shopping\" id" + _vm._ssrAttr("value", _vm.insertdata.min_shopping) + " class=\"form-control\"></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Discount in percentage(%) <span class=\"text-secondary\" style=\"font-size: 12px;\">(If coupon type\n                                        &quot;Percentage&quot;)</span></label> <input type=\"text\" name=\"d_percent\" id" + _vm._ssrAttr("value", _vm.insertdata.d_percent) + " class=\"form-control\"></div> <div class=\"form-group mb-2\"><label for class=\"text-dark fs-6\">Discount in Fixed amount($) <span class=\"text-secondary\" style=\"font-size: 12px;\">(If coupon type &quot;Fiexed\n                                        Amount&quot;)</span></label> <input type=\"text\" name=\"d_fvalue\" id" + _vm._ssrAttr("value", _vm.insertdata.d_fvalue) + " class=\"form-control\"></div> "), _vm._ssrNode("<div class=\"form-group mb-2\">", "</div>", [_vm._ssrNode("<label for class=\"text-dark fs-6\">Status <span class=\"text-danger\">*</span></label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.status,
      expression: "insertdata.status"
    }],
    ref: "status",
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
      "value": "2"
    }
  }, [_vm._v("Inactive")])])], 2), _vm._ssrNode(" <div class=\"form-group mb-2\"><button type=\"submit\" class=\"btn-success w-100 py-1 border-0\"><i class=\"bx bx-check-circle mr-1\"></i>Submit\n                                </button></div>")], 2)], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/coupons/edit/_id.vue?vue&type=template&id=650cac26

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/coupons/edit/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  head: {
    title: 'Update Coupon'
  },
  data() {
    return {
      insertdata: {
        id: '',
        name: '',
        promocode: '',
        code_type: '',
        status: '',
        d_percent: null,
        d_fvalue: null
      },
      promocode: null,
      status: "1",
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
      const cid = this.insertdata.id;
      formData.append('id', this.insertdata.id);
      formData.append('name', this.insertdata.name);
      formData.append('promocode', this.insertdata.promocode);
      formData.append('code_type', this.insertdata.code_type);
      formData.append('min_shopping', this.insertdata.min_shopping);
      formData.append('d_percent', this.insertdata.d_percent);
      formData.append('d_fvalue', this.insertdata.d_fvalue);
      formData.append('status', this.insertdata.status);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/setting/updatecoupon?id=${cid}', formData, {
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
        this.$router.push('/coupons/all-coupons');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
          // this.errors = error.response.data.id;
        }
      });
      // console.log(cid);
    },

    getData() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$axios.get(`/setting/getcoupons/${id}`).then(response => {
        // console.log(response.data.data.id)
        this.insertdata.id = response.data.data.id;
        this.insertdata.name = response.data.data.name;
        this.insertdata.promocode = response.data.data.promocode;
        this.insertdata.code_type = response.data.data.code_type;
        this.insertdata.status = response.data.data.status;
        this.insertdata.d_percent = response.data.data.d_percent;
        this.insertdata.d_fvalue = response.data.data.d_fvalue;
        this.insertdata.min_shopping = response.data.data.min_shopping;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/coupons/edit/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/coupons/edit/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fbb24216"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map