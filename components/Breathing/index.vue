<template>
  <div class="breathing-wrapper">
    <h1 data-splitting>Breathing</h1>
  </div>
</template>

<script setup lang="ts">
Splitting()
</script>

<style scoped lang="scss">
.breathing-wrapper {
/* 
	Weight axis: 100 – 700
	Width axis: 85 – 100
*/
@font-face {
	font-family: "IBM Plex Sans Roman";
	src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/IBMPlexSansVar-Roman.ttf");
}

* {
	box-sizing: border-box;
}

body {
	font-family: "IBM Plex Sans Roman", Times;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	min-height: 100vh;
	background-color: #DCEDC8;
}

h1 {
	font-weight: 100;
	font-size: 10vw;
	line-height: 10vw;
	font-variation-settings: 'wght' 100, 'wdth' 85;
}

h1 .char {
	--delay: calc((var(--char-index) + 1) * 400ms);
	animation: breathe 4000ms infinite both;
	animation-delay: var(--delay);
}

h1:hover span {
	animation-play-state: paused;
}

@keyframes breathe {
	0% {
		font-variation-settings: 'wght' 100, 'wdth' 85;
		font-size: 10vw;
	}
	60% {
		font-variation-settings: 'wght' 700, 'wdth' 100;
		font-size: 11vw;
	}
	
	100% {
		font-variation-settings: 'wght' 100, 'wdth' 85;
		font-size: 10vw;
	}
}

}
</style>
