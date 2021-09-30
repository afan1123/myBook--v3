<template>
  {{ msg }}
</template>
<script setup lang="ts">
/*
watchEffect:
1.不需要手动传入依赖
2.不是lazy初始化执行分析依赖
3.无法获取原始值
4.一些异步操作放在里面更加合适
5.watch第三个参数处理副作用的第一个参数
*/

import { defineProps, ref, watch, watchEffect, onMounted } from 'vue';
defineProps({
  msg: String,
});
const num = ref(0);
onMounted(() => {
  console.log('onMounted');
});
const stop = watchEffect(
  (onInvalidate) => {
    console.log('onMounted之前调用', num.value);
    onInvalidate(() => {
      // 清除副作用
    });
  },
  {
    // flush:"sync", 调用时机
    onTrigger(e) {
      // debugger;
    },
  }
);
// 停用监听
stop();
setTimeout(() => {
  num.value++;
}, 1000);
</script>
