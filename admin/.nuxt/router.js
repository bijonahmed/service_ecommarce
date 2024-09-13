import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01e3517e = () => interopDefault(import('..\\pages\\changePassword.vue' /* webpackChunkName: "pages/changePassword" */))
const _7ed16273 = () => interopDefault(import('..\\pages\\company-profile.vue' /* webpackChunkName: "pages/company-profile" */))
const _adfaf6a4 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _493fd014 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _1bf7aa2a = () => interopDefault(import('..\\pages\\dashboard\\profile.vue' /* webpackChunkName: "pages/dashboard/profile" */))
const _348e2803 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _44d109c3 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _ad99640e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _562220ba = () => interopDefault(import('..\\pages\\blog\\blog-cat.vue' /* webpackChunkName: "pages/blog/blog-cat" */))
const _191052a1 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _01229d89 = () => interopDefault(import('..\\pages\\blog\\edit-blogCat.vue' /* webpackChunkName: "pages/blog/edit-blogCat" */))
const _c2a193b2 = () => interopDefault(import('..\\pages\\blog\\new-blog.vue' /* webpackChunkName: "pages/blog/new-blog" */))
const _cf75e366 = () => interopDefault(import('..\\pages\\brands\\brands-list.vue' /* webpackChunkName: "pages/brands/brands-list" */))
const _50542eb4 = () => interopDefault(import('..\\pages\\brands\\edit-brand.vue' /* webpackChunkName: "pages/brands/edit-brand" */))
const _2c8a4368 = () => interopDefault(import('..\\pages\\brands\\new-brand.vue' /* webpackChunkName: "pages/brands/new-brand" */))
const _dce5a16c = () => interopDefault(import('..\\pages\\coupons\\all-coupons.vue' /* webpackChunkName: "pages/coupons/all-coupons" */))
const _344258c9 = () => interopDefault(import('..\\pages\\coupons\\new-coupons.vue' /* webpackChunkName: "pages/coupons/new-coupons" */))
const _11ce4bd0 = () => interopDefault(import('..\\pages\\customer\\customerList.vue' /* webpackChunkName: "pages/customer/customerList" */))
const _fada87cc = () => interopDefault(import('..\\pages\\customer\\newCustomer.vue' /* webpackChunkName: "pages/customer/newCustomer" */))
const _5ce6b4e6 = () => interopDefault(import('..\\pages\\ecommarce\\attributes-list.vue' /* webpackChunkName: "pages/ecommarce/attributes-list" */))
const _77d3fba0 = () => interopDefault(import('..\\pages\\ecommarce\\category-add.vue' /* webpackChunkName: "pages/ecommarce/category-add" */))
const _6a70eb0b = () => interopDefault(import('..\\pages\\ecommarce\\category-edit.vue' /* webpackChunkName: "pages/ecommarce/category-edit" */))
const _5b28c39f = () => interopDefault(import('..\\pages\\ecommarce\\category-list.vue' /* webpackChunkName: "pages/ecommarce/category-list" */))
const _578b63bc = () => interopDefault(import('..\\pages\\ecommarce\\category-percentage-history.vue' /* webpackChunkName: "pages/ecommarce/category-percentage-history" */))
const _42b6f10f = () => interopDefault(import('..\\pages\\ecommarce\\Old-product-add.vue' /* webpackChunkName: "pages/ecommarce/Old-product-add" */))
const _80244fe8 = () => interopDefault(import('..\\pages\\ecommarce\\Old-product-edit.vue' /* webpackChunkName: "pages/ecommarce/Old-product-edit" */))
const _d8939456 = () => interopDefault(import('..\\pages\\ecommarce\\product-add.vue' /* webpackChunkName: "pages/ecommarce/product-add" */))
const _e251a7f4 = () => interopDefault(import('..\\pages\\ecommarce\\product-edit.vue' /* webpackChunkName: "pages/ecommarce/product-edit" */))
const _7f8f049a = () => interopDefault(import('..\\pages\\ecommarce\\product-list.vue' /* webpackChunkName: "pages/ecommarce/product-list" */))
const _53327108 = () => interopDefault(import('..\\pages\\ecommarce\\product-preview.vue' /* webpackChunkName: "pages/ecommarce/product-preview" */))
const _d0f58a86 = () => interopDefault(import('..\\pages\\ecommarce\\product-varient.vue' /* webpackChunkName: "pages/ecommarce/product-varient" */))
const _5a405602 = () => interopDefault(import('..\\pages\\employee\\attendance-status.vue' /* webpackChunkName: "pages/employee/attendance-status" */))
const _a377ab0a = () => interopDefault(import('..\\pages\\employee\\change-of-circumstances-add.vue' /* webpackChunkName: "pages/employee/change-of-circumstances-add" */))
const _5ad43878 = () => interopDefault(import('..\\pages\\employee\\change-of-circumstances-employee.vue' /* webpackChunkName: "pages/employee/change-of-circumstances-employee" */))
const _9280b698 = () => interopDefault(import('..\\pages\\employee\\change-of-circumstances-list.vue' /* webpackChunkName: "pages/employee/change-of-circumstances-list" */))
const _575bd640 = () => interopDefault(import('..\\pages\\employee\\dashboard.vue' /* webpackChunkName: "pages/employee/dashboard" */))
const _8fac5eac = () => interopDefault(import('..\\pages\\employee\\department-add.vue' /* webpackChunkName: "pages/employee/department-add" */))
const _2ce27736 = () => interopDefault(import('..\\pages\\employee\\department-list.vue' /* webpackChunkName: "pages/employee/department-list" */))
const _a9ba5a12 = () => interopDefault(import('..\\pages\\employee\\designation-add.vue' /* webpackChunkName: "pages/employee/designation-add" */))
const _55b60bb8 = () => interopDefault(import('..\\pages\\employee\\designation-list.vue' /* webpackChunkName: "pages/employee/designation-list" */))
const _72d9a8a8 = () => interopDefault(import('..\\pages\\employee\\emp-assign-to-user.vue' /* webpackChunkName: "pages/employee/emp-assign-to-user" */))
const _685279f4 = () => interopDefault(import('..\\pages\\employee\\employee-add.vue' /* webpackChunkName: "pages/employee/employee-add" */))
const _4b801d89 = () => interopDefault(import('..\\pages\\employee\\employee-list.vue' /* webpackChunkName: "pages/employee/employee-list" */))
const _f1d8b604 = () => interopDefault(import('..\\pages\\employee\\leave-approval-list.vue' /* webpackChunkName: "pages/employee/leave-approval-list" */))
const _e4ff6630 = () => interopDefault(import('..\\pages\\employee\\leavel-rquest-add.vue' /* webpackChunkName: "pages/employee/leavel-rquest-add" */))
const _2ade1dfc = () => interopDefault(import('..\\pages\\employee\\migrant-employee-list.vue' /* webpackChunkName: "pages/employee/migrant-employee-list" */))
const _08c6138e = () => interopDefault(import('..\\pages\\holiday\\add-holidays.vue' /* webpackChunkName: "pages/holiday/add-holidays" */))
const _03413512 = () => interopDefault(import('..\\pages\\holiday\\dashboard.vue' /* webpackChunkName: "pages/holiday/dashboard" */))
const _277172ac = () => interopDefault(import('..\\pages\\holiday\\holiday-add.vue' /* webpackChunkName: "pages/holiday/holiday-add" */))
const _39200e65 = () => interopDefault(import('..\\pages\\holiday\\holiday-list.vue' /* webpackChunkName: "pages/holiday/holiday-list" */))
const _286996cc = () => interopDefault(import('..\\pages\\holiday\\holiday-type-list.vue' /* webpackChunkName: "pages/holiday/holiday-type-list" */))
const _1a755867 = () => interopDefault(import('..\\pages\\hrm\\dashboard.vue' /* webpackChunkName: "pages/hrm/dashboard" */))
const _67152d46 = () => interopDefault(import('..\\pages\\leave\\add-allocation.vue' /* webpackChunkName: "pages/leave/add-allocation" */))
const _10b5ed80 = () => interopDefault(import('..\\pages\\leave\\add-leaverole.vue' /* webpackChunkName: "pages/leave/add-leaverole" */))
const _418dd3f8 = () => interopDefault(import('..\\pages\\leave\\add-leavetype.vue' /* webpackChunkName: "pages/leave/add-leavetype" */))
const _22c6e26a = () => interopDefault(import('..\\pages\\leave\\allocation-list.vue' /* webpackChunkName: "pages/leave/allocation-list" */))
const _663abc53 = () => interopDefault(import('..\\pages\\leave\\dashboard.vue' /* webpackChunkName: "pages/leave/dashboard" */))
const _23e6df16 = () => interopDefault(import('..\\pages\\leave\\leave-balance-list.vue' /* webpackChunkName: "pages/leave/leave-balance-list" */))
const _537f17ca = () => interopDefault(import('..\\pages\\leave\\leave-report.vue' /* webpackChunkName: "pages/leave/leave-report" */))
const _745992bf = () => interopDefault(import('..\\pages\\leave\\leave-request-dashboard.vue' /* webpackChunkName: "pages/leave/leave-request-dashboard" */))
const _095dd4c3 = () => interopDefault(import('..\\pages\\leave\\leave-request-list.vue' /* webpackChunkName: "pages/leave/leave-request-list" */))
const _1b570efe = () => interopDefault(import('..\\pages\\leave\\leave-role-list.vue' /* webpackChunkName: "pages/leave/leave-role-list" */))
const _ce3f468c = () => interopDefault(import('..\\pages\\leave\\leave-type-list.vue' /* webpackChunkName: "pages/leave/leave-type-list" */))
const _0d955cdd = () => interopDefault(import('..\\pages\\manufacturer\\edit-manufacturer.vue' /* webpackChunkName: "pages/manufacturer/edit-manufacturer" */))
const _aab9d920 = () => interopDefault(import('..\\pages\\manufacturer\\manufacturers-list.vue' /* webpackChunkName: "pages/manufacturer/manufacturers-list" */))
const _1ca7b6c5 = () => interopDefault(import('..\\pages\\manufacturer\\new-manufacturer.vue' /* webpackChunkName: "pages/manufacturer/new-manufacturer" */))
const _1263f808 = () => interopDefault(import('..\\pages\\mlm\\report.vue' /* webpackChunkName: "pages/mlm/report" */))
const _5d1d5dfd = () => interopDefault(import('..\\pages\\models\\edit-models.vue' /* webpackChunkName: "pages/models/edit-models" */))
const _0786e691 = () => interopDefault(import('..\\pages\\models\\models-list.vue' /* webpackChunkName: "pages/models/models-list" */))
const _533c4e12 = () => interopDefault(import('..\\pages\\models\\new-models.vue' /* webpackChunkName: "pages/models/new-models" */))
const _2b355997 = () => interopDefault(import('..\\pages\\orders\\details.vue' /* webpackChunkName: "pages/orders/details" */))
const _246bdf10 = () => interopDefault(import('..\\pages\\orders\\edit-orderstatus.vue' /* webpackChunkName: "pages/orders/edit-orderstatus" */))
const _389679e8 = () => interopDefault(import('..\\pages\\orders\\new-orderstatus.vue' /* webpackChunkName: "pages/orders/new-orderstatus" */))
const _4d6d5cf8 = () => interopDefault(import('..\\pages\\orders\\order-list.vue' /* webpackChunkName: "pages/orders/order-list" */))
const _69dce6ee = () => interopDefault(import('..\\pages\\orders\\status-list.vue' /* webpackChunkName: "pages/orders/status-list" */))
const _a3fa676e = () => interopDefault(import('..\\pages\\project\\new-project.vue' /* webpackChunkName: "pages/project/new-project" */))
const _b4d86d76 = () => interopDefault(import('..\\pages\\project\\project-list.vue' /* webpackChunkName: "pages/project/project-list" */))
const _605405fa = () => interopDefault(import('..\\pages\\role\\newrole.vue' /* webpackChunkName: "pages/role/newrole" */))
const _4ca669aa = () => interopDefault(import('..\\pages\\role\\role_list.vue' /* webpackChunkName: "pages/role/role_list" */))
const _000b059b = () => interopDefault(import('..\\pages\\seller\\allseller.vue' /* webpackChunkName: "pages/seller/allseller" */))
const _e2e0a640 = () => interopDefault(import('..\\pages\\setting\\add-salary.vue' /* webpackChunkName: "pages/setting/add-salary" */))
const _1c8287ea = () => interopDefault(import('..\\pages\\setting\\ads-management.vue' /* webpackChunkName: "pages/setting/ads-management" */))
const _e559f910 = () => interopDefault(import('..\\pages\\setting\\annual-pay-add.vue' /* webpackChunkName: "pages/setting/annual-pay-add" */))
const _8ce82952 = () => interopDefault(import('..\\pages\\setting\\annual-pay-list.vue' /* webpackChunkName: "pages/setting/annual-pay-list" */))
const _fa9c2f26 = () => interopDefault(import('..\\pages\\setting\\bank-master-add.vue' /* webpackChunkName: "pages/setting/bank-master-add" */))
const _7009a502 = () => interopDefault(import('..\\pages\\setting\\bank-master-list.vue' /* webpackChunkName: "pages/setting/bank-master-list" */))
const _da8159ae = () => interopDefault(import('..\\pages\\setting\\bank-short-code-add.vue' /* webpackChunkName: "pages/setting/bank-short-code-add" */))
const _61a991c6 = () => interopDefault(import('..\\pages\\setting\\bank-short-code-list.vue' /* webpackChunkName: "pages/setting/bank-short-code-list" */))
const _739fa01a = () => interopDefault(import('..\\pages\\setting\\dashboard.vue' /* webpackChunkName: "pages/setting/dashboard" */))
const _75a132d3 = () => interopDefault(import('..\\pages\\setting\\employee-type-add.vue' /* webpackChunkName: "pages/setting/employee-type-add" */))
const _49f8b148 = () => interopDefault(import('..\\pages\\setting\\employee-type-list.vue' /* webpackChunkName: "pages/setting/employee-type-list" */))
const _38f0d9f8 = () => interopDefault(import('..\\pages\\setting\\packages-list.vue' /* webpackChunkName: "pages/setting/packages-list" */))
const _09b4fef4 = () => interopDefault(import('..\\pages\\setting\\pay-group-add.vue' /* webpackChunkName: "pages/setting/pay-group-add" */))
const _6d2d414a = () => interopDefault(import('..\\pages\\setting\\pay-group-list.vue' /* webpackChunkName: "pages/setting/pay-group-list" */))
const _420f42df = () => interopDefault(import('..\\pages\\setting\\payment-type-add.vue' /* webpackChunkName: "pages/setting/payment-type-add" */))
const _c750ce60 = () => interopDefault(import('..\\pages\\setting\\payment-type-list.vue' /* webpackChunkName: "pages/setting/payment-type-list" */))
const _4738d16d = () => interopDefault(import('..\\pages\\setting\\payroll-payitem-add.vue' /* webpackChunkName: "pages/setting/payroll-payitem-add" */))
const _3c5fdc02 = () => interopDefault(import('..\\pages\\setting\\payroll-payitem-list.vue' /* webpackChunkName: "pages/setting/payroll-payitem-list" */))
const _5c9fea47 = () => interopDefault(import('..\\pages\\setting\\salary-list.vue' /* webpackChunkName: "pages/setting/salary-list" */))
const _1db43882 = () => interopDefault(import('..\\pages\\setting\\tax-master-add.vue' /* webpackChunkName: "pages/setting/tax-master-add" */))
const _3551578d = () => interopDefault(import('..\\pages\\setting\\tax-master-list.vue' /* webpackChunkName: "pages/setting/tax-master-list" */))
const _21850450 = () => interopDefault(import('..\\pages\\setting\\wedges-pay-add.vue' /* webpackChunkName: "pages/setting/wedges-pay-add" */))
const _d61e8612 = () => interopDefault(import('..\\pages\\setting\\wedges-pay-list.vue' /* webpackChunkName: "pages/setting/wedges-pay-list" */))
const _480edd68 = () => interopDefault(import('..\\pages\\task\\add-task.vue' /* webpackChunkName: "pages/task/add-task" */))
const _140820ee = () => interopDefault(import('..\\pages\\task\\dashboard.vue' /* webpackChunkName: "pages/task/dashboard" */))
const _7b0253db = () => interopDefault(import('..\\pages\\task\\task-list.vue' /* webpackChunkName: "pages/task/task-list" */))
const _579b2483 = () => interopDefault(import('..\\pages\\user\\dashboard.vue' /* webpackChunkName: "pages/user/dashboard" */))
const _408eec8c = () => interopDefault(import('..\\pages\\user\\newUser.vue' /* webpackChunkName: "pages/user/newUser" */))
const _56ffa0fe = () => interopDefault(import('..\\pages\\user\\user_list.vue' /* webpackChunkName: "pages/user/user_list" */))
const _6ae684ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3459c19e = () => interopDefault(import('..\\pages\\leave\\edit\\leaveallocation\\_id.vue' /* webpackChunkName: "pages/leave/edit/leaveallocation/_id" */))
const _6a282bc8 = () => interopDefault(import('..\\pages\\leave\\edit\\leaverole\\_id.vue' /* webpackChunkName: "pages/leave/edit/leaverole/_id" */))
const _309d0cf8 = () => interopDefault(import('..\\pages\\leave\\edit\\leavetype\\_id.vue' /* webpackChunkName: "pages/leave/edit/leavetype/_id" */))
const _6818d599 = () => interopDefault(import('..\\pages\\coupons\\edit\\_id.vue' /* webpackChunkName: "pages/coupons/edit/_id" */))
const _d19a0628 = () => interopDefault(import('..\\pages\\customer\\edit\\_id.vue' /* webpackChunkName: "pages/customer/edit/_id" */))
const _ea77e24a = () => interopDefault(import('..\\pages\\employee\\cir-edit\\_id.vue' /* webpackChunkName: "pages/employee/cir-edit/_id" */))
const _02af2452 = () => interopDefault(import('..\\pages\\employee\\emp-edit\\_id.vue' /* webpackChunkName: "pages/employee/emp-edit/_id" */))
const _e59263e4 = () => interopDefault(import('..\\pages\\employee\\leaveRequest\\_id.vue' /* webpackChunkName: "pages/employee/leaveRequest/_id" */))
const _7aaffb00 = () => interopDefault(import('..\\pages\\holiday\\editholidaylist\\_id.vue' /* webpackChunkName: "pages/holiday/editholidaylist/_id" */))
const _5407afab = () => interopDefault(import('..\\pages\\seller\\edit\\_id.vue' /* webpackChunkName: "pages/seller/edit/_id" */))
const _14c59536 = () => interopDefault(import('..\\pages\\task\\edit\\_id.vue' /* webpackChunkName: "pages/task/edit/_id" */))
const _10152ba7 = () => interopDefault(import('..\\pages\\user\\changesPass\\_id.vue' /* webpackChunkName: "pages/user/changesPass/_id" */))
const _573c6a5f = () => interopDefault(import('..\\pages\\user\\edit\\_id.vue' /* webpackChunkName: "pages/user/edit/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/changePassword",
    component: _01e3517e,
    name: "changePassword"
  }, {
    path: "/company-profile",
    component: _7ed16273,
    name: "company-profile"
  }, {
    path: "/dashboard",
    component: _adfaf6a4,
    children: [{
      path: "",
      component: _493fd014,
      name: "dashboard"
    }, {
      path: "profile",
      component: _1bf7aa2a,
      name: "dashboard-profile"
    }]
  }, {
    path: "/login",
    component: _348e2803,
    name: "login"
  }, {
    path: "/profile",
    component: _44d109c3,
    name: "profile"
  }, {
    path: "/register",
    component: _ad99640e,
    name: "register"
  }, {
    path: "/blog/blog-cat",
    component: _562220ba,
    name: "blog-blog-cat"
  }, {
    path: "/blog/blog-list",
    component: _191052a1,
    name: "blog-blog-list"
  }, {
    path: "/blog/edit-blogCat",
    component: _01229d89,
    name: "blog-edit-blogCat"
  }, {
    path: "/blog/new-blog",
    component: _c2a193b2,
    name: "blog-new-blog"
  }, {
    path: "/brands/brands-list",
    component: _cf75e366,
    name: "brands-brands-list"
  }, {
    path: "/brands/edit-brand",
    component: _50542eb4,
    name: "brands-edit-brand"
  }, {
    path: "/brands/new-brand",
    component: _2c8a4368,
    name: "brands-new-brand"
  }, {
    path: "/coupons/all-coupons",
    component: _dce5a16c,
    name: "coupons-all-coupons"
  }, {
    path: "/coupons/new-coupons",
    component: _344258c9,
    name: "coupons-new-coupons"
  }, {
    path: "/customer/customerList",
    component: _11ce4bd0,
    name: "customer-customerList"
  }, {
    path: "/customer/newCustomer",
    component: _fada87cc,
    name: "customer-newCustomer"
  }, {
    path: "/ecommarce/attributes-list",
    component: _5ce6b4e6,
    name: "ecommarce-attributes-list"
  }, {
    path: "/ecommarce/category-add",
    component: _77d3fba0,
    name: "ecommarce-category-add"
  }, {
    path: "/ecommarce/category-edit",
    component: _6a70eb0b,
    name: "ecommarce-category-edit"
  }, {
    path: "/ecommarce/category-list",
    component: _5b28c39f,
    name: "ecommarce-category-list"
  }, {
    path: "/ecommarce/category-percentage-history",
    component: _578b63bc,
    name: "ecommarce-category-percentage-history"
  }, {
    path: "/ecommarce/Old-product-add",
    component: _42b6f10f,
    name: "ecommarce-Old-product-add"
  }, {
    path: "/ecommarce/Old-product-edit",
    component: _80244fe8,
    name: "ecommarce-Old-product-edit"
  }, {
    path: "/ecommarce/product-add",
    component: _d8939456,
    name: "ecommarce-product-add"
  }, {
    path: "/ecommarce/product-edit",
    component: _e251a7f4,
    name: "ecommarce-product-edit"
  }, {
    path: "/ecommarce/product-list",
    component: _7f8f049a,
    name: "ecommarce-product-list"
  }, {
    path: "/ecommarce/product-preview",
    component: _53327108,
    name: "ecommarce-product-preview"
  }, {
    path: "/ecommarce/product-varient",
    component: _d0f58a86,
    name: "ecommarce-product-varient"
  }, {
    path: "/employee/attendance-status",
    component: _5a405602,
    name: "employee-attendance-status"
  }, {
    path: "/employee/change-of-circumstances-add",
    component: _a377ab0a,
    name: "employee-change-of-circumstances-add"
  }, {
    path: "/employee/change-of-circumstances-employee",
    component: _5ad43878,
    name: "employee-change-of-circumstances-employee"
  }, {
    path: "/employee/change-of-circumstances-list",
    component: _9280b698,
    name: "employee-change-of-circumstances-list"
  }, {
    path: "/employee/dashboard",
    component: _575bd640,
    name: "employee-dashboard"
  }, {
    path: "/employee/department-add",
    component: _8fac5eac,
    name: "employee-department-add"
  }, {
    path: "/employee/department-list",
    component: _2ce27736,
    name: "employee-department-list"
  }, {
    path: "/employee/designation-add",
    component: _a9ba5a12,
    name: "employee-designation-add"
  }, {
    path: "/employee/designation-list",
    component: _55b60bb8,
    name: "employee-designation-list"
  }, {
    path: "/employee/emp-assign-to-user",
    component: _72d9a8a8,
    name: "employee-emp-assign-to-user"
  }, {
    path: "/employee/employee-add",
    component: _685279f4,
    name: "employee-employee-add"
  }, {
    path: "/employee/employee-list",
    component: _4b801d89,
    name: "employee-employee-list"
  }, {
    path: "/employee/leave-approval-list",
    component: _f1d8b604,
    name: "employee-leave-approval-list"
  }, {
    path: "/employee/leavel-rquest-add",
    component: _e4ff6630,
    name: "employee-leavel-rquest-add"
  }, {
    path: "/employee/migrant-employee-list",
    component: _2ade1dfc,
    name: "employee-migrant-employee-list"
  }, {
    path: "/holiday/add-holidays",
    component: _08c6138e,
    name: "holiday-add-holidays"
  }, {
    path: "/holiday/dashboard",
    component: _03413512,
    name: "holiday-dashboard"
  }, {
    path: "/holiday/holiday-add",
    component: _277172ac,
    name: "holiday-holiday-add"
  }, {
    path: "/holiday/holiday-list",
    component: _39200e65,
    name: "holiday-holiday-list"
  }, {
    path: "/holiday/holiday-type-list",
    component: _286996cc,
    name: "holiday-holiday-type-list"
  }, {
    path: "/hrm/dashboard",
    component: _1a755867,
    name: "hrm-dashboard"
  }, {
    path: "/leave/add-allocation",
    component: _67152d46,
    name: "leave-add-allocation"
  }, {
    path: "/leave/add-leaverole",
    component: _10b5ed80,
    name: "leave-add-leaverole"
  }, {
    path: "/leave/add-leavetype",
    component: _418dd3f8,
    name: "leave-add-leavetype"
  }, {
    path: "/leave/allocation-list",
    component: _22c6e26a,
    name: "leave-allocation-list"
  }, {
    path: "/leave/dashboard",
    component: _663abc53,
    name: "leave-dashboard"
  }, {
    path: "/leave/leave-balance-list",
    component: _23e6df16,
    name: "leave-leave-balance-list"
  }, {
    path: "/leave/leave-report",
    component: _537f17ca,
    name: "leave-leave-report"
  }, {
    path: "/leave/leave-request-dashboard",
    component: _745992bf,
    name: "leave-leave-request-dashboard"
  }, {
    path: "/leave/leave-request-list",
    component: _095dd4c3,
    name: "leave-leave-request-list"
  }, {
    path: "/leave/leave-role-list",
    component: _1b570efe,
    name: "leave-leave-role-list"
  }, {
    path: "/leave/leave-type-list",
    component: _ce3f468c,
    name: "leave-leave-type-list"
  }, {
    path: "/manufacturer/edit-manufacturer",
    component: _0d955cdd,
    name: "manufacturer-edit-manufacturer"
  }, {
    path: "/manufacturer/manufacturers-list",
    component: _aab9d920,
    name: "manufacturer-manufacturers-list"
  }, {
    path: "/manufacturer/new-manufacturer",
    component: _1ca7b6c5,
    name: "manufacturer-new-manufacturer"
  }, {
    path: "/mlm/report",
    component: _1263f808,
    name: "mlm-report"
  }, {
    path: "/models/edit-models",
    component: _5d1d5dfd,
    name: "models-edit-models"
  }, {
    path: "/models/models-list",
    component: _0786e691,
    name: "models-models-list"
  }, {
    path: "/models/new-models",
    component: _533c4e12,
    name: "models-new-models"
  }, {
    path: "/orders/details",
    component: _2b355997,
    name: "orders-details"
  }, {
    path: "/orders/edit-orderstatus",
    component: _246bdf10,
    name: "orders-edit-orderstatus"
  }, {
    path: "/orders/new-orderstatus",
    component: _389679e8,
    name: "orders-new-orderstatus"
  }, {
    path: "/orders/order-list",
    component: _4d6d5cf8,
    name: "orders-order-list"
  }, {
    path: "/orders/status-list",
    component: _69dce6ee,
    name: "orders-status-list"
  }, {
    path: "/project/new-project",
    component: _a3fa676e,
    name: "project-new-project"
  }, {
    path: "/project/project-list",
    component: _b4d86d76,
    name: "project-project-list"
  }, {
    path: "/role/newrole",
    component: _605405fa,
    name: "role-newrole"
  }, {
    path: "/role/role_list",
    component: _4ca669aa,
    name: "role-role_list"
  }, {
    path: "/seller/allseller",
    component: _000b059b,
    name: "seller-allseller"
  }, {
    path: "/setting/add-salary",
    component: _e2e0a640,
    name: "setting-add-salary"
  }, {
    path: "/setting/ads-management",
    component: _1c8287ea,
    name: "setting-ads-management"
  }, {
    path: "/setting/annual-pay-add",
    component: _e559f910,
    name: "setting-annual-pay-add"
  }, {
    path: "/setting/annual-pay-list",
    component: _8ce82952,
    name: "setting-annual-pay-list"
  }, {
    path: "/setting/bank-master-add",
    component: _fa9c2f26,
    name: "setting-bank-master-add"
  }, {
    path: "/setting/bank-master-list",
    component: _7009a502,
    name: "setting-bank-master-list"
  }, {
    path: "/setting/bank-short-code-add",
    component: _da8159ae,
    name: "setting-bank-short-code-add"
  }, {
    path: "/setting/bank-short-code-list",
    component: _61a991c6,
    name: "setting-bank-short-code-list"
  }, {
    path: "/setting/dashboard",
    component: _739fa01a,
    name: "setting-dashboard"
  }, {
    path: "/setting/employee-type-add",
    component: _75a132d3,
    name: "setting-employee-type-add"
  }, {
    path: "/setting/employee-type-list",
    component: _49f8b148,
    name: "setting-employee-type-list"
  }, {
    path: "/setting/packages-list",
    component: _38f0d9f8,
    name: "setting-packages-list"
  }, {
    path: "/setting/pay-group-add",
    component: _09b4fef4,
    name: "setting-pay-group-add"
  }, {
    path: "/setting/pay-group-list",
    component: _6d2d414a,
    name: "setting-pay-group-list"
  }, {
    path: "/setting/payment-type-add",
    component: _420f42df,
    name: "setting-payment-type-add"
  }, {
    path: "/setting/payment-type-list",
    component: _c750ce60,
    name: "setting-payment-type-list"
  }, {
    path: "/setting/payroll-payitem-add",
    component: _4738d16d,
    name: "setting-payroll-payitem-add"
  }, {
    path: "/setting/payroll-payitem-list",
    component: _3c5fdc02,
    name: "setting-payroll-payitem-list"
  }, {
    path: "/setting/salary-list",
    component: _5c9fea47,
    name: "setting-salary-list"
  }, {
    path: "/setting/tax-master-add",
    component: _1db43882,
    name: "setting-tax-master-add"
  }, {
    path: "/setting/tax-master-list",
    component: _3551578d,
    name: "setting-tax-master-list"
  }, {
    path: "/setting/wedges-pay-add",
    component: _21850450,
    name: "setting-wedges-pay-add"
  }, {
    path: "/setting/wedges-pay-list",
    component: _d61e8612,
    name: "setting-wedges-pay-list"
  }, {
    path: "/task/add-task",
    component: _480edd68,
    name: "task-add-task"
  }, {
    path: "/task/dashboard",
    component: _140820ee,
    name: "task-dashboard"
  }, {
    path: "/task/task-list",
    component: _7b0253db,
    name: "task-task-list"
  }, {
    path: "/user/dashboard",
    component: _579b2483,
    name: "user-dashboard"
  }, {
    path: "/user/newUser",
    component: _408eec8c,
    name: "user-newUser"
  }, {
    path: "/user/user_list",
    component: _56ffa0fe,
    name: "user-user_list"
  }, {
    path: "/",
    component: _6ae684ec,
    name: "index"
  }, {
    path: "/leave/edit/leaveallocation/:id?",
    component: _3459c19e,
    name: "leave-edit-leaveallocation-id"
  }, {
    path: "/leave/edit/leaverole/:id?",
    component: _6a282bc8,
    name: "leave-edit-leaverole-id"
  }, {
    path: "/leave/edit/leavetype/:id?",
    component: _309d0cf8,
    name: "leave-edit-leavetype-id"
  }, {
    path: "/coupons/edit/:id?",
    component: _6818d599,
    name: "coupons-edit-id"
  }, {
    path: "/customer/edit/:id?",
    component: _d19a0628,
    name: "customer-edit-id"
  }, {
    path: "/employee/cir-edit/:id?",
    component: _ea77e24a,
    name: "employee-cir-edit-id"
  }, {
    path: "/employee/emp-edit/:id?",
    component: _02af2452,
    name: "employee-emp-edit-id"
  }, {
    path: "/employee/leaveRequest/:id?",
    component: _e59263e4,
    name: "employee-leaveRequest-id"
  }, {
    path: "/holiday/editholidaylist/:id?",
    component: _7aaffb00,
    name: "holiday-editholidaylist-id"
  }, {
    path: "/seller/edit/:id?",
    component: _5407afab,
    name: "seller-edit-id"
  }, {
    path: "/task/edit/:id?",
    component: _14c59536,
    name: "task-edit-id"
  }, {
    path: "/user/changesPass/:id?",
    component: _10152ba7,
    name: "user-changesPass-id"
  }, {
    path: "/user/edit/:id?",
    component: _573c6a5f,
    name: "user-edit-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
