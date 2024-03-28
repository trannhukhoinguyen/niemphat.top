export default defineNuxtRouteMiddleware((to, from) => {
  let path = '/kinh-thu-lang-nghiem/chu-lang-nghiem';

  // TODO: check access_token from local storage
  if (localStorage.getItem('apollo:crm.token') !== null) {
    path = '/home';
  }

  console.log('zzzzzzzzzz');

  return navigateTo(path);
});
