(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{554:function(t,e,r){"use strict";r.r(e);var o={head:{title:"Add New  Duty Roster "},data:function(){return{insertdata:{id:"",department_id:"",designation_id:"",shift_id:"",from_date:"",to_date:"",status:1},errors:{},dept:[],sCode:[],desig:[]}},created:function(){this.department(),this.designation(),this.shiftcode()},methods:{saveData:function(){var t=this,e=new FormData;e.append("id",this.insertdata.id),e.append("department_id",this.insertdata.department_id),e.append("designation_id",this.insertdata.designation_id),e.append("shift_id",this.insertdata.shift_id),e.append("from_date",this.insertdata.from_date),e.append("to_date",this.insertdata.to_date),e.append("status",this.insertdata.status);this.$axios.post("/rota/createEditDutyRoster",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){$("#formrest")[0].reset(),t.success_noti(),t.$router.push("/rota/duty-roster-list")})).catch((function(e){422===e.response.status&&(t.errors=e.response.data.errors)}))},department:function(){var t=this;this.$axios.get("/user/getDepartmentList").then((function(e){t.dept=e.data.data}))},designation:function(){var t=this;this.$axios.get("/user/getDesignationList").then((function(e){t.desig=e.data.data}))},shiftcode:function(){var t=this;this.$axios.get("/rota/allShiftInfo").then((function(e){t.sCode=e.data.data}))},success_noti:function(){Lobibox.notify("success",{pauseDelayOnHover:!0,continueDelayOnInactiveTab:!1,position:"top right",icon:"bx bx-check-circle",msg:"Your data has been successfully inserted."})}}},n=r(26),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page-content"},[e("div",{staticClass:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},[e("div",{staticClass:"ps-3"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb mb-0 p-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/hrm/dashboard",href:"javascript:;"}},[e("i",{staticClass:"bx bx-home-alt"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Attendance Status ")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 mx-auto"},[e("div",{staticClass:"card border-top border-0 border-4 border-info"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"border p-4 rounded"},[e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.saveData()}}},[e("div",{staticClass:"row mb-3"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"inputEnterYourName"}},[t._v("From Date")]),t._v(" "),e("div",{staticClass:"col-sm-9"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.from_date,expression:"insertdata.from_date"}],staticClass:"form-control from_date",attrs:{type:"date",id:"from_date"},domProps:{value:t.insertdata.from_date},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"from_date",e.target.value)}}}),t._v(" "),t.errors.from_date?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.from_date[0]))]):t._e()])]),t._v(" "),e("div",{staticClass:"row mb-3"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"inputEnterYourName"}},[t._v("To Date")]),t._v(" "),e("div",{staticClass:"col-sm-9"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.to_date,expression:"insertdata.to_date"}],staticClass:"form-control to_date",attrs:{type:"date",id:"to_date"},domProps:{value:t.insertdata.to_date},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"to_date",e.target.value)}}}),t._v(" "),t.errors.to_date?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.to_date[0]))]):t._e()])]),t._v(" "),t._m(0)]),t._v(" "),e("hr"),t._v(" "),t._m(1)])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("label",{staticClass:"col-sm-3 col-form-label"}),t._v(" "),e("div",{staticClass:"col-sm-9"},[e("button",{staticClass:"btn btn-success px-5 w-100",attrs:{type:"submit"}},[e("i",{staticClass:"bx bx-check-circle mr-1"}),t._v(" Find")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"display table table-striped table-hover",attrs:{id:"basic-datatables"}},[e("thead",[e("tr",[e("th",[t._v("Sl No.")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("Clock In")]),t._v(" "),e("th",[t._v("Clock In Location")]),t._v(" "),e("th",[t._v("Clock Out")]),t._v(" "),e("th",[t._v("Clock Out Location")]),t._v(" "),e("th",[t._v("Duty Hours")])])]),t._v(" "),e("tbody")])])}],!1,null,null,null);e.default=component.exports}}]);