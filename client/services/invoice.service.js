import http from '../http-common';
import authHeader from './auth-header';
class InvoiceDataService {
  getAll() {
    return http.get('/invoices');
  }

  get(id) {
    return http.get(`/invoices/${id}`);
  }

  async create(data) {
    const auth = await authHeader();
    return http.post('/income/create', data, { headers: auth });
  }

  update(id, data) {
    return http.put(`/invoices/${id}`, data);
  }

  delete(id) {
    return http.delete(`/invoices/${id}`);
  }

  deleteAll() {
    return http.delete(`/invoices`);
  }

  findByTitle(title) {
    return http.get(`/invoices?title=${title}`);
  }
}

export default new InvoiceDataService();
