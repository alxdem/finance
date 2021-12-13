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
    modalOpen: null,
    removeCategory: null,
    editCategory: null,
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
    },
    removeCategory(id) {
      this.$emit('removeCategory', id);
    },
    editCategory(params) {
      this.$emit('editCategory', params);
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
        @removeCategory="removeCategory"
        @editCategory="editCategory"
    />
  </section>
</template>