// middleware/redirect.global.ts
export default defineNuxtRouteMiddleware((to) => {
  // Check if the route has matched any existing pages
  if (!to.matched.length) {
    // Redirect to home if no route is matched
    return navigateTo('/')
  }
})
