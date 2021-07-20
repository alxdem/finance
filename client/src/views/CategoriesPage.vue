<template>
  <h1>Categories</h1>
  <section class="list" v-if="categories && categories.length">
    <ul>
      <li v-for="(operation, index) in categories" v-bind:key="index">
        <span>{{ operation }}</span>
      </li>
    </ul>
  </section>

  <section class="list" v-else>
    <p>Категории не найдены</p>
  </section>

  <AppButton
      text="Создать"
      type="button"
      @click.prevent="addCategory"
  />

</template>

<script>
import CategoriesService from '@/services/CategoriesService';
import AppButton from '@/components/form/AppButton';

export default {
  name: 'Categories',
  components: {AppButton},
  data() {
    return {
      categories: [],
      operation: {
        userId: null,
        value: '',
        description: ''
      }
    }
  },
  created() {
    this.getCategories().then((res) => {
      this.categories = res.data;
      this.$store.commit('categoriesSet', JSON.stringify(res.data)); // Строка, иначе Store не понимает что меняется содержимое массива
    });

  },
  methods: {
    async getCategories() {
      return await CategoriesService.fetchCategories();
    },
    addCategory() {
      this.$store.commit('modalSetTitle', 'Создать категорию');
      this.$store.commit('modalToggle', !this.$store.state.isModalShow);
      this.$store.commit('modalComponentSet', 'FormCategory');
    }
  }
}
</script>