// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'nprogress/nprogress.css', // Include NProgress CSS
  ],
  
  ssr: false, // Disable Server Side Rendering (if needed)
  
  router: {
    options: {
      hashMode: false, // Disable hash mode
      
    },
  },
  async asyncData({ $nuxt }) {
    $nuxt.$store.commit('SET_CACHE_HEADER', 'no-store');
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === "production" 
        ? "https://api.isumax.com/api/" 
        : "http://127.0.0.1:8000/api/",
    },
  },

  // Use the proper page-level `asyncData` in your pages, not in `nuxt.config.ts`
  
  pages: true, // Enable automatic page creation

  devtools: { enabled: false },

  experimental: {
    payloadExtraction: true, // Enable payload extraction
  },

  plugins: [
    '~/plugins/nprogress.ts', // Register NProgress plugin here
    '~/plugins/axios.js',
    '~/plugins/jquery.js',
  ],

  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt',
  ],

  pwa: {
    manifest: {
      name: "Service Management",
      short_name: "Service Management",
      description: "Service Management Web Apps",
      theme_color: "#32CD32",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      
      // Add your CSS links
      link: [
        { rel: "stylesheet", href: "/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/css/jquery-ui.min.css" },
        { rel: "stylesheet", href: "/css/ace-responsive-menu.css" },
        { rel: "stylesheet", href: "/css/menu.css" },
        { rel: "stylesheet", href: "/css/fontawesome.css" },
        { rel: "stylesheet", href: "/css/flaticon.css" },
        { rel: "stylesheet", href: "/css/bootstrap-select.min.css" },
        { rel: "stylesheet", href: "/css/animate.css" },
        { rel: "stylesheet", href: "/css/slider.css" },
        { rel: "stylesheet", href: "/css/style.css" },
        { rel: "stylesheet", href: "/css/ud-custom-spacing.css" },
        { rel: "stylesheet", href: "/css/dashbord_navitaion.css" },
        { rel: "stylesheet", href: "/css/responsive.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@9.1.0/swiper-bundle.min.css" },
      ],

      // Add JavaScript files
      script: [
        { src: "/js/jquery-3.6.4.min.js", type: "text/javascript" },
        { src: "/js/jquery-migrate-3.0.0.min.js", type: "text/javascript" },
        { src: "/js/popper.min.js", type: "text/javascript" },
        { src: "/js/bootstrap.min.js", type: "text/javascript" },
        { src: "/js/bootstrap-select.min.js", type: "text/javascript" },
        { src: "/js/jquery.mmenu.all.js", type: "text/javascript" },
        { src: "/js/ace-responsive-menu.js", type: "text/javascript" },
        { src: "/js/jquery-scrolltofixed-min.js", type: "text/javascript" },
        { src: "/js/wow.min.js", type: "text/javascript" },
        { src: "/js/owl.js", type: "text/javascript" },
        { src: "/js/jquery.counterup.js", type: "text/javascript" },
        { src: "/js/pricing-table.js", type: "text/javascript" },
        { src: "/js/script.js", type: "text/javascript" },  
        { src: "/js/dashboard-script.js", type: "text/javascript" },
        { src: "https://cdn.jsdelivr.net/npm/swiper@9.1.0/swiper-bundle.min.js", defer: true },
      ],
    },
  },
});
