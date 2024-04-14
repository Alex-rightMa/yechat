<template>
  <nut-action-sheet :visible="addAiStore.show" @update:visible="changeVisable">
    <view class="safe-area-bottom add-ai-wrap">
      <view class="add-ai-title">选择智能体的性别，开始创建吧</view>
      <view class="ai-type">
        <view
          v-for="item in aiConfigData"
          :key="item.value"
          @tap="selectAiType(item.value)"
          :class="[
            'ai-type-item',
            aiType === item.value ? 'ai-type-item-selected' : '',
          ]"
        >
          <image :src="item.icon" class="ai-type-img" />
          <text>{{ item.name }}</text>
        </view>
      </view>
      <nut-button
        type="warning"
        :class="['create-btn', !aiType ? '.create-btn-disable' : '']"
        >开启创建之旅</nut-button
      >
      <view @tap="changeCheckbox" class="open-ai-checkbox">
        <view
          v-show="!publicAi"
          class="i-mdi-checkbox-blank-circle-outline add-ai-checkbox"
        />
        <view
          v-show="publicAi"
          class="i-mdi-checkbox-marked-circle add-ai-checkbox"
        />
        <text style="margin-left: 10px">公开该智能体</text>
      </view>
    </view>
  </nut-action-sheet>
</template>

<script setup lang="ts">
import { useAddAiStore } from "@/stores/add-ai";
import maleImg from "@/assets/pic/male.png";
import femaleImg from "@/assets/pic/female.png";
import otherImg from "@/assets/pic/other.png";

const addAiStore = useAddAiStore();
const changeVisable = () => {
  selectAiType('')
  addAiStore.toogle();
};

const publicAi = ref(true);
const aiConfigData = [
  {
    name: "男",
    value: "male",
    icon: maleImg,
  },
  {
    name: "女",
    value: "female",
    icon: femaleImg,
  },
  {
    name: "其他",
    value: "other",
    icon: otherImg,
  },
];
const aiType = ref("");
const selectAiType = (val: string) => {
  aiType.value = val;
};
const changeCheckbox = () => {
  publicAi.value = !publicAi.value;
};
</script>

<style lang="scss">
.add-ai-wrap {
  padding: 40px;
}

.add-ai-title {
  font-size: 36px;
  font-weight: 500;
  color: #333333;
  line-height: 22px;
  margin-bottom: 40px;
}

.create-btn {
  margin: 40px 0;
}

.ai-type {
  display: flex;
  justify-content: space-between;

  .ai-type-item {
    border: 1px solid #ccc;
    border-radius: 30px;
    width: 30%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ai-type-img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
  .ai-type-item-selected {
    border: 2px solid #fed802;
    .ai-type-img {
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
    }
    text {
      color: #ffe60f;
    }
  }
}

.create-btn {
  width: 100%;
  background-color: #ffe60f;
  border-radius: 40px;
}
.create-btn-disable {
  opacity: 0.3;
}

.open-ai-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  font-size: 30px;
  margin-bottom: 50px;
}

.add-ai-checkbox {
  display: inline-block;
  width: 50px;
  height: 50px;
}

.i-mdi-checkbox-blank-circle-outline {
  background-color: currentColor;
  mask-image: var(--svg);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  --svg: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 width=%2724%27 height=%2724%27%3E%3Cpath fill=%27black%27 d=%27M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2%27/%3E%3C/svg%3E");
}

.i-mdi-checkbox-marked-circle {
  background-color: #fed802;
  mask-image: var(--svg);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  --svg: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 width=%2724%27 height=%2724%27%3E%3Cpath fill=%27black%27 d=%27m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2%27/%3E%3C/svg%3E");
}
</style>
