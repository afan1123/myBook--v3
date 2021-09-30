<template>
  <h1>Child</h1>
  <h2>{{ theme }}</h2>
  <button @click="">click</button>
</template>
<script lang="ts">
import {
  defineProps,
  ref,
  Ref,
  watch,
  watchEffect,
  inject,
  defineComponent,
} from 'vue';
export default defineComponent({
  name: 'Child',
  setup(props, ctx) {
    const theme = inject('test', 'name:jack');
    watchEffect(() => {
      console.log('主题被修改了', (theme as unknown as Ref<string>).value);
    });
    return {
      theme,
    };
  },
});
</script>
