/** @type {import('tailwindcss').Config} */
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,vue}",
    "./src/custom-tab-bar/*.vue",
    "./src/components/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi"]),
    }),
  ],
  // v3 版本的 tailwindcss 有些不同
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false,
  },
};
