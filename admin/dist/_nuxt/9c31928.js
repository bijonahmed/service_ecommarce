(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{352:function(e,t,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(119).default)("72f04966",content,!0,{sourceMap:!1})},462:function(e,t,n){"use strict";n(352)},463:function(e,t,n){var r=n(118)((function(i){return i[1]}));r.push([e.i,".pagenation[data-v-5a9610b8]{margin-top:10px}.pagination[data-v-5a9610b8]{list-style:none;\r\n    /*! display: flex; */padding-left:0}",""]),r.locals={},e.exports=r},581:function(e,t,n){"use strict";n.r(t);n(50),n(38),n(14),n(37);var r=n(8),o=(n(89),n(90),n(51),n(71),n(39),n(311)),l=n.n(o),c={head:{title:"Leave Report"},data:function(){return{insertdata:{employee_type:"",employe_id:"",frm_date:"",to_date:""},notifmsg:"",errors:{},data:[],empType:[],emp_data:[],leaveType:[],searchQuery:{emp_name:"",status:1},searchQueryPhone:"",currentPage:1,perPage:10}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:e.getEmployeeType(),e.getLeaveType();case 4:case"end":return t.stop()}}),t)})))()},computed:{totalPages:function(){return Math.ceil(this.filteredData.length/this.perPage)},filteredData:function(){var e=this,t=this.data;return this.searchQuery.emp_name&&(t=t.filter((function(t){return t.emp_name.toLowerCase().includes(e.searchQuery.emp_name.toLowerCase())}))),this.searchQuery.status&&(t=t.filter((function(t){return t.status==e.searchQuery.status}))),t},paginatedData:function(){var e=(this.currentPage-1)*this.perPage;return l.a.slice(this.filteredData,e,e+this.perPage)}},methods:{getEmployee:function(){var e=this,t=this.insertdata.employee_type;this.$axios.get("/user/getEmpType/".concat(t)).then((function(t){e.emp_data=t.data.data}))},getEmployeeType:function(){var e=this;this.$axios.get("/user/allemployeeType").then((function(t){e.empType=t.data.data}))},getLeaveType:function(){var e=this;this.$axios.get("/leave/getLeaveTypeList").then((function(t){e.leaveType=t.data.data}))},fetchData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return $(".customerSpinner").show(),t.prev=1,n=e.insertdata.employe_id,r=e.insertdata.employee_type,o=e.insertdata.frm_date,l=e.insertdata.to_date,console.log("EmployeID: ".concat(n," ===Type ").concat(r," === Frm").concat(o," === To").concat(l)),c={employe_id:n,employee_type:r,frm_date:o,to_date:l},t.next=10,e.$axios.get("/leave/getLeaveReport",{params:c});case 10:d=t.sent,e.data=d.data.data,$(".customerSpinner").hide(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()},handleSearch:function(){this.currentPage=1},previousPage:function(){this.currentPage--},nextPage:function(){this.currentPage++},success_noti:function(){Lobibox.notify("success",{pauseDelayOnHover:!0,continueDelayOnInactiveTab:!1,position:"top right",icon:"bx bx-check-circle",msg:"Your data has been successfully inserted."})}}},d=(n(462),n(26)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-wrapper"},[t("div",{staticClass:"page-content"},[t("div",{staticClass:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},[t("div",{staticClass:"ps-3"},[t("nav",{attrs:{"aria-label":"breadcrumb"}},[t("ol",{staticClass:"breadcrumb mb-0 p-0"},[t("li",{staticClass:"breadcrumb-item"},[t("router-link",{attrs:{to:"/hrm/dashboard"}},[t("a",{attrs:{href:"javascript:;"}},[t("i",{staticClass:"bx bx-home-alt"})])])],1),e._v(" "),t("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Leave Report")])])])]),e._v(" "),t("div",{staticClass:"ms-auto d-none"},[t("div",{staticClass:"btn-group"},[t("Nuxt-link",{attrs:{to:"/employee/employee-add"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t("i",{staticClass:"bx bx-plus"}),e._v("New")])])],1)])]),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3"},[e._v("\r\n                            Employee Type\r\n                            "),t("div",{staticClass:"input-group mb-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.insertdata.employee_type,expression:"insertdata.employee_type"}],staticClass:"form-select employee_type",attrs:{name:"employee_type"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.insertdata,"employee_type",t.target.multiple?n:n[0])},e.getEmployee]}},[t("option",{attrs:{value:""}},[e._v("Select Employee Type")]),e._v(" "),e._l(e.empType,(function(data){return t("option",{domProps:{value:data.name}},[e._v(e._s(data.name)+"\r\n                                    ")])}))],2)])]),e._v(" "),t("div",{staticClass:"col-md-2"},[e._v("\r\n                            Employee\r\n                            "),t("div",{staticClass:"input-group mb-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.insertdata.employe_id,expression:"insertdata.employe_id"}],staticClass:"form-select employe_id",attrs:{name:"employe_id"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.insertdata,"employe_id",t.target.multiple?n:n[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Employee")]),e._v(" "),e._l(e.emp_data,(function(data){return t("option",{domProps:{value:data.employe_id}},[e._v(e._s(data.name)+" ["+e._s(data.employee_code)+"]\r\n                                    ")])}))],2)])]),e._v(" "),t("div",{staticClass:"col-md-2"},[e._v("\r\n                            From Date\r\n                            "),t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.insertdata.frm_date,expression:"insertdata.frm_date"}],staticClass:"form-control frm_date",attrs:{type:"date",placeholder:"From Date"},domProps:{value:e.insertdata.frm_date},on:{input:function(t){t.target.composing||e.$set(e.insertdata,"frm_date",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[e._v("\r\n                            TO Date\r\n                            "),t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.insertdata.to_date,expression:"insertdata.to_date"}],staticClass:"form-control to_date",attrs:{type:"date",placeholder:"To Date"},domProps:{value:e.insertdata.to_date},on:{input:function(t){t.target.composing||e.$set(e.insertdata,"to_date",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("br"),e._v(" "),t("div",{staticClass:"input-group mb-3"},[t("button",{staticClass:"btn btn-primary w-100",attrs:{type:"button"},on:{click:e.fetchData}},[e._v("Search")])])])]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-hover table-sm"},[e._m(1),e._v(" "),t("tbody",e._l(e.paginatedData,(function(n){return t("tr",{key:n.id},[t("td",[e._v(e._s(n.employee_code))]),e._v(" "),t("td",[e._v(e._s(n.emp_name))]),e._v(" "),t("td",[e._v(e._s(n.leave_type))]),e._v(" "),t("td",[e._v(e._s(n.maximum_no_annual-n.leave_in_hand))])])})),0)])]),e._v(" "),t("div",{staticClass:"pagenation"},[t("div",{staticStyle:{"text-align":"right"}},[t("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:1===e.currentPage},on:{click:e.previousPage}},[t("center",[t("i",{staticClass:"lni lni-angle-double-left"})])],1),e._v(" "),t("span",[e._v("Page "+e._s(e.currentPage)+" of "+e._s(e.totalPages))]),e._v(" "),t("button",{staticClass:"btn btn-primary btn-sm",attrs:{disabled:e.currentPage===e.totalPages},on:{click:e.nextPage}},[t("center",[t("i",{staticClass:"lni lni-angle-double-right"})])],1)])])])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"customerSpinner",staticStyle:{display:"none"}},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"visually-hidden"},[this._v("Loading...")])])])])},function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",[e._v("Employee Code")]),e._v(" "),t("th",[e._v("Employee Name")]),e._v(" "),t("th",[e._v("Leave Type")]),e._v(" "),t("th",[e._v("Balance")])])])}],!1,null,"5a9610b8",null);t.default=component.exports}}]);