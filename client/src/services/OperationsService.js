import Api from '@/services/api';
const ApiClass = new Api();

export default {
  fetchOperations() {
    return ApiClass.axiosCreate().get('/api/operations') // Умеет склеивать адрес, получим: http://localhost:8081/operations
  },
  addNewOperation(params) {
    return ApiClass.axiosCreate().post('/api/operations', params);
  }
}