import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d33d634 = () => interopDefault(import('..\\pages\\allbrands.vue' /* webpackChunkName: "pages/allbrands" */))
const _5f9cdd90 = () => interopDefault(import('..\\pages\\allshop.vue' /* webpackChunkName: "pages/allshop" */))
const _51f25b0e = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _6189746e = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _024da212 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _363001e2 = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _68fb2ea3 = () => interopDefault(import('..\\pages\\changepassword copy.vue' /* webpackChunkName: "pages/changepassword copy" */))
const _2f5bd691 = () => interopDefault(import('..\\pages\\charity.vue' /* webpackChunkName: "pages/charity" */))
const _bd2872c6 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _546ff8f4 = () => interopDefault(import('..\\pages\\coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _eade96c0 = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _1cd47f96 = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _0a69b4f4 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _6bc05c22 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _246399e7 = () => interopDefault(import('..\\pages\\login-old1.0.vue' /* webpackChunkName: "pages/login-old1.0" */))
const _d8ce95d4 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _9d44eb66 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _18cc3c27 = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _5f66b90d = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _118a9a0c = () => interopDefault(import('..\\pages\\order-confirm.vue' /* webpackChunkName: "pages/order-confirm" */))
const _11dee3ff = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _12f0e03b = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _50309993 = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _1119538f = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _2dae5f14 = () => interopDefault(import('..\\pages\\required.vue' /* webpackChunkName: "pages/required" */))
const _66ea6716 = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _ed7270b4 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _a832b3fc = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _360d6c6a = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _6ca422ba = () => interopDefault(import('..\\pages\\sellerLogin.vue' /* webpackChunkName: "pages/sellerLogin" */))
const _0a82eda4 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _58a5152f = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _7a9d07e2 = () => interopDefault(import('..\\pages\\today-deal.vue' /* webpackChunkName: "pages/today-deal" */))
const _311e6398 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _e0802204 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _a6286332 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _7f6e8d0e = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _3e04021e = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _268164ae = () => interopDefault(import('..\\pages\\brand-product\\brand-grid.vue' /* webpackChunkName: "pages/brand-product/brand-grid" */))
const _dbfd4978 = () => interopDefault(import('..\\pages\\category\\all-categorys.vue' /* webpackChunkName: "pages/category/all-categorys" */))
const _4f09cc20 = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _15bad348 = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _4463a690 = () => interopDefault(import('..\\pages\\chatbox\\messages.vue' /* webpackChunkName: "pages/chatbox/messages" */))
const _26574ce6 = () => interopDefault(import('..\\pages\\chatbox\\messages copy.vue' /* webpackChunkName: "pages/chatbox/messages copy" */))
const _4fae9d1c = () => interopDefault(import('..\\pages\\seller\\change-password.vue' /* webpackChunkName: "pages/seller/change-password" */))
const _611c0b1d = () => interopDefault(import('..\\pages\\seller\\order-details.vue' /* webpackChunkName: "pages/seller/order-details" */))
const _22a12e10 = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _0bb1162f = () => interopDefault(import('..\\pages\\seller\\seller-comission-history.vue' /* webpackChunkName: "pages/seller/seller-comission-history" */))
const _5977dd3c = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _c6f37248 = () => interopDefault(import('..\\pages\\seller\\seller-dashboard.vue' /* webpackChunkName: "pages/seller/seller-dashboard" */))
const _92730586 = () => interopDefault(import('..\\pages\\seller\\seller-leftsidebar.vue' /* webpackChunkName: "pages/seller/seller-leftsidebar" */))
const _3b0cd262 = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _1607b566 = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _1c8a2795 = () => interopDefault(import('..\\pages\\seller\\seller-payment-history.vue' /* webpackChunkName: "pages/seller/seller-payment-history" */))
const _0cf42f68 = () => interopDefault(import('..\\pages\\seller\\seller-products.vue' /* webpackChunkName: "pages/seller/seller-products" */))
const _7507b931 = () => interopDefault(import('..\\pages\\seller\\seller-products-post.vue' /* webpackChunkName: "pages/seller/seller-products-post" */))
const _211b7f71 = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _59f06c61 = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _ab3a97a6 = () => interopDefault(import('..\\pages\\seller\\seller-wishlist.vue' /* webpackChunkName: "pages/seller/seller-wishlist" */))
const _12432cc6 = () => interopDefault(import('..\\pages\\user\\account-statement.vue' /* webpackChunkName: "pages/user/account-statement" */))
const _11e4aac8 = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _34a0d64a = () => interopDefault(import('..\\pages\\user\\myPackages.vue' /* webpackChunkName: "pages/user/myPackages" */))
const _36db5e90 = () => interopDefault(import('..\\pages\\user\\mySalary.vue' /* webpackChunkName: "pages/user/mySalary" */))
const _18404738 = () => interopDefault(import('..\\pages\\user\\old_user-withdrawal copy.vue' /* webpackChunkName: "pages/user/old_user-withdrawal copy" */))
const _43494791 = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _76386bcc = () => interopDefault(import('..\\pages\\user\\track-order.vue' /* webpackChunkName: "pages/user/track-order" */))
const _56a2cc50 = () => interopDefault(import('..\\pages\\user\\user-bloglist.vue' /* webpackChunkName: "pages/user/user-bloglist" */))
const _37674772 = () => interopDefault(import('..\\pages\\user\\user-blogPost.vue' /* webpackChunkName: "pages/user/user-blogPost" */))
const _bfd0d714 = () => interopDefault(import('..\\pages\\user\\user-dashborad.vue' /* webpackChunkName: "pages/user/user-dashborad" */))
const _ec19a664 = () => interopDefault(import('..\\pages\\user\\user-mlm.vue' /* webpackChunkName: "pages/user/user-mlm" */))
const _733dd375 = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _6b0f9649 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _648675da = () => interopDefault(import('..\\pages\\user\\user-requireProduct.vue' /* webpackChunkName: "pages/user/user-requireProduct" */))
const _3e85f760 = () => interopDefault(import('..\\pages\\user\\user-security.vue' /* webpackChunkName: "pages/user/user-security" */))
const _78c615db = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _290aed76 = () => interopDefault(import('..\\pages\\user\\user-withdrawal.vue' /* webpackChunkName: "pages/user/user-withdrawal" */))
const _dcf95c4e = () => interopDefault(import('..\\pages\\seller\\chatbox\\messages.vue' /* webpackChunkName: "pages/seller/chatbox/messages" */))
const _7e4e1cbc = () => interopDefault(import('..\\pages\\seller\\products\\product-edit.vue' /* webpackChunkName: "pages/seller/products/product-edit" */))
const _3299cc60 = () => interopDefault(import('..\\pages\\seller\\products\\product-preview.vue' /* webpackChunkName: "pages/seller/products/product-preview" */))
const _188f80be = () => interopDefault(import('..\\pages\\seller\\products\\product-varient.vue' /* webpackChunkName: "pages/seller/products/product-varient" */))
const _bbce8dea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _88de45a6 = () => interopDefault(import('..\\pages\\user\\invite-user\\_id.vue' /* webpackChunkName: "pages/user/invite-user/_id" */))
const _1541cf43 = () => interopDefault(import('..\\pages\\business\\_slug.vue' /* webpackChunkName: "pages/business/_slug" */))
const _49118986 = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))
const _2a4ea9b7 = () => interopDefault(import('..\\pages\\resetpassword\\_slug.vue' /* webpackChunkName: "pages/resetpassword/_slug" */))

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
    component: _7d33d634,
    name: "allbrands"
  }, {
    path: "/allshop",
    component: _5f9cdd90,
    name: "allshop"
  }, {
    path: "/blog",
    component: _51f25b0e,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _6189746e,
    name: "blog-details"
  }, {
    path: "/cart",
    component: _024da212,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _363001e2,
    name: "changepassword"
  }, {
    path: "/changepassword%20copy",
    component: _68fb2ea3,
    name: "changepassword copy"
  }, {
    path: "/charity",
    component: _2f5bd691,
    name: "charity"
  }, {
    path: "/checkout",
    component: _bd2872c6,
    name: "checkout"
  }, {
    path: "/coupons",
    component: _546ff8f4,
    name: "coupons"
  }, {
    path: "/customer-review",
    component: _eade96c0,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _1cd47f96,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _0a69b4f4,
    name: "forget-password"
  }, {
    path: "/login",
    component: _6bc05c22,
    name: "login"
  }, {
    path: "/login-old1.0",
    component: _246399e7,
    name: "login-old1.0"
  }, {
    path: "/official-store",
    component: _d8ce95d4,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _9d44eb66,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _18cc3c27,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _5f66b90d,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/order-confirm",
    component: _118a9a0c,
    name: "order-confirm"
  }, {
    path: "/payment",
    component: _11dee3ff,
    name: "payment"
  }, {
    path: "/product-grid",
    component: _12f0e03b,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _50309993,
    name: "product-list"
  }, {
    path: "/refund",
    component: _1119538f,
    name: "refund"
  }, {
    path: "/required",
    component: _2dae5f14,
    name: "required"
  }, {
    path: "/return-and-replacement",
    component: _66ea6716,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _ed7270b4,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _a832b3fc,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _360d6c6a,
    name: "seller-form"
  }, {
    path: "/sellerLogin",
    component: _6ca422ba,
    name: "sellerLogin"
  }, {
    path: "/service",
    component: _0a82eda4,
    name: "service"
  }, {
    path: "/signup",
    component: _58a5152f,
    name: "signup"
  }, {
    path: "/today-deal",
    component: _7a9d07e2,
    name: "today-deal"
  }, {
    path: "/update-password",
    component: _311e6398,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _e0802204,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _a6286332,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _7f6e8d0e,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _3e04021e,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/brand-product/brand-grid",
    component: _268164ae,
    name: "brand-product-brand-grid"
  }, {
    path: "/category/all-categorys",
    component: _dbfd4978,
    name: "category-all-categorys"
  }, {
    path: "/category/category-grid",
    component: _4f09cc20,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _15bad348,
    name: "category-category-list"
  }, {
    path: "/chatbox/messages",
    component: _4463a690,
    name: "chatbox-messages"
  }, {
    path: "/chatbox/messages%20copy",
    component: _26574ce6,
    name: "chatbox-messages copy"
  }, {
    path: "/seller/change-password",
    component: _4fae9d1c,
    name: "seller-change-password"
  }, {
    path: "/seller/order-details",
    component: _611c0b1d,
    name: "seller-order-details"
  }, {
    path: "/seller/seller-account-setting",
    component: _22a12e10,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-comission-history",
    component: _0bb1162f,
    name: "seller-seller-comission-history"
  }, {
    path: "/seller/seller-customer-returns",
    component: _5977dd3c,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-dashboard",
    component: _c6f37248,
    name: "seller-seller-dashboard"
  }, {
    path: "/seller/seller-leftsidebar",
    component: _92730586,
    name: "seller-seller-leftsidebar"
  }, {
    path: "/seller/seller-message",
    component: _3b0cd262,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _1607b566,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-payment-history",
    component: _1c8a2795,
    name: "seller-seller-payment-history"
  }, {
    path: "/seller/seller-products",
    component: _0cf42f68,
    name: "seller-seller-products"
  }, {
    path: "/seller/seller-products-post",
    component: _7507b931,
    name: "seller-seller-products-post"
  }, {
    path: "/seller/seller-profile",
    component: _211b7f71,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _59f06c61,
    name: "seller-seller-wallet"
  }, {
    path: "/seller/seller-wishlist",
    component: _ab3a97a6,
    name: "seller-seller-wishlist"
  }, {
    path: "/user/account-statement",
    component: _12432cc6,
    name: "user-account-statement"
  }, {
    path: "/user/my-reviews",
    component: _11e4aac8,
    name: "user-my-reviews"
  }, {
    path: "/user/myPackages",
    component: _34a0d64a,
    name: "user-myPackages"
  }, {
    path: "/user/mySalary",
    component: _36db5e90,
    name: "user-mySalary"
  }, {
    path: "/user/old_user-withdrawal%20copy",
    component: _18404738,
    name: "user-old_user-withdrawal copy"
  }, {
    path: "/user/order-details",
    component: _43494791,
    name: "user-order-details"
  }, {
    path: "/user/track-order",
    component: _76386bcc,
    name: "user-track-order"
  }, {
    path: "/user/user-bloglist",
    component: _56a2cc50,
    name: "user-user-bloglist"
  }, {
    path: "/user/user-blogPost",
    component: _37674772,
    name: "user-user-blogPost"
  }, {
    path: "/user/user-dashborad",
    component: _bfd0d714,
    name: "user-user-dashborad"
  }, {
    path: "/user/user-mlm",
    component: _ec19a664,
    name: "user-user-mlm"
  }, {
    path: "/user/user-orders",
    component: _733dd375,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _6b0f9649,
    name: "user-user-profile"
  }, {
    path: "/user/user-requireProduct",
    component: _648675da,
    name: "user-user-requireProduct"
  }, {
    path: "/user/user-security",
    component: _3e85f760,
    name: "user-user-security"
  }, {
    path: "/user/user-whichlist",
    component: _78c615db,
    name: "user-user-whichlist"
  }, {
    path: "/user/user-withdrawal",
    component: _290aed76,
    name: "user-user-withdrawal"
  }, {
    path: "/seller/chatbox/messages",
    component: _dcf95c4e,
    name: "seller-chatbox-messages"
  }, {
    path: "/seller/products/product-edit",
    component: _7e4e1cbc,
    name: "seller-products-product-edit"
  }, {
    path: "/seller/products/product-preview",
    component: _3299cc60,
    name: "seller-products-product-preview"
  }, {
    path: "/seller/products/product-varient",
    component: _188f80be,
    name: "seller-products-product-varient"
  }, {
    path: "/",
    component: _bbce8dea,
    name: "index"
  }, {
    path: "/user/invite-user/:id?",
    component: _88de45a6,
    name: "user-invite-user-id"
  }, {
    path: "/business/:slug?",
    component: _1541cf43,
    name: "business-slug"
  }, {
    path: "/product-details/:slug?",
    component: _49118986,
    name: "product-details-slug"
  }, {
    path: "/resetpassword/:slug?",
    component: _2a4ea9b7,
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
