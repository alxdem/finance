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
          v-model="category.value"
      />
    </div>

    <div class="form__row">
      <AppSelect
          text="Подкатегория для"
          :list="this.operationsList"
          v-model="category.operationType"
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

<script>
import CategoriesService from '@/services/CategoriesService';
import AppField from '@/components/form/AppField';
import AppButton from "@/components/form/AppButton";
import AppSelect from "@/components/form/AppSelect";

export default {
  name: 'form-category',
  components: {
    AppButton,
    AppField,
    AppSelect
  },
  props: {
    text: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      category: {
        userId: null,
        value: '',
        operationType: 0,
        parent: null
      },
      operationsList: [
        {value: 0, label: '-', active: true},
      ]
    }
  },
  beforeMount() {
    // this.operationsList = this.operationsList.concat(this.$store.getters.categoriesGet);
    console.log('this.operationsList', this.operationsList);
  },
  methods: {
    async submit() {
      this.category.userId = localStorage.getItem('userId');
      const res = await CategoriesService.addNewCategory({
        userid: this.category.userId,
        name: this.category.value,
        operationType: this.category.operationType,
        isParent: !this.parent
      })
      console.log(res);
      console.log(this.category);
    },
  }
}
</script>