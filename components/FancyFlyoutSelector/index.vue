<template>
  <div class="fancy-flyout-selector-wrapper">
    <div id="app">
  
  <div class="selektor">
    
    <header class="selektor__header">
      <a
        href="#"
        class="selektor__toplevel"
        :class="{ 'is-active': ( expanded === true ) }"
        @click="toggleFlyout">
        {{selected}}
      </a>
    </header>
    
    <transition name="shift">
      <div class="selektor__inner" v-if="expanded">
        
        <a href="#" @click="closeFlyout" class="close">
          <div class="sr-only" aria-hidden="true">Close Menu</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
            <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/>
          </svg>
        </a>
        
        <ul class="selektor__options">
          <li v-for="(item, index) of items" :key="index">
            <router-link
              :to="{ name: item.label }"
              :ref="item.label"
              @click.native="setTopLevel">
              <span class="item__icon">{{item.icon}}</span>
              <span class="item__label">{{item.label}}</span>
            </router-link>
          </li>
        </ul>
        
      </div>
    </transition>
    
  </div>
  
  <transition
    name="fade"
    mode="out-in"
    @leave="leave"
    @enter="enter">
    <router-view/>
  </transition>
  
  <footer>
    <p>&copy; {{ new Date().getFullYear() }} Food &amp; Stuff</p>
  </footer>
  
</div>
  </div>
</template>

<script setup lang="ts">
// bullshit routes for demo

const Default = {
  template: `
      <div class="content">
        <h1>Hello There!</h1>
        <p>Please select a delicious item from our menu selector above!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
      </div>
  `
}

const Pizza = {
  template: `
      <div class="content">
        <h1>Pizza</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
      </div>
  `
}

const Tacos = {
  template: `
      <div class="content">
        <h1>Tacos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
  `
}

const Burger = {
  template: `
      <div class="content">
        <h1>Burger</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam ea quam placeat, consectetur assumenda vel. Commodi alias repellat deleniti totam quas quod dicta quasi quos ipsum, molestiae culpa veniam.</p>
      </div>
  `
}

const Burrito = {
  template: `
      <div class="content">
        <h1>Burrito</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <ul>
          <li>List Item about Burritos</li>
          <li>List Item about Burritos</li>
          <li>List Item about Burritos</li>
          <li>List Item about Burritos</li>
        </ul>
      </div>
  `
}

const Sushi = {
  template: `
      <div class="content">
        <h1>Sushi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo maxime, vel accusamus commodi est beatae voluptatibus eius ab corporis mollitia iure deserunt provident. Alias placeat veniam dolores laudantium nam.</p>
      </div>
  `
} 

// our actual app

const router = new VueRouter({
  routes: [
    { name: 'Home', path: '/', component: Default },
    { name: 'Pizza', path: '/pizza/', component: Pizza },
    { name: 'Tacos', path: '/tacos/', component: Tacos },
    { name: 'Burger', path: '/burger/', component: Burger },
    { name: 'Burrito', path: '/burrito/', component: Burrito },
    { name: 'Sushi', path: '/sushi/', component: Sushi }
  ]
})

const App = new Vue({
  el: '#app',
  router,
  data () {
    return {
      selected: '👉 Choose an option 👈',
      expanded: false,
      prevHeight: 0,
      items: [
        { label: 'Pizza', icon: '🍕', path: '/pizza/' },
        { label: 'Tacos', icon: '🌮', path: '/tacos/' },
        { label: 'Burger', icon: '🍔', path: '/burger/' },
        { label: 'Burrito', icon: '🌯', path: '/burrito/' },
        { label: 'Sushi', icon: '🍣', path: '/sushi/' }
      ]
    }
  },
  methods: {
    toggleFlyout () {
      this.expanded = !this.expanded
    },
    closeFlyout () {
      this.expanded = false
    },
    setTopLevel (ev) {
      const icon = ev.target.children[0].innerHTML
      const text = ev.target.children[1].innerHTML
      this.selected = `${icon} ${text}`
      this.toggleFlyout()
    },
    leave (el) {
      this.prevHeight = getComputedStyle(el).height
    },
    enter (el) {
      const { height } = getComputedStyle(el)
      el.style.height = this.prevHeight
      setTimeout(() => {
        el.style.height = height
      })
    }
  }
})
</script>

<style scoped lang="scss">
.fancy-flyout-selector-wrapper {
  @import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline|Roboto&display=swap');

$title-font: 'Kumar One Outline', cursive;
$body-font: 'Roboto', sans-serif;
$pink: #f54768;
$lime: #8bd76b;
$yellow: #eef46e;
$bp: 60em;

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  font-size: 1.8rem;
  font-family: $body-font;
  line-height: 1.6;
  color: #eee;
  
  background-color: #000;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="36" height="72" viewBox="0 0 36 72"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  
  animation-name: bg;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  
  @media (min-width: $bp) {
    font-size: 2.4rem;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: $title-font;
  font-weight: normal;
  color: $pink;
  margin: 0;
}

#app {
  max-width: 600px;
  width: 100%;
  margin: 4rem auto;
  background: #111;
  
  @media (min-width: $bp) {
    box-shadow: 1rem 1rem 0 0 #222;
  }
}

