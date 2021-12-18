<script>
import CategoriesService from '@/services/CategoriesService';
import CategoriesMethods from '@/utils/categoriesMethods';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Modal from "@/components/Modal";
import FormOperation from '@/components/form/FormOperation';
import FormCategory from '@/components/form/FormCategory';
import FormConfirm from '@/components/form/FormConfirm';

export default {
  name: 'main-layout',
  components: {
    Sidebar,
    Header,
    Modal,
    FormOperation,
    FormCategory,
    FormConfirm
  },
  data() {
    return {
      name: 'MainLayout',
      isModalShow: false,
      currentFormComponent: 'FormOperation', // Меняю компонент, который открываю в модалке
      categoriesList: [], // Список категорий. Храню в верхнем компоненте, чтобы был доступ во всех дочерних,
      modalParams: {}, // Прокидываю параметры для каждой модалки (форм),
      modalText: '', // Текст для формы в модальном окне
      modalTitle: '', // Заголовок для формы. Если нет - не показываю шапку модалки
    }
  },
  methods: {
    async getCategories() {
      return await CategoriesService.fetchCategories();
    },
    async removeCategory(id) {
      return await CategoriesService.removeCategory(id);
    },
    modalOpen(params) {
      this.currentFormComponent = params.name ? params.name : 'FormOperation';
      this.modalTitle = params.title ? params.title : '';

      this.isModalShow = true;
    },
    modalClose() {
      this.isModalShow = false;
      this.modalParams = {};
    },
    async modalConfirm(params) {
      // Если удаляем категорию и есть ее id
      if (params.isCategoryRemove && params.categoryId) {
        await CategoriesMethods.removeCategory(params.categoryId);
        const promiseNewCategories = await this.getCategories();

        this.categoriesList = promiseNewCategories.data;
        this.modalClose();
      }
    },
    categoryRemoveModalOpen(id) {
      // Здесь вызвать модалку с подтверждением удаления
      this.modalText = 'Подтвердите удаление категории';
      this.modalParams = {
        categoryId: id,
        isCategoryRemove: true
      };
      this.modalOpen({
        name: 'FormConfirm',
        title: ''
      });
    },
    categoryEdit(params = {}) {
      this.currentFormComponent = params.name ? params.name : 'FormOperation';
      this.modalTitle = params.title ? params.title : '';
      this.modalParams = params.params ? params.params : '';
      this.isModalShow = true;
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
          @removeCategory="categoryRemoveModalOpen"
          @editCategory="categoryEdit"
      />
    </div>
    <Modal
        :is-open="isModalShow"
        :title="modalTitle"
        @close="modalClose"
    >
      <component
          :is="currentFormComponent"
          :categories="categoriesList"
          :params="modalParams"
          :text="modalText"
          @close="modalClose"
          @confirm="modalConfirm"
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