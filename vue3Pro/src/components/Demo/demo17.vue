<template>
  <h1>{{ nameObj.name }}</h1>
  <input type="text" v-model="nameObj.name" />
  <h1>{{ ageObj.age }}</h1>
  <input type="text" v-model="ageObj.age" />
</template>
<script>
import { reactive, ref, watch, watchEffect } from 'vue';
export default {
  setup() {
    // const name = ref('jack');
    const nameObj = reactive({ name: 'jack' });
    const ageObj = reactive({ age: 18 });
    const stop = watchEffect(() => {
      console.log(nameObj.name);
    });
    setTimeout(() => {
      stop();
    }, 2000);
    // watch(
    //   [() => nameObj.name, () => ageObj.age],
    //   ([newName, newAge], [oldName, oldAge]) => {
    //     console.log(newName);
    //     console.log(newAge);
    //     console.log(oldName);
    //     console.log(oldAge);
    //   },
    // {
    // immediate:true
    // }
    // );
    return { nameObj, ageObj };
  },
};
</script>

<style scoped></style>
