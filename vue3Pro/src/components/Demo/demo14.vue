<script lang="ts">
import { ref } from 'vue';
// import useURLAxios from './hooks/useURLAxios';
import modal from './components/Modal.vue';
import AsyncShowVue from './components/AsyncShow.vue';
export default {
  name: 'App',
  components: {
    modal,
    AsyncShowVue,
  },
  setup() {
    const result = ref('rose');
    // const { result, loading, loaded } = useURLAxios('http://127.0.0.1:3001');
    // return { result, loading, loaded };
    return { result };
  },
};
</script>

<template>
  <!-- <h1>welcome to World</h1> -->
  <modal></modal>
  <Suspense>
    <template #default>
      <AsyncShowVue></AsyncShowVue>
    </template>
    <template #fallback>
      <h1>loading</h1>
    </template>
  </Suspense>
  <!-- <div v-if="loading">loading...</div>
  <div v-if="loaded">
    {{ result }} -->
  <!-- </div> -->
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
