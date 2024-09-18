import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9228d008 = () => interopDefault(import('..\\pages\\allbrands.vue' /* webpackChunkName: "pages/allbrands" */))
const _7db42e26 = () => interopDefault(import('..\\pages\\allshop.vue' /* webpackChunkName: "pages/allshop" */))
const _f5d58cba = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _0509dcd0 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _a630d3be = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _c7a206e8 = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _613f638e = () => interopDefault(import('..\\pages\\changepassword copy.vue' /* webpackChunkName: "pages/changepassword copy" */))
const _4d732727 = () => interopDefault(import('..\\pages\\charity.vue' /* webpackChunkName: "pages/charity" */))
const _463e88c7 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _184157c8 = () => interopDefault(import('..\\pages\\coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _371de194 = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _31c9796a = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _644a0f8a = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _7f7eda38 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7f5591de = () => interopDefault(import('..\\pages\\login-old1.0.vue' /* webpackChunkName: "pages/login-old1.0" */))
const _0cd0a080 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _17c2a9e3 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _7f315bbd = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _6f33c4ba = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _4d0689e0 = () => interopDefault(import('..\\pages\\order-confirm.vue' /* webpackChunkName: "pages/order-confirm" */))
const _2ff63495 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _a23b0536 = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _27bb9286 = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _752a9839 = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _e408dac0 = () => interopDefault(import('..\\pages\\required.vue' /* webpackChunkName: "pages/required" */))
const _38c117c0 = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _270a5688 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _11e5a0ac = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _e1ab413e = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _73df0439 = () => interopDefault(import('..\\pages\\sellerLogin.vue' /* webpackChunkName: "pages/sellerLogin" */))
const _18d5d9c4 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _86934c4e = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _7ddc5bb9 = () => interopDefault(import('..\\pages\\today-deal.vue' /* webpackChunkName: "pages/today-deal" */))
const _ea0283a4 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _a54f54b0 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _08b6ea7d = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _7f8cd623 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _3cc91b07 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _4d39fbc4 = () => interopDefault(import('..\\pages\\brand-product\\brand-grid.vue' /* webpackChunkName: "pages/brand-product/brand-grid" */))
const _09fe804c = () => interopDefault(import('..\\pages\\category\\all-categorys.vue' /* webpackChunkName: "pages/category/all-categorys" */))
const _417a7e86 = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _7eba37de = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _410239ce = () => interopDefault(import('..\\pages\\chatbox\\messages.vue' /* webpackChunkName: "pages/chatbox/messages" */))
const _82a9eb92 = () => interopDefault(import('..\\pages\\chatbox\\messages copy.vue' /* webpackChunkName: "pages/chatbox/messages copy" */))
const _41281608 = () => interopDefault(import('..\\pages\\seller\\change-password.vue' /* webpackChunkName: "pages/seller/change-password" */))
const _7a90c59a = () => interopDefault(import('..\\pages\\seller\\order-details.vue' /* webpackChunkName: "pages/seller/order-details" */))
const _0c47cfa2 = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _24ca7a59 = () => interopDefault(import('..\\pages\\seller\\seller-comission-history.vue' /* webpackChunkName: "pages/seller/seller-comission-history" */))
const _2227685c = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _53737506 = () => interopDefault(import('..\\pages\\seller\\seller-dashboard.vue' /* webpackChunkName: "pages/seller/seller-dashboard" */))
const _6720c8e7 = () => interopDefault(import('..\\pages\\seller\\seller-leftsidebar.vue' /* webpackChunkName: "pages/seller/seller-leftsidebar" */))
const _975f710e = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _5697b763 = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _3a228e3f = () => interopDefault(import('..\\pages\\seller\\seller-payment-history.vue' /* webpackChunkName: "pages/seller/seller-payment-history" */))
const _62854ce2 = () => interopDefault(import('..\\pages\\seller\\seller-products.vue' /* webpackChunkName: "pages/seller/seller-products" */))
const _77fdc25b = () => interopDefault(import('..\\pages\\seller\\seller-products-post.vue' /* webpackChunkName: "pages/seller/seller-products-post" */))
const _1a1b9fca = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _88e80312 = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _136218c3 = () => interopDefault(import('..\\pages\\seller\\seller-wishlist.vue' /* webpackChunkName: "pages/seller/seller-wishlist" */))
const _5fddce33 = () => interopDefault(import('..\\pages\\user\\account-statement.vue' /* webpackChunkName: "pages/user/account-statement" */))
const _4d8eba74 = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _704ae5f6 = () => interopDefault(import('..\\pages\\user\\myPackages.vue' /* webpackChunkName: "pages/user/myPackages" */))
const _4a914b62 = () => interopDefault(import('..\\pages\\user\\mySalary.vue' /* webpackChunkName: "pages/user/mySalary" */))
const _35d8ade2 = () => interopDefault(import('..\\pages\\user\\old_user-withdrawal copy.vue' /* webpackChunkName: "pages/user/old_user-withdrawal copy" */))
const _aca331b2 = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _2817d730 = () => interopDefault(import('..\\pages\\user\\track-order.vue' /* webpackChunkName: "pages/user/track-order" */))
const _82f11dd2 = () => interopDefault(import('..\\pages\\user\\user-affiliate.vue' /* webpackChunkName: "pages/user/user-affiliate" */))
const _85f02834 = () => interopDefault(import('..\\pages\\user\\user-bloglist.vue' /* webpackChunkName: "pages/user/user-bloglist" */))
const _c46731f0 = () => interopDefault(import('..\\pages\\user\\user-blogPost.vue' /* webpackChunkName: "pages/user/user-blogPost" */))
const _065667a0 = () => interopDefault(import('..\\pages\\user\\user-dashborad.vue' /* webpackChunkName: "pages/user/user-dashborad" */))
const _531c3eea = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _6e5d2bf3 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _e981e620 = () => interopDefault(import('..\\pages\\user\\user-requireProduct.vue' /* webpackChunkName: "pages/user/user-requireProduct" */))
const _472223e6 = () => interopDefault(import('..\\pages\\user\\user-security.vue' /* webpackChunkName: "pages/user/user-security" */))
const _41f62df6 = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _4d161b5b = () => interopDefault(import('..\\pages\\user\\user-withdrawal.vue' /* webpackChunkName: "pages/user/user-withdrawal" */))
const _8f882e22 = () => interopDefault(import('..\\pages\\seller\\chatbox\\messages.vue' /* webpackChunkName: "pages/seller/chatbox/messages" */))
const _431d4f68 = () => interopDefault(import('..\\pages\\seller\\products\\product-edit.vue' /* webpackChunkName: "pages/seller/products/product-edit" */))
const _3caced76 = () => interopDefault(import('..\\pages\\seller\\products\\product-preview.vue' /* webpackChunkName: "pages/seller/products/product-preview" */))
const _04693e92 = () => interopDefault(import('..\\pages\\seller\\products\\product-varient.vue' /* webpackChunkName: "pages/seller/products/product-varient" */))
const _945191be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _e530e452 = () => interopDefault(import('..\\pages\\user\\invite-user\\_id.vue' /* webpackChunkName: "pages/user/invite-user/_id" */))
const _6f2229d9 = () => interopDefault(import('..\\pages\\business\\_slug.vue' /* webpackChunkName: "pages/business/_slug" */))
const _a5642832 = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))
const _dee5063e = () => interopDefault(import('..\\pages\\resetpassword\\_slug.vue' /* webpackChunkName: "pages/resetpassword/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/allbrands",
    component: _9228d008,
    name: "allbrands"
  }, {
    path: "/allshop",
    component: _7db42e26,
    name: "allshop"
  }, {
    path: "/blog",
    component: _f5d58cba,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _0509dcd0,
    name: "blog-details"
  }, {
    path: "/cart",
    component: _a630d3be,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _c7a206e8,
    name: "changepassword"
  }, {
    path: "/changepassword%20copy",
    component: _613f638e,
    name: "changepassword copy"
  }, {
    path: "/charity",
    component: _4d732727,
    name: "charity"
  }, {
    path: "/checkout",
    component: _463e88c7,
    name: "checkout"
  }, {
    path: "/coupons",
    component: _184157c8,
    name: "coupons"
  }, {
    path: "/customer-review",
    component: _371de194,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _31c9796a,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _644a0f8a,
    name: "forget-password"
  }, {
    path: "/login",
    component: _7f7eda38,
    name: "login"
  }, {
    path: "/login-old1.0",
    component: _7f5591de,
    name: "login-old1.0"
  }, {
    path: "/official-store",
    component: _0cd0a080,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _17c2a9e3,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _7f315bbd,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _6f33c4ba,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/order-confirm",
    component: _4d0689e0,
    name: "order-confirm"
  }, {
    path: "/payment",
    component: _2ff63495,
    name: "payment"
  }, {
    path: "/product-grid",
    component: _a23b0536,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _27bb9286,
    name: "product-list"
  }, {
    path: "/refund",
    component: _752a9839,
    name: "refund"
  }, {
    path: "/required",
    component: _e408dac0,
    name: "required"
  }, {
    path: "/return-and-replacement",
    component: _38c117c0,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _270a5688,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _11e5a0ac,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _e1ab413e,
    name: "seller-form"
  }, {
    path: "/sellerLogin",
    component: _73df0439,
    name: "sellerLogin"
  }, {
    path: "/service",
    component: _18d5d9c4,
    name: "service"
  }, {
    path: "/signup",
    component: _86934c4e,
    name: "signup"
  }, {
    path: "/today-deal",
    component: _7ddc5bb9,
    name: "today-deal"
  }, {
    path: "/update-password",
    component: _ea0283a4,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _a54f54b0,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _08b6ea7d,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _7f8cd623,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _3cc91b07,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/brand-product/brand-grid",
    component: _4d39fbc4,
    name: "brand-product-brand-grid"
  }, {
    path: "/category/all-categorys",
    component: _09fe804c,
    name: "category-all-categorys"
  }, {
    path: "/category/category-grid",
    component: _417a7e86,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _7eba37de,
    name: "category-category-list"
  }, {
    path: "/chatbox/messages",
    component: _410239ce,
    name: "chatbox-messages"
  }, {
    path: "/chatbox/messages%20copy",
    component: _82a9eb92,
    name: "chatbox-messages copy"
  }, {
    path: "/seller/change-password",
    component: _41281608,
    name: "seller-change-password"
  }, {
    path: "/seller/order-details",
    component: _7a90c59a,
    name: "seller-order-details"
  }, {
    path: "/seller/seller-account-setting",
    component: _0c47cfa2,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-comission-history",
    component: _24ca7a59,
    name: "seller-seller-comission-history"
  }, {
    path: "/seller/seller-customer-returns",
    component: _2227685c,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-dashboard",
    component: _53737506,
    name: "seller-seller-dashboard"
  }, {
    path: "/seller/seller-leftsidebar",
    component: _6720c8e7,
    name: "seller-seller-leftsidebar"
  }, {
    path: "/seller/seller-message",
    component: _975f710e,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _5697b763,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-payment-history",
    component: _3a228e3f,
    name: "seller-seller-payment-history"
  }, {
    path: "/seller/seller-products",
    component: _62854ce2,
    name: "seller-seller-products"
  }, {
    path: "/seller/seller-products-post",
    component: _77fdc25b,
    name: "seller-seller-products-post"
  }, {
    path: "/seller/seller-profile",
    component: _1a1b9fca,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _88e80312,
    name: "seller-seller-wallet"
  }, {
    path: "/seller/seller-wishlist",
    component: _136218c3,
    name: "seller-seller-wishlist"
  }, {
    path: "/user/account-statement",
    component: _5fddce33,
    name: "user-account-statement"
  }, {
    path: "/user/my-reviews",
    component: _4d8eba74,
    name: "user-my-reviews"
  }, {
    path: "/user/myPackages",
    component: _704ae5f6,
    name: "user-myPackages"
  }, {
    path: "/user/mySalary",
    component: _4a914b62,
    name: "user-mySalary"
  }, {
    path: "/user/old_user-withdrawal%20copy",
    component: _35d8ade2,
    name: "user-old_user-withdrawal copy"
  }, {
    path: "/user/order-details",
    component: _aca331b2,
    name: "user-order-details"
  }, {
    path: "/user/track-order",
    component: _2817d730,
    name: "user-track-order"
  }, {
    path: "/user/user-affiliate",
    component: _82f11dd2,
    name: "user-user-affiliate"
  }, {
    path: "/user/user-bloglist",
    component: _85f02834,
    name: "user-user-bloglist"
  }, {
    path: "/user/user-blogPost",
    component: _c46731f0,
    name: "user-user-blogPost"
  }, {
    path: "/user/user-dashborad",
    component: _065667a0,
    name: "user-user-dashborad"
  }, {
    path: "/user/user-orders",
    component: _531c3eea,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _6e5d2bf3,
    name: "user-user-profile"
  }, {
    path: "/user/user-requireProduct",
    component: _e981e620,
    name: "user-user-requireProduct"
  }, {
    path: "/user/user-security",
    component: _472223e6,
    name: "user-user-security"
  }, {
    path: "/user/user-whichlist",
    component: _41f62df6,
    name: "user-user-whichlist"
  }, {
    path: "/user/user-withdrawal",
    component: _4d161b5b,
    name: "user-user-withdrawal"
  }, {
    path: "/seller/chatbox/messages",
    component: _8f882e22,
    name: "seller-chatbox-messages"
  }, {
    path: "/seller/products/product-edit",
    component: _431d4f68,
    name: "seller-products-product-edit"
  }, {
    path: "/seller/products/product-preview",
    component: _3caced76,
    name: "seller-products-product-preview"
  }, {
    path: "/seller/products/product-varient",
    component: _04693e92,
    name: "seller-products-product-varient"
  }, {
    path: "/",
    component: _945191be,
    name: "index"
  }, {
    path: "/user/invite-user/:id?",
    component: _e530e452,
    name: "user-invite-user-id"
  }, {
    path: "/business/:slug?",
    component: _6f2229d9,
    name: "business-slug"
  }, {
    path: "/product-details/:slug?",
    component: _a5642832,
    name: "product-details-slug"
  }, {
    path: "/resetpassword/:slug?",
    component: _dee5063e,
    name: "resetpassword-slug"
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
