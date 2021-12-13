import Api from '@/services/api';
const ApiClass = new Api();

export default {
  config: {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    }
  },

  async fetchCategories() {
    const res = await ApiClass.axiosCreate().get('/categories', this.config);
    return res;
  },

  getCategoryById(id) {
    return ApiClass.axiosCreate().get(`/categories/${id}`, this.config);
  },

  addNewCategory(params) {
    return ApiClass.axiosCreate().post('/categories', params, this.config);
  },

  updateCategory(params) {
    return ApiClass.axiosCreate().put(`/categories/${params._id}`, params, this.config);
  },

  removeCategory(id) {
    return ApiClass.axiosCreate().delete(`/categories/${id}`, this.config);
  },




  getSingleCategory(params) {
    return ApiClass.axiosCreate().get(`/categories/${params.name}`, this.config);
  },
}