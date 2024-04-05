import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "行舟的技术成长之路",
  description: "行舟的技术成长之路",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
