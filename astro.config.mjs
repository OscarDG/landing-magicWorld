// @ts-check
import { defineConfig, envField } from 'astro/config';


// https://astro.build/config
export default defineConfig(
    {
        experimental: {
            svg: true,
        },

        output: 'static',
        site: 'https://OscarDG.github.io',
        base: '/landing-magicWorld',
    },
);

