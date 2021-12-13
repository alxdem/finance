<script>
export default {
  name: 'category-card',
  props: {
    title: String,
    type: Boolean,
    id: String,
    parentId: String
  },
  emits: {
    removeCard: null,
    editCard: null,
  },
  data() {
    return {}
  },
  computed: {
    typeSet() {
      return this.type ? 'Доходная' : 'Расходная';
    }
  },
  methods: {
    edit() {
      this.$emit('editCard', {
        id: this.id,
        title: this.title,
        type: this.type,
        parentId: this.parentId,
      });
    }
  }
}
</script>

<template>
  <div class="category-card">
    <div class="category-card__title">{{ title }}</div>
    <div class="category-card__type">{{ typeSet }}</div>
    <div class="category-card__type">{{ id }}</div>
    <div class="category-card__type">{{ this.parentId }}</div>

    <button
        type="button"
        class="category-card__edit"
        @click="edit"
    >Редактировать</button>

    <button
        type="button"
        class="category-card__remove"
        @click="$emit('removeCard', id)"
    >Удалить</button>
  </div>
</template>

<style lang="scss">
  .category-card {
    display: flex;
    width: 100%;

    &__title {
      width: 33%;
      flex-shrink: 0;
    }

    &__type {
      width: 20%;
    }

    &__remove {
      margin-left: 12px;
    }
  }
</style>