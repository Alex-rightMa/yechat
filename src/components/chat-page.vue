<template>
  <view class="chat-contenter flex flex-1 flex-col">
    <View class="fixed" :style="{ bottom: `${fixBtottomRef}` }">
      <View>
        <View class="main-info"> {{ nameRef }} </View>
      </View>
    </View>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { useCustomTabStore } from "@/stores/custom-tab";

const customTabStore = useCustomTabStore();
// Taro.useLoad(() => {
//     Taro.nextTick(() => {

//     })
// })
const fixBtottomRef = ref("0rpx");
watchEffect(() => {
  if (customTabStore.height !== 0) {
    fixBtottomRef.value = Taro.pxTransform(customTabStore.height);
  }
});

const nameRef = ref("流放的狮子座");
</script>

<style lang="scss">
.chat-contenter {
  width: 100%;
  background-image: url("../assets/pic/chat/main.png");
  background-size: 100% 100%;
}
</style>
