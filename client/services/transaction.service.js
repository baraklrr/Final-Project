import http from '../http-common';

class TransactionService {
  getAll() {
    return http.get('/transaction/all');
  }
}

export default new TransactionService();
