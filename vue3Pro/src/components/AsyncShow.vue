<template>
  <h1>{{ result }}</h1>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ result: 'jack' });
      }, 2000);
    });
  },
});
</script>
