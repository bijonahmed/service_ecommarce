(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{323:function(t,e,r){var content=r(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(119).default)("59cc95ec",content,!0,{sourceMap:!1})},397:function(t,e,r){"use strict";r(323)},398:function(t,e,r){var n=r(118)((function(i){return i[1]}));n.push([t.i,"#previewImage{border:1px solid #e1e1e1!important;border-radius:50px;box-shadow:0 0 10px #e6e6e6;height:70px;-o-object-fit:contain;object-fit:contain;width:70px}input,select{box-shadow:none!important;outline:0!important}",""]),n.locals={},t.exports=n},537:function(t,e,r){"use strict";r.r(e);r(37),r(50),r(38),r(14),r(148);var n={head:{title:"Add New Brand"},data:function(){return{previewURL:null,insertdata:{id:"",name:"",image:"",status:1},notifmsg:"",errors:{}}},created:function(){},mounted:function(){},methods:{saveData:function(){var t=this,e=new FormData;e.append("id",this.insertdata.id),e.append("name",this.insertdata.name),e.append("image",this.insertdata.image),e.append("status",this.insertdata.status);this.$axios.post("/brands/save",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){$("#formrest")[0].reset(),t.success_noti(),t.$router.push("/brands/brands-list")})).catch((function(e){422===e.response.status&&(t.errors=e.response.data.errors)}))},success_noti:function(){Lobibox.notify("success",{pauseDelayOnHover:!0,continueDelayOnInactiveTab:!1,position:"top right",icon:"bx bx-check-circle",msg:"Your data has been successfully inserted."})},handleFileChange:function(t){var e=this,r=t.target.files[0];if(r){if(!r.type.startsWith("image/"))return void alert("Please select an image file.");this.insertdata.image=r;var n=new FileReader;n.onload=function(){e.previewURL=n.result},n.readAsDataURL(r)}else this.previewURL=null}}},o=(r(397),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page-content"},[e("div",{staticClass:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},[e("div",{staticClass:"ps-3"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb mb-0 p-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/",href:"javascript:;"}},[e("i",{staticClass:"bx bx-home-alt"})])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[e("router-link",{attrs:{to:"/brands/brands-list"}},[t._v("Brand List")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("New")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8 m-auto"},[e("div",{staticClass:"bg-white shadow rounded-2 p-5"},[e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.saveData()}}},[e("div",{staticClass:"form-group mb-2"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"inputEnterYourName"}},[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.name,expression:"insertdata.name"}],staticClass:"form-control name",attrs:{type:"text",id:"name",placeholder:"Name"},domProps:{value:t.insertdata.name},on:{input:function(e){e.target.composing||t.$set(t.insertdata,"name",e.target.value)}}}),t._v(" "),t.errors.name?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group mb-2"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"inputConfirmPassword2"}},[t._v("Status")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.insertdata.status,expression:"insertdata.status"}],staticClass:"form-select",attrs:{name:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.insertdata,"status",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"1",selected:""}},[t._v("Active")]),t._v(" "),e("option",{attrs:{value:"0"}},[t._v("Inactive")])])]),t._v(" "),e("div",{},[e("img",{staticClass:"img-fluid border border-light mb-2",attrs:{id:"previewImage",src:t.previewURL,alt:""}})]),t._v(" "),e("div",{staticClass:"form-group mb-2"},[e("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"inputLogo"}},[t._v("Brand Logo")]),t._v(" "),e("input",{staticClass:"form-control logo",attrs:{type:"file",name:"image",id:"inputLogo",placeholder:"Logo"},on:{change:function(e){return t.handleFileChange(e)}}})]),t._v(" "),t._m(0)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-success px-5 w-100",attrs:{type:"submit"}},[t("i",{staticClass:"bx bx-check-circle mr-1"}),this._v(" Submit")])])}],!1,null,null,null);e.default=component.exports}}]);