<script>
export default {
  name: 'radio-switch',
  props: {
    items: Array,
    name: String,
    modelValue: [Number, String, Object]
  },
  emits: {
    change: null
  },
  methods: {
    radioChange(value) {
      this.$emit('change', value);
    }
  }
}
</script>

<template>
  <div class="radio-switch">
    <label
        v-for="item in items"
        :key="item.value"
        class="radio-switch__label"
        :class="{'radio-switch__label_active' : item.value === modelValue}"
    >
      <input
          type="radio"
          class="radio-switch__input"
          :name="name"
          :value="item.value"
          @change="radioChange(item.value)"
      >
      <span class="radio-switch__text">{{item.title}}</span>
    </label>
  </div>
</template>

<style lang="scss">
  .radio-switch {
    display: flex;
    border: 1px solid $colorGray__300;
    border-radius: 2px;
    overflow: hidden;

    &__label {
      flex-shrink: 0;
      padding: 8px 12px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 38px;

      &:not(:last-child) {
        border-radius: 1px solid $colorGray__300;
      }

      &_active {
        cursor: default;
        background-color: $colorGray__200;
      }
    }

    &__input {
      display: none;
    }
  }
</style>