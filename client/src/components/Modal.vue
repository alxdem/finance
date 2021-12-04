<script>
export default {
  name: 'modal',
  props: {
    title: String,
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: null
  },
  methods: {
    close() {
      this.$emit('close');
    },
    keyPress(e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.keyPress);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.keyPress);
  }
}
</script>

<template>
  <div v-if="isOpen" class="app-modal" @click="close">
    <div class="app-modal__wrapper" @click.stop>
      <div class="app-modal__header">
        <div class="app-modal__title">{{title}}</div>
        <button
            class="app-modal__close"
            @click="close"
        >X</button>
      </div>
      <div class="app-modal__body">
        <slot>kyky</slot>
      </div>
      <div class="app-modal__footer">
        <slot name="footer" :close="close">
          Footer
        </slot>
      </div>
    </div>
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
    background-color: rgba($colorGray__900, 0.5);

    &__wrapper {
      max-width: 90%;
      max-height: 90%;
      min-width: 300px;
      position: relative;
      z-index: 10;
      background-color: $colorWhite;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      background-color: $colorMain__300;
      font-size: 18px;
    }

    &__close {
      margin-left: 16px;
      padding: 4px;
    }

    &__body {
      padding: 20px;
    }

    &__footer {
      padding: 10px;
    }
  }
</style>