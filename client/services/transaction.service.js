import http from '../http-common';
import authHeader from './auth-header';

class TransactionService {
  getAll() {
    return http.get('/transaction/all');
  }
  delete(id) {
    return http.delete(`/transaction/delete/${id}`);
  }
  async getImageById(id) {
    const auth = await authHeader();
    return http.get(`/expense/expenseImage/${id}`, { headers: auth });
  }
}

export default new TransactionService();
