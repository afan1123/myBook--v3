import { createStore } from 'vuex';
export default createStore({
  state: {
    name: 'jack',
    user: {
      userName: '',
      password: '',
    },
  },
  // 同步代码
  mutations: {
    // commit 和 mutations 做关联
    changeName(state, name) {
      state.name = name;
    },
    changeUser(state, user) {
      state.user = user;
    },
  },
  // 异步代码
  actions: {
    // dispatch 和 actions 做关联
    changeName(store, name) {
      console.log(name);
      store.commit('changeName', name);
    },
  },
  modules: {},
});
