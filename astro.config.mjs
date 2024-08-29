import { defineConfig } from "astro/config";
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "directory",
    assetsPrefix: "https://xhand98.github.io/equimano.github.io/",
  },
  server: {
    tailwindConfig: './tailwind.config.js',
  },
  integrations: [
    tailwind(),
    sanity({
      projectId: 'kkdxagg1',
      dataset: 'production',
      apiVersion: '2023-05-01',
      useCdn: true,
    }),
  ]
});