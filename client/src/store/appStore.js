const appStore = {
  state() {
    return {
      isModalShow: false
    }
  },
  mutations: {
    modalToggle(state, isShow) {
      state.isModalShow = isShow
    }
  }

};

export default appStore;