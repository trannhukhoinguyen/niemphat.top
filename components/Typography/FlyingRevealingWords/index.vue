<template>
  <div class="flying-revealing-words-wrapper" />
</template>

<script setup lang="ts">
// Define interfaces and classes
interface BasicView {
    containerElement: HTMLDivElement;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    handleResize(event: Event): void;
    startRendering(): void;
    update(): void;
    render(): void;
    onTick(): void;
}

class BasicViewImpl implements BasicView {
    containerElement: HTMLDivElement;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;

    constructor() {
        this.containerElement = document.createElement('div');
        document.body.appendChild(this.containerElement);

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200000);
        this.camera.position.z = -1000;

        const needAntialias = window.devicePixelRatio === 1.0;
        this.renderer = new THREE.WebGLRenderer({
            antialias: needAntialias
        });
        this.renderer.setClearColor(0x0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.containerElement.appendChild(this.renderer.domElement);

        window.addEventListener('resize', (e) => {
            this.handleResize(e);
        }, false);
    }

    handleResize(event: Event): void {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    startRendering(): void {
        this.update();
    }

    update(): void {
        requestAnimationFrame(() => {
            this.update();
        });
        this.onTick();
        this.render();
    }

    render(): void {
        this.renderer.render(this.scene, this.camera);
    }

    onTick(): void {
        // Default implementation, can be overridden by subclasses
    }
}

interface DemoIconsPreload {
    loadFontsAndStartDemo(): void;
}

class DemoIconsPreloadImpl implements DemoIconsPreload {
    constructor() {
        WebFont.load({
            custom: {
                families: ['Source Code Pro', 'FontAwesome'],
                urls: [
                    'https://fonts.googleapis.com/css?family=Source+Code+Pro:600',
                    'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
                ],
                testStrings: {
                    'FontAwesome': '\uf001'
                }
            },
            active: () => {
                new DemoIconsWorld();
            }
        });
    }

    loadFontsAndStartDemo(): void {
        // Implementation provided in the constructor
    }
}

class DemoIconsWorld extends BasicViewImpl {
    private readonly CANVAS_W: number = 360;
    private readonly CANVAS_H: number = 80;
    private readonly WORD_LIST: string[] = ["A Di Đà Phật", "A Di Đà Phật", "A Di Đà Phật"];
    private readonly _matrixLength: number = 8;
    private readonly _particleList: THREE.Mesh[] = [];
    private _wordIndex: number = 0;
    private _hue: number = 0.6;
    private readonly HELPER_ZERO: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

    constructor() {
        super();
        this.setup();
        this.createLogo();
        this.startRendering();
    }

    setup(): void {
        super.setup();

        // Additional setup specific to DemoIconsWorld
        // ...
    }

    createLogo(): void {
        // Implementation provided in the original JavaScript code
    }

    onTick(): void {
        super.onTick();

        // Additional onTick logic specific to DemoIconsWorld
        // ...
    }
}

// Start the demo when the window loads
window.addEventListener("load", () => {
    const demoPreloader = new DemoIconsPreloadImpl();
    demoPreloader.loadFontsAndStartDemo();
});

</script>

<style scoped lang="scss">
.flying-revealing-words-wrapper {
  body {
    margin: 0;
    padding: 0;
    overflow: hidden; }

  #coverBlack {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 1.0;
    background: #000000; }
}
</style>
