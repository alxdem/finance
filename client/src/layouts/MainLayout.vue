<template>
  <div class="main-layout">
    <div class="main-layout__sidebar">
      <Sidebar/>
    </div>
    <div class="main-layout__wrapper">
      <div class="main-layout__header">
        <Header/>
      </div>

      <router-view />
    </div>
    <Modal
        v-if="isModalShow"
        :title="this.$store.state.modalTitle"
    >
      <template v-slot:header>
        <h1>Здесь мог быть заголовок страницы</h1>
      </template>
      <component v-bind:is="this.$store.state.modalCurrentComponent"></component>
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
<script>
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
      name: 'MainLayout'
      // isModalShow: this.$store.state.isModalShow
    }
  },
  computed: {
    isModalShow() {
      return this.$store.state.isModalShow;
    }
  }
}
</script>