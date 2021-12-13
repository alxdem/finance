<script>
import Multiselect from '@vueform/multiselect';

export default {
  name: 'app-select',
  components: {Multiselect},
  inheritAttrs: false,
  props: {
    text: String,
    list: Array,
    modelValue: {
      type: [String, Object],
      default: null
    },
  },
  emits: {
    update: null,
  },
  data() {
    return {
      localValue: null,
    }
  },
  methods: {
    change(e) {
      this.$emit('update', e)
    }
  },
  watch: {
    modelValue() {
      console.log('ch')
      this.localValue = this.modelValue;
    }
  }
}
</script>

<template>
  <span v-if="text" class="field__text">{{ text }}</span>
{{localValue}}
  <Multiselect
      class="app-select"
      v-model="localValue"
      :options="list"
      :clear-on-select="false"
      :searchable="false"
      :allow-empty="false"
      @input="(e) => change(e)"
  />
</template>

<style lang="scss">
  .app-select {
    &.multiselect {
      border: 1px solid $colorGray__300;
      border-radius: 2px;

      &.is-active {
        outline: none;
        box-shadow: none;
      }
    }

    .multiselect-single-label {
      padding: 3px 10px;
      font-size: 16px;
      height: 40px;
      width: 100%;
      line-height: 40px;
      border-radius: 2px;
      color: $colorMain__900;
    }

    .multiselect-option {
      padding: 3px 10px;
      font-size: 16px;
      height: 40px;
      width: 100%;
      line-height: 40px;
      border-radius: 2px;
      color: $colorMain__900;
    }

    &_fit {
      width: 100%;
    }

    .multiselect-option {
      &:hover {
        color: $colorMain__900;
        background-color: $colorMain__300;
        cursor: default;
      }

      &.is-selected {
        color: $colorMain__900;
        background-color: $colorGray__100;

        &.is-pointed {
          color: $colorMain__900;
          background-color: $colorGray__100;
        }

        &:hover {
          color: $colorMain__900;
          background-color: $colorGray__100;
          cursor: default;
        }
      }
    }
  }
</style>