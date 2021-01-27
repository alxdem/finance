<template>
  <label class="input">
    <span v-if="text" class="input__text">{{ text }}</span>
    <input
        v-bind:type="type"
        class="input__tag"
        v-bind:placeholder="placeholder"
    >
  </label>
</template>

<style lang="scss">
  .input {
    position: relative;

    &__text {
      display: block;
      font-size: 14px;
      margin: 0 0 4px;
      color: $colorGray__900;
    }

    &__tag {
      border: 0;
      padding: 3px 10px;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      color: $colorMain__900;

      &::placeholder {
        color: $colorGray__500;
        font-weight: 300;
      }
    }
  }
</style>

<script>
export default {
  name: 'app-input',
  props: {
    text: {
     type: String,
     default: null
    },
    placeholder: {
     type: String,
     default: null
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>