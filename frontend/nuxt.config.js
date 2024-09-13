import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Welcome to Isumax",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image", href: "/images/logo.png" },

      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
      },
      { rel: "stylesheet", href: "/css/styles.css" },
      { rel: "stylesheet", href: "/css/storebtn.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/css/customslider.css" },
      { rel: 'stylesheet', href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' },
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.7.0.js" },
      { src: "https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js" },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
      },
      { src: "https://cdn.jsdelivr.net/npm/sweetalert2@11" },
      { src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/vue-chat-scroll/dist/vue-chat-scroll.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" },
      {
        src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
      },
      { src: "/js/star-rating.js" },
      { src: "/js/search_modal.js" },
      { src: "/js/login_popup.js" },
      { src: "/js/addActiveClass.js" },
      { src: "/js/owl.carousel.min.js" },
      { src: "/js/owl_carousel_plugin.js" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   'owl.carousel/dist/assets/owl.carousel.min.css',
  //   'owl.carousel/dist/assets/owl.theme.default.min.css'
  // ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/event-bus.js",
    { src: "~plugins/jquery.js", ssr: false }, // Import jQuery
    { src: "~plugins/vue-owl-carousel.js", ssr: false },
    { src: '~/plugins/scroll-top.js', mode: 'client' },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    // Options
    strategies: {
      local: {
        token: {
          property: "access_token",
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/me", method: "post" },
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/",
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: "http://127.0.0.1:8000/api",
    // baseURL: "https://api.isumax.com/api/",
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.isumax.com/api/' : 'http://127.0.0.1:8000/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["defu"],
    vendor: ["jquery"],
    build: {
      extend(config, { isDev, isClient }) {
        if (isDev && isClient) {
          // Add FriendlyErrorsWebpackPlugin
          const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
          config.plugins.push(new FriendlyErrorsWebpackPlugin());
        }
      },
    },
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }

};
