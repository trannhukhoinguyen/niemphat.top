export default defineNuxtRouteMiddleware((to, from) => {
  let path = '/kinh-thu-lang-nghiem/chu-lang-nghiem';

  // TODO: check access_token from local storage
  if (localStorage.getItem('apollo:crm.token') !== null) {
    path = '/home';
  }

  if (typeof document !== 'undefined' && !document.startViewTransition)
    return

  // Disable built-in Vue transitions
  // to.meta.pageTransition = false
  to.meta.layoutTransition = false

  return navigateTo(path);
});