// Selektor

.selektor__header {
  text-align: center;
}

.selektor {
  position: relative;
  padding: 4rem 4rem 0 4rem;
  
  a {
    text-decoration: none;
  }
}

.selektor__toplevel {
  $i: 3rem;
  display: inline-block;
  border: .15rem solid $pink;
  border-radius: calc(#{$i} * 2);
  margin: 0 auto;
  padding: 1rem $i;
  color: $lime;
  box-shadow: 0 0 5rem 0 #000;
  text-transform: uppercase;
  letter-spacing: .15rem;
  transition: color .5s ease-in-out, border .5s ease-in-out;
  
  &:hover {
    color: #fff;
    border-color: #fff;
  }
}

.selektor__inner {
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 1;
  transform: translateY(5%) translateX(-50%);
  min-width: 32rem;
}

.selektor__options {
  overflow: hidden;
  display: block;
  background-color: #000;
  border: .15rem solid $pink;
  border-radius: 2rem;
  box-shadow: 0 0 5rem 1rem #000;
  list-style: none;
  padding: 0;
  margin: 0;
  
  a {
    overflow: hidden;
    display: flex;
    align-items: center;
    color: $pink;
    user-select: none;

    &:hover {
      
      .item__label {
        color: #fff;
        
        &:after {
          transform: scaleX(1);
        }
      }
      
      .item__icon {
        animation-name: rock;
        animation-duration: .5s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
      }
    }
    
    &.router-link-exact-active {
      
      .item__label {
        color: #000;
        
        &:after {
          background-color: $lime;
          transform: scaleX(1);
        }
      }
    }
  }
  
  li:not(:last-of-type) a {
    border-bottom: .15rem solid $pink;
  }
}

.item__icon, .item__label {
  display: block;
  padding: .85rem 2rem;
  pointer-events: none;
}

.item__icon {
  will-change: transform;
}

.item__label {
  flex: 1;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: .15rem;
  transition: color .5s ease-in-out;
  border-left: .15rem solid $pink;
  
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    background-color: $pink;
    transition: transform .5s cubic-bezier(.63,-0.55,.13,1.28);
    transform-origin: left center;
    transform: scaleX(0);
  }
}

.close {
  $i: 4rem;
  position: absolute;
  top: calc(#{$i} / -2);
  right: calc(#{$i} / -2);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $i;
  height: $i;
  border-radius: 100%;
  background-color: $pink;
  padding: .25rem;
  box-shadow: 0 0 5rem 1rem #000;
  
  svg {
    width: 50%;
    height: auto;
    will-change: transform;
  }
  
  &:hover {
    
    svg {
      animation-name: spin;
      animation-duration: .75s;
      animation-timing-function: ease-out;
      animation-iteration-count: 1;
    }
  }
}

// Content

.content {
  margin-top: 4rem;
  padding: 4rem;
  
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    transform-origin: center;
    transition: 
      transform .23s ease-in-out .25s,
      opacity .23s ease-in-out .25s;
    
    &:before, &:after {
      flex: 1;
      content: "";
      height: .25rem;
      background-color: #333;
      transition: transform .35s cubic-bezier(.5,.14,.19,1.2) .5s;
    }
    
    &:before {
      margin-right: 2rem;
      transform-origin: right center;
    }
    
    &:after {
      margin-left: 2rem;
      transform-origin: left center;
    }
  }
  
  > *:not(h1) {
    transition: 
      opacity .35s cubic-bezier(.6,.41,.38,1.06),
      transform .35s cubic-bezier(.6,.41,.38,1.06);
    
    @for $i from 1 through 10 {
      &:nth-of-type(#{$i}) {
        transition-delay: #{$i * 75}ms;
      }
    }
  }
}

footer {
  border-top: .25rem solid #333;
  margin-top: 4rem;
  padding: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  color: $pink;
  letter-spacing: .15rem;
  
  p {
    margin: 0;
  }
}

// Transitions

.shift-enter-active, 
.shift-leave-active {
  will-change: transform, opacity;
  transition: 
    transform .5s cubic-bezier(.63,-0.55,.13,1.28), 
    opacity .5s ease-in-out;
}

.shift-enter, 
.shift-leave-to {
  opacity: 0;
  transform: translateY(20%) translateX(-50%) scale(.95);
}

.fade-enter-active,
.fade-leave-active {
  overflow: hidden;
  will-change: opacity, height;
  transition: 
    opacity .8s ease, 
    height .8s ease;
} 

.fade-enter,
.fade-leave-to {
  opacity: 0;
  
  h1 {
    transform: translateY(4rem) scale(.8);
    opacity: 0;

    &:before, &:after {
      transform: scaleX(0);
    }
  }
  
  p {
    opacity: 0;
    transform: translateY(4rem);
  }
}

// Animation

@keyframes rock {
  0%, 50%   { transform: rotate(-10deg); }
  25%, 75%  { transform: rotate(20deg); }
  100%      { transform: rotate(0deg); }
}

@keyframes bg {
  to { background-position: -100vw; }
}

@keyframes spin {
  to { transform: rotate(2turn); }
}

// Utilities

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
}
</style>
