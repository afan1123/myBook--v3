<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
} from 'vue';
interface DataType {
  girls: string[];
  selectedGril: string;
  selectedFun: (index: number) => void;
}
export default {
  name: 'App',
  setup() {
    console.log('1----开始创建组件');
    const data: DataType = reactive({
      girls: ['小姐姐A', '小姐姐B', '小姐姐C'],
      selectedGril: '',
      selectedFun: (index: number) => {
        data.selectedGril = data.girls[index];
      },
    });
    const refData = toRefs(data);

    onBeforeMount(() => {
      console.log('2----执行onbeforeMounted');
    });
    onMounted(() => {
      console.log('3-组件挂载到页面之后执行----onMounted');
    });

    onBeforeUpdate(() => {
      console.log('4---组件更新之前执行----onBeforUpdate');
    });
    onUpdated(() => {
      console.log('5----组件跟新之后执行---onUodated');
    });
    return {
      ...refData,
    };
  },
  beforeCreate() {
    console.log('1.1------组件创建执行-----beforeCreated');
  },
  created() {
    console.log('1.2------组件创建执行-----created');
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
