<template>
  <h1>{{ msg }}</h1>
</template>
<script setup lang="ts">
import { defineProps, ref, onMounted, reactive, watch } from 'vue';
defineProps({
  msg: String,
});
const state = reactive({
  count: 0,
});
watch(
  () => state.count,
  (count, prevCount) => {
    console.log('count', count);
    console.log('prevCount', prevCount);
  },
  {
    deep: true,
    immediate: true,
  }
);
setTimeout(() => {
  state.count++;
  console.log(state.count);
}, 1000);

// const person=ref(null);
// watch([person,state.count],([new,old],[new,old])=>{

// })
</script>
