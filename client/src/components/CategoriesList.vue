<script>
import AppButton from '@/components/form/AppButton';

export default {
  name: 'categories-list',
  components: {
    AppButton
  },
  props: {
    list: Array
  },
  emits: {
    modalOpen: null
  },
  data() {
    return {}
  },
  methods: {
    addCategory() {
      this.$emit('modalOpen', 'FormCategory');
    }
  }
}
</script>

<style lang="scss">
.categories-list {
  background-color: $colorWhite;

  &__item {
    display: flex;
    padding: 8px 12px;
    border-bottom: 1px solid $colorGray__200;
  }

  &__name {
    font-size: 15px;
  }
}
</style>

<template>
  <div class="categories-list">
    <ul
        v-if="list && list.length"
        class="categories-list__list"
    >
      <li
          v-for="category in list"
          :key="category._id"
          class="categories-list__item"
      >
        <div class="categories-list__name">{{category.name}}</div>
        {{category}}
        {{category.isParent}}
      </li>
    </ul>

    <div v-else>
      <p>Категории не найдены</p>
    </div>

    <app-button
        text="Создать"
        type="button"
        @click="addCategory"
    />
  </div>
</template>