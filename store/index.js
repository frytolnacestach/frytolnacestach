import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  }
});

export default store;