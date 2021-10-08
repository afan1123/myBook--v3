<template>
  <h1>{{ count }}</h1>
  <h1>{{ countAddFive }}</h1>
  <button @click="addCount">click</button>
</template>
<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const addCount = () => {
      count.value++;
    };
    let countAddFive = computed({
      get: () => {
        return count.value + 5;
      },
      set: (param) => {
        return (count.value = param - 10);
      },
    });
    setTimeout(() => {
      countAddFive.value = 1000;
    }, 3000);
    return { count, addCount, countAddFive };
  },
};
</script>

<style scoped>
li {
  width: 200px;
  overflow: hidden;
}
li > span {
  color: red;
  float: right;
}
span :hover {
  cursor: pointer;
}
</style>
