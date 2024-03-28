import { myUnoPreset } from './plugins/my-uno-preset';
import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss';
import presetIcons from '@unocss/preset-icons';

UnoCSS({
    presets: [
        presetIcons({
            /* options */
        }),
        // ...other presets
    ],
});
export default defineConfig({
    rules: [
        [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    ],
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
        myUnoPreset, // your own preset
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
});
