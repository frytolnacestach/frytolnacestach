import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    account: []
  },
  mutations: {
    setAccount(state, account) {
      state.account = account;
    }
  }
});

export default store;