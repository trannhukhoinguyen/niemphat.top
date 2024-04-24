<template>
  <div class="block-reveal-effect-display-wrapper">
    <div class="container">
      <div class="item__names">
        <ul class="name__block js-name__block">
          <p class="heading">Products:</p>
          <li class="text__content js--text-content">
            <p class="content js-content">Adidas</p>
          </li>
          <li class="text__content js--text-content">
            <p class="content js-content">Nike</p>
          </li>
          <li class="text__content js--text-content">
            <p class="content js-content">A-Sports</p>
          </li>
          <li class="text__content js--text-content">
            <p class="content js-content">N-Sports</p>
          </li>
          <li class="text__content js--text-content">
            <p class="content js-content">A-Run</p>
          </li>
          <li class="text__content js--text-content">
            <p class="content js-content">N-run</p>
          </li>
        </ul>
      </div>
      <div class="item__photos js--photos"></div>
      <div class="item__background js--background"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RevealSettings {
  bgColors: string[];
  coverArea: number;
  easing: string;
  duration: number;
  direction: string;
  onStart?: () => void;
  onHalfway?: (contentEl: HTMLElement) => void;
}
interface RevealFx {
  new (
    element: HTMLElement,
    options: { isContentHidden: boolean },
  ): {
    reveal: (settings: RevealSettings) => void;
  };
}

const addClickListenersToListItems = (): void => {
  for (let i = 0; i < listElements.length; i++) {
    revealEffectArray[i] = new RevealFx(listElements[i], {
      isContentHidden: false,
    });
    listElements[i].addEventListener("click", () => revealTheBlock(i));
  }
  revealTheBlock(0);
};

const revealTheBlock = (counter: number): void => {
  if (globalCounter !== counter) {
    const revealSettings: RevealSettings = {
      bgColors: [bgColors[counter]],
      coverArea: 0,
      easing: "easeInOutCubic",
      duration: 500,
      direction: "lr",
      onStart: () => {
        revealSettingsForProjectBackground.bgColors = revealSettings.bgColors;
        revealSettingsForProjectPhotos.bgColors = [
          revealSettings.bgColors[0],
          revealSettings.bgColors[0],
          revealSettings.bgColors[0],
          revealSettings.bgColors[0],
        ];
        revealSettingsForProjectBackground.onStart = () => {
          revealEffectForPhotos.reveal(revealSettingsForProjectPhotos);
        };
        revealSettingsForProjectBackground.onHalfway = (contentEl) => {
          projectBackground.style.background = this.bgColors[0];
        };
        revealEffectForBackground.reveal(revealSettingsForProjectBackground);
      },
      onHalfway: (contentEl) => {
        contentEl.style.color = this.bgColors[0];
      },
    };

    globalRevealSettings.onHalfway = (contentEl) => {
      contentEl.style.color = "rgba(255,255,255,0.5)";
      revealEffectArray[counter].reveal(revealSettings);
    };

    if (globalCounter === -1) {
      revealEffectArray[counter].reveal(revealSettings);
    } else {
      revealEffectArray[globalCounter].reveal(globalRevealSettings);
    }

    globalCounter = counter;
  }
};

const projectBackground: HTMLElement | null =
  document.querySelector(".js--background");
const projectPhotos: HTMLElement | null = document.querySelector(".js--photos");
const listElements: NodeListOf<HTMLElement> =
  document.querySelectorAll(".js-content");

let globalCounter: number = -1;
const bgColors: string[] = [
  "rgba(40,53,147 ,1)",
  "rgba(198,40,40 ,1)",
  "rgba(106,27,154 ,1)",
  "rgba(249,168,37 ,1)",
  "rgba(194,24,91 ,1)",
  "rgba(91,207,151 ,1)",
  "rgba(3,169,244,1)",
  "rgba(0,77,64 ,1)",
];
const photoArray: string[] = [
  "https://content.adidas.co.in/static/Product-BC0836/MEN_RUNNING_SHOES_MID_BC0836_2.jpg.zoom",
  "https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/iv8yxqw84awnizmatwzd/mercurial-vapor-xii-pro-neymar-jr-football-boot-266JKl.jpg",
];
const globalRevealSettings: RevealSettings = {
  bgColors: ["rgba(255,255,255,0.5)"],
  coverArea: 0,
  easing: "easeOutCubic",
  duration: 500,
  direction: "rl",
};
const revealSettingsForProjectBackground: RevealSettings = {
  coverArea: 100,
  easing: "easeOutCubic",
  duration: 800,
  direction: "tb",
};
const revealSettingsForProjectPhotos: RevealSettings = {
  bgColors: bgColors,
  coverArea: 0,
  easing: "easeOutCubic",
  duration: 400,
  direction: "rl",
  onHalfway: () => {
    projectPhotos.style.backgroundImage = `url(${photoArray[globalCounter % 2]})`;
  },
};

const revealEffectForBackground: RevealFx = new RevealFx(projectBackground);
const revealEffectForPhotos: RevealFx = new RevealFx(projectPhotos, {
  layers: 4,
  isContentHidden: true,
});
const revealEffectArray: RevealFx[] = [];

window.onload = addClickListenersToListItems;
</script>

<style scoped lang="scss">
.block-reveal-effect-display-wrapper {
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  body {
    font-family: "Roboto", sans-serif;
    background: #f0eff0;
    overflow: hidden;
  }
  .container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .item__names {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background: #111;
  }
  .name__block {
    display: inline-block;
    margin-left: 1em;
    list-style: none;
    flex-direction: column;
  }
  .text__content {
    color: rgba(255, 255, 255, 0.5);
    flex: 1 0 auto;
  }
  .heading {
    font-size: 20px;
    padding: 0;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
  }
  .content {
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: color 0.4s ease-in;
    -webkit-transition: color 0.4s ease-in;
    -moz-transition: color 0.4s ease-in;
    -ms-transition: color 0.4s ease-in;
    -o-transition: color 0.4s ease-in;
  }
  .item__photos {
    position: absolute;
    top: 5%;
    left: 30%;
    min-width: 50vw;
    height: 90%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
  .item__background {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    background: rgba(40, 53, 147, 1);
  }
}
</style>
