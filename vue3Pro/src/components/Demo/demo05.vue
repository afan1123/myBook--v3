<template>
  <h1>{{ msg }}</h1>
  <h2>{{ count }}</h2>
  <h2>{{ plusOne }}</h2>
</template>
<script setup lang="ts">
import { computed, defineProps, reactive, ref } from 'vue';
defineProps({
  msg: String,
});
const count = ref(0);
// const plusOne = computed(() => count.value + 1); //readonly属性
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val + 1;
  },
});
plusOne.value = Math.random();
</script>
