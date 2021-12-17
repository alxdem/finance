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
  }
}