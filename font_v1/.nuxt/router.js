import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d1433c8 = () => interopDefault(import('..\\pages\\allbrands.vue' /* webpackChunkName: "pages/allbrands" */))
const _86ad661c = () => interopDefault(import('..\\pages\\allshop.vue' /* webpackChunkName: "pages/allshop" */))
const _83d52352 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _5d25524c = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _34306a56 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _8b683f80 = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _9bfcc9f6 = () => interopDefault(import('..\\pages\\changepassword copy.vue' /* webpackChunkName: "pages/changepassword copy" */))
const _e72f741a = () => interopDefault(import('..\\pages\\charity.vue' /* webpackChunkName: "pages/charity" */))
const _3425790a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _32d472e8 = () => interopDefault(import('..\\pages\\coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _ec1ebbfc = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _3d43df17 = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _09c9a256 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _66853c04 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1fff77c5 = () => interopDefault(import('..\\pages\\login-old1.0.vue' /* webpackChunkName: "pages/login-old1.0" */))
const _17b49374 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _0b3812a2 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _61d2a889 = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _a687b722 = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _6f1a90dc = () => interopDefault(import('..\\pages\\order-confirm.vue' /* webpackChunkName: "pages/order-confirm" */))
const _6eeb5361 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _0e8cbe19 = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _4bcc7771 = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _6ef06fed = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _2daa4d54 = () => interopDefault(import('..\\pages\\required.vue' /* webpackChunkName: "pages/required" */))
const _69690774 = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _3060e488 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _30028460 = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _04c98fa6 = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _3b6045f6 = () => interopDefault(import('..\\pages\\sellerLogin.vue' /* webpackChunkName: "pages/sellerLogin" */))
const _57caf890 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _93079ce6 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _26718d26 = () => interopDefault(import('..\\pages\\today-deal.vue' /* webpackChunkName: "pages/today-deal" */))
const _307e50fa = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _6abf515c = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _6167a849 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _60324452 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _d50c4e5a = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _74297f90 = () => interopDefault(import('..\\pages\\brand-product\\brand-grid.vue' /* webpackChunkName: "pages/brand-product/brand-grid" */))
const _415272b4 = () => interopDefault(import('..\\pages\\category\\all-categorys.vue' /* webpackChunkName: "pages/category/all-categorys" */))
const _25d08552 = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _63103eaa = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _f62f6ccc = () => interopDefault(import('..\\pages\\chatbox\\messages.vue' /* webpackChunkName: "pages/chatbox/messages" */))
const _215a0c2a = () => interopDefault(import('..\\pages\\chatbox\\messages copy.vue' /* webpackChunkName: "pages/chatbox/messages copy" */))
const _257e1cd4 = () => interopDefault(import('..\\pages\\seller\\change-password.vue' /* webpackChunkName: "pages/seller/change-password" */))
const _fb8e3202 = () => interopDefault(import('..\\pages\\seller\\order-details.vue' /* webpackChunkName: "pages/seller/order-details" */))
const _6ca26954 = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _2461590d = () => interopDefault(import('..\\pages\\seller\\seller-comission-history.vue' /* webpackChunkName: "pages/seller/seller-comission-history" */))
const _433672c4 = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _0c43708c = () => interopDefault(import('..\\pages\\seller\\seller-dashboard.vue' /* webpackChunkName: "pages/seller/seller-dashboard" */))
const _1e21be9b = () => interopDefault(import('..\\pages\\seller\\seller-leftsidebar.vue' /* webpackChunkName: "pages/seller/seller-leftsidebar" */))
const _360f91a6 = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _1619012f = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _10ecec1a = () => interopDefault(import('..\\pages\\seller\\seller-payment-history.vue' /* webpackChunkName: "pages/seller/seller-payment-history" */))
const _46db53ae = () => interopDefault(import('..\\pages\\seller\\seller-products.vue' /* webpackChunkName: "pages/seller/seller-products" */))
const _72981b0f = () => interopDefault(import('..\\pages\\seller\\seller-products-post.vue' /* webpackChunkName: "pages/seller/seller-products-post" */))
const _239a1fcf = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _7b0d4843 = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _108fc0e2 = () => interopDefault(import('..\\pages\\seller\\seller-wishlist.vue' /* webpackChunkName: "pages/seller/seller-wishlist" */))
const _4433d4ff = () => interopDefault(import('..\\pages\\user\\account-statement.vue' /* webpackChunkName: "pages/user/account-statement" */))
const _38a92d0c = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _5b65588e = () => interopDefault(import('..\\pages\\user\\myPackages.vue' /* webpackChunkName: "pages/user/myPackages" */))
const _68ae2f16 = () => interopDefault(import('..\\pages\\user\\mySalary.vue' /* webpackChunkName: "pages/user/mySalary" */))
const _1980acd4 = () => interopDefault(import('..\\pages\\user\\old_user-withdrawal copy.vue' /* webpackChunkName: "pages/user/old_user-withdrawal copy" */))
const _e760981a = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _6bfde6fc = () => interopDefault(import('..\\pages\\user\\track-order.vue' /* webpackChunkName: "pages/user/track-order" */))
const _300fbdcb = () => interopDefault(import('..\\pages\\user\\user-affiliate.vue' /* webpackChunkName: "pages/user/user-affiliate" */))
const _c0ad8e9c = () => interopDefault(import('..\\pages\\user\\user-bloglist.vue' /* webpackChunkName: "pages/user/user-bloglist" */))
const _ff249858 = () => interopDefault(import('..\\pages\\user\\user-blogPost.vue' /* webpackChunkName: "pages/user/user-blogPost" */))
const _77deb454 = () => interopDefault(import('..\\pages\\user\\user-dashborad.vue' /* webpackChunkName: "pages/user/user-dashborad" */))
const _1a57f057 = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _b18dd4b2 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _9ba2de88 = () => interopDefault(import('..\\pages\\user\\user-requireProduct.vue' /* webpackChunkName: "pages/user/user-requireProduct" */))
const _29c370b2 = () => interopDefault(import('..\\pages\\user\\user-security.vue' /* webpackChunkName: "pages/user/user-security" */))
const _508d35b9 = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _0c976527 = () => interopDefault(import('..\\pages\\user\\user-withdrawal.vue' /* webpackChunkName: "pages/user/user-withdrawal" */))
const _41a9268a = () => interopDefault(import('..\\pages\\seller\\chatbox\\messages.vue' /* webpackChunkName: "pages/seller/chatbox/messages" */))
const _c84f5800 = () => interopDefault(import('..\\pages\\seller\\products\\product-edit.vue' /* webpackChunkName: "pages/seller/products/product-edit" */))
const _2ff1e542 = () => interopDefault(import('..\\pages\\seller\\products\\product-preview.vue' /* webpackChunkName: "pages/seller/products/product-preview" */))
const _1ddf4efa = () => interopDefault(import('..\\pages\\seller\\products\\product-varient.vue' /* webpackChunkName: "pages/seller/products/product-varient" */))
const _c644ce26 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _83e104ea = () => interopDefault(import('..\\pages\\user\\invite-user\\_id.vue' /* webpackChunkName: "pages/user/invite-user/_id" */))
const _14a1bca5 = () => interopDefault(import('..\\pages\\business\\_slug.vue' /* webpackChunkName: "pages/business/_slug" */))
const _441448ca = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))
const _0215c995 = () => interopDefault(import('..\\pages\\resetpassword\\_slug.vue' /* webpackChunkName: "pages/resetpassword/_slug" */))

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
    component: _0d1433c8,
    name: "allbrands"
  }, {
    path: "/allshop",
    component: _86ad661c,
    name: "allshop"
  }, {
    path: "/blog",
    component: _83d52352,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _5d25524c,
    name: "blog-details"
  }, {
    path: "/cart",
    component: _34306a56,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _8b683f80,
    name: "changepassword"
  }, {
    path: "/changepassword%20copy",
    component: _9bfcc9f6,
    name: "changepassword copy"
  }, {
    path: "/charity",
    component: _e72f741a,
    name: "charity"
  }, {
    path: "/checkout",
    component: _3425790a,
    name: "checkout"
  }, {
    path: "/coupons",
    component: _32d472e8,
    name: "coupons"
  }, {
    path: "/customer-review",
    component: _ec1ebbfc,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _3d43df17,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _09c9a256,
    name: "forget-password"
  }, {
    path: "/login",
    component: _66853c04,
    name: "login"
  }, {
    path: "/login-old1.0",
    component: _1fff77c5,
    name: "login-old1.0"
  }, {
    path: "/official-store",
    component: _17b49374,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _0b3812a2,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _61d2a889,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _a687b722,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/order-confirm",
    component: _6f1a90dc,
    name: "order-confirm"
  }, {
    path: "/payment",
    component: _6eeb5361,
    name: "payment"
  }, {
    path: "/product-grid",
    component: _0e8cbe19,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _4bcc7771,
    name: "product-list"
  }, {
    path: "/refund",
    component: _6ef06fed,
    name: "refund"
  }, {
    path: "/required",
    component: _2daa4d54,
    name: "required"
  }, {
    path: "/return-and-replacement",
    component: _69690774,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _3060e488,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _30028460,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _04c98fa6,
    name: "seller-form"
  }, {
    path: "/sellerLogin",
    component: _3b6045f6,
    name: "sellerLogin"
  }, {
    path: "/service",
    component: _57caf890,
    name: "service"
  }, {
    path: "/signup",
    component: _93079ce6,
    name: "signup"
  }, {
    path: "/today-deal",
    component: _26718d26,
    name: "today-deal"
  }, {
    path: "/update-password",
    component: _307e50fa,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _6abf515c,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _6167a849,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _60324452,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _d50c4e5a,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/brand-product/brand-grid",
    component: _74297f90,
    name: "brand-product-brand-grid"
  }, {
    path: "/category/all-categorys",
    component: _415272b4,
    name: "category-all-categorys"
  }, {
    path: "/category/category-grid",
    component: _25d08552,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _63103eaa,
    name: "category-category-list"
  }, {
    path: "/chatbox/messages",
    component: _f62f6ccc,
    name: "chatbox-messages"
  }, {
    path: "/chatbox/messages%20copy",
    component: _215a0c2a,
    name: "chatbox-messages copy"
  }, {
    path: "/seller/change-password",
    component: _257e1cd4,
    name: "seller-change-password"
  }, {
    path: "/seller/order-details",
    component: _fb8e3202,
    name: "seller-order-details"
  }, {
    path: "/seller/seller-account-setting",
    component: _6ca26954,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-comission-history",
    component: _2461590d,
    name: "seller-seller-comission-history"
  }, {
    path: "/seller/seller-customer-returns",
    component: _433672c4,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-dashboard",
    component: _0c43708c,
    name: "seller-seller-dashboard"
  }, {
    path: "/seller/seller-leftsidebar",
    component: _1e21be9b,
    name: "seller-seller-leftsidebar"
  }, {
    path: "/seller/seller-message",
    component: _360f91a6,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _1619012f,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-payment-history",
    component: _10ecec1a,
    name: "seller-seller-payment-history"
  }, {
    path: "/seller/seller-products",
    component: _46db53ae,
    name: "seller-seller-products"
  }, {
    path: "/seller/seller-products-post",
    component: _72981b0f,
    name: "seller-seller-products-post"
  }, {
    path: "/seller/seller-profile",
    component: _239a1fcf,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _7b0d4843,
    name: "seller-seller-wallet"
  }, {
    path: "/seller/seller-wishlist",
    component: _108fc0e2,
    name: "seller-seller-wishlist"
  }, {
    path: "/user/account-statement",
    component: _4433d4ff,
    name: "user-account-statement"
  }, {
    path: "/user/my-reviews",
    component: _38a92d0c,
    name: "user-my-reviews"
  }, {
    path: "/user/myPackages",
    component: _5b65588e,
    name: "user-myPackages"
  }, {
    path: "/user/mySalary",
    component: _68ae2f16,
    name: "user-mySalary"
  }, {
    path: "/user/old_user-withdrawal%20copy",
    component: _1980acd4,
    name: "user-old_user-withdrawal copy"
  }, {
    path: "/user/order-details",
    component: _e760981a,
    name: "user-order-details"
  }, {
    path: "/user/track-order",
    component: _6bfde6fc,
    name: "user-track-order"
  }, {
    path: "/user/user-affiliate",
    component: _300fbdcb,
    name: "user-user-affiliate"
  }, {
    path: "/user/user-bloglist",
    component: _c0ad8e9c,
    name: "user-user-bloglist"
  }, {
    path: "/user/user-blogPost",
    component: _ff249858,
    name: "user-user-blogPost"
  }, {
    path: "/user/user-dashborad",
    component: _77deb454,
    name: "user-user-dashborad"
  }, {
    path: "/user/user-orders",
    component: _1a57f057,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _b18dd4b2,
    name: "user-user-profile"
  }, {
    path: "/user/user-requireProduct",
    component: _9ba2de88,
    name: "user-user-requireProduct"
  }, {
    path: "/user/user-security",
    component: _29c370b2,
    name: "user-user-security"
  }, {
    path: "/user/user-whichlist",
    component: _508d35b9,
    name: "user-user-whichlist"
  }, {
    path: "/user/user-withdrawal",
    component: _0c976527,
    name: "user-user-withdrawal"
  }, {
    path: "/seller/chatbox/messages",
    component: _41a9268a,
    name: "seller-chatbox-messages"
  }, {
    path: "/seller/products/product-edit",
    component: _c84f5800,
    name: "seller-products-product-edit"
  }, {
    path: "/seller/products/product-preview",
    component: _2ff1e542,
    name: "seller-products-product-preview"
  }, {
    path: "/seller/products/product-varient",
    component: _1ddf4efa,
    name: "seller-products-product-varient"
  }, {
    path: "/",
    component: _c644ce26,
    name: "index"
  }, {
    path: "/user/invite-user/:id?",
    component: _83e104ea,
    name: "user-invite-user-id"
  }, {
    path: "/business/:slug?",
    component: _14a1bca5,
    name: "business-slug"
  }, {
    path: "/product-details/:slug?",
    component: _441448ca,
    name: "product-details-slug"
  }, {
    path: "/resetpassword/:slug?",
    component: _0215c995,
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
