import Api from '@/services/api';
const ApiClass = new Api();

export default {
  config: {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    }
  },

  async fetchOperations() {
    // Умеет склеивать адрес, получим: http://localhost:8081/operations
    const res = await ApiClass.axiosCreate().get('/operations', this.config);
    return res;
  },
  addNewOperation(params) {
    return ApiClass.axiosCreate().post('/operations', params, this.config);
  }
}