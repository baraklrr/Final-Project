import http from '../http-common';

class TransactionService {
  getAll() {
    return http.get('/transaction/all');
  }
  delete(id) {
    return http.delete(`/transaction/delete/${id}`);
  }
}

export default new TransactionService();
