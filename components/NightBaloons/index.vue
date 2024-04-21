<template>
    <div class="night-baloon-wrapper">

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.night-baloon-wrapper {
  body{
    background:black;
  }

  .container{
    position:relative;
    width:800px;
    height:600px;
    background:#131F2C;
    margin:90px auto;
    overflow:hidden;

  }

  @keyframes brillo{
    0%{box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    }

    50%{box-shadow:0 0 3px 3px rgba(255,255,255,.7);
    }
    100%{box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    ; }



  }
  .estrellas{
    position:absolute;
    width:9px;
    height:9px;
    border-radius:100%;
    background:#ccc;
    box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    margin:121px 121px;

  }
  .estrellas::before{
    content:"";
    position:absolute;
    width:9px;
    height:9px;
    border-radius:100%;
    background:#ccc;
    box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    margin:121px 121px;
  }
  .estrellas::after{
    content:"";
    position:absolute;
    width:9px;
    height:9px;
    border-radius:100%;
    background:#ccc;
    box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    margin:0px 521px;
  }
  .estrellas3{
    position:absolute;
    width:9px;
    height:9px;
    border-radius:100%;
    background:#ccc;
    box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    margin:241px 550px
  }
  .estrellas3::before{
    content:"";
    position:absolute;
    width:7px;
    height:7px;
    border-radius:100%;
    background:#ccc;
    box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    margin:90px -500px
  }
  .estrellas3::after{
    content:"";
    position:absolute;
    width:7px;
    height:7px;
    border-radius:100%;
    background:#ccc;
    box-shadow:0 0 3px 3px rgba(255,255,255,.3);
    margin:90px 172px
  }
  .luna{
    position:absolute;
    width:112px;
    height:112px;
    border-radius:100%;
    background:#ccc;
    margin: 70px 350px;
    box-shadow:0 0 70px #FFf;
  }
  .baloons{
    position:absolute;
    margin:30px 30px;
    animation: va 30s linear infinite;
  }
  .baloon1, .baloon2{
    position:absolute;
    width:90px;
    height:90px;
    border-radius:100%;
    background:#333;

  }
  .baloon1{
    margin:241px 830px;
    animation:sube 12s alternate infinite;
  }
  .baloon2{
    margin:221px 950px;
    transform:scale(.9);
    animation:sube3 12s alternate infinite;
  }
  .baloon1::before, .baloon2::before{
    content:"";
    position:absolute;
    width:80px;
    height:83px;
    border-radius:100%;
    margin:4px 3px
  }
  .baloon1::before{
    background:#05A9CE;
    border-right:5px solid #0D7090;
  }
  .baloon2::before{
    background:#EB5385;
    border-right:5px solid #C9334C;
  }
  .cesta{
    position:absolute;
    border-top: 30px solid #333;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    height: 0;
    width: 30px;
    margin:112px 21px
  }
  .cesta::before{
    content:"";
    position:absolute;
    border-top: 25px solid #83939C;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0;
    width: 27px;
    margin:-27px -8px
  }
  .refle{
    position:absolute;
    width: 70px;
    height:30px;
    border-radius: 121px 121px 0 0;
    border-top:7px solid white;
    margin:12px 0px;
    transform:rotate(-35deg)
  }

  .hilos{
    position:absolute;
    width:3px;
    height:60px;
    background:#333;
    transform:rotate(-21deg);
    margin:80px 30px
  }
  .hilos::before{
    content:"";
    position:absolute;
    width:3px;
    height:53px;
    background:#333;
    transform:rotate(42deg);
    margin:9px 30px
  }

  .viento{
    position:absolute;
    width:70px;
    height:9px;
    border-radius:6px;
    background:#344656;
    margin:142px 75px


  }
  .viento::before{
    content:"";
    position:absolute;
    width:50px;
    height:9px;
    border-radius:6px;
    background:#344656;
    margin:14px 33px


  }
  .viento::after{
    content:"";
    position:absolute;
    width:21px;
    height:9px;
    border-radius:6px;
    background:#344656;
    margin:0px 75px


  }
  .hills{
    position:absolute;
    width:400px;
    height:231px;
    border-radius: 231px 231px 0 0;
    background:#161B26;
    border-top:7px solid #131921;
    margin:470px -53px
  }
  .hills::after{
    content:"";
    position:absolute;
    width:300px;
    height:152px;
    border-radius: 231px 231px 0 0;
    background:#161B26;
    border-top:7px solid #131921;
    margin:12px 312px
  }
  .hills::before{
    content:"";
    position:absolute;
    width:400px;
    height:231px;
    border-radius: 231px 231px 0 0;
    background:#161B26;
    border-top:7px solid #131921;
    margin:0px 512px
  }

  @keyframes va{
    0%{transform:translatex(0px) }
    100%{transform:translatex(-1132px) }
  }
  @keyframes sube{
    0%{transform:translatey(-21px)}
    35%{transform:translatey(-12px)}
    50%{transform:translatey(12px) }
    70%{transform:translatey(-12px) }
  }
  @keyframes sube3 {
    0%{margin-top:221px  }
    35%{margin-top:212px  }
    50%{margin-top:231px }
    70%{margin-top:221px }
  }
}
</style>
