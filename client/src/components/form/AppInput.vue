<template>
  <label class="input">
    <span v-if="text" class="input__text">{{ text }}</span>
    <input
        :type="type"
        :name="name"
        class="input__tag"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>

<style lang="scss">
  .input {
    position: relative;
    display: block;

    &__text {
      display: block;
      font-size: 14px;
      margin: 0 0 4px;
      color: $colorGray__600;
    }

    &__tag {
      //border: 0;
      padding: 3px 10px;
      font-size: 16px;
      height: 40px;
      width: 100%;
      line-height: 40px;
      border-radius: 2px;
      color: $colorMain__900;
      border: 1px solid $colorGray__300;

      &:focus {
        border-color: $colorMain__500;
      }

      &::placeholder {
        color: $colorGray__300;
        font-weight: 300;
      }
    }
  }
</style>

<script>
export default {
  name: 'AppInput',
  props: {
    text: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script>