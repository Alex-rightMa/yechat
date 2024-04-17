<template>
  <view class="tabbar-container safe-area-bottom">
    <view
      v-for="item in menuRef"
      :key="item.pagePath"
      @tap="handleSwtich(item)"
      :class="[
        'tabbar-item',
        item.pagePath === customTabStore.currentPath
          ? 'tabbar-item-selected'
          : '',
      ]"
    >
      <view
        v-if="item.pagePath === centerTabIcon"
        :class="['center-icon', centerTabIcon]"
      ></view>
      <view v-else class="tabbar-item-text">{{ item.text }}</view>
    </view>
  </view>
  <AddAi />
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import "./index.scss";
import AddAi from "@/components/add-ai.vue";
import { useAddAiStore } from "@/stores/add-ai";
import { useCustomTabStore } from "@/stores/custom-tab";
import { useAppStore } from "@/stores/app";
import { centerTabIcon } from "@/emun/const";
const tabbarConfig = require("@/tabbar.config.ts");

interface TabbarItem {
  pagePath: string;
  text: string;
}
const addAiStore = useAddAiStore();
const customTabStore = useCustomTabStore();
const appStore = useAppStore();

const rawMenu = tabbarConfig.list.map(({ pagePath, text }) => ({
  pagePath,
  text,
}));
rawMenu.splice(2, 0, { pagePath: centerTabIcon, text: "icon" });
const menuRef = ref<TabbarItem[]>(rawMenu);

const handleSwtich = (item: TabbarItem) => {
  if (item.pagePath === centerTabIcon) {
    return addAiStore.toogle();
  }
  if (item.pagePath === customTabStore.currentPath) return;
  customTabStore.setCurrentPath(item.pagePath);
  Taro.switchTab({
    url: `/${item.pagePath}`,
  });
};

const cacheTabHeight = () => {
  // 页面 onShow 时
  if (!appStore.sysInfo) {
    const res = Taro.getWindowInfo();
    const safePadding = res.screenHeight - (res.safeArea?.bottom ?? 0);
    const fixVal = safePadding !== 0 ? 11 * res.pixelRatio : 0;
    customTabStore.setTabHeight(safePadding + 100 + fixVal);
    appStore.init(res);
  }
};
Taro.useLoad(cacheTabHeight);
// 监听变化
// wx.onAppRoute((res: { path: string }) => {
//   if (res.path) {
//     customTabStore.setCurrentPath(res.path)
//   }
// })
</script>
