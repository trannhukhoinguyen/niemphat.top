<template>
  <div class="flagging-goods-box-wrapper">
    <div class="container">
      <svg viewBox="0 0 600 600">
        <g>
          <line id="table" fill="none"  stroke-width="6" stroke-miterlimit="10" x1="50" y1="333" x2="550" y2="333"/>
        </g>
        <g id="vibeGroup" stroke="#000">
          <line fill="none"  stroke-width="6" stroke-miterlimit="10" x1="324.6" y1="262.3" x2="348.4" y2="238.5"/>
          <line fill="none"  stroke-width="6" stroke-miterlimit="10" x1="313.2" y1="254.6" x2="326.1" y2="223.6"/>
          <line fill="none"  stroke-width="6" stroke-miterlimit="10" x1="299" y1="252" x2="299" y2="218"/>
          <line fill="none"  stroke-width="6" stroke-miterlimit="10" x1="286" y1="254.3" x2="273.3" y2="223.6"/>
          <line fill="none"  stroke-width="6" stroke-miterlimit="10" x1="274.2" y1="261.8" x2="250.9" y2="238.5"/>
        </g>
        <g id="slideLineGroup"  stroke-width="3" stroke-miterlimit="10" >
          <line x1="153" y1="316" x2="208" y2="316"/>
          <line x1="135" y1="283" x2="212" y2="283"/>
          <line x1="182" y1="300" x2="225" y2="300"/>
        </g>
        <g id="lidRightLineGroup" fill="none"  stroke-width="3" stroke-miterlimit="10">
          <path fill="none"  d="M302.2,276.3c0-12.2,9.8-22,22-22"/>

        </g>
        <g id="groupedFlagBoxBall" stroke-width="6">
          <g class="boxGroup" >
            <line id="lidRight" fill="none"   stroke-linecap="square" stroke-miterlimit="10" x1="302" y1="276" x2="324" y2="276"/>
            <line id="lidLeft" fill="none" stroke-linecap="square" stroke-miterlimit="10" x1="276" y1="276" x2="298" y2="276"/>
            <polyline class="box" fill="none" stroke-miterlimit="10" points="324,276 324,324 276,324
	276,276 "/>
          </g>

          <g id="flagGroup">
            <line fill="none"  stroke-width="4" stroke-miterlimit="10" x1="299.5" y1="233" x2="299.5" y2="269"/>
            <path stroke="none" d="M323,241.5l-19,8.5v-17L323,241.5L323,241.5z M310.3,239.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5
		c1.4,0,2.5-1.1,2.5-2.5C312.8,240.2,311.7,239.1,310.3,239.1z"/>
          </g>
          <circle id="ball" fill="none" stroke-width="6" cx="300" cy="311" r="8" />
        </g>
      </svg>


    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.flagging-goods-box-wrapper {
  body {
    background-color:#DE3679;
    overflow: hidden;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .container{
    position:absolute;
    max-width:100%;
    width:600px;
    height:600px
  }

  svg{
    max-width:100%;
    visibility:hidden;

  }

  g{
    stroke:#f6f6f6;
    fill:#f6f6f6
  }
}
</style>
