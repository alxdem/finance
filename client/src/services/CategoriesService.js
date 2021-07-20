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
  addNewCategory(params) {
    return ApiClass.axiosCreate().post('/categories', params, this.config);
  }
}