<script>
import CategoriesList from '@/components/CategoriesList';

export default {
  name: 'Categories',
  components: {
    CategoriesList
  },
  props: {
    categories: Array
  },
  emits: {
    modalOpen: null
  },
  data() {
    return {
      operation: {
        userId: null,
        value: '',
        description: ''
      }
    }
  },
  methods: {
    modalOpen(modalName) {
      this.$emit('modalOpen', modalName);
    }
  },
}
</script>

<template>
  <h1>Категории</h1>
  <section class="list">
    <categories-list
        :list="categories"
        @modalOpen="modalOpen"
    />
  </section>
</template>