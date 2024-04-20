import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "行舟的技术成长之路",
  description: "行舟的技术成长之路",
  head: [
    ['link', { rel: 'icon', href: '/assets/icon/devise/纯黑.png' }]
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
