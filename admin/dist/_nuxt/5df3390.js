(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{345:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(119).default)("044bc5a3",content,!0,{sourceMap:!1})},448:function(t,e,r){"use strict";r(345)},449:function(t,e,r){var n=r(118)((function(i){return i[1]}));n.push([t.i,".pagenation[data-v-6d064a5e]{margin-top:10px}.pagination[data-v-6d064a5e]{list-style:none;\n    /*! display: flex; */padding-left:0}",""]),n.locals={},t.exports=n},565:function(t,e,r){"use strict";r.r(e);r(37),r(50),r(38),r(14);var n=r(8),c=(r(89),r(90),r(51),r(39),r(311)),l=r.n(c),o={head:{title:"Employee List"},data:function(){return{insertdata:{id:"",name:"",status:""},notifmsg:"",errors:{},data:[],searchQuery:{name:"",status:1},searchQueryPhone:"",currentPage:1,perPage:10}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},computed:{totalPages:function(){return Math.ceil(this.filteredData.length/this.perPage)},filteredData:function(){var t=this,e=this.data;return this.searchQuery.name&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.searchQuery.name.toLowerCase())}))),this.searchQuery.status&&(e=e.filter((function(e){return e.status==t.searchQuery.status}))),e},paginatedData:function(){var t=(this.currentPage-1)*this.perPage;return l.a.slice(this.filteredData,t,t+this.perPage)}},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(".customerSpinner").show(),e.prev=1,$(".name").val(),$(".status").val(),e.next=6,t.$axios.get("/user/getEmployeeList");case 6:r=e.sent,t.data=r.data.data,$(".customerSpinner").hide(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},handleSearch:function(){this.currentPage=1},previousPage:function(){this.currentPage--},nextPage:function(){this.currentPage++},success_noti:function(){Lobibox.notify("success",{pauseDelayOnHover:!0,continueDelayOnInactiveTab:!1,position:"top right",icon:"bx bx-check-circle",msg:"Your data has been successfully inserted."})}}},v=(r(448),r(26)),component=Object(v.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page-content"},[e("div",{staticClass:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},[e("div",{staticClass:"ps-3"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb mb-0 p-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/hrm/dashboard"}},[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"bx bx-home-alt"})])])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Employee List")])])])]),t._v(" "),e("div",{staticClass:"ms-auto"},[e("div",{staticClass:"btn-group"},[e("Nuxt-link",{attrs:{to:"/employee/employee-add"}},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("i",{staticClass:"bx bx-plus"}),t._v("New")])])],1)])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery.name,expression:"searchQuery.name"}],staticClass:"form-control name",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.searchQuery.name},on:{input:[function(e){e.target.composing||t.$set(t.searchQuery,"name",e.target.value)},t.handleSearch]}})])]),t._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"input-group mb-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery.status,expression:"searchQuery.status"}],staticClass:"form-select form-select-solid status",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchQuery,"status",e.target.multiple?r:r[0])},t.handleSearch]}},[e("option",{attrs:{value:""}},[t._v("All Status")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Active")]),t._v(" "),e("option",{attrs:{value:"0"}},[t._v("Inactive")])])])]),t._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"input-group mb-3"},[e("button",{staticClass:"btn btn-primary w-100",attrs:{type:"button"},on:{click:t.fetchData}},[t._v("Search")])])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-sm"},[t._m(1),t._v(" "),e("tbody",t._l(t.paginatedData,(function(r){return e("tr",{key:r.id},[e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(r.phone))]),t._v(" "),e("td",[t._v(t._s(r.email))]),t._v(" "),e("td",[t._v(t._s(r.dpt_name))]),t._v(" "),e("td",[t._v(t._s(r.des_name))]),t._v(" "),e("td",[t._v(t._s(r.salary))]),t._v(" "),e("td",{staticClass:"text-center"},[1==r.status?e("span",[t._v(" Active ")]):e("span",[t._v(" Inactive ")])]),t._v(" "),e("td",[e("center",[e("nuxt-link",{attrs:{to:{name:"employee-emp-edit-id",params:{id:r.id}},variant:"warning",size:"sm"}},[e("i",{staticClass:"bx bx-edit"}),t._v("EDIT\n                                                ")])],1)],1)])})),0)])]),t._v(" "),e("div",{staticClass:"pagenation"},[e("div",{staticStyle:{"text-align":"right"}},[e("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:1===t.currentPage},on:{click:t.previousPage}},[e("center",[e("i",{staticClass:"lni lni-angle-double-left"})])],1),t._v(" "),e("span",[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:t.currentPage===t.totalPages},on:{click:t.nextPage}},[e("center",[e("i",{staticClass:"lni lni-angle-double-right"})])],1)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"customerSpinner",staticStyle:{display:"none"}},[t("div",{staticClass:"d-flex justify-content-center"},[t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"visually-hidden"},[this._v("Loading...")])])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Phone")]),t._v(" "),e("th",[t._v("Email")]),t._v(" "),e("th",[t._v("Department")]),t._v(" "),e("th",[t._v("Designation")]),t._v(" "),e("th",[t._v("Salary")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Action")])])])}],!1,null,"6d064a5e",null);e.default=component.exports}}]);