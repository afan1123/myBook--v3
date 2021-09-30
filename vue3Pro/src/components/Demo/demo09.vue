<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
interface DataType {
  girls: string[];
  selectedGril: string;
  selectedFun: (index: number) => void;
}
export default {
  name: 'App',
  setup() {
    const data: DataType = reactive({
      girls: ['小姐姐A', '小姐姐B', '小姐姐C'],
      selectedGril: '',
      selectedFun: (index: number) => {
        data.selectedGril = data.girls[index];
      },
    });
    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <h1>welcome</h1>
  <span>请选择</span>
  <button
    @click="selectedFun(index)"
    v-for="(item, index) in girls"
    :key="index"
  >
    {{ index }}---{{ item }}
  </button>
  您选择了：{{ selectedGril }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
