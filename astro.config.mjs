import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://ranaclan.github.io',
  base: '/kieronPortfolio',
  integrations: [react(), tailwind()]
});