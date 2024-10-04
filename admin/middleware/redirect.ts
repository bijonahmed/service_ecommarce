export default defineNuxtRouteMiddleware((to, from) => {
    if (to.fullPath !== '/admin/dashboard') {
      return navigateTo('/admin/dashboard')
    }
  })
  