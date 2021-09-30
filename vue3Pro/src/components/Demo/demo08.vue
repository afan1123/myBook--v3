<template>
  {{ msg }}
</template>
<script setup lang="ts">
import {
  defineProps,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
} from 'vue';
defineProps({
  msg: String,
});
onBeforeMount;
</script>
