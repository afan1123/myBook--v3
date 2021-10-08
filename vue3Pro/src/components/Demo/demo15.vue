<template>
  <div>
    <input type="text" :value="inputValue" @input="changeValue" />
    <button @click="() => submit(inputValue)">click</button>
  </div>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
      <span @click="deleteItem(index)">*</span>
    </li>
  </ul>
</template>
<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const inputValue = ref('1');
    const list = reactive([]);
    const changeValue = (e) => {
      inputValue.value = e.target.value;
    };
    const submit = (value) => {
      list.push(value);
    };
    const deleteItem = (index) => {
      list.splice(index, 1);
      console.log(list);
    };
    return { list, inputValue, changeValue, submit, deleteItem };
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
