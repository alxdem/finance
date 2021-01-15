import api from '@/services/api';

export default {
  fetchOperations() {
    return api().get('operations') // Умеет склеивать адрес, получим: http://localhost:8081/operations
  },
  addNewOperation(params) {
    return api().post('operations', params);
  }
}