export default defineNuxtRouteMiddleware(() => {
  return navigateTo('http://jinjiumc.com', { external: true })
})