const appStore = {
  state() {
    return {
      isModalShow: false,
      modalTitle: '',
      modalCurrentComponent: ''
    }
  },
  mutations: {
    modalToggle(state, isShow) {
      state.isModalShow = isShow
    },
    modalSetTitle(state, title) {
      state.modalTitle = title;
    },
    modalComponentSet(state, name) {
      state.modalCurrentComponent = name;
    }
  }

};

export default appStore;