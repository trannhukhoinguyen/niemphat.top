<template>
  <div class="image-card-effect-wrapper">
      <div class="scene" data-deep-ui="true">
          <div class="cover"></div>
          <div class="scene_inner">
              <div class="arrow">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/right-arrow.png">
              </div>
              <div class="logo">
                  MOVIZ
              </div>
              <div class="scene_inner__left">
                  <div class="overlay"></div>
                  <div class="coverOne coverA"></div>
                  <div class="coverTwo coverA"></div>
                  <div class="coverThree coverA"></div>
                  <div class="coverFour coverA"></div>
                  <div class="wrap">
                      <div class="left textOne" xmlns="http://www.w3.org/1999/xhtml">
                          <div class="left_title">
                              Avengers: Endgame
                          </div>
                          <div class="left_description">
                              Twenty-three days after Thanos used the Infinity Gauntlet to disintegrate half of all life in the universe, Carol Danvers rescues Tony Stark and Nebula from deep space and returns them to Earth.
                          </div>
                          <div class="left_cta">
                              Read more
                          </div>
                      </div>
                      <div class="left textTwo" xmlns="http://www.w3.org/1999/xhtml">
                          <div class="left_title">
                              Ready Player One
                          </div>
                          <div class="left_description">
                              When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.
                          </div>
                          <div class="left_cta">
                              Read more
                          </div>
                      </div>
                      <div class="left textThree" xmlns="http://www.w3.org/1999/xhtml">
                          <div class="left_title">
                              Annabelle Comes Home
                          </div>
                          <div class="left_description">
                              While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll
                          </div>
                          <div class="left_cta">
                              Read more
                          </div>
                      </div>
                      <div class="left textFour" xmlns="http://www.w3.org/1999/xhtml">
                          <div class="left_title">
                              X-Men: Dark Phoenix
                          </div>
                          <div class="left_description">
                              Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all of humanity.
                          </div>
                          <div class="left_cta">
                              Read more
                          </div>
                      </div>
                      <div class="left textFive" xmlns="http://www.w3.org/1999/xhtml">
                          <div class="left_title">
                              Avengers: Age of ultron
                          </div>
                          <div class="left_description">
                              Twenty-three days after Thanos used the Infinity Gauntlet to disintegrate half of all life in the universe, Carol Danvers rescues Tony Stark and Nebula from deep space and returns them to Earth.
                          </div>
                          <div class="left_cta">
                              Read more
                          </div>
                      </div>
                  </div>
              </div>
              <div class="scene_inner__right">
                  <h4>Featured movies</h4>
                  <div class="menu"></div>
              </div>
              <div class="scene_inner__slider">
                  <div class="slide slide_one" xmlns="http://www.w3.org/1999/xhtml">
                      <h2 class="slide_title">Avengers: Endgame</h2>
                      <p class="slide_text">An absolute epic movie out in 2019</p>
                  </div>
                  <div class="slide slide_two" xmlns="http://www.w3.org/1999/xhtml">
                      <h2 class="slide_title">Ready Player One</h2>
                      <p class="slide_text">An absolute epic movie out in 2019</p>
                  </div>
                  <div class="slide slide_three" xmlns="http://www.w3.org/1999/xhtml">
                      <h2 class="slide_title">Annabelle Comes Home</h2>
                      <p class="slide_text">An absolute epic movie out in 2019</p>
                  </div>
                  <div class="slide slide_four" xmlns="http://www.w3.org/1999/xhtml">
                      <h2 class="slide_title">X-Men: Dark Phoenix</h2>
                      <p class="slide_text">An absolute epic movie out in 2019</p>
                  </div>
                  <div class="slide slide_five" xmlns="http://www.w3.org/1999/xhtml">
                      <h2 class="slide_title">Avengers: Age of ultron</h2>
                      <p class="slide_text">An absolute epic movie out in 2019</p>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script setup lang="ts">
interface SceneElement {
    'data-deep-ui': string;
}

const scene = document.querySelector('[data-deep-ui="true"]');
setTimeout(() => {
    scene.style.opacity = 1;
}, 1000);

