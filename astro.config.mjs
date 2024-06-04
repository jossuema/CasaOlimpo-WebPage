import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import commonjs from "@rollup/plugin-commonjs";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    optimizeDeps: {
      include: ['@material-tailwind/react']
    },
    plugins: [commonjs()],
    ssr: {
      noExternal: ['@material-tailwind/react']
    }
  }
});