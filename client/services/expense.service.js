import http from '../http-common';
import authHeader from './auth-header';

class ExpenseDataService {
  getAll() {
    return http.get('/expense/total');
  }

  async getCategories() {
    const auth = await authHeader();
    return http.get('/expense/categories', { headers: auth });
  }

  get(id) {
    return http.get(`/expense/${id}`);
  }

  async create(data) {
    const auth = await authHeader();
    return http.post('/expense/create', data, { headers: auth });
  }

  async addCategory(data) {
    const auth = await authHeader();
    return http.post('/expense/addCategory', data, { headers: auth });
  }

  update(id, data) {
    return http.put(`/expense/${id}`, data);
  }

  updateCategory(id, data) {
    return http.put(`/expense/updateCategory/${id}`, data);
  }

  getexpenseTypeById (id) {
    return http.get(`/expense/getexpenseTypeById/${id}`);
  }

  delete(id) {
    return http.delete(`/expense/${id}`);
  }

  deleteCategory(id) {
    return http.delete(`/expense/deleteCategory/${id}`);
  }

  deleteAll() {
    return http.delete(`/expense`);
  }

  findByTitle(title) {
    return http.get(`/expense?title=${title}`);
  }

  async exppenseSum() {
    const auth = await authHeader();
    return http.get(`/expense/sum`, { headers: auth });
  }

  async exppenseVatSum() {
    const auth = await authHeader();
    return http.get(`/expense/vatSum`, { headers: auth });
  }

  async exppenseIrsSum() {
    const auth = await authHeader();
    return http.get(`/expense/irsSum`, { headers: auth });
  }

  async getbyMonthSum() {
    const auth = await authHeader();
    return http.get(`/expense/grouped-by-months`, { headers: auth });
  }
}

export default new ExpenseDataService();
