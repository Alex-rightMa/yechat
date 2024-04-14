<template>
  <view class="main-contenter">
    <Dongdong color="#fff" size="24" class="z-10 !absolute top-12 left-6" />
    <ChatPage />
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { Dongdong } from "@nutui/icons-vue-taro";
import ChatPage from "@/components/chat-page.vue";
import { useCustomTabStore } from "@/stores/custom-tab";

const customTabStore = useCustomTabStore();

const cacheTabHeight = () => {
  Taro.createSelectorQuery()
    .select("#custom-tabbar")
    .boundingClientRect((rect) => {
      console.log(rect, "test...."); //为null
    })
    .exec((rect) => {
      console.log(rect, "test...."); //为null
    });
};
Taro.useLoad(cacheTabHeight);
</script>

<style>
.main-contenter {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
