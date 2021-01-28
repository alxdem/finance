<template>
  <button v-bind:type="type" class="button" v-bind:class="{ button_fit: isFit }">
    {{ text }}
  </button>
</template>

<style lang="scss">
  .button {
    background-color: $colorGray__200;
    padding: 7px 15px;
    min-height: 40px;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;

    &_fit {
      width: 100%;
    }
  }
</style>

<script>
export default {
  name: 'app-button',
  props: {
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'button'
    },
    isFit: {
      type: Boolean,
      default: false
    }
  }
}
</script>