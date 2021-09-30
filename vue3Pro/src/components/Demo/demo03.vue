<template>
  <h1>{{ msg }}</h1>
  <h2>{{ name }}</h2>
  测试
  {{ count }}
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, toRefs } from 'vue';
defineProps({
  msg: String,
});
// ref用于基本类型，reactive用于对象
const count = ref(0);
console.log(count.value);

//使用reactive对dangeref进行包装
const state = reactive({
  count,
});
console.log(state);

const obj = reactive({
  name: 'zhangsan',
  age: 18,
});
const { name } = { ...toRefs(obj) };
console.log(obj);
</script>
