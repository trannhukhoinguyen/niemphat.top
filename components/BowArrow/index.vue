<template>
  <div class="bow-arrow-wrapper">
    <div class="container">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 600"
      >
        <defs></defs>
        <rect fill="#ECE7BD" width="800" height="600" />

        <polyline
          class="stringPulled"
          fill="none"
          stroke="none"
          stroke-width="4"
          stroke-miterlimit="10"
          points="450,125 552.7,283.3
	450,439 "
        />
        <polyline
          class="stringStraight"
          fill="none"
          stroke="#DFCE51"
          stroke-width="4"
          stroke-miterlimit="10"
          points="438,125 438,283.3
	438,439 "
        />
        <path
          class="bowPulled"
          fill="none"
          d="M444,476.3l-9.6-7.8l4.3-3.1c0,0,3.6-4,4.6-10.7c1.3-9.1-2.6-18.9-11.8-29.1
	c-5.7-6.4-11.8-12.8-17.7-18.9C382.9,374.5,347,341.1,347,283c0-59.2,44.8-102.7,71.8-131.4c4.6-4.9,9-9.6,12.7-13.8
	c8.2-9.3,12-18,11.3-25.7c-0.7-7.6-8.5-13.7-8.6-13.7l10.5-7.3c0.4,0.3,8.9,7.3,10,20c1,11.1-3.8,22.7-14.2,34.6
	c-3.8,4.4-8.3,9.1-13,14.2c-27.2,29-59.5,68.7-59.5,123.2c0,53.3,23.9,83.5,54.5,115.5c6,6.2,12.1,12.6,18,19.2
	C473.6,454.9,444.3,476.1,444,476.3z"
        />
        <path
          class="bowStraight"
          fill="#BD5B40"
          d="M431.7,476.3l-8.4-7.8l3.7-3.1c0,0,3.2-4,4-10.7c1.2-9.1-2.3-18.9-10.3-29.1
	c-5-6.4-10.3-12.8-15.5-18.9C378.4,374.5,347,341.1,347,283c0-59.2,39.1-102.7,62.6-131.4c4-4.9,7.9-9.6,11.1-13.8
	c7.1-9.3,10.5-18,9.9-25.7c-0.6-7.6-7.4-13.7-7.5-13.7l9.2-7.3c0.3,0.3,7.7,7.3,8.7,20c0.8,11.1-3.3,22.7-12.4,34.6
	c-3.4,4.4-7.2,9.1-11.3,14.2c-23.8,29-51.9,68.7-51.9,123.2c0,53.3,20.9,83.5,47.5,115.5c5.2,6.2,10.6,12.6,15.7,19.2
	C457.5,454.9,431.9,476.1,431.7,476.3z"
        />
        <g class="arrow">
          <polygon
            class="tip"
            fill="#A7A7A7"
            points="209.7,279 212.7,269.5 180.5,283.7 212.7,297.8 209.7,288.3 	"
          />
          <g transform="translate(4, 0)">
            <polyline
              class="flight"
              fill="#C71F25"
              points="397.6,288.3 408,296.6 450,296.6 435,283.7 450,270.7 408,270.7 397.6,279 	"
            />
          </g>
          <!--   <g transform="translate(10, 0)">
            <polyline class="flight" fill="#F57048" points="397.6,288.3 408,296.6 450,296.6 435,283.7 450,270.7 408,270.7 397.6,279 	"/>
            </g>   -->
          <polyline
            class="flight"
            fill="#D74242"
            points="397.6,288.3 408,296.6 450,296.6 435,283.7 450,270.7 408,270.7 397.6,279 	"
          />

          <polygon
            class="shaft"
            fill="#DBA971"
            points="397.6,279 209.7,279 209.7,288.3 397.6,288.3 437.6,283.7 	"
          />
        </g>
        <!-- <line class="target" fill="none" stroke="#C9B55D" stroke-width="18" stroke-linecap="none" stroke-miterlimit="10" x1="177" y1="193" x2="177" y2="373"/> -->
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bow-arrow-wrapper {
  body {
    background-color: #ece7bd;
    overflow: hidden;
    text-align: center;
    display: inline-block;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: inline-block;
  }

  svg {
    height: 100%;

    visibility: hidden;
  }
}
</style>
