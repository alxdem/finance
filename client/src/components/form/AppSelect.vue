<script>
import Multiselect from '@vueform/multiselect';

export default {
  name: 'app-select',
  components: {Multiselect},
  props: {
    text: String,
    list: Array
  },
  data() {
    return {
      value: null,
      items: []
    }
  },
  beforeMount() {
    this.items = this.list.forEach(item => {
      const elem = {
        title: item.name,
        value: item._id,
      };

      return elem;
    });
  }
}
</script>

<template>
  <span v-if="text" class="field__text">{{ text }}</span>
  <Multiselect
      class="app-select"
      v-model="value"
      :options="list"
      :clear-on-select="false"
      :searchable="false"
      :allow-empty="false"
  />
</template>

<style lang="scss">
  .app-select {
    .multiselect-input {
      padding: 3px 10px;
      font-size: 16px;
      height: 40px;
      width: 100%;
      line-height: 40px;
      border-radius: 2px;
      color: $colorMain__900;
      border: 1px solid $colorGray__300;
    }

    &_fit {
      width: 100%;
    }
  }
</style>