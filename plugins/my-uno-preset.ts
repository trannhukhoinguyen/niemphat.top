import { Preset } from 'unocss';

export const myUnoPreset: Preset = {
    name: 'my-preset',
    rules: [
        [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
        [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    ],
    variants: [/* ... */],
    shortcuts: [/* ... */],
    // ...
};
export default defineNuxtPlugin(() => {});
