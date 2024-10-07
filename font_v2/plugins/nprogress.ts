// plugins/nprogress.ts
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Optional: Customize the progress bar appearance
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 })

export default defineNuxtPlugin((nuxtApp) => {
  // Start progress bar before page navigation
  nuxtApp.hook('page:start', () => {
    NProgress.start()
  })

  // Complete progress bar after page navigation
  nuxtApp.hook('page:finish', () => {
    NProgress.done()
  })

  // Stop progress bar in case of an error
  nuxtApp.hook('app:error', () => {
    NProgress.done()
  })
})
