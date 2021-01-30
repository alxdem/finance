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
    />
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

export default {
  name: 'main-layout',
  components: {
    Sidebar,
    Header,
    Modal
  },
  data() {
    return {
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