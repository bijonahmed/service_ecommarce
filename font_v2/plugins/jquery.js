import jQuery from 'jquery'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('$', jQuery)
})
