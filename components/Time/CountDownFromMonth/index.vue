<template>
  <div class="count-down-from-month-wrapper" />
</template>

<script setup lang="ts">
let units = ['months', 'days', 'hours', 'minutes', 'seconds'];

let divElements = units.map((key: any, val, arr) => {
  let content = key;
  key = document.createElement('div');
  key.className = `${content} unit`;
  key.innerHTML = `${content}`;
  document.body.appendChild(key);
  return key;
});

function countdown(divElements: any) {
  setInterval(() => {

    let timeNow = new Date();

    let monthsLeft = 6 - timeNow.getMonth();
    let daysLeft = 5 - timeNow.getDate() + 30;
    let hoursLeft;
    if(timeNow.getHours() <= 14){
      hoursLeft = 14 - timeNow.getHours();
    }else{
      hoursLeft = 14 - timeNow.getHours() + 24;
    }
    let minutesLeft = 59 + -timeNow.getMinutes();
    let secondsLeft = 59 - timeNow.getSeconds();
    divElements[0].dataset.content = monthsLeft;
    divElements[1].dataset.content = daysLeft;
    divElements[2].dataset.content = hoursLeft;
    divElements[3].dataset.content = minutesLeft;
    divElements[4].dataset.content = secondsLeft;
  }, 1000)
}

let timer = countdown(divElements);
clearInterval(timer);
</script>

<style scoped lang="scss">
.count-down-from-month-wrapper {
  @import url('https://fonts.googleapis.com/css?family=Space+Mono');

  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to left, #00d2ff , #3a7bd5);
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-family: 'Space Mono', monospace;
  }

  .unit {
    color: rgba(0, 0, 0, 0.75);
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.125rem;
    padding: 2rem;
    text-align: center;

    &:before {
      color: rgba(255, 255, 255, 0.5);
      font-size: 7.25rem;
      content: attr(data-content);
      display: block;
      text-align: center;
      padding-bottom: 1rem;
    }
  }
}
</style>
