<script>
import CategoriesService from '@/services/CategoriesService';
import AppField from '@/components/form/AppField';
import AppButton from '@/components/form/AppButton';
import AppSelect from '@/components/form/AppSelect';
import RadioSwitch from '@/components/form/RadioSwitch';

export default {
  name: 'form-category',
  components: {
    AppButton,
    AppField,
    AppSelect,
    RadioSwitch
  },
  props: {
    text: {
      type: String,
      default: null
    },
    categories: Array
  },
  CATEGORY_TYPE_LIST: [
    {
      title: 'Расходная',
      value: 0
    },
    {
      title: 'Доходная',
      value: 1
    }
  ],
  data() {
    return {
      userId: null,
      name: '',
      operationType: 0,
      parent: null,
      categoriesList: [],
    }
  },
  watch: {
    categories: {
      deep: true,
      handler() {
        console.log('5', this.categories);
      }
    }
  },
  beforeMount() {
    // this.categoriesList = this.categoriesList.concat(this.$store.getters.categoriesGet);
    this.categoriesList = this.categories.forEach(item => {
      const elem = {
        title: item.name,
        value: item._id,
      };

      return elem;
    });

    console.log('beforeMount', this.categories);
  },
  methods: {
    categoryTypeChange(value) {
      this.operationType = value ? value : 0;
    },
    async submit() {
      this.userId = localStorage.getItem('userId');
      const res = await CategoriesService.addNewCategory({
        userid: this.userId,
        name: this.name,
        operationType: this.operationType,
        isParent: !this.parent
      })
      console.log(res);
    },
  }
}
</script>

<template>
  <form
      class="form-category form"
      action="/"
      @submit.prevent="submit"
  >
    <div class="form__row">
      <AppField
          id="value"
          type="text"
          text="Название"
          v-model="name"
      />
    </div>
    <div class="form__row">
      <AppSelect
          text="Подкатегория для"
          :list="categoriesList"
          v-model="operationType"
      />
    </div>

    <div class="form__row">
      <radio-switch
          :items="$options.CATEGORY_TYPE_LIST"
          name="category-type"
          v-model="operationType"
          @change="categoryTypeChange"
      />
    </div>

    <AppButton
      text="Сохранить"
      type="submit"
    />
  </form>
</template>

<style lang="scss">

</style>