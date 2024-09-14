exports.ids = [83];
exports.modules = {

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/orders/details.vue?vue&type=template&id=fc6d8ca0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"page-content\">", "</div>", [_vm._ssrNode("<div class=\"page-breadcrumb d-none d-sm-flex align-items-center mb-3\">", "</div>", [_vm._ssrNode("<div class=\"ps-3\">", "</div>", [_vm._ssrNode("<nav aria-label=\"breadcrumb\">", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb mb-0 p-0\">", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\">", "</li>", [_c('router-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-alt"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li aria-current=\"page\" class=\"breadcrumb-item\">", "</li>", [_c('router-link', {
    attrs: {
      "to": "/orders/order-list"
    }
  }, [_vm._v("Orders")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Order details</li>")], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-12 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"card border-top border-0 border-4 border-info\">", "</div>", [_vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"border p-4 rounded\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col\"><h4>" + _vm._ssrEscape("Orders Details(Order id: " + _vm._s(_vm.orderid) + ") ") + "</h4>" + _vm._ssrEscape("\n                                        Customer Name: " + _vm._s(_vm.customername) + ", Customer Email: " + _vm._s(_vm.customeremail) + "\n                                    ") + "</div> <div class=\"col\"><strong style=\"color:green; text-align: right;\"><h4>" + _vm._ssrEscape("Order Status: " + _vm._s(_vm.orderstatus)) + "</h4></strong></div></div> <table width=\"100%\" border=\"0\" class=\"table table-bordered hover\"><tr><td width=\"22\">#</td> <td>Images</td> <td width=\"916\">Item Description </td> <td width=\"63\"><div align=\"center\">Qty</div></td> <td width=\"80\"><div align=\"center\">Price</div></td> <td width=\"80\"><div align=\"center\">Total</div></td></tr> " + _vm._ssrList(_vm.orders, function (order, index) {
    return "<tr><td>" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td><img" + _vm._ssrAttr("src", order.thumbnail_img) + " alt=\"Thumbnail Image\" style=\"height:50px;width:50px;\"></td> <td>" + _vm._ssrEscape(_vm._s(order.product_name)) + "</td> <td><div align=\"center\">" + _vm._ssrEscape(_vm._s(order.quantity)) + "</div></td> <td><div align=\"center\">" + _vm._ssrEscape(_vm._s(order.price)) + "</div></td> <td><div align=\"center\">" + _vm._ssrEscape(_vm._s(order.total)) + "</div></td></tr>";
  }) + " <tr><td> </td> <td> </td> <td><div align=\"right\">Total</div></td> <td><div align=\"center\">" + _vm._ssrEscape(_vm._s(_vm.totalQuantity)) + "</div></td> <td><div align=\"center\">" + _vm._ssrEscape(_vm._s(_vm.totalAmount)) + "</div></td> <td><div align=\"center\">" + _vm._ssrEscape(_vm._s(_vm.totalAmount)) + "</div></td></tr></table> <hr> "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"row mb-3\">", "</div>", [_vm._ssrNode("<label for=\"inputEnterYourName\" class=\"col-sm-3 col-form-label\">Order\n                                            Status</label> "), _vm._ssrNode("<div class=\"col-sm-9\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.insertdata.orderstatus,
      expression: "insertdata.orderstatus"
    }],
    staticClass: "form-select orderstatus",
    attrs: {
      "name": "status"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.insertdata, "orderstatus", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.order_status, function (option, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": option.id
      }
    }, [_vm._v("\n                                                    " + _vm._s(option.name) + "\n                                                ")]);
  }), 0)])], 2), _vm._ssrNode(" <div class=\"row\"><label class=\"col-sm-3 col-form-label\"></label> <div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-success px-5 w-100\"><i class=\"bx bx-check-circle mr-1\"></i> Submit</button></div></div>")], 2)], 2)])])])]), _vm._ssrNode(" <div class=\"card\"><div class=\"card-body\"><div class=\"container mt-5\"><div class=\"row\"><div class=\"col-md-6\"><h5>Add Tracking Event</h5> <form id=\"trackingForm\"><div class=\"mb-3\"><label for=\"orderId\" hidden=\"hidden\" class=\"form-label\">Order ID</label> <input type=\"text\" disabled=\"disabled\" name=\"orderId\" required=\"required\"" + _vm._ssrAttr("value", _vm.orderid) + " class=\"form-control\"></div> <div class=\"mb-3\"><label for=\"eventStatus\" class=\"form-label\">Event Status</label> <div class=\"form-group\"><input type=\"checkbox\" id=\"packed\"" + _vm._ssrAttr("checked", _vm.trackStatus.packed == 1) + _vm._ssrAttr("checked", Array.isArray(_vm.trackStatus.packed) ? _vm._i(_vm.trackStatus.packed, null) > -1 : _vm.trackStatus.packed) + "> <label for=\"packed\">Packed</label></div> <div class=\"form-group\"><input type=\"checkbox\" id=\"Dispatched\"" + _vm._ssrAttr("checked", _vm.trackStatus.dispatched == 1) + _vm._ssrAttr("checked", Array.isArray(_vm.trackStatus.dispatched) ? _vm._i(_vm.trackStatus.dispatched, null) > -1 : _vm.trackStatus.dispatched) + "> <label for=\"Dispatched\">Dispatched</label></div> <div class=\"form-group\"><input type=\"checkbox\" id=\"Out\"" + _vm._ssrAttr("checked", _vm.trackStatus.outForDelivery == 1) + _vm._ssrAttr("checked", Array.isArray(_vm.trackStatus.outForDelivery) ? _vm._i(_vm.trackStatus.outForDelivery, null) > -1 : _vm.trackStatus.outForDelivery) + "> <label for=\"Out\">Out for delivery</label></div> <div class=\"form-group\"><input type=\"checkbox\"" + _vm._ssrAttr("disabled", _vm.trackStatus.returned == 1 || _vm.trackStatus.canceled == 1) + " id=\"Delivered\"" + _vm._ssrAttr("checked", _vm.trackStatus.deliverd == 1) + _vm._ssrAttr("checked", Array.isArray(_vm.trackStatus.deliverd) ? _vm._i(_vm.trackStatus.deliverd, null) > -1 : _vm.trackStatus.deliverd) + "> <label for=\"Delivered\">Delivered</label></div> <div class=\"form-group\"><input type=\"checkbox\"" + _vm._ssrAttr("disabled", _vm.trackStatus.deliverd == 1 || _vm.trackStatus.returned == 1) + " id=\"Canceled\"" + _vm._ssrAttr("checked", _vm.trackStatus.canceled == 1) + _vm._ssrAttr("checked", Array.isArray(_vm.trackStatus.canceled) ? _vm._i(_vm.trackStatus.canceled, null) > -1 : _vm.trackStatus.canceled) + "> <label for=\"Canceled\">Canceled</label></div> <div class=\"form-group\"><input type=\"checkbox\"" + _vm._ssrAttr("disabled", _vm.trackStatus.deliverd == 1 || _vm.trackStatus.canceled == 1) + " id=\"Return\"" + _vm._ssrAttr("checked", _vm.trackStatus.returned == 1) + _vm._ssrAttr("checked", Array.isArray(_vm.trackStatus.returned) ? _vm._i(_vm.trackStatus.returned, null) > -1 : _vm.trackStatus.returned) + "> <label for=\"Return\">Return</label></div></div> <button type=\"submit\" class=\"btn bg-success-light\">Submit</button></form></div> <div class=\"col-md-6\"><h5>Tracking Events</h5> <div class=\"order-track\"><div class=\"order-track-step active\"><div class=\"order-track-status\"><span class=\"order-track-status-dot\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat\">Order Confirmed</p> <span class=\"order-track-text-sub\">" + _vm._ssrEscape(_vm._s(_vm.orderDate)) + "</span></div></div> <div" + _vm._ssrClass("order-track-step", {
    active: _vm.trackStatus.packed == 1
  }) + "><div class=\"order-track-status\"><span class=\"order-track-status-dot\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat\">Packed</p> <span class=\"order-track-text-sub\">Your order items packed and ready for delivery.</span></div></div> <div" + _vm._ssrClass("order-track-step", {
    active: _vm.trackStatus.dispatched == 1
  }) + "><div class=\"order-track-status\"><span class=\"order-track-status-dot\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat\">Order Dispatched</p> <span class=\"order-track-text-sub\">Your shipment has been dispatched to\n                                                the\n                                                final hub.</span></div></div> <div" + _vm._ssrClass("order-track-step", {
    active: _vm.trackStatus.outForDelivery == 1
  }) + "><div class=\"order-track-status\"><span class=\"order-track-status-dot\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat\">Out for delivery</p> <span class=\"order-track-text-sub\">Your order is ready for delivery</span></div></div> " + (_vm.trackStatus.canceled == 0 || _vm.trackStatus.canceled == '' ? "<div" + _vm._ssrClass("order-track-step", {
    active: _vm.trackStatus.deliverd == 1
  }) + "><div class=\"order-track-status\"><span class=\"order-track-status-dot\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat\">Order Delivered</p> <span class=\"order-track-text-sub\">Your order has been delivered.</span></div></div>" : "<!---->") + " " + (_vm.trackStatus.canceled == 1 ? "<div class=\"order-track-step\"><div class=\"order-track-status\"><span class=\"order-track-status-dot bg-danger\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat text-danger\">Order Canceled</p> <span class=\"order-track-text-sub text-danger\">Your order has been\n                                                Canceled.</span></div></div>" : "<!---->") + " " + (_vm.trackStatus.returned == 1 ? "<div class=\"order-track-step\"><div class=\"order-track-status\"><span class=\"order-track-status-dot bg-danger\"></span> <span class=\"order-track-status-line\"></span></div> <div class=\"order-track-text\"><p class=\"order-track-text-stat text-danger\">Order Returned</p> <span class=\"order-track-text-sub text-danger\">Your order has been\n                                                Returned.</span></div></div>" : "<!---->") + "</div></div></div></div></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/orders/details.vue?vue&type=template&id=fc6d8ca0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/orders/details.vue?vue&type=script&lang=js
/* harmony default export */ var detailsvue_type_script_lang_js = ({
  data() {
    return {
      orderstatus: '',
      orderid: '',
      customername: '',
      customeremail: '',
      insertdata: {
        orderId: this.$route.query.orderId,
        orderstatus: ''
      },
      tracking: {
        status: '',
        description: ''
      },
      orders: [],
      order_status: [],
      notifmsg: '',
      errors: {},
      orderDate: '',
      trackStatus: {
        packed: '',
        dispatched: '',
        outForDelivery: '',
        deliverd: '',
        canceled: '',
        returned: ''
      },
      orderTruckDate: '',
      ordersData: ''
    };
  },
  async mounted() {
    this.defaultLoading();
    // this.getTrackstatus();
  },

  computed: {
    pageTitle() {
      return this.orderid ? 'Order Details ' + this.orderid : 'Order Details';
    },
    totalQuantity() {
      // Calculate total quantity
      return this.orders.reduce((total, order) => total + order.quantity, 0);
    },
    totalAmount() {
      // Calculate total amount
      return this.orders.reduce((total, order) => total + order.total, 0);
    }
  },
  head() {
    return {
      title: this.pageTitle
    };
  },
  methods: {
    adddTrackingStatus() {
      const formData = new FormData();
      formData.append('packed', this.trackStatus.packed);
      formData.append('dispatched', this.trackStatus.dispatched);
      formData.append('outForDelivery', this.trackStatus.outForDelivery);
      formData.append('deliverd', this.trackStatus.deliverd);
      formData.append('canceled', this.trackStatus.canceled);
      formData.append('returned', this.trackStatus.returned);
      formData.append('order_id', this.orderid);
      // formData.append('status', this.tracking.status);
      // formData.append('description', this.tracking.description);
      // console.log(formData);
      this.$axios.post('/order/orderTrack', formData)
      // .then(response => {
      //     // Handle successful response
      //     console.log('Success:', response.data);
      // })
      .then(response => {
        console.log('Success:', response.data);
        Lobibox.notify('success', {
          pauseDelayOnHover: true,
          continueDelayOnInactiveTab: false,
          position: 'top right',
          icon: 'bx bx-check-circle',
          msg: 'Order has been successfully updated'
        });
      }).catch(error => {
        // Handle error
        console.error('Error:', error);
        let errorMessage = 'An error occurred while updating the order. Please try again later.';
        if (error.response && error.response.status === 422) {
          const validationErrors = error.response.data.errors;
          errorMessage = Object.keys(validationErrors).map(field => `${field}: ${validationErrors[field].join(', ')}`).join('\n');
        } else if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        Lobibox.notify('error', {
          pauseDelayOnHover: true,
          continueDelayOnInactiveTab: false,
          position: 'top right',
          icon: 'bx bx-error-circle',
          msg: errorMessage
        });
      });

      // this.$axios.post('/order/orderTrack', formData)
      //     .then(response => {
      //         Lobibox.notify('success', {
      //             pauseDelayOnHover: true,
      //             continueDelayOnInactiveTab: false,
      //             position: 'top right',
      //             icon: 'bx bx-check-circle',
      //             msg: 'Order has been successfully updated'
      //         });
      //     })
      //     .catch(error => {
      //         let errorMessage = 'An error occurred while updating the order. Please try again later.';

      //         if (error.response && error.response.status === 422) {
      //             const validationErrors = error.response.data.errors;
      //             errorMessage = Object.keys(validationErrors)
      //                 .map(field => `${field}: ${validationErrors[field].join(', ')}`)
      //                 .join('\n');
      //         } else if (error.response && error.response.data && error.response.data.message) {
      //             errorMessage = error.response.data.message;
      //         }

      //         Lobibox.notify('error', {
      //             pauseDelayOnHover: true,
      //             continueDelayOnInactiveTab: false,
      //             position: 'top right',
      //             icon: 'bx bx-error-circle',
      //             msg: errorMessage
      //         });

      //         console.error('Error:', error);
      //     });
    },

    // getTrackstatus(){
    //     const orderId = this.$route.query.orderId;
    //     this.$axios.get(`/order/orderTrackList/${orderId}`)
    //     .then(response =>{
    //         this.trackData = response.data;
    //         console.log(response.data);
    //     });
    // },
    saveData() {
      const formData = new FormData();
      formData.append('orderId', this.insertdata.orderId);
      formData.append('orderstatus', this.insertdata.orderstatus);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/order/update_order_status', formData, {
        headers
      }).then(res => {
        $('#formrest')[0].reset();
        this.success_noti();
        this.$router.push('/orders/order-list');
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    async defaultLoading() {
      const orderId = this.$route.query.orderId;
      this.orderid = orderId;
      await this.$axios.get(`/order/orderDetails/${orderId}`).then(response => {
        this.ordersData = response.data;
        this.orders = response.data.orderdata;
        this.orderstatus = response.data.orderrow;
        this.customername = response.data.customername;
        this.customeremail = response.data.customeremail;
        this.order_status = response.data.OrderStatus;
        this.orderDate = response.data.create_at;
        this.insertdata.orderstatus = response.data.orderstatus_id;
        this.trackStatus.packed = response.data.packed_status;
        this.trackStatus.dispatched = response.data.dispatched_status;
        this.trackStatus.outForDelivery = response.data.outForDelivery_status;
        this.trackStatus.deliverd = response.data.delivered_status;
        this.trackStatus.canceled = response.data.cancel_status;
        this.trackStatus.returned = response.data.return_status;
        // this.trackStatus = response.data;
        // $(".orderstatus").html(1);
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    success_noti() {
      Lobibox.notify('success', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bx bx-check-circle',
        msg: 'Has been successfully update order'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/orders/details.vue?vue&type=script&lang=js
 /* harmony default export */ var orders_detailsvue_type_script_lang_js = (detailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/orders/details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_detailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e8a2c82e"
  
)

/* harmony default export */ var details = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=details.js.map