function deep_ui() {
    const global_perspective = 800;
    const pivot = 80;
    const debug = false;
    const animation_delay = 100;
    const animation_easing = 'ease';
    const deep_parent = document.querySelectorAll('[data-deep-ui="true"]');
    const deep_element = document.querySelectorAll('[data-depth]');
    let count = 0;

    deep_parent.forEach(parent => {
        parent.style.perspective = `${global_perspective}px`;
        parent.style.transformStyle = 'preserve-3d';
        parent.style.transform = 'translateY(-50%)';
        if (parent.dataset.deepAnimate === 'true') {
            set_depth_animation();
        } else {
            set_depth();
        }
    });

    function set_depth() {
        deep_element.forEach(element => {
            element.style.transform = `translatez(${element.dataset.depth}px) translateY(-0%)`;
            element.style.transformStyle = 'preserve-3d';
        });
    }

    function set_depth_animation() {
        deep_element.forEach(element => {
            element.style.transform = 'translatez(1000px) translateY(-0%)';
            element.style.transformStyle = 'preserve-3d';
            const deep_animate = 2;
            element.style.transition = `all 1.4s ${0.3 * count}s ${animation_easing}`;
            count++;
        });
    }

    document.addEventListener('mousemove', e => {
        const x = -((window.innerWidth / 2 - e.pageX) / pivot);
        const y = ((window.innerHeight / 2 - e.pageY) / pivot);
        deep_parent.forEach(parent => {
            parent.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateY(-0%)`;
        });
    });

    function deep_debug() {
        deep_element.forEach(element => {
            element.innerHTML += `<span class="d_label">Depth: ${element.dataset.depth}</span>`;
        });
        deep_parent.forEach(parent => {
            parent.innerHTML += '<span class="d_b_label">Deep parent</span>';
        });
    }

    if (debug) {
        deep_debug();
    }
}

deep_ui();

(function () {
    'use strict';
    let o = [],
        n = 0,
        e = 0,
        t = {
            window: 'object' == typeof window,
            module: 'object' == typeof module && 'object' == typeof module.exports,
            amd: 'function' == typeof define && define.amd,
            global: 'object' == typeof global
        },
        r = {
            defineProp: 'undefined' != typeof Object.defineProperty
        },
        a = {
            valuesCount: 1e4,
            randomInterval: 30,
            removeOptions: !0
        },
        d = {};
    t.window && window.fastrandomOptions ? d = window.fastrandomOptions : t.global && global.fastrandomOptions ? d = global.fastrandomOptions : 'object' == typeof fastrandomOptions && (d = fastrandomOptions);
    for (let i in a) a.hasOwnProperty(i) && !d.hasOwnProperty(i) && (d[i] = a[i]);
    d.removeOptions && (t.window && window.fastrandomOptions ? delete window.fastrandomOptions : t.global && global.fastrandomOptions && delete global.fastrandomOptions);
    let f = function (e) {
        return e ? o[e] : (n == d.valuesCount && (n = 0), o[n++])
    };
    f.randomChanger = function () {
        e == d.valuesCount && (e = 0), o[e++] = Math.random()
    };
    for (let i = 0; i < d.valuesCount; i++) f.randomChanger();
    d.randomInterval && setInterval(f.randomChanger, d.randomInterval), f.valueOf = f, f.options = d, r.defineProp && (Object.defineProperty(f, "random", {
        get: function () {
            return f()
        }
    }), Object.defineProperty(f, "randomArray", {
        get: function () {
            return o
        }
    }), Object.defineProperty(f, "currentRandomIndex", {
        get: function () {
            return n
        }
    })), t.module ? module.exports = f : t.amd && define("fastrandom", [], function () {
        return f
    }), t.window && (window.random = f)
})();

class ParticulateUI {
    constructor() {
        this.elements = [];
    }

    add(elem, render) {
        const element = {
            elem: elem,
            render: render,
            pixels: [],
            data: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${elem.offsetWidth}" height="${elem.offsetHeight}">
                    <foreignObject width="100%" height="100%">${elem.outerHTML}</foreignObject>
                    <defs><style type="text/css">@font-face {font-family: "${primaryFont}"}</style></defs>
                </svg>`
        };

        element.height = Math.floor(elem.offsetHeight);
        element.width = Math.floor(elem.offsetWidth);
        element.positionX = elem.getBoundingClientRect().left + window.scrollX;
        element.positionY = elem.getBoundingClientRect().top + window.scrollY;

        this.elements.push(element);
    }

    render() {
        this.elements.forEach(element => {
            const preCanvasElement = document.createElement('canvas');
            preCanvasElement.id = element.elem.split('.')[1] + '--pre';
            document.querySelector('.scene').appendChild(preCanvasElement);

            const preCanvas = document.getElementById(element.elem.split('.')[1] + '--pre');
            const preCanvasCtx = preCanvas.getContext('2d');

            if (!element.render) {
                preCanvas.style.display = 'none';
            }

            preCanvas.width = element.width;
            preCanvas.height = element.height;

            preCanvasCtx.fillStyle = 'transparent';
            preCanvasCtx.fillRect(0, 0, preCanvas.width, preCanvas.height);

            preCanvasCtx.drawImage(element.elem, 0, 0);

            const imageData = preCanvasCtx.getImageData(0, 0, preCanvas.width, preCanvas.height).data;

            for (let y = 0; y < preCanvas.height; y++) {
                for (let x = 0; x < preCanvas.width; x++) {
                    const idx = (x + y * preCanvas.width) * 4;
                    if (imageData[idx + 3] > 0) {
                        const pixelPositionX = element.positionX + x;
                        const pixelPositionY = element.positionY + y;

                        const pixel = {
                            x: pixelPositionX,
                            y: pixelPositionY,
                            originalX: pixelPositionX,
                            originalY: pixelPositionY,
                            targetX: pixelPositionX,
                            targetY: pixelPositionY,
                            color: `rgba(${imageData[idx]}, ${imageData[idx + 1]}, ${imageData[idx + 2]}, ${imageData[idx + 3] / 255})`,
                            width: 1,
                            height: 1,
                            speed: 1,
                            hover: false
                        };

                        element.pixels.push(pixel);
                    }
                }
            }

            preCanvas.remove();
        });
    }
}
const ui = new ParticulateUI();

const newScene = document.querySelector('.scene');
ui.add(newScene, true);
ui.render();

</script>

<style scoped lang="scss">
.image-card-effect-wrapper {
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  canvas {
    position: absolute;
    background: transparent;
    transition: all 1.2s .3s cubic-bezier(.6, 0.005, 0.525, 0.990);
    left: 0;
    pointer-events: none;

  }

  .arrow {
    position: absolute;
    z-index: 1;
    top: 230px;
    left: 390px;
    z-index: 100;
    cursor: pointer;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.2);
    height: 40px;
    width: 40px;
    border-radius:40px;
    transition: all .6s;

    &:hover {
      border: 2px solid rgba(255, 255, 255, 1);
    }

    animation: pulse 1s infinite;

    @keyframes pulse {
      from{box-shadow: 0 0 0 0px rgba(255, 255, 255, 1)}
      to{box-shadow: 0 0 0 20px rgba(255, 255, 255, 0)}
    }

    img{
      width: 20px;
      position: relative;
      top: 10px;
      left: 10px;
    }
  }
  .coverA{
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 1.2s .2s cubic-bezier(.6, 0.005, 0.525, 0.990);
    //background: url('https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/03/ready_player_one_still_19.jpg');
    background-size: cover !important;
    background-position: center;
    clip-path: polygon(100% 0, 100% 0, 100% 98%, 100% 100%);
  }

  .coverOne {
    background: url('https://static.gbtimes.com/uploads/files/2018-05/11/Marvel_Avengers_Infinity_War_China_cropped.jpg');
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
  }

  .coverTwo {
    background: url('https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg');
  }

  .coverThree {
    background: url('https://www.valmorgan.com.au/wp-content/uploads/2019/05/Annabelle-Comes-Home.jpg');
  }


  .coverFour {
    background: url('https://media.vanityfair.com/photos/5cf6bc683fe2aa92ef75a3d6/2:3/w_557,h_836,c_limit/Dark-Phoenix-Review.jpg');
  }

  .coverFive {
    background: url('https://static.gbtimes.com/uploads/files/2018-05/11/Marvel_Avengers_Infinity_War_China_cropped.jpg');
  }


  .logo {
    color: white;
    position: absolute;
    font-family: lato;
    z-index: 10;
    font-size: 12px;
    top: 20px;
    left: 25px;
    opacity: 0.6;
  }
  .cover {
    position: fixed;
    height: 400px;
    background: linear-gradient(-90deg, #0d040e 52%, transparent);
    width: 20%;
    z-index: 11;
    right: 0;
    top: 50%;

    transform: translateY(-50%) translateZ(100px);
  }
  body {
    overflow: hidden;
    margin: 0;
    background: #0d040e;
  }

  canvas {
    transform: translateZ(10px);
  }
  canvas#textOne, canvas#textOne--pre {
    transform: translateY(-70px) translateZ(13px);
    position: absolute;
  }

  canvas#textTwo, canvas#textTwo--pre {
    transform: translateY(-227px) translateZ(13px);
    position: absolute;
    opacity: 0;
  }

  canvas#textThree, canvas#textThree--pre {
    transform: translateY(-384px) translateZ(13px);
    position: absolute;
    opacity: 0;
  }
  canvas#textFour, canvas#textFour--pre {
    transform: translateY(-541px) translateZ(13px);
    position: absolute;
    opacity: 0;
  }
  canvas#textFive, canvas#textFive--pre {
    transform: translateY(-698px) translateZ(13px);
    position: absolute;
    opacity: 0;
  }


  canvas#slide_one, canvas#slide_one--pre,
  canvas#slide_two, canvas#slide_two--pre,
  canvas#slide_three, canvas#slide_three--pre,
  canvas#slide_four, canvas#slide_four--pre,
  canvas#slide_five, canvas#slide_five--pre{
    transform: translateZ(30px);
  }

  .scene {
    height: 100vh;
    opacity: 0;
    transition: opacity 1s;

    &_inner {
      width: 900px;
      box-shadow: 0 0 60px rgba(210, 49, 230, 0.0784313725490196);

      height: 500px;
      border-radius: 8px;
      position: absolute;
      -webkit-box-reflect: below 10px linear-gradient(to top, rgba(255, 255, 255, 1) -120%, rgba(255,255,255,0) 25%);
      left: 0;
      right: 0;
      margin: auto;
      top: 50%;
      transform: translateY(-50%);

      &__left {
        width: 60%;
        height: 100%;
        float: left;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        font-family: 'lato';
        position: relative;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        transform-style: preserve-3d;
        .overlay {
          opacity: .8;
          position: fixed;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          width: 60%;
          height: 100%;
          background: #0a0415;
          z-index: 1;

        }

        .wrap {
          position: absolute;
          top: 50%;transform-style: preserve-3d;
        }

        & .left {
          width: 30%;
          left: 60px;
          width : 400px;


          &_title {
            font-size: 20px;
            margin-bottom: 10px;
          }

          &_description {
            font-size: 14px;
            opacity: 0.8;
          }

          &_cta {
            padding: 10px 20px 12px 20px;
            border-radius: 4px;
            font-size: 14px;
            color: white;
            background: black;
            display: inline-block;
            margin-top: 20px;
          }
        }
      }

      &__right {
        width: 40%;
        background: #fff;
        height: 100%;
        transform-style: preserve-3d;
        float: left;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        h4 {
          font-family: 'lato';
          position: absolute;
          font-size: 20px;
          transform: translateZ(20px) translateY(80px) translateX(25px);
        }

        & .menu {
          width: 18px;
          height: 2px;
          background: #111114;
          position: absolute;
          right: 20px;
          top: 20px;

          &:after {
            content: '';
            display: block;
            position: relative;
            top: 2px;
            width: 18px;
            height: 2px;
            background: #111114;
          }

          &:before {
            content: '';
            display: block;
            position: relative;
            top: 9px;
            width: 10px;
            height: 2px;
            background: #111114;
          }
        }
      }

      &__slider {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -560px;
        width: 1000px;

        & .slide {
          background: #f5e0bf;
          width: 150px;
          height: 180px;
          border-radius: 8px;
          color: white;
          font-family: 'Lato';
          display: inline-block;
          margin-right: 10px;

          &_title {
            font-size: 14px;
            padding: 70px 20px 0 20px;
          }

          &_text {
            font-size: 12px;
            line-height: 18px;
            padding: 0 20px 0 20px;
            opacity: 0.8;
          }
        }
      }
    }
  }

}
</style>
