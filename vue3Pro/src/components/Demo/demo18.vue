<template>
  <div ref="hello">{{ myName }}</div>
  <button @click="clickBtn">click</button>
  <router-view></router-view>
</template>
<script>
import { reactive, ref, onMounted, computed, toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
  computed: {},
  setup() {
    const hello = ref(null);
    const store = useStore();
    onMounted(() => {
      console.log(hello.value);
    });
    const clickBtn = () => {
      store.dispatch('changeName', 'rose');
    };
    const myName = toRefs(store.state).name;
    return { hello, clickBtn, myName };
  },
};
</script>

<style scoped></style>
