<template>
  <div class="app-modal">
    <div class="app-modal__wrapper">
      <div class="app-modal__header">{{title}}</div>
      <div class="app-modal__body">
        <slot>kyky</slot>
      </div>
    </div>
    <div
        class="app-modal__bg"
        @click="modalClose"
    ></div>
  </div>
</template>

<style lang="scss">
  .app-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;

    &__bg {
      background-color: $colorGray__900;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0.5;
      z-index: 1;
    }

    &__wrapper {
      max-width: 90%;
      max-height: 90%;
      min-width: 300px;
      position: relative;
      z-index: 10;
      background-color: $colorWhite;
    }

    &__header {
      padding: 20px;
      background-color: $colorMain__300;
      font-size: 18px;
    }

    &__body {
      padding: 20px;
    }
  }
</style>

<script>
export default {
  name: 'modal',
  props: {
    title: String
  },
  methods: {
    modalClose() {
      this.$store.commit('modalToggle', false);
    }
  }
}
</script>