const appStore = {
  state() {
    return {
      isModalShow: false,
      modalTitle: '',
      modalCurrentComponent: '',
      categories: ''
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
    },
    categoriesSet(state, appArray) {
      state.categories = appArray;
    }
  },
  getters: {
    categoriesGet: state => {
      return JSON.parse(state.categories);
    }
  }
};

export default appStore;