<template>
  <button v-bind:type="type" class="button">
    {{ text }}
  </button>
</template>

<style lang="scss">
@import './src/styles/variables';
  .button {
    background-color: $colorSecondary;
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
    }
  }
}
</script>