import { defineStore } from "pinia";

export const useGlobal = defineStore('global', () => {
  const something = useLocalStorage('global_something', {});
  function updateSomething(param) {
    something.value = param
  }

  return {
    something,
    updateSomething,
  }
})
