import http from '../http-common';
import authHeader from './auth-header';
class InvoiceDataService {
  async getAll() {
    const auth = await authHeader();
    return http.get('/income/all', { headers: auth });
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

  async delete(id) {
    const auth = await authHeader();
    return http.delete(`/income/${id}`, { headers: auth });
  }

  deleteAll() {
    return http.delete(`/invoices`);
  }

  findByTitle(title) {
    return http.get(`/invoices?title=${title}`);
  }
  async invoiceSum(){
    const auth = await authHeader();
    return http.get(`/income/sum`,{ headers: auth });
    }
  
 
}

export default new InvoiceDataService();
