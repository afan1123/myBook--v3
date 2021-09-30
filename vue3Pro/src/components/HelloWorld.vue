<template>
  {{ msg }}
</template>
<script setup lang="ts">
import { defineProps, ref, defineComponent } from 'vue';
defineProps({
  msg: String,
});
</script>
