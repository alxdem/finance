<script>
import CategoriesService from '@/services/CategoriesService';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Modal from "@/components/Modal";
import FormOperation from '@/components/form/FormOperation';
import FormCategory from '@/components/form/FormCategory';

export default {
  name: 'main-layout',
  components: {
    Sidebar,
    Header,
    Modal,
    FormOperation,
    FormCategory
  },
  data() {
    return {
      name: 'MainLayout',
      isModalShow: false,
      currentFormComponent: 'FormOperation', // Меняю компонент, который открываю в модалке
      categoriesList: [], // Список категорий. Храню в верхнем компоненте, чтобы был доступ во всех дочерних,
      modalParams: {}, // Прокидываю параметры для каждой модалки (форм)
    }
  },
  methods: {
    async getCategories() {
      return await CategoriesService.fetchCategories();
    },
    async removeCategory(id) {
      return await CategoriesService.removeCategory(id);
    },
    modalOpen(modalName) {
      if (modalName) {
        this.currentFormComponent = modalName;
      }

      this.isModalShow = true;
    },
    modalClose() {
      this.isModalShow = false;
      this.modalParams = {};
    },
    categoryRemove(id) {
      this.removeCategory(id)
          .then(res => {
            this.getCategories().then((res) => {
              this.categoriesList = res.data;
            });
            console.log('--', res);
          });
    },
    categoryEdit(info) {
      if (info.modalName && info.params) {
        this.currentFormComponent = info.modalName;
        this.modalParams = info.params;
        this.isModalShow = true;
      }
    }
  },
  created() {
    this.getCategories().then((res) => {
      this.categoriesList = res.data;
    });
  }
}
</script>

<template>
  <div class="main-layout">
    <div class="main-layout__sidebar">
      <Sidebar
        @modalOpen="modalOpen"
      />
    </div>
    <div class="main-layout__wrapper">
      <div class="main-layout__header">
        <Header/>
      </div>

      <router-view
          :categories="categoriesList"
          @modalOpen="modalOpen"
          @removeCategory="categoryRemove"
          @editCategory="categoryEdit"
      />
    </div>
    <Modal
        :is-open="isModalShow"
        title="Заголовок модалки"
        @close="modalClose"
    >
      <component
          :is="currentFormComponent"
          :categories="categoriesList"
          :params="modalParams"
      ></component>
    </Modal>
  </div>
</template>

<style lang="scss">
  .main-layout {
    display: flex;
    min-height: 100vh;
    background-color: $colorGray__200;

    &__sidebar {
      width: 300px;
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      box-shadow: 0 2px 8px 2px rgba($colorGray__600, 0.13);
    }

    &__wrapper {
      flex-grow: 1;
    }

    &__header {
      height: $headerHeight;
    }
  }
</style>