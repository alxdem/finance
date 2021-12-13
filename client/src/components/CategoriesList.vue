<script>
import AppButton from '@/components/form/AppButton';
import CategoryCard from '@/components/CategoryCard';

export default {
  name: 'categories-list',
  components: {
    AppButton,
    CategoryCard
  },
  props: {
    list: Array
  },
  emits: {
    modalOpen: null,
    removeCategory: null,
    editCategory: null,
  },
  data() {
    return {}
  },
  methods: {
    addCategory() {
      this.$emit('modalOpen', 'FormCategory');
    },
    removeCategory(id) {
      this.$emit('removeCategory', id);
    },
    editCategory(params) {
      this.$emit('editCategory', {
        modalName: 'FormCategory',
        params
      });
    },
    getChildrenCategory(array) {
      const arr = [];

      this.list.forEach(item => {
        array.forEach(it => {
          if (item._id === it) {
            arr.push(item);
          }
        });
      });

      return arr;
    },
    getAllParentCategories() {
      return this.list.filter(category => category.parent === '');
    }
  }
}
</script>

<template>
  <div class="categories-list">
    <ul
        v-if="list && list.length"
        class="categories-list__list"
    >
      <li
          v-for="category in getAllParentCategories()"
          :key="category._id"
          class="categories-list__item"
      >
        <category-card
            :title="category.name"
            :type="category.type"
            :id="category._id"
            :parent-id="category.parent"
            @remove-card="removeCategory"
            @edit-card="editCategory"
        />

        <ul class="categories-list__children" v-if="category.children.length">
          <li :key="child" v-for="child in getChildrenCategory(category.children)">
            <category-card
                :title="child.name"
                :type="child.type"
                :id="child._id"
                :parent-id="child.parent"
                @remove-card="removeCategory"
                @edit-card="editCategory"
            />
          </li>
        </ul>
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

<style lang="scss">
.categories-list {
  background-color: $colorWhite;

  &__item {
    padding: 8px 12px;
    border-bottom: 1px solid $colorGray__200;
  }

  &__name {
    font-size: 15px;
  }

  &__children {
    padding-left: 30px;
  }
}
</style>