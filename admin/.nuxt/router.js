import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54dd41ab = () => interopDefault(import('..\\pages\\changePassword.vue' /* webpackChunkName: "pages/changePassword" */))
const _3a40756e = () => interopDefault(import('..\\pages\\company-profile.vue' /* webpackChunkName: "pages/company-profile" */))
const _44f14004 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _66fdc7fe = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _cfb85f56 = () => interopDefault(import('..\\pages\\dashboard\\profile.vue' /* webpackChunkName: "pages/dashboard/profile" */))
const _5ac8034e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _d27abace = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _d516603a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _2abdda0d = () => interopDefault(import('..\\pages\\blog\\blog-cat.vue' /* webpackChunkName: "pages/blog/blog-cat" */))
const _7d1eb577 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _b17b7a1a = () => interopDefault(import('..\\pages\\blog\\edit-blogCat.vue' /* webpackChunkName: "pages/blog/edit-blogCat" */))
const _1703bede = () => interopDefault(import('..\\pages\\blog\\new-blog.vue' /* webpackChunkName: "pages/blog/new-blog" */))
const _93cbd3ba = () => interopDefault(import('..\\pages\\brands\\brands-list.vue' /* webpackChunkName: "pages/brands/brands-list" */))
const _7df58e10 = () => interopDefault(import('..\\pages\\brands\\edit-brand.vue' /* webpackChunkName: "pages/brands/edit-brand" */))
const _72e96e84 = () => interopDefault(import('..\\pages\\brands\\new-brand.vue' /* webpackChunkName: "pages/brands/new-brand" */))
const _2e592234 = () => interopDefault(import('..\\pages\\coupons\\all-coupons.vue' /* webpackChunkName: "pages/coupons/all-coupons" */))
const _5de3689a = () => interopDefault(import('..\\pages\\coupons\\new-coupons.vue' /* webpackChunkName: "pages/coupons/new-coupons" */))
const _a92da78c = () => interopDefault(import('..\\pages\\customer\\customerList.vue' /* webpackChunkName: "pages/customer/customerList" */))
const _7f452670 = () => interopDefault(import('..\\pages\\customer\\newCustomer.vue' /* webpackChunkName: "pages/customer/newCustomer" */))
const _18315f60 = () => interopDefault(import('..\\pages\\ecommarce\\attributes-list.vue' /* webpackChunkName: "pages/ecommarce/attributes-list" */))
const _5dd72f06 = () => interopDefault(import('..\\pages\\ecommarce\\category-add.vue' /* webpackChunkName: "pages/ecommarce/category-add" */))
const _08d558f5 = () => interopDefault(import('..\\pages\\ecommarce\\category-edit.vue' /* webpackChunkName: "pages/ecommarce/category-edit" */))
const _0ce59cee = () => interopDefault(import('..\\pages\\ecommarce\\category-list.vue' /* webpackChunkName: "pages/ecommarce/category-list" */))
const _026b1a8c = () => interopDefault(import('..\\pages\\ecommarce\\category-percentage-history.vue' /* webpackChunkName: "pages/ecommarce/category-percentage-history" */))
const _4c90e70e = () => interopDefault(import('..\\pages\\ecommarce\\Old-product-add.vue' /* webpackChunkName: "pages/ecommarce/Old-product-add" */))
const _0900a9e2 = () => interopDefault(import('..\\pages\\ecommarce\\Old-product-edit.vue' /* webpackChunkName: "pages/ecommarce/Old-product-edit" */))
const _2d51163f = () => interopDefault(import('..\\pages\\ecommarce\\product-add.vue' /* webpackChunkName: "pages/ecommarce/product-add" */))
const _289858dc = () => interopDefault(import('..\\pages\\ecommarce\\product-edit.vue' /* webpackChunkName: "pages/ecommarce/product-edit" */))
const _19503170 = () => interopDefault(import('..\\pages\\ecommarce\\product-list.vue' /* webpackChunkName: "pages/ecommarce/product-list" */))
const _6d6762e6 = () => interopDefault(import('..\\pages\\ecommarce\\product-preview.vue' /* webpackChunkName: "pages/ecommarce/product-preview" */))
const _2e85d627 = () => interopDefault(import('..\\pages\\ecommarce\\product-varient.vue' /* webpackChunkName: "pages/ecommarce/product-varient" */))
const _b959b050 = () => interopDefault(import('..\\pages\\employee\\attendance-status.vue' /* webpackChunkName: "pages/employee/attendance-status" */))
const _75f328d1 = () => interopDefault(import('..\\pages\\employee\\change-of-circumstances-add.vue' /* webpackChunkName: "pages/employee/change-of-circumstances-add" */))
const _ad5329a4 = () => interopDefault(import('..\\pages\\employee\\change-of-circumstances-employee.vue' /* webpackChunkName: "pages/employee/change-of-circumstances-employee" */))
const _361f1dc4 = () => interopDefault(import('..\\pages\\employee\\change-of-circumstances-list.vue' /* webpackChunkName: "pages/employee/change-of-circumstances-list" */))
const _7530de16 = () => interopDefault(import('..\\pages\\employee\\dashboard.vue' /* webpackChunkName: "pages/employee/dashboard" */))
const _568e3e94 = () => interopDefault(import('..\\pages\\employee\\department-add.vue' /* webpackChunkName: "pages/employee/department-add" */))
const _17b813bb = () => interopDefault(import('..\\pages\\employee\\department-list.vue' /* webpackChunkName: "pages/employee/department-list" */))
const _4d67bb66 = () => interopDefault(import('..\\pages\\employee\\designation-add.vue' /* webpackChunkName: "pages/employee/designation-add" */))
const _2692b1bc = () => interopDefault(import('..\\pages\\employee\\designation-list.vue' /* webpackChunkName: "pages/employee/designation-list" */))
const _4c211192 = () => interopDefault(import('..\\pages\\employee\\emp-assign-to-user.vue' /* webpackChunkName: "pages/employee/emp-assign-to-user" */))
const _6571a370 = () => interopDefault(import('..\\pages\\employee\\employee-add.vue' /* webpackChunkName: "pages/employee/employee-add" */))
const _357d6b42 = () => interopDefault(import('..\\pages\\employee\\employee-list.vue' /* webpackChunkName: "pages/employee/employee-list" */))
const _528d4d58 = () => interopDefault(import('..\\pages\\employee\\leave-approval-list.vue' /* webpackChunkName: "pages/employee/leave-approval-list" */))
const _52d9c284 = () => interopDefault(import('..\\pages\\employee\\leavel-rquest-add.vue' /* webpackChunkName: "pages/employee/leavel-rquest-add" */))
const _27e814d2 = () => interopDefault(import('..\\pages\\employee\\migrant-employee-list.vue' /* webpackChunkName: "pages/employee/migrant-employee-list" */))
const _0f613ee2 = () => interopDefault(import('..\\pages\\holiday\\add-holidays.vue' /* webpackChunkName: "pages/holiday/add-holidays" */))
const _ad3e4b08 = () => interopDefault(import('..\\pages\\holiday\\dashboard.vue' /* webpackChunkName: "pages/holiday/dashboard" */))
const _edd98cd8 = () => interopDefault(import('..\\pages\\holiday\\holiday-add.vue' /* webpackChunkName: "pages/holiday/holiday-add" */))
const _35d278bb = () => interopDefault(import('..\\pages\\holiday\\holiday-list.vue' /* webpackChunkName: "pages/holiday/holiday-list" */))
const _fa685ff8 = () => interopDefault(import('..\\pages\\holiday\\holiday-type-list.vue' /* webpackChunkName: "pages/holiday/holiday-type-list" */))
const _704442d1 = () => interopDefault(import('..\\pages\\hrm\\dashboard.vue' /* webpackChunkName: "pages/hrm/dashboard" */))
const _6db0589a = () => interopDefault(import('..\\pages\\leave\\add-allocation.vue' /* webpackChunkName: "pages/leave/add-allocation" */))
const _d71e07ac = () => interopDefault(import('..\\pages\\leave\\add-leaverole.vue' /* webpackChunkName: "pages/leave/add-leaverole" */))
const _7c0508ee = () => interopDefault(import('..\\pages\\leave\\add-leavetype.vue' /* webpackChunkName: "pages/leave/add-leavetype" */))
const _873c7a58 = () => interopDefault(import('..\\pages\\leave\\allocation-list.vue' /* webpackChunkName: "pages/leave/allocation-list" */))
const _f80e9786 = () => interopDefault(import('..\\pages\\leave\\dashboard.vue' /* webpackChunkName: "pages/leave/dashboard" */))
const _52102e6c = () => interopDefault(import('..\\pages\\leave\\leave-balance-list.vue' /* webpackChunkName: "pages/leave/leave-balance-list" */))
const _17d5081e = () => interopDefault(import('..\\pages\\leave\\leave-report.vue' /* webpackChunkName: "pages/leave/leave-report" */))
const _196a6929 = () => interopDefault(import('..\\pages\\leave\\leave-request-dashboard.vue' /* webpackChunkName: "pages/leave/leave-request-dashboard" */))
const _37872419 = () => interopDefault(import('..\\pages\\leave\\leave-request-list.vue' /* webpackChunkName: "pages/leave/leave-request-list" */))
const _961c2130 = () => interopDefault(import('..\\pages\\leave\\leave-role-list.vue' /* webpackChunkName: "pages/leave/leave-role-list" */))
const _327b3d24 = () => interopDefault(import('..\\pages\\leave\\leave-type-list.vue' /* webpackChunkName: "pages/leave/leave-type-list" */))
const _0a9f53b3 = () => interopDefault(import('..\\pages\\manufacturer\\edit-manufacturer.vue' /* webpackChunkName: "pages/manufacturer/edit-manufacturer" */))
const _4ed7f75a = () => interopDefault(import('..\\pages\\manufacturer\\manufacturers-list.vue' /* webpackChunkName: "pages/manufacturer/manufacturers-list" */))
const _7c8ee5a2 = () => interopDefault(import('..\\pages\\manufacturer\\new-manufacturer.vue' /* webpackChunkName: "pages/manufacturer/new-manufacturer" */))
const _51fb41d2 = () => interopDefault(import('..\\pages\\mlm\\report.vue' /* webpackChunkName: "pages/mlm/report" */))
const _7af265d3 = () => interopDefault(import('..\\pages\\models\\edit-models.vue' /* webpackChunkName: "pages/models/edit-models" */))
const _255bee67 = () => interopDefault(import('..\\pages\\models\\models-list.vue' /* webpackChunkName: "pages/models/models-list" */))
const _7c817e61 = () => interopDefault(import('..\\pages\\models\\new-models.vue' /* webpackChunkName: "pages/models/new-models" */))
const _e1788726 = () => interopDefault(import('..\\pages\\orders\\details.vue' /* webpackChunkName: "pages/orders/details" */))
const _e7a3033c = () => interopDefault(import('..\\pages\\orders\\edit-orderstatus.vue' /* webpackChunkName: "pages/orders/edit-orderstatus" */))
const _5b50b284 = () => interopDefault(import('..\\pages\\orders\\new-orderstatus.vue' /* webpackChunkName: "pages/orders/new-orderstatus" */))
const _18e5fb3c = () => interopDefault(import('..\\pages\\orders\\order-list.vue' /* webpackChunkName: "pages/orders/order-list" */))
const _f09c2278 = () => interopDefault(import('..\\pages\\orders\\status-list.vue' /* webpackChunkName: "pages/orders/status-list" */))
const _4acebf33 = () => interopDefault(import('..\\pages\\project\\new-project.vue' /* webpackChunkName: "pages/project/new-project" */))
const _bb7398ca = () => interopDefault(import('..\\pages\\project\\project-list.vue' /* webpackChunkName: "pages/project/project-list" */))
const _b5adb360 = () => interopDefault(import('..\\pages\\role\\newrole.vue' /* webpackChunkName: "pages/role/newrole" */))
const _3dbb2e01 = () => interopDefault(import('..\\pages\\role\\role_list.vue' /* webpackChunkName: "pages/role/role_list" */))
const _cbe7ea1e = () => interopDefault(import('..\\pages\\seller\\allseller.vue' /* webpackChunkName: "pages/seller/allseller" */))
const _a7369694 = () => interopDefault(import('..\\pages\\setting\\add-salary.vue' /* webpackChunkName: "pages/setting/add-salary" */))
const _93789680 = () => interopDefault(import('..\\pages\\setting\\ads-management.vue' /* webpackChunkName: "pages/setting/ads-management" */))
const _2714304e = () => interopDefault(import('..\\pages\\setting\\annual-pay-add.vue' /* webpackChunkName: "pages/setting/annual-pay-add" */))
const _57f05941 = () => interopDefault(import('..\\pages\\setting\\annual-pay-list.vue' /* webpackChunkName: "pages/setting/annual-pay-list" */))
const _21165657 = () => interopDefault(import('..\\pages\\setting\\bank-master-add.vue' /* webpackChunkName: "pages/setting/bank-master-add" */))
const _c39a1750 = () => interopDefault(import('..\\pages\\setting\\bank-master-list.vue' /* webpackChunkName: "pages/setting/bank-master-list" */))
const _6c06bc13 = () => interopDefault(import('..\\pages\\setting\\bank-short-code-add.vue' /* webpackChunkName: "pages/setting/bank-short-code-add" */))
const _9d6173c8 = () => interopDefault(import('..\\pages\\setting\\bank-short-code-list.vue' /* webpackChunkName: "pages/setting/bank-short-code-list" */))
const _19bf4584 = () => interopDefault(import('..\\pages\\setting\\dashboard.vue' /* webpackChunkName: "pages/setting/dashboard" */))
const _0ca1ce3d = () => interopDefault(import('..\\pages\\setting\\employee-type-add.vue' /* webpackChunkName: "pages/setting/employee-type-add" */))
const _24167932 = () => interopDefault(import('..\\pages\\setting\\employee-type-list.vue' /* webpackChunkName: "pages/setting/employee-type-list" */))
const _b9604144 = () => interopDefault(import('..\\pages\\setting\\pay-group-add.vue' /* webpackChunkName: "pages/setting/pay-group-add" */))
const _632a8c31 = () => interopDefault(import('..\\pages\\setting\\pay-group-list.vue' /* webpackChunkName: "pages/setting/pay-group-list" */))
const _70389235 = () => interopDefault(import('..\\pages\\setting\\payment-type-add.vue' /* webpackChunkName: "pages/setting/payment-type-add" */))
const _3358343a = () => interopDefault(import('..\\pages\\setting\\payment-type-list.vue' /* webpackChunkName: "pages/setting/payment-type-list" */))
const _20803a57 = () => interopDefault(import('..\\pages\\setting\\payroll-payitem-add.vue' /* webpackChunkName: "pages/setting/payroll-payitem-add" */))
const _e7f4df50 = () => interopDefault(import('..\\pages\\setting\\payroll-payitem-list.vue' /* webpackChunkName: "pages/setting/payroll-payitem-list" */))
const _0d28459e = () => interopDefault(import('..\\pages\\setting\\salary-list.vue' /* webpackChunkName: "pages/setting/salary-list" */))
const _91153550 = () => interopDefault(import('..\\pages\\setting\\tax-master-add.vue' /* webpackChunkName: "pages/setting/tax-master-add" */))
const _58947512 = () => interopDefault(import('..\\pages\\setting\\tax-master-list.vue' /* webpackChunkName: "pages/setting/tax-master-list" */))
const _ee02aaa4 = () => interopDefault(import('..\\pages\\setting\\wedges-pay-add.vue' /* webpackChunkName: "pages/setting/wedges-pay-add" */))
const _33552ae1 = () => interopDefault(import('..\\pages\\setting\\wedges-pay-list.vue' /* webpackChunkName: "pages/setting/wedges-pay-list" */))
const _31c77bb6 = () => interopDefault(import('..\\pages\\task\\add-task.vue' /* webpackChunkName: "pages/task/add-task" */))
const _5a0a525f = () => interopDefault(import('..\\pages\\task\\dashboard.vue' /* webpackChunkName: "pages/task/dashboard" */))
const _41de929e = () => interopDefault(import('..\\pages\\task\\task-list.vue' /* webpackChunkName: "pages/task/task-list" */))
const _88acf14e = () => interopDefault(import('..\\pages\\user\\dashboard.vue' /* webpackChunkName: "pages/user/dashboard" */))
const _248daa10 = () => interopDefault(import('..\\pages\\user\\newUser.vue' /* webpackChunkName: "pages/user/newUser" */))
const _388e9257 = () => interopDefault(import('..\\pages\\user\\user_list.vue' /* webpackChunkName: "pages/user/user_list" */))
const _08f45b42 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _16c15af4 = () => interopDefault(import('..\\pages\\leave\\edit\\leaveallocation\\_id.vue' /* webpackChunkName: "pages/leave/edit/leaveallocation/_id" */))
const _998a04c4 = () => interopDefault(import('..\\pages\\leave\\edit\\leaverole\\_id.vue' /* webpackChunkName: "pages/leave/edit/leaverole/_id" */))
const _30c44b5a = () => interopDefault(import('..\\pages\\leave\\edit\\leavetype\\_id.vue' /* webpackChunkName: "pages/leave/edit/leavetype/_id" */))
const _0e387b03 = () => interopDefault(import('..\\pages\\coupons\\edit\\_id.vue' /* webpackChunkName: "pages/coupons/edit/_id" */))
const _95eff67c = () => interopDefault(import('..\\pages\\customer\\edit\\_id.vue' /* webpackChunkName: "pages/customer/edit/_id" */))
const _24853bb1 = () => interopDefault(import('..\\pages\\employee\\cir-edit\\_id.vue' /* webpackChunkName: "pages/employee/cir-edit/_id" */))
const _cf2ccaa6 = () => interopDefault(import('..\\pages\\employee\\emp-edit\\_id.vue' /* webpackChunkName: "pages/employee/emp-edit/_id" */))
const _536cc038 = () => interopDefault(import('..\\pages\\employee\\leaveRequest\\_id.vue' /* webpackChunkName: "pages/employee/leaveRequest/_id" */))
const _6b54a154 = () => interopDefault(import('..\\pages\\holiday\\editholidaylist\\_id.vue' /* webpackChunkName: "pages/holiday/editholidaylist/_id" */))
const _23ee95fe = () => interopDefault(import('..\\pages\\seller\\edit\\_id.vue' /* webpackChunkName: "pages/seller/edit/_id" */))
const _59ab983b = () => interopDefault(import('..\\pages\\task\\edit\\_id.vue' /* webpackChunkName: "pages/task/edit/_id" */))
const _ac9fe7de = () => interopDefault(import('..\\pages\\user\\changesPass\\_id.vue' /* webpackChunkName: "pages/user/changesPass/_id" */))
const _896a6596 = () => interopDefault(import('..\\pages\\user\\edit\\_id.vue' /* webpackChunkName: "pages/user/edit/_id" */))

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
    component: _54dd41ab,
    name: "changePassword"
  }, {
    path: "/company-profile",
    component: _3a40756e,
    name: "company-profile"
  }, {
    path: "/dashboard",
    component: _44f14004,
    children: [{
      path: "",
      component: _66fdc7fe,
      name: "dashboard"
    }, {
      path: "profile",
      component: _cfb85f56,
      name: "dashboard-profile"
    }]
  }, {
    path: "/login",
    component: _5ac8034e,
    name: "login"
  }, {
    path: "/profile",
    component: _d27abace,
    name: "profile"
  }, {
    path: "/register",
    component: _d516603a,
    name: "register"
  }, {
    path: "/blog/blog-cat",
    component: _2abdda0d,
    name: "blog-blog-cat"
  }, {
    path: "/blog/blog-list",
    component: _7d1eb577,
    name: "blog-blog-list"
  }, {
    path: "/blog/edit-blogCat",
    component: _b17b7a1a,
    name: "blog-edit-blogCat"
  }, {
    path: "/blog/new-blog",
    component: _1703bede,
    name: "blog-new-blog"
  }, {
    path: "/brands/brands-list",
    component: _93cbd3ba,
    name: "brands-brands-list"
  }, {
    path: "/brands/edit-brand",
    component: _7df58e10,
    name: "brands-edit-brand"
  }, {
    path: "/brands/new-brand",
    component: _72e96e84,
    name: "brands-new-brand"
  }, {
    path: "/coupons/all-coupons",
    component: _2e592234,
    name: "coupons-all-coupons"
  }, {
    path: "/coupons/new-coupons",
    component: _5de3689a,
    name: "coupons-new-coupons"
  }, {
    path: "/customer/customerList",
    component: _a92da78c,
    name: "customer-customerList"
  }, {
    path: "/customer/newCustomer",
    component: _7f452670,
    name: "customer-newCustomer"
  }, {
    path: "/ecommarce/attributes-list",
    component: _18315f60,
    name: "ecommarce-attributes-list"
  }, {
    path: "/ecommarce/category-add",
    component: _5dd72f06,
    name: "ecommarce-category-add"
  }, {
    path: "/ecommarce/category-edit",
    component: _08d558f5,
    name: "ecommarce-category-edit"
  }, {
    path: "/ecommarce/category-list",
    component: _0ce59cee,
    name: "ecommarce-category-list"
  }, {
    path: "/ecommarce/category-percentage-history",
    component: _026b1a8c,
    name: "ecommarce-category-percentage-history"
  }, {
    path: "/ecommarce/Old-product-add",
    component: _4c90e70e,
    name: "ecommarce-Old-product-add"
  }, {
    path: "/ecommarce/Old-product-edit",
    component: _0900a9e2,
    name: "ecommarce-Old-product-edit"
  }, {
    path: "/ecommarce/product-add",
    component: _2d51163f,
    name: "ecommarce-product-add"
  }, {
    path: "/ecommarce/product-edit",
    component: _289858dc,
    name: "ecommarce-product-edit"
  }, {
    path: "/ecommarce/product-list",
    component: _19503170,
    name: "ecommarce-product-list"
  }, {
    path: "/ecommarce/product-preview",
    component: _6d6762e6,
    name: "ecommarce-product-preview"
  }, {
    path: "/ecommarce/product-varient",
    component: _2e85d627,
    name: "ecommarce-product-varient"
  }, {
    path: "/employee/attendance-status",
    component: _b959b050,
    name: "employee-attendance-status"
  }, {
    path: "/employee/change-of-circumstances-add",
    component: _75f328d1,
    name: "employee-change-of-circumstances-add"
  }, {
    path: "/employee/change-of-circumstances-employee",
    component: _ad5329a4,
    name: "employee-change-of-circumstances-employee"
  }, {
    path: "/employee/change-of-circumstances-list",
    component: _361f1dc4,
    name: "employee-change-of-circumstances-list"
  }, {
    path: "/employee/dashboard",
    component: _7530de16,
    name: "employee-dashboard"
  }, {
    path: "/employee/department-add",
    component: _568e3e94,
    name: "employee-department-add"
  }, {
    path: "/employee/department-list",
    component: _17b813bb,
    name: "employee-department-list"
  }, {
    path: "/employee/designation-add",
    component: _4d67bb66,
    name: "employee-designation-add"
  }, {
    path: "/employee/designation-list",
    component: _2692b1bc,
    name: "employee-designation-list"
  }, {
    path: "/employee/emp-assign-to-user",
    component: _4c211192,
    name: "employee-emp-assign-to-user"
  }, {
    path: "/employee/employee-add",
    component: _6571a370,
    name: "employee-employee-add"
  }, {
    path: "/employee/employee-list",
    component: _357d6b42,
    name: "employee-employee-list"
  }, {
    path: "/employee/leave-approval-list",
    component: _528d4d58,
    name: "employee-leave-approval-list"
  }, {
    path: "/employee/leavel-rquest-add",
    component: _52d9c284,
    name: "employee-leavel-rquest-add"
  }, {
    path: "/employee/migrant-employee-list",
    component: _27e814d2,
    name: "employee-migrant-employee-list"
  }, {
    path: "/holiday/add-holidays",
    component: _0f613ee2,
    name: "holiday-add-holidays"
  }, {
    path: "/holiday/dashboard",
    component: _ad3e4b08,
    name: "holiday-dashboard"
  }, {
    path: "/holiday/holiday-add",
    component: _edd98cd8,
    name: "holiday-holiday-add"
  }, {
    path: "/holiday/holiday-list",
    component: _35d278bb,
    name: "holiday-holiday-list"
  }, {
    path: "/holiday/holiday-type-list",
    component: _fa685ff8,
    name: "holiday-holiday-type-list"
  }, {
    path: "/hrm/dashboard",
    component: _704442d1,
    name: "hrm-dashboard"
  }, {
    path: "/leave/add-allocation",
    component: _6db0589a,
    name: "leave-add-allocation"
  }, {
    path: "/leave/add-leaverole",
    component: _d71e07ac,
    name: "leave-add-leaverole"
  }, {
    path: "/leave/add-leavetype",
    component: _7c0508ee,
    name: "leave-add-leavetype"
  }, {
    path: "/leave/allocation-list",
    component: _873c7a58,
    name: "leave-allocation-list"
  }, {
    path: "/leave/dashboard",
    component: _f80e9786,
    name: "leave-dashboard"
  }, {
    path: "/leave/leave-balance-list",
    component: _52102e6c,
    name: "leave-leave-balance-list"
  }, {
    path: "/leave/leave-report",
    component: _17d5081e,
    name: "leave-leave-report"
  }, {
    path: "/leave/leave-request-dashboard",
    component: _196a6929,
    name: "leave-leave-request-dashboard"
  }, {
    path: "/leave/leave-request-list",
    component: _37872419,
    name: "leave-leave-request-list"
  }, {
    path: "/leave/leave-role-list",
    component: _961c2130,
    name: "leave-leave-role-list"
  }, {
    path: "/leave/leave-type-list",
    component: _327b3d24,
    name: "leave-leave-type-list"
  }, {
    path: "/manufacturer/edit-manufacturer",
    component: _0a9f53b3,
    name: "manufacturer-edit-manufacturer"
  }, {
    path: "/manufacturer/manufacturers-list",
    component: _4ed7f75a,
    name: "manufacturer-manufacturers-list"
  }, {
    path: "/manufacturer/new-manufacturer",
    component: _7c8ee5a2,
    name: "manufacturer-new-manufacturer"
  }, {
    path: "/mlm/report",
    component: _51fb41d2,
    name: "mlm-report"
  }, {
    path: "/models/edit-models",
    component: _7af265d3,
    name: "models-edit-models"
  }, {
    path: "/models/models-list",
    component: _255bee67,
    name: "models-models-list"
  }, {
    path: "/models/new-models",
    component: _7c817e61,
    name: "models-new-models"
  }, {
    path: "/orders/details",
    component: _e1788726,
    name: "orders-details"
  }, {
    path: "/orders/edit-orderstatus",
    component: _e7a3033c,
    name: "orders-edit-orderstatus"
  }, {
    path: "/orders/new-orderstatus",
    component: _5b50b284,
    name: "orders-new-orderstatus"
  }, {
    path: "/orders/order-list",
    component: _18e5fb3c,
    name: "orders-order-list"
  }, {
    path: "/orders/status-list",
    component: _f09c2278,
    name: "orders-status-list"
  }, {
    path: "/project/new-project",
    component: _4acebf33,
    name: "project-new-project"
  }, {
    path: "/project/project-list",
    component: _bb7398ca,
    name: "project-project-list"
  }, {
    path: "/role/newrole",
    component: _b5adb360,
    name: "role-newrole"
  }, {
    path: "/role/role_list",
    component: _3dbb2e01,
    name: "role-role_list"
  }, {
    path: "/seller/allseller",
    component: _cbe7ea1e,
    name: "seller-allseller"
  }, {
    path: "/setting/add-salary",
    component: _a7369694,
    name: "setting-add-salary"
  }, {
    path: "/setting/ads-management",
    component: _93789680,
    name: "setting-ads-management"
  }, {
    path: "/setting/annual-pay-add",
    component: _2714304e,
    name: "setting-annual-pay-add"
  }, {
    path: "/setting/annual-pay-list",
    component: _57f05941,
    name: "setting-annual-pay-list"
  }, {
    path: "/setting/bank-master-add",
    component: _21165657,
    name: "setting-bank-master-add"
  }, {
    path: "/setting/bank-master-list",
    component: _c39a1750,
    name: "setting-bank-master-list"
  }, {
    path: "/setting/bank-short-code-add",
    component: _6c06bc13,
    name: "setting-bank-short-code-add"
  }, {
    path: "/setting/bank-short-code-list",
    component: _9d6173c8,
    name: "setting-bank-short-code-list"
  }, {
    path: "/setting/dashboard",
    component: _19bf4584,
    name: "setting-dashboard"
  }, {
    path: "/setting/employee-type-add",
    component: _0ca1ce3d,
    name: "setting-employee-type-add"
  }, {
    path: "/setting/employee-type-list",
    component: _24167932,
    name: "setting-employee-type-list"
  }, {
    path: "/setting/pay-group-add",
    component: _b9604144,
    name: "setting-pay-group-add"
  }, {
    path: "/setting/pay-group-list",
    component: _632a8c31,
    name: "setting-pay-group-list"
  }, {
    path: "/setting/payment-type-add",
    component: _70389235,
    name: "setting-payment-type-add"
  }, {
    path: "/setting/payment-type-list",
    component: _3358343a,
    name: "setting-payment-type-list"
  }, {
    path: "/setting/payroll-payitem-add",
    component: _20803a57,
    name: "setting-payroll-payitem-add"
  }, {
    path: "/setting/payroll-payitem-list",
    component: _e7f4df50,
    name: "setting-payroll-payitem-list"
  }, {
    path: "/setting/salary-list",
    component: _0d28459e,
    name: "setting-salary-list"
  }, {
    path: "/setting/tax-master-add",
    component: _91153550,
    name: "setting-tax-master-add"
  }, {
    path: "/setting/tax-master-list",
    component: _58947512,
    name: "setting-tax-master-list"
  }, {
    path: "/setting/wedges-pay-add",
    component: _ee02aaa4,
    name: "setting-wedges-pay-add"
  }, {
    path: "/setting/wedges-pay-list",
    component: _33552ae1,
    name: "setting-wedges-pay-list"
  }, {
    path: "/task/add-task",
    component: _31c77bb6,
    name: "task-add-task"
  }, {
    path: "/task/dashboard",
    component: _5a0a525f,
    name: "task-dashboard"
  }, {
    path: "/task/task-list",
    component: _41de929e,
    name: "task-task-list"
  }, {
    path: "/user/dashboard",
    component: _88acf14e,
    name: "user-dashboard"
  }, {
    path: "/user/newUser",
    component: _248daa10,
    name: "user-newUser"
  }, {
    path: "/user/user_list",
    component: _388e9257,
    name: "user-user_list"
  }, {
    path: "/",
    component: _08f45b42,
    name: "index"
  }, {
    path: "/leave/edit/leaveallocation/:id?",
    component: _16c15af4,
    name: "leave-edit-leaveallocation-id"
  }, {
    path: "/leave/edit/leaverole/:id?",
    component: _998a04c4,
    name: "leave-edit-leaverole-id"
  }, {
    path: "/leave/edit/leavetype/:id?",
    component: _30c44b5a,
    name: "leave-edit-leavetype-id"
  }, {
    path: "/coupons/edit/:id?",
    component: _0e387b03,
    name: "coupons-edit-id"
  }, {
    path: "/customer/edit/:id?",
    component: _95eff67c,
    name: "customer-edit-id"
  }, {
    path: "/employee/cir-edit/:id?",
    component: _24853bb1,
    name: "employee-cir-edit-id"
  }, {
    path: "/employee/emp-edit/:id?",
    component: _cf2ccaa6,
    name: "employee-emp-edit-id"
  }, {
    path: "/employee/leaveRequest/:id?",
    component: _536cc038,
    name: "employee-leaveRequest-id"
  }, {
    path: "/holiday/editholidaylist/:id?",
    component: _6b54a154,
    name: "holiday-editholidaylist-id"
  }, {
    path: "/seller/edit/:id?",
    component: _23ee95fe,
    name: "seller-edit-id"
  }, {
    path: "/task/edit/:id?",
    component: _59ab983b,
    name: "task-edit-id"
  }, {
    path: "/user/changesPass/:id?",
    component: _ac9fe7de,
    name: "user-changesPass-id"
  }, {
    path: "/user/edit/:id?",
    component: _896a6596,
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
