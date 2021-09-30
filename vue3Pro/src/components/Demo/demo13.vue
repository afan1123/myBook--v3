<script lang="ts">
import { ref } from 'vue';
import { nowTime, getNowTime } from './hooks/useNowTime';
export default {
  name: 'App',
  setup() {
    return {
      nowTime,
      getNowTime,
    };
  },
};
</script>

<template>
  <h1>{{ nowTime }}</h1>
  <div>
    <button @click="getNowTime">click</button>
  </div>
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
