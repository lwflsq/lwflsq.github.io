import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "cv blog",
      description: "cv的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "cv blog",
      description: "A blog demo for cv",
    }
   
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
