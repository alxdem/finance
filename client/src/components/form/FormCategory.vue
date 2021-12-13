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
      parent: {a:1, b:2},
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
      this.parent = newCategory;
    },
    formParamsSet() {
      if (this.params.parentId) {
        this.$nextTick()
        .then(() => {
          this.parent = this.params.parentId;
        });
      }

      if (this.params.title) {
        this.name = this.params.title;
      }

      if (this.params.type) {
        this.operationType = this.params.type;
      }
    },
    async setChildrenCategory(parentId, childId) {
      const res = await CategoriesService.getCategoryById(parentId);
      const childrenArr = await res.data.children;

      if (childId && !childrenArr.includes(childId)) {
        childrenArr.push(childId);

        const parentParams = {
          userid: this.userId,
          _id: res.data._id,
          name: res.data.name,
          type: res.data.type,
          parent: '',
          children: childrenArr
        };
        const parentRes = await CategoriesService.updateCategory(parentParams);
      }
    },
    async submit() {
      this.userId = localStorage.getItem('userId');

      const params = {
        userid: this.userId,
        name: this.name,
        type: this.operationType,
        parent: this.parent
      };

      if (this.params && this.params.id) {
        params._id = this.params.id;
        CategoriesService.updateCategory(params)
            .then(() => {
              if (this.parent && this.params.id) {
                this.setChildrenCategory(this.parent, this.params.id);
                // 1. Удалять из предыдущей родительской
                // 2. Ловить оба промиса и выдавать сообщение об успехе
              }
            })
            .catch(err => {
              console.log(err);
            })
      } else {
        CategoriesService.addNewCategory(params)
            .then(res => {
              if (res.data._id && this.parent) {
                this.setChildrenCategory(this.parent, res.data._id)
              }
            })
            .catch(err => {
              console.log(err);
            })
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