(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{326:function(t,e,r){var content=r(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(119).default)("08b66d91",content,!0,{sourceMap:!1})},403:function(t,e,r){"use strict";r(326)},404:function(t,e,r){var n=r(118)((function(i){return i[1]}));n.push([t.i,".pagenation[data-v-7bf97d48]{margin-top:10px}.pagination[data-v-7bf97d48]{list-style:none;\r\n    /*! display: flex; */padding-left:0}",""]),n.locals={},t.exports=n},540:function(t,e,r){"use strict";r.r(e);r(37),r(50),r(38),r(14);var n=r(8),c=(r(89),r(90),r(51),r(39),r(311)),l=r.n(c),o={head:{title:"Customer List"},data:function(){return{data:[],searchQuery:{name:"",phone:"",status:1},searchQueryPhone:"",currentPage:1,perPage:10}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},computed:{totalPages:function(){return Math.ceil(this.filteredData.length/this.perPage)},filteredData:function(){var t=this,e=this.data;return this.searchQuery.name&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.searchQuery.name.toLowerCase())}))),this.searchQuery.status&&(e=e.filter((function(e){return e.status==t.searchQuery.status}))),e},paginatedData:function(){var t=(this.currentPage-1)*this.perPage;return l.a.slice(this.filteredData,t,t+this.perPage)}},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(".customerSpinner").show(),e.prev=1,$(".name").val(),$(".status").val(),e.next=6,t.$axios.get("/customer/allCustomers");case 6:r=e.sent,t.data=r.data.data,$(".customerSpinner").hide(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},handleSearch:function(){this.currentPage=1},previousPage:function(){this.currentPage--},nextPage:function(){this.currentPage++},editCustomer:function(t){this.$router.push({path:"/edit/".concat(t)})}}},d=(r(403),r(26)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page-content"},[e("div",{staticClass:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},[e("div",{staticClass:"ps-3"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb mb-0 p-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/"}},[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"bx bx-home-alt"})])])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Customer List")])])])]),t._v(" "),e("div",{staticClass:"ms-auto d-none"},[e("div",{staticClass:"btn-group"},[e("Nuxt-link",{attrs:{to:"/customer/newCustomer"}},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("i",{staticClass:"bx bx-plus"}),t._v("New")])])],1)])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery.name,expression:"searchQuery.name"}],staticClass:"form-control name",attrs:{type:"text",placeholder:"Customer Name"},domProps:{value:t.searchQuery.name},on:{input:[function(e){e.target.composing||t.$set(t.searchQuery,"name",e.target.value)},t.handleSearch]}})])]),t._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"input-group mb-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery.status,expression:"searchQuery.status"}],staticClass:"form-select form-select-solid status",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchQuery,"status",e.target.multiple?r:r[0])},t.handleSearch]}},[e("option",{attrs:{value:""}},[t._v("All Status")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Active")]),t._v(" "),e("option",{attrs:{value:"0"}},[t._v("Inactive")])])])]),t._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"input-group mb-3"},[e("button",{staticClass:"btn btn-primary w-100",attrs:{type:"button"},on:{click:t.fetchData}},[t._v("Search")])])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-sm"},[t._m(1),t._v(" "),e("tbody",t._l(t.paginatedData,(function(r){return e("tr",{key:r.id},[e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(r.email))]),t._v(" "),e("td",[t._v(t._s(r.address_1))]),t._v(" "),e("td",[t._v(t._s(r.address_2))]),t._v(" "),e("td",[t._v(t._s(r.address_3))]),t._v(" "),e("td",{staticClass:"text-center"},[1==r.status?e("span",{staticClass:"badge bg-success-light"},[t._v(" Active ")]):e("span",[t._v(" Inactive ")])]),t._v(" "),e("td",[e("center",[e("nuxt-link",{staticClass:"btn btn-warning bg-history-light",attrs:{to:{name:"customer-edit-id",params:{id:r.id}},variant:"warning",size:"sm"}},[e("i",{staticClass:"bx bx-edit"}),t._v("EDIT\r\n                                            ")])],1)],1)])})),0)])]),t._v(" "),e("div",{staticClass:"pagenation"},[e("div",{staticStyle:{"text-align":"right"}},[e("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:1===t.currentPage},on:{click:t.previousPage}},[e("center",[e("i",{staticClass:"lni lni-angle-double-left"})])],1),t._v(" "),e("span",[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:t.currentPage===t.totalPages},on:{click:t.nextPage}},[e("center",[e("i",{staticClass:"lni lni-angle-double-right"})])],1)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"customerSpinner",staticStyle:{display:"none"}},[t("div",{staticClass:"d-flex justify-content-center"},[t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"visually-hidden"},[this._v("Loading...")])])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Email")]),t._v(" "),e("th",[t._v("Address 1")]),t._v(" "),e("th",[t._v("Address 2")]),t._v(" "),e("th",[t._v("Address 3")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Action")])])])}],!1,null,"7bf97d48",null);e.default=component.exports}}]);