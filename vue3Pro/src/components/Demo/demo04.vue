<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    placeholder="ref使用的例子"
    ref="root"
    value="ref使用的例子"
  />
</template>
<script setup lang="ts">
import { defineProps, reactive, ref, onMounted } from 'vue';
type msg = String;
defineProps({
  msg: String,
});
const root = ref(0);
// dom首次渲染完成之后，才能获取真实dom
onMounted(() => {
  console.log('🐅', root.value);
});
</script>
