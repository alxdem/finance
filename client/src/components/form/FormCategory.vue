<script>
import CategoriesService from '@/services/CategoriesService';
import AppField from '@/components/form/AppField';
import AppButton from '@/components/form/AppButton';
import AppSelect from '@/components/form/AppSelect';
import RadioSwitch from '@/components/form/RadioSwitch';
import categoriesMethods from '@/utils/categoriesMethods';

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
    categories: Array,
    params: Object
  },
  CATEGORY_TYPE_LIST: [
    {
      title: 'Расходная',
      value: false
    },
    {
      title: 'Доходная',
      value: true
    }
  ],
  data() {
    return {
      userId: null,
      name: '',
      operationType: false,
      parent: '',
      parentOld: null, // Для сохранения предыдущей категории
      categoriesList: [],
    }
  },
  computed: {
    // Сортирую родительские категории для селекта
    parentCategoriesSort() {
      const parentArr = Array.from(this.categoriesList).filter(item => item.parent === '');

      return parentArr;
    }
  },
  methods: {
    categoryTypeChange(value) {
      this.operationType = value ? value : false;
    },
    categoryParentChange(newCategory) {
      this.parent = newCategory || '';
    },
    formParamsSet() {
      if (this.params.parentId) {
        this.$nextTick()
        .then(() => {
          this.parent = this.params.parentId;
          this.parentOld = this.params.parentId;
        });
      }

      if (this.params.title) {
        this.name = this.params.title;
      }

      if (this.params.type) {
        this.operationType = this.params.type;
      }
    },
    async submit() {
      this.userId = localStorage.getItem('userId');
      const promiseArray = [];

      const params = {
        userid: this.userId,
        name: this.name,
        type: this.operationType,
        parent: this.parent || ''
      };

      if (this.params && this.params.id) {
        params._id = this.params.id;

        const promiseUpdate = await CategoriesService.updateCategory(params);
        promiseArray.push(promiseUpdate);

        console.log('promiseUpdate', promiseUpdate);

        // this.params.id - id редактируемой категории
        if (this.parent && this.params.id) {
          const promiseSetChildrenCategory = await categoriesMethods.setChildrenCategory(this.parent, this.params.id);
          const promiseRemoveFromChildren = await categoriesMethods.removeFromChildrenList(this.parentOld, this.params.id);

          promiseArray.push(promiseSetChildrenCategory);
          promiseArray.push(promiseRemoveFromChildren);

          Promise.all(promiseArray)
          .then(res => {
            console.log('Выполнил все промисы', res);
          });
        } else if (!this.parent && this.params.id) {
          // Если у дочерней категории оставить пустым селект с родительской категорией
          const promiseRemove = await categoriesMethods.removeFromChildrenList(this.parentOld, this.params.id);

          console.log('promiseRemove', promiseRemove);
        }

        // 1. [x] Удалять из предыдущей родительской
        // 2. [x] Ловить оба промиса и выдавать сообщение об успехе
        // 3. [ ] При удалении категории, удалять ее из родителей
        // 4. [x] При редактировании выбрать пустое поле, то удалять из родителя
        // 5. [ ] Запретить удаление категории, если в ней есть дочерние
      } else {
        try {
          const promiseAddNew = await CategoriesService.addNewCategory(params);
          const name = promiseAddNew.data.name;
          promiseArray.push(promiseAddNew);

          if (promiseAddNew.data._id && this.parent) {
            const promiseSetChildrenCategory = await categoriesMethods.setChildrenCategory(this.parent, promiseAddNew.data._id);
            promiseArray.push(promiseSetChildrenCategory);
          }

          Promise.all(promiseArray)
          .then(res => {
            console.log(`Новая категория ${name} создана`, res);
          });
        } catch (err) {
          console.log('Ошибка при создании категории', err);
        }
      }
    },
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
    const arr = [];
    Array.from(this.categories).forEach(item => {
      const elem = {
        label: item.name,
        value: item._id,
        parent: item.parent,
      };
      arr.push(elem);
    });

    this.categoriesList = Array.from(arr);
    this.formParamsSet();
  },
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
          :list="parentCategoriesSort"
          :model-value="parent"
          @update="categoryParentChange"
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