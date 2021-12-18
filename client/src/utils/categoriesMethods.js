import CategoriesService from '@/services/CategoriesService';

export default {
  async removeFromChildrenList(parentId, childId) {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      console.log('userId не получен');

      return;
    }

    if (parentId && childId && userId) {
      const res = await CategoriesService.getCategoryById(parentId);
      const childrenArr = await res.data.children;

      if (childrenArr.includes(childId)) {
        const newChildrenArr = childrenArr.filter(item => item !== childId);

        const parentParams = {
          userid: userId,
          _id: res.data._id,
          name: res.data.name,
          type: res.data.type,
          parent: '',
          children: newChildrenArr
        };
        const parentRes = await CategoriesService.updateCategory(parentParams);
        console.log('removeFromChildrenList', parentRes);
      }
    }
  },

  async setChildrenCategory(parentId, childId) {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      console.log('userId не получен');

      return;
    }

    if (parentId && childId && userId) {
      const res = await CategoriesService.getCategoryById(parentId);
      const childrenArr = await res.data.children;

      if (!childrenArr.includes(childId)) {
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
        console.log('setChildrenCategory', parentRes)
      }
    }
  },

  async removeCategory(id) {
    if (!id) {
      console.log('Id категории не получен');

      return;
    }

    try {
      const promiseCategory = await CategoriesService.getCategoryById(id);
      const parentId = promiseCategory.data.parent || null;
      let promiseRemoveFromChildren = null;

      if (parentId) {
        promiseRemoveFromChildren = await this.removeFromChildrenList(parentId, id);
      }

      const promiseRemove = await CategoriesService.removeCategory(id);
      const promiseNewCategories = await CategoriesService.fetchCategories();

      return await Promise.all([promiseRemove, promiseRemoveFromChildren, promiseNewCategories]);
    } catch (err) {
      console.log('Ошибка при удалении категории', err);
    }
  },

  async addNewCategory(params, parentId) {
    if (params.userid && params.name && params.type) {
      console.log('Получены не все параметры');

      return;
    }

    try {
      let promiseSetChildrenCategory = null;
      const promiseAddNew = await CategoriesService.addNewCategory(params);

      if (promiseAddNew.data._id && parentId) {
        promiseSetChildrenCategory = await this.setChildrenCategory(parentId, promiseAddNew.data._id);
      }

      return await Promise.all([promiseAddNew, promiseSetChildrenCategory]);
    } catch (err) {
      console.log('Ошибка при создании категории', err);
    }
  }
